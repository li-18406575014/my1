<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/dpl.css" rel="stylesheet">
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/bui.css" rel="stylesheet">
    <link rel="stylesheet" href="<%=request.getContextPath() %>/css/index.css">
    <link rel="stylesheet" href="<%=request.getContextPath() %>/font/iconfont.css">
</head>
<body>
<script src="<%=request.getContextPath() %>/js/jquery.min.js"></script>
<div class="box">
    <div class="control-group control-group1">
        <label class="control-label"><s>*</s>图片：</label>
        <c:if test="${banner.imgname==null }">
                <img src="<%=request.getContextPath() %>/img/ig.png" id="yushow" class="sh2"/>
        </c:if>
        
        <c:if test="${banner.imgname !=null }">
                <img src="<%=request.getContextPath() %>/serverimg/${banner.imgname}"  id="yushow" class="sh2"/>
        </c:if>

    </div>
    <form action="<%=request.getContextPath() %>/BannerLeftController/updateLeftimgs" id="form_2" method="post" enctype="multipart/form-data">
    <input type="text" id="file"  value="上传一个文件">
    <input type="text" id="imgname"  value="${banner.imgname }" name="imgname">
    <input type="text" id="id"  value="${banner.id }" name="id">
    <input type="file" class="jtt"  name="banner"  style="background: #880000;" >
    <div class="row">
        <div class="control-group">
            <label class="control-label"> 	运动项目名称：</label>
            <input type="text"  name="title" class="control-text" value="${banner.title }" >
        </div>
    </div>
    <div class="span8">
    </div>
    <div class="btn" id="submit">
        <span>添加</span>
    </div>
    
    <div class="btn" id="modification">
        <span>修改</span>
    </div>
</form>
</div>
${page }
</body>
<script>
    $(document).ready(function(){
    	 $('#submit').eq(0).click(function(){
                 $.ajax({
                    url:'<%= request.getContextPath()%>/BannerLeftController/increases',
                    type:"POST",
                    data:$('#form_2').serialize(),
                    dataType:"json",
                    success: function(data) {
                        if(data.message=="成功"){
                            window.location.href="<%=request.getContextPath() %>/BannerLeftController/paging";
                        }else{
                            $('#pos2').css({'display':'block'});
                            $('#pos1').addClass('dis-none');
                        }
                    }
                });
        }) 
        $('#modification').eq(0).click(function(){
                 $.ajax({
                    url:'<%= request.getContextPath()%>/BannerLeftController/updateLeftimgs',
                    type:"POST",
                    data:$('#form_2').serialize(),
                    dataType:"json",
                    success: function(data) {
                        if(data.message=="成功"){
                            window.location.href="<%=request.getContextPath() %>/BannerLeftController/paging";
                        }else{
                            $('#pos2').css({'display':'block'});
                            $('#pos1').addClass('dis-none');
                    }
                    }
                });
        }) 
        let imgarr=['jpeg','png','gif'];
        let size=10*1024*1024;
        console.log($('.jt'))
        
        $('.jtt').get(0).onchange=function (e){
           var that=this;
            console.dir(this)
            var read=new FileReader();
            read.readAsDataURL(this.files[0]);
            console.log($('.sh2').get(0).src)
            read.onload=function () {
                $('.sh2').get(0).src=this.result;
            }
            
            var formData = new FormData($("#form_2")[0]);
            $.ajax({
               url : '<%= request.getContextPath()%>/BannerLeftController/preview',
               type : "POST",
               data : formData,
               dataType : "json",
               processData : false, //必须false才会避开jQuery对 formdata 的默认处理
               contentType : false, //必须false才会自动加上正确的Content-Type
               cache : false, //true的话会读缓存
               success : function(data) {
               	console.log(data);
                $.each(data,function(i,obj){
                	$("#form_2").append('<input type="text" name="banner" value="'+obj.path+'">');
             		$("#form_2").append('<input type="text" name="url" value="'+obj.savePath+'">');
                    })
               },
            error: function(returnedData) {  
                alert("加载数据出错!");
               }    
            });
            
        }
    })
</script>
</html>