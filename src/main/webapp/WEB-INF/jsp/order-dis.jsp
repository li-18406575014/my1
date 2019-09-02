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
        <li class="active"><a href="#">订单基本信息</a></li>
        <li><a href="#">商品信息</a></li>
        <li><a href="#">收货信息</a></li>
        <li><a href="#">支付信息</a></li>
        <li><a href="#">发货信息</a></li>
    </ul>
    <div class="content conn" >
        <div class="row roww ">
            <form class="form-horizontal well gd"  id="gd2">
                <div class="row">
                    <div class="control-group span8">
                        <label class="control-label">订单编号：</label>
                        <div class="controls">
                            <input type="text" name="goods-name" class="control-text" style="" value="PO1506060000101">
                        </div>
                    </div>
                    <div class="control-group span8">
                        <label class="control-label">订单状态：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text" value="已发货">
                        </div>
                    </div>
                    <div class="control-group span8">
                        <label class="control-label">下单时间：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text" value="2016-06-07 15:35:00">
                        </div>
                    </div>
                    <div class="control-group span8">
                        <label class="control-label">商品金额：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text" value="291">
                        </div>
                    </div>
                    <div class="control-group span8">
                        <label class="control-label">运费：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text" value="20">
                        </div>
                    </div>
                    <div class="control-group span8">
                        <label class="control-label">订单金额：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text" value="311">
                        </div>
                    </div>
                    <div class="control-group span8">
                        <label class="control-label">实付金额：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text" value="311">
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="row roww dis-none">
            <form class="form-horizontal well gd" id="gd3">
                <div class="row">
                    <div class="control-group span8">
                        <label class="control-label">收货人姓名：</label>
                        <div class="controls">
                            <input type="text" name="goods-name" class="control-text" style="" value="张三">
                        </div>
                    </div>
                    <div class="control-group span8">
                        <label class="control-label">收货人电话：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text" value="13524330312">
                        </div>
                    </div>
                    <div class="control-group span8">
                        <label class="control-label">邮政编码：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text" value="200000">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="control-group span18" >
                        <label class="control-label">详细地址：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" style="width: 400px" class="control-text" value="上海上海市浦东新区杨高南路784号2号楼2204室">
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="row roww dis-none">
            <form class="span95" style="margin-left: 3[0px;">
                <table cellspacing="0" class="table table-head-bordered table-bordered table-sm">
                    <thead>
                    <tr style="">
                        <th>图片</th>
                        <th>商品编码</th>
                        <th>商品名称</th>
                        <th>零售价格</th>
                        <th>数量</th>
                        <th>应付金额</th>
                        <th>实付金额</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><img src="/ajax/img/ig2.png" alt=""></td>
                        <td>N00003</td>
                        <td>澳洲菲力牛排170g</td>
                        <td>48</td>
                        <td>2</td>
                        <td>96</td>
                        <td>96</td>
                    </tr>
                    <tr>
                        <td><img src="/ajax/img/ig2.png" alt=""></td>
                        <td>N00004</td>
                        <td>阿根廷红虾4斤</td>
                        <td>195</td>
                        <td>1</td>
                        <td>195</td>
                        <td>195</td>
                    </tr>
                    </tbody>
                </table>
            </form>

        </div>
        <div class="row roww dis-none">
           支付信息
        </div>
        <div class="row roww dis-none">
            <form class="form-horizontal well" style="border: none;-webkit-box-shadow:none;">
                <div class="row">
                    <div class="control-group span18">
                        <label class="control-label"><s>*</s>物流公司：</label>
                        <div class="controls">
                            <input type="text" name="goods-name" class="control-text deliver">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="control-group span18">
                        <label class="control-label"><s>*</s>物流单号：</label>
                        <div class="controls">
                            <input type="text"  name="goods-dis" class="control-text deliver">
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="form-actions offset1">
                        <button type="submit" class="button buttonn button-primary" style="margin-left: 100px">保存</button>
                    </div>
                </div>
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