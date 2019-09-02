/**
 * Created by mxs on 2018/8/22.
 */
//表单项 属性列表
if (typeof FieldProps == "undefined") {
    var FieldProps = {
        plabel: "plabel", // 字段名称
        pdefval: "pdefval",//字段默认值
        poptions: "poptions",//选项
        prequired: "prequired",//必填
        pDate: "pDate", //日期
        playout: "playout",//布局
        pinstruct: "pinstruct",//描述
        queryItem: "queryItem", //查询条件
        columnItem: "columnItem", //统计展示列表
        ptableColumnName:"ptableColumnName",//表格列名称
        ptableRowNum:"ptableRowNum",//表格行数
        backgroundStyleItem: "backgroundStyleItem"//表格行数
    }
}

if (typeof FieldType == "undefined") {
    var FieldType = {
        userName: "lc-userName", //登录人
        userDepartment: "lc-userDepartment", //登录部门
        input: "lc-input", //单行文本
        textarea: "lc-textarea",//多行文本
        date: "lc-date",    //选择日期
        currentDate: "lc-currentDate",    //当前日期

        year: "lc-year",    //选择年份
        currentYear: "lc-currentYear",    //当前年份
        month: "lc-month",    //选择月份
        currentMonth: "lc-currentMonth",   //当前月份
        number: "lc-number",//数字
        money: "lc-money",//金额

        select: "lc-select2",//下拉列表
        checkbox: "lc-checkbox",//复选框
        radio: "lc-radio",//单选框

        image: "lc-image",//图片
        attachment: "lc-attachment",//附件

        table: "lc-table",//表格
        location: "lc-location",//省市县
        label: "lc-label",//纯文本
        hr: "lc-hr"//分割线

    }

    //表单项 对应属性
    var FieldConfig = {};
    //登录人
    FieldConfig[FieldType.userName] = [FieldProps.plabel, FieldProps.prequired, FieldProps.columnItem,FieldProps.backgroundStyleItem];
    //登录部门
    FieldConfig[FieldType.userDepartment] = [FieldProps.plabel, FieldProps.prequired, FieldProps.columnItem,FieldProps.backgroundStyleItem];

    //单行文本
    FieldConfig[FieldType.input] = [FieldProps.plabel, FieldProps.pdefval, FieldProps.prequired, FieldProps.queryItem, FieldProps.columnItem,FieldProps.backgroundStyleItem];
    //多行文本
    FieldConfig[FieldType.textarea] = [FieldProps.plabel, FieldProps.pdefval, FieldProps.prequired, FieldProps.queryItem, FieldProps.columnItem,FieldProps.backgroundStyleItem];

    //选择日期
    FieldConfig[FieldType.date] = [FieldProps.plabel, FieldProps.pdefval, FieldProps.prequired, FieldProps.pDate, FieldProps.queryItem, FieldProps.columnItem,FieldProps.backgroundStyleItem];
    //当前日期
    FieldConfig[FieldType.currentDate] = [FieldProps.plabel,FieldProps.pDate, FieldProps.queryItem, FieldProps.columnItem,FieldProps.backgroundStyleItem];

    //选择年份
    FieldConfig[FieldType.year] = [FieldProps.plabel, FieldProps.pdefval,FieldProps.prequired,FieldProps.queryItem, FieldProps.columnItem,FieldProps.backgroundStyleItem];
    //当前年份
    FieldConfig[FieldType.currentYear] = [FieldProps.plabel,FieldProps.queryItem,FieldProps.columnItem,FieldProps.backgroundStyleItem];

    //选择月份
    FieldConfig[FieldType.month] = [FieldProps.plabel, FieldProps.pdefval,FieldProps.prequired,FieldProps.queryItem, FieldProps.columnItem,FieldProps.backgroundStyleItem];
    //当前月份
    FieldConfig[FieldType.currentMonth] = [FieldProps.plabel,FieldProps.queryItem,FieldProps.columnItem,FieldProps.backgroundStyleItem];


    //数字
    FieldConfig[FieldType.number] = [FieldProps.plabel, FieldProps.pdefval, FieldProps.prequired, FieldProps.queryItem, FieldProps.columnItem,FieldProps.backgroundStyleItem];
    //金额
    FieldConfig[FieldType.money] = [FieldProps.plabel, FieldProps.pdefval, FieldProps.prequired, FieldProps.queryItem, FieldProps.columnItem,FieldProps.backgroundStyleItem];

    //下拉列表
    FieldConfig[FieldType.select] = [FieldProps.plabel, FieldProps.poptions, FieldProps.prequired, FieldProps.queryItem, FieldProps.columnItem,FieldProps.backgroundStyleItem];
    //复选框
    FieldConfig[FieldType.radio] = [FieldProps.plabel, FieldProps.poptions, FieldProps.prequired, FieldProps.playout, FieldProps.queryItem, FieldProps.columnItem,FieldProps.backgroundStyleItem];
    //单选框
    FieldConfig[FieldType.checkbox] = [FieldProps.plabel, FieldProps.poptions, FieldProps.prequired, FieldProps.playout, FieldProps.queryItem, FieldProps.columnItem,FieldProps.backgroundStyleItem];


    //图片
    FieldConfig[FieldType.image] = [FieldProps.plabel, FieldProps.prequired,FieldProps.backgroundStyleItem];
    //附件
    FieldConfig[FieldType.attachment] = [FieldProps.plabel, FieldProps.prequired,FieldProps.backgroundStyleItem];

    //表格
    FieldConfig[FieldType.table] = [FieldProps.plabel,FieldProps.ptableColumnName,FieldProps.ptableRowNum,FieldProps.backgroundStyleItem];

    //省市县
    FieldConfig[FieldType.location] = [FieldProps.plabel,FieldProps.prequired,FieldProps.queryItem, FieldProps.columnItem,FieldProps.backgroundStyleItem];
    //纯文本
    FieldConfig[FieldType.label] = [FieldProps.pinstruct,FieldProps.backgroundStyleItem];
    //分割线
    FieldConfig[FieldType.hr] = [FieldProps.backgroundStyleItem];

}



/**
 * 单选框点击事件
 */
function radioBtnClickEvent() {
    $("body").on("click", ".radio-text:not(.notClick)", function () {
    	radioBtnClickFun(this);
    });
}
function radioBtnClickFun(obj){
    var radioName = $(obj).prev().attr("name");
    $(obj).parents("form").find("input[name=" + radioName + "]").prop("checked", false).next().removeClass("c-radioed");
    $(obj).addClass("c-radioed");
    $(obj).prev().prop("checked", "checked");
}

//图片上传 uploader对象 数组，  在删除图片时，删除uploader对象中对应的 图片列
var imgUploaderArrt = [];

/**
 * 图片上传
 */
function imgUpload(){

    $("#formFieldItems").find(".imgupload-btn").each(function(i,btn){

        var uploader = WebUploader.create({
            swf: '/common/webuploader-0.1.5/Uploader.swf',
            server: '/uplaod_file.jhtml',
            pick: $(btn),//上传按钮
            auto: true,//自动删除
            chunked: false,//分片上传
            duplicate: false ,//不可上传重复文件
            fileSingleSizeLimit:10485760,  //10M    10*1024*1024 byte
            // 只允许选择图片文件。
           accept: {
                title: 'Images',
               extensions: 'gif,jpg,jpeg,bmp,png',
               mimeTypes: 'image/*'
            }
        });

        uploader.onError = function (type){
            if (type=="Q_TYPE_DENIED"){
                layer.alert("请上传gif,jpg,jpeg,bmp,png格式文件");
            }else  if(type == "F_DUPLICATE"){
                layer.alert("请不要重复选择文件！");
            }else if(type == "F_EXCEED_SIZE"){
                layer.alert("所选附件总大小不可超过10M！换个小点的文件吧！");
            }else{
                layer.alert("上传失败！"+type);
            }

        };

        uploader.onUploadSuccess = function (file, obj) {

            if (obj.code == 200) {

                var $li = $('<li id="' + file.id + '">' +
                    '<p class="imgWrap"></p>' +
                    '<p class="title">' + file.name + '</p>' +
                    '<div class="operate-bg"><a href="javascript:void(0);" class="delet-btn"  onclick="deleteImgOrFile(this,'+i+',\'img\')">删除</a></div>' +
                    '</li>'),
                    $wrap = $li.find('p.imgWrap');
                var img = $('<img src="' + obj.url + '">');
                $wrap.empty().append(img);
                $(btn).before($li);

            } else {
                layer.alert("上传失败！");
            }

        };
        uploader.onUploadError = function (file, obj) {
            layer.alert("上传失败！");
        }


        imgUploaderArrt[imgUploaderArrt.length] = uploader;
    });

}


var fileUploaderArrt = [];
function fileUpload(){

    $("#formFieldItems").find(".fileupload-btn").each(function(i,btn){

        var uploader = WebUploader.create({
            swf: '/common/webuploader-0.1.5/Uploader.swf',
            server: '/uplaod_file.jhtml',
            pick: $(btn),
            auto: true,
            chunked: false,
            duplicate: false,
            fileSingleSizeLimit:104857600

        });

        uploader.onError = function (type){
            if(type == "F_DUPLICATE"){
                layer.alert("请不要重复选择文件！");
            }else if(type == "F_EXCEED_SIZE"){
                layer.alert("所选附件总大小不可超过100M！换个小点的文件吧！");
            }else{
                layer.alert("上传失败！");
            }
        };

        uploader.onUploadSuccess = function (file, obj) {

            if (obj.code == 200) {

                var $li = $('<li id="' + file.id + '">' +
                    '<span class="title" fileUrl="' +obj.url+
                    '">' + file.name + '</span>' +
                    '<span class="file-delet" onclick="deleteImgOrFile(this,'+i+',\'file\')">×</span>' +
                    '</li>');
                $(btn).next().append($li);

            } else {
                layer.alert("上传失败！");
            }

        };

        uploader.onUploadError = function (file, obj) {
            layer.alert("上传失败！");
        }
        fileUploaderArrt[fileUploaderArrt.length] = uploader;
    });

}

/**
 * 删除上传文件或图片
 * @param obj
 * @param index
 * @param flag
 */
function deleteImgOrFile(obj,index,flag){

    $(obj).parents("li").remove();
    if(flag =="img"){
        imgUploaderArrt[index].removeFile($(obj).parents("li").attr("id"), true);
    }else{
        fileUploaderArrt[index].removeFile($(obj).parents("li").attr("id"), true);
    }

}

/**
 *  初始化省市县
 * @param arrt option数组
 * @param selectObj select对象
 */
function initLocationSelect(arrt,selectObj){
    initLocationSelect(arrt,selectObj,null)
}

/**
 * 初始化省市县  回显默认值
 * @param arrt   option数组
 * @param selectObj select对象
 * @param value     默认值
 */
function initLocationSelect(arrt,selectObj,value){
    if(arrt && arrt.length>0){
        $(selectObj).find("option").remove();
        for(var i=0; i < arrt.length;i++){
            var option = $("<option>").html(arrt[i].name);
            if(i!=0){
                option.attr("value",arrt[i].name);
            }else{
                option.attr("value","");
            }
            if(isNotNull(value)){

                if(arrt[i].name == value){
                    option.attr("selected","selected");
                }

            }
            $(selectObj).append(option);
        }
    }
}

$(function () {
    radioBtnClickEvent();
});

