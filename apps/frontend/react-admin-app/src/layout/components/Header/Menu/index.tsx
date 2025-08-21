import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import Icon from "@ant-design/icons";
import { routerList } from "@/router/RouteList";
import { observer } from "mobx-react-lite";
import type { IRouterList } from "@/types/router";
import Logo from "@/components/Logo";
import City from "./components/City";
import { ROUTE_PATH } from "@/router/RouteConst";
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
  const [selectedKeys, setSelectenMenu] = useState([ROUTE_PATH.HOME]);

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
      return <Icon component={item.meta.icon} />;
    }
  };
  menuItems = getMenu();
  // 点击侧边栏跳转
  const MenuClick = ({ key }: any) => {
    navigate(key);
  };
  return (
    <div className="flex items-center w-full">
      <div className="w-1/3 flex items-center justify-around">
        <Logo className="text-8"></Logo>
        <City></City>
      </div>
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
