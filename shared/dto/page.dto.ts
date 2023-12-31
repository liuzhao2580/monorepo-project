import { IsNotNull, IsNumber } from "../../nest-server/src/utils/validateHandler"

/** 分页需要的 dto */
export class BasePageDto {
  @IsNotNull()
  pageSize: number = 10
  @IsNumber()
  current: number = 1
  @IsNumber()
  total?: number = 0
}

/** 用户分页 */
export class UserPageDto extends BasePageDto {
  /** 用户名 */
  userName: string
}