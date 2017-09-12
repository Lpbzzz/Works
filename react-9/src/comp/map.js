import React, { Component } from "react";
import {  Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

class ConRight3 extends Component {
    constructor(){
        super();

    }

    componentDidMount() {
        console.log(this.props.data)
        var echarts = require('echarts/lib/echarts')
        require('echarts/lib/chart/pie');
        require('echarts/lib/chart/bar');
        require('echarts/lib/component/tooltip');//标题工具
        require('echarts/lib/component/title');//标题
        require('echarts/lib/chart/line');//线图
        require('echarts/lib/chart/map');//地图
        require('../china')
        var myChart = echarts.init(this.Divs);
        function randomData() {
            return Math.round(Math.random() * 1000);
        }
        var option = {
            title: {
                text: '产品销量',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['产品一', '产品二', '产品三']
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '产品一',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { name: '北京', value: 121 },
                        { name: '天津', value: 121 },
                        { name: '上海', value: 121 },
                        { name: '重庆', value: 121 },
                        { name: '河北', value: 121 },
                        { name: '河南', value: 121 },
                        { name: '云南', value: 121 },
                        { name: '辽宁', value: 121 },
                        { name: '黑龙江', value: 121 },
                        { name: '湖南', value: 121 },
                        { name: '安徽', value: 121 },
                        { name: '山东', value: 121 },
                        { name: '新疆', value: 121 },
                        { name: '江苏', value: 121 },
                        { name: '浙江', value: 121 },
                        { name: '江西', value: 121 },
                        { name: '湖北', value: 121 },
                        { name: '广西', value: 121 },
                        { name: '甘肃', value: 121 },
                        { name: '山西', value: 121 },
                        { name: '内蒙古', value: 121 },
                        { name: '陕西', value: 121 },
                        { name: '吉林', value: 121 },
                        { name: '福建', value: 121 },
                        { name: '贵州', value: 121 },
                        { name: '广东', value: 121 },
                        { name: '青海', value: 121 },
                        { name: '西藏', value: 121 },
                        { name: '四川', value: 121 },
                        { name: '宁夏', value: 121 },
                        { name: '海南', value: 121 },
                        { name: '台湾', value: 121 },
                        { name: '香港', value: 121 },
                        { name: '澳门', value: 121 }
                    ]
                },
                {
                    name: '产品二',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { name: '北京', value: 121 },
                        { name: '天津', value: 121 },
                        { name: '上海', value: 121 },
                        { name: '重庆', value: 121 },
                        { name: '河北', value: 121 },
                        { name: '安徽', value: 121 },
                        { name: '新疆', value: 121 },
                        { name: '浙江', value: 121 },
                        { name: '江西', value: 121 },
                        { name: '山西', value: 121 },
                        { name: '内蒙古', value: 121 },
                        { name: '吉林', value: 121 },
                        { name: '福建', value: 121 },
                        { name: '广东', value: 121 },
                        { name: '西藏', value: 121 },
                        { name: '四川', value: 121 },
                        { name: '宁夏', value: 121 },
                        { name: '香港', value: 121 },
                        { name: '澳门', value: 121 }
                    ]
                },
                {
                    name: '产品三',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [
                        { name: '北京', value: 121 },
                        { name: '天津', value: 121 },
                        { name: '上海', value: 121 },
                        { name: '广东', value: 121 },
                        { name: '台湾', value: 121 },
                        { name: '香港', value: 121 },
                        { name: '澳门', value: 121 }
                    ]
                }
            ]
        };

        myChart.setOption(option);

    }

    render() {
        return (
            <div id="content">
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/"> 概览 </Link></Breadcrumb.Item>
                    <Breadcrumb.Item> 全国销量直观统计 </Breadcrumb.Item>
                </Breadcrumb>
                <div className="hotmap" ref={(div) => { this.Divs = div }}></div>
            </div>
        )
    }
}

export default ConRight3;