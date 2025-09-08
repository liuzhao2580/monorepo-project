import { Badge, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined, UserOutlined, ExportOutlined, BellOutlined } from "@ant-design/icons";
import { useI18n } from "@pmm/i18n/react";
import { clearLoginData } from "@/utils";
import { userStore } from "@/store/user";
import { ROUTE_PATH } from "@/router/RouteConst";
import MessageDropdown from "./MessageDropdown";
import { appStore } from "@/store/app";
import "./index.scss";
import React from "react";
const Personal = observer(() => {
  const navigate = useNavigate();
  const { t } = useI18n();
  // 点击 菜单项
  const menuClick: MenuProps["onClick"] = (e) => {
    const { key } = e;
    switch (key) {
      // 个人中心
      case "personal":
        navigate("/personal", {
          state: { test: "dashboard" },
        });
        break;
      // 退出登录
      case "logout":
        clearLoginData();
        navigate(ROUTE_PATH.LOGIN);
        break;
      default:
        break;
    }
  };

  const list = [
    { key: "personal", title: t("layout.personalCenter"), icon: <UserOutlined /> },
    { key: "publishHousing", title: t("layout.publishHousing"), iconfont: "icon-publish-house" },
    { key: "logout", title: t("layout.logout"), icon: <ExportOutlined /> },
  ];
  const items: MenuProps["items"] = list.flatMap((item) => {
    const menuItem = {
      key: item.key,
      icon: item.icon && React.cloneElement(item.icon, { style: { fontSize: 16 } }),
      label: (
        <span className="flex items-center">
          {item.iconfont && <i className={`iconfont ${item.iconfont} mr-7px`}></i>}
          {item.title}
        </span>
      ),
    };

    // 在 logout 前插入分割线
    if (item.key === "logout") {
      return [{ type: "divider" as const }, menuItem];
    }

    return [menuItem];
  });
  /** 消息下拉框的改变事件 */
  function messageDropOpen(flag: boolean) {
    if (flag) {
      setTimeout(() => {
        appStore.changeMessageCount(0);
      }, 500);
    }
  }
  return (
    <div className="personal-box">
      <div id="personal-box-icon">
        <div className={`icon-tip ${appStore.messageCount && "message-animation"}`}>
          <Dropdown
            placement="bottom"
            popupRender={MessageDropdown}
            onOpenChange={messageDropOpen}
            getPopupContainer={() => document.getElementById("personal-box-icon") as HTMLElement}
          >
            <Badge size="small" count={appStore.messageCount} overflowCount={10}>
              <BellOutlined className="font-color-base" />
            </Badge>
          </Dropdown>
        </div>
      </div>
      <Dropdown menu={{ items, onClick: menuClick }} trigger={["hover"]}>
        <div
          className="personal-dropdown cursor-pointer"
          style={{ display: "flex", alignItems: "center" }}
        >
          <span className="personal-name">Hi~</span>
          <img className="personal-img" src={userStore.userInfo.avatar} alt="" />
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
});

export default Personal;
