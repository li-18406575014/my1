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
                <label class="control-label">角色：</label>
                <div class="controls">
                    <select class="sel1"  onchange="role()">
                    	<option value="0">请选择</option>
                        <c:forEach items="${list1 }" var="obj">
                        	<option  value="${obj.jsbiaozhi }">${obj.jsname }</option>
                        </c:forEach>
                    </select>
                </div>
            </div>
            
        </div>
        <div class="btn s-btn">
        </div>
        <a href="<%=request.getContextPath() %>/FunctionController/increase">
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
           		<th>id</th>
            	<th>功能名字</th>
                <th>功能级别</th>
                <th>上级功能</th>
                <th>url</th>
                <th>是否显示</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${list }" var="obj">
            	<tr>
            	<td>${obj.id }</td>
                <td>${obj.funName }</td>
                <td>${obj.funRank }</td>
                <td>${obj.funTop }</td>
                <td>${obj.funUrl }</td>
                <td>
	                是：<input <c:if test="${obj.funxianshi==1}">checked</c:if> type="radio" value="1" name="isvisit${obj.id}" onchange="privilege('${obj.id}','1')">
	                否：<input <c:if test="${obj.funxianshi==0}">checked</c:if> type="radio" value="0" name="isvisit${obj.id}" onchange="privilege('${obj.id}','0')" >
				</td>
                <td><a href="<%=request.getContextPath() %>/FunctionController/delectFunction?id=${obj.id }&type=shanchu"">删除</a></td>
            
           	 </tr>
            </c:forEach>

            </tbody>
        </table>
    </div>

</div>

<!-- script end -->

</body>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/jquery.min.js"></script>
	<script type="text/javascript">
		$(function(){
			$(".sel1").val("${id}");
		})
		function role(){
			var  role_id = $(".sel1").val();
				window.location.href="<%=request.getContextPath()%>/FunctionController/differentRoles?role_id="+role_id+"";
		}
		
		function privilege(privilege_id,isvisit){
			var  role_id = $(".sel1").val();
			if(role_id==null || role_id==""){
				alert("请选择角色");
			}else{
				$.ajax({
			        url : '<%= request.getContextPath()%>/FunctionController/whetherToModify',
			        type : "POST",
			        data : {"privilege_id":privilege_id,"isvisit":isvisit,"role_id":role_id},
			        dataType : "text",
			        success : function(data) {
			        	console.log(data);
			        	if(data=="成功"){
//		 	        		window.location.href="/FunctionCenter";
			        		role()
			        	}
			        }
			     });
			}
				
		}
	
	</script>
</html>