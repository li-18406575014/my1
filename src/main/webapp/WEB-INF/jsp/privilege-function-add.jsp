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

<div class="row">
    <div class="span16 doc-content">
        <form action="<%=request.getContextPath() %>/FunctionController/insertFunctiom " method="post" class="form-horizontal well gd" style="background: white;margin-top: 50px;box-shadow:none;" id="gd2">
            <div class="row">
                <div class="control-group span8">
                    <div class="controls">
                    <label class="control-label"><s>*</s>功能名字：</label>
                        <input type="text" class="control-text" name="funName" value="${shiTi.funname }">
                    </div>
                     <div class="controls">
                    <label class="control-label"><s>*</s>功能级别：</label>
                        <%-- <input type="text" class="control-text" name="funrank" value="${shiTi.funrank }"> --%>
                   		<select name="funRank" onchange="aa()" id="xiala">
	                    	<c:forEach items="${list2 }" var="list">
	                    			<option value="${list.funRank }">${list.funRank }</option>
	                    	</c:forEach>
                    	</select>
                   	
                    </div>
                    <div class="controls" style="display:none" id="div1">
                    <label class="control-label"><s>*</s>上级功能：</label>
	                    <select name="funTop">
		                    	<c:forEach items="${list }" var="obj">
		                    			<option value="${obj.id }">${obj.funName }</option>
		                    	</c:forEach>
                    	</select>
                        <%-- <input type="text" class="control-text" name="funtop" value="${shiTi.funtop }"> --%>
                    </div>
                    <div class="controls">
                    <label class="control-label"><s>*</s>url：</label>
                        <input type="text" class="control-text" name="funUrl" value="${shiTi.url }">
                    </div>
                    <div class="controls">
                    <label class="control-label"><s>*</s>id：</label>
                        <input type="hidden" class="control-text" name="id" value="${shiTi.id }">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-actions offset3">
                	<input type="submit" class="button button-primary ub" id="but-c" style="margin-top: 15px;margin-left: -80px" value="保存">
                    <button type="reset" class="button ur">重置</button>
                </div>
            </div>
        </form>
    </div>
</div>

</body>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery.min.js"></script>
<script type="text/javascript">

	function aa(){
		
		var xiala = $("#xiala").val();
		if (xiala == 1) {
			var oDiv=document.getElementById('div1');
			oDiv.style.cssText = "display:none";
		}else {
			var oDiv=document.getElementById('div1');
			oDiv.style.cssText = "display:block";
		}
		
	}
</script>
</html>