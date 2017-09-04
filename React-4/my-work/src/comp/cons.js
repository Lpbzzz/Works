import React, { Component } from "react";
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
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class ConsMdoel extends Component {
    constructor() {
        super();
        this.state={
            boole:true,//true是收缩状态
            date: [{
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
            }, {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            }, {
                key: '4',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '5',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '6',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '7',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '8',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '9',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '10',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '11',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '12',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '13',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }]
        }
    }

   
    click = ()=>{

        
        this.setState({
            boole:true,
        })
    }
    clicks = () => {
        if(this.state.boole === false){
            this.setState({
                boole: true,
            })
        }else{
            this.setState({
                boole: false,
            })
        }
        
    }
    
    
    
    render() {
        console.log(this.state)
        let sClass = 'children';
        sClass+=this.state.boole?' hidden':' '
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
                                            <span>详细统计子级一</span>
                                        </Link>
                                    </li>

                                    <li className="lis">
                                        <Link to="/charts/chartsChildTwo" className="Alist Alist_children">
                                            <span>详细统计子级二</span>
                                        </Link>
                                    </li>
                                </ul>



                                <li className="lis" onClick={this.click}>
                                    <Link to="/hotmap" className="Alist"><i className="fa fa-map"></i><span>全国销量直观统计</span></Link>
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

                                <li className="lis" onClick={this.click}>
                                    <Link to="/custInfo" className="Alist" ><i className="fa fa-address-book-o"></i><span>客户资料</span></Link>
                                </li>

                                <li className="lis" onClick={this.click}>
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
                    <Route exact path="/custInfo" render={()=>{
                        return <ConRight7 data={this.state.date}/>
                        }
                    }/>
                    <Route exact path="/setting" component={ConRight8} />
                    <Route exact path="/charts/chartsChildOne" component={ConRight9} />
                    <Route exact path="/charts/chartsChildTwo" component={ConRight10} />

                </div>
            </Router>
        )
    }
}
export default ConsMdoel;