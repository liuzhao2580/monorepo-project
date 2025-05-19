import { makeAutoObservable } from "mobx";
class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  userInfo = {
    userName: "",
    nickName: "",
    avatar: "",
  };
  /** 存储用户的信息 */
  saveUserInfo(userInfo : any) {
    this.userInfo = userInfo;
  }
}

export const userStore = new UserStore();
