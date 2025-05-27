import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import Icon from "@ant-design/icons";

import CustomIconCom from "@/components/CustomIcon/index";
import RentalHousingIcon from "@/assets/layout/公租房.svg";
import { routerList } from "@/router/RouteList";
import { observer } from "mobx-react-lite";
import type { IRouterList } from "@/types/router";
import { PawPrintIcon } from "lucide-react";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
    type,
  } as MenuItem;
}

const HeaderMenu = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();
  // 默认选择的侧边栏 当前选中的菜单项 key 数组
  const [selectedKeys, setSelectenMenu] = useState(["/dashboard"]);

  // 初始展开的 SubMenu 菜单项 key 数组
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<Array<any>>([]);

  useMemo(() => {
    const { pathname } = location;
    setSelectenMenu([pathname]);
    const getOpenKeyArr = pathname.split("/");
    const getOpenKey = getOpenKeyArr.length >= 3 ? "/" + getOpenKeyArr[1] : null;
    setDefaultOpenKeys([getOpenKey]);
  }, [location.pathname]);

  let menuItems: MenuItem[] = [];
  // 获取动态的侧边栏
  const getMenu = (routerArr = routerList): MenuItem[] => {
    const menuItemsChild: MenuItem[] = [];
    for (let index = 0; index < routerArr.length; index++) {
      const element = routerArr[index];
      if (element && element.meta) {
        if (!element.meta.hidden) {
          if (!element.children) {
            menuItemsChild.push(getItem(element.meta.title, element.path, handleIcon(element)));
          } else if (element.children) {
            menuItemsChild.push(
              getItem(
                element.meta.title,
                element.path,
                handleIcon(element),
                getMenu(element.children)
              )
            );
          }
        }
      }
    }
    return menuItemsChild;
  };

  /** 处理侧边栏图标 */
  const handleIcon = (item: IRouterList) => {
    if (item.meta && item.meta.icon) {
      if (typeof item.meta.icon === "string") {
        // return <Icon component={RentalHousingIcon} />;
      } else {
        return <item.meta.icon />;
      }
    }
  };
  menuItems = getMenu();
  // 点击侧边栏跳转
  const MenuClick = ({ key }: any) => {
    navigate(key);
  };
  return (
    <div className="flex w-full">
      <PawPrintIcon className="font-color-primary w-1/3" size={40} />
      <Menu
        theme="dark"
        selectedKeys={selectedKeys}
        mode="horizontal"
        onClick={MenuClick}
        defaultOpenKeys={defaultOpenKeys}
        items={menuItems}
        className="flex-1"
      ></Menu>
    </div>
  );
});

export default HeaderMenu;
