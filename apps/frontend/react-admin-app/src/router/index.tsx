import { createBrowserRouter, type RouteObject } from "react-router";
import Layout from "@/layout/index";
import Error404Page from "@/pages/ErrorPage/404_page";
import { routerList } from "./RouteList";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [...routerList],
  },
  {
    path: "*",
    element: <Error404Page />,
  },
];

export const router = createBrowserRouter(routes);
