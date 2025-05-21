import axios from "../axiosConfig";
import { ResultModel } from "@pmm/types";
import type { ILoginUser, RegisterUser, IUploadUserInfo, IUserBaseInfo } from "@/types/user";
/** 用户登录 */
export const loginApi = (params: ILoginUser): Promise<ResultModel<IUserBaseInfo>> =>
  axios.post("user/login", params);

/**
 * 用户注册
 */
export const registerApi = (params: RegisterUser): Promise<ResultModel<IUserBaseInfo>> =>
  axios.post("user/register", params);

/** 退出登录 */
export const logoutApi = (): Promise<ResultModel<[]>> => axios.get("user/logout");

/** 获取用户的信息 */
export const getUserInfoApi = (id: string): Promise<ResultModel<IUserBaseInfo>> =>
  axios.get(`user/${id}`);

// /**
//  * 获取用户的频道信息
//  */
// export const channelListApi = (
//   id: string
// ): Promise<ResultModel<IUserChannel[]>> => axios.get(`user/channel/${id}`)

/** 更新用户信息 */
export const updateUserInfoApi = (id: string, params: IUploadUserInfo): Promise<ResultModel<[]>> =>
  axios.post(`user/${id}`, params);
