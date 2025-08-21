import { createBrowserRouter, Navigate, type RouteObject } from "react-router";
import { wrapWithSuspense } from "./lazyLoad";
import Layout from "@/layout/index";
import Error404Page from "@/pages/ErrorPage/404_page";
import { outLayoutRoutes, routerList } from "./RouteList";
import { ROUTE_PATH } from "./RouteConst";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTE_PATH.HOME} replace />,
      },
      ...routerList.map((route) => ({
        path: route.path,
        element: route.Component ? wrapWithSuspense(route.Component)() : undefined,
      })),
    ],
  },
  ...outLayoutRoutes.map((route) => ({
    path: route.path,
    element: route.Component ? wrapWithSuspense(route.Component)() : undefined,
  })),
  {
    path: "*",
    element: <Error404Page />,
  },
];

export const router = createBrowserRouter(routes);
