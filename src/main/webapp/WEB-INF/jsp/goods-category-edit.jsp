<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Title</title>
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/dpl.css" rel="stylesheet">
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/bui.css" rel="stylesheet">
    <link rel="stylesheet" href="/ajax/font/iconfont.css">
    <link rel="stylesheet" href="/ajax/css/index.css">
    <!--<link rel="stylesheet" href="css/goods-category-edit.css">-->
</head>
<body>
<div class="doc-content doc-content2">
    <div class="tit2">
        商品分类
    </div>
    <hr>
    <form class="form-horizontal well">
        <div class="row">
            <div class="control-group span19">
                <label class="control-label"><s>*</s>商品分类名称：</label>
                <div class="controls">
                    <input type="text" name="goods-name" class="control-text">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="control-group span19">
                <label class="control-label">商品分类说明：</label>
                <div class="controls">
                    <input type="text"  name="goods-dis" class="control-text">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="control-group span19">
                <label class="control-label">上一级商品分类：</label>
                <div class="controls">
                    <select class="sel1">
                        <option>请选择</option>
                        <option>养生类</option>
                        <option>茶叶</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="control-group span19">
                <label class="control-label">商品分类排序：</label>
                <div class="controls">
                    <select class="sel2">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="control-group span19">
                <label class="control-label radio ger">
                    <span style="margin-right: 10px;">是否发布到前台：</span>
                    <input type="radio" name="release" checked value="是"> 是&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="release" value="否"> 否
                </label>
            </div>
        </div>
        <div class="row">
            <div class="form-actions offset1">
                <button type="submit" class="button button-primary" id="gc-btn2">保存</button>
                <button type="reset" class="button">重置</button>
            </div>
        </div>
    </form>



</div>
</body>
</html>