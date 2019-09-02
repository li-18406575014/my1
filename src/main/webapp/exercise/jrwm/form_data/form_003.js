/**
 * Created by mxs on 2018/8/24.
 */
//表单id
var formId;
//表单项数据保存
var formItems = {};

/**
 * 回显初始化表单  手机
 * @param formObj
 */
function initMobileFormData(formObj,userObj,departmentObj,currentTimeMillis) {
    $("#fTitle").html(formObj.fTitle);
    $("title").html(formObj.fTitle);
    $("#fDescription").html(formObj.fDescription);
    formItems = formObj.formItems;
    formId = formObj._id;
    $("#formId").val(formId);

    var formLayout = formObj.formLayout;

    initFormNoRowLayOut(formLayout,userObj,departmentObj,currentTimeMillis);

    $(".lc-close,.cover").remove();
    initFormEleEvent();
}

/**
 * 回显初始化表单  pc
 * @param formObj   表单对象
 * @param userObj   当前用户
 * @param departmentObj 当前部门
 * @param currentTimeMillis  后台返回的当前时间戳
 */
function initFormData(formObj,userObj,departmentObj,currentTimeMillis) {
    $("#fTitle").html(formObj.fTitle);
    $("title").html(formObj.fTitle);


    $("#fDescription").html(formObj.fDescription);
    //表单表单项
    formItems = formObj.formItems;
    //表单ie
    formId = formObj._id;
    $("#formId").val(formId);

    //表单结构
    var formRowLayOut = formObj.formRowLayOut;

    initFormRowLayOut(formRowLayOut,userObj,departmentObj,currentTimeMillis);

    var formStyle = formObj.formStyle;
    initFormStyle(formStyle);

    $(".lc-close,.cover").remove();
    initFormEleEvent();
}

function initFormEleEvent(){


    var laydate = layui.laydate;
    //日期
    $("input[inputType=input-date][dateformat='1']").each(function (i, obj) {

        laydate.render({
            elem: obj
            , type: 'datetime'
        });
    });

    //日期  格式2
    $("input[inputType=input-date][dateformat='2']").each(function (i, obj) {

        laydate.render({
            elem: obj
        });
    });

    //年
    $("input[inputType=input-year]").each(function (i, obj) {

        //判断是否存在默认值
        var defaultValue = $(obj).val();
        if(defaultValue){
            if(defaultValue.indexOf("年") == -1){
                defaultValue +="年";
            }
            laydate.render({
                elem: obj
                ,type: 'year'
                ,format: 'yyyy年'
                ,value:defaultValue
                ,done: function(value, date, endDate){
                    if(date){
                        $(obj).next().val(date.year);
                    }else{
                        $(obj).next().val("");
                    }
                }
            });
        }else{
            laydate.render({
                elem: obj
                ,type: 'year'
                ,format: 'yyyy年'
                ,done: function(value, date, endDate){
                    if(date){
                        $(obj).next().val(date.year);
                    }else{
                        $(obj).next().val("");
                    }
                }
            });
        }

    });




    //省级选择框
    $("select[type=province]").on("change",function(){

        var shengValue = $(this).val();
        var index = $(this).find("option[value='"+shengValue+"']").index();

        var itemObj = $(this).parents(".field-item");

        var cityObj = itemObj.find("select[type=city]");

        initLocationSelect(arrCity[index].sub,cityObj);


        //处理选择 省级 时，县级 展示不展示问题
        var xianObj = itemObj.find("select[type=xian]");
        if(arrCity[index].sub[0].sub){
            if(arrCity[index].sub[0].sub>0){
                initLocationSelect(arrCity[index].sub[0].sub,xianObj);
            }else{
                $(xianObj).find("option").remove();
                var option = $("<option>").html("请选择");
                $(xianObj).append(option)
            }
            xianObj.parent().prev().show();
            xianObj.parent().show();
        }else{
            $(xianObj).find("option").remove();
            xianObj.parent().prev().hide();
            xianObj.parent().hide();
        }

    });

    //市级选择框
    $("select[type=city]").on("change",function(){

        var itemObj = $(this).parents(".field-item");

        var sheng = itemObj.find("select[type=province]");
        var shengValue = sheng.val();
        var index = sheng.find("option[value='"+shengValue+"']").index();


        var shiValue = $(this).val();
        var shiIndex = $(this).find("option[value='"+shiValue+"']").index();

        var xianObj = itemObj.find("select[type=xian]");


        if(arrCity[index].sub[shiIndex].sub){
            initLocationSelect(arrCity[index].sub[shiIndex].sub,xianObj);
            xianObj.parent().prev().show();
            xianObj.parent().show();
        }else{
            $(xianObj).find("option").remove();
            xianObj.parent().prev().hide();
            xianObj.parent().hide();
        }



    });
}


/**
 * 复选框点击事件
 */
function checkedBtnClickEvent() {
    $("body").on("click", ".checkbox-text", function () {

        if ($(this).hasClass("c-checked")) {
            $(this).removeClass("c-checked");
            $(this).prev().prop("checked", false);
        } else {
            $(this).addClass("c-checked");
            $(this).prev().prop("checked", true);
        }
    });
}


/**
 * 初始化
 */
$(function () {

    //复选框功能
    checkedBtnClickEvent();


    //提交按钮  事件
    $("#submitBtn").click(function () {


        var flag = false;
        $("#formFieldItems .field-item").each(function(i,obj){
            var itemType = $(obj).attr("type");
            if($(obj).find(".c-prequired").is(":visible")){
                var itemValue;
                if(itemType == FieldType.radio || itemType == FieldType.checkbox ){
                    itemValue = $(obj).find("[name^=item]:checked").val();
                }else  if(itemType == FieldType.location){
                    $(obj).find("select[name^=item]").each(function(index,inputObj){
                        if($(inputObj).is(":visible")){
                            itemValue = $(inputObj).val();
                            if(!isNotNull(itemValue)){
                                return false;
                            }
                        }
                    });
                }
                else{
                    itemValue = $(obj).find("[name^=item]").val();
                }


                //图片  附件 校验


                if(itemType == FieldType.image ){
                    itemValue = $(obj).find(".img-list li").length;
                    if(itemValue == 1){
                        itemValue = null;
                    }
                }

                if(itemType == FieldType.attachment ){
                    itemValue = $(obj).find(".file-list li").length;
                    if(itemValue === 0){
                        itemValue = null;
                    }
                }

                if(!isNotNull(itemValue)){
                    flag = true;
                    var plabel = $(obj).find(".control-label").html();
                    layer.alert(plabel+"不可为空！");
                    return false;
                }

            }

            if(itemType == FieldType.number){

                var itemValue = $(obj).find("[name^=item]").val();
                if(isNotNull(itemValue) && !/^\d+$/.test(itemValue) || /^0\d+$/.test(itemValue)){
                    flag = true;
                    var plabel = $(obj).find(".control-label").html();
                    layer.alert(plabel+"请输入正确数字！");
                    return false;
                }
            }

            if(itemType == FieldType.money){
                var itemValue = $(obj).find("[name^=item]").val();
                if(isNotNull(itemValue) && !/^(-?\d+)(\.\d+)?$/.test(itemValue)  ||  /^(-?0\d+)(\.\d+)?$/.test(itemValue) ){
                    flag = true;
                    var plabel = $(obj).find(".control-label").html();
                    layer.alert(plabel+"请输入正确数字！");
                    return false;
                }
            }


        });





        if(flag){
            return;
        }

        var formSubmitJson = $('#customForm').serializeObject();

        $("#formFieldItems").find(".field-item[type='lc-image']").each(function(i,obj){

            var itemId = $(obj).attr("id");
            formSubmitJson[itemId] = [];

            $(obj).find(".img-list li:not(.imgupload-btn)").each(function(j,imgObj){

                var title = $(imgObj).find(".title").html();
                var imgUrl = $(imgObj).find("img").attr("src");
                var imbObj = {};
                imbObj.title = title;
                imbObj.imgUrl = imgUrl;
                formSubmitJson[itemId][formSubmitJson[itemId].length] = imbObj;
            });

        });

        $("#formFieldItems").find(".field-item[type='lc-attachment']").each(function(i,obj){

            var itemId = $(obj).attr("id");
            formSubmitJson[itemId] = [];

            $(obj).find(".file-list li").each(function(j,fileObj){

                var title = $(fileObj).find(".title").html();
                var fileUrl = $(fileObj).find(".title").attr("fileUrl");

                var fileObj = {};
                fileObj.title = title;
                fileObj.imgUrl = fileUrl;
                formSubmitJson[itemId][formSubmitJson[itemId].length] = fileObj;
            });

        });


        $("#formFieldItems").find(".field-item[type='lc-table']").each(function(i,obj){

            var itemId = $(obj).attr("id");
            formSubmitJson[itemId] = [];

            $(obj).find("tbody tr").each(function(j,trObj){

                formSubmitJson[itemId][j] = [];

                $(trObj).find("td").each(function(k,tdObj){
                    formSubmitJson[itemId][j][k] = $(tdObj).find("input").val();
                });
            });

        });


        if(!isNotNull($("#verificationCode").val())){
            layer.alert( "请输入验证码！");
            return false;
        }

        $.ajax({
            url: "/o_commit.jhtml",
            type: "post",
            dataType: 'json',
            contentType: 'application/json;charset=utf-8',
            data:  JSON.stringify(formSubmitJson),
            success: function (data) {
                if (data.status == 1) {
                    layer.alert("保存成功", function () {
                        window.location.reload();
                    });
                    return ;
                }if (data.status == 2){
                    layer.alert("验证码错误！");
                    return ;
                } else {
                    layer.alert("保存失败！");
                    return ;
                }
            },
            error: function (e) {
                console.log(e);
            }
        });


    });
});

