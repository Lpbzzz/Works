import React, { Component } from "react";
// import { Avatar } from 'antd';
import 'antd/dist/antd.css';
// import { Breadcrumb } from 'antd';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            val:'',
            pass:''
        }

    }
    changeVal=(ev)=>{
        this.setState({
            val:ev.target.value
        })
    }
    changePass = (ev)=>{
        this.setState({
            pass:ev.target.value
        })
    }
    clickSubmit = ()=>{
        let data = this.props;
        let boole = false;
        let anemr = null;
        for (let attr in data) {
            console.log(data[attr].name)
            if(this.state.val===data[attr].name&&this.state.pass===data[attr].pass){
                boole = true;
                anemr = data[attr].name
                window.localStorage.setItem("user", data[attr].name);
                window.location.reload();
            }
        }
        if(!boole){
            alert('账号或密码错误')
        }else{
            alert('欢迎用户:' + anemr)
        }
    }
    keyUp=(ev)=>{
        if(ev.keyCode===13){
            let data = this.props;
            let boole = false;
            let anemr = null;
            for (let attr in data) {
                console.log(data[attr].name)
                if (this.state.val === data[attr].name && this.state.pass === data[attr].pass) {
                    boole = true;
                    anemr = data[attr].name
                    window.localStorage.setItem("user", data[attr].name);
                    window.location.reload();
                }
            }
            if (!boole) {
                alert('账号或密码错误')
            } else {
                alert('欢迎用户:' + anemr)
            }
        }
    }
    render(){
        console.log(this.props);
        // for(var i=0;i<this.props.length;i++){
        //     console.log(1)
        // }

        return (
            <div className="login" onKeyUp={this.keyUp}>
                <form action="" method="post" id="form">
                <div className="logo"></div>
                <div className="login_form">
                    <div className="user">
                        <input className="text_value"  name="username" type="text" id="username" onChange={this.changeVal}/>
                        <input className="text_value"  name="password" type="password" id="password" onChange={this.changePass}/>
                    </div>
                    <div className="button" id="submit" onClick={this.clickSubmit} >登录1222222222</div>
                </div>
                <div id="tip"></div>
                <div className="foot">
                    Copyright &copy; 9999.Company name All rights reserved.EveryDayNight___
                </div>
                </form>
            </div>
        )
    }
}
export default Login;