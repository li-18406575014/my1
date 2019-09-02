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
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/index.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/font/iconfont.css">
</head>
<body>
<script src="<%=request.getContextPath()%>/js/jquery.min.js"></script>
<div class="box">
    <div class="control-group control-group1">
        <label class="control-label"><s>*</s>图片：</label>
        <c:if test="${banner.imgname==null }">
                <img src="<%=request.getContextPath()%>/img/ig.png" id="yushow" class="sh2"/>
        </c:if>
        
        <c:if test="${banner.imgname !=null }">
                <img src="<%=request.getContextPath() %>/serverimg/${banner.imgname}"  id="yushow" class="sh2"/>
        </c:if>

    </div>
    <form action="<%=request.getContextPath() %>/FourController/updatePurposes"  method="post" id="form_2">
    <input type="text" id="file"  value="上传一个文件">
    <input type="text" id="imgname"  value="${banner.imgname }" name="imgname">
    <input type="text" id="id"  value="${banner.id }" name="id">
    <input type="file" class="jtt"  name="banner"  style="background: #880000;" >
    <div class="row">
        <div class="control-group">
            <label class="control-label">四大宗旨：</label>
            <input type="text"  name="fPurpose" class="control-text" value="${banner.fPurpose }" >
        </div>
        <div class="control-group">
            <label class="control-label">介绍：</label>
            <input type="text"  name="fPurposeJieshao" class="control-text" value="${banner.fPurposeJieshao }" >
        </div>
    </div>
    <div class="span8">
        <!--<p id="pos1" class="dis-none">-->
            <!--<div class="tips tips-small tips-warning">-->
                <!--<span class="x-icon x-icon-small x-icon-error"><i class="icon icon-white icon-bell"></i></span>-->
                <!--<div class="tips-content">信息提交失败！</div>-->
            <!--</div>-->
        <!--</p>-->
        <!--<p id="pos2" class="dis-none">-->
            <!--<div class="tips tips-small  tips-success">-->
                <!--<span class="x-icon x-icon-small x-icon-success"><i class="icon icon-white icon-ok"></i></span>-->
                <!--<div class="tips-content">保存成功！</div>-->
            <!--</div>-->
        <!--</p>-->
    </div>
    <div class="btn" id="submit">
        <span>添加</span>
    </div>
    <div class="btn" id="submit">
        <span><input type="submit" value="修改"></span>
    </div>
</form>
</div>
${page }
</body>
<script>
    $(document).ready(function(){
    	 $('#submit').eq(0).click(function(){
                 $.ajax({
                    url:'<%= request.getContextPath()%>/FourController/insertPurpose',
                    type:"POST",
                    data:$('#form_2').serialize(),
                    dataType:"json",
                    success: function(data) {
                        if(data.message=="成功"){
                            window.location.href="<%=request.getContextPath()%>/FourController/selectPurpose";
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
               url : '<%= request.getContextPath()%>/FourController/preview',
               type : "POST",
               data : formData,
               dataType : "json",
               processData : false, //必须false才会避开jQuery对 formdata 的默认处理
               contentType : false, //必须false才会自动加上正确的Content-Type
               cache : false, //true的话会读缓存
               success : function(data) {
               	console.log(data);
             	$.each(data,function(i,obj){
             		$("#form_2").append('<input type="text" name="path" value="'+obj.path+'">');
             		$("#form_2").append('<input type="text" name="savePath" value="'+obj.savePath+'">');
             	})
               }
            });
            
        }
    })
</script>
</html>