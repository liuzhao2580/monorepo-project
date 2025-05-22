import { useEffect } from "react";
import { redirect } from "react-router";
import { Layout } from "antd";
import "./index.scss";
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
    <Layout className="layout-box">
      <LayoutHeader></LayoutHeader>
      <ContentDom></ContentDom>
      <LayoutFooter></LayoutFooter>
    </Layout>
  );
};

export default LayoutDom;
