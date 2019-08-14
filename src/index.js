//入口JS
import React from 'react';
import ReactDOM from 'react-dom';


import App from './app'

//引入UI框架,全局css样式
import 'antd-mobile/dist/antd-mobile.css'
//引入最大的样式表
import './assets/styles/app.less';

ReactDOM.render(<App></App>,document.getElementById('root'))