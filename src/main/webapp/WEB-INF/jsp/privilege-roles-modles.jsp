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
        <li class="active">
            <a href="#">角色管理</a> <span class="divider"><span class="iconfont"></span></span>
        </li>
    </ul>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>角色选择</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>


    <form class="form-horizontal gd" style="padding-top: 20px;" >
        <div class="row">
            <div class="control-group span8">
                <label class="control-label">角色：</label>
                <div class="controls">
                    <select class="sel1">
                        <option>管理员</option>
                        <option>客服</option>
                        <option>运维</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="btn s-btn" >
            <span>保存</span>
        </div>
        <hr>
    </form>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>售后申请列表</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>
    <div class="span95">
        <table cellspacing="0" class="table table-head-bordered table-bordered qx table-sm">
            <thead>
            <tr style="">
                <th>模块ID</th>
                <th>模块名称</th>
                <th>是否可访问</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>商品新增</td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>2</td>
                <td>全部订单</td>
                <td><input type="checkbox" checked></td>
            </tr>
            <tr>
                <td>3</td>
                <td>会员信息</td>
                <td><input type="checkbox" checked></td>
            </tr>
            </tbody>
        </table>
    </div>

</div>

<!-- script end -->

</body>
</html>