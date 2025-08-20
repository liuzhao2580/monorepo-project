import { useEffect } from "react";
import { redirect } from "react-router";
import { Layout } from "antd";
import LayoutHeader from "./components/Header";
import LayoutFooter from "./components/Footer";
import ContentDom from "./components/Content";
import resizeMethods from "../utils/modules/onResize";
import { ROUTE_PATH } from "@/router/RouteConst";
const LayoutDom = () => {
  redirect(ROUTE_PATH.HOME);
  useEffect(() => {
    resizeMethods.onResize();
    resizeMethods.listenResize();
    return () => {
      window.removeEventListener("resize", resizeMethods.onResize);
    };
  }, []);

  return (
    <Layout className="w-100vw h-100vh relative flex flex-col layout-bg-color ">
      <div className="flex layout-header-height layout-header-bg-color">
        <LayoutHeader></LayoutHeader>
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="w-1150px relative p-4 m-auto layout-content-min-height">
          <ContentDom></ContentDom>
        </div>
        <div className="layout-footer-height flex items-center justify-center layout-footer-bg-color font-color-base">
          <LayoutFooter></LayoutFooter>
        </div>
      </div>
    </Layout>
  );
};

export default LayoutDom;
