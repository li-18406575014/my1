<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"  %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<c:forEach items="${list}" var="objj">
<img alt="" src="<%=request.getContextPath() %>/file/${objj.usre }" height="150" width="150">
</c:forEach>

<%-- ${obj.message }
<img alt="" src="${obj.savePath}/${obj.saveFilename}" height="150"width="150"> --%>
<!-- <img alt="" src="C:\Users\28061\Desktop\图片\016FA6E3045A78C4185345987837CE10.jpg" height="150"width="150"> -->
<%-- <img alt="" src="<%request.getContextPath();%>/upload\4\3\1.jpg" height="150"width="150"> --%>
<!-- <img src="http://localhost:8080/test-springmvc/upload/4\3\1.jpg" height="150"width="150"> -->	
</body>
</html>