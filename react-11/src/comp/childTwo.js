import React, { Component } from "react";
import {  Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';
class ConRight10 extends Component {
    render() {
        return (
            <div id="content">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/"> 概览 </Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/charts"> 详细统计 </Link></Breadcrumb.Item>
                    <Breadcrumb.Item> 历史记录 </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}

export default ConRight10;