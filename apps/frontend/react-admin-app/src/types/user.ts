export interface IUserBaseInfo {
  /** 用户 id */
  id: string;
  /** 用户名 */
  userName: string;
  /** 昵称 */
  nickName?: string;
  /** 用户的权限 */
  roleId: number;
  /** 头像 */
  avatar: string;
  /** 性别 true代表 男  false代表女 */
  gender: boolean;
  /** 手机号 */
  phone?: string;
  /** 邮箱 */
  email?: string;
  /** token */
  token?: string;
}

export interface ILoginUser {
  userName: string;
  password: string;
}
export interface RegisterUser {
  userName: string;
  password: string;
  nickName?: string;
}
export interface IUploadUserInfo {
  /** 昵称 */
  nickName?: string;
  /** 头像 */
  avatar?: string;
  /** 性别 true代表 男  false代表女 */
  gender?: boolean;
  /** 手机号 */
  phone?: string;
  /** 邮箱 */
  email?: string;
}

/** 更新用户资料 */
export class MUploadUserInfo implements IUploadUserInfo {
  /** 昵称 */
  nickName?: string;
  /** 头像 */
  avatar?: string;
  /** 性别 true代表 男  false代表女 */
  gender?: boolean;
  /** 手机号 */
  phone?: string;
  /** 邮箱 */
  email?: string;
}

/** 用户权限的枚举 */
export enum UserRolesEnum {
  /** 1 超级管理员 */
  superAdmin = "1",
  /** 2 管理员 */
  admin = "2",
  /** 3 普通用户 */
  user = "3",
}

/** 用户权限枚举的中文字段 */
export enum UserRolesTextEnum {
  superAdmin = "超级管理员",
  admin = "管理员",
  user = "普通用户",
}

/** 用户是否被删除中文字段 */
export enum UserIsDeletedTextEnum {
  noDelete = "未删除",
  isDelete = "删除",
}
