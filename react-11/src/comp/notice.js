import React, { Component } from "react";
import {  Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Breadcrumb, Input, Icon } from 'antd';
class ConRight2 extends Component {
    render() {
        return (
            <div id="content">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/"> 概览 </Link></Breadcrumb.Item>
                    <Breadcrumb.Item> 备忘 </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}
export default ConRight2;