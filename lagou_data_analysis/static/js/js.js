$(function () {
        $.ajax({
        type: 'get',
        url: '/get_echart_data',
        dataType: 'json',
        success: function (returndata) {
            console.log(returndata);
            echarts_1(returndata);
            echarts_2(returndata);
            echarts_4(returndata);
            echarts_5(returndata);
            echarts_6(returndata);
            echarts_31(returndata);
            echarts_32(returndata);
            echarts_33(returndata);
            // map(returndata);
        }
    });
    function echarts_1(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                // data: ['商超门店', '教育培训', '房地产', '生活服务', '汽车销售', '旅游酒店', '五金建材'],
                data:data['echart_1']['x_name'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [
                {
                    type: 'bar',
                    data: data['echart_1']['data_list'],
                    barWidth: '35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color: '#2f89cf',
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    }
                }

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_2(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {type: 'shadow'}
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: data['echart_2']['x_name'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [
                {

                    type: 'bar',
                    data: data['echart_2']['data_list'],
                    barWidth: '35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color: '#27d08a',
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    }
                }

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_5(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },

            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '2%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: data['echart_5']['x_name'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [{
                type: 'bar',
                data: data['echart_5']['data_list'],
                barWidth: '35%', //柱子宽度
                // barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        color: '#2f89cf',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_4(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#dddc6b'
                    }
                }
            },
            legend: {
                top: '0%',
                data: ['python'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            grid: {
                left: '10',
                top: '30',
                right: '10',
                bottom: '10',
                containLabel: true
            },

            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }

                },

                data: data['echart_4']['x_name'],

            }, {

                axisPointer: {show: false},
                axisLine: {show: false},
                position: 'bottom',
                offset: 20,


            }],

            yAxis: [{
                type: 'value',
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },

                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [
                {
                    name: 'python',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: '#0184d5',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(1, 132, 213, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(1, 132, 213, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#0184d5',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: data['echart_4']['data_list']

                },
                // {
                //     name: 'IOS',
                //     type: 'line',
                //     smooth: true,
                //     symbol: 'circle',
                //     symbolSize: 5,
                //     showSymbol: false,
                //     lineStyle: {
                //
                //         normal: {
                //             color: '#00d887',
                //             width: 2
                //         }
                //     },
                //     areaStyle: {
                //         normal: {
                //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                 offset: 0,
                //                 color: 'rgba(0, 216, 135, 0.4)'
                //             }, {
                //                 offset: 0.8,
                //                 color: 'rgba(0, 216, 135, 0.1)'
                //             }], false),
                //             shadowColor: 'rgba(0, 0, 0, 0.1)',
                //         }
                //     },
                //     itemStyle: {
                //         normal: {
                //             color: '#00d887',
                //             borderColor: 'rgba(221, 220, 107, .1)',
                //             borderWidth: 12
                //         }
                //     },
                //     data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4]
                //
                // },

            ]

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_6(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        var dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                //shadowBlur: 40,
                //shadowColor: 'rgba(40, 40, 40, 1)',
            }
        };
        var placeHolderStyle = {
            normal: {
                color: 'rgba(255,255,255,.05)',
                label: {show: false,},
                labelLine: {show: false}
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        option = {
            color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
            tooltip: {
                show: true,
                formatter: "{a} : {c} "
            },
            legend: {
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 12,
                bottom: '3%',
                data: data['echart_6']['x_name'],
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
            },

            series: [
                {
                    name: data['echart_6']['x_name'][0],
                    type: 'pie',
                    clockWise: false,
                    center: ['50%', '42%'],
                    radius: ['59%', '70%'],
                    itemStyle: dataStyle,
                    hoverAnimation: false,
                    data: [{
                        value: data['echart_6']['data_list'][0],
                        name: '01'
                    }]
                },
                {
                    name: data['echart_6']['x_name'][1],
                    type: 'pie',
                    clockWise: false,
                    center: ['50%', '42%'],
                    radius: ['49%', '60%'],
                    itemStyle: dataStyle,
                    hoverAnimation: false,
                    data: [{
                        value: data['echart_6']['data_list'][1],
                        name: '02'
                    }]
                },
                {
                    name: data['echart_6']['x_name'][2],
                    type: 'pie',
                    clockWise: false,
                    hoverAnimation: false,
                    center: ['50%', '42%'],
                    radius: ['39%', '50%'],
                    itemStyle: dataStyle,
                    data: [{
                        value: data['echart_6']['data_list'][2],
                        name: '03'
                    }]
                },
                {
                    name: data['echart_6']['x_name'][3],
                    type: 'pie',
                    clockWise: false,
                    hoverAnimation: false,
                    center: ['50%', '42%'],
                    radius: ['29%', '40%'],
                    itemStyle: dataStyle,
                    data: [{
                        value: data['echart_6']['data_list'][3],
                        name: '04'
                    }]
                },
                {
                    name: data['echart_6']['x_name'][4],
                    type: 'pie',
                    clockWise: false,
                    hoverAnimation: false,
                    center: ['50%', '42%'],
                    radius: ['20%', '30%'],
                    itemStyle: dataStyle,
                    data: [{
                        value: data['echart_6']['data_list'][4],
                        name: '05'
                    }]
                },]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


    // function echarts_6() {
    //     // 基于准备好的dom，初始化echarts实例
    //     var myChart = echarts.init(document.getElementById('echart6'));
    //
    //     var dataStyle = {
    //         normal: {
    //             label: {
    //                 show: false
    //             },
    //             labelLine: {
    //                 show: false
    //             },
    //             //shadowBlur: 40,
    //             //shadowColor: 'rgba(40, 40, 40, 1)',
    //         }
    //     };
    //     var placeHolderStyle = {
    //         normal: {
    //             color: 'rgba(255,255,255,.05)',
    //             label: {show: false,},
    //             labelLine: {show: false}
    //         },
    //         emphasis: {
    //             color: 'rgba(0,0,0,0)'
    //         }
    //     };
    //     option = {
    //         color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
    //         tooltip: {
    //             show: true,
    //             formatter: "{a} : {c} "
    //         },
    //         legend: {
    //             itemWidth: 10,
    //             itemHeight: 10,
    //             itemGap: 12,
    //             bottom: '3%',
    //
    //             data: ['浙江', '上海', '广东', '北京', '深圳'],
    //             textStyle: {
    //                 color: 'rgba(255,255,255,.6)',
    //             }
    //         },
    //
    //         series: [
    //             {
    //                 name: '浙江',
    //                 type: 'pie',
    //                 clockWise: false,
    //                 center: ['50%', '42%'],
    //                 radius: ['59%', '70%'],
    //                 itemStyle: dataStyle,
    //                 hoverAnimation: false,
    //                 data: [{
    //                     value: 800,
    //                     name: '01'
    //                 }, {
    //                     value: 20,
    //                     name: 'invisible',
    //                     tooltip: {show: false},
    //                     itemStyle: placeHolderStyle
    //                 }]
    //             },
    //             {
    //                 name: '上海',
    //                 type: 'pie',
    //                 clockWise: false,
    //                 center: ['50%', '42%'],
    //                 radius: ['49%', '60%'],
    //                 itemStyle: dataStyle,
    //                 hoverAnimation: false,
    //                 data: [{
    //                     value: 70,
    //                     name: '02'
    //                 }, {
    //                     value: 30,
    //                     name: 'invisible',
    //                     tooltip: {show: false},
    //                     itemStyle: placeHolderStyle
    //                 }]
    //             },
    //             {
    //                 name: '广东',
    //                 type: 'pie',
    //                 clockWise: false,
    //                 hoverAnimation: false,
    //                 center: ['50%', '42%'],
    //                 radius: ['39%', '50%'],
    //                 itemStyle: dataStyle,
    //                 data: [{
    //                     value: 65,
    //                     name: '03'
    //                 }, {
    //                     value: 35,
    //                     name: 'invisible',
    //                     tooltip: {show: false},
    //                     itemStyle: placeHolderStyle
    //                 }]
    //             },
    //             {
    //                 name: '北京',
    //                 type: 'pie',
    //                 clockWise: false,
    //                 hoverAnimation: false,
    //                 center: ['50%', '42%'],
    //                 radius: ['29%', '40%'],
    //                 itemStyle: dataStyle,
    //                 data: [{
    //                     value: 60,
    //                     name: '04'
    //                 }, {
    //                     value: 40,
    //                     name: 'invisible',
    //                     tooltip: {show: false},
    //                     itemStyle: placeHolderStyle
    //                 }]
    //             },
    //             {
    //                 name: '深圳',
    //                 type: 'pie',
    //                 clockWise: false,
    //                 hoverAnimation: false,
    //                 center: ['50%', '42%'],
    //                 radius: ['20%', '30%'],
    //                 itemStyle: dataStyle,
    //                 data: [{
    //                     value: 50,
    //                     name: '05'
    //                 }, {
    //                     value: 50,
    //                     name: 'invisible',
    //                     tooltip: {show: false},
    //                     itemStyle: placeHolderStyle
    //                 }]
    //             },]
    //     };
    //
    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
    //     window.addEventListener("resize", function () {
    //         myChart.resize();
    //     });
    // }

    function echarts_31(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1'));
        option = {

            title: [{
                text: '融资情况',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: data['echart_31']['x_name'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12'
                }
            },
            series: [
                {
                    name: '数量分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: {show: false},
                    labelLine: {show: false},
                    data:data['echart_31']['data']
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_32(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
        option = {

            title: [{
                text: '公司规模',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: data['echart_32']['x_name'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '数量分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: {show: false},
                    labelLine: {show: false},
                    data:data['echart_32']['data']

                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_33(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
        option = {
            title: [{
                text: '岗位要求',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: data['echart_33']['x_name'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '数量分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: {show: false},
                    labelLine: {show: false},
                    data: data['echart_33']['data']
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


})



		
		
		


		









