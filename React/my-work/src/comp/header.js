import React, { Component } from "react";
class HeadModel extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <header>
                <div className="title"><a href="index2.html" className="titleA">Home</a></div>
                <input type="text" id="search" />
                <button className="btn_search">Search</button>
                <ul id="tou">
                    <li>
                        <a href="javascript:">
                            <i>
                                <img src={require('./imgs/mess.png')} />
                            </i>
                        </a>
                        <span className="iconz">5</span>
                    </li>
                    <li>
                        <a href="javascript:">
                            <i>
                                <img src={require('./imgs/touxiang.png')} />
                            </i>
                        </a>
                        <span className="iconz">5</span>
                    </li>
                </ul>
            </header>
        )
    }
}
export default HeadModel;