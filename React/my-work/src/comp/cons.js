import React, { Component } from "react";
import ConRight1 from './mainitem';
import ConRight2 from './charts';
import ConRight3 from './map';
import ConRight4 from './search';
import ConRight5 from './notice';
import ConRight6 from './trans';
import ConRight7 from './custInfo';
import ConRight8 from './setting';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class ConsMdoel extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Router>
                <div id="conbox-all">
                    <div id="con">
                        <div id="con1">
                            <ul id="list">
                                <li className="lis">
                                    <Link to="/" className="Alist"><i className="fa fa-bars"></i>
                                    <span>概览</span>
                                    </Link>
                                </li>
                                <li className="lis">
                                    <Link to="/charts" className="Alist"><i className="fa fa-area-chart"></i><span>详细统计</span></Link>
                                </li>
                                <li className="lis">
                                    <Link to="/hotmap" className="Alist"><i className="fa fa-map"></i><span>全国销量直观统计</span></Link>
                                </li>
                                <li className="lis">
                                    <Link to="/search" className="Alist"><i className="fa fa-search"></i><span>订单搜索</span></Link>
                                </li>
                                <li className="lis">
                                    <Link to="/notice" className="Alist"><i className="fa fa-calendar-o"></i><span>备忘</span></Link>
                                </li>
                                <li className="lis">
                                    <Link to="/trans" className="Alist"><i className="fa fa-plane"></i><span>运输中</span></Link>
                                </li>
                                <li className="lis">
                                    <Link to="/custInfo" className="Alist"><i className="fa fa-address-book-o"></i><span>客户资料</span></Link>
                                </li>
                                <li className="lis">
                                    <Link to="/setting" className="Alist"><i className="fa fa-cog"></i><span>设置</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <Route exact path="/" component={ConRight1} />
                    <Route exact path="/charts" component={ConRight2} />
                    <Route exact path="/hotmap" component={ConRight3} />
                    <Route exact path="/search" component={ConRight4} />
                    <Route exact path="/notice" component={ConRight5} />
                    <Route exact path="/trans" component={ConRight6} />
                    <Route exact path="/custInfo" component={ConRight7} />
                    <Route exact path="/setting" component={ConRight8} />



                </div>
            </Router>
        )
    }
}
export default ConsMdoel;