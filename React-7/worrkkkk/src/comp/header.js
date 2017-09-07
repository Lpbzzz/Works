import React, { Component } from "react";
import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

class HeadModel extends Component{

    render(){
        return (
            <header>
                <div className="title"><a href="/" className="titleA">后台系统</a></div>
                <ul id="tou">
                    <li>
                        <Avatar shape="square" size="large" icon="user" />
                    </li>
                </ul>
            </header>
        )
    }
}
export default HeadModel;