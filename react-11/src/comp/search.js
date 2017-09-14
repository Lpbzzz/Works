import React, { Component } from "react";
import {   Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Breadcrumb, Input, DatePicker, Button, Table  } from 'antd';
import SearchContext from './searchContext';

const {  RangePicker } = DatePicker


// function onChange(date) {
//     console.log(date);
// }
let arr = [];
let arrDate = ["2000/01/01", "2099/12/31"];



const columns = [{
    title: '订单号',
    dataIndex: 'commodityNum',
    key: 'commodityNum',
}, {
    title: '购买人',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '联系方式',
    dataIndex: 'tel',
    key: 'tel',
}];




//有多个条件.不填的话就不要求,按照 符合所有条件 来搜索,返回一个或者多个数组
class ConRight2 extends Component {
    constructor(){
        super();
        this.state={
            orderVal:'',
            perName:'',
            connect:'',
            commit:'',
            adress:'',
            time:'',
            nums:1
        }
    }
    changeO =(ev)=>{
        this.setState({
            orderVal: ev.target.value
        })
    }
    changeP = (ev) => {
        this.setState({
            perName: ev.target.value
        })
    }
    changeCon = (ev) => {
        this.setState({
            connect: ev.target.value
        })
    }
    changeCom = (ev) => {
        this.setState({
            commit: ev.target.value
        })
    }
    changeA = (ev) => {
        this.setState({
            adress: ev.target.value
        })
    }
    changeT = (date,dateString) => {
        var arrs = dateString
        arrDate = [];
        arrs.forEach(e=>{
            arrDate.push(e.replace(/\-/g, '/'))
        })
        
        // console.log(strs.replace(/\-/g, '/'))
        
    }
    clicks = () => {
        this.setState({
            time:arrDate
        })
        arr = this.props.data.filter((e,i)=>{
            console.log(arrDate)
            return (e.address.includes(this.state.adress) && e.commodityNum.includes(this.state.orderVal) && e.name.includes(this.state.perName) && e.tel.includes(this.state.connect) && e.commodity.includes(this.state.commit) && (new Date(e.payTime) < new Date(this.state.time[1]) && new Date(e.payTime) > new Date(this.state.time[0])))
        });
        console.log(arr+'arr内容  ')
        if(arr.length==0){
            alert('输入信息错误或暂无此订单')
        }
    }
    clickNo2 =()=>{
        this.setState({
            orderVal: '',
            perName: '',
            connect: '',
            commit: '',
            adress: '',
            time:''
        })
    }

    componentDidMount(){
        this.setState({
            time: arrDate
        })
    }

    render() {
        console.log(this.state)
        console.log(arr)//这里是筛选结果
        return (
            <div id="content">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/"> 概览 </Link></Breadcrumb.Item>
                    <Breadcrumb.Item> 订单搜索 </Breadcrumb.Item>
                </Breadcrumb>


                <ul className="searchList">
                    <li><span className="search_span">订单号 :</span><Input placeholder="请输入搜索内容" onChange={this.changeO} value={this.state.orderVal}/></li>
                    <li><span className="search_span">购货人 :</span><Input placeholder="请输入搜索内容" onChange={this.changeP} value={this.state.perName}/></li>
                    <li><span className="search_span">联系方式 :</span><Input placeholder="请输入搜索内容" onChange={this.changeCon} value={this.state.connect}/></li>
                    <li><span className="search_span">货品名称 :</span><Input placeholder="请输入搜索内容" onChange={this.changeCom} value={this.state.commit}/></li>
                    <li><span className="search_span">地址 :</span><Input placeholder="请输入搜索内容" onChange={this.changeA} value={this.state.adress} /></li>
                    <li><span className="search_span">时间搜索 :</span></li><RangePicker onChange={this.changeT} />
                    <li><Button type="primary" className="BtnOne" onClick={this.clicks}>开始搜索</Button><Button type="primary" onClick={this.clickNo2}>清除条件</Button></li>
                </ul>
                <div className="searchContent">
                    <Table columns={columns} dataSource={arr} pagination={{ pageSize: 7 }} />
                </div>
                
            </div>
        )
    }
}

export default ConRight2;