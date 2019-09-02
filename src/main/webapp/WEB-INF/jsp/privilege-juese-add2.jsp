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
    <!--<link rel="stylesheet" href="css/common.css">-->
    <link rel="stylesheet" href="<%=request.getContextPath() %>/font/iconfont.css">
    <!--<link rel="stylesheet" href="css/supplier-mes.css">-->
    <link rel="stylesheet" href="<%=request.getContextPath() %>/css/index.css">
</head>
<style>
</style>


<body>

<div class="row">
    <div class="span16 doc-content">
        <form action="<%=request.getContextPath() %>/JueSeInput " method="post" class="form-horizontal well gd" style="background: white;margin-top: 50px;box-shadow:none;" id="gd2">
            <div class="row">
                <div class="control-group span8">
                    <div class="controls">
                    <label class="control-label"><s>*</s>角色标志：</label>
                        	<input type="text" id="bz"	value="${obj.jsbiaozhi }">${obj.jsbiaozhi }
                    </div>
                    <div class="controls">
                    <label class="control-label"><s>*</s>角色名称：</label>
                        <select name="jsname" id="sel"  onchange="aa()" > 
                        	<c:forEach items="${list }" var="obj">
                        		<option value=${obj.jsbiaozhi }>${obj.jsname }
                        		</option>
                        	</c:forEach>
                        			
						</select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-actions offset3">
                	<input type="submit"  class="button button-primary ub" id="but-c" style="margin-top: 15px;margin-left: -80px" value="保存">
                    <button type="reset" class="button ur">重置</button>
                </div>
            </div>
        </form>
    </div>
</div>

<script type="text/javascript" src="<%=request.getContextPath() %>/js/jquery.min.js"></script>
<script type="text/javascript">
//下拉框赋值
$(function(){
	$("#sel").val("${bz}");	
	
});

//下拉框选择后，自动出现对应的值
 function aa() {
   		$("#bz").val($("#sel").val());
 }
</script>
</body>

</html>