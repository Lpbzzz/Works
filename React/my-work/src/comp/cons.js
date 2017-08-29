import React, { Component } from "react";
class ConsMdoel extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="conbox-all">
                <div id="con">
                    <div id="con1">
                        <ul id="list">
                            <li className="lis">
                                <a href="javascript:" className="Alist">
                                    {/* <i className="iconfont icon-wxbbaobiao"></i> */}
                                    <i className="fa fa-bars"></i> 
                                    概览
						        </a>
                            </li>
                            <li className="lis">
                                <a href="javascript:" className="Alist">
                                    {/* <i className="iconfont icon-wxbgongju"></i> */}
                                    <i className="fa fa-area-chart"></i> 
                                    统计图
							        {/* <i className="iconfont icon-arrowleft other"></i> */}
                                </a>
                            </li>
                            <li className="lis">
                                <a href="javascript:" className="Alist">
                                    {/* <i className="iconfont icon-wxbsousuotuiguang"></i> */}
                                    <i className="fa fa-map"></i> 
                                    订单热力图
							        {/* <i className="iconfont icon-arrowleft other"></i> */}
                                </a>
                            </li>
                            <li className="lis">
                                <a href="javascript:" className="Alist">
                                    {/* <i className="iconfont icon-wxbdingwei"></i> */}
                                    <i className="fa fa-search"></i> 
                                    订单搜索
							        {/* <i className="iconfont icon-arrowleft other"></i> */}
                                </a>
                            </li>
                            <li className="lis">
                                <a href="javascript:" className="Alist">
                                    {/* <i className="iconfont icon-iconfontxingxing"></i> */}
                                    <i className="fa fa-calendar-o"></i> 
                                    备忘
						        </a>
                            </li>
                            <li className="lis">
                                <a href="javascript:" className="Alist">
                                    {/* <i className="iconfont icon-erweima1688"></i> */}
                                    <i className="fa fa-plane"></i> 
                                    运输中
							        {/* <i className="iconfont icon-arrowleft other"></i> */}
                                </a>
                            </li>
                            <li className="lis">
                                <a href="javascript:" className="Alist">
                                    {/* <i className="iconfont icon-set"></i> */}
                                    <i className="fa fa-address-book-o"></i> 
                                    客户资料
							        {/* <i className="iconfont icon-arrowleft other"></i> */}
                                </a>
                            </li>
                            <li className="lis">
                                <a href="javascript:" className="Alist">
                                    {/* <i className="iconfont icon-add"></i> */}
                                    <i className="fa fa-cog"></i> 
                                    设置
							        {/* <i className="iconfont icon-arrowleft other"></i> */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
export default ConsMdoel;