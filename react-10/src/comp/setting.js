import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';
class ConRight2 extends Component {
    render() {
        return (
            <div id="content">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/"> 概览 </Link></Breadcrumb.Item>
                    <Breadcrumb.Item> 设置 </Breadcrumb.Item>
                </Breadcrumb>
                <div className="tubiao1">
                    <div className="tubiao1_1">
                        <div className="tubiao1_1_1">
                            <div className="show_tubiao1">
                                <h5>
                                    <strong>45%</strong>
                                </h5>
                                <span>新订单</span>
                            </div>
                        </div>
                    </div>
                    <div className="tubiao1_1">
                        <div className="tubiao1_1_1">
                            <div className="show_tubiao1">
                                <h5>
                                    <strong>1000</strong>
                                </h5>
                                <span>新访客</span>
                            </div>
                        </div>
                    </div>
                    <div className="tubiao1_1">
                        <div className="tubiao1_1_1">
                            <div className="show_tubiao1">
                                <h5>
                                    <strong>1515</strong>
                                </h5>
                                <span>新用户</span>
                            </div>
                        </div>
                    </div>
                    <div className="tubiao1_1">
                        <div className="tubiao1_1_1">
                            <div className="show_tubiao1">
                                <h5>
                                    <strong>998</strong>
                                </h5>
                                <span>settingssssss</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConRight2;