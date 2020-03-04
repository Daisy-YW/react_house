//首页
import React, { Component } from 'react'
import { HashRouter,Switch,Route } from 'react-router-dom';



// 首页底部导航
import Nav from '../nav/nav';
import NavList from '../nav/navList';
//我的
import My from '../my/my';
//微聊
import Chat from '../chat/chat';
//历史
import Hist from '../history/history';


import './main.less'

export default class main extends Component {
    render() {
        return (
            <div  id="main" >
                {/* 顶部 */}
                <div id="main_content">
                    {/* <HashRouter>
                        <Switch>
                            <Route path='/' exact component={Main}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/reg' component={Reg}/>
                            <Route component={Error404} />
                        </Switch>
                    </HashRouter> */}
                </div>
                <NavList></NavList>
            </div>
        )
    }
}
