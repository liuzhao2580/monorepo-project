import { useEffect } from "react";
import { redirect } from "react-router";
import { Layout } from "antd";
import LayoutHeader from "./components/Header";
import LayoutFooter from "./components/Footer";
import ContentDom from "./components/Content";
import resizeMethods from "../utils/modules/onResize";
import { ROUTE_PATH } from "@/router/RouteConst";
const LayoutDom = () => {
  redirect(ROUTE_PATH.DASHBOARD);
  useEffect(() => {
    resizeMethods.onResize();
    resizeMethods.listenResize();
    return () => {
      window.removeEventListener("resize", resizeMethods.onResize);
    };
  }, []);

  return (
    <Layout className="w-100vw h-100vh relative flex flex-col layout-bg-color">
      <div className="flex layout-header-height bg-[#101d37]">
        <LayoutHeader></LayoutHeader>
      </div>
      <div className="flex-1 overflow-y-auto border-radius-base p-4">
        <ContentDom></ContentDom>
      </div>
      <div className="layout-footer-height flex items-center justify-center">
        <LayoutFooter></LayoutFooter>
      </div>
    </Layout>
  );
};

export default LayoutDom;
