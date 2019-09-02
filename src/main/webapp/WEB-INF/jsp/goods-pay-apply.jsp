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
    <link rel="stylesheet" href="/ajax/css/index.css">
    <!--<link rel="stylesheet" href="css/supplier-mes.css">-->
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
        <li class="active">
            <a href="#">售后申请</a> <span class="divider"><span class="iconfont"></span></span>
        </li>
    </ul>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>售后申请查询</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>


    <form class="form-horizontal gd" style="padding-top: 20px;" id="gd2">
        <div class="row">
            <div class="control-group span8" >
                <label class="control-label">售后单状态：</label>
                <div class="controls">
                    <select class="sel1">
                        <option>全部</option>
                        <option>用户审核</option>
                        <option>售后结束</option>
                        <option>关闭</option>
                    </select>
                </div>
            </div>
            <div class="control-group span8">
                <label class="control-label">订单编号：</label>
                <div class="controls">
                    <input type="text" class="control-text">
                </div>
            </div>
            <div class="control-group span8 con-l" >
                <label class="control-label">售后单类型：</label>
                <div class="controls">
                    <select class="sel1">
                        <option>全部</option>
                        <option>用户审核</option>
                        <option>售后结束</option>
                        <option>关闭</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="btn s-btn" style="margin-left: 25px">
            <span class="iconfont icon-chaxun"></span>
            <span>查询</span>
        </div>
        <div class="btn2" style="width: 100px;margin-left:150px">
            <span>修改收货信息</span>
        </div>
        <div class="btn2" style="margin-left:300px">
            <span>发货</span>
        </div>
        <div class="btn2" style="margin-left: 410px;">
            <span>打款</span>
        </div>
        <div class="btn2" style="margin-left: 520px;">
            <span>关闭</span>
        </div>
        <hr>
    </form>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>售后申请列表</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>
    <div class="span95">
        <table cellspacing="0" class="table table-head-bordered table-bordered table-sm">
            <thead>
            <tr style="">
                <th>售后单编号</th>
                <th>售后单类型</th>
                <th>售后单状态</th>
                <th>商品编号</th>
                <th>商品名称</th>
                <th>数量</th>
                <th>订单编号</th>
                <th>申请退款金额</th>
                <th>售后原因</th>
                <th>申请时间</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <td><a href="#">审核</a> <a href="#"> 售后详情</a></td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <td><a href="#">审核</a> <a href="#"> 售后详情</a></td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <td><a href="#">审核</a> <a href="#"> 售后详情</a></td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <td><a href="#">审核</a> <a href="#"> 售后详情</a></td>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <td><a href="#">审核</a> <a href="#"> 售后详情</a></td>
            </tr>

            </tbody>
        </table>
    </div>

</div>

<!-- script end -->

</body>
</html>