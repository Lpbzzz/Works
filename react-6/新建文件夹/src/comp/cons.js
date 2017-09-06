import React, { Component } from "react";
import $ from 'jquery';
import ConRight1 from './mainitem';
import ConRight2 from './charts';
import ConRight3 from './map';
import ConRight4 from './search';
import ConRight5 from './notice';
import ConRight6 from './trans';
import ConRight7 from './custInfo';
import ConRight8 from './setting';
import ConRight9 from './childOne';
import ConRight10 from './childTwo';
import ConRight11 from './cusInfoChildOne';
import ConRight12 from './cusInfoChildTwo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class ConsMdoel extends Component {
    constructor() {
        super();
        this.state={
            boole:true,//true是收缩状态
            boole2: true,
            num:0,
            date: [
                {
                    key: '1',
                    name: 'a',
                    age: 22,
                    address: '天津市武清区河西务镇绿菱电子材料有限公司',
                    payTime:'2011-05-10 12:04',
                    tel:'18301111111',
                    commodity: '钢笔', 
                    num: 2,
                    price: 25.5,
                    idType:'visitor',
                }, {
                    key: '2',
                    name: 'b',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    payTime: '2011-06-12 12:04',
                    tel: '18301111111',
                    commodity: '钢笔',
                    num: 2,
                    price: 25.5,
                    idType: 'user',
                }, {
                    key: '3',
                    name: 'c',
                    age: 22,
                    address: '天津市武清区河西务镇绿菱电子材料有限公司',
                    payTime: '2011-07-14 12:04',
                    tel: '18301111111',
                    commodity: '钢笔',
                    num: 2,
                    price: 25.5,
                    idType: 'user',
                }, {
                    key: '4',
                    name: 'd',
                    age: 22,
                    address: 'New York No. 1 Lake Park',
                    payTime: '2011-09-15 12:04',
                    tel: '18301111111',
                    commodity: '中性笔',
                    num: 2,
                    price: 25.5,
                    idType: 'user',
                }, {
                    key: '5',
                    name: 'e',
                    age: 25,
                    address: '广东省广州市北京路374号',
                    payTime: '2011-11-16 12:04',
                    tel: '18301111111',
                    commodity: '钢笔',
                    num: 2,
                    price: 25.5,
                    idType: 'user',
                }, {
                    key: '6',
                    name: 'f',
                    age: 25,
                    address: 'New York No. 1 Lake Park',
                    payTime: '2011-12-17 12:04',
                    tel: '18301111111',
                    commodity: 'X笔',
                    num: 2,
                    price: 25.5,
                    idType: 'user',
                }, {
                    key: '7',
                    name: 'g',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    payTime: '2011-07-18 12:04',
                    tel: '18301111111',
                    commodity: '眉笔',
                    num: 2,
                    price: 25.5,
                    idType: 'user',
                }, {
                    key: '8',
                    name: 'h',
                    age: 32,
                    address: '北京市西长安街999号',
                    payTime: '2011-05-19 12:04',
                    tel: '18301111111',
                    commodity: '钢笔',
                    num: 2,
                    price: 25.5,
                    idType: 'user',
                }, {
                    key: '9',
                    name: 'i',
                    age: 32,
                    address: '北京市西长安街174号中南海新华门',
                    payTime: '2016-04-20 05:04',
                    tel: '18301111111',
                    commodity: '水笔',
                    num: 2,
                    price: 25.5,
                    idType: 'user',
                }, {
                    key: '10',
                    name: 'j',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    payTime: '2011-03-20 07:04',
                    tel: '18301111111',
                    commodity: '钢笔',
                    num: 2,
                    price: 25.5,
                    idType: 'user',
                }, {
                    key: '11',
                    name: 'k',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    payTime: '2011-11-22 12:04',
                    tel: '18301111111',
                    commodity: '铅笔',
                    num: 2,
                    price: 25.5,
                    idType: 'user',
                }, {
                    key: '12',
                    name: 'l',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    payTime: '2011-12-23 08:04',
                    tel: '18301111111',
                    commodity: '毛笔',
                    num: 2,
                    price: 25.5,
                    idType: 'user',
                }, {
                    key: '13',
                    name: 'm',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    payTime: '2011-10-06 21:04',
                    tel: '18301111111',
                    commodity: '铅笔',
                    num: 2,
                    price: 25.5,
                    idType: 'user',
                }
            ],
            dataOfSecond:[]
        }
    }
    componentDidMount(){
        let that = this;
        $.ajax({
            url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?',
            data: {
            wd: 'miaov'
            },
            dataType:'jsonp',
            success:function(data){
                that.setState({
                    dataOfSecond:data
                })
            }
        })
    }
   
    click = ()=>{
        this.setState({
            boole:true,
            boole2:true,
        })
    }
    clicks = () => {
        if(this.state.boole === false){
            this.setState({
                boole: true,
                boole2:true,
            })
        }else{
            this.setState({
                boole: false,
                boole2: true,
            })
        }
    }
    clicks2 = () => {
        if (this.state.boole2 === false) {
            this.setState({
                boole2: true,
                boole: true,
            })
        } else {
            this.setState({
                boole2: false,
                boole: true,
            })
        }
    }
    
    // key: '13',
    // name: 'John Brown13',
    // age: 32,
    // address: 'New York No. 1 Lake Park',
    // payTime: '2011-10-06 21:04',
    // tel: '18301111111',
    // commodity: '铅笔',
    // num: 2,
    // price: 25.5,
    render() {


        // let shujus = this.state.date;
        // console.log(shujus+'11')
        // let arrrr = [];
        // shujus.map((e,i)=>{
        //     if (e.payTime.split(' ')[0].split('-')[1] <= '05' && e.payTime.split(' ')[0].split('-')[0] == '2016'){
        //         arrrr.push(e)
        //     }
        // })
        // console.log(arrrr.length)
        // this.setState({
        //     num:arrrr.length
        // })


        let sClass = 'children';
        sClass+=this.state.boole?' hidden':' '
        let sClass2 = 'children';
        sClass2 += this.state.boole2 ? ' hidden' : ' '
        return (
            <Router>
                <div id="conbox-all">
                    <div id="con">
                        <div id="con1">
                            <ul id="list">


                                <li className="lis" onClick = {this.click}>
                                    <Link to="/" className="Alist"><i className="fa fa-bars"></i><span>概览</span></Link>
                                </li>



                                <li className="lis" onClick={this.clicks}>
                                    <Link to="/charts" className="Alist">
                                        <i className="fa fa-area-chart"></i>
                                        <span>详细统计</span>
                                    </Link>
                                </li>


                                <ul className={sClass}>
                                    <li className="lis">
                                        <Link to="/charts/chartsChildOne" className="Alist Alist_children">
                                            <i className="fa fa-dot-circle-o"></i>
                                            <span>今日记录</span>
                                        </Link>
                                    </li>

                                    <li className="lis">
                                        <Link to="/charts/chartsChildTwo" className="Alist Alist_children">
                                            <i className="fa fa-dot-circle-o"></i>
                                            <span>历史记录</span>
                                        </Link>
                                    </li>
                                </ul>



                                <li className="lis" onClick={this.click}>
                                    <Link to="/map" className="Alist"><i className="fa fa-map"></i><span>全国销量直观统计</span></Link>
                                </li>

                                <li className="lis" onClick={this.click}>
                                    <Link to="/search" className="Alist"><i className="fa fa-search"></i><span>订单搜索</span></Link>
                                </li>

                                <li className="lis" onClick={this.click}>
                                    <Link to="/notice" className="Alist"><i className="fa fa-calendar-o"></i><span>备忘</span></Link>
                                </li>

                                <li className="lis" onClick={this.click}>
                                    <Link to="/trans" className="Alist"><i className="fa fa-plane"></i><span>运输中</span></Link>
                                </li>

                                <li className="lis" onClick={this.clicks2}>
                                    <Link to="/custInfo" className="Alist" ><i className="fa fa-address-book-o"></i><span>客户资料</span></Link>
                                </li>

                                <ul className={sClass2}>
                                    <li className="lis">
                                        <Link to="/custInfo/custInfoChildOne" className="Alist Alist_children">
                                            <i className="fa fa-eye"></i>
                                            <span>增删改查</span>
                                        </Link>
                                    </li>

                                    <li className="lis">
                                        <Link to="/custInfo/custInfoChildTwo" className="Alist Alist_children">
                                            <i className="fa fa-pencil-square"></i>
                                            
                                            <span>添加</span>
                                        </Link>
                                    </li>
                                </ul>


                                <li className="lis" onClick={this.click}>
                                    <Link to="/setting" className="Alist"><i className="fa fa-cog"></i><span>设置</span></Link>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <Route exact path="/"   render={()=>{
                        return <ConRight1 data={this.state.date}/>
                        }
                    }/>

                    <Route exact path="/charts" render={() => {
                        return <ConRight2 data={this.state.date} />
                        }
                    } />
                    {/* <Route exact path="/charts" component={ConRight2} /> */}


                    <Route exact path="/map" component={ConRight3} />


                    <Route exact path="/search" component={ConRight4} />


                    <Route exact path="/notice" component={ConRight5} />


                    <Route exact path="/trans" component={ConRight6} />



                    <Route exact path="/custInfo" render={()=>{
                        return <ConRight7 data={this.state.date}/>
                        }
                    }/>
                    <Route exact path="/setting" component={ConRight8} />
                    <Route exact path="/charts/chartsChildOne" component={ConRight9} />
                    <Route exact path="/charts/chartsChildTwo" component={ConRight10} />
                    <Route exact path="/custInfo/custInfoChildOne" component={ConRight11} />
                    <Route exact path="/custInfo/custInfoChildTwo" component={ConRight12} />

                </div>
            </Router>
        )
    }
}
export default ConsMdoel;