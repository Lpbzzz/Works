import React, { Component } from "react";
import {  Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

class ConRight3 extends Component {
    constructor(){
        super();

    }

    componentDidMount() {
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
        let dataOfMap = [1,2,3,4,,5,6]
        let {data} = this.props;
        console.log(data);
        let arrCommodity = [];
        let jsonClass = {};
        let arrKong = [];
        data.forEach((e,i)=>{
            if (!arrCommodity.includes(e.commodity.split('-')[0])){
                arrCommodity.push(e.commodity.split('-')[0])
            }
            for (var i = 0; i < arrCommodity.length; i++) {
                jsonClass[arrCommodity[i]] = [];
            }
        })

        for (var attr in jsonClass){
            for(var i=0;i<data.length;i++){
                if(data[i].commodity===attr){
                    jsonClass[attr].push(data[i])
                }
            }
        }
        console.log(jsonClass)
        
        console.log(jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '北京' }).length)
        //console.log(arrCommodity);//以产品名分类
        // arrCommodity=arrCommodity.splice(0,3)
        // console.log(arrCommodity)
        
        



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
                data: ['钢笔', '毛笔', '中性笔']
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
                    name: '钢笔',
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
                        { name: '北京', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '北京' }).length },
                        { name: '天津', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '天津' }).length },
                        { name: '上海', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '上海' }).length },
                        { name: '重庆', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '重庆' }).length },
                        { name: '河北', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '河北' }).length },
                        { name: '河南', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '河南' }).length },
                        { name: '云南', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '云南' }).length },
                        { name: '辽宁', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '辽宁' }).length },
                        { name: '黑龙江', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '黑龙江' }).length },
                        { name: '湖南', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '湖南' }).length },
                        { name: '安徽', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '安徽' }).length },
                        { name: '山东', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '山东'}).length },
                        { name: '新疆', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '新疆'}).length },
                        { name: '江苏', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '江苏'}).length },
                        { name: '浙江', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '浙江'}).length },
                        { name: '江西', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '江西'}).length },
                        { name: '湖北', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '湖北'}).length },
                        { name: '广西', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '广西'}).length },
                        { name: '甘肃', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '甘肃'}).length },
                        { name: '山西', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '山西'}).length },
                        { name: '内蒙古', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '内蒙古'}).length },
                        { name: '陕西', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '陕西'}).length },
                        { name: '吉林', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '吉林' }).length },
                        { name: '福建', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '福建'}).length },
                        { name: '贵州', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '贵州'}).length },
                        { name: '广东', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '广东'}).length },
                        { name: '青海', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '青海'}).length },
                        { name: '西藏', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '西藏'}).length },
                        { name: '四川', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '四川'}).length },
                        { name: '宁夏', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '宁夏'}).length },
                        { name: '海南', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '海南' }).length },
                        { name: '台湾', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '台湾'}).length },
                        { name: '香港', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '香港'}).length },
                        { name: '澳门', value: jsonClass['钢笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '澳门'}).length }
                    ]
                },
                {
                    name: '毛笔',
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
                        { name: '北京', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '北京' }).length },
                        { name: '天津', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '天津' }).length },
                        { name: '上海', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '上海' }).length },
                        { name: '重庆', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '重庆' }).length },
                        { name: '河北', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '河北' }).length },
                        { name: '河南', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '河南' }).length },
                        { name: '云南', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '云南' }).length },
                        { name: '辽宁', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '辽宁' }).length },
                        { name: '黑龙江', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '黑龙江' }).length },
                        { name: '湖南', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '湖南' }).length },
                        { name: '安徽', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '安徽' }).length },
                        { name: '山东', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '山东' }).length },
                        { name: '新疆', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '新疆' }).length },
                        { name: '江苏', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '江苏' }).length },
                        { name: '浙江', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '浙江' }).length },
                        { name: '江西', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '江西' }).length },
                        { name: '湖北', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '湖北' }).length },
                        { name: '广西', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '广西' }).length },
                        { name: '甘肃', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '甘肃' }).length },
                        { name: '山西', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '山西' }).length },
                        { name: '内蒙古', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '内蒙古' }).length },
                        { name: '陕西', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '陕西' }).length },
                        { name: '吉林', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '吉林' }).length },
                        { name: '福建', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '福建' }).length },
                        { name: '贵州', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '贵州' }).length },
                        { name: '广东', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '广东' }).length },
                        { name: '青海', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '青海' }).length },
                        { name: '西藏', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '西藏' }).length },
                        { name: '四川', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '四川' }).length },
                        { name: '宁夏', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '宁夏' }).length },
                        { name: '海南', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '海南' }).length },
                        { name: '台湾', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '台湾' }).length },
                        { name: '香港', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '香港' }).length },
                        { name: '澳门', value: jsonClass['毛笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '澳门' }).length }
                    ]
                },
                {
                    name: '中性笔',
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
                        { name: '北京', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '北京' }).length },
                        { name: '天津', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '天津' }).length },
                        { name: '上海', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '上海' }).length },
                        { name: '重庆', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '重庆' }).length },
                        { name: '河北', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '河北' }).length },
                        { name: '河南', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '河南' }).length },
                        { name: '云南', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '云南' }).length },
                        { name: '辽宁', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '辽宁' }).length },
                        { name: '黑龙江', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '黑龙江' }).length },
                        { name: '湖南', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '湖南' }).length },
                        { name: '安徽', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '安徽' }).length },
                        { name: '山东', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '山东' }).length },
                        { name: '新疆', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '新疆' }).length },
                        { name: '江苏', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '江苏' }).length },
                        { name: '浙江', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '浙江' }).length },
                        { name: '江西', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '江西' }).length },
                        { name: '湖北', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '湖北' }).length },
                        { name: '广西', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '广西' }).length },
                        { name: '甘肃', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '甘肃' }).length },
                        { name: '山西', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '山西' }).length },
                        { name: '内蒙古', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '内蒙古' }).length },
                        { name: '陕西', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '陕西' }).length },
                        { name: '吉林', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '吉林' }).length },
                        { name: '福建', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '福建' }).length },
                        { name: '贵州', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '贵州' }).length },
                        { name: '广东', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '广东' }).length },
                        { name: '青海', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '青海' }).length },
                        { name: '西藏', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '西藏' }).length },
                        { name: '四川', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '四川' }).length },
                        { name: '宁夏', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '宁夏' }).length },
                        { name: '海南', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '海南' }).length },
                        { name: '台湾', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '台湾' }).length },
                        { name: '香港', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '香港' }).length },
                        { name: '澳门', value: jsonClass['中性笔'].filter((e, i) => { return String(e.address.split('-')[0]) === '澳门' }).length }
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