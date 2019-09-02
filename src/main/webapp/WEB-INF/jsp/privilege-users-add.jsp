<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Title</title>
<link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/dpl.css"
	rel="stylesheet">
<link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/bui.css"
	rel="stylesheet">
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
			<form
				action="<%=request.getContextPath()%>/UserxxController/insertUserxx "
				class="form-horizontal well gd"
				style="background: white; margin-top: 50px; box-shadow: none;"
				id="gd2">
				<div class="row">
					<div class="control-group span8">
						<div class="controls">
							<label class="control-label"><s>*</s>用户名：</label> <input
								type="text" class="control-text" name="username"
								value="${shiTi.name }">
						</div>
						<div class="controls">
							<label class="control-label"><s>*</s>密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
							<input type="text" class="control-text" name="password"
								value="${shiTi.password }">
						</div>
						<div class="controls">
							<label class="control-label"><s>*</s>角&nbsp;&nbsp;&nbsp;&nbsp;色：</label>
							<select name="juese" id="sel1">
								<c:forEach items="${list }" var="obj">
									<option value="${obj.jsbiaozhi }">${obj.jsname }</option>
								</c:forEach>
							</select>
						</div>
						<input type="hidden" name="id" value="${shiTi.id }">
					</div>
				</div>
				<div class="row">
					<div class="form-actions offset3">
						<input type="submit" class="button button-primary ub" id="but-c"
							style="margin-top: 15px; margin-left: -80px" value="保存">
						<button type="reset" class="button ur" id="modification" onclick="aa()">重置</button>
					</div>
				</div>
			</form>
		</div>
	</div>


</body>
<script type="text/javascript" src="<%=request.getContextPath() %>/js/jquery.min.js"></script>
<script type="text/javascript">
	$(function() {
		$("#sel1").val("${js}");
	})

	function aa() {
		$.ajax({
			type : "post", //请求方式有get和post两种
			url : '<%=request.getContextPath()%>/UserxxController/updateUserxxs', //请求的路径(用绝对路径)
			data : $('#gd2').serialize(), //要提交的表单进行序列化
			dataType : "json", //返回的数据格式：json/xml/html/script/jsonp/text
			success: function(data) {
                if(data.message=="成功"){
                    window.location.href="<%=request.getContextPath() %>/UserxxController/selectUserxxAll";
                }else{
                    $('#pos2').css({'display':'block'});
                    $('#pos1').addClass('dis-none');
                }
            },
			error : function(returnedData) {
				alert("加载数据出错!");
			}
		})
	}
</script>





</html>