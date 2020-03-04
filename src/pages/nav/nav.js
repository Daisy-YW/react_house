// 导航
import React, { Component } from 'react';
import {Flex} from 'antd-mobile';
import "./nav.css";


export default class nav extends Component {
    constructor(props){
        super(props)

        this.state = {
            navList:[
                {
                    id:'1',
                    icon: require("../../assets/imgs/icon2.png"),
                    title:"首页",
                    url:"/1"
                },
                {
                    id:'2',
                    icon: require("../../assets/imgs/icon4.png"),
                    title:"消息",
                    url:"/2"
                },
                {
                    id:'3',
                    icon: require("../../assets/imgs/icon6.png"),
                    title:"收藏",
                    url:"/3"
                },
                {
                    id:'4',
                    icon: require("../../assets/imgs/icon8.png"),
                    title:"我的",
                    url:"/4"
                }
            ],
            navActive:[
                {icon:require("../../assets/imgs/icon1.png")},
                {icon:require("../../assets/imgs/icon3.png")},
                {icon:require("../../assets/imgs/icon5.png")},
                {icon:require("../../assets/imgs/icon7.png")},
            ]
        }
    }
    render() {
        return (
            <div id="nav">
                <Flex>
                    {this.state.navList.map( item => 
                        // flex.item内添加组件会报错,说请传入数组, 只能辨别一层组件,除非里面的item也是数组
                        <Flex.Item nav={item} key={item.id}>
                            <span className="img" style={{background:`url(${item.icon}) top center no-repeat`,backgroundSize:'cover'}}></span>
                            <p className="t_center">{item.title}</p>
                        </Flex.Item>
                    )}
                </Flex>
            </div>
        )
    }
    changeRouter(){
        var nav = document.getElementById('nav');
        var navList = nav.getElementsByClassName('am-flexbox-item')
        var state = this.state;
        for(let i = 0; i<navList.length;i++){
            navList[i].onclick = function(){
                for(let i = 0; i<navList.length;i++){
                    navList[i].getElementsByClassName('img')[0].style.backgroundImage = `url(${state.navList[i].icon})`
                }
                navList[i].getElementsByClassName('img')[0].style.backgroundImage = `url(${state.navActive[i].icon})`
            }
        }
        // nav.addEventListener('click',function(e){
        //     var target = e.target;
        //     console.log(e);
        //     if(target.className == 'am-flexbox-item'){
        //         console.log(target.index);
        //     }
        // },true)
    }
    componentDidMount(){
        this.changeRouter();
    }
}
