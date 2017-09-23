import React, { Component } from "react";
import {  Link } from 'react-router-dom';
import { Table, Icon, Menu, Dropdown, message   } from 'antd';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';





class ConRight7 extends Component {

    
    render() {





        const onClicks = function ({ key }) {
            message.info(`Click on item ${key}`);
        };



        const clicka = (text, record, index) => {
            this.props.remove(record.key)
        }

        const menu = (
            <Menu onClick={onClicks}>
                <Menu.Item key="1">
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
            title: '编号',
            dataIndex: 'key',
        }, {
            title: '姓名',
            dataIndex: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
        }, {
            title: '地址',
            dataIndex: 'address',
            width: '400px',
        }, {
            title: '操作',
            render: (text, record, index) => (
                <span>
                    <a onClick={() => clicka(text, record, index)}>删除</a>
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
        let data = null;
        // console.log(this.props)
        if(true){
            data = this.props.data;
        }else{
            data = null;
        }

        console.log(this.props)
        
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

