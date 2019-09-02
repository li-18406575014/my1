<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"  %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Title</title>
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/dpl.css" rel="stylesheet">
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/bui.css" rel="stylesheet">
    <!--<link rel="stylesheet" href="css/common.css">-->
    <link rel="stylesheet" href="<%=request.getContextPath() %>/font/iconfont.css">
    <!--<link rel="stylesheet" href="css/supplier-mes.css">-->
    <link rel="stylesheet" href="<%=request.getContextPath() %>/css/index.css">
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
            <a href="#">用户管理</a> <span class="divider"><span class="iconfont"></span></span>
        </li>
    </ul>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>用户查询</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>


    <form class="form-horizontal gd" style="padding-top: 20px;" id="gd2">
        <div class="row">
            <div class="control-group span8">
            </div>
            
        </div>
        <div class="btn s-btn">
        </div>
        <a href="<%=request.getContextPath() %>/JueSeController/increase">
            <div class="btn2" style="margin-left:150px;color:#000;">
                <span>新增</span>
            </div>
        </a>
        
        <hr>
    </form>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>用户列表</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>
    <div class="span95">
        <table cellspacing="0" class="table table-head-bordered table-bordered table-sm">
            <thead>
            <tr style="">
            	<th>角色标志</th>
                <th>角色名</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${list }" var="obj">
            	<tr>
                <td>${obj.jsbiaozhi }</td>
                <td>${obj.jsname }</td>
                <td> <a id="but" href="<%=request.getContextPath() %>/JueSeAd?id=${obj.id }&type=bianji">编辑</a><a href="<%=request.getContextPath() %>/JueSeInput?id=${obj.id }&type=shanchu"">删除</a></td>
           	 </tr>
            </c:forEach>

            </tbody>
        </table>
    </div>

</div>

<!-- script end -->

</body>


</html>