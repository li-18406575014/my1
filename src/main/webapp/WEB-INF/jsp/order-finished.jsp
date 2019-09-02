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
    <link rel="stylesheet" href="/ajax/font/iconfont.css">
    <!--<link rel="stylesheet" href="css/supplier-mes.css">-->
    <link rel="stylesheet" href="/ajax/css/index.css">
</head>
<style>
</style>
<body>

<div class="doc-content">
    <ul class="breadcrumb breadcrumb2"></ul>
    <ul class="breadcrumb">
        <li>
            <span class="iconfont icon-shouye"></span>
            <a href="#">首页</a> <span class="divider"><span class="iconfont icon-down-trangle1"></span></span>
        </li>
        <li>
            <a href="#">订单管理</a> <span class="divider"><span class="iconfont icon-down-trangle1"></span></span>
        </li>
        <li class="active">已完成订单</li>
    </ul>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>订单查询</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>


    <form class="form-horizontal gd" style="padding-top: 20px;" id="gd2">

        <div class="row">
            <div class="control-group span8">
                <label class="control-label">订单编号：</label>
                <div class="controls">
                    <input type="text" class="control-text">
                </div>
            </div>
            <div class="control-group span13">
                <label class="control-label">订单时间段：</label>
                <div class="controls">
                    <input type="text" class="calendar" >
                    ～
                    <input type="text" class="calendar" >
                </div>
            </div>
        </div>
        <div class="btn s-btn">
            <span class="iconfont icon-chaxun"></span>
            <span>查询</span>
        </div>
        <hr>
    </form>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>已完成订单列表</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>
    <div class="span95">
        <table cellspacing="0" class="table table-head-bordered table-bordered table2 table-sm">
            <thead>
            <tr style="">
                <th>订单编号</th>
                <th>订单完成时间</th>
                <th>应付金额</th>
                <th>实付金额</th>
                <th>运费</th>
                <th>会员名称</th>
                <th>商品总数</th>
                <th>查看</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=order-dis.jsp">详情查看</a></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=order-dis.jsp">详情查看</a></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=order-dis.jsp">详情查看</a></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=order-dis.jsp">详情查看</a></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=order-dis.jsp">详情查看</a></td>
            </tr>

            </tbody>
        </table>
    </div>
    <div class="right3">
        <div>规格说明：</div>
        <div>1.列表说明：</div>
        <div>1.1 当存在多个物流公司和物流单号时，以逗号隔开显示</div>
    </div>

</div>

</body>
<script src="http://g.tbcdn.cn/fi/bui/jquery-1.8.1.min.js"></script>
<script src="http://g.alicdn.com/bui/seajs/2.3.0/sea.js"></script>
<script src="http://g.alicdn.com/bui/bui/1.1.21/config.js"></script>
<script type="text/javascript">
    $(document).ready(function () {
        BUI.use('bui/calendar', function (Calendar) {
            var datepicker = new Calendar.DatePicker({
                trigger: '.calendar',
                autoRender: true
            });
        });
    })
</script>
</html>