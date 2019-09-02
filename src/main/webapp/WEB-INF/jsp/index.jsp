<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"  %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>掌方圆商城管理后台</title>
    <link rel="stylesheet" href="<%=request.getContextPath() %>/css/index.css">
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/dpl.css" rel="stylesheet">
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/bui.css" rel="stylesheet">
    <link rel="stylesheet" href="<%=request.getContextPath() %>/font/iconfont.css">
</head>
<script src="<%=request.getContextPath() %>/js/jquery.min.js"></script>
<body>
<div class="head">
    <div class="title">掌方圆商城管理后台</div>
    <div class="right1">

        <span class="iconfont icon-yonghu"></span>
        <span>Admin</span>
        <a href="login.jsp" style="color: white">
            <span class="iconfont icon-tuichu"></span>
            <span>退出</span>
        </a>
    </div>
</div>

<ul class="left11">
    <li>
        <a href="/ajax/ajax/Jump?path=home.jsp" target="right">
            <span class="iconfont icon-shouye"></span>
            <span>首页</span>
            <span class="iconfont icon-xiangxia xx" style="opacity: 0"></span>
            <span class="iconfont icon-xiangxia rotate" style="opacity: 0"></span>
        </a>
        <ul></ul>
    </li>
   <%-- <c:forEach items="${list2 }" var="obj">
   	 <li>
        <a>
            <span class="iconfont icon-shouye--dibuge-"></span>
            <span>${obj.funName }</span>
            <span class="iconfont icon-xiangxia xx"></span>
            <span class="iconfont icon-xiangxia rotate"></span>
        </a>
       	<ul>
       		<c:forEach items="${list3 }" var="list">
		       	<c:forEach items="${list }" var="wo">
		       			<c:if test="${wo.funTop == obj.id }">
		            <li>
		                <a href="${wo.funUrl }" target="right">
		                    <span>${wo.funName }</span>
		                </a>
		            </li>
		        </c:if>
		       	</c:forEach>
		    </c:forEach>
        </ul>
    </li>
   </c:forEach> --%>
   <li>
        <a>
            <span class="iconfont icon-shangpinguanli"></span>
            <span>商品管理</span>
            <span class="iconfont icon-xiangxia xx"></span>
            <span class="iconfont icon-xiangxia rotate"></span>
        </a>
        <ul>
            <li>
                <a href="<%=request.getContextPath() %>/CommodityAdd/goToCommodityAdd" target="right">
                    <span>商品新增</span>
                </a>
            </li>
            <li>
                <a href="<%=request.getContextPath() %>/BannerLeftController/paging" target="right">
                    <span><span>商品分类新增</span></span>
                </a>
            </li>
            <li>
                <a href="/ajax/RecreationOperation" target="right">
                    <span>商品信息查询</span>
                </a>
            </li>
            <li>
                <a href="/ajax/ajax/Jump?path=goods-category-check.jsp" target="right">
                    <span>商品分类查询</span>
                </a>
            </li>
            <li>
                <a href="/ajax/ajax/Jump?path=goods-mes-edit.jsp" target="right">
                    <span>商品编辑</span>
                </a>
            </li>
            <li>
                <a href="/ajax/ajax/Jump?path=goods-mes-dis.jsp" target="right">
                    <span>商品详情</span>
                </a>
            </li>
        </ul>
    </li>
    <li>
        <a>
            <span class="iconfont icon-dingdanguanli"></span>
            <span>订单管理</span>
            <span class="iconfont icon-xiangxia xx"></span>
            <span class="iconfont icon-xiangxia rotate"></span>
        </a>
        <ul>
            <li>
                <a href="/ajax/ajax/Jump?path=order-pay.jsp" target="right">
                    <span>已支付订单</span>
                </a>
            </li>
            <li>
                <a href="/ajax/ajax/Jump?path=order-deliver-goods.jsp" target="right">
                    <span>已发货订单</span>
                </a>
            </li>
            <li>
                <a href="/ajax/ajax/Jump?path=order-finished.jsp" target="right">
                    <span>已完成订单</span>
                </a>
            </li>
            <li>
                <a href="/ajax/ajax/Jump?path=order-all.jsp" target="right">
                    <span>全部订单</span>
                </a>
            </li>
        </ul>
    </li>
    <li>
        <a>
            <span class="iconfont icon-gongyingshang2"></span>
            <span>店铺管理</span>
            <span class="iconfont icon-xiangxia xx"></span>
            <span class="iconfont icon-xiangxia rotate"></span>
        </a>
        <ul>
            <li>
                <a href="/ajax/ajax/Jump?path=store-mes-check.jsp" target="right">
                    <span>店铺信息查询</span>
                </a>
            </li>
            <li>
                <a href="/ajax/ajax/Jump?path=store-mes-edit.jsp" target="right">
                    <span>店铺编辑多图上传</span>
                </a>
            </li>
			<li>
                <a href="/ajax/ajax/Jump?path=store-mes-edit-one.jsp" target="right">
                    <span>店铺编辑单图上传</span>
                </a>
            </li>
            <li>
                <a href="/ajax/ajax/Jump?path=store-mes-dis.jsp" target="right">
                    <span>店铺详情</span>
                </a>
            </li>
        </ul>
    </li>
    <li>
        <a>
            <span class="iconfont icon-gongyingshang"></span>
            <span>供应商管理</span>
            <span class="iconfont icon-xiangxia xx"></span>
            <span class="iconfont icon-xiangxia rotate"></span>
        </a>
        <ul>
            <li>
                <a href="/ajax/ajax/Jump?path=supplier-mes.jsp" target="right">
                    <span>供应商信息查询</span>
                </a>
            </li>
            <li>
                <a href="/ajax/ajax/Jump?path=supplier-mes-check.jsp" target="right">
                    <span>信息查看</span>
                </a>
            </li>
            <li>
                <a href="/ajax/ajax/Jump?path=supplier-mes-add.jsp" target="right">
                    <span>信息新增</span>
                </a>
            </li>
        </ul>
    </li>
    <li>
        <a>
            <span class="iconfont icon-shouhouwentichulishenqing"></span>
            <span> 售后申请</span>
            <span class="iconfont icon-xiangxia xx"></span>
            <span class="iconfont icon-xiangxia rotate"></span>
        </a>
        <ul>
            <li>
                <a href="/ajax/ajax/Jump?path=goods-pay-apply.jsp" target="right">
                    <span>售后申请</span>
                </a>
            </li>
        </ul>
    </li>
    <li>
        <a>
            <span class="iconfont icon-quanxian"></span>
            <span>权限管理</span>
            <span class="iconfont icon-xiangxia xx"></span>
            <span class="iconfont icon-xiangxia rotate"></span>
        </a>
        <ul>
            <li>
                <a href="/ajax/ajax/Jump?path=privilege-roles-modles.jsp" target="right">
                    <span>角色模块管理</span>
                </a>
            </li>
            <li>
                <a href="<%=request.getContextPath() %>/UserxxController/selectUserxxAll" target="right">
                    <span>用户管理</span>
                </a>
            </li>
             <li>
                <a href="<%=request.getContextPath() %>/JueSeController/humpJueSe" target="right">
                    <span>角色管理</span>
                </a>
            </li>
            <li>
                <a href="<%=request.getContextPath() %>/FunctionController/selectFunctionAll" target="right">
                    <span>功能管理</span>
                </a>
            </li>
            <li>
                <a href="/ajax/EstimatePassword" target="right">
                    <span>修改密码</span>
                </a>
            </li>
        </ul>
    </li>
    <li>
        <a>
            <span class="iconfont icon-baobiao"></span>
            <span>报表</span>
            <span class="iconfont icon-xiangxia xx"></span>
            <span class="iconfont icon-xiangxia rotate"></span>
        </a>
        <ul>
            <li>
                <a href="/ajax/ajax/Jump?path=list-sell.jsp" target="right">
                    <span>收入报表</span>
                </a>
            </li>
            <li>
                <a href="/ajax/ajax/Jump?path=list-order.jsp" target="right">
                    <span>订单报表</span>
                </a>
            </li>
            <li>
                <a href="/ajax/ajax/Jump?path=list-member.jsp" target="right">
                    <span>会员报表</span>
                </a>
            </li>
            <li>
                <a href="/ajax/ajax/Jump?path=list-itemUpshelf.jsp" target="right">
                    <span>上架商品报表</span>
                </a>
            </li>
        </ul>
    </li>
</ul>

<div class="right11">
    <iframe scrolling="auto" rameborder="0" src="<%=request.getContextPath() %>/ajax/Jump?path=home.jsp" name="right" width="100%" height="100%"></iframe>
</div>
<div class="bot">
   <span>本站信息由山西哆来咪公司全权提供</span>
</div>
</body>
<script>
    $(document).ready(function () {
        $('.left11>li>a').each(function(ind){
            $(this).click(function(){
                $('.left11>li .xx').eq(ind).slideToggle(0);
                $('.left11>li .rotate').eq(ind).slideToggle(0);
                $('.left11>li>ul ').eq(ind).slideToggle("slow");
            })
        })
    })
</script>
</html>