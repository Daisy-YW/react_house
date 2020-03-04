/* 菜单组件 */
import React, { Component } from 'react';


export default class iconbtn extends Component {
    render() {
        return (
            <div>
                <img src={require('../assets/imgs/nav-001.png')} style={{width:'20px',height:'20px'}}/>
                <p>图片文字</p>
            </div>
        )
    }
}
