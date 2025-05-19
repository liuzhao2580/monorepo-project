import { removeToken, removeUserId } from "./modules/commonSave";
import { appStore } from "@/store/app";
/** 退出登录之前, 清除保存的数据 */
export const clearLoginData = () => {
  removeToken();
  removeUserId();
};

/**
 * token 过期，用户需要重新登录，并且清除掉部分数据
 */
export const tokenExpired = () => {
  appStore.changeReLogin(true);
  logoutClearUtils();
};

/** 退出登录--需要清除的数据 */
export const logoutClearUtils = (): void => {
  removeToken();
  removeUserId();
};