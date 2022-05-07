/**
 * 路由守卫校验
 */
 import React, {Component} from "react";
 import {Route, Redirect} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
 
 class FrontendAuth extends Component {
     // eslint-disable-next-line no-useless-constructor
     constructor(props) {
         super(props);
     }
 
     render() {
         const isLogin = localStorage.getItem("user");
         // 如果该路由不用进行权限校验，登录状态下登陆页除外
         return <div>
             <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => {
              //根据登录token、登录有效期等判断是否登录。
              if (isLogin) {
                return <Home />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
         </div>
     }
 }
 
 export default FrontendAuth;
 