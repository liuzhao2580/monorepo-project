/** 提供公共的 model */
/**
 * 3.表格中分页器的数据
 */
export class PageModel {
  /** 当前页 */
  current: number;
  /** 一页的数据 */
  size: number;
  /** 总页数 */
  total: number;
  /** 总页数 */
  pages: number;
  constructor(current = 1, size = 10, total = 0, pages = 1) {
    this.current = current;
    this.size = size;
    this.total = total;
    this.pages = pages;
  }
}

/**
 * 4.表格统一的返回参数格式
 */
export class TableListResultModel<T> extends PageModel {
  /** 数据存放 */
  records: Array<T> = [];
}
