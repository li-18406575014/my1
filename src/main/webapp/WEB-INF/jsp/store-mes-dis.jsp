<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Title</title>
    <!--<link rel="stylesheet" href="css/index.css">-->
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/dpl.css" rel="stylesheet">
    <link href="http://g.alicdn.com/bui/bui/1.1.21/css/bs3/bui.css" rel="stylesheet">
    <!--<link rel="stylesheet" href="css/common.css">-->
    <!--<link rel="stylesheet" href="css/goods-add.css">-->
    <link rel="stylesheet" href="/ajax/font/iconfont.css">
    <link rel="stylesheet" href="/ajax/css/index.css">
</head>
<script src="/ajax/js/jquery.min.js"></script>
<body>
<div class="doc-content">
    <ul class="nav-tabs" id="tit">
        <li class="active"><a href="#">基本信息</a></li>
        <li><a href="#">店铺资质</a></li>
    </ul>
    <div class="content conn" >
        <div class="row roww ">
            <div class="span20 doc-content">
                <form class="form-horizontal well gd" id="gd2">
                    <div class="row">
                        <div class="control-group span9">
                            <label class="control-label"><s>*</s>店铺编码：</label>
                            <div class="controls">
                                <input type="text" class="control-text">
                            </div>
                        </div>
                        <div class="control-group span9">
                            <label class="control-label"><s>*</s>店铺名称：</label>
                            <div class="controls">
                                <input type="text" class="control-text">
                            </div>
                        </div>
                        <div class="control-group span13">
                            <label class="control-label"><s>*</s>供应商：</label>
                            <div class="controls">
                                <select style="width:205px;padding-left: 60px">
                                    <option>请选择</option>
                                    <option>供应商1</option>
                                    <option>供应商2</option>
                                </select>
                            </div>
                        </div>
                        <div class="control-group span20" style="position: relative;">
                            <label class="control-label"><s>*</s>店铺logo：</label>
                            <div class="ig igg">
                                <img src="/ajax/img/ig.png" alt="">
                            </div>
                            <div class="ig igg">
                                <img src="/ajax/img/ig2.png" alt="">
                            </div>
                        </div>
                        <div class="control-group span20" style="position: relative;">
                            <label class="control-label"><s>*</s>店招：</label>
                            <div class="ig igg">
                                <img src="/ajax/img/ig.png" alt="">
                            </div>
                            <div class="ig igg">
                                <img src="/ajax/img/ig2.png" alt="">
                            </div>
                            <div class="ig igg">
                                <img src="/ajax/img/ig.png" alt="">
                            </div>
                        </div>
                        <div class="control-group span9">
                            <label class="control-label"><s>*</s>联系人：</label>
                            <div class="controls">
                                <input type="text" class="control-text">
                            </div>
                        </div>
                        <div class="control-group span18">
                            <label class="control-label"><s>*</s>手机号：</label>
                            <div class="controls">
                                <input type="text" class="control-text">
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="form-actions offset3">
                            <button type="submit" class="button pr" id="sub1" style="margin-left:-10px;margin-top: 10px;">下一步</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row roww dis-none">
            <div class="span20 doc-content">
                <form class="form-horizontal well gd" id="gd3">
                    <div class="row">
                        <div class="control-group span20" style="position: relative;">
                            <label class="control-label"><s>*</s>店招：</label>
                            <div class="ig igg">
                                <img src="/ajax/img/ig.png" alt="">
                            </div>
                            <div class="ig igg">
                                <img src="/ajax/img/ig2.png" alt="">
                            </div>
                            <div class="ig igg">
                                <img src="/ajax/img/ig.png" alt="">
                            </div>
                        </div>
                    <div class="row">
                        <div class="form-actions offset3">
                        </div>
                        <button type="submit" class="button pr" id="" style="margin-left: 120px">保存</button>
                        </div>
                    </div>
                </form>
            </div>
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
//        加图
        let arr=[];
        let imgarr=['jpeg','png','gif'];
        let size=10*1024*1024;
        console.log($('.jt'))
        $('.jt').each(function(ind){
            $(this).get(0).onchange=function (e){
                console.log(ind)
                arr=[];
                [...this.files].forEach(function (value,index) {
                    arr.push({id:index,file:value});
                })
                if(!check()){
                    alert('文件格式大小不合适！');
                    return;
                }
                arr.forEach(function (value) {
                    var read=new FileReader();
                    read.readAsDataURL(value.file);
                    read.onload=function () {
                        var div=document.createElement('div');
                        div.className='ig ig2'
                        div.id=value.id;
                        div.innerHTML= `
                   <img src=${this.result}>
                   <span>-</span>
               `
                        console.log($('.jt').get(0).parentNode.parentNode)
                        if(ind==0){
                            $('.jt').get(ind).parentNode.appendChild(div);
                            $('.ig3').addClass('dis-none');
                            console.log(111)
                            div.childNodes[3].onclick=function(){
                                var id=this.parentNode.id;
                                arr=arr.filter(function(value){
                                    return value.id!=id;
                                })
                                $('.jt').get(ind).parentNode.removeChild(this.parentNode);
                                if($('.jt').get(ind).parentNode.childNodes[9]==undefined){
                                    $('.ig3').removeClass('dis-none');
                                }
                            }
                        }else if(ind==1){
                            $('.jt').get(ind).parentNode.parentNode.appendChild(div);
                            $('.ig4').addClass('dis-none');
                            console.log(222)
                            div.childNodes[3].onclick=function(){
                                var id=this.parentNode.id;
                                arr=arr.filter(function(value){
                                    return value.id!=id;
                                })
                                $('.jt').get(ind).parentNode.parentNode.removeChild(this.parentNode);
                                if($('.jt').get(ind).parentNode.parentNode.childNodes[9]==undefined){
                                    $('.ig4').removeClass('dis-none');
                                }
                            }
                        }else if(ind==2){
                            $('.jt').get(ind).parentNode.appendChild(div);
                            $('.ig5').addClass('dis-none');
                            console.log(111)
                            div.childNodes[3].onclick=function(){
                                var id=this.parentNode.id;
                                arr=arr.filter(function(value){
                                    return value.id!=id;
                                })
                                $('.jt').get(ind).parentNode.removeChild(this.parentNode);
                                if($('.jt').get(ind).parentNode.childNodes[9]==undefined){
                                    $('.ig5').removeClass('dis-none');
                                }
                            }
                        }
                    }
                })

                function check() {
                    for(let i=0;i<arr.lenght;i++){
                        if(arr[i].file.size>size||!imgarr.includes(arr[i].file.type.split('/')[1])){
                            return false;
                        }
                    }
                    return true;
                }

//            $('#sub1').onclick=function(e){
//                e.preventDefault();
//                arr.forEach(function(value){
//                    var formdata=new FormData();
//                    formdata.append('file',value.file);
//
//                    var ajax=new XMLHttpRequest(e);
//                    ajax.upload.onprogress=function(e){
//                        var obj=document.querySelector('#pre'+value.id);
//                        obj.style.width=e.loaded/e.total*100+'%';
//                    }
//                    ajax.onload=function(){
//                        console.log(ajax.responseText);
//                    }
//                    ajax.open('post','upload.php',true);
//                    ajax.send(formdata);
//                })
//            }
            }
        })
    })
</script>
</html>