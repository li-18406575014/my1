<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Title</title>
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/dpl.css" rel="stylesheet">
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/bui.css" rel="stylesheet">
    <!--<link rel="stylesheet" href="css/common.css">-->
    <!--<link rel="stylesheet" href="css/goods-add.css">-->
    <!--<link rel="stylesheet" href="css/supplier-mes.css">-->
    <link rel="stylesheet" href="/ajax/font/iconfont.css">
    <link rel="stylesheet" href="/ajax/css/index.css">
</head>
<script src="/ajax/js/jquery.min.js"></script>
<script src="/ajax/js/echarts.min.js"></script>
<body>
<div class="doc-content table-con">
    <ul class="breadcrumb breadcrumb2"></ul>
    <ul class="breadcrumb">
        <li>
            <span class="iconfont icon-shouye"></span>
            <a href="#">首页</a> <span class="divider"><span class="iconfont icon-down-trangle1"></span></span>
        </li>
        <li class="active">订单报表</li>
    </ul>


    <div class="table-sel">
        <!--<img src="img/w-2.png" alt="">-->
        <div class="table-cont">
            <div class="table-left">
                <span>选择店铺</span>
                <ul class="table-list">
                    <li>
                        <label class="radio">
                            <input type="radio" name="sale" checked>全部店铺
                        </label>
                    </li>
                    <li>
                        <label class="radio">
                            <input type="radio" name="sale">店铺一
                        </label>
                    </li>
                    <li>
                        <label class="radio">
                            <input type="radio" name="sale">店铺二
                        </label>
                    </li>
                    <li>
                        <label class="radio">
                            <input type="radio"name="sale">店铺三
                        </label>
                    </li>
                    <li>
                        <label class="radio">
                            <input type="radio" name="sale">店铺四
                        </label>
                    </li>
                    <li>
                        <label class="radio">
                            <input type="radio" name="sale">店铺二
                        </label>
                    </li>
                    <li>
                        <label class="radio">
                            <input type="radio" name="sale">店铺三
                        </label>
                    </li>
                    <li>
                        <label class="radio">
                            <input type="radio" name="sale">店铺四
                        </label>
                    </li>
                </ul>
            </div>
            <div class="table-right">
                <div class="control-group span8">
                    <label class="control-label">开始时间：</label>
                    <div class="controls">
                        <input type="text" class="calendar" >
                    </div>
                </div>
                <div class="control-group span8">
                    <label class="control-label">结束时间：</label>
                    <div class="controls">
                        <input type="text" class="calendar" >
                    </div>
                </div>
                <button class="button">统计</button>
            </div>
        </div>
    </div>
    <div class="tit table-tit" style="background: #F0F0F0;border:2px solid white;border-bottom:2px solid rgba(0,0,0,0.2);color: black">
        <span class="iconfont icon-guanlianniu"></span>
        <span>查询结果展示</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>
    <div class="table-check">
        <div class="table-left">
            <div  id="main1" ></div>
            <div  id="main2" class="dis-none2"></div>
            <div  id="main3" class="dis-none2"></div>
        </div>
        <div class="table-right">
            <span>统计结果</span>
            <span>所有商店</span>
            <span>总订单：1000万</span>
            <span>年均新增订单：50万</span>
            <div class="change">
                <button  class="button">饼状图</button>
                <button  class="button">柱状图</button>
                <button  class="button">折线图</button>
            </div>
        </div>
    </div>

    <div class="tit table-tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>订单报表</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>
    <div class="span95 sell2" >
        <table cellspacing="0" class="table table-head-bordered table-bordered table2 table-sm" style="margin-top:0;padding-top: 0">
            <thead>
            <tr style="">
                <th>排序</th>
                <th>商品图片</th>
                <th>商品名称</th>
                <th>商品类目</th>
                <th>发布时间</th>
                <th>销售数量</th>
                <th>销售金额</th>
                <th>成交订单量</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            </tbody>
        </table>
    </div>
    </div>



</body>
<script src="http://g.tbcdn.cn/fi/bui/jquery-1.8.1.min.js"></script>
<script src="http://g.alicdn.com/bui/seajs/2.3.0/sea.js"></script>
<script src="http://g.alicdn.com/bui/bui/1.1.21/config.js"></script>
<script>
    $(document).ready(function () {
        BUI.use('bui/calendar', function (Calendar) {
            var datepicker = new Calendar.DatePicker({
                trigger: '.calendar',
                autoRender: true
            });
        });
        $('#tit li').each(function (index) {
            $(this).click(function () {
                $('#tit li').removeClass('active');
                $(this).addClass('active')
                $('.conn .roww').each(function (ind) {
                    if (ind != index) {
                        $(this).addClass('dis-none')
                    }
                });
                $('.conn .roww').eq(index).removeClass('dis-none');
            })
        })
//        报表图形切换
        $('.table-check .table-right .change>button').each(function (index) {
            console.log($(this))
            $(this).click(function () {
                console.log(index)
                $('.table-check  .table-left>div').addClass('dis-none2');
                $('.table-check  .table-left>div').eq(index).removeClass('dis-none2');
            })
        })

//        报表 饼状图
        var myChart = echarts.init(document.getElementById('main1'));
        var data = genData(50);
        option = {
            title: {
                text: '不同种类商品订单百分比',
                subtext: '',
                x: '35%'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: data.legendData
            },
            series: [
                {
                    name: '商品种类',
                    type: 'pie',
                    radius: '55%',
                    center: ['45%', '50%', '40%', '50%'],
                    data: data.seriesData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        function genData(count) {
            var nameList = [
                '商品种类1', '商品种类2', '商品种类3', '商品种类4', '商品种类5'
            ];
            var seriesData = [{name: '商品种类1', value: 0.15}, {name: '商品种类2', value: 0.25}, {
                name: '商品种类3',
                value: 0.3
            }, {name: '商品种类4', value: 0.2}, {name: '商品种类5', value: 0.1}];
            var legendData = ['商品种类1', '商品种类2', '商品种类3', '商品种类4', '商品种类5'];
            return {
                legendData: legendData,
                seriesData: seriesData
            };
            function makeWord(max, min) {
                var nameLen = Math.ceil(Math.random() * max + min);
                var name = [];
                for (var i = 0; i < nameLen; i++) {
                    name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
                }
                return name.join('');
            }
        }

        myChart.setOption(option);



        //        柱状图
        var myChart2 = echarts.init(document.getElementById('main2'));
        myChart2.showLoading();
        function fetchData(cb) {
            // 通过 setTimeout 模拟异步加载
            setTimeout(function () {
                cb({
                    categories: ["第一周","第二周","第三周","第四周"],
                    data: [5000, 20000, 3600, 10000]
                });
            }, 3000);
        }
        option2 = {
            color: ['#3398DB'],
            title: {
                text: '本月每个星期订单量展示',
                subtext: '',
                x: '35%'
            },
            tooltip: {},
            legend: {
                radius: '55%',
                x:'85%',
                y:'0',
                data:['销售额']
            },
            xAxis: {
                data: []
            },
            yAxis: {},
            series: [{
                name: '销售额',
                type: 'bar',
                data: []
            }]
        };
        myChart2.showLoading();
        fetchData(function (data) {
            myChart2.hideLoading();
            myChart2.setOption({
                xAxis: {
                    data: data.categories
                },
                series: [{
                    // 根据名字对应到相应的系列
                    name: '销售额',
                    data: data.data
                }]
            });
        });
        myChart2.setOption(option2);



//        折线图
        var myChart3 = echarts.init(document.getElementById('main3'));
        option3 = {
            title: {
                text: '本月不同种类商品订单走向',
                x:'5%'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                y:'6%',
                data:['商品种类1','商品种类2','商品种类3','商品种类4','商品种类5']
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
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['2号','4号','6号','8号','10号','12号','14号','16号','18号','20号','22号','24号','26号','28号','30号']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'商品种类1',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[120, 132, 101, 134, 90, 230, 210,220, 182, 191, 234, 290, 330, 310,300]
                },
                {
                    name:'商品种类2',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,543]
                },
                {
                    name:'商品种类3',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[150, 232, 201, 154, 190, 330, 410,232, 201, 154, 190,345,124,543,655,413]
                },
                {
                    name:'商品种类4',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[320, 332, 301, 334, 390, 330, 320,432,753,343,573,758,765,123,454,876,654]
                },
                {
                    name:'商品种类5',
                    type:'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data:[820, 932, 901, 934, 1290, 1330, 1320,343,656,756,765,413,746,432,432,587,233,654]
                }
            ]
        };
        myChart3.setOption(option3);




    })


</script>

</html>