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
    <!--<link rel="stylesheet" href="css/goods-category-add.css">-->
    <link rel="stylesheet" href="/ajax/font/iconfont.css">
    <link rel="stylesheet" href="/ajax/css/index.css">
</head>
<style>
</style>
<script type="text/javascript">
$(document).ready(function(){
  	 $('#submit').click(function(){
               $.ajax({
                  url:'<%= request.getContextPath()%>/EstimatePasswordSave',
                  type:"POST",
                  data:$('#form_1').serialize(),
                  dataType:"json"
                  
              });
      }) 
	})
	


</script>
<body>

<div class="doc-content">
    <ul class="breadcrumb breadcrumb2"></ul>
    <ul class="breadcrumb">
        <li>
            <span class="iconfont icon-shouye"></span>
            <a href="#">首页</a> <span class="divider"><span class="iconfont icon-down-trangle1"></span></span>
        </li>
        <li class="active">修改密码</li>
    </ul>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>修改密码</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>

    <form class="form-horizontal well pass" id="form_1" name="form_1">
        <div class="row">
            <div class="control-group span14">
                <label class="control-label"><s>*</s>原密码：</label>
                <div class="controls">
                    <input type="text" id="goods-name"  name="goods-name" class="control-text" onblur="estimate()">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="control-group span14">
                <label class="control-label"><s>*</s>新密码：</label>
                <div class="controls">
                    <input type="text" id="goods-dis"  name="goods-dis" class="control-text">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="control-group span14">
                <label class="control-label"><s>*</s>确认密码：</label>
                <div class="controls">
                    <input type="text" id="goodss-dis"  name="goodss-dis" class="control-text" onblur="estimate1()">
                </div>
            </div>
        </div>
		<input type="hidden" name="id" value="${map.id }">
        <div class="row">
            <div class="form-actions offset3">
                <input type="submit"  id="submit" name="submit" value="保存" class="button button-primary" style="margin-top: 20px;margin-left: -20px" >
                <button type="reset" class="button btn-reset">重置</button>
            </div>
        </div>
    </form>

</div>

<!-- script end -->

</body>
	<script type="/ajax/js/jquery.min.js"></script>
	<script type="text/javascript">
		
		function estimate(){
			var goodsname = document.getElementById("goods-name").value;
			if (goodsname == "${map.password}") {
			}else {
				alert("密码不正确!!");
			}
			
		}
		
		function estimate1(){
			var goodsdis = document.getElementById("goods-dis").value;
			var goodssdis = document.getElementById("goodss-dis").value;
			
			if (goodsdis == goodssdis) {
			}else {
				alert("两次密码不正确!!!")
			}
		}
	
		
	</script>

</html>