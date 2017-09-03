import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';





class ConRight1 extends Component {
  
    componentDidMount(){
        
        var echarts = require('echarts/lib/echarts')
        require('echarts/lib/chart/pie');
        require('echarts/lib/chart/bar');
        require('echarts/lib/component/tooltip');//标题工具
        require('echarts/lib/component/title');//标题
        require('echarts/lib/chart/line');//线图
        var myChart = echarts.init(this.Divs);

        var option = {
            title: {
                text: '营业趋势'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: { normal: {} },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };

        myChart.setOption(option);

    }


    render() {


        




        
        return (
            <div id="content">
                <div className="tubiao1 clearFixed">
                    <div className="tubiao1_1">
                        <div className="tubiao1_1_1">
                            <div className="show_tubiao1">
                                <h5>
                                    <strong>20%</strong>
                                </h5>
                                <span>新订单</span>
                            </div>
                            <i className="fa fa-bullhorn"></i>
                        </div>
                    </div>
                    <div className="tubiao1_1">
                        <div className="tubiao1_1_1">
                            <div className="show_tubiao1">
                                <h5>
                                    <strong>65</strong>
                                </h5>
                                <span>新访客</span>
                            </div>
                            <i className="fa fa-eye"></i>
                        </div>
                    </div>
                    <div className="tubiao1_1">
                        <div className="tubiao1_1_1">
                            <div className="show_tubiao1">
                                <h5>
                                    <strong>21</strong>
                                </h5>
                                <span>新用户</span>
                                
                            </div>
                            <i className="fa fa-user-circle-o"></i>
                        </div>
                    </div>
                    <div className="tubiao1_1">
                        <div className="tubiao1_1_1">
                            <div className="show_tubiao1">
                                <h5>
                                    <strong>998</strong>
                                </h5>
                                <span>利润</span>
                            </div>
                            <i className="fa fa-cny"></i>
                        </div>
                    </div>
                </div>

                <div className="tubiao2" ref={(div)=>{this.Divs = div}}>

                </div>



            </div>
        )
    }
}

export default ConRight1;