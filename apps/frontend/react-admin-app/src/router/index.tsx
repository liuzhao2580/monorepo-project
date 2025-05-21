import { createBrowserRouter, redirect, type RouteObject } from "react-router";
import Layout from "@/layout/index";
import Login from "@/pages/Login/index";
import Error404Page from "@/pages/ErrorPage/404_page";
import { routerList } from "./RouteList";
// 登录拦截器：所有 protected 路由的 loader 使用它
const requireAuth = () => {
  const isLoggedIn = localStorage.getItem("token") === "ok";
  if (!isLoggedIn) throw redirect("/login");
  return null;
};

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    loader: requireAuth,
    element: <Layout />,
    children: [...routerList],
  },
  {
    path: "*",
    element: <Error404Page />,
  },
];

export const router = createBrowserRouter(routes);
