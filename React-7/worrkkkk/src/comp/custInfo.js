import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Table, Icon, Menu, Dropdown, message   } from 'antd';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

const onClicks = function ({ key }) {
    message.info(`Click on item ${key}`);
}; 
const aaa = function ({ key }) {
    message.info(`Click on item ${key}`);
}; 
const menu = (
    <Menu onClick={onClicks}>
        <Menu.Item key="1" onClick={aaa}>
            <span>1st </span>
        </Menu.Item>
        <Menu.Item key="2">
            <span>2nd </span>
        </Menu.Item>
        <Menu.Item key="3">
            <span>3rd </span>
        </Menu.Item>
    </Menu>
);
// console.log(menu.props.children[0].props.onClick);
// const onClose = function (e) {
//     console.log(e, 'I was closed.');
// };
const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <span>
            <span>操作 一 {record.name}</span>
            <span className="ant-divider" />
            <a>删除</a>
            <span className="ant-divider" />
            <Dropdown overlay={menu} placement="bottomLeft">
                <a className="ant-dropdown-link" href="#">
                    更多操作 
                    <Icon type="down" />
                </a>
            </Dropdown>
        </span>
    ),
}];

// class qweqwe extends Component{

// }

class ConRight7 extends Component {

    
    render() {
        let data = null;
        console.log(this.props)
        if(true){
            data = this.props.data;
        }else{
            data = null;
        }

        
        return (
            <div id="content">
                <Breadcrumb>

                    <Breadcrumb.Item><Link to="/"> 概览 </Link></Breadcrumb.Item>
                    <Breadcrumb.Item> 客户资料 </Breadcrumb.Item>
                </Breadcrumb>
                <div className="charts_tab">
                    {/* <Alert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                        type="warning"
                        closable
                        onClose={onClose}
                    />警告 和上面的onClose一起使用 */}
                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 8 }} />
                </div>
            </div>
        )
    }
}

export default ConRight7;

