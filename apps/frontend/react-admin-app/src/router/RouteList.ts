import {
  HomeOutlined,
  FileTextOutlined,
  FileAddOutlined,
  BarsOutlined,
  GroupOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import RentalHousingIcon from "@/assets/layout/公租房.svg?react";
import type { IRouterList } from "@/types/router";
import { ROUTE_PATH, ROUTE_TITLE } from "./RouteConst";
import { lazyLoad } from "./lazyLoad";

/** 路由的保存数组*/
export const routerList: Array<IRouterList> = [
  {
    path: ROUTE_PATH.HOME,
    meta: { icon: HomeOutlined, title: ROUTE_TITLE.HOME },
    Component: lazyLoad(() => import("@/pages/Home")),
  },
  // 租房rental housing
  {
    path: ROUTE_PATH.RENTAL_HOUSING,
    meta: { icon: RentalHousingIcon, title: ROUTE_TITLE.RENTAL_HOUSING },
    Component: lazyLoad(() => import("@/pages/RentalHousing")),
  },
  // 个人中心页面
  {
    path: ROUTE_PATH.PERSONAL,
    meta: { hidden: true, title: ROUTE_TITLE.PERSONAL },
    Component: lazyLoad(() => import("@/pages/Personal")),
  },
  // 文档页面
  {
    path: ROUTE_PATH.DOCUMENT,
    meta: { icon: FileTextOutlined, title: ROUTE_TITLE.DOCUMENT },
    Component: lazyLoad(() => import("@/pages/Document")),
  },
  // 颜色表大全
  {
    path: ROUTE_PATH.COLOR_LIST,
    meta: { icon: BgColorsOutlined, title: ROUTE_TITLE.COLOR_LIST },
    Component: lazyLoad(() => import("@/pages/ColorList")),
  },
  // 多级菜单
  {
    path: ROUTE_PATH.MULTILEVEL,
    redirect: ROUTE_PATH.MULTILEVEL_FIRST,
    meta: { icon: GroupOutlined, exact: true, title: ROUTE_TITLE.MULTILEVEL },
    children: [
      {
        path: ROUTE_PATH.MULTILEVEL_FIRST,
        meta: { icon: BarsOutlined, title: ROUTE_TITLE.MULTILEVEL_FIRST },
        Component: lazyLoad(() => import("@/pages/MultilevelMenu/first-menu")),
      },
      {
        path: ROUTE_PATH.MULTILEVEL_SECOND,
        redirect: ROUTE_PATH.MULTILEVEL_THIRD,
        meta: {
          icon: BarsOutlined,
          title: ROUTE_TITLE.MULTILEVEL_SECOND,
        },
        children: [
          {
            path: ROUTE_PATH.MULTILEVEL_THIRD,
            meta: {
              icon: BarsOutlined,
              title: ROUTE_TITLE.MULTILEVEL_THIRD,
            },
            Component: lazyLoad(() => import("@/pages/MultilevelMenu/second-menu")),
          },
          {
            path: ROUTE_PATH.MULTILEVEL_THIRD_TWO,
            redirect: ROUTE_PATH.MULTILEVEL_FOUR,
            meta: {
              icon: FileAddOutlined,
              title: ROUTE_TITLE.MULTILEVEL_THIRD_TWO,
              breadcrumbShowFlag: false,
            },
            children: [
              {
                path: ROUTE_PATH.MULTILEVEL_FOUR,
                meta: {
                  icon: FileAddOutlined,
                  title: ROUTE_TITLE.MULTILEVEL_FOUR,
                },
                Component: lazyLoad(() => import("@/pages/MultilevelMenu/third-menu")),
              },
            ],
          },
        ],
      },
    ],
  },
];

export const outLayoutRoutes: Array<IRouterList> = [
  {
    path: ROUTE_PATH.MAP_HOUSING,
    meta: { hidden: true, title: ROUTE_TITLE.MAP_HOUSING },
    Component: lazyLoad(() => import("@/pages/MapHousing")),
  },
];
