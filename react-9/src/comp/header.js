import React, { Component } from "react";
import { Avatar } from 'antd';
import 'antd/dist/antd.css';
// import { Breadcrumb } from 'antd';

class HeadModel extends Component{
    //false不显示
    constructor(){
        super();
        this.state={
            showYN:false,
        }
    }
    mouseOver = ()=>{
        this.setState({
            showYN:true,
        })
    }
    mouseOut = () => {
        this.setState({
            showYN: false,
        })
    }
    click =()=>{
        window.localStorage.clear('user')
        window.location.reload();
    }
    render(){
        console.log(window.localStorage.getItem('user'))
        let classNameShowYN = 'hoverBox';
        classNameShowYN+=this.state.showYN?' ':' hidden'
        let classNameShowYN_trig = 'Triangle';
        classNameShowYN_trig += this.state.showYN ? ' ' : ' hidden'
        return (
            <header>
                <div className="title"><a href="/" className="titleA">后台系统</a></div>
                <div id="tou" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <Avatar shape="square" size="large" icon="user" />
                    <div className={classNameShowYN_trig}></div>
                    <div className={classNameShowYN}>
                        <ul className="hover_ul">
                            <li>欢迎用户:{window.localStorage.getItem('user')}</li>
                            <li onClick={this.click}>退出登录</li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeadModel;