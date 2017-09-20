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
// import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import './mockdata'

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
                    address: 'xx xx',
                    payTime:'0000-00-00 00:00',
                    tel:'xxxxxxxxxxx',
                    commodity: '钢笔', 
                    num: 0,
                    price: 25.5,
                    idType:'visitor',
                    orderState:0,
                    commodityNum:'2016923'
                },
                {
                    key: '2',
                    name: 'a',
                    age: 22,
                    address: 'xx xxx',
                    payTime: '0000-00-00 00:00',
                    tel: 'xxxxxxxxxxx',
                    commodity: '毛笔',
                    num:0,
                    price: 25.5,
                    idType: 'visitor',
                    orderState: 0,
                    commodityNum: 'x'
                },
                {
                    key: '3',
                    name: 'a',
                    age: 22,
                    address: 'xx xxx',
                    payTime: '0000-00-00 00:00',
                    tel: 'xxxxxxxxxxx',
                    commodity: '中性笔',
                    num: 0,
                    price: 25.5,
                    idType: 'visitor',
                    orderState: 0,
                    commodityNum: 'x'
                }
            ],
            dataOfSecond:[]
        }
    }
    componentDidMount(){
        let that = this;
        $.ajax({
            url: '/data',
            data: {
            },
            dataType:'json',
            success:function(data){
                // console.log(this)
                that.setState({
                    date:data.data
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
    remove = (key)=>{
        let{date} = this.state;
        let data2 = null;
        data2 = date.filter((e,i)=>{
            return e.key !=key;
        })
        this.setState({
            date:data2
        })
    }
    

    
    // key: '13',
    // name: 'John Brown13',
    // age: 32,
    // address: 'New York No. 1 Lake Park',
    // payTime: '2017-09-12 21:04',
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
                                {/* <ul className={sClass}>
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
                                </ul> */}



                                <li className="lis" onClick={this.click}>
                                    <Link to="/map" className="Alist"><i className="fa fa-map"></i><span>全国销量直观统计</span></Link>
                                </li>
                                <li className="lis" onClick={this.click}>
                                    <Link to="/search" className="Alist"><i className="fa fa-search"></i><span>订单搜索</span></Link>
                                </li>
                                <li className="lis" onClick={this.click}>
                                    <Link to="/notice" className="Alist"><i className="fa fa-calendar-o"></i><span>备忘</span></Link>
                                </li>
                                {/* <li className="lis" onClick={this.click}>
                                    <Link to="/trans" className="Alist"><i className="fa fa-plane"></i><span>运输中</span></Link>
                                </li> */}
                                <li className="lis" onClick={this.clicks2}>
                                    <Link to="/custInfo" className="Alist" ><i className="fa fa-address-book-o"></i><span>客户资料</span></Link>
                                </li>
                                {/* <ul className={sClass2}>
                                    <li className="lis">
                                        <Link to="/custInfo/custInfoChildOne" className="Alist Alist_children">
                                            <i className="fa fa-eye"></i>
                                            <span>编辑</span>
                                        </Link>
                                    </li>
                                    <li className="lis">
                                        <Link to="/custInfo/custInfoChildTwo" className="Alist Alist_children">
                                            <i className="fa fa-pencil-square"></i>
                                            
                                            <span>添加</span>
                                        </Link>
                                    </li>
                                </ul> */}
                                {/* <li className="lis" onClick={this.click}>
                                    <Link to="/setting" className="Alist"><i className="fa fa-cog"></i><span>设置</span></Link>
                                </li> */}
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



                    <Route exact path="/map" render={() => {
                        return <ConRight3 data={this.state.date} />
                    }
                    } />




                    <Route exact path="/search"  render={() => {
                        return <ConRight4 data={this.state.date} />
                    }
                    }/>
                    <Route exact path="/notice" component={ConRight5} />
                    <Route exact path="/trans" component={ConRight6} />
                    <Route exact path="/custInfo" render={()=>{
                        return <ConRight7 data={this.state.date} remove ={this.remove} />
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