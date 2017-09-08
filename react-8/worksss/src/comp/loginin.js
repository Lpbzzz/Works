import React, { Component } from "react";
import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

class Login extends Component{

    render(){
        return (
           <div className="login">
                <form action="" method="post" id="form">
                <div className="logo"></div>
                <div className="login_form">
                    <div className="user">
                        <input className="text_value" value="" name="username" type="text" id="username"/>
                        <input className="text_value" value="" name="password" type="password" id="password"/>
                    </div>
                    <button className="button" id="submit" type="submit">登录</button>
                </div>
                <div id="tip"></div>
                <div className="foot">
                Copyright &copy; 2014.Company name All rights reserved.
                </div>
                </form>
            </div>
        )
    }
}
export default Login;