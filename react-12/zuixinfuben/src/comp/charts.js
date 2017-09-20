import React, { Component } from "react";
import {  Link } from 'react-router-dom';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';


const columns = [
    {
        width:'100px',
        title: '物品',
        dataIndex: 'commodity',
        sorter: (a, b) => a.commodity.localeCompare(b.commodity),
    },{
        width: '130px',
        title: '姓名',
        dataIndex: 'name',
    
        sorter: (a, b) => a.name.localeCompare(b.name),
    },{
        title: '联系方式',
        dataIndex: 'tel',
    }, {
        title: '购买时间',
        dataIndex: 'payTime',
        sorter: (a, b) => a.payTime.localeCompare(b.payTime),
    },{
        width:'400px',
        title: '地址',
        dataIndex: 'address',
        sorter: (a, b) => a.address.localeCompare(b.address),
    },
];

// const data = [{
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// }, {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
// }, {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
// }, {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
// }];

// function onChange(pagination, filters, sorter) {
//     console.log(sorter);
//     // 'params, pagination, filters, sorter
// }


class ConRight2 extends Component {
    // constructor() {
    //     super();
    // }
    render() {
        let data = this.props.data;
        console.log(this.props);
        return (
            <div id="content">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/"> 概览 </Link></Breadcrumb.Item>
                    <Breadcrumb.Item> 详细统计 </Breadcrumb.Item>
                </Breadcrumb>
                <div className="charts_tab">
                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 8 }}/>
                </div>
            </div>
        )
    }
}

export default ConRight2;