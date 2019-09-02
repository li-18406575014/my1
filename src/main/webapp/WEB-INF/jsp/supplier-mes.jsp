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
            <a href="#">供应商信息</a> <span class="divider"><span class="iconfont"></span></span>
        </li>
    </ul>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>供应商信息查询</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>


    <form class="form-horizontal gd" style="padding-top: 20px;" id="gd2">
        <div class="row">
            <div class="control-group span8">
                <label class="control-label">供应商名称：</label>
                <div class="controls">
                    <input type="text" class="control-text">
                </div>
            </div>
            <div class="control-group span8">
                <label class="control-label">联系人：</label>
                <div class="controls">
                    <input type="text" class="control-text">
                </div>
            </div>
        </div>
        <div class="btn s-btn">
            <span class="iconfont icon-chaxun"></span>
            <span>查询</span>
        </div>
        <a href="supplier-mes-add.jsp">
            <div class="btn2">
                <span style="color: black">新增</span>
            </div>
        </a>
        <hr>
    </form>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>供应商列表</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>
    <div class="span95">
        <table cellspacing="0" class="table table-head-bordered table-bordered table-sm">
            <thead>
            <tr style="">
                <th>供应商编码</th>
                <th>供应商名称</th>
                <th>联系人</th>
                <th>手机号码</th>
                <th>经营类目</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>V0001</td>
                <td>Ing购</td>
                <td>宋仲基</td>
                <td>13524330312</td>
                <td>食品饮料、水果</td>
                <td><a href="/ajax/ajax/Jump?path=supplier-mes-add.jsp">编辑</a> <a href="/ajax/ajax/Jump?path=supplier-mes-check.jsp"> 供应商详情</a> <a href="#">删除</a></td>
            </tr>
            <tr>
                <td>V0002</td>
                <td>Ing购</td>
                <td>宋仲基</td>
                <td>13524330312</td>
                <td>食品饮料、水果</td>
                <td><a href="/ajax/ajax/Jump?path=supplier-mes-add.jsp">编辑</a> <a href="/ajax/ajax/Jump?path=supplier-mes-check.jsp"> 供应商详情</a> <a href="#">删除</a></td>
            </tr>
            <tr>
                <td>V0002</td>
                <td>Ing购</td>
                <td>宋仲基</td>
                <td>13524330312</td>
                <td>食品饮料、水果</td>
                <td><a href="/ajax/ajax/Jump?path=supplier-mes-add.jsp">编辑</a> <a href="/ajax/ajax/Jump?path=supplier-mes-check.jsp"> 供应商详情</a> <a href="#">删除</a></td>
            </tr>


            </tbody>
        </table>
    </div>

</div>

<!-- script end -->

</body>
</html>