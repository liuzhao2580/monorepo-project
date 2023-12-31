import router from "@/router"
import { ROUTE_NAME } from "@/router/RouteConst"
import { removeToken, removeUserId } from "./modules/commonSave"

/** 当前的环境 */
export const BaseEnv = {
  /** 开发 */
  development: "development",
  /** 生产 */
  production: "production",
  /** 测试 */
  test: "test"
}

/** 判断是否是开发环境 */
export const isDev = (): boolean => !!import.meta.env.VITE_DEV

/**
 * token 过期，用户需要重新登录，并且清除掉部分数据
 */
export const tokenExpired = () => {
  logoutClearUtils()
  // 获取当前的路由
  const { value } = router.currentRoute
  // 在登录页面,不需要跳转
  if (value.name !== ROUTE_NAME.LOGIN) {
    router.push({
      name: ROUTE_NAME.LOGIN
    })
  }
}

/** 退出登录--需要清除的数据 */
export const logoutClearUtils = (): void => {
  removeToken()
  removeUserId()
}
