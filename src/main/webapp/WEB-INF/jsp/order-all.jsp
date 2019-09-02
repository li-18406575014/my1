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

<div class="doc-content" >
    <ul class="breadcrumb breadcrumb2"></ul>
    <ul class="breadcrumb">
        <li>
            <span class="iconfont icon-shouye"></span>
            <a href="#">首页</a> <span class="divider"><span class="iconfont icon-down-trangle1"></span></span>
        </li>
        <li>
            <a href="#">订单管理</a> <span class="divider"><span class="iconfont icon-down-trangle1"></span></span>
        </li>
        <li class="active">全部订单</li>
    </ul>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>订单查询</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>


    <form class="form-horizontal gd" style="padding-top: 20px;" id="gd2">

        <div class="row">
            <div class="control-group span8">
                <label class="control-label">订单编号：</label>
                <div class="controls">
                    <input type="text" class="control-text">
                </div>
            </div>
            <div class="control-group span13">
                <label class="control-label">下单时间段：</label>
                <div class="controls">
                    <input type="text" class="calendar" >
                    ～
                    <input type="text" class="calendar" >
                </div>
            </div>
            <div class="control-group span8 con-l">
                <label class="control-label">订单状态：</label>
                <div class="controls">
                    <select class="sel1">
                        <option>未支付</option>
                        <option>已支付</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="btn s-btn">
            <span class="iconfont icon-chaxun"></span>
            <span>查询</span>
        </div>
        <div class="btn2">
            <span>新增</span>
        </div>
        <hr>
    </form>
    <div class="tit">
        <span class="iconfont icon-guanlianniu"></span>
        <span>订单列表</span>
        <span class="iconfont icon-down-trangle2"></span>
    </div>
    <div class="span95">
        <table cellspacing="0" class="table table-head-bordered table-bordered table2 table-sm">
            <thead>
            <tr style="">
                <th>订单编号</th>
                <th>订单状态</th>
                <th>支付方式</th>
                <th>商品金额</th>
                <th>运费</th>
                <th>订单金额</th>
                <th>实付金额</th>
                <th>下单时间</th>
                <th>付款时间</th>
                <th>查看</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=order-dis.jsp">详情查看</a></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=order-dis.jsp">详情查看</a></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=order-dis.jsp">详情查看</a></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=order-dis.jsp">详情查看</a></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="/ajax/ajax/Jump?path=order-dis.jsp">详情查看</a></td>
            </tr>

            </tbody>
        </table>
        <div class="bui-grid bui-simple-list bui-grid-width bui-grid-border bui-grid-strip" aria-disabled="false" aria-pressed="false" style="width:100%;box-sizing: border-box"><div class="bui-grid-tbar" style="display:none"></div>
            <div class="bui-grid-header-container">
                <div class="bui-grid-header" aria-disabled="false" style="width:0%;" aria-pressed="false">
                    <table cellspacing="0" class="bui-grid-table" cellpadding="0"></table>
                </div>
            </div>
            <div style="" class="bui-grid-bbar">
                <div class="bui-bar" role="toolbar" id="bar2" aria-disabled="false" aria-pressed="false">
                    <ul class="bui-pagingbar bui-bar" role="toolbar" id="bar3" aria-disabled="false" aria-pressed="false">
                        <li class="bui-bar-item-button bui-bar-item bui-pb-first bui-bar-item-button-disabled bui-bar-item-disabled bui-inline-block" aria-disabled="true" id="first">
                            <button type="button" class="bui-button-disabled" disabled="disabled">首 页</button>
                        </li>
                        <li class="bui-bar-item-button bui-bar-item bui-pb-prev bui-bar-item-button-disabled bui-bar-item-disabled bui-inline-block" aria-disabled="true" id="prev">
                            <button type="button" class="bui-button-disabled" disabled="disabled">上一页</button>
                        </li>
                        <li class="bui-bar-item-separator bui-bar-item bui-inline-block" aria-disabled="false" id="bar-item-separator1" role="separator">

                        </li>
                        <li class="bui-bar-item-text bui-bar-item bui-inline-block" aria-disabled="false" id="totalPage">
                            共20页
                        </li>
                        <li class="bui-bar-item-text bui-bar-item bui-inline-block" aria-disabled="false" id="curPage">
                            第
                            <input type="text" autocomplete="off" class="bui-pb-page" size="20" value="1" name="inputItem">
                            页
                        </li>
                        <li class="bui-bar-item-button bui-bar-item bui-pb-skip bui-bar-item-button-disabled bui-bar-item-disabled bui-inline-block" aria-disabled="true" id="skip">
                            <button type="button" class="bui-button-disabled" disabled="disabled">确定</button>
                        </li>
                        <li class="bui-bar-item-separator bui-bar-item bui-inline-block" aria-disabled="false" id="bar-item-separator2" role="separator"></li>
                        <li class="bui-bar-item-button bui-bar-item bui-pb-next bui-bar-item-button-disabled bui-bar-item-disabled bui-inline-block" aria-disabled="true" id="next">
                            <button type="button" class="bui-button-disabled" disabled="disabled">下一页</button>
                        </li>
                        <li class="bui-bar-item-button bui-bar-item bui-pb-last bui-bar-item-button-disabled bui-bar-item-disabled bui-inline-block" aria-disabled="true" id="last">
                            <button type="button" class="bui-button-disabled" disabled="disabled">末 页</button>
                        </li>
                        <li class="bui-bar-item-separator bui-bar-item bui-inline-block" aria-disabled="false" id="bar-item-separator3" role="separator"></li>
                        <li class="bui-bar-item-text bui-bar-item bui-inline-block" aria-disabled="false" id="totalCount">共条300记录</li>
                    </ul>
                </div>
            </div>
        </div>


    </div>

</div>
</body>
<script src="http://g.tbcdn.cn/fi/bui/jquery-1.8.1.min.js"></script>
<script src="http://g.alicdn.com/bui/seajs/2.3.0/sea.js"></script>
<script src="http://g.alicdn.com/bui/bui/1.1.21/config.js"></script>
<script type="text/javascript">
    $(document).ready(function () {
        BUI.use('bui/calendar', function (Calendar) {
            var datepicker = new Calendar.DatePicker({
                trigger: '.calendar',
                autoRender: true
            });
        });
    })
</script>

</html>