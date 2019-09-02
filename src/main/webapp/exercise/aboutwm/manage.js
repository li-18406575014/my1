if (typeof Site == "undefined") {
	Site = {}
}




/* *功能：浮动模块
*
* 20171102 mxs 浮动功能修改为布局内浮动 代码废弃 进行备份
* */
Site.floatOutOld = function(t){
    var f = null;
    if(typeof t == "number"){
        f =  t;
    }else{
        f = MUTIL.getMcId(t);//f:mcId
    }
    var b = $('#module'+f).parents('.box');//模块
    if($(b).attr('style')!=null){
        $(b).attr('style',$(b).attr('style').replace(/z-index: ?[0-9]+ ?;/g, ""));
    }
    var dock = b.attr('_dock');
    var lock = b.attr('_lock');
    var statuts = MUTIL.addIdToLayout(b,f);

    if(typeof t == "object"){
        if(status == -1){
            return;
        }
        if($('#absForm').length <= 0){
            $('#demoMain').before('<div id="absForm" class="absForm"></div>');
        }
    }
    var c = b.parent();
    var w = $('#module' + f).width(),
        left = b.offset().left,
        top = b.offset().top;
    var list = $("#absForm"),
        listLeft = list.offset().left,
        listTop = list.offset().top;
    var s = c.attr('class').split(" ")[0];
    $('#absForm').append(b);
    b.css({
        'left': left - listLeft + "px",
        'top': top - listTop + "px",
        'position':'absolute'
/*20170306 zxr   点击侧停后需要 更新 定位样式*/

    });
    $('#module' + f).removeAttr("style")

    // 这是有问题的  注释后 浮动起来的元素就没有了宽度
    //Site.setModuleStyleCssList(f, [{cls:'', key:'width', value:w + 'px '}]);

    var _moduleId = $('#module' + f).parents('.box').find('.configuration').attr('_moduleid');

    if(typeof t == "number" || _moduleId == 351 || _moduleId == 325 || _moduleId == 327 || _moduleId == 423){
        var resizeYS = b.filter(function(index,obj){
            var moduleId = $(obj).find('.configuration').attr('_moduleid')
            var mcid = $(obj).find('.configuration').attr('_mcid')
            var fun = function(){
                if(moduleId == 325 || moduleId == 327 || moduleId == 351 || moduleId == 423 ){
                    // 设置内部元素 100%
                    var YS = $(obj).find('.moduleView').children();
                    // 图片
                    if(moduleId == 351){
                        // 设置父级宽高
                        var w = $(obj).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("#attrImageWidht").val(),
                            h = $(obj).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("#attrImageHeight").val();
                        $(obj).width(w).height(h);
                        $(obj).find('.moduleView').addClass("threeCss");
                        YS.width("100%").height("100%");
                        $(obj).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("#attrImageWidht").val()
                        YS.children().eq(0).width("100%").height("100%");
                        YS.find('.formMiddle').width("100%").height("100%");
                        YS.find('.formMiddle').find('a').width("100%").height("100%");
                        YS.find('.formMiddle').find('img').width("100%").height("100%");
                        var shapetype = $(obj).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("input[name=attr_shapetype]").val();
                        var radiustext = $(obj).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("input[name=attr_radius]").val();
                        Site.imgShapeShow(YS.children().eq(0),shapetype,w,h,radiustext);

                    }

                    // 文字
                    if(moduleId == 327){
                        var w = $(obj).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("#imageWidth").val(),
                            h = $(obj).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("#imageHeight").val();
                        $(obj).find('.moduleView').addClass("threeCss")
                        $(obj).width(w).height(h);
                        YS.width("100%").height("100%");
                        YS.find('.formMiddle').width("100%").height("100%");
                        YS.find('.formMiddle').find('.ztextbox').width("100%").height("100%");
                        // console.log(YS.css("background-color"))
                        // 保存时判断颜色为空时 隐藏  其他带颜色 暂时只有这种方法
                        // console.log(YS.css("background-color"))
                        // if(YS.css("background-color") == "rgba(0, 0, 0, 0)" || YS.css("background-color") == "rgb(255, 255, 255)"){
                        // 	// 隐藏 模块颜色
                        // 	Site.hideModuleBg(mcid)
                        // }
                    }
                    // 按钮
                    if(moduleId == 325){
                        $(obj).find('.moduleView').addClass("threeCss")
                        var JvForm = $(obj).find('.moduleView').children().find("#jvForm"+f),
                            w = JvForm.find("#buttonTextWidth").val(),
                            h = JvForm.find("#buttonTextHeight").val(),
                            _thisBtnCss = YS.find(".buttonStyle1"+mcid).find('a');
                        if(_thisBtnCss.css("box-shadow") !== "none"){
                            $(obj).width(w).height(h).css({"padding":"0 0 15px"});
                        }else{
                            $(obj).width(w).height(h);
                        }
                        $(obj).width(w).height(h);
                        YS.width("100%").height("100%");
                        YS.find(".buttonStyle1"+mcid).width("100%").height("100%");
                        _thisBtnCss.width("100%").height("100%");
                    }

                    //商城分类
                    if(moduleId == 423){
                        //$(obj).find('.moduleView').children().find('.formMiddle').find("#mallTypeForm").find("input[name='mallTypeWidth']").val();
                        var w = $(obj).find("input[name='attr_mallTypeWidth']").val();
                        //$(obj).find('.moduleView').children().find('.formMiddle').find("#mallTypeForm").find("input[name='mallTypeHeight']").val();
                        var h = $(obj).find("input[name='attr_mallTypeHeight']").val();
                        $(obj).find('.moduleView').addClass("threeCss");
                        $(obj).width(w).height(h);
                        YS.width("100%").height("100%");
                        YS.find('.formMiddle').width("100%").height("100%");
                        YS.find('.formMiddle').find('.ztextbox').width("100%").height("100%");
                    }
                    return $(obj).parent();
                }
            }
            return fun();
        });

        //拉伸事件
        resizeYS.resizable({
            handles: "all",
            autoHide: true,
            classes: {
                "ui-resizable": "jrf-highlight"
            },
            resize:function(event,ui){
                var moduleId = $(ui.element).find('.configuration').attr('_moduleid');
                var mcid = $(ui.element).find('.configuration').attr('_mcid');
                //按钮
                if(moduleId == 325){
                    $(ui.element).find('.moduleView a').css({"line-height":ui.size.height+"px"});
                }else if(moduleId == 351){
                    var shapetype =  $(ui.element).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("input[name=attr_shapetype]").val();
                    var radiustext =  $(ui.element).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("input[name=attr_radius]").val();
                    Site.imgShapeShow($(ui.element).find("#module"+mcid).children().eq(0),shapetype,ui.size.width,ui.size.height,radiustext);
                }
                var x = event.pageX+5;
                var y = event.pageY+8;
                var moduleWidth,moduleHeight;
                //添加模块尺寸展示
                moduleWidth = $(ui.element).width();
                moduleHeight = $(ui.element).height();
                var html ='<div class="module_size" style="position: absolute;top:'+y+'px;left:'+x+'px;"><p>宽度：'+moduleWidth+'px</p><p>高度：'+moduleHeight+'px</p></div>';
                $("#bodyDesign").find(".module_size").remove();
                $("#bodyDesign").append(html);
            },
            stop:function(event,ui){
                $("#bodyDesign").find(".module_size").remove();
                var moduleId = $(ui.element).find('.configuration').attr('_moduleid');
                var mcid = $(ui.element).find('.configuration').attr('_mcid');
                // 图片
                if(moduleId == 351){
                    var formBox = $(ui.element).find("#jvForm"+f);
                    formBox.find("#attrImageHeight").val(ui.size.height);
                    formBox.find("#attrImageWidht").val(ui.size.width);
                    $.ajax({
                        url: '/moduleUpdate.jspx',
                        type: 'post',
                        data: formBox.serialize(),
                        success: function(data){
                            $('body').hideLoading();
                        },
                        error: function(request,msg){
                            $('body').hideLoading();
                            $.alert(msg);
                        }
                    });
                }
                // 文字
                if(moduleId == 327){
                    var formBox = $(ui.element).find("#jvForm"+f);
                    formBox.find("#imageWidth").val(ui.size.width);
                    formBox.find("#imageHeight").val(ui.size.height);
                    var aTag = $(ui.element).find('.ztextbox');
                    function native2ascii(character) {
                        var ascii = new Array();
                        for (var i = 0; i < character.length; i++) {
                            var code = Number(character[i].charCodeAt(0));
                            var charAscii = code.toString(16);
                            charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
                            ascii.push("\\u" + charAscii);
                        }
                        return ascii.join("");
                    }

                    formBox.find('#attrJsoncode').val(native2ascii(aTag.html()));
                    $.ajax({
                        url: '/moduleUpdate.jspx',
                        type: 'post',
                        data: formBox.serialize(),
                        success: function(data){
                            $('body').hideLoading();
                        },
                        error: function(request,msg){
                            $('body').hideLoading();
                            $.alert(msg);
                        }
                    });
                }
                //按钮
                if(moduleId == 325){
                    var formBox = $(ui.element).find("#jvForm"+f);
                    formBox.find("#buttonTextWidth").val(ui.size.width);
                    formBox.find("#buttonTextHeight").val(ui.size.height);
                    $.ajax({
                        url: '/moduleUpdate.jspx',
                        type: 'post',
                        data: formBox.serialize(),
                        success: function(data){
                            $('body').hideLoading();

                        },
                        error: function(request,msg){
                            $('body').hideLoading();
                            $.alert(msg);
                        }
                    });
                }
                //商城分类
                if(moduleId == 423){
                    var formBox = $(ui.element).find("#jvForm"+f);
                    formBox.find("input[name='attr_mallTypeWidth']").val(ui.size.width);
                    formBox.find("input[name='attr_mallTypeHeight']").val(ui.size.height);
                    //拖动后设置二级右侧框的高度；
                    formBox.siblings(".formMiddle").find(".second_ul").css({
                        "min-height":ui.size.height-52
                    });
                    //var minHeight = $(ui.element).find('.formMiddle').height()+50;
                    $(ui.element).css({
                        "min-width":240,
                        "min-height":200
                    });
                    $.ajax({
                        url: '/moduleUpdate.jspx',
                        type: 'post',
                        data: formBox.serialize(),
                        success: function(data){
                            $('body').hideLoading();
                        },
                        error: function(request,msg){
                            $('body').hideLoading();
                            $.alert(msg);
                        }
                    });
                }
            }
        });
    }

    b.draggable({
        containment:"#pageMain",
        cursor: "move",
        start: function(event,ui){
            MUTIL.disableEditLayer();
           // MUTIL.manageToolReClose();
        },
        stop: function(event,ui){
            MUTIL.enableEditLayer();
           // MUTIL.manageToolReOpen();
        }
    });
    if(!JRF.isNull(dock) && dock==1){
        b.removeAttr('_dock');
    }
    // 浮动时清除锁定状态 20170308 zxr
    if(c.hasClass('absForm') || !c.hasClass('column')){
        if(b.attr('_lock') == 1){
            b.removeAttr('_lock');
        }
    }


    MUTIL.addSelfColumnModuleCss(c);
    MUTIL.pageChange();

    b.find('.floating-module').hide();//隐藏浮动模块
    b.find('.berth-module').show()//显示停靠
    b.find('.lock-module').show()//显示锁定

    //模块宽度问题  添加模块宽度   20150915马小山
    //$('#module'+f).css('width','100%');

    MUTIL.disableEditLayer();
    MUTIL.enableEditLayer();
}

/**
 * 20180109 mxs 图片形状初始化
 * @param c
 * @param shapetype
 * @param imgWidth
 * @param imgHeight
 * @param radiustext
 */
Site.imgShapeShow = function(c,shapetype,imgWidth,imgHeight,radiustext){

    if(shapetype==""){return;}
        /*c.find("img").css({
        "position":"absolute",
        "top":0,
        "right":0,
        "left":0,
        "bottom":0,
        "margin":"auto"
    });*/
    imgWidth = parseInt(imgWidth);
    imgHeight = parseInt(imgHeight);
    c.find(".formMiddle").css({
        "height":"100%",
        "width":"100%"
    });
    if(shapetype==0){
        //圆形
        if(imgWidth>=imgHeight){
            c.css({
                "border-radius": "50%",
                "overflow":"hidden",
                "width":imgHeight,
                "height":imgHeight
            });
        }else{
            c.css({
                "border-radius": "50%",
                "overflow":"hidden",
                "height":imgWidth,
                "width":imgWidth
            });

        }
        c.find("img").css("height","100%");
        c.find("img").css("width","100%");
        c.find(".formMiddle").css({
            "height":imgHeight,
            "width":imgWidth
        });
    }else if(shapetype==1){
        //正方形
        c.css({
            "border-radius":0,
            "overflow":"hidden"
        });
        if(imgWidth>imgHeight){
            c.css("width",imgHeight);
            c.css("height",imgHeight);
        }else if(imgWidth<imgHeight){
            c.css("height",imgWidth);
            c.css("width",imgWidth);
        }
        c.find("img").css("height","100%");
        c.find("img").css("width","100%");
        c.find(".formMiddle").css({
            "height":imgHeight,
            "width":imgWidth
        });
    }else if(shapetype==2){
        //长方形
        c.css({
            "border-radius":0,
            "overflow":"hidden",
            "width":"100%"
        });

        if(imgWidth<=imgHeight){
            c.css("height",imgWidth/2);

        }else if((imgWidth-imgHeight)/imgWidth < 0.1){
            c.css("height",imgWidth/2);

        }else{
            c.css("height",'100%');
        }
        c.find("img").css("height","auto");
        c.find("img").css("width","100%");
    }else if(shapetype==3){
        c.css({
            "width":"100%",
            "height":"100%",
            "overflow":"hidden",
           "border-radius":radiustext +"px"
        });

    }


}
/**
 * 模块工具条点击浮动事件  添加z-index设置
 *
 * （注：由于Site.floatOut 方法在编辑，展示等内容中会调用 无法明确判断在点击工具条时设置模块z-index所有添加改方法）
 *
 * 20171201 mxs
 */
Site.toolFloatOut = function(t){
    var f = null;
    if(typeof t == "number"){
        f =  t;
    }else{
        f = MUTIL.getMcId(t);//f:mcId
    }
	//浮动删除外边距和内边距样式
    Site.removeModuleStyleCssList(f, [
        {cls:'', key:'margin-right'},
        {cls:'', key:'margin-left'},
        {cls:'', key:'margin-top'},
        {cls:'', key:'margin-bottom'}
    ]);
    Site.removeModuleStyleCssList(f, [
        {cls:'', key:'padding-right'},
        {cls:'', key:'padding-left'},
        {cls:'', key:'padding-top'},
        {cls:'', key:'padding-bottom'}
    ]);
    Site.refreshModuleHeight(f);

    Site.floatOut(t);


    Site.setNewModuleZIndex(f);
}
/* *功能：浮动模块 */

Site.floatOut = function(t){
	var f = null;
	if(typeof t == "number"){
		f =  t;
	}else{
		f = MUTIL.getMcId(t);//f:mcId
	}
	var b = $('#module'+f).parents('.box');//当前被浮动模块的box
	if($(b).attr('style')!=null){
		$(b).attr('style',$(b).attr('style').replace(/z-index: ?[0-9]+ ?;/g, ""));
	}
	var dock = b.attr('_dock');
	var lock = b.attr('_lock');
    //给模块所在的布局上打上标记，记录模块所在位置   _floatModule
	var statuts = MUTIL.addIdToLayout(b,f);
	var c = b.parent(); //模块所在层
	var w = $('#module' + f).width(), //模块的当前宽度，1、模块无宽度时为模块所在布局宽度， 2、自定义模块宽度
	left = b.offset().left, //获取当前box相对应页面的left
	top = b.offset().top;//获取当前box相对应页面的top



	$('#module' + f).removeAttr("style")
	// 这是有问题的  注释后 浮动起来的元素就没有了宽度
	// 20180614  mxs 经过讨论注释掉  浮动模块无宽度 默认元素撑开
    //20180912  发现问题 不可删除 重新解开
    Site.setModuleStyleCssList(f, [{cls:'', key:'width', value:w + 'px '}]);

    var _moduleId = $('#module' + f).parents('.box').find('.configuration').attr('_moduleid');

    if(typeof t == "number" || _moduleId == 351 || _moduleId == 325 || _moduleId == 327 || _moduleId == 423){
    	var resizeYS = b.filter(function(index,obj){
			var moduleId = $(obj).find('.configuration').attr('_moduleid')
			var mcid = $(obj).find('.configuration').attr('_mcid')
			var fun = function(){
				if(moduleId == 325 || moduleId == 327 || moduleId == 351 || moduleId == 423 ){
						// 设置内部元素 100%
						var YS = $(obj).find('.moduleView').children();
						// 图片
						if(moduleId == 351){
							// 设置父级宽高
						    var w = $(obj).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("#attrImageWidht").val(),
							h = $(obj).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("#attrImageHeight").val();
							$(obj).width(w).height(h);
							$(obj).find('.moduleView').addClass("threeCss");
							YS.width("100%").height("100%");
                            YS.children().eq(0).width("100%").height("100%");
							YS.find('.formMiddle').width("100%").height("100%");
							YS.find('.formMiddle').find('a').width("100%").height("100%");
							YS.find('.formMiddle').find('img').width("100%").height("100%")	;

                            var shapetype = $(obj).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("input[name=attr_shapetype]").val();
                            var radiustext = $(obj).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("input[name=attr_radius]").val();
                            Site.imgShapeShow(YS.children().eq(0),shapetype,w,h,radiustext);


						}

						// 文字
						if(moduleId == 327){
							var w = $(obj).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("#imageWidth").val(),
								h = $(obj).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("#imageHeight").val();
								$(obj).find('.moduleView').addClass("threeCss")
								$(obj).width(w).height(h);
								YS.width("100%").height("100%");
								YS.find('.formMiddle').width("100%").height("100%");
								YS.find('.formMiddle').find('.ztextbox').width("100%").height("100%");
								// console.log(YS.css("background-color"))
								// 保存时判断颜色为空时 隐藏  其他带颜色 暂时只有这种方法
								// console.log(YS.css("background-color"))
								// if(YS.css("background-color") == "rgba(0, 0, 0, 0)" || YS.css("background-color") == "rgb(255, 255, 255)"){
								// 	// 隐藏 模块颜色
								// 	Site.hideModuleBg(mcid)
								// }
						}
						// 按钮
						if(moduleId == 325){
							$(obj).find('.moduleView').addClass("threeCss")
							var JvForm = $(obj).find('.moduleView').children().find("#jvForm"+f),
								w = JvForm.find("#buttonTextWidth").val(),
								h = JvForm.find("#buttonTextHeight").val(),
								_thisBtnCss = YS.find(".buttonStyle1"+mcid).find('a');
								if(_thisBtnCss.css("box-shadow") !== "none"){
									$(obj).width(w).height(h).css({"padding":"0 0 15px"});
								}else{
									$(obj).width(w).height(h);
								}
								$(obj).width(w).height(h);
								YS.width("100%").height("100%");
								YS.find(".buttonStyle1"+mcid).width("100%").height("100%");
								_thisBtnCss.width("100%").height("100%");
                                //20171107 mxs 添加   浮动后a 添加line-height 居中
                                YS.find('a').css({"line-height":h+"px"});
						}
						
						//商城分类
						if(moduleId == 423){
							//$(obj).find('.moduleView').children().find('.formMiddle').find("#mallTypeForm").find("input[name='mallTypeWidth']").val();
							var w = $(obj).find("input[name='attr_mallTypeWidth']").val();
							//$(obj).find('.moduleView').children().find('.formMiddle').find("#mallTypeForm").find("input[name='mallTypeHeight']").val();
							var h = $(obj).find("input[name='attr_mallTypeHeight']").val();
							$(obj).find('.moduleView').addClass("threeCss");
							$(obj).width(w).height(h);
							YS.width("100%").height("100%");
							YS.find('.formMiddle').width("100%").height("100%");
							YS.find('.formMiddle').find('.ztextbox').width("100%").height("100%");
						}
					return $(obj).parent();
				}
			}
			return fun();
		});

    	//拉伸事件
		resizeYS.resizable({
			handles: "all",
			autoHide: true,
			classes: {
			"ui-resizable": "jrf-highlight"
			},
			resize:function(event,ui){
					var moduleId = $(ui.element).find('.configuration').attr('_moduleid');
					var mcid = $(ui.element).find('.configuration').attr('_mcid');
					//按钮
					if(moduleId == 325){
						$(ui.element).find('.moduleView a').css({"line-height":ui.size.height+"px"});
					}else if(moduleId == 351){
                        var shapetype =  $(ui.element).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("input[name=attr_shapetype]").val();
                        var radiustext =  $(ui.element).find('.moduleView').children().find('.formMiddle').find("#jvForm"+f).find("input[name=attr_radius]").val();
                        Site.imgShapeShow($(ui.element).find("#module"+mcid).children().eq(0),shapetype,ui.size.width,ui.size.height,radiustext);
                    }
                    var x = event.pageX+5;
                    var y = event.pageY+8;
                    var moduleWidth,moduleHeight;
                    //添加模块尺寸展示
                    moduleWidth = $(ui.element).width();
                    moduleHeight = $(ui.element).height();
                    var html ='<div class="module_size" style="position: absolute;top:'+y+'px;left:'+x+'px;"><p>宽度：'+moduleWidth+'px</p><p>高度：'+moduleHeight+'px</p></div>';
                    $("#bodyDesign").find(".module_size").remove();
                    $("#bodyDesign").append(html);
			},
			stop:function(event,ui){
                    $("#bodyDesign").find(".module_size").remove();
					var moduleId = $(ui.element).find('.configuration').attr('_moduleid');
					var mcid = $(ui.element).find('.configuration').attr('_mcid');
					// 图片
					if(moduleId == 351){
						var formBox = $(ui.element).find("#jvForm"+f);
						formBox.find("#attrImageHeight").val(ui.size.height);
						formBox.find("#attrImageWidht").val(ui.size.width);
						$.ajax({
							url: '/moduleUpdate.jspx',
							type: 'post',
							data: formBox.serialize(),
							success: function(data){
								$('body').hideLoading();
							},
							error: function(request,msg){
								$('body').hideLoading();
								$.alert(msg);
							}
						});
					}
					// 文字
					if(moduleId == 327){
						var formBox = $(ui.element).find("#jvForm"+f);
						formBox.find("#imageWidth").val(ui.size.width);
						formBox.find("#imageHeight").val(ui.size.height);
						var aTag = $(ui.element).find('.ztextbox');
						function native2ascii(character) {
							var ascii = new Array();
							for (var i = 0; i < character.length; i++) {
							var code = Number(character[i].charCodeAt(0));
							var charAscii = code.toString(16);
							charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
							ascii.push("\\u" + charAscii);
							}
							return ascii.join("");
						}

						formBox.find('#attrJsoncode').val(native2ascii(aTag.html()));
						$.ajax({
							url: '/moduleUpdate.jspx',
							type: 'post',
							data: formBox.serialize(),
							success: function(data){
								$('body').hideLoading();
							},
							error: function(request,msg){
								$('body').hideLoading();
								$.alert(msg);
							}
						});
					}
					//按钮
					if(moduleId == 325){
						var formBox = $(ui.element).find("#jvForm"+f);
						formBox.find("#buttonTextWidth").val(ui.size.width);
						formBox.find("#buttonTextHeight").val(ui.size.height);
						$.ajax({
							url: '/moduleUpdate.jspx',
							type: 'post',
							data: formBox.serialize(),
							success: function(data){
								$('body').hideLoading();

							},
							error: function(request,msg){
								$('body').hideLoading();
								$.alert(msg);
							}
						});
					}
					//商城分类
					if(moduleId == 423){
						var formBox = $(ui.element).find("#jvForm"+f);
						formBox.find("input[name='attr_mallTypeWidth']").val(ui.size.width);
						formBox.find("input[name='attr_mallTypeHeight']").val(ui.size.height);
						//拖动后设置二级右侧框的高度；
						formBox.siblings(".formMiddle").find(".second_ul").css({
	                        "min-height":ui.size.height-52
	                    });
                        //var minHeight = $(ui.element).find('.formMiddle').height()+50;
                        $(ui.element).css({
                            "min-width":240,
                            "min-height":200
                        });
						$.ajax({
							url: '/moduleUpdate.jspx',
							type: 'post',
							data: formBox.serialize(),
							success: function(data){
								$('body').hideLoading();
							},
							error: function(request,msg){
								$('body').hideLoading();
								$.alert(msg);
							}
						});
					}
			}
		});
	}

    b.draggable("destroy");
	if(!JRF.isNull(dock) && dock==1){
		b.removeAttr('_dock');
	}
	// 浮动时清除锁定状态 20170308 zxr
	if(c.hasClass('absForm') || !c.hasClass('column')){
		if(b.attr('_lock') == 1){
			b.removeAttr('_lock');
		}
	}

    var top = b.css("top");
    var left = b.css("left");

    b.css({
        'left':left,
        'top': top,
        'position':'absolute'
    });
    $('#module'+f).css("position","");
    b.attr("_float",1);
	
	MUTIL.addSelfColumnModuleCss(c);
	MUTIL.pageChange();

    b.find('.floating-module').hide();//隐藏浮动模块
    b.find('.berth-module').show()//显示停靠
    b.find('.lock-module').show()//显示锁定

	MUTIL.disableEditLayer();
	MUTIL.enableEditLayer();
}

/* * 功能：停靠模块*/
Site.dock = function(t){
	var f = MUTIL.getMcId(t);
    if($("#module"+f).find(".defult_ztips").length > 0){
        return;
    }

	var b = $('#module'+f).parents('.box');
    var width =  b.css("width");
    var height = b.css("height");
    Site.removeModuleZIndex(f);
	//var moduleId = b.find("input[name=moduleId]").val()


	var hasDock=false;//是否已停靠。否：停靠在所有布局第一个

    //新浮动模块使用， 老的浮动模块使用默认停靠
    if(b.parents(".absForm").length ==0){
        var fms = $('.demo .column').filter(function(){

            return !JRF.isNull($(this).attr('_floatmodule'));
        });

        fms.each(function(i,o){
            var fm = $(o).attr('_floatmodule');
            var s = $(o).attr('class').split(" ")[0];
            var ids = fm.split(',');

            if(MUTIL.checkIdInArray(ids,f)==1){
                b.removeAttr('style');
                if(b.attr('_side') == 1){
                    b.removeAttr('_side');
                    $('#sideBtn'+f).remove();
                    b.unbind('mouseenter',MUTIL.bindSideInRgt).unbind('mouseleave',MUTIL.bindSideOutRgt).unbind('mouseenter',MUTIL.bindSideInLft).unbind('mouseleave',MUTIL.bindSideOutLft);;
                }else if(b.attr('_lock') == 1){
                    b.removeAttr('_lock');
                }
                if(b.hasClass(s)){
                    b.removeClass(s);
                }

                $('#module'+f).removeAttr('style');
                $('#module'+f).find("img").removeAttr("style")
                //$('#module'+f).css("width","100%")
                b.appendTo($(o));
                MUTIL.removeIdInArray(f,o);
                MUTIL.removeColumnModuleCss(b);

                b.find('.floating-module').show();//显示浮动模块
                b.find('.lock-module').show();//显示锁定模块 按钮20160509mxs
                b.find('.berth-module').hide();//隐藏停靠模块


                b.draggable('destroy');
                b.resizable('destroy');
                MUTIL.sortable();
                MUTIL.pageChange();
                hasDock=true;
            }
        });

    }
	function _dock(f){
		var c = b.parent();		
		b.attr('_dock',1);
        b.attr("_float",2);
		MUTIL.removeIdInArray(f,c);

		$('#module'+f).find("img").removeAttr("style")
		//$('#module'+f).css("width","100%")

		// 修改图片停靠 +20170331


        //20171107  mxs 修改图片停靠功能
        var _moduleId = $('#module' + f).parents('.box').find('.configuration').attr('_moduleid');
        // 按钮
        if(_moduleId == 325){
            // 设置内部元素 100%
            var box = $('#module' + f).parents('.box');
            var YS =  $('#module' + f).parents('.box').find('.moduleView').children();
            $('#module' + f).parents('.box').find('.moduleView').removeClass("threeCss")


            YS.css({"width":width,"height":height});
            //YS.find(".buttonStyle1"+f).css({"width":"","height":""});
            //20171107 mxs 添加   浮动后a 添加line-height 居中
            //YS.find('a').css({"width":"","height":"","line-height":""});
        }else if(_moduleId == 351){
            $('#module' + f).find("img").css({
                "width":width,
                "height":height
            });
        }
        //20190121 mxs
        //Site.removeModuleStyleCssList(f, [{cls:'', key:'width'}]);

	};
    //老的浮动模块使用默认停靠
	if(!hasDock){
		MUTIL.dockDefault(f);
		hasDock=true;
	}
	if(hasDock){
		_dock(f);
	}
	MUTIL.disableEditLayer();
	MUTIL.enableEditLayer();


    //获取模块的  外边距   内边距 值 进行设置  20181210 mxs
    $.ajax({
        url: '/jrfadmin/jrfcms/view_design/getModuleSide.do',
        type: 'post',
        data: {"mcId":f},
        success: function(data){
            if(data.outside == "2"){
                Site.setModuleStyleCssList(f, [
                    {cls:'', key:'margin-right', value:data.outsideRightText + 'px'},
                    {cls:'', key:'margin-left', value:data.outsideLeftText + 'px'},
                    {cls:'', key:'margin-top', value:data.outsideTopText + 'px'},
                    {cls:'', key:'margin-bottom', value:data.outsideBottomText + 'px'},
                ]);
            }
            if(data.inside == "2"){
                Site.setModuleStyleCssList(f, [
                    {cls:'', key:'padding-right', value:data.insideRightText + 'px'},
                    {cls:'', key:'padding-left', value:data.insideLeftText + 'px'},
                    {cls:'', key:'padding-top', value:data.insideTopText + 'px'},
                    {cls:'', key:'padding-bottom', value:data.insideBottomText + 'px'},
                ]);
            }
        },
        error: function(request,msg){

        }
    });
}

/* *功能：锁定模块*/
Site.lock = function (t) {
    var f = MUTIL.getMcId(t);
    var b = $('#module' + f).parents('.box');
    var left = b.offset().left, top = b.offset().top - $(window).scrollTop();
    var c = b.parent();
    var side = b.attr('_side');
    b.attr('_lock', 1);


    if (!c.hasClass('absForm') || c.hasClass('column')) {
        Site.floatOutOld(t);
    }

    b.css({'position': 'fixed', 'left': left + 'px', 'top': top + 'px'});


    if (!JRF.isNull(side) && side == 1) {
        b.find('.berth-module').show()//显示停靠
        b.find('.floating-module').hide();//隐藏浮动
        b.find('.lock-module').hide()//隐藏锁定


    } else {
        b.find('.lock-module').hide()//隐藏锁定
        b.find('.floating-module').hide();//显示浮动
        b.find('.berth-module').show()//显示停靠

    }


    MUTIL.pageChange();

    MUTIL.disableEditLayer();
    MUTIL.enableEditLayer();
}

/* *
 *   功能：点击侧停按钮时  侧停模块
 *   20181227 mxs 添加注释：侧停功能已删除   代码不在维护
 */
Site.sideMudule = function (t) {
    var f = MUTIL.getMcId(t);
    var b = $('#module' + f).parents('.box');
    var dock = b.attr('_dock');
    var c = b.parent();
    // 给模块所在的布局上打上标记，记录模块所在位置
    var status = MUTIL.addIdToLayout(b, f);

    if (status == -1) {
        return;
    }

    MUTIL.setSidePostion(b, f);
    MUTIL.addSelfColumnModuleCss(c);
    b.attr('_side', 1);

    b.draggable({
        containment: "#pageMain",
        cursor: "move",
        start: function (event, ui) {
            MUTIL.disableEditLayer();
            //MUTIL.manageToolReClose();
        },
        stop: function (event, ui) {
            MUTIL.enableEditLayer();
            //MUTIL.manageToolReOpen();
        }
    });

    b.resizable('destroy');

    b.find('.berth-module').show();//显示停靠
    b.find('.oprateMLock').show()//隐藏锁定
    b.find('.oprateMSiteLock').hide();//隐藏侧停
    b.find('.floating-module').hide();//隐藏浮动

    if (!JRF.isNull(dock) && dock == 1) {
        b.removeAttr('_dock');
    }

    MUTIL.disableEditLayer();
    MUTIL.enableEditLayer();
}

/*功能：异步加载js*/
Site.include = function (jssrc) {
    // 先获取当前a.js的src。a.js中调用include,直接获取最后1个script标签就是a.js的引用。
    var scripts = document.getElementsByTagName("script");
    var lastScript = $('#manageMinSupport');
    var src = lastScript.attr('src');
    if (src.indexOf("http://") != 0 && src.indexOf("/") != 0) {
        // a.js使用相对路径,先替换成绝对路径
        var url = location.href;
        var index = url.indexOf("?");
        if (index != -1) {
            url = url.substring(0, index - 1);
        }
        src = getPath(src, url);
    }
    var jssrcs = jssrc.split("|");	// 可以include多个js，用|隔开
    for (var i = 0; i < jssrcs.length; i++) {
        // 使用juqery的同步ajax加载js.
        // 使用document.write 动态添加的js会在当前js的后面，可能会有js引用问题
        // 动态创建script脚本，是非阻塞下载，也会出现引用问题
        $.ajax({type: 'GET', url: getPath(jssrcs[i], src), async: false, dataType: 'script'});
    }
}


// 全站搜索
Site.searchInSite = function(Id,argThis) {
    var searchParam;
    if(argThis){
        searchParam=$(argThis).find('span').text();
    }else{
        //searchParam= $("#module" + Id + " input.g_itext").val();
        searchParam = $("#searchIndex" + Id).val();
    }
    var q=$.trim(searchParam);
    if(q&&q!='请输入搜索内容'){
        var url;
        if(staticPageStatus == "1") {
            url =   "/search/search.html?q=";
        }else{
            url =  "/search.jspx?q=";
        }
        window.open(url +encodeURIComponent(q));
        //JRF.top.location.href = url +encodeURIComponent(q);
    }
};
/*功能：根据相对路径获取绝对路径*/
function getPath(relativePath, absolutePath) {
    if (relativePath.indexOf('/') != -1) {
        return relativePath;
    }
    var reg = new RegExp("\\.\\./", "g");
    var uplayCount = 0;		// 相对路径中返回上层的次数。
    var m = relativePath.match(reg);
    if (m) uplayCount = m.length;

    var lastIndex = absolutePath.length - 1;
    for (var i = 0; i <= uplayCount; i++) {
        lastIndex = absolutePath.lastIndexOf("/", lastIndex);
    }
    return absolutePath.substr(0, lastIndex + 1) + relativePath.replace(reg, "");
}

var logon = $('#manageMinSupport').attr('data');
if (logon == 1) {
    //拖拽模式
    Site.tpl_solution = $('#manageMinSupport').attr('siteTplSolution');
    Site.jssrc = "manage.min.util.js|dragsortable.js|manage.min.js|Site.min.js|jquery.htmlClean.js|htmlFormat.js|/res/common/js/pony.js|/res/jrfcms/js/admin_core.js";
} else {
    //非拖拽模式
    var language = $('#manageMinSupport').attr('language');
    Site.language = language;
    Site.jssrc = "manage.min.util.js|Site.init.js|/res/common/js/pony.js";
}

$(document).ready(function () {
    Site.include(Site.jssrc);
});