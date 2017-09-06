import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ConRight2 extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="content">
                <div className="tubiao1">
                    <div className="tubiao1_1">
                        <div className="tubiao1_1_1">
                            <div className="show_tubiao1">
                                <h5>
                                    <strong>45%</strong>
                                </h5>
                                <span>新订单1231231231</span>
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
                                <span>利润</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConRight2;