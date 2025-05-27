import {
  HomeOutlined,
  FileTextOutlined,
  FileAddOutlined,
  BarsOutlined,
  GroupOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import RentalHousingIcon from "@/assets/layout/公租房.svg";
import type { IRouterList } from "@/types/router";
import { ROUTE_PATH, ROUTE_TITLE } from "./RouteConst";
import Dashboard from "@/pages/Dashboard";
import Personal from "@/pages/Personal";
import Document from "@/pages/Document";
import FirstMenu from "@/pages/MultilevelMenu/first-menu";
import SecondMenu from "@/pages/MultilevelMenu/second-menu";
import ThirdMenu from "@/pages/MultilevelMenu/third-menu";
import ColorList from "@/pages/ColorList";
import RentalHousing from "@/pages/RentalHousing/index";

/** 路由的保存数组*/
export const routerList: Array<IRouterList> = [
  {
    path: ROUTE_PATH.DASHBOARD,
    meta: { icon: HomeOutlined, title: ROUTE_TITLE.DASHBOARD },
    Component: Dashboard,
  },
  // 租房rental housing
  {
    path: ROUTE_PATH.RENTAL_HOUSING,
    meta: { icon: RentalHousingIcon, title: ROUTE_TITLE.RENTAL_HOUSING },
    Component: RentalHousing,
  },
  // 个人中心页面
  {
    path: ROUTE_PATH.PERSONAL,
    meta: { hidden: true, title: ROUTE_TITLE.PERSONAL },
    Component: Personal,
  },
  // 文档页面
  {
    path: ROUTE_PATH.DOCUMENT,
    meta: { icon: FileTextOutlined, title: ROUTE_TITLE.DOCUMENT },
    Component: Document,
  },
  // 颜色表大全
  {
    path: ROUTE_PATH.COLOR_LIST,
    meta: { icon: BgColorsOutlined, title: ROUTE_TITLE.COLOR_LIST },
    Component: ColorList,
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
        Component: FirstMenu,
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
            Component: SecondMenu,
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
                Component: ThirdMenu,
              },
            ],
          },
        ],
      },
    ],
  },
];
