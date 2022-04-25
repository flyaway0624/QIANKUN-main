/**
 * 定义路由组件，将 auth 设置为 true，表示该路由需要权限校验
 */

import Index from "../pages/Home";
import Login from "../pages/Login";
import Error from "../pages/Error";


export const routerMap = [
  { path: "/", name: "Index", component: Index, auth: false },
  { path: "/login", name: "Login", component: Login, auth: false },
  { path: "/error", name: "error", component: Error, auth: false }
];
