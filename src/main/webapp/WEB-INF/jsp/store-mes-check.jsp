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
    <link rel="stylesheet" href="/ajax/font/iconfont.css">
    <!--<link rel="stylesheet" href="css/supplier-mes.css">-->
    <link rel="stylesheet" href="/ajax/css/index.css">
</head>
<style>
</style>
<body>

<div class="doc-content">
    <ul class="breadcrumb">
        <li>
            <span class="iconfont icon-shouye"></span>
            <a href="#">首页</a> <span class="divider"><span class="iconfont icon-down-trangle1"></span></span>
        </li>
        <li class="active">店铺信息查询</li>
    </ul>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>店铺信息查询</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>


    <form class="form-horizontal gd" style="padding-top: 20px;" id="gd2">

        <div class="row">
            <div class="control-group span13">
                <label class="control-label">供应商：</label>
                <div class="controls">
                    <select class="sel1">
                        <option>供应商1</option>
                        <option>供应商2</option>
                        <option>供应商3</option>
                    </select>
                </div>
            </div>
            <div class="control-group span13">
                <label class="control-label">店铺名称：</label>
                <div class="controls">
                    <select class="sel1">
                        <option>店铺1</option>
                        <option>店铺2</option>
                        <option>店铺3</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="btn s-btn">
            <span class="iconfont icon-chaxun"></span>
            <span>查询</span>
        </div>
        <hr>
    </form>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>店铺信息列表</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>
    <div class="span95">
        <table cellspacing="0" class="table table-head-bordered table-bordered table-sm">
            <thead>
            <tr style="">
                <th>店铺名称</th>
                <th>店铺ID</th>
                <th>店铺logo</th>
                <th>店招</th>
                <th>联系人</th>
                <th>联系人手机</th>
                <th>发货地址</th>
                <th>编辑</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td></td>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=goods-mes-edit.jsp">编辑</a> <a href="/ajax/ajax/Jump?path=goods-mes-dis.jsp">店铺详情</a> <a href="#">删除</a></td>
            </tr>
            <tr>
                <td></td>
                <td>2</td>
                <td>
                    <img src="/ajax/img/ig2.png" alt="">
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=goods-mes-edit.jsp">编辑</a> <a href="/ajax/ajax/Jump?path=goods-mes-dis.jsp">店铺详情</a> <a href="#">删除</a></td>
            </tr>
            <tr>
                <td></td>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=goods-mes-edit.jsp">编辑</a> <a href="/ajax/ajax/Jump?path=goods-mes-dis.jsp">店铺详情</a> <a href="#">删除</a></td>
            </tr>
            <tr>
                <td></td>
                <td>4</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=goods-mes-edit.jsp">编辑</a> <a href="/ajax/ajax/Jump?path=goods-mes-dis.jsp">店铺详情</a> <a href="#">删除</a></td>
            </tr>
            <tr>
                <td></td>
                <td>5</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=goods-mes-edit.jsp">编辑</a> <a href="/ajax/ajax/Jump?path=goods-mes-dis.jsp">店铺详情</a> <a href="#">删除</a></td>
            </tr>

            </tbody>
        </table>
    </div>

</div>

<!-- script end -->

</body>
</html>