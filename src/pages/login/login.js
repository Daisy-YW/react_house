// 登录
import React, { Component } from 'react'
//引入logo图片
import logo from '../../assets/imgs/logo.png';
//引入login.css
import './login.less';
//引入antd组件
import { List,InputItem,Button,Flex } from 'antd-mobile'; 
//映入hash路由准备跳转
import { Link } from 'react-router-dom';


export default class login extends Component {
    render() {
        return (
            <div id="login">
                {/* login */}
                <img src={ logo }  style = {{width:'10rem',height:"10rem"}}/>

                {/* 登录框*/}
                <div>
                    <List>
                    {/* 用户名 */}
                        <InputItem
                            placeholder="请输入您的用户名/手机/邮箱"
                        >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        {/* 密码 */}
                        <InputItem
                            placeholder="请输入您的密码"
                        >
                            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px'   }} />
                        </InputItem>
                    </List>
                    
                    {/* 按钮 */}
                    <Link to="/">
                        <Button type="primary"> 
                            登录
                        </Button>
                    </Link>
                    
                </div>
                
                {/* 注册 */}
                {/* 正常写 */}
                {/* <div className="login_reg" style={{display:"flex",justifyContent:"space-between"}}>
                    <Link to="/reg">手机快速注册</Link>
                    <Link to="/">忘记密码</Link>
                </div>  */}

                {/* 组件写 */}
                <Flex justify="between">
                    <Link to="/reg">手机快速注册</Link>
                    <Link to="/Error404">忘记密码</Link>
                </Flex>
            </div>
        )
    }
}
