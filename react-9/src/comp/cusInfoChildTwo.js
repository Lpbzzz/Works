import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';


class ConRight12 extends Component {
    render() {
        return (
            <div id="content">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/"> 概览 </Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/custInfo"> 客户资料 </Link></Breadcrumb.Item>
                    <Breadcrumb.Item> 添加 </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}

export default ConRight12;