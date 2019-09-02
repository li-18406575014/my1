/**
 * Created by mxs on 2018/8/22.
 */


/**
 * 表单结构回显  表单编辑时使用
 * @param formRowLayOut
 */
function initFormRowLayOut(formRowLayOut) {
    initFormRowLayOut(formRowLayOut,null,null,null,null);
}


/**
 *
 * 表单结构及 数据回显   表单展示填表时使用
 * @param formRowLayOut   表单结构
 * @param userObj           当前用户对象
 * @param departmentObj     当前部门对象
 * @param currentTimeMillis 当前时间戳
 */
function initFormRowLayOut(formRowLayOut,userObj,departmentObj,currentTimeMillis) {
    initFormRowLayOut(formRowLayOut,userObj,departmentObj,currentTimeMillis,null);
}

/**
 * 表单结构及 数据回显   表单提交数据详情 时使用
 * @param formRowLayOut   表单结构
 * @param formDataObj       表单提交数据回显
 * @param userObj           当前用户对象
 * @param departmentObj     当前部门对象
 * @param currentTimeMillis 当前时间戳
 */
function initFormRowLayOut(formRowLayOut,userObj,departmentObj,currentTimeMillis,formDataObj) {

    for (var i in formRowLayOut) {

        var tableObj =  $("<table class='c-table-item'><tbody><tr class='c-tr'></tr></tbody></table>");
        var trObj = tableObj.find("tr");
        var trRow = formRowLayOut[i];
        for (var j in trRow) {

            var layoutWidth = trRow[j].width;
            var itemId = trRow[j].itemId;

            var layoutObj = $("<td class='c-layout' style='width:" + layoutWidth + ";'></td>");


            var formItem = formItems[itemId];

            var itemType = formItem.type;
            var cloneItem = $('#itemModelUl').find(".field-item[type=" + itemType + "]").clone();

            setItemAttr(itemId, cloneItem,userObj,departmentObj,currentTimeMillis,formDataObj);


            layoutObj.append(cloneItem);
            trObj.append(layoutObj);
        }

        //在table 外层 包裹一层父级div的目的是，在table同级下方 添加一个 div，在编辑状态下 同级div设置高度，拖拽tr内的td（表单项） 时 ，更顺畅
        var tableDiv =  $("<div  class='item-parent-div'></div>").append(tableObj).append($("<div class='gap_div'></div>")).append($("<div class='move_div'></div>"));
        $("#formFieldItems").append(tableDiv);


        /* $("#formFieldItems").append(tableObj);*/
    }


}

/**
 * 表单结构回显  无布局结构 （手机）
 * @param formLayout
 */
function initFormNoRowLayOut(formLayout,userObj,departmentObj,currentTimeMillis) {
    var itemIds = formLayout.split(",");
    for (var i = 0, len = itemIds.length; i < len; i++) {
        var itemId = itemIds[i];
        var formItem = formItems[itemId];

        var itemType = formItem.type;
        var cloneItem = $('#itemModelUl').find(".field-item[type=" + itemType + "]").clone();

        setItemAttr(itemId, cloneItem,userObj,departmentObj,currentTimeMillis,null);

        $("#formFieldItems").append(cloneItem);

    }
}


/**
 * 设置表单项属性
 * @param itemId
 * @param cloneItem
 */
function setItemAttr(itemId, cloneItem,userObj,departmentObj,currentTimeMillis,formDataObj) {
    var formItem = formItems[itemId];
    var itemType = formItem.type;
    cloneItem.attr("id", itemId);
    //背景回显
    if ($.inArray(FieldProps.backgroundStyleItem, FieldConfig[itemType]) > -1) {
        if(formItem.backgroundStyleItem && formItem.backgroundStyleItem.background) {
            cloneItem.css("background", formItem.backgroundStyleItem.background);
        }
    }
    //字段名称回显
    if ($.inArray(FieldProps.plabel, FieldConfig[itemType]) > -1) {
        cloneItem.find(".control-label:first").html(formItem.plabel);

    }

    //默认值回显
    if ($.inArray(FieldProps.pdefval, FieldConfig[itemType]) > -1) {
        cloneItem.find("input:first").val(formItem.pdefval);
    }

    //选项回显
    if ($.inArray(FieldProps.poptions, FieldConfig[itemType]) > -1) {

        var poptionsSeq = formItem.poptionsSeq;
        var poptions = formItem.poptions;
        var newPoptions = {};


        var poptionsIds = poptionsSeq.split(",");
        for (var i = 0, len = poptionsIds.length; i < len; i++) {
            newPoptions[poptionsIds[i]] = poptions[poptionsIds[i]];
        }
        poptions = null;
        formItem.poptions = newPoptions;


        if (itemType == FieldType.radio) {
            cloneItem.find(".radio:first").siblings().remove();
            var j = 0;
            for (var key in formItem.poptions) {

                if (j == 0) {
                    cloneItem.find(".radio:first").find("input").val(key);
                    cloneItem.find(".radio:first").find(".radio-text").html(formItem.poptions[key]);
                } else {
                    cloneItem.find(".control-panel").append(cloneItem.find(".radio:first").clone());
                    cloneItem.find(".radio:last").find("input").val(key);
                    cloneItem.find(".radio:last").find(".radio-text").html(formItem.poptions[key]);
                }
                j++;
            }


        }
        if (itemType == FieldType.checkbox) {
            cloneItem.find(".checkbox:first").siblings().remove();

            var j = 0;
            for (var key in formItem.poptions) {
                if (j == 0) {
                    cloneItem.find(".checkbox:first").find("input").val(key);
                    cloneItem.find(".checkbox:first").find(".checkbox-text").html(formItem.poptions[key]);
                } else {
                    cloneItem.find(".control-panel").append(cloneItem.find(".checkbox:first").clone());
                    cloneItem.find(".checkbox:last").find("input").val(key);
                    cloneItem.find(".checkbox:last").find(".checkbox-text").html(formItem.poptions[key]);
                }
                j++;
            }

        }


        if (itemType == FieldType.select) {
            cloneItem.find("option:first").siblings().remove();

            var j = 0;
            for (var key in formItem.poptions) {

                cloneItem.find("select").append(cloneItem.find("option:first").clone());
                cloneItem.find("option:last").attr("value", key).removeAttr("selected");
                cloneItem.find("option:last").html(formItem.poptions[key]);
                j++;
            }

        }

    }

    //排版回显
    if ($.inArray(FieldProps.playout, FieldConfig[itemType]) > -1) {

        if (isNotNull(formItem.playout) && formItem.playout == "2") {
            if (itemType == FieldType.radio) {
                cloneItem.find(".radio").addClass("c-vertical");
            }
            if (itemType == FieldType.checkbox) {
                cloneItem.find(".checkbox").addClass("c-vertical");
            }
        }

    }

    //必填项回显
    if ($.inArray(FieldProps.prequired, FieldConfig[itemType]) > -1) {

        if (isNotNull(formItem.prequired) && formItem.prequired === 1) {
            cloneItem.find(".c-prequired").show();
        }
    }
    //文本内容回显
    if ($.inArray(FieldProps.pinstruct, FieldConfig[itemType]) > -1) {
        cloneItem.find("[source=pinstruct]").html(formItem.pinstruct);
    }





    if (itemType == FieldType.number || itemType == FieldType.input || itemType == FieldType.money ) { //数字类型  普通输入框  金额类型
        cloneItem.find("input").attr("name", itemId).attr("maxlength","500");
        if(itemType == FieldType.number){
            cloneItem.find("input").attr("maxlength","9");
        }else if(itemType == FieldType.money){
            cloneItem.find("input").attr("maxlength","20");
        }

        if(formDataObj){
            if(formDataObj[itemId]){
                cloneItem.find("input").val(formDataObj[itemId]);
            }else{
                cloneItem.find("input").val("");
            }
        }

    } else if (itemType == FieldType.select || itemType == FieldType.month) { //选择框 和 月份
        cloneItem.find("select").attr("name", itemId);

        if(formDataObj){
            if(formDataObj[itemId]){
                cloneItem.find("select").find("option[value="+formDataObj[itemId]+"]").prop("selected",true);
            }
        }

    } else if (itemType == FieldType.textarea) { //大文本
        cloneItem.find("textarea").attr("name", itemId).attr("maxlength","500");


        if(formDataObj){
            if(formDataObj[itemId]){
                cloneItem.find("textarea").val(formDataObj[itemId]);
            }else{
                cloneItem.find("textarea").val("");
            }
        }

    }else  if (FieldType.date == itemType) { //日期类型设置格式化类型
        if (!formItem.pDate) {
            formItem.pDate = 1;
        }
        cloneItem.find("input").attr("name", itemId).attr("maxlength","50");
        cloneItem.find("input").attr("dateFormat", formItem.pDate);

        if(formDataObj){
            if(formDataObj[itemId]){

                var date = moment(formDataObj[itemId]);
                var formdataItemShowValue ;
                if (formItem.pDate == 2) {
                    formdataItemShowValue = date.format("YYYY-MM-DD");
                } else {
                    formdataItemShowValue = date.format("YYYY-MM-DD HH:mm:ss");
                }
                cloneItem.find("input").val(formdataItemShowValue);
            }else{
                cloneItem.find("input").val("");
            }
        }

    }else  if (FieldType.checkbox == itemType) { //复选框

        cloneItem.find("input").attr("name", itemId);

        if(formDataObj && formDataObj[itemId]){
            var values = formDataObj[itemId];
            if(values instanceof Array  ){
                for(var i=0;i<values.length;i++){
                    cloneItem.find("input[value="+values[i]+"]").prop("checked", true).next().addClass("c-checked");
                }
            }else{
                cloneItem.find("input[value="+values+"]").prop("checked", true).next().addClass("c-checked");
            }
        }
    }else  if (FieldType.radio == itemType) { //单选框

        cloneItem.find("input").attr("name", itemId);

        if(formDataObj && formDataObj[itemId]){

            cloneItem.find("input[value="+formDataObj[itemId]+"]").prop("checked", true).next().addClass("c-radioed");
        }
    }else  if (FieldType.image == itemType) { //图片类型

        cloneItem.find("input").attr("name", itemId);

        if(formDataObj && formDataObj[itemId]){
            //图片回显   。。。。。。

            for(var h =0;h<  formDataObj[itemId].length;h++){

                var imgObj = formDataObj[itemId][h];

                var $li = $('<li >' +
                    '<p class="imgWrap"></p>' +
                    '<p class="title">' + imgObj.title + '</p>' +
                    '</li>'),
                    $wrap = $li.find('p.imgWrap');
                var img = $('<img src="' +  imgObj.imgUrl + '">');
                $wrap.empty().append(img);

                cloneItem.find(".imgupload-btn").before($li);


            }


        }
    }else  if (FieldType.attachment == itemType) { //附件类型

        cloneItem.find("input").attr("name", itemId);

        if(formDataObj && formDataObj[itemId]){
            //附件回显   。。。。。。
            for(var h =0;h<  formDataObj[itemId].length;h++){
                var fileObj = formDataObj[itemId][h];
                var $li = $('<li >' +
                '<span class="title" fileUrl="' +fileObj.fileUrl+
                '">' + fileObj.title + '</span>' +
                '</li>');
                cloneItem.find(".file-list").append($li);
            }
        }
    }else  if (FieldType.attachment == itemType) { //附件类型

        cloneItem.find("input").attr("name", itemId);

        if(formDataObj && formDataObj[itemId]){
            //附件回显   。。。。。。
            for(var h =0;h<  formDataObj[itemId].length;h++){
                var fileObj = formDataObj[itemId][h];
                var $li = $('<li >' +
                '<span class="title" fileUrl="' +fileObj.fileUrl+
                '">' + fileObj.title + '</span>' +
                '</li>');
                cloneItem.find(".file-list").append($li);
            }
        }
    }else if(FieldType.userName == itemType){
        cloneItem.find(".realData").attr("name", itemId);

        if(formDataObj && formDataObj[itemId]){  //值存在

            cloneItem.find(".realData").val(formDataObj[itemId]);
            // 名称 需要通过 formDataObj[itemId] 值  进行回显
            //cloneItem.find(".form-control").val(userobj.name);

        }else if(!isNotNull(formDataObj)){ //为空时 则赋 初始值

            if(isNotNull(userObj)){
                cloneItem.find(".realData").val(userobj.id);
                cloneItem.find(".form-control").val(userobj.name);
            }
        }


    }else if(FieldType.userDepartment == itemType){
        cloneItem.find(".realData").attr("name", itemId);

        if(formDataObj && formDataObj[itemId]){  //值存在

            cloneItem.find(".realData").val(formDataObj[itemId]);
            // 部门名称 需要通过 formDataObj[itemId] 值  进行回显
            //cloneItem.find(".form-control").val(userobj.name);

        }else if(!isNotNull(formDataObj)){ //为空时 则赋 初始值

            if(isNotNull(userObj)){
                cloneItem.find(".realData").val(departmentObj.id);
                cloneItem.find(".form-control").val(departmentObj.name);
            }
        }

    }else if(FieldType.currentDate == itemType){

        if (!formItem.pDate) {
            formItem.pDate = 1;
        }
        cloneItem.find("input").attr("name", itemId).attr("maxlength","50");

        if(formDataObj){
            if(formDataObj[itemId]){
                var date = moment(formDataObj[itemId]);
                var formdataItemShowValue ;
                if (formItem.pDate == 2) {
                    formdataItemShowValue = date.format("YYYY-MM-DD");
                } else {
                    formdataItemShowValue = date.format("YYYY-MM-DD HH:mm:ss");
                }
                cloneItem.find("input").val(formdataItemShowValue);
            }else{
                cloneItem.find("input").val("");
            }
        }else{
            if(isNotNull(currentTimeMillis)){
                var date = moment(currentTimeMillis);
                var formdataItemShowValue ;
                if (formItem.pDate == 2) {
                    formdataItemShowValue = date.format("YYYY-MM-DD");
                } else {
                    formdataItemShowValue = date.format("YYYY-MM-DD HH:mm:ss");
                }
                cloneItem.find("input").val(formdataItemShowValue);
            }
        }

    }else if(FieldType.currentYear == itemType){


        cloneItem.find(".realData").attr("name", itemId).attr("maxlength","50");

        if(formDataObj){
            if(formDataObj[itemId]){
                cloneItem.find(".realData").val(formDataObj[itemId]);
                cloneItem.find(".form-control").val(formDataObj[itemId]+"年");
            }
        }else{
            if(isNotNull(currentTimeMillis)){
                var date = moment(currentTimeMillis);


                var yearValue =date.format("YYYY") ;
                cloneItem.find(".realData").val(yearValue);
                cloneItem.find(".form-control").val(yearValue+"年");

            }
        }

    }else if(FieldType.year == itemType){


        cloneItem.find(".realData").attr("name", itemId).attr("maxlength","50");


        var defaultValue = cloneItem.find("input:first").val();

        if(defaultValue){
            if(defaultValue.indexOf("年") >= -1){
                defaultValue = defaultValue.replace("年","");
            }
            cloneItem.find(".realData").val(defaultValue);
        }


        if(formDataObj){
            if(formDataObj[itemId]){
                cloneItem.find(".realData").val(formDataObj[itemId]);
                cloneItem.find(".form-control").val(formDataObj[itemId]+"年");
            }
        }

    }else if(FieldType.currentMonth== itemType){


        cloneItem.find(".realData").attr("name", itemId).attr("maxlength","50");

        if(formDataObj){
            if(formDataObj[itemId]){
                cloneItem.find(".realData").val(formDataObj[itemId]);
                cloneItem.find(".form-control").val(formDataObj[itemId]+"月");
            }
        }else{
            if(isNotNull(currentTimeMillis)){
                var date = moment(currentTimeMillis);

                var yearValue =date.format("M") ;
                cloneItem.find(".realData").val(yearValue);


                var yearValueStr = $(".field-item[type=lc-month] select:first option:eq("+yearValue+")").html();


                cloneItem.find(".form-control").val(yearValueStr);

            }
        }

    }else if(FieldType.table == itemType){

        var ptableColumnNames = formItem.ptableColumnName;
        var ptableRowNum = formItem.ptableRowNum;
        var ptableColumnWidth = formItem.ptableColumnWidth;

        cloneItem.find("tbody tr:first").siblings().remove();
        cloneItem.find("thead th:first").siblings().remove();
        cloneItem.find("tbody td:first").siblings().remove();


        for(var i =0;i<ptableColumnNames.length;i++){

            var th;

            if(i==0){
                th = cloneItem.find("thead th:first").html(ptableColumnNames[i]);
            }else{
                th = cloneItem.find(".form-table").find("th:last").clone();
                th.html(ptableColumnNames[i]);
                cloneItem.find(".form-table").find("thead tr").append(th);
                var td = cloneItem.find(".form-table").find("td:last").clone();
                cloneItem.find(".form-table").find("tbody tr").append(td);
            }

            if(ptableColumnWidth){
                if(i < ptableColumnNames.length-1){
                    $(th).width(ptableColumnWidth[i]+"%");
                }else{  //设置最后一个 th 宽度为默认，要不然无法拖拽
                    $(th).css("width","");
                }
            }

        }

        var firstTr = cloneItem.find("tbody tr:first");
        var tbody = cloneItem.find("tbody");
        for(var j=1 ;j<ptableRowNum;j++){
            tbody.append(firstTr.clone());
        }


        if(formDataObj && formDataObj[itemId]){

            var trArray = formDataObj[itemId];
            for(var i=0;i<trArray.length;i++){

                var tdArray = trArray[i];

                var trObj = cloneItem.find("tbody tr").eq(i);
                if(trObj.length>0){
                    for(var j=0;j<tdArray.length;j++){

                        var tdObj = trObj.find("td").eq(j);
                        if(tdObj.length >0){
                            tdObj.find("input").val(formDataObj[itemId][i][j]);
                        }

                    }
                }

            }

        }

    }else if(FieldType.location == itemType){



        var province = cloneItem.find("select[type=province]").attr("name", itemId+"province");
        var city = cloneItem.find("select[type=city]").attr("name", itemId+"city");
        var xian = cloneItem.find("select[type=xian]").attr("name", itemId+"xian");


        initLocationSelect(arrCity,province);



        if(formDataObj){

            var shengValue = formDataObj[itemId+"province"];
            var provinceOption =province.find("option[value='"+shengValue+"']").attr("selected","selected");
            var index = provinceOption.index();

            var shiValue = formDataObj[itemId+"city"];
            initLocationSelect(arrCity[index].sub, city,shiValue );

            var shiIndex= 0;
            if(shiValue){
                var shiOption = city.find("option[value='"+shiValue+"']");
                shiIndex = shiOption.index();
            }


            if(arrCity[index].sub[shiIndex].sub){

                var xianValue = formDataObj[itemId+"xian"];
                initLocationSelect(arrCity[index].sub[shiIndex].sub,xian,xianValue);
                xian.parent().prev().show();
                xian.parent().show();
            }else{
                xian.parent().prev().hide();
                xian.parent().hide();
            }

        }


    }





}



/**
 * 按钮样式回显
 * @param formStyle
 */
function initSubBtnStyle(formStyle){
    var subBtnStyleAttr = formStyle.subBtnStyleAttr;
    $("#submitBtn").val(subBtnStyleAttr.subBtnInput);
    $("#submitBtn").attr("style",formStyle.subBtnStyle);

    if(subBtnStyleAttr.styleClass){
        $("#submitBtn").addClass(subBtnStyleAttr.styleClass);
    }

    if(subBtnStyleAttr.subBtnBg1ColorStyle == 2){

        $("#submitBtn").hover(function(){
            $("#submitBtn").css("background",subBtnStyleAttr.subBtnBgHoverColor);

        },function(){
            $("#submitBtn").css("background",subBtnStyleAttr.subBtnBg1Color);
        });

    }

    if(subBtnStyleAttr.subBtnTextColorStyle == 2){
        $("#submitBtn").hover(function(){
            var hoverBackground = $('#subBtnTextHoverColor-input').val();
            $("#submitBtn").css("color",subBtnStyleAttr.subBtnTextHoverColor);

        },function(){
            $("#submitBtn").css("color",subBtnStyleAttr.subBtnTextColor);
        });
    }
}



/**
 * 展示页面编辑样式回显
 * @param formStyle
 */
function initFormStyle(formStyle){

    $("#formStyleCss").html(formStyle.styleCss);
    $("#formFieldItems").attr("style",formStyle.style);
    $("#formFieldItems").css("min-height","");
    $("#formFieldItems").attr("class",formStyle.class);

    $("#fTitle").attr("style",formStyle.titleStyle);
    $("#fDescription").attr("style",formStyle.descStyle);

    $("#areaScroll").css("background",formStyle.content_background);
    $("#fbForm").css("background",formStyle.title_background);
    initSubBtnStyle(formStyle);
    var styleAttr = formStyle.styleAttr;

    var inBoderStyle = styleAttr.inBoderStyle;
    if (inBoderStyle == "2") {
        var type = styleAttr.inBoderStyleType;
        var color = styleAttr.inBoderColor;
        var size = styleAttr.inBoderSize+"px";

        $(".inTransverseLine .c-table-item").css({
            "border-bottom-style":type
        });
        $(".inTransverseLine .c-table-item").css({
            "border-bottom-color":color
        });
        $(".inTransverseLine .c-table-item").css({
            "border-bottom-width":size
        });
        $(".inTransverseLine .item-parent-div:first-child .c-table-item").css("border-top","none");
        $(".inTransverseLine .item-parent-div:last-child .c-table-item").css("border-bottom","none");

        $(".inVerticalLine .c-grouptext").css("border-right-style",type);
        $(".inVerticalLine .c-layout").css("border-right-style",type);
        $(".inVerticalLine .c-grouptext").css("border-right-color",color);
        $(".inVerticalLine .c-layout").css("border-right-color",color);
        $(".inVerticalLine .c-grouptext").css("border-right-width",size);
        $(".inVerticalLine .c-layout").css("border-right-width",size);
        $(".inTransverseLine .c-layout:last-child").css("border-right","none")

    }else{


        $(".inTransverseLine .c-table-item").css({
            "border-top-style":"",
        });
        $(".inTransverseLine .c-table-item").css({
            "border-top-color":"",
        });
        $(".inTransverseLine .c-table-item").css({
            "border-top-width":"",
        });
        $(".inTransverseLine .item-parent-div:first-child .c-table-item").css("border-top","");
        $(".inTransverseLine .item-parent-div:last-child .c-table-item").css("border-top","");

        $(".inVerticalLine .c-grouptext").css("border-right-style","");
        $(".inVerticalLine .c-layout").css("border-right-style","");
        $(".inVerticalLine .c-grouptext").css("border-right-color","");
        $(".inVerticalLine .c-layout").css("border-right-color","");
        $(".inVerticalLine .c-grouptext").css("border-right-width","");
        $(".inVerticalLine .c-layout").css("border-right-width","");
        $(".inTransverseLine .c-layout:last-child").css("border-right","")

    }




    var outBoderStyle =styleAttr.outBoderStyle;
    if (outBoderStyle == "2") {
        var type = styleAttr.outBoderStyleType;
        var color = styleAttr.outBoderColor;
        var size = styleAttr.outBoderSize+"px";


        $(".outTransverseLine .item-parent-div:first-child .c-table-item").css("border-top-style",type);
        $(".outTransverseLine .item-parent-div:last-child .c-table-item").css("border-bottom-style",type);

        $(".outTransverseLine .item-parent-div:first-child .c-table-item").css("border-top-color",color);
        $(".outTransverseLine .item-parent-div:last-child .c-table-item").css("border-bottom-color",color);
        $(".outTransverseLine .item-parent-div:first-child .c-table-item").css("border-top-width",size);
        $(".outTransverseLine .item-parent-div:last-child .c-table-item").css("border-bottom-width",size);

        $(".outVerticalLine .c-table-item").css({
            "border-right-style":type,
            "border-left-style":type
        });
        $(".outVerticalLine .c-table-item").css({
            "border-right-color":color,
            "border-left-color":color
        });
        $(".outVerticalLine .c-table-item").css({
            "border-right-width":size,
            "border-left-width":size
        });


    }else{


        $(".outTransverseLine .item-parent-div:first-child .c-table-item").css("border-top-style","");
        $(".outTransverseLine .item-parent-div:last-child .c-table-item").css("border-bottom-style","");

        $(".outTransverseLine .item-parent-div:first-child .c-table-item").css("border-top-color","");
        $(".outTransverseLine .item-parent-div:last-child .c-table-item").css("border-bottom-color","");
        $(".outTransverseLine .item-parent-div:first-child .c-table-item").css("border-top-width","");
        $(".outTransverseLine .item-parent-div:last-child .c-table-item").css("border-bottom-width","");

        $(".outVerticalLine .c-table-item").css({
            "border-right-style":"",
            "border-left-style":""
        });
        $(".outVerticalLine .c-table-item").css({
            "border-right-color":"",
            "border-left-color":""
        });
        $(".outVerticalLine .c-table-item").css({
            "border-right-width":"",
            "border-left-width":""
        });

    }


}
