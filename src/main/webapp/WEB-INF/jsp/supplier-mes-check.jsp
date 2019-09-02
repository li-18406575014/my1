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
    <!--<link rel="stylesheet" href="css/supplier-mes-check.css">-->
    <link rel="stylesheet" href="/ajax/font/iconfont.css">
    <link rel="stylesheet" href="/ajax/css/index.css">
</head>
<script src="/ajax/js/jquery.min.js"></script>
<body>
<div class="doc-content">
    <ul class="nav-tabs" id="tit">
        <li class="active"><a href="#">基本信息</a></li>
        <li><a href="#">商品信息</a></li>
    </ul>
    <div class="content conn" >
        <div class="row roww" id="conrow">
            <form class="form-horizontal well gd" id="gd2">
                <div class="row">
                    <div class="control-group span8">
                        <label class="control-label"><s>*</s>供应商编号：</label>
                        <div class="controls">
                            <input type="text" name="goods-name" class="control-text" style="background: #EBEBE4" value="系统自动生成" readonly>
                        </div>
                    </div>
                    <div class="control-group span8">
                        <label class="control-label"><s>*</s>供应商名称：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="control-group span18">
                        <label class="control-label"><s>*</s>经营类目：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text span8">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="control-group span8">
                        <label class="control-label"><s>*</s>联系人：</label>
                        <div class="controls">
                            <input type="text" name="goods-name" class="control-text">
                        </div>
                    </div>
                    <div class="control-group span8">
                        <label class="control-label"><s>*</s>手机号：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="control-group span8">
                        <label class="control-label">座机：</label>
                        <div class="controls">
                            <input type="text" name="goods-name" class="control-text">
                        </div>
                    </div>
                    <div class="control-group span8">
                        <label class="control-label">Email：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="control-group span8">
                        <label class="control-label">QQ：</label>
                        <div class="controls">
                            <input type="text" name="goods-name" class="control-text">
                        </div>
                    </div>
                    <div class="control-group span8">
                        <label class="control-label">邮箱：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="control-group span18">
                        <label class="control-label"><s>*</s>详细地址：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text span12">
                        </div>
                    </div>
                </div>

            </form>
        </div>
        <div class="row roww dis-none">
            <form class="span95">
                <table cellspacing="0" class="table table-head-bordered table-bordered table-sm">
                    <thead>
                    <tr style="">
                        <th>商品编码</th>
                        <th>商品名称</th>
                        <th>图片</th>
                        <th>零售价</th>
                        <th>成本价</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>冰箱</td>
                        <td>
                            <img src="/ajax/img/ig2.png" alt="">
                        </td>
                        <td>45</td>
                        <td>20</td>
                        <td><a href="#">编辑</a> <a href="#">删除</a></td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>


</div>
</body>
<script>
    $(document).ready(function () {
        $('#tit li').each(function (index) {
            $(this).click(function () {
                $('#tit li').removeClass('active');
                $(this).addClass('active')
                $('.conn .roww').each(function (ind) {
                    if (ind != index) {
                        $(this).addClass('dis-none')
                    }
                });
                $('.conn .roww').eq(index).removeClass('dis-none');
            })
        })
    })
</script>
</html>