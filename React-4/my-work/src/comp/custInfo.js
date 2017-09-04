import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import {Table,Icon,Switch,Radio,Form} from 'antd';
import { Table, Icon, Menu, Dropdown, message, Alert   } from 'antd';
import 'antd/dist/antd.css';
// import { Pagination } from 'antd';
const onClick = function ({ key }) {
    message.info(`Click on item ${key}`);
};
const menu = (
    <Menu onClick={onClick}>
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
            <a href="#">操作 一 {record.name}</a>
            <span className="ant-divider" />
            <a href="#">删除</a>
            <span className="ant-divider" />
            <Dropdown overlay={menu} placement="bottomLeft">
                <a className="ant-dropdown-link" href="#">
                    更多操作 <Icon type="down" />
                </a>
            </Dropdown>
        </span>
    ),
}];


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
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// }, {
//     key: '5',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// }, {
//     key: '6',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// }, {
//     key: '7',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// }, {
//     key: '8',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// }, {
//     key: '9',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// }, {
//     key: '10',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// }, {
//     key: '11',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// }, {
//     key: '12',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// }, {
//     key: '13',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
// },];








class ConRight7 extends Component {
    constructor() {
        super();
        
    }
    
    render() {
        let data = null;

        if(true){
            data = this.props.data;
        }else{
            data = null;
        }

        
        return (
            <div id="content">
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



// class App extends React.Component {
//     state = {
//         selectedRowKeys: [],  // Check here to configure the default column
//     };
//     onSelectChange = (selectedRowKeys) => {
//         console.log('selectedRowKeys changed: ', selectedRowKeys);
//         this.setState({ selectedRowKeys });
//     }
//     render() {
//         const { selectedRowKeys } = this.state;
//         const rowSelection = {
//             selectedRowKeys,
//             onChange: this.onSelectChange,
//             selections: [{
//                 key: 'odd',
//                 text: 'Select Odd Row',
//                 onSelect: (changableRowKeys) => {
//                     let newSelectedRowKeys = [];
//                     newSelectedRowKeys = changableRowKeys.filter((key, index) => {
//                         if (index % 2 !== 0) {
//                             return false;
//                         }
//                         return true;
//                     });
//                     this.setState({ selectedRowKeys: newSelectedRowKeys });
//                 },
//             }, {
//                 key: 'even',
//                 text: 'Select Even Row',
//                 onSelect: (changableRowKeys) => {
//                     let newSelectedRowKeys = [];
//                     newSelectedRowKeys = changableRowKeys.filter((key, index) => {
//                         if (index % 2 !== 0) {
//                             return true;
//                         }
//                         return false;
//                     });
//                     this.setState({ selectedRowKeys: newSelectedRowKeys });
//                 },
//             }],
//             onSelection: this.onSelection,
//         };
//         return (
//             <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
//         );
//     }
// }