<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Title</title>
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/dpl.css" rel="stylesheet">
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/bui.css" rel="stylesheet">
    <link rel="stylesheet" href="/ajax/css/index.css">
    <link rel="stylesheet" href="/ajax/font/iconfont.css">
    <script src="/ajax/js/jquery.min.js"></script>
</head>

<body>
<div class="doc-content">
    <ul class="breadcrumb breadcrumb2"></ul>
    <ul class="breadcrumb">
        <li>
            <span class="iconfont icon-shouye"></span>
            <a href="#">首页</a> <span class="divider"><span class="iconfont icon-down-trangle1"></span></span>
        </li>
        <li class="active">姓氏审核</li>
    </ul>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>姓氏审核</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>
    <ul class="nav-tabs" id="tit">
        <li class="active"><a href="#">基本信息</a></li>
    </ul>
    
    <div class="content conn" >
        <div class="row roww ">
            <div class="span20 doc-content">
                <form class="form-horizontal well gd" id="form1" action="#(path)/clunbExamine/update">
                	<input type="hidden" name="tClunbExamine.id" value="#(tClunbExamine.id)">
                	<input id="flag" type="hidden" name="tClunbExamine.flag" value="">
                	<input   type="hidden" name="club" value="#(tClunbExamine.club)">
                    <div class="row">
                        <div class="control-group span9">
                            <label class="control-label">姓氏：</label>
                            <div class="controls">
                                #(tClunbExamine.club)
                            </div>
                        </div>
                        <div class="control-group span9">
                            <label class="control-label">申请时间：</label>
                            <div class="controls">
                            	#date(tClunbExamine.created, "yyyy-MM-dd HH:mm:ss")
                            </div>
                        </div>
                        <div class="control-group span9">
                            <label class="control-label">审核人：</label>
                            <div class="controls">
                                #(tClunbExamine.confrim_user)
                            </div>
                        </div>
                        <div class="control-group span9">
                            <label class="control-label">审核时间：</label>
                            <div class="controls">
                                #date(tClunbExamine.modify, "yyyy-MM-dd HH:mm:ss")
                            </div>
                        </div>
                        <div class="control-group span9">
                            <label class="control-label">申请人：</label>
                            <div class="controls">
                                #(tClunbExamine.account_id)
                            </div>
                        </div>
                        <div class="control-group span9">
                            <label class="control-label">状态：</label>
                            <div class="controls">
		                            #(tClunbExamine.get("flag1"))
                            </div>
                        </div>
                        <div class="control-group span22">
                            <label class="control-label">备注：</label>
                            <div class="controls">
                                <textarea type="text" name="tClunbExamine.remarks">#(tClunbExamine.remarks)</textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-actions offset3">
                            <div  onclick="submit(1002)" class="button button-primary">通过</div>
                            <div  onclick="submit(1003)" class="button button-primary">不通过</div>
                           <a style="color: white" href="#(path)/clunbExamine"><div  class="button button-primary">返回</div></a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
<script type="text/javascript">
function submit(flag){
	$("#flag").val(flag);
	$("#form1").submit();
}

</script>

</div>
</body>
 
</html>