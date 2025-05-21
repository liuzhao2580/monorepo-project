/** 请求的状态参数返回的枚举 */
export enum ResultCodeEnum {
  /** 成功 */
  SUCCESS = 0,
  /** token 不合法 */
  invalidToken = 50001,
}

/** 请求的方式 */
export enum ResultTypeEnum {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PUTCH = "putch",
}

/** 数据库的数据 是否被删除 */
export enum DataBaseDeletedEnum {
  noDelete = 0,
  isDelete = 1,
}

/**
 * 返回参数的 model
 */
export class ResultModel<T> {
  /** 返回的状态码 */
  public code!: ResultCodeEnum;
  /** 返回的消息*/
  public msg!: string;
  /** 返回的数据 T 可能是数组、对象 */
  public data!: T;
}
