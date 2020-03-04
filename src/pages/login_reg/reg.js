// 注册
import React, { Component } from 'react'
import './login.less';
//引入antd组件
import { InputItem,Button,Flex } from 'antd-mobile'; 
//映入hash路由准备跳转
import { Link } from 'react-router-dom';



export default class reg extends Component {
    constructor(props){
        super(props);

        this.state ={
            code:'',         //随机生成验证码
            consent:false,   //是否同意
            btn:false        //验证码是否正确
        }
    }
    componentWillMount(){
    }
    render() {
        return (
            <div id="reg">
                {/* 输入框 */}
                <div>
                    {/* 用户名 */}
                    <InputItem className="reg_input"
                        placeholder="请输入您的手机"
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    {/* 密码 */}
                    <InputItem className="reg_input"
                        placeholder="请输入您的密码"
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px'   }} />
                    </InputItem>
                    <div className="auth_code">
                        <InputItem
                            placeholder="请输入您的验证码" onChange={this.code.bind(this)}>
                            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px'   }} />
                        </InputItem> 
                        <Button type="primary" inline size="small" style={{ marginRight: '4px' }} onClick={this.authCode.bind(this)}>获取验证码</Button>
                    </div>
                
                    <label onClick={this.consent.bind(this)}  className={this.state.consent?'consent':''} >
                        <span className='radio'>
                            <span></span>
                        </span>
                        我已阅读
                    </label>
                    
                </div>
                {/* 按钮 */}
               
                <Button type="primary" disabled={this.state.btn==true&&this.state.consent==true?false:true}  onClick={this.router.bind(this)}> 
                    {/* <Link to="/"> */}
                    登录
                    {/* </Link> */}
                </Button>
                
    
                {/* 组件写 */}
                <Flex justify="between">
                    <Link to="/login">已有账号</Link>
                </Flex>
            </div>
        )
    }
    //验证码
    async authCode(){
        let newArray = [];
        for(var i=0;i<4;i++){
            newArray.push(Math.floor(Math.random()*10))
        }
        await this.setState({
            code: newArray.join('')
        })
        alert(this.state.code);
    };
    // 输入判断验证码正确情况
    code(e){
        if(e==this.state.code){
            this.setState({
                btn: true
            })
        }else{
            this.setState({
                btn: false
            })
        }
    }
    //点击修改我已同意
    async consent(){
        await this.setState({
            consent: !this.state.consent
        })
    }
    router(){
        this.props.history.push('/');
    }
}
