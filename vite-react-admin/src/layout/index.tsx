import { useEffect } from "react"
import { Layout, Spin } from "antd"
import "./index.scss"
import SiderDom from "./components/SideBar"
import NavBarDom from "./components/NavBar/"
import ContentDom from "./components/Content"
import resizeMethods from "../utils/modules/onResize"

const LayoutDom = () => {
  useEffect(() => {
    resizeMethods.onResize()
    resizeMethods.listenResize()
    return () => {
      window.removeEventListener("resize", resizeMethods.onResize)
    }
  }, [])
  return (
    <Layout className="layout-box">
      {/* 侧边栏 */}
      {/* <SiderDom /> */}
      {/* 右边内容区域 */}
      <Layout className="site-layout">
        {/* 头部 */}
        <NavBarDom />
        {/* 内容区域 */}
        <ContentDom></ContentDom>
      </Layout>
    </Layout>
  )
}

export default LayoutDom