//应用程序入口容器组件
import React, { Component } from 'react';
import { HashRouter,Switch,Route } from 'react-router-dom';

//引入页面
import Login from './pages/login/login';  //登录
import Reg from './pages/reg/reg';    //注册
import Nav from './pages/nav/nav';    //导航页面(下面有4个子页面)
import Main from './pages/main/main';    //导航页面(下面有4个子页面)
import Error404 from './pages/error404/error404'



export default class app extends Component {
    render() {
        return (
            <div id="app">
                <HashRouter>
                    <Switch>
                        <Route path='/' exact component={Main}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/reg' component={Reg}/>
                        <Route component={Error404} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
