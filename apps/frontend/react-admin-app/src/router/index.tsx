import { createBrowserRouter, redirect } from "react-router";
import Layout from "@/layout/index";
import Login from "@/pages/Login/index";
import Settings from "@/pages/Settings/index";
import Dashboard from "@/pages/Dashboard/index";
import { ROUTE_PATH } from "./RouteConst";
// 登录拦截器：所有 protected 路由的 loader 使用它
const requireAuth = () => {
  const isLoggedIn = localStorage.getItem("token") === "ok";
  if (!isLoggedIn) throw redirect("/login");
  return null;
};

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    loader: requireAuth,
    element: <Layout />,
    children: [
      {
        path: ROUTE_PATH.DASHBOARD,
        index: true,
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
