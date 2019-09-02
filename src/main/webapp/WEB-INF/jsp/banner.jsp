<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Title</title>
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/dpl.css" rel="stylesheet">
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/bui.css" rel="stylesheet">
    <link rel="stylesheet" href="/ajax/css/index.css">
    <link rel="stylesheet" href="/ajax/font/iconfont.css">
</head>
<script type="text/javascript" src="/ajax/js/jquery.min.js"></script>
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
        <li class="active">首页banner列表</li>
    </ul>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>首页banner列表</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>

    <div class="span95">
    <table cellspacing="0" class="table table-head-bordered table-bordered">
        <a href="/ajax/ajax/Jump?path=banner-add.jsp">
            <div class="s-btn">
                <span style="color: black">新增</span>
            </div>
        </a>
        <thead>
        <tr style="">
            <th>图片</th>
            <th>排序</th>
            <th>内容</th>
            <th>介绍</th>
            <th>是否启用</th>
            <th>标题</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach items="${banner}" var="obj">
	        <tr>
	            <td>
	                <img src="<%=request.getContextPath() %>/file/${obj.banner}" alt="">
	            </td>
	            <td>${obj.order}</td>
	            <td>${obj.content}</td>
	            <td>${obj.introduce}</td>
	            <c:if test="${obj.start == 1}">
	            	<td><span class="iconfont icon-duiconverted"></span></td>
	            </c:if>
     			 <c:if test="${obj.start == 0}">
     			 	<td><span class="iconfont icon-cuoconverted"></span></td>
	            </c:if>
	            <td>${obj.title}</td>
	            <td><a href="/ajax/ajax/BannerAddOperation?id=${obj.id}&type=update">编辑</a> <a href="/ajax/ajax/BannerAddOperation?id=${obj.id}&type=delete">删除</a></td>
	        </tr>
        </c:forEach>
        </tbody>
    </table>
</div>
</div>

<script>
	

    $.ajax({
        type: "POST",//请求方式
        url: "login.php",//地址，就是json文件的请求路径
        dataType: "json",//数据类型可以为 text xml json  script  jsonp
        success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数
            addBox(result);
        }
    });
</script>
<script type="text/javascript">
//根据后台传的值选中下拉框
$(function(){
	$("#pageSize").val("${number}");
})
//点击分页按钮时触发的事件
function page(i){
	//获取到下拉框选中的值
	var pageSize = $("#pageSize").find("option:selected").text()
	//跳转路径再次查询分页数据
	window.location.href="/ajax/ajax/BannerOperation?currentPage="+i+"&pageSize="+pageSize+" "
}
</script>
 ${page}
</body>
</html>