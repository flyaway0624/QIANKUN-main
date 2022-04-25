/**
 * 路由守卫校验
 */
 import React, {Component} from "react";
 import {Route, Redirect} from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
 
 class FrontendAuth extends Component {
     // eslint-disable-next-line no-useless-constructor
     constructor(props) {
         super(props);
     }
 
     render() {
         const {location}=window;
         const {routerConfig} = this.props;
         const {pathname} = location;
         const isLogin = localStorage.getItem("user");
         // 如果该路由不用进行权限校验，登录状态下登陆页除外
         // 因为登陆后，无法跳转到登陆页
         // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
         let targetRouterConfig;
         routerConfig.forEach(
             (item) => {
                 if(item.path === pathname){
                    targetRouterConfig = item;
                 }else if(item.components&&item.components.length>0){
                    item.components.forEach(childItem => {
                        if(childItem.path===pathname){
                            targetRouterConfig= childItem
                        }
                    })
                 }
             }
         );
         if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
             const {component} = targetRouterConfig;
             return <Route exact path={pathname} component={component}/>;
         }
         return <div>
             <Route
                exact
                path="/"
                render={() => {
                    let path = '';
                    if(isLogin) {
                        path = '/';
                    } else {
                        path = '/login';
                    }
                    return (
                        <Redirect
                            to={{
                                pathname: path
                            }}
                        />
                    );
                }}
            />
            <Route
                path="/"
                component={Home}
            />
            <Route
                exact
                path="/login"
                component={Login}
            />
            <Route
                path="/error"
                component={Error}
            />
         </div>
     }
 }
 
 export default FrontendAuth;
 