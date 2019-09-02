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
</head>
<body>
<script src="/ajax/js/jquery.min.js"></script>
<div class="box">
    <div class="control-group control-group1">
        <label class="control-label"><s>*</s>图片：</label>
        <img src="/ajax/img/ig.png" id="yushow" class="sh2"/>
    </div>
    <input type="text" id="file"  value="上传一个文件">
    <input type="file" class="jtt" onclick="" style="background: #880000;">
    <div class="row">
        <div class="control-group">
            <label class="control-label">标题：</label>
            <input type="text"  name="goods-dis" class="control-text" value="标题一">
        </div>
    </div>
    <div class="row">
        <div class="control-group">
            <label class="control-label"><s>*</s>URL：</label>
            <input type="text"  name="goods-dis" class="control-text" value="https://">
        </div>
    </div>
    <div class="row">
        <div class="control-group span18">
            <label class="control-label">显示顺序：</label>
            <select class="sel3">
                <option>0</option>
                <option>1</option>
                <option>2</option>
            </select>
        </div>
    </div>
    <div class="row">
        <label class="radio">
            是否启用：
            <input type="checkbox" checked>是
        </label>
    </div>
    <div class="btn">
        <span>添加</span>
    </div>

</div>
</body>
<script>
    $(document).ready(function() {
        let imgarr = ['jpeg', 'png', 'gif'];
        let size = 10 * 1024 * 1024;
        console.log($('.jt'))
        $('.jtt').get(0).onchange = function (e) {
            var that = this;
            console.dir(this)
            var read = new FileReader();
            read.readAsDataURL(this.files[0]);
            console.log($('.sh2').get(0).src)
            read.onload = function () {
                $('.sh2').get(0).src = this.result;
            }
        }
    })
</script>
</html>