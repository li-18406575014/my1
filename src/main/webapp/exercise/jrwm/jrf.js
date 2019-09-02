var SiteLanguage;
if (typeof JRF == "undefined") {
	JRF = {};
}
JRF.win = window;

JRF.top = window.top;
// 必填项提示信息
function requiredFieldsTip(inputype){
    $(inputype).addClass("inputerror");
    $(inputype).mouseover(function(){
        $(this).removeClass("inputerror");
        $(this).unbind("mouseover");
    });
}
//链接地址
JRF.validateUrl = function(value){
    return    /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);

}
// 邮箱格式
JRF.validatemail = function(value){
    return    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );

}
// 数字
JRF.validatedigital = function(value){
    return  /^\d+$/.test(value);
}
// 只能输入整数
JRF.validatenumber = function(value){
    return  /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
}
// 请输入合法的数字
JRF.Sizenumber = function(value){
    return  /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);
}
//voteTitle   标题格式不正确
JRF.validateformat = function(value){
    return  /^[0-9a-zA-Z\u4e00-\u9fa5]+$/.test( value );
}
JRF.validateUserName = function(value){
    return /^[0-9a-zA-Z\u4e00-\u9fa5\.\-@_]+$/.test(value)
}
/**
 * mxs 页面被其他域名ifrmae引用 获取的top不正确   修改为一下代码 获取同域名最顶级窗口
 */
JRF.getTopWindow = function (objWid){
	try {
		//如果域名相同则继续 查询上级窗口
		if(objWid.location.host == objWid.parent.location.host){
			return JRF.getTopWindow(objWid.parent);
		}else{
			return objWid;
		}
	} catch (e) {
		//域名不同会报错   直接返回当前窗口
		return objWid;
	}
	
}

try {
	//如果  window.top 与当前页面域名不同 获取host 时会抛出异常
	var topHost  =window.top.location.host;
} catch (e) {
	//获取最顶级  与当前页面域名相同的窗口
	JRF.top = JRF.getTopWindow(window);
}



JRF.dom = $(JRF.top.document);


var mytimerArr = new Array();
// 在IE9 10 11下 使用了==去做判断，是不允许的 会出现SCRIPT5011:不能执行已释放Script的代码
JRF.isNull = function(a) {
	return (typeof a === "undefined") || (a === null) || (a === '');
};
JRF.isDate = function(a) {
	if (a.constructor == Date) {
		return true;
	} else {
		return false;
	}
};
JRF.isNumber = function(a) {
	if (/[^\d]/.test(a)) {
		return false;
	} else {
		return true;
	}
};
JRF.isFloat = function(a) {
	return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a);
};
JRF.isInteger = function(a) {
	return /^-?\d+$/.test(a);
};
JRF.isLowerCase = function(a) {
    return /^[a-z]+$/.test(a)
};
JRF.isUpperCase = function(a) {
    return /^[A-Z]+$/.test(a)
};
JRF.toLowerCaseFirstOne = function(a) {
    if (typeof a === "undefined" || JRF.isLowerCase(a.charAt(0))) {
        return a
    } else {
        var c = a.substring(0, 1).toLowerCase();
        var b = a.substring(1, a.length);
        return c + b
    }
};
JRF.toUpperCaseFirstOne = function(a) {
    if (typeof a === "undefined" || JRF.isUpperCase(a.charAt(0))) {
        return a
    } else {
        var c = a.substring(0, 1).toUpperCase();
        var b = a.substring(1, a.length);
        return c + b
    }
};
JRF.isDigit = function(a) {
    if (a < "0" || a > "9") {
        return false
    }
    return true
};
JRF.isLetter = function(a) {
    if ((a < "a" || a > "z") && (a < "A" || a > "Z")) {
        return false
    }
    return true
};
JRF.isChinese = function(a) {
    if (a < "一" || a > "龥") {
        return false
    }
    return true
};
JRF.isIp = function(c) {
    if (typeof c != "string" || $.trim(c) == "") {
        return false
    }
    var b = c.split(".");
    if (b.length != 4) {
        return false
    }
    var a = true;
    $.each(b,
    function(d, f) {
        if (!JRF.isNumber(f) || parseInt(f) < 0 || parseInt(f) > 255) {
            a = false;
            return true
        }
    });
    return a
};
JRF.isDomain = function(a) {
    if (/^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$/.test(a)) {
        if (a.indexOf("--") >= 0) {
            return false
        }
        return true
    } else {
        return false
    }
};
JRF.isWord = function(b) {
	var a = /^[a-zA-Z0-9_]+$/;
	return a.test(b);
};
JRF.isEmail = function(a) {
	var b = /^[a-zA-Z0-9_\-\.\+]+@[a-zA-Z0-9][a-zA-Z0-9_\-]*\.[a-zA-Z0-9\-][a-zA-Z0-9_\-\.]*[a-zA-Z0-9 ]$/;
	return b.test(a);
};
JRF.isEmailDomain = function(a) {
	var b = /^[a-zA-Z0-9][a-zA-Z0-9_\-]*\.[a-zA-Z0-9\-][a-zA-Z0-9_\-\.]*[a-zA-Z0-9]$/;
	return b.test(a);
};
JRF.isMobile = function(a) {
	var b = /^1\d{10}$/;
	return b.test(a);
};
JRF.isPhone = function(a) {
	var c = /^([^\d])+([^\d])*([^\d])$/;
	var b = /^([\d\+\s\(\)-])+([\d\+\s\(\)-])*([\d\+\s\(\)-])$/;
	if (c.test(a)) {
		return false;
	}
	return b.test(a);
};

JRF.isPhoneKey = function(a) {
    var phone = $(a).val();
    phone = phone.replace(/[^\d-]/g,"");
    $(a).val(phone);
};
JRF.isUrl = function(d, c) {
	if (typeof c == "undefined") {
		c = true;
	}
	if (c && d.charAt(0) == "/") {
		return true;
	}
	var b = /^(\w+:).+/;
	var a = b.test(d);
	return a;
};
JRF.fixUrl = function(a, b) {
	if (JRF.isUrl(a, b)) {
		return a;
	}
	return "http://" + a;
};
JRF.checkBit = function(i, b) {
    var f = true;
    if (i > 2147483647 || i < 0 || b > 2147483647 || b < 0) {
        f = false
    }
    if (f) {
        return (i & b) == b
    }
    var g = i.toString(2);
    var d = b.toString(2);
    if (g.length > 62 || d.length > 62) {
    	$.alert("Does not support more than 62 bit. flagBinary.length=" + g.length + ",bitFlagBinary.length" + d.length + ".");
        return false
    }
    var h = flagLow = bitFlagHight = bitFlagLow = 0;
    if (g.length > 31) {
        var c = g.slice(0, g.length - 31);
        var a = g.slice(g.length - 31);
        h = parseInt(c, "2");
        flagLow = parseInt(a, "2")
    } else {
        flagLow = parseInt(g.slice(0, g.length), "2")
    }
    if (d.length > 31) {
        var c = d.slice(0, d.length - 31);
        var a = d.slice(d.length - 31);
        bitFlagHight = parseInt(c, "2");
        bitFlagLow = parseInt(a, "2")
    } else {
        bitFlagLow = parseInt(d.slice(0, d.length), "2")
    }
    var j = (flagLow & bitFlagLow) == bitFlagLow;
    if (j) {
        j = (h & bitFlagHight) == bitFlagHight
    }
    return j
};
JRF.isEnterKey = function(a) {
	if ($.browser.msie) {
		if (event.keyCode == 13) {
			return true;
		} else {
			return false;
		}
	} else {
		if (a.which == 13) {
			return true;
		} else {
			return false;
		}
	}
};
JRF.fullWidthToHalfWidth = function(obj){
	var str=obj.value;
	var result="";
	for (var i = 0; i < str.length; i++){
		if (str.charCodeAt(i)==12288){
			result+= String.fromCharCode(str.charCodeAt(i)-12256);
			continue;
		}
		if (str.charCodeAt(i)>65280 && str.charCodeAt(i)<65375)
			result+= String.fromCharCode(str.charCodeAt(i)-65248);
		else result+= String.fromCharCode(str.charCodeAt(i));
	}
	obj.value=result;
}
JRF.fullWidthToHalfWidthAndNumber = function(obj){
	var str=obj.value;
	var result="";
	for (var i = 0; i < str.length; i++){
		if (str.charCodeAt(i)==12288){
			result+= String.fromCharCode(str.charCodeAt(i)-12256);
			continue;
		}
		if (str.charCodeAt(i)>65280 && str.charCodeAt(i)<65375)
			result+= String.fromCharCode(str.charCodeAt(i)-65248);
		else result+= String.fromCharCode(str.charCodeAt(i));
	}
	obj.value=result;
	obj.value=obj.value.replace(/\D/g,'');
}
JRF.isNumberKey = function(a) {
	//配合 keydown 或者 onkeydown IE8 及其更早版本不支持 which 属性。不支持的浏览器可使用 keyCode 属性。但是， keyCode 属性在 Firefox 浏览器的 onkeypress 事件中是无效的
	if ($.browser.msie) {
		if (((event.keyCode > 47) && (event.keyCode < 58)) || (event.keyCode == 8)||(event.keyCode>=96 && event.keyCode<=105)) {
			return true;
		} else {
			return false;
		}
	} else {
		if (((a.which > 47) && (a.which < 58)) || (a.which == 8)||(a.keyCode>=96 && a.keyCode<=105)) {
			return true;
		} else {
			return false;
		}
	}
};
JRF.isFloatKey = function(a) {
	if ($.browser.msie) {
		if (((event.keyCode > 47) && (event.keyCode < 58)) || (event.keyCode == 8) || (event.keyCode == 46)) {
			return true;
		} else {
			return false;
		}
	} else {
		if (((a.which > 47) && (a.which < 58)) || (a.which == 8) || (a.which == 46)) {
			return true;
		} else {
			return false;
		}
	}
};
JRF.flashChecker = function() {
	var hasFlash = 0;
	var flashVersion = 0;
	var isIE =
	/* @cc_on!@ */
	0;
	if (isIE) {
		try {
			var swf = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			if (swf) {
				hasFlash = 1;
				VSwf = swf.GetVariable("$version");
				flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0])
			}
		} catch(ex) {}
	} else {
		if (navigator.plugins && navigator.plugins.length > 0) {
			var swf = navigator.plugins["Shockwave Flash"];
			if (swf) {
				hasFlash = 1;
				var words = swf.description.split(" ");
				for (var i = 0; i < words.length; ++i) {
					if (isNaN(parseInt(words[i]))) {
						continue
					}
					flashVersion = parseInt(words[i])
				}
			}
		}
	}
	return {
		f: hasFlash,
		v: flashVersion
	}
};
/** 正整数判断*/
JRF.isPositiveInteger = function(obj,includeZero){
    var val = $(obj).val();
    val = val.replace(/[^\d]/g,"");
    if(val!="" && JRF.isNumber(val)){
        val = parseInt(val);
        if(val<=0){
            if(includeZero){
                $(obj).val(0);
            }else{
                $(obj).val("");
            }
        }else{
            $(obj).val(val);
        }
    }else{
        if(includeZero){
            $(obj).val(0);
        }else{
            $(obj).val("");
        }
    }
}


JRF.isIntegerZero = function(obj,includeZero){
    var val = $(obj).val();
    val = val.replace(/[^\d-]/g,"");
    if(val!="" && JRF.isNumber(val)){
        val = parseInt(val);
        $(obj).val(val);
    }else{
        $(obj).val(val);
    }

}

/** float数判断*/
JRF.isFloatValue = function(obj,includeZero){
    var val = $(obj).val();
    val = val.replace(/[^\d\.]/g,"");
    if(val!==""){
        var val1 = parseFloat(val);
        if(val1<0){
            if(includeZero){
                $(obj).val(0);
            }else{
                $(obj).val("");
            }
        }else{
            $(obj).val(val);
        }
    }else{
        if(includeZero){
            $(obj).val(0);
        }else{
            $(obj).val("");
        }
    }
}


/** 特殊字符处理*/
JRF.isSpecialCharacter = function(obj){
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;\",\\[\\]<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");
    if(obj && pattern.test(obj)){
        return true;
    }
    return false;
}

/** 清除特殊字符内容*/
JRF.cleanSpecialCharacter = function(s){
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;\",\\[\\]<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");
    if(s && JRF.isSpecialCharacter(s)){
        var special = s.replace(pattern, '');
        return special;
    }
    return "";
}

JRF.isIE6 = function() {
	if ($.browser.msie) {
		if ($.browser.version == "6.0") {
			return true
		}
	}
	return false
};
JRF.isIE7 = function() {
	if ($.browser.msie) {
		if ($.browser.version == "7.0") {
			return true
		}
	}
	return false
};
JRF.isIE8 = function() {
	if ($.browser.msie) {
		if ($.browser.version == "8.0") {
			return true
		}
	}
	return false
};
JRF.isIE9 = function() {
	if ($.browser.msie) {
		if ($.browser.version == "9.0") {
			return true
		}
	}
	return false
};
JRF.isIE = function() {
	return $.browser.msie ? true: false
};
JRF.isSafari = function() {
	return $.browser.safari ? true: false
};
JRF.isWebkit = function() {
	return $.browser.webkit ? true: false
};
JRF.isMozilla = function() {
	return $.browser.mozilla ? true: false
};
JRF.isOpera = function() {
	return $.browser.opera ? true: false
};
JRF.getCssInt = function(c, b) {
	if (c.css(b)) {
		var a = parseInt(c.css(b).replace("px", ""));
		if (isNaN(a)) {
			return 0
		}
		return a
	} else {
		return 0
	}
};
JRF.getCurrentStyle = function(c, b){
	var d=document.getElementById(c);
	if(d.currentStyle){
		return d.currentStyle[b];
	}else if(window.getComputedStyle){
		b = b.replace (/([A-Z])/g, "-$1").toLowerCase ();          
       	return document.defaultView.getComputedStyle (d,null)[b];
	}
	return null;
};
JRF.getEventX = function(a) {
	a = a || window.event;
	return a.pageX || a.clientX + document.body.scrollLeft
};
JRF.getEventY = function(a) {
	a = a || window.event;
	return a.pageY || a.clientY + document.body.scrollTop
};
JRF.inRect = function(a, b) {
	if (a.x > b.left && a.x < (b.left + b.width) && a.y > b.top && a.y < (b.top + b.height)) {
		return true
	}
	return false
};
JRF.addUrlParams = function(a, b) {
	if (JRF.isNull(b)) {
		return a
	}
	if (a.indexOf("?") < 0) {
		return a + "?" + b
	}
	return a + "&" + b
};
JRF.addArrElementsNoRepeat = function(a, c) {
	if (a.length > 0) {
		var b = 0;
		$.each(a,
		function(d, f) {
			if (a[d] == c) {
				b++
			}
		});
		if (b == 0) {
			a[a.length] = c
		}
	} else {
		a[a.length] = c
	}
	return a
};
JRF.getUrlRoot = function(a) {
	var b = a.indexOf("://");
	if (b < 0) {
		return a
	}
	b = a.indexOf("/", b + 3);
	if (b < 0) {
		return "/"
	}
	return a.substring(b)
};
JRF.getUrlParam = function(a) {
	if (typeof JRF._urlParams == "undefined" || !JRF._urlParams) {
		JRF._urlParams = new Object();
		var d = document.location.search.substr(1).split("&");
		for (var c = 0; c < d.length; ++c) {
			var h = d[c].split("=");
			var f = decodeURIComponent(h[0]);
			var g = decodeURIComponent(h[1]);
			JRF._urlParams[f] = g
		}
	}
	return JRF._urlParams[a]
};
JRF.encodeHtml = function(a) {
	return a && a.replace ? (a.replace(/&/g, "&amp;").replace(/ /g, "&nbsp;").replace(/\b&nbsp;+/g, "").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;").replace(/\n/g, "<br/>").replace(/\r/g, "")) : a
};
JRF.decodeHtml = function(a) {
	return a && a.replace ? (a.replace(/&nbsp;/gi, "").replace(/&lt;/gi, "<").replace(/&gt;/g, ">").replace(/&#92;/gi, "\\").replace(/&#39;/gi, "'").replace(/&quot;/gi, '"').replace(/\<br\/\>/gi, "\n").replace(/&amp;/gi, "&")) : a
};
JRF.encodeHtmlJs = function(a) {
	return a && a.replace ? (a.replace(/\\/g, "\\\\").replace(/\'/g, "\\x27").replace(/\"/g, "\\x22").replace(/\n/g, "\\n")) : a
};
JRF.encodeHtmlAttr = function(a) {
	return a && a.replace ? (a.replace(/\"/g, "&quot;")) : a
};
JRF.encodeUrl = function(a) {
	return encodeURIComponent(a || "")
};
JRF.decodeUrl = function(a) {
	return decodeURIComponent(a || "")
};
JRF.endsWith = function(val,s){
	if(s==null||s==""||val.length==0||s.length>val.length)
	     return false;
	  if(val.substring(val.length-s.length)==s)
	     return true;
	  else
	     return false;
	  return true;
};
JRF.startsWith = function(val,s){
	if(s==null||s==""||val.length==0||s.length>val.length)
		return false;
	  if(val.substring(0,s.length)==s)
	     return true;
	  else
	     return false;
	  return true;
}
JRF.toUN = {
	on: function(d) {
		var b = [],
		c = 0;
		for (; c < d.length;) {
			b[c] = ("00" + d.charCodeAt(c++).toString(16)).slice( - 4)
		}
		return "\\u" + b.join("\\u")
	},
	un: function(a) {
		return unescape(a.replace(/\\/g, "%"))
	}
};
JRF.parseFileName = function(b, a) {
	var d = b.lastIndexOf("/");
	if (d < 0) {
		d = b.lastIndexOf("\\")
	}
	if (d >= 0) {
		b = b.substring(d + 1)
	}
	if (a) {
		return b
	} else {
		var c = b.lastIndexOf(".");
		if (c >= 0) {
			return b.substring(0, c)
		} else {
			return b
		}
	}
};
JRF.parseFileSize = function(c) {
	if (typeof c != "undefined" && typeof c == "number") {
        var b;
        if (c < 1024) {
            var a = c;
            b = a.toFixed(2) + "KB"
        } else {
            var a = c / 1024 ;
            b = a.toFixed(2) + "MB"
        }
        return b
    } else {
        return "-"
    }
};
JRF.format = function() {
	var c = arguments[0];
	for (var a = 0; a < arguments.length - 1; a++) {
		var b = new RegExp("\\{" + a + "\\}", "gm");
		c = c.replace(b, arguments[a + 1])
	}
	return c
};

JRF.getFrameHeight = function(d) {
	var c = JRF.getCssInt(d, "padding-top") + JRF.getCssInt(d, "padding-bottom");
	var b = JRF.getCssInt(d, "margin-top") + JRF.getCssInt(d, "margin-bottom");
	var a = JRF.getCssInt(d, "border-top-width") + JRF.getCssInt(d, "border-bottom-width");
	return a + b + c
};

//    更新滚动条
function updateScroll(divId){

    updateObjScroll($("#"+divId))
}
// update scrllbar
function updateObjScroll(scrollObj){
    $(scrollObj).mCustomScrollbar("update");
}
JRF.bg = function(f, b) {
	var c = "";
	var a = "";
	if (b) {
		a = "filter: alpha(opacity=" + b * 100 + "); opacity:" + b + ";"
	}
	if (JRF.isIE6()) {
		var d = JRF.top.$("html").scrollTop();
		JRF.top.$("html").data("scrollTop", d);
		JRF.top.$("html").scrollTop(0);
		var d = JRF.top.$("body").scrollTop();
		JRF.top.$("body").data("scrollTop", d);
		JRF.top.$("body").scrollTop(0);
		JRF.top.$("html").data("overflow-x", JRF.top.$("html").css("overflow-x"));
		JRF.top.$("html").data("overflow-y", JRF.top.$("html").css("overflow-y"));
		JRF.top.$("html").css("overflow-x", "hidden");
		JRF.top.$("html").css("overflow-y", "hidden");
		JRF.top.$("body").data("overflow-x", JRF.top.$("body").css("overflow-x"));
		JRF.top.$("body").data("overflow-y", JRF.top.$("body").css("overflow-y"));
		JRF.top.$("body").css("overflow-x", "hidden");
		JRF.top.$("body").css("overflow-y", "hidden")
	}
	c = '<div id="popupBg' + f + '" class="popupBg" style=\'' + a + "' >" + ($.browser.msie && $.browser.version == 6 ? '<iframe id="fixSelectIframe' + f + '" wmode="transparent" style="filter: alpha(opacity=0);opacity: 0;" class="popupBg" style="z-index:-111" src="javascript:"></iframe>': "") + "</div>";
	if(JRF.isIE6()){
		JRF.top.$(c).appendTo("body");
	}else{
		JRF.win.$(c).appendTo(JRF.top.document.body);		
	}
	JRF.stopInterval(null)
};

JRF.removeBg = function(a) {
	if (a) {
		JRF.top.$("#popupBg" + a).remove()
	} else {
		JRF.top.$(".popupBg").remove()
	}
	if (JRF.isIE6()) {
		JRF.top.$("html").css("overflow-x", JRF.top.$("html").data("overflow-x"));
		JRF.top.$("html").css("overflow-y", JRF.top.$("html").data("overflow-y"));
		JRF.top.$("body").css("overflow-x", JRF.top.$("body").data("overflow-x"));
		JRF.top.$("body").css("overflow-y", JRF.top.$("body").data("overflow-y"));
		JRF.top.$("html").scrollTop(JRF.top.$("html").data("scrollTop"));
		JRF.top.$("body").scrollTop(JRF.top.$("body").data("scrollTop"))
	}
	JRF.startInterval(null)
};

JRF.bodyBg = function(d, b) {
	var c = "";
	var a = "";
	if (b) {
		a = "filter: alpha(opacity=" + b * 100 + "); opacity:" + b + ";"
	}
	if (JRF.isIE6()) {
		$("body").data("height", $("body").css("height"));
		$("body").css("height", "100%")
	}
	c = '<div id="popupBg' + d + '" class="popupBg" style=\'' + a + "' ></div>";
	$(c).appendTo("body")
};
JRF.removeBodyBg = function(a) {
	if (JRF.isIE6()) {
		$("body").css("height", $("body").data("height"))
	}
	if (a) {
		$("#popupBg" + a).remove()
	} else {
		$(".popupBg").remove()
	}
};

JRF.popupWindow = function(i) {
	var E = "";
	var s = "_blank";
	// 宽度
	var y = "500";
	// 高度
	var u = "300";
	var t = "auto";
	var a = false;
	var g = "0.5";
	var c = true;
	var C = 0;
	var A = 0;
	var F = true;
	var D = "";
	// 
	var o = 70;
	// 
	var l = 10;
	var r = true;
	var d = false;
	// 浏览器宽度
	var h = JRF.top.document.documentElement.clientWidth;
	// 浏览器高度
	var m = JRF.top.document.documentElement.clientHeight;

	if (! ($.browser.msie == true)) {
		h = JRF.top.document.body.clientWidth
	}
	var k = (h - y - l) / 2;
	var w = (m - u - o) / 2;

	// alert(k)
	// alert(w)


	var q = 24;
	var z = 5;
	var j = "";
	var B = {};
	B = $.extend({},B, i);
	if (B.autoPopup != null) {
		a = B.autoPopup
	}
	if (B.title != null) {
		E = B.title
	}
	if (B.frameSrcUrl != null) {
		s = B.frameSrcUrl
	}
	if (B.autoPopup != null) {
		s += "&act=close"
	}
	if (B.bannerDisplay != null) {
		F = B.bannerDisplay
	}
	if (B.framePadding != null) {
		r = B.framePadding
	}
	if (B.bgClose != null) {
		d = B.bgClose
	}
	if (!F) {
		F = "display:none;";
		D = "background:none;";
		o = 0;
		l = 0
	} else {
		F = ""
	}
	if (!r) {
		D += "padding:0;";
		o = 0;
		l = 0;
		q = 0;
		z = 0;
		j = 'allowtransparency="true"'
	}
	if (B.width != null) {
		y = B.width
	}
	if (y > h - l) {
		y = h - l
	}
	if (B.height != null) {
		u = B.height
	}
	if (u > (m - o)) {
		u = m - o
	}
	if (B.frameScrolling != null) {
		t = B.frameScrolling
	}
	if (B.opacity != null) {
		g = B.opacity
	}
	if (B.leftMar != null) {
		k = B.leftMar
	} else {
		k = (h - y - l) / 2
	}
	if (B.topMar != null) {
		w = B.topMar
	} else {
		w = (m - u - o) / 2
	}
	if (B.displayBg != null) {
		c = B.displayBg
	}
	if (B.offsetX != null) {
		C = B.offsetX
	}
	if (B.offsetY != null) {
		A = B.offsetY
	}
	//随机popupIDid
	var v = parseInt(Math.random() * 10000);
    var f = "<iframe " + j + ' id="popupWindowIframe' + v + '" name="popupWindowIframe' + v + '" class="popupWindowIframe" src="" frameborder="0" scrolling="' + t + '" style="width:' + (y - q+6) + "px; height:" + (u - z) + 'px;"></iframe>';
	var x = true;
	if (B.divId != null) {
		x = false;
		f = $(B.divId).html()
	}
	if (B.divContent != null) {
		x = false;
		f = B.divContent
	}
	if (c) {
		JRF.bg(v, g)
	}
	var p = "";
	var b = JRF.top.$("body").scrollTop();
	if (b == 0) {
		b = JRF.top.$("html").scrollTop()
	}
	// animated
	p += '<div id="popupWindow' + v + '" class="formDialog " style="position:fixed;width:' + y + "px; left:" + (k) + "px; top:" + (w-30) + 'px;">' + '<div class="formTL" id="dragHandle_'+v+'" style=\'' + F + '\'><div class="formTR"><div class="formTC"><h3>' + E + '</h3></div></div></div><div class="formBL" style=\'' + D + "'><div class=\"formBR\" style='" + D + '\'><div class="formBC" id="formBC' + v + '" style="height:auto;' + D + '"><div class="formMSG" style="position: relative;">' + f + "</div><div class='formBtns'><div class='formt_bk'></div></div></div><div id=\"waitingP" + v + '" class="waitingP" style="height:auto;"></div></div></div><div class="formBtl"><div class="formBtr"><div class="formBtm"></div></div></div><a href="javascript:;" class="formX ' + (F ? "formX_old": "") + "\" hidefocus='true'></a></div>";
	var n;
	if(JRF.isIE6()){
		n = JRF.top.$(p).appendTo("body");
	}else{
		n = JRF.win.$(p).appendTo(JRF.top.document.body);
		n.show();		
	}
	if ($.browser.msie && $.browser.version == 6) {
		$("#fixFlashIframe" + v).attr("height", ($("#popupWindow" + v).height()) + "px")
	}
	if (x) {
		JRF.dom.find("#waitingP" + v).height(JRF.dom.find("#formBC" + v).height());
		JRF.dom.find("#waitingP" + v).width(JRF.dom.find("#formBC" + v).width())
	} else {
		JRF.dom.find("#waitingP" + v).hide()
	}
	if (B.divInit != null) {
		B.divInit(v)
	}
	JRF.dom.find("#popupWindow" + v).ready(function(){
		if(x){
			JRF.dom.find("#popupWindowIframe" + v).attr("src", JRF.addUrlParams(s, "popupID=" + v)).load(function() {
				JRF.dom.find("#waitingP" + v).css("display", "none")
			})
		}
		Drag.init(JRF.top.document.getElementById("dragHandle_"+v),JRF.top.document.getElementById("popupWindow"+v));
		if(!JRF.isNull(B.close)){
			n.find(".formX").click(B.close);
		}else{
			n.find(".formX").bind("click",function(){
				JRF.closePopupWindow(v);				
				return false
			});			
		}
		n.find(".formTL").disableSelection();
		if (B.bgClose) {
			JRF.dom.find("#popupBg" + v).bind("click",function() {
				JRF.closePopupWindow(v);
				return false
			})
		}
		JRF.dom.find('body input:first').focus();
	});
	if (JRF.isNull(top._popupOptions)) {
		top._popupOptions = {}
	}
	if (JRF.isNull(top._popupOptions["popup" + v])) {
		top._popupOptions["popup" + v] = {}
	}
	if (!JRF.isNull(i.callArgs)) {
		top._popupOptions["popup" + v].callArgs = i.callArgs
	}
	top._popupOptions["popup" + v].options = i;
	top._popupOptions["popup" + v].change = false;
    // 弹框弹出动画效果添加
    JRF.scrolbarSet();
    pipwinAnimate(v,1);
	return v
};

function pipwinAnimate(popupId,poptype){
    // poptype 为1 弹框id为 popupWindow+数字    为2 弹框id 为 +数字   为3 弹框id为固定值
    var popobj;
    if(poptype == 1){
        popobj = "#popupWindow"+popupId;
    }else if(poptype == 2){
        popobj ="#popup_container"+popupId;
    }else if(poptype == 3){
        popobj = "#" + popupId;
    }
    // JRF.dom.find(popobj).addClass("slideInDown");
}
JRF.setPopupWindowChange = function(b, a) {
	if (JRF.isNull(JRF.top._popupOptions)) {
		return
	}
	if (JRF.isNull(JRF.top._popupOptions["popup" + b])) {
		return
	}
	JRF.top._popupOptions["popup" + b].change = a
};
JRF.closePopupWindow = function(g, d){
	if(g){
		try {
			if (JRF.isNull(top._popupOptions["popup" + g])) {
				return;
			}
			var c = top._popupOptions["popup" + g];
			if(c.refresh){
				top.location.reload();
			}
			JRF.win.JRF.removeAllIng(false);
			var b = c.options;
			if(!JRF.isNull(b.closeFunc)){
				if(d){
					b.closeFunc(d);
				}else{
					b.closeFunc(top._popupOptions["popup" + g].closeArgs);
				}
			}
			//清空值
			top._popupOptions["popup" + g] = {};
			JRF.closePopupWindow_Internal(g);
		} catch(f) {
		}
	} else {
		// JRF.dom.find(".formDialog").removeClass("slideInDown").addClass("slideOutUp");
		setTimeout(function(){
			JRF.dom.find(".formDialog").remove()
			JRF.removeBg();
			JRF.scrolbarSet();
		},500);
	}
};
/**
 * 设置滚动条隐藏展示  mxs20180703
 */
JRF.scrolbarSet = function(){
    if(JRF.dom.find(".popupBg").length ==0){
        JRF.dom.find("#bodyDesign").css("overflow-y","auto");
    }else  if(JRF.dom.find(".popupBg").length ==1){
        JRF.dom.find("#bodyDesign").css("overflow-y","hidden");
    }
}
JRF.closePopupWindow_Internal = function(a){
	if (typeof a == "undefined"){
		// JRF.dom.find(".formDialog").removeClass("slideInDown").addClass("slideOutUp");
		setTimeout(function(){
			JRF.dom.find(".formDialog").remove();
			JRF.top.$(".popupBg").remove();
			JRF.scrolbarSet();
		},500);
	} else {
		// JRF.dom.find("#popupWindow" + a).removeClass("slideInDown").addClass("slideOutUp");
		setTimeout(function(){
			JRF.dom.find("#popupWindow" + a).remove();
			JRF.top.JRF.removeBg(a);
			JRF.scrolbarSet();
		},500);
	}
};
JRF.closePopupWindowAnimate = function(b, f, d) {
	var c = $("<div>");
	JRF.top.$("body").append(c);
	c.css({
		border: "1px solid #7EC2DF",
		position: "absolute",
		"z-index": "99",
		top: b.offset().top,
		left: b.offset().left,
		height: b.height() + "px",
		width: b.width() + "px"
	});
	var a = JRF.top.$("body").find(f);
	c.animate({
		top: a.offset().top + "px",
		left: a.offset().left + "px",
		width: a.width() + "px",
		height: a.height() + "px"
	},
	"slow",
	function() {
		if (typeof d == "function") {
			d()
		}
		c.remove()
	})
};


JRF.addPopupWindowHelperBtn = function(g, a) {
	var d = JRF.top.$("#popupWindow" + g);
	var c = d.find(".formTR");
    c.find(".formH").remove();
    var b = "<a class='c-helplink' href='" + a + "' target='_blank'>查看帮助</a>";
	c.append(b);
};



JRF.addPopupWindowBtn = function(g, a) {
	var d = JRF.top.$("#popupWindow" + g);
	d.find(".formBtns").show();
	var f = "popup" + g + a.id;
	var c = d.find(".formBtns .formt_bk");
	(c.size() <= 0) && (c = d.find(".formBtns td"));

	var b = c.find("#" + f);
	if (b.length > 0) {
		b.remove()
	}
	if (a.click != "help") {
		//JRF.top.$("<input id='" + f + "' type='button' value='" + a.text + "' class='dialog_btn abutton jrfButton'  ></input>").appendTo(c)
        var classStr = "dialog_btn";
        if(f && f.indexOf("close")>=0){
            classStr="jrfclosebtn"
        }

        if(a.type == "m"){
        	JRF.top.$("<input id='" + f + "' type='button' value='" + a.text + "' class='abutton jrfButton saveButton'></input>").appendTo(c)
        }else{
        	JRF.top.$("<input id='" + f + "' type='button' value='" + a.text + "' class='"+classStr+"' onmouseout=\"this.className='"+classStr+"'\" onmouseover=\"this.className='"+classStr+"_m'\"></input>").appendTo(c);

        }
	}
	b = c.find("#" + f);
	if (a.click == "close") {
		b.click(function() {
			//if(JRF.top.$('#main .box .first').children('img').size()>0){
			//	JRF.top.$('#main .box .first').parent('.box').remove();
            //
			//}else{
			//	JRF.top.$('#main .box .first').removeClass('first')
			//}
			JRF.closePopupWindow(g)
		})
	} else {
		if (a.click == "help") {
			if (d.find("a.formH").length == 0) {
				d.append("<a class='formH' href='" + a.helpLink + "' target='_blank' title='" + a.text + "'></a>")
			}
		} else {
			b.click(a.click)
		}
	}
	if (a.disable) {
		b.attr("disabled", true)
	}
};
JRF.enablePopupWindowBtn = function(f, d, a) {
	var c = JRF.top.$("#popupWindow" + f);
	d = "popup" + f + d;
	var b = c.find("#" + d);
	if (a) {
		b.removeAttr("disabled")
	} else {
		b.attr("disabled", true)
	}
};

JRF.popupBodyWindow = function(f) {
	var x = "";
	var r = "500";
	var o = "300";
	var d = "0.5";
	var c = true;
	var v = 0;
	var t = 0;
	var y = true;
	var w = "";
	var l = 70;
	var i = 10;
	var s = "";
	var b = $("body").scrollTop();
	if (b == 0) {
		b = $("html").scrollTop()
	}
	var g = $("body").width();
	var j = $("body").height() - b;
	var m = $(window).height();
	var h = 0;
	var q = 0;
	var u = {};
	u = $.extend({},
	u, f);
	if (u.title != null) {
		x = u.title
	}
	if (u.bannerDisplay != null) {
		y = u.bannerDisplay
	}
	if (!y) {
		y = "display:none;";
		w = "background:none;";
		l = 0;
		i = 0
	} else {
		y = ""
	}
	if (u.width != null) {
		r = u.width
	}
	if (r > g - i) {
		r = g - i
	}
	if (u.height != null) {
		o = u.height
	}
	if (o > (j - l)) {
		o = j - l
	}
	if (u.opacity != null) {
		d = u.opacity
	}
	if (u.leftMar != null) {
		h = u.leftMar
	} else {
		h = (g - r - i) / 2
	}
	if (u.topMar != null) {
		q = u.topMar
	} else {
		q = (j - o - l) / 2 + b
	}
	if (u.displayBg != null) {
		c = u.displayBg
	}
	if (u.offsetX != null) {
		v = u.offsetX
	}
	if (u.offsetY != null) {
		t = u.offsetY
	}
	if (u.content != null) {
		s = u.content
	}
	var p = parseInt(Math.random() * 10000);
	if (c) {
		JRF.bodyBg(p, d)
	}
	var n = "";
	var k = o / 2;
	var a;
	if (typeof u.topMar != "undefined") {
		a = q - t
	} else {
		a = b + m / 2 - k
	}
	n += '<div id="popupWindow' + p + '" class="formDialog" style="width:' + r + "px; left:" + (h - v) + "px; top:" + (a) + 'px;">' + '<div class="formTL" style=\'' + y + '\'><div class="formTR"><div class="formTC"><h3>' + x + '</h3></div></div></div><div class="formBL" style=\'' + w + "'><div class=\"formBR\" style='" + w + '\'><div class="formBC" id="formBC" style="height:' + o + "px;" + w + '"><div class="formMSG" style="position: relative;height:auto;">' + s + "</div><table cellpadding='0' cellspacing='0' class='formBtns'><tr><td align='center'></td></tr></table></div></div></div><div class='formBtl'><div class='formBtr'><div class='formBtm'></div></div><a href='javascript:;' class='formX' hidefocus='true' hidefocus='true' onclick='return false;'></a></div>";
	if (u.downDiv != null){
		n += "<table cellspacing='0' cellpadding='0' width='100%'><tbody><tr><td class='formBtl' width='2%'></td><td class='formBtm' width='96%'></td><td class='formBtr' width='2%'></td></tr></tbody></table> </div>";
	}else{
		n += '</div>'
	}
	$(n).appendTo("body");
	
	$("#popupWindow" + p).ready(function() {
		$(".formDialog").draggable({
			handle: ".formTL"
		});
		$(".formTL").disableSelection();
		$(".formX").click(function() {
			if (u.beforeClose) {
				u.beforeClose()
			}
			JRF.closePopupBodyWindow(p);
			JRF.top.$("#popupBgTitle" + p).remove()
		})
	});
	return p
};
JRF.closePopupBodyWindow = function(a) {
	if (a) {
		JRF.removeBodyBg(a);
		$("#popupWindow" + a).remove();
		$("body").focus()
	} else {
		JRF.removeBodyBg();
		$(".formDialog").remove()
	}
};
JRF.addPopupBodyWindowBtn = function(g, a) {
	var d = $("#popupWindow" + g);
	
	var f = "popup" + g + a.id;
	var c = d.find(".formBtns td");
	// alert(123333333)
	var b = c.find("#" + f);
	if (b.length > 0) {
		b.remove()
	}
	$("<div id='popup_panel'><input id='" + f + "' type='button' value='" + a.text + "' class='popup_ok' onmouseover=\"this.className='popup_ok_m'\" onmouseout=\"this.className='popup_ok'\"></input></div>").appendTo(c);
	b = c.find("#" + f);
	if (a.click == "close") {
		b.click(function() {
			JRF.closePopupBodyWindow(g)
		})
	} else {
		b.click(a.click)
	}
	if (a.disable) {
		b.attr("disabled", true)
	}
};
JRF.enablePopupBodyWindowBtn = function(f, d, a) {
	var c = $("#popupWindow" + f);
	d = "popup" + f + d;
	var b = c.find("#" + d);
	if (a) {
		b.removeAttr("disabled")
	} else {
		b.attr("disabled", true)
	}
};

JRF.stopInterval = function(c) {
	if (JRF.isNull(JRF.intervalFunc)) {
		return
	}
	for (var b = 0; b < JRF.intervalFunc.length; ++b) {
		var a = JRF.intervalFunc[b];
		if (c == null || a.id == c) {
			if (a.timer) {
				clearInterval(a.timer)
			}
		}
	}
};

JRF.startInterval = function(c) {
	if (JRF.isNull(JRF.intervalFunc)) {
		return
	}
	for (var b = 0; b < JRF.intervalFunc.length; ++b) {
		var a = JRF.intervalFunc[b];
		if (c == null || a.id == c) {
			if (a.timer) {
				clearInterval(a.timer)
			}
			if (a.type == 1) {
				a.timer = setInterval(a.func, a.interval)
			} else {
				a.timer = setTimeout(a.func, a.interval)
			}
		}
	}
};

JRF.ing = function(j, i,top,left) {
	var f = (j == null || j == "") ? "正在处理...": j;
	var d = JRF.win.document.body.clientWidth;
	var a = JRF.win.document.body.clientHeight;
	var g = "";
	if(top){
		g = "<div id='ing' style=\"position:absolute;  top:"+top+"px; left: "+left+"px; margin:0px auto; width:auto;  height:auto; z-index:9999;\"></div>";
	}else{
		g = "<div id='ing' style=\"position:absolute;top:50%; left: 50%; width:auto;height:auto; z-index:9999;\"></div>";
	}
	if (JRF.win.$("#ing").length == 0) {
		JRF.win.$(g).appendTo("body")
	}
	var b = JRF.win.$("#ing");
	var k = JRF.win.$("body").scrollTop();
	if (JRF.isIE6() && k == 0) {
		k = JRF.win.$("html").scrollTop()
	}
	if (k > 0) {
		b.css("top", (k + 30) + "px")
	}
	var c = parseInt(Math.random() * 10000);
	var h = "";
	h += '<div id="' + c + '" class="tips"><div class="msg" style="color:#fff">' + f + "<span class='close'  onclick=\"JRF.win.JRF.removeIng(false, " + c + ');"></span></div></div>';
	b.find(".tips").remove();
	JRF.win.$(h).appendTo(b);
	if (i) {
		JRF.win.JRF.removeIng(i, c)
	}
};

//2017-4-26  申海涛修改  在线 客服-提示信息根据点击次数相应累计显示，需进行修改
JRF.ings = function(j, i,top,left,number) {
	
	var f =j;
	var d = JRF.win.document.body.clientWidth;
	var a = JRF.win.document.body.clientHeight;
	var g = "";
	if(top){
		g = "<div id='ing' style=\"position:absolute;  top:"+top+"px; left: "+left+"px; margin:0px auto; width:auto;  height:auto; z-index:9999;\"></div>";
	}else{
		g = "<div id='ing' style=\"position:absolute;  top:50%; left: 50%; z-index:9999;\"></div>";
	}
	if (JRF.win.$("#ing").length == 0) {
		JRF.win.$(g).appendTo("body")
	}
	var b = JRF.win.$("#ing");
	var k = JRF.win.$("body").scrollTop();
	if (JRF.isIE6() && k == 0) {
		k = JRF.win.$("html").scrollTop()
	}
	if (k > 0) {
		b.css("top", (k + 30) + "px")
	}
	var c = parseInt(Math.random() * 10000);
	var h = "";
	h += '<div id="' + c + '" class="tips"><div class="msg" id="msgs" style="color:#fff">' + f + "<span class='close'  onclick=\"JRF.win.JRF.removeIng(false, " + c + ');"></span></div></div>';
	b.find(".tips").remove();
	var exp = undefined;
	var aavalue = $("#msgs").val(); 
	if(number==1){
	var bsss = JRF.win.$("#aaa");
			if(exp == aavalue){
				JRF.win.$(h).appendTo( bsss);
			}
	}else if(number==2){
		var bsss = JRF.win.$("#hhh");
		if(exp == aavalue){
			JRF.win.$(h).appendTo( bsss);
		}
	}else if(number==3){
		var bsss = JRF.win.$("#ooo");
		if(exp == aavalue){
			JRF.win.$(h).appendTo( bsss);
		}
	}else{
	JRF.win.$(h).appendTo( b);
	}
	if (i) {
		JRF.win.JRF.removeIng(i, c)
	}
};




JRF.removeIng = function(a, b) {
	if (a) {
		if (typeof b != "undefined" && JRF.win.$("#" + b).length > 0) {
			window.setTimeout(function() {
				$("#" + b).fadeOut(1000)
			},
			3000);
			window.setTimeout(function() {
				$("#" + b).remove()
			},
			45000)
		} else {
			JRF.win.$(".tips").fadeOut(1000);
			window.setTimeout(function() {
				$("#ing").remove()
			},
			3000)
		}
	} else {
		if (typeof b != "undefined" && JRF.top.$("#" + b).length > 0) {
			JRF.win.$("#" + b).fadeOut(0);
			window.setTimeout(function() {
				$("#" + b).remove()
			},
			0)
		} else {
			JRF.win.$(".tips").fadeOut(0);
			window.setTimeout(function() {
				$("#ing").remove()
			},
			0)
		}
	}
};

JRF.removeAllIng = function() {
	JRF.top.$("#ing").remove()
};

var Drag={
    "obj":null,
	"init":function(handle, dragBody, e){
		if (e == null) {
			handle.onmousedown=Drag.start;
		}
		handle.root = dragBody;
		if(isNaN(parseInt(handle.root.style.left)))handle.root.style.left="0px";
		if(isNaN(parseInt(handle.root.style.top)))handle.root.style.top="0px";
		handle.root.onDragStart=new Function();
		handle.root.onDragEnd=new Function();
		handle.root.onDrag=new Function();
		if (e !=null) {
			var handle=Drag.obj=handle;
			e=Drag.fixe(e);
			var top=parseInt(handle.root.style.top);
			var left=parseInt(handle.root.style.left);
			handle.root.onDragStart(left,top,e.pageX,e.pageY);
			handle.lastMouseX=e.pageX;
			handle.lastMouseY=e.pageY;
			JRF.top.document.onmousemove=Drag.drag;
			JRF.top.document.onmouseup=Drag.end;
		}
	},
	"start":function(e){
		var handle=Drag.obj=this;
		e=Drag.fixEvent(e);
		var top=parseInt(handle.root.style.top);
		var left=parseInt(handle.root.style.left);
		handle.root.onDragStart(left,top,e.pageX,e.pageY);
		handle.lastMouseX=e.pageX;
		handle.lastMouseY=e.pageY;
		JRF.top.document.onmousemove=Drag.drag;
		JRF.top.document.onmouseup=Drag.end;
		return false;
	},
	"drag":function(e){
		e=Drag.fixEvent(e);
		var handle=Drag.obj;
		var mouseY=e.pageY;
		var mouseX=e.pageX;
		var top=parseInt(handle.root.style.top);
		var left=parseInt(handle.root.style.left);
		var currentLeft,currentTop;
		currentLeft=left+mouseX-handle.lastMouseX;
		currentTop=top+(mouseY-handle.lastMouseY);
		handle.root.style.left=currentLeft +"px";
		handle.root.style.top=currentTop+"px";
		handle.lastMouseX=mouseX;
		handle.lastMouseY=mouseY;
		handle.root.onDrag(currentLeft,currentTop,e.pageX,e.pageY);
		return false;
	},
	"end":function(){
		JRF.top.document.onmousemove=null;
		JRF.top.document.onmouseup=null;
		Drag.obj.root.onDragEnd(parseInt(Drag.obj.root.style.left),parseInt(Drag.obj.root.style.top));
		Drag.obj=null;
	},
	"fixEvent":function(e){//格式化事件参数对象
		var sl = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
		var st = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
		if(typeof e=="undefined")e=JRF.top.event;
		if(typeof e.layerX=="undefined")e.layerX=e.offsetX;
		if(typeof e.layerY=="undefined")e.layerY=e.offsetY;
		if(typeof e.pageX == "undefined")e.pageX = e.clientX + sl - document.body.clientLeft;
		if(typeof e.pageY == "undefined")e.pageY = e.clientY + st - document.body.clientTop;
		return e;
	}
};

/*
 * 功能：延时加载图片
 */
JRF.delayLoadImg = function(a) {
	if (typeof a == "undefined" || a <= 0) {
		a = 10
	}
	setTimeout("JRF.doDelayLoadImg(" + a + ")", 200)
};
JRF.doDelayLoadImg = function(b) {
	var a = 0;
	$("img").each(function() {
		var c = $(this).attr("faiSrc");
		if (!JRF.isNull(c) && c != "") {
			if (c != $(this).attr("src")) {
				++a;
				$(this).show();
				$(this).attr("src", c);
				if (a >= b) {
					return false
				}
			}
		}
	});
	if (a >= b) {
		setTimeout("JRF.doDelayLoadImg(" + b + ")", 200)
	}
};

JRF.Img = {};
JRF.Img = {
	MODE_SCALE_FILL: 1,
	MODE_SCALE_WIDTH: 2,
	MODE_SCALE_HEIGHT: 3,
	MODE_SCALE_DEFLATE_WIDTH: 4,
	MODE_SCALE_DEFLATE_HEIGHT: 5,
	MODE_SCALE_DEFLATE_FILL: 6,
	MODE_SCALE_DEFLATE_MAX: 7
};
JRF.Img.optimize = function(d, g) {
	var b = new Image();
	b.src = d.src;
	var c = b.width;
	var a = b.height;
	if (JRF.isNull(c) || c == 0 || JRF.isNull(a) || a == 0) {
		c = d.width;
		a = d.height
	}
	var f = JRF.Img.calcSize(c, a, g.width, g.height, g.mode);
	d.width = f.width;
	d.height = f.height;
	if (g.display == 1) {
		d.style.display = "inline"
	} else {
		if (g.display == 2) {
			d.style.display = "none"
		} else {
			d.style.display = "block"
		}
	}
	return {
		width: d.width,
		height: d.height
	}
};
/**
 * 压缩图片
 * f:原图宽度
 * a:原图高度
 * h:压缩图片宽度
 * g:压缩图片高度
 * i:压缩模式
 */
JRF.Img.calcSize = function(f, a, h, g, i) {
	var c = {
		width: f,
		height: a
	};
	if (i == JRF.Img.MODE_SCALE_FILL) {
		var d = f / h;
		var b = a / g;
		if (d > b) {
			c.width = h;
			c.height = a / d
		} else {
			c.width = f / b;
			c.height = g
		}
	} else {
		if (i == JRF.Img.MODE_SCALE_WIDTH) {
			var d = f / h;
			c.width = h;
			c.height = a / d
		} else {
			if (i == JRF.Img.MODE_SCALE_HEIGHT) {
				var b = a / g;
				c.width = f / b;
				c.height = g
			} else {
				if (i == JRF.Img.MODE_SCALE_DEFLATE_WIDTH) {
					var d = f / h;
					if (d > 1) {
						c.width = h;
						c.height = a / d
					}
				} else {
					if (i == JRF.Img.MODE_SCALE_DEFLATE_HEIGHT) {
						var b = a / g;
						if (b > 1) {
							c.width = f / b;
							c.height = g
						}
					} else {
						if (i == JRF.Img.MODE_SCALE_DEFLATE_FILL) {
							var d = f / h;
							var b = a / g;
							if (d > b) {
								if (d > 1) {
									c.width = h;
									c.height = a / d
								}
							} else {
								if (b > 1) {
									c.width = f / b;
									c.height = g
								}
							}
						} else {
							if (i == JRF.Img.MODE_SCALE_DEFLATE_MAX) {
								if (f > h && a > g) {
									var d = f / h;
									var b = a / g;
									if (d < b) {
										c.width = h;
										c.height = a / d
									} else {
										c.width = f / b;
										c.height = g
									}
								}
							}
						}
					}
				}
			}
		}
	}
	c.width = Math.floor(c.width);
	c.height = Math.floor(c.height);
	if (c.width == 0) {
		c.width = 1
	}
	if (c.height == 0) {
		c.height = 1
	}
	return c
};

/**
 * 点击隐藏层
 */
JRF.fMainListToggle = function (obj){
	var title = obj.firstChild;
	var content = obj.nextSibling;
	if(!content.tagName){
		content = content.nextSibling;
	}
	if(!title.tagName){
		title = title.nextSibling;
	}
	if(title.className.indexOf("mo_title_r1") == 0){
		content.style.display = "";
		title.className = title.className.replace("mo_title_r1","mo_title_r2");
	}else{
		content.style.display = "none";
		title.className = title.className.replace("mo_title_r2","mo_title_r1");
	}
};

JRF.refreshClass = function(a) {
	a.children().each(function() {
		$(this).attr("className", $(this).attr("className"));
		JRF.refreshClass($(this))
	})
};

//生成单条css样式代码
JRF.setCtrlStyleCss = function(c, b, l, k, j) {
	var a = $("#" + c);
	var h = new Array();
	if (a.length == 1) {
		var g = a.html();
		g = g.replace("<!--1-->","");
		g = g.replace(/{\r\n/g, "{").replace(/\t/g, "").replace(/\r\n}/g, ";}");
		h = g.split("\n");
		a.remove()
	}
	var d = new RegExp("#" + b + " +" + l.replace(".", "\\.") + " *{ *" + k + "[^;]*;}", "gi");
	if (b == "" || b == "undefined") {
		d = new RegExp(l.replace(".", "\\.") + " *{ *" + k + "[^;]*;}", "gi")
	}
	for (var f = h.length - 1; f >= 0; --f) {
		var m = h[f];
		if (m.length == 0 || /^\s$/.test(m) || d.test(m)) {
			h.splice(f, 1)
		}
	}
	if (b == "" || b == "undefined") {
		h.push(l + "{" + k + ":" + j + ";}")
	} else {
		h.push("#" + b + " " + l + "{" + k + ":" + j + ";}")
	}
	$("head").append('<style type="text/css" id="' + c + '">' + h.join("\n") + "</style>")
};


//   修模块样式所见即所得
JRF.setCtrlStyleCssDiy = function(c, b, l, k, j) {
    var a = $("#" + c);
    var h = new Array();
    if (a.length == 1) {
        var g = a.html();
        g = g.replace("<!--1-->","");
        g = g.replace(/{\r\n/g, "{").replace(/\t/g, "").replace(/\r\n}/g, ";}");
        h = g.split("\n");
    }
    var d = new RegExp("#" + b + " +" + l.replace(".", "\\.") + " *{ *" + k + "[^;]*;}", "gi");
    if (b == "" || b == "undefined") {
        d = new RegExp(l.replace(".", "\\.") + " *{ *" + k + "[^;]*;}", "gi")
    }
    for (var f = h.length - 1; f >= 0; --f) {
        var m = h[f];
        if (m.length == 0 || /^\s$/.test(m) || d.test(m)) {
            h.splice(f, 1)
        }
    }
    if (b == "" || b == "undefined") {
        h.push(l + "{" + k + ":" + j + ";}")
    } else {
        h.push("#" + b + " " + l + "{" + k + ":" + j + ";}")
    }
    a.html(h.join("\n") );
};



//功能：生成多条css样式代码
//c样式块ID
//b样式class名
//j样式内容
JRF.setCtrlStyleCssList = function(c, b, j, p) {
	var a = $("#" + c);
	var k = new Array();
	if (a.length == 1) {
		var h = a.html();
		h = h.replace("<!--1-->","");
		h = h.replace(/{\r\n/g, "{").replace(/\t/g, "").replace(/\r\n}/g, ";}").replace(/}#/g, "}\r\n#");
		k = h.split("\n");
		a.remove()
	}
	for (var g = k.length - 1; g >= 0; --g) {
		var o = k[g];
		for (var f = 0; f < j.length; ++f) {
			var m = j[f].cls;
			var l = j[f].key;
			//var d = new RegExp("#" + b + " +" + m.replace(".", "\\.") + " *{ *" + l + "[^;]*;}", "gi");
            var d = new RegExp("#" + b + " +" + m.replace(".", "\\.").replace("[","\\[").replace("]","\\]").replace("^","\\^").replace("(","\\(").replace(")","\\)") + " *{ *" + l + "[^;]*;}", "gi");
			if (b == "" || b == "undefined") {
				d = new RegExp(m.replace(".", "\\.") + " *{ *" + l + "[^;]*;}", "gi");
			}
			if (o.length == 0 || /^\s$/.test(o) || d.test(o)) {
				k.splice(g, 1);
				break
			}
		}
	}
	for (var f = 0; f < j.length; ++f) {
		if (b == "" || b == "undefined" || j[f].cls.indexOf('Box')>0) {
			k.push(j[f].cls + "{" + j[f].key + ":" + j[f].value + ";}");
		}else{
			k.push("#" + b + " " + j[f].cls + "{" + j[f].key + ":" + j[f].value + ";}");
		}
	}
	if (p && p.rev) {
		k.reverse();
	}
	$("head").append('<style type="text/css" id="' + c + '">' + k.join("\n") + "</style>")
};

JRF.removeModuleStyleCss = function(c, b, k) {
	var a = $("#" + c);
	var h = new Array();
	if (a.length == 1) {
		var g = a.html();
		g = g.replace(/{\r\n/g, "{").replace(/\t/g, "").replace(/\r\n}/g, ";}");
		h = g.split("\n");
		a.remove()
	}
	var d = '#'+b;
	if (b == "" || b == "undefined") {
		d = k;
	}
	var tmp = new Array();
	for (var f = h.length - 1; f >= 0; --f) {
		var l = h[f];
		if (l.indexOf(d)==-1) {
			tmp.push(l);
		}
	}
	$("head").append('<style type="text/css" id="' + c + '">' + tmp.join("\n") + "</style>")
};

//功能：移除单条css代码
JRF.removeCtrlStyleCss = function(c, b, k, j) {
	var a = $("#" + c);
	var h = new Array();
	if (a.length == 1) {
		var g = a.html();
		g = g.replace(/{\r\n/g, "{").replace(/\t/g, "").replace(/\r\n}/g, ";+}");
		h = g.split("\n");
		a.remove()
	}
	var d;
	if(k && k != "" & k != "undefined"){
		d = new RegExp("#" + b + " +" + k.replace(".", "\\.") + " *{ *" + j + "[^;]*;+}", "gi");
    }else{
        d = new RegExp("#" + b + " *{ *" + j + "[^;]*;+}", "gi");
	}
	if (b == "" || b == "undefined") {
		d = new RegExp(k.replace(".", "\\.") + " *{ *" + j + "[^;]*;+}", "gi")
	}
	for (var f = h.length - 1; f >= 0; --f) {
		var l = h[f];
		if (l.length == 0 || /^\s$/.test(l) || d.test(l)) {
			h.splice(f, 1)
		}
	}
	$("head").append('<style type="text/css" id="' + c + '">' + h.join("\n") + "</style>")
};

//功能：移除多条css代码
JRF.removeCtrlStyleCssList = function(c, b, j) {
	var a = $("#" + c);
	var k = new Array();
	if (a.length == 1) {
		var h = a.html();
		h = h.replace(/{\r\n/g, "{").replace(/\t/g, "").replace(/\r\n}/g, ";}").replace(/}#/g, "}\r\n#");
		k = h.split("\n");
		a.remove()
	}
	for (var g = k.length - 1; g >= 0; --g) {
		var o = k[g];
		for (var f = 0; f < j.length; ++f) {
			var m = j[f].cls;
			var l = j[f].key;
			//var d = new RegExp("#" + b + " +" + m.replace(".", "\\.") + " *{ *" + l + "[^;]*;}", "gi");
            var d = new RegExp("#" + b + " +" + m.replace(".", "\\.").replace("[","\\[").replace("]","\\]").replace("^","\\^").replace("(","\\(").replace(")","\\)") + " *{ *" + l + "[^;]*;}", "gi");
			if (b == "" || b == "undefined" || j[f].cls.indexOf('Box')>0) {
				d = new RegExp(m.replace(".", "\\.") + " *{ *" + l + "[^;]*;}", "gi")
			}
			if (o.length == 0 || /^\s$/.test(o) || d.test(o)) {
				k.splice(g, 1);
				break
			}
		}
	}
	$("head").append('<style type="text/css" id="' + c + '">' + k.join("\n") + "</style>")
};

//功能：移除模块所有样式
JRF.removeCtrlStyleCssAll = function(c,b) {
    var a = $("#" + c);
    var k = new Array();
    if (a.length == 1) {
        var h = a.html();
        h = h.replace(/{\r\n/g, "{").replace(/\t/g, "").replace(/\r\n}/g, ";}").replace(/}#/g, "}\r\n#");
        k = h.split("\n");
        a.remove()
    }
    for (var g = k.length - 1; g >= 0; --g) {
        var o = k[g];
        var d = new RegExp("#" + b  + "[^;]*;}", "gi");
        if (o.length == 0 || /^\s$/.test(o) || d.test(o)) {
            k.splice(g, 1);
        }
    }
    $("head").append('<style type="text/css" id="' + c + '">' + k.join("\n") + "</style>")
};
//获取导航样式css代码
JRF.getNavStyleCss = function(d,navStyleId){
	var b = $("#" + d);
	if (b.length == 0) {
		return ""
	}
	var h = b.html().split("\n");
	var f;
	if(navStyleId){
		f = new RegExp("#" + navStyleId + ".* *{ *[^;]*;}", "gi");
	}
	var e = new Array();
	for (var g = h.length - 1; g >= 0; --g) {
		var l = h[g];
		var a = l.match(f);
		if(a && a.length >0){e.push(a);}
	}
	return e.join('\n');
}


//功能：获取css样式代码
/**
 * d : <style> 标签 id
 * c : 样式id  列 ：#module7980 {margin-right:0px;} 
 * k : 样式内容
 */
JRF.getCtrlStyleCss = function(d, c, k, j) {
	var b = $("#" + d);
	if (b.length == 0) {
		return ""
	}
	var h = b.html().split("\n");
	var f;
	if(k && c){
		f = new RegExp("#" + c + " +" + k.replace(".", "\\.") + " *{ *" + j + "[^;]*;}", "gi");
	}else if(c){
		f = new RegExp("#" + c + " *{ *[^;]*;}", "gi");
	}else if (c == "" || c == "undefined") {
		f = new RegExp(k.replace(".", "\\.") + " *{ *" + j + "[^;]*;}", "gi")
	}
	var e = new Array();
	for (var g = h.length - 1; g >= 0; --g) {
		var l = h[g];
		var a = l.match(f);
		if (k && c && a && a.length >= 2) {
			return a[1]
		}else{
			if(a && a.length >0){e.push(a);}
		}
	}
	return e.join('\n');
};

//功能：追加css代码
JRF.addCtrlStyle = function(a, d) {
	var c = $("#" + a);
	var f = new Array();
	if (c.length == 1) {
		var b = c.html();
		b = b.replace(/{\r\n/g, "{").replace(/\t/g, "").replace(/\r\n}/g, ";}");
		f = b.split("\n");
		c.remove()
	}
	f.push(d);
	$("head").append('<style type="text/css" id="' + a + '">' + f.join("\n") + "</style>")
};


JRF.randomNumber = function() {
	return randomFromInterval(1, 1e6)
}
function randomFromInterval(e, t) {
	return Math.floor(Math.random() * (t - e + 1) + e)
}

//阻止时间冒泡
JRF.stopBubble = function(e){
	if(e&& JRF.isIE && (JRF.isIE6 || JRF.isIE7 || JRF.isIE8)){
		//如果非ie 符合W3C标准 
		e.stopPropagation();
	}else if(e){
		//是IE 不符合W3C标准的
		window.event.cancelBubble = true;
	}
	return false;
}
/*
 *功能：获取模块样式代码
 *c: style ID
 *d: module Id 
 */
JRF.getModuleStyleCss = function(c,d){
	var b = $("#" + d);
	if (b.length == 0) {
		return ""
	}
	var k = new Array();
	var f = new RegExp("#" + c + " .*{ *[^;]*;*}", "gi");
	var h = b.html().match(f);
	if(!JRF.isNull(h)){
		for (var g = h.length - 1; g >= 0; --g) {
			k.splice(0,0,h[g]);
		}
		return k.join("\n");		
	}
}

//验证  ip 域名  二级域名 ftp
function IsURL(str_url){ 
	  var strRegex = "^((https|http|ftp|rtsp|mms)?://)"  
	  + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@  
	        + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184  
	        + "|" // 允许IP和DOMAIN（域名） 
	        + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.  
	        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名  
	        + "[a-z]{2,6})" // first level domain- .com or .museum  
	        + "(:[0-9]{1,4})?" // 端口- :80  
	        + "((/?)|" // a slash isn't required if there is no file name  
	        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";  
	        var re=new RegExp(strRegex);  
	        if (re.test(str_url)){ 
	            return (true);  
	        }else{  
	            return (false);  
	        } 
} 
//function checkUrl(){
//	var href=$(".link_wz").attr('href');
//	var bool=IsURL(href);
//	if(!bool){
//		$(".link_wz").parent().hide();
//	}
//}

/**
 * 通用上传图片功能
 * f evet事件对象
 * d 事件属性
 * g 回调方法
 * */
JRF.MobiFileUpload2 = function(f, d, g,t) {
    var e = {
        title: "选择图片",
        type: [],
        siteDomain: "",
        maxSize: 50,
        maxUploadList: 10,
        maxChoiceList: 10,
        imgMode: s,
        imgMaxWidth: 2048,
        imgMaxHeight: 2048,
        netFileMode: false,
        material:1
    };
    if (d) {
        $.extend(e, d)
    }
    if (JRF.top._siteVer != "undefined" && JRF.top._siteVer == 10) {
        e.maxSize = 1
    }
    var c = e.title;

    var params = new Array();
    params.push("maxUploadList=" + e.maxUploadList);
    params.push("&maxChoiceList=" + e.maxChoiceList);
    //0：图片类型
	//1:语音类型
	//2:视频类型
	//3:全部
    params.push("&imgMode=" + e.imgMode);
    params.push("&imgMaxWidth=" + e.imgMaxWidth);
    params.push("&imgMaxHeight=" + e.imgMaxHeight);
    params.push("&entry=" + e.entry);
    params.push("&from=pc");//判断是手机还是PC进来
    params.push("&createScale=" + e.createScale);//判断是否生成缩略图
    params.push("&material=" + e.material);//判断是否生成缩略图
    var a="";
    if(t){
    	 a = "/manage/fileUploadV.jsp?type="+1+"&"+params.join("");
    }else{
    	 a = "/manage/fileUploadV.jsp?"+params.join("");
    }
    
    if(e.entry == "QRCodeImgUpload"){
    	a = "fileUploadV.jsp?"+params.join("");
    }
    var b = {
        title: c,
        frameSrcUrl: a,
        width: 985,
        height:490,
        saveBeforePopup: false,
        callArgs: "add",
        closeFunc: g
    };
    if (f) {
        $(f).click(function(){
        	JRF.popupWindow(b);
        })
    } else {
        JRF.popupWindow(b);
    }
};



/*jrf.util.min.js  start*/
if (typeof JRF == "undefined") {
	JRF = {}
}
JRF.loadJavaScript = function(a){
	 _handleExistFile();
	_load();
	
	function _load(){
		var oHead = JRF.dom.find('body').get(0);
		var oScript= JRF.top.document.createElement("script");    
		oScript.type = "text/javascript";    
		oScript.charset = "utf-8";    
		oScript.src = a.file;
		oHead.appendChild(oScript);
		if (oScript.readyState) { //IE
			oScript.onreadystatechange = function () {
				if (oScript.readyState == "loaded" || oScript.readyState == "complete") {
					oScript.onreadystatechange = null; 
					if(a.doneFunc){
						a.doneFunc();
					}
				} 
			}; 
		} else { //标准的DOM浏览器
			oScript.onload = function () {
				if(a.doneFunc){
					a.doneFunc();
				} 
			}; 
		};
	};
	
	function _handleExistFile(){
		var b = false;
		var c = JRF.dom.find('body > script');
		var f = a.file;
		var i = f.lastIndexOf('/');
		var n;
		if(i > -1){
			n = f.substr(i+1,f.length);
		}
		c.each(function(){
			var s = $(this).attr('src');
			if(!JRF.isNull(s)){
				var d = s.lastIndexOf('/');
				var m;
				if(d > -1){
					m = s.substr(d+1,s.length);
				}
				if(n==m){
					$(this).remove();
				}
				b = true;
				return;
			}
		});
		return b;
	};
}

JRF.loadCss = function(file){
	var oHead = document.getElementsByTagName('HEAD').item(0);
	var len = $(oHead).find('link[href="'+file+'"]').length;
	if(len > 0){
		return;
	}
	var oLink = document.createElement('link')
	oLink.charset = "utf-8";   
	oLink.setAttribute("rel", "stylesheet") 
	oLink.setAttribute("type", "text/css")  
	oLink.setAttribute("href", file)
	oHead.appendChild(oLink);
}


/**
 * tab标签切换
 */
JRF.tabEvent = function(obj,cid,tid){
	$('#module'+tid+' .tabUL li').removeClass('tabCheck');
	$('#module'+tid+' #tabLi'+cid).addClass('tabCheck');
	$('#module'+tid+' #tabLi'+cid+'Content').show().siblings().hide();
	// debugger;
 //    if($(".formMiddle"+cid).hasClass(".swiper-container").length > 0){
 //    	// $("#module"+cid).find(".swiper-container").load(location.href+" .swiper-container");
 //        try{
 //            if(eval("swiper"+cid)){
 //                eval("swiper"+cid).update();
 //                // eval("swiper"+cid).pagination.render();
 //            }
 //            if(eval("galleryTop"+cid)){
 //                eval("galleryTop"+cid).update();
 //            }
 //            if(eval("galleryThumbs"+cid)){
 //                eval("galleryThumbs"+cid).update();
 //            }
 //        }catch(e){}
        
 //    }


    if($("#module"+cid).find(".picture_ul").length > 0){
        try{
            if(eval("setHeight"+cid)){
                eval("setHeight"+cid)();
            }
        }catch(e){}
    }
	var moreDiv = $(".formBannerMore"+tid);
	var show_more = $(obj).parent().attr("show_more");
	var show_more_target = $(obj).parent().attr("show_more_target");
	var more_url = $(obj).parent().attr("more_url");
	if(show_more==2){
		//moreDiv.hide();
	}else if(show_more==1){
		var moreA = moreDiv.find("a");
		if(moreA){
			if(show_more_target==1){
				moreA.attr("target","_self");
			}else if(show_more_target==2){
				moreA.attr("target","_blank");
			}
			if($.trim(more_url).length>0){
				moreA.attr("href",more_url)
			}else{
				moreA.attr("href","javascript:void(0);");
			}
		}
		moreDiv.show();
	}
}



/**
 * 版本弹框提示
 * type 类型 网站空间、文件数量、模块数量、栏目数量、文章数量、图册数量、产品数量、产品库数量、问卷数量、在线投票数量、留言数量、会员数量,横幅数量、多语言
 * 
 * */
if(typeof VersionAlertType == "undefined"){
	var VersionAlertType = {};
	VersionAlertType.sitePhysicalSpace = "sitePhysicalSpace";
	VersionAlertType.fileNum = "fileNum";
    VersionAlertType.fileSize = "fileSize";
	VersionAlertType.moduleNum = "moduleNum";
	VersionAlertType.siteChannelNum = "siteChannelNum";
	VersionAlertType.siteContentNum = "siteContentNum";
	VersionAlertType.photoAlbumNum = "photoAlbumNum";
	VersionAlertType.productNum = "productNum";
	VersionAlertType.productLibraryNum = "productLibraryNum";
	VersionAlertType.questionNum = "questionNum";
	VersionAlertType.voteNum = "voteNum";
	VersionAlertType.guestbookNum = "guestbookNum";
	VersionAlertType.memberNum = "memberNum";
	VersionAlertType.bannerNum = "bannerNum";
    VersionAlertType.multilanguage = "multilanguage";
	
 }

JRF.siteVersionAlert = function(type){
	/*JRF.popupWindow({
		title: "操作提示",
		frameSrcUrl: "/jrfadmin/jrfcms/module/siteUpgradeReminder.do?type=" + type,
		width: 500,
		height: 240,
		closeFunc: function(back) {

		}
	});*/
    $.ajax({
        url: "/jrfadmin/jrfcms/module/siteUpgradeReminder.do?type=" + type,
        success: function(data) {
            JRF.top.$("body").append(data);
        }
    });
}
/*jrf.util.min.js  end*/

/*pony.js  start*/
Pn = {
		version : '1.0'
	};
	/**
	 * get url parameter
	 */
	Pn.getParam = function(key) {
		var params = location.search.substr(1).split('&');
		var kv;
		for ( var i = 0; i < params.length; i++) {
			kv = params[i].split('=');
			if (kv[0] == key) {
				return kv[1];
			}
		}
	};

	Pn.checkbox = function(name, checked){
		if(checked){
			$("input[type='checkbox'][name="+name+"]").each(function(){
				$(this).next().addClass("checkboxChecked");
				$(this).parent().parent("tr").addClass("tdonclick");
				$(this).attr("checked","checked");
			});
		}else{
			$("input[type='checkbox'][name="+name+"]").each(function(){
				$(this).next().removeClass("checkboxChecked");
				$(this).parent().parent("tr").removeClass("tdonclick");
				$(this).removeAttr("checked");
			});
		}
	}

	/**
	 * 复选框选中的个数
	 * 
	 * @param name
	 *            string of checkbox name
	 */
	Pn.checkedCount = function(name) {
		
		var count=0;
		$("input[type=checkbox][name='"+name+"']").each(function(){
			
			// console.log($(this));
			if($(this).attr('checked')){
				
				if($(this).next().hasClass("checkboxChecked")){
					count++;
				}else{
					$(this).attr('checked','');
				}
			}
		});
		
		return count;
	}
	
	Pn.getCheckedIds = function(name){
		var array = new Array();
		$("input[type=checkbox][name='"+name+"']").each(function(){
			if($(this).attr('checked')){
				array.push($(this).val());
			}
		});
		return array;
	}
	
	Pn.cleanChecked = function(name){
		$("input[type=checkbox][name='"+name+"']").each(function(){
			$(this).next().removeClass("checkboxChecked").end().removeAttr("checked");
		})
	}
	/**
	 * 通过点击td 标签选中checkbox
	 */
	Pn.lineSelect = function(obj) {
		var checkLabel = $(obj).parent().find('.checkbox');
		$(checkLabel).click();
		var checked = checkLabel.hasClass('checkboxChecked');
		if(checked){
			var tableCheckBoxes = $('#pn-ltable .checkbox').length-1;//去掉全选复选框
			var hasCheckedBoxes = $('#pn-ltable .checkboxChecked').length;
			if(hasCheckedBoxes == tableCheckBoxes){
				$(obj).parent().parent().parent().find("th .checkbox").addClass('checkboxChecked');
				$(obj).parent().parent().parent().find("th .checkbox").prev().attr('checked',checked);
			}
		}else{
			if($(obj).parent().parent().parent().find("th .checkbox").hasClass('checkboxChecked')){
				$(obj).parent().parent().parent().find("th .checkbox").removeClass('checkboxChecked');
				$(obj).parent().parent().parent().find("th .checkbox").prev().removeAttr('checked');	
			}
		}
	};

	Pn.Show = function(id) {
		$('#' + id).show();
	}

	Pn.Hide = function(id) {
		$('#' + id).hide();
	}

	Pn.ShowHide = function(id) {
		if($('.cmsmodel').length > 0){
			$('.cmsmodel').hide();		
		}
		var sh = $('#'+id);
		if (sh.css('display') == 'none') {
			sh.show();
		} else {
			sh.hide();
		}
		setTimeout("$('#"+id+"').hide()",5000);
	}
	
	/**
	 *  设置显示隐藏 不设置显示计时
	 */
	Pn.ShowHideNoTimeOut = function(id) {
		if($('.cmsmodel').length > 0){
			$('.cmsmodel').hide();		
		}
		var sh = $('#'+id);
		if (sh.css('display') == 'none') {
			sh.show();
		} else {
			sh.hide();
		}
	}

	/**
	 * 颜色选择器 需要jquery.icolor.js支持
	 */
	Pn.ColorPicker = function(input) {
		var icolorId = $(input).attr('id')
		$(input).icolor(
				{
					colors : [ "ff0000", "000000", "0000ff", "003300", "003366",
							"000080", "333399", "333333", "800000", "ff6600",
							"808000", "008000", "008080", "333300", "666699",
							"808080", "993300", "ff9900", "99cc00", "339966",
							"33cccc", "3366ff", "800080", "999999", "ff00ff",
							"ffcc00", "ffff00", "00ff00", "00ffff", "00ccff",
							"993366", "cccccc", "ff99cc", "ffcc99", "ffff99",
							"ccffcc", "ccffff", "99ccff", "cc99ff", "ffffff" ],
					valueTargetId : $('#' + icolorId + "-value"),
					viewTargetId : $('#' + icolorId + "-view")
				});
	}

	$.fn.extend( {
		colorPicker : function() {
			new Pn.ColorPicker(this);
		}
	});

	/**
	 * 文本加粗
	 */
	Pn.TxtBold = function(viewId, valueId) {
		var view = $("#" + viewId);
		var value = $("#" + valueId);
		var fontWeight = view.css("font-weight");
		if (fontWeight == 400) {
			view.css( {
				'font-weight' : 'bold'
			});
			value.val(true);
		} else {
			view.css( {
				'font-weight' : '400'
			});
			value.val(false);
		}
	}

	Pn.addBold = function(viewId,valueId){
		var view = JRF.dom.find("#" + viewId);
		var value = JRF.dom.find("#" + valueId);
		var fontWeight = view.css("font-weight");
		if (fontWeight == 400) {
			view.css( {
				'font-weight' : 'bold'
			});
			value.val(true);
		} else {
			view.css( {
				'font-weight' : '400'
			});
			value.val(false);
		}
	}
	/**
	 * left页面滚动条
	 * 使用于div 
	 */
	Pn.LeftPageInit = function(div){
		var leftTopHeight = $('#leftTopDiv').height();
		var h = $(window).height() - leftTopHeight;
		$(div).height(h);
		//自定义滚动条样式
		$(div).mCustomScrollbar({
			scrollButtons:{
				enable:true
			}
		});
	}

	/**
	*right页面滚动条
	*适用于div
	*/
	Pn.RightPageInit = function(div){
		var rightTopHeight = $(div).prev().height();
		var h = $(window).height() - rightTopHeight;
		$(div).height(h); 
		
	}

	$.fn.extend( {
		leftPageInit : function() {
			new Pn.LeftPageInit(this);
		}
	});

	$.fn.extend( {
		rightPageInit : function() {
			new Pn.RightPageInit(this);
		}
	});

	/**
	 * 功能：自定义单选框 radio 
	 * @param container
	 */
	Pn.RadioInit = function(container){
		if(JRF.isNull(container)){
			container=$(body);	
		}
		$(container).find(':radio').hide();
		$(container).find(".radio").click(function(){
			if(!$(this).hasClass("radioChecked")){
				$(this).prev().attr('checked',true).siblings().removeAttr('checked');
				$(this).prev().click();
				$(this).addClass('radioChecked').siblings().removeClass('radioChecked');
				$(this).prev().attr('checked',true).siblings().removeAttr('checked');
			}
		});
		//样式二选中事件
		$(container).find(".acradio").click(function(){
			if(!$(this).hasClass("achecked")){
				$(this).prev().attr('checked',true).siblings().removeAttr('checked');
				$(this).prev().click();
				$(this).addClass('achecked').parent().siblings().find(".acradio").removeClass('achecked');
				$(this).prev().attr('checked',true).parent().siblings().find(":radio").removeAttr('checked');
			}
		});
	};


	/**
	*功能：自定义单选按钮
	*/
	$.fn.extend({
		radioInit: function(){
			new Pn.RadioInit(this);
		}
	});

	/**
	 * 功能：自定义checbox 复选框
	 */
	Pn.CheckboxInit = function(container){
		if(!container){
			container = $(body);	
		}
		$(container).find(':checkbox').hide();
		$(container).find('.checkbox').click(function(){
			var checkbox = $(this).prev();
			$(this).toggleClass('checkboxChecked');
			var checked = $(this).hasClass('checkboxChecked');
			checkbox.attr('checked',checked);
			checkbox.click();
			checkbox.attr('checked',checked);
			if($(this).parents('table').hasClass('pn-ltable')){
				$(this).parents('tr').toggleClass('tdonclick');	
				if(checked){
					var tableCheckBoxes = $('#pn-ltable .checkbox').length-1;//去掉全选复选框
					var hasCheckedBoxes = $('#pn-ltable .checkboxChecked').length;
					if(hasCheckedBoxes == tableCheckBoxes){
						$(this).parent().parent().parent().parent().find("th .checkbox").addClass('checkboxChecked');
						$(this).parent().parent().parent().parent().find("th .checkbox").prev().attr('checked',checked);
					}
				}else{
					if($(this).parent().parent().parent().parent().find("th .checkbox").hasClass('checkboxChecked')){
						$(this).parent().parent().parent().parent().find("th .checkbox").removeClass('checkboxChecked');
						$(this).parent().parent().parent().parent().find("th .checkbox").prev().removeAttr('checked');	
					}
				}
			}
		});
	}









	$.fn.extend({
		checkboxInit: function(){
			Pn.CheckboxInit(this);	
		}
	});

	/**
	 * 功能：页面初始调优
	 */
	$.fn.extend({
		formInit: function(){
			$(this).radioInit();
			$(this).checkboxInit();	
		}	
	});

	/**
	*功能：对两个标签进行class切换
	*/
	Pn.resetClass = function(id1,id2,className1,className2){
		$('#'+id1).addClass(className1).removeClass(className2);
		$('#'+id2).addClass(className2).removeClass(className1);
	}


	Pn.divHideByMouseout = function(e,o){
		var x = e.clientX;
		var y = e.clientY;
		var dxlft = $(o).offset().left;
		var dytop = $(o).offset().top;
		var dxrgt = dxlft + o.offsetWidth;
		var dybtm = dytop + o.offsetHeight;
		if(x < dxlft || x > dxrgt || y < dytop || y > dybtm){
			$('.global_copy').removeClass('global_copy');
			$(o).hide('blind');
		}
	}

	Pn.messageHideByMouseout = function(e,o){
		var x = e.clientX;
		var y = e.clientY;
		var dxlft = $(o).offset().left;
		var dytop = $(o).offset().top;
		var dxrgt = dxlft + o.offsetWidth;
		var dybtm = dytop + o.offsetHeight;
		if(x < dxlft || x > dxrgt || y < dytop || y > dybtm){
			$('.worklist').removeClass('worklist');
			$(o).hide('blind');
		}
	}
	/*pony.js  end*/
	
	function longStrView(varObject,varLength){
		var str = varObject.text().replace(/^\s*/,"").replace(/\s*$/,"");
		if(getLength(str) > varLength){
			varObject.attr("title",str);
			varObject.text(strLeft(str,varLength-3) + "...");
		}
	}

	/**
	 * 长度取得
	 * 汉字算2位
	 */
	function getLength(varStr){
		var length = varStr.length;
	  	var regC = /^[\u4E00-\u9FA5]/;
		for(var i=0;i<varStr.length;i++){
			if(regC.test(varStr.charAt(i))){
				length+=1;
			}
		}
		return length;
	}

	/**
	 * 截字符串
	 * 最后一位是汉字，不截取该汉字
	 */
	function strLeft(varStr,varLength){
		var length = 0;
	  	var regC = /^[\u4E00-\u9FA5]/;
		for(var i=0;i<varStr.length;i++){
			if(regC.test(varStr.charAt(i))){
				varLength -=2;
				length+=1;
			}else{
				varLength -=1;
				length+=1;
			}
			if(varLength<0){
				length-=1;
				break;
			}
			if(varLength==0){
				break;
			}
		}
		return varStr.substring(0,length);
	}

//后台内容右侧内容的最小高度
function rightFrameHeight(){
        var consoleMargin = parseInt($(".console_border").css("margin-top"))+ parseInt($(".console_border").css("margin-bottom")) +2;
        var conententHeight =$(window).height()-consoleMargin;
        $(".console_border").css("min-height",conententHeight);
        var consolePadding = parseInt($(".console_border").css("margin-left"))+ parseInt($(".console_border").css("margin-right"))+2;
        var consoleWidth = $(window).width() -consolePadding;
        $("#contentBut").width(consoleWidth);
}
//后台左侧结构的最小高度
function treeNavHeight(){
    var win_height = $(window).height();
    var marginHeight = parseInt($(".left").css("margin-top")) + parseInt($(".left").css("margin-bottom"));
    var paddingHeight = parseInt($(".left").css("padding-bottom")) + parseInt($(".left").css("padding-top"));
    var i =win_height-marginHeight-paddingHeight-2;
    $(".c_left").height(i);
}

/**
 * from表单参数拼接
 * 
 * @elem 表单id
 */
JRF.getParamsUrl = function(elem) {
	var params = {};
	$(elem).find("input").each(function() {
		if ($(this).attr("name")) {
			var key = $(this).attr("name");
			var value = "";
			if ($(this).val()) {
				value = $(this).val();
			}
			if (value != "") {
				params[key] = value;
			}
		}
	});
	var urlParams = new Array();
	$.each(params, function(key, val) {
		urlParams.push(key + "=" + val);
	});
	return urlParams.join("&");
}

/**
 * 超长字符串显示处理 本方法用于处理字符串长度超过单元格显示长度问题、title显示【原字符串】、单元格显示【截取字符串】
 * 
 * @varObject 目标单元格对象
 * @varLength 页面单元格显示长度
 */
JRF.longStrShow = function(varObject, varLength) {
	var str = varObject.text().replace(/^\s*/, "").replace(/\s*$/, "");
	varObject.attr("title", str);
	if (JRF.getLength(str) > varLength) {
		varObject.text(JRF.strLeft(str, varLength));
	}
}

/**
 * 超长字符串显示处理 本方法用于处理字符串长度超过单元格显示长度问题、title显示【原字符串】、单元格显示【截取字符串】
 * 
 * @varObject 目标单元格对象
 * @varLength 页面单元格显示长度
 */
JRF.longStrView = function(varObject, varLength) {
	var str = varObject.text().replace(/^\s*/, "").replace(/\s*$/, "");
	if (JRF.getLength(str) > varLength) {
		varObject.attr("title", str);
		varObject.text(JRF.strLeft(str, varLength - 3) + "...");
	}
}

/**
 * 获取内容长度，汉字占2位字节
 */
JRF.getLength = function(varStr) {
	var length = varStr.length;
	var regC = /^[\u4E00-\u9FA5]/;
	for (var i = 0; i < varStr.length; i++) {
		if (regC.test(varStr.charAt(i))) {
			length += 1;
		}
	}
	return length;
}

/**
 * 小数位补齐
 */
JRF.toDecimal2 = function(obj) {
	var f = parseFloat($(obj).val());
	if (isNaN(f)) {
		return false;
	}
	f = Math.round(f * 100) / 100;
	var s = f.toString();
	var rs = s.indexOf('.');
	if (rs < 0) {
		rs = s.length;
		s += '.';
	}
	while (s.length <= rs + 2) {
		s += '0';
	}
	obj.value = s;
}

/**
 * 截字符串 最后一位是汉字，不截取该汉字
 * 
 * @varStr 字符串
 * @varLength 长度
 */
JRF.strLeft = function(varStr, varLength) {
	var length = 0;
	var regC = /^[\u4E00-\u9FA5]/;
	for (var i = 0; i < varStr.length; i++) {
		if (regC.test(varStr.charAt(i))) {
			varLength -= 2;
			length += 1;
		} else {
			varLength -= 1;
			length += 1;
		}
		if (varLength < 0) {
			length -= 1;
			break;
		}
		if (varLength == 0) {
			break;
		}
	}
	return varStr.substring(0, length);
}
/**
 * textarea长度限制
 * 
 */
JRF.frontTextAreaLen = function(obj, len, msg) {
	var value = $(obj).val();
	if ($.trim(value) != "") {
		// 验证长度
		var textLen = JRF.getLength(value);
		if (textLen > len) {
			$(obj).val(JRF.strLeft(value, len));
		} else {
			var msgLen = len - textLen;
			$("#" + msg).text(msgLen);
		}
	} else {
		$("#" + msg).text(len);
	}
}

/**
 * 前台评分评论功能
 */
JRF.frontAppraiseScoreEvent = function(formId, contentId, scoreId) {
	var flg = true;
	var content = $("#" + contentId).val();
	var score = $("#" + scoreId).val();
	if (!content || content == "") {
		$.alert("请填写评论内容！");
		return false;
	}
	if (!score || score == 0) {
		$.alert("请选择评分！");
		return false;
	}
	$.ajax({
		url : '/mAppraise.jspx',
		type : 'post',
		dataType : 'json',
		data : $("#" + formId).serialize(),
		success : function(data) {
			if (data.code == "200") {
				$("#" + contentId).val("");
				$("#" + contentId).trigger("change");
				$("#" + scoreId).val(0);
				$("#" + formId).find(".star").removeClass("active")
				$("#" + formId).find("#star_info").text("0分");
				layer.msg("评论成功！");
			}
		}
	});
}

/**
 * 前台评论功能
 */
JRF.frontAppraiseEvent = function(formId, contentId) {
	var content = $("#" + contentId).val();
	if (!content || content == "") {
		layer.msg("请填写评论内容！");
		return false;
	}
	$.ajax({
		url : '/mAppraise.jspx',
		type : 'post',
		dataType : 'json',
		data : $("#" + formId).serialize(),
		success : function(data) {
			if (data.code == "200") {
				$("#" + contentId).val("");
				$("#" + contentId).trigger("change");
				layer.msg("评论成功！");
			}
		}
	});
}
/**
 * 星标点击事件
 * */

JRF.starClick = function(obj, id, hid) {
	$(obj).siblings().removeClass("active").end().addClass("active");
	var star = $(obj).attr("attr_star");
	$("#" + id).text(star+starPoint);
	$("#" + hid).val(star);
}
/*******************************************************************************
 * textarea 事件绑定
 * 
 */
JRF.frontTextAreaEvent = function(obj, len, msg) {
	// 评论内容限制
	$(obj).blur(function() {
		JRF.frontTextAreaLen(this, len, msg);
	}).change(function() {
		JRF.frontTextAreaLen(this, len, msg);
	}).focus(function() {
		JRF.frontTextAreaLen(this, len, msg);
	}).focusin(function() {
		JRF.frontTextAreaLen(this, len, msg);
	}).focusout(function() {
		JRF.frontTextAreaLen(this, len, msg);
	}).keydown(function() {
		JRF.frontTextAreaLen(this, len, msg);
	}).keypress(function() {
		JRF.frontTextAreaLen(this, len, msg);
	}).keyup(function() {
		JRF.frontTextAreaLen(this, len, msg);
	});
}

//  content list show all
function showQuestionAll(obj,showtipe){
    var showname = $(obj).attr("show-name");
    var btnHtml;
    if(showname==0){
        $(obj).parent().height('auto');
        $(obj).parent().css('padding-bottom',28);
        $(obj).attr("show-name",1);

        if("undefined" == typeof SiteLanguage || SiteLanguage == "cn"){
            btnHtml = '收起';
        }else if(SiteLanguage == "en"){
            btnHtml = 'Take up';
        }else if(SiteLanguage == "tcn"){
            btnHtml = '展開';
        }else if(SiteLanguage == "jap"){
            btnHtml = '収まる';
        }else if(SiteLanguage == "kor"){
            btnHtml = '거두어들이다';
        }else if(SiteLanguage == "lo"){
            btnHtml = 'ล่มสลาย';
        }else if(SiteLanguage == "th"){
            btnHtml = '거두어들이다';
        }else if(SiteLanguage == "es"){
            btnHtml = 'ล่มสลาย';
        }else if(SiteLanguage == "ru"){
            btnHtml = 'убрать';
        }else if(SiteLanguage == "fra"){
            btnHtml = "убрать";
        }else if(SiteLanguage == "it"){
            btnHtml = 'Ritirate';
        }else if(SiteLanguage == "de"){
            btnHtml = 'Einklappen';
        }

        $(obj).html(btnHtml);
    }else{
        $(obj).parent().height(46);
        $(obj).parent().css('padding-bottom',10);
        $(obj).attr("show-name",0);
        if("undefined" == typeof SiteLanguage || SiteLanguage == "cn"){
            btnHtml = '展开';
        }else if(SiteLanguage == "en"){
            btnHtml = 'open';
        }else if(SiteLanguage == "tcn"){
            btnHtml = '展開';
        }else if(SiteLanguage == "jap"){
            btnHtml = '展開する';
        }else if(SiteLanguage == "kor"){
            btnHtml = 'การขยายตัว';
        }else if(SiteLanguage == "lo"){
            btnHtml = 'ການຂະຫຍາຍຕົວ';
        }else if(SiteLanguage == "th"){
            btnHtml = 'Desdoblar';
        }else if(SiteLanguage == "es"){
            btnHtml = 'Desdoblar';
        }else if(SiteLanguage == "ru"){
            btnHtml = 'Déplier';
        }else if(SiteLanguage == "fra"){
            btnHtml = "Déplier";
        }else if(SiteLanguage == "it"){
            btnHtml = 'espansione';
        }else if(SiteLanguage == "de"){
            btnHtml = 'Entfalten';
        }
        $(obj).html(btnHtml);
    }
}
/**
 * 登录
 * */
JRF.login = function() {
    var loginTip;
    if("undefined" == typeof SiteLanguage || SiteLanguage == "cn"){
        loginTip = '您还未登录，是否跳转到登录页？';
    }else if(SiteLanguage == "en"){
        loginTip = 'You are not logged in,<br> do you jump to the login page?';
    }else if(SiteLanguage == "tcn"){
        loginTip = '您還未登錄，是否跳轉到登入頁？';
    }else if(SiteLanguage == "jap"){
        loginTip = 'あなたはまだ登録されていない、登録ページに遷移するか？';
    }else if(SiteLanguage == "kor"){
        loginTip = '당신 아직 로그인 여부를 바로가기 등록 페이지?';
    }else if(SiteLanguage == "lo"){
        loginTip = 'ເຈົ້າຍັງບໍ່ໄດ້ເຂົ້າສູ່ລະບົບ,<br> ບໍ່ວ່າຈະເປັນເພື່ອເຕັ້ນໄປຫາຫນ້າເຂົ້າສູ່ລະບົບ?';
    }else if(SiteLanguage == "th"){
        loginTip = 'คุณยังไม่ได้เข้าสู่ระบบ , <br>ว่ากระโดดไปยังหน้าเข้าสู่ระบบ？';
    }else if(SiteLanguage == "es"){
        loginTip = 'Si usted no ha firmado aún,<br> saltar a la página de inicio de sesión？';
    }else if(SiteLanguage == "ru"){
        loginTip = 'Вы  не вошли в систему  , <br>если  перейти на  страницу входа ？';
    }else if(SiteLanguage == "fra"){
        loginTip = "Vous n'avez pas enregistré,<br> si le saut à la page d'ouverture de session?";
    }else if(SiteLanguage == "it"){
        loginTip = 'Non Hai Fatto saltare il Login, se la Pagina？';
    }else if(SiteLanguage == "de"){
        loginTip = 'Ob sie nicht angemeldet, <br>springen auf die login - Seite?';
    }
	$.confirm(loginTip, function(r) {
		if(r){
			window.location.href="http://"+locationDomain+"/r_member/login.jspx";
		}
	});
}
/**
 * format金额（n表示小数位，不存在时默认为2）
 */
JRF.fmoney = function(s, n) {
	n = n > 0 && n <= 20 ? n : 2;
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
	var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
	t = "";
	for (i = 0; i < l.length; i++) {
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
	}
	return t.split("").reverse().join("") + "." + r;
}

/**
 * 将数值四舍五入(保留2位小数)后格式化成金额形式
 * 
 * @param num
 *            数值(Number或者String)
 * @return 金额格式的字符串,如'1,234,567.45'
 * @type String
 */
JRF.formatCurrencyTwo = function(num) {
	num = num.toString().replace(/\$|\,/g, '');
	if (isNaN(num)) {
		num = "0";
	}
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num * 100 + 0.50000000001);
	cents = num % 100;
	num = Math.floor(num / 100).toString();
	if (cents < 10) {
		cents = "0" + cents;
	}
	for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
		num = num.substring(0, num.length - (4 * i + 3)) + ','
				+ num.substring(num.length - (4 * i + 3));
	}
	if ((((sign) ? '' : '-') + num + '.' + cents) < 10000) {
		return (((sign) ? '' : '-') + num + '.' + cents);
	} else {
		return (((sign) ? '' : '-') + num);
	}
}

/**
 * 将数值四舍五入(保留1位小数)后格式化成金额形式
 * 
 * @param num
 *            数值(Number或者String)
 * @return 金额格式的字符串,如'1,234,567.4'
 * @type String
 */
JRF.formatCurrency = function(num) {
	num = num.toString().replace(/\$|\,/g, '');
	if (isNaN(num)) {
		num = "0";
	}
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num * 10 + 0.50000000001);
	cents = num % 10;
	num = Math.floor(num / 10).toString();

	for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
		num = num.substring(0, num.length - (4 * i + 3)) + ','
				+ num.substring(num.length - (4 * i + 3));
	}
	return (((sign) ? '' : '-') + num + '.' + cents);
}

/**
 * 将数值四舍五入后格式化成金额形式
 * 
 * @param num
 *            数值(Number或者String)
 * @return 金额格式的字符串,如'1,234,567.4'
 * @return 金额格式的字符串后,如'1,234,568'
 * @type String
 */
JRF.formatSideLength = function(num) {
	num = num.toString().replace(/\$|\,/g, '');
	if (isNaN(num)) {
		num = "0";
	}
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num * 10 + 0.50000000001);
	cents = num % 10;
	num = Math.floor(num / 10).toString();

	for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
		num = num.substring(0, num.length - (4 * i + 3)) + ','
				+ num.substring(num.length - (4 * i + 3));
	}
	return (((sign) ? '' : '-') + num);
}


/** 整数输入限制 */
JRF.integerKeyPress = function (obj) {
	// 先把非数字的都替换掉，除了数字和.
	obj.value = obj.value.replace(/[^1-9]/g, "");
}

/** 小数输入限制 */
JRF.numKeyPress = function(obj) {
	// 先把非数字的都替换掉，除了数字和.
	obj.value = obj.value.replace(/[^\d.]/g, "");
	// 必须保证第一个为数字而不是.
	obj.value = obj.value.replace(/^\./g, "");
	// 保证只有出现一个.而没有多个.
	obj.value = obj.value.replace(/\.{2,}/g, ".");
	// 保证.只出现一次，而不能出现两次以上
	obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$",".");
	// 只能输入两个小数
	obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
}

JRF.oneDecimals = function (obj) {
	// 先把非数字的都替换掉，除了数字和.
	obj.value = obj.value.replace(/[^\d.]/g, "");
	// 必须保证第一个为数字而不是.
	obj.value = obj.value.replace(/^\./g, "");
	// 保证只有出现一个.而没有多个.
	obj.value = obj.value.replace(/\.{2,}/g, ".");
	// 保证.只出现一次，而不能出现两次以上
	obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$",".");
	// 只能输入1个小数
	obj.value = obj.value.replace(/^(\-)*(\d)\.(\d).*$/, '$1$2.$3');
}

JRF.showLoading = function(){

    if($("#topBodyBg").length == 0){
        var c = '<div id="topBodyBg" class="popupBg" style="filter: alpha(opacity=50); opacity:0.5;"></div>';
        if(JRF.isIE6()){
            JRF.top.$(c).appendTo("body");
        }else{
            JRF.win.$(c).appendTo(JRF.top.document.body);
        }
    }
    $("#topBodyBg").show();
}

JRF.hideLoading = function(){
    JRF.top.$("#topBodyBg").hide();
}

JRF.html_encode = function(str){
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br/>");
    return s;
}

JRF.html_decode = function(str){
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br\/>/g, "\n");
    return s;
}

/**
 * 验证是否为智能手机
 */
JRF.checkMobile = function(){
    var flag = false;
    var agent = navigator.userAgent.toLowerCase();
    var keywords = [ "android", "iphone", "ipod", "ipad", "windows phone", "mqqbrowser" ];
    //排除 Windows 桌面系统
    if (!(agent.indexOf("windows nt") > -1) || (agent.indexOf("windows nt") > -1 && agent.indexOf("compatible; msie 9.0;") > -1)) {
        //排除苹果桌面系统
        if (!(agent.indexOf("windows nt") > -1) && !agent.indexOf("macintosh") > -1 ) {
            for (var item in keywords) {
                if (agent.indexOf(item) > -1 ) {
                    flag = true;
                    break;
                }
            }
        }
    }
    return flag;
}


// 手机商城页面定位到获取焦点的input
if (/Android [4-6]/.test(navigator.appVersion)) {
   window.addEventListener('resize', function () {
     if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        window.setTimeout(function () {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      }
   })
};

/**
 * content 消息
 * l 层 关闭  true 自动关闭
 * type 类型 1 页面层 2 loading 层
 * */
JRF.layer = function(content,type){
    if(type){
        if(type==1){
            jrflayer.open({
                type: 1,
                content: content,
                anim: 'up',
                style: 'position:fixed; bottom:20%; left:0; width: 100%; height: 200px; padding:10px 0; border:none;'
            });
        }else if(type==2){
            var opt = {type: 2};
            if(content&&content!=''){
                opt.content = content;
            }
            jrflayer.open(opt);
        }
    }else{
        //提示
        jrflayer.open({
            content: content,
            skin: 'msg',
            time: 3 //2秒后自动关闭
        });
    }
}
//弹出层JS
;! function(e) {
    "use strict";
    var t = document,
        n = "" +
            "",
        i = "getElementsByClassName",
        a = function(e) {
            return t[n](e)
        },
        s = {
            type: 0,
            shade: !0,
            shadeClose: !0,
            fixed: !0,
            anim: "scale"
        },
        l = {
            extend: function(e) {
                var t = JSON.parse(JSON.stringify(s));
                for (var n in e) t[n] = e[n];
                return t
            },
            timer: {},
            end: {}
        };
    l.touch = function(e, t) {
        e.addEventListener("click", function(e) {
            t.call(this, e)
        }, !1)
    };
    var r = 0,
        o = ["jrf-m-layer"],
        c = function(e) {
            var t = this;
            t.config = l.extend(e), t.view()
        };
    c.prototype.view = function() {
        var e = this,
            n = e.config,
            s = t.createElement("div");
        e.id = s.id = o[0] + r, s.setAttribute("class", o[0] + " " + o[0] + (n.type || 0)), s.setAttribute("index", r);
        var l = function() {
                var e = "object" == typeof n.title;
                return n.title ? '<h3 style="' + (e ? n.title[1] : "") + '">' + (e ? n.title[0] : n.title) + "</h3>" : ""
            }(),
            c = function() {
                "string" == typeof n.btn && (n.btn = [n.btn]);
                var e, t = (n.btn || []).length;
                return 0 !== t && n.btn ? (e = '<span yes type="1">' + n.btn[0] + "</span>", 2 === t && (e = '<span no type="0">' + n.btn[1] + "</span>" + e), '<div class="jrf-m-layerbtn">' + e + "</div>") : ""
            }();
        if (n.fixed || (n.top = n.hasOwnProperty("top") ? n.top : 100, n.style = n.style || "", n.style += " top:" + (t.body.scrollTop + n.top) + "px"), 2 === n.type && (n.content = '<i></i><i class="jrf-m-layerload"></i><i></i><p>' + (n.content || "") + "</p>"), n.skin && (n.anim = "up"), "msg" === n.skin && (n.shade = !1), s.innerHTML = (n.shade ? "<div " + ("string" == typeof n.shade ? 'style="' + n.shade + '"' : "") + ' class="jrf-m-layershade"></div>' : "") + '<div class="jrf-m-layermain" ' + (n.fixed ? "" : 'style="position:static;"') + '><div class="jrf-m-layersection"><div class="jrf-m-layerchild ' + (n.skin ? "jrf-m-layer-" + n.skin + " " : "") + (n.className ? n.className : "") + " " + (n.anim ? "layui-m-anim-" + n.anim : "") + '" ' + (n.style ? 'style="' + n.style + '"' : "") + ">" + l + '<div class="jrf-m-layercont">' + n.content + "</div>" + c + "</div></div></div>", !n.type || 2 === n.type) {
            var d = t[i](o[0] + n.type),
                y = d.length;
            y >= 1 && jrflayer.close(d[0].getAttribute("index"))
        }
        document.body.appendChild(s);
        var u = e.elem = a("#" + e.id)[0];
        n.success && n.success(u), e.index = r++, e.action(n, u)
    }, c.prototype.action = function(e, t) {
        var n = this;
        e.time && (l.timer[n.index] = setTimeout(function() {
            jrflayer.close(n.index)
        }, 1e3 * e.time));
        var a = function() {
            var t = this.getAttribute("type");
            0 == t ? (e.no && e.no(), jrflayer.close(n.index)) : e.yes ? e.yes(n.index) : jrflayer.close(n.index)
        };
        if (e.btn)
            for (var s = t[i]("jrf-m-layerbtn")[0].children, r = s.length, o = 0; o < r; o++) l.touch(s[o], a);
        if (e.shade && e.shadeClose) {
            var c = t[i]("jrf-m-layershade")[0];
            l.touch(c, function() {
                jrflayer.close(n.index, e.end)
            })
        }
        e.end && (l.end[n.index] = e.end)
    }, e.jrflayer = {
        v: "2.0",
        index: r,
        open: function(e) {
            var t = new c(e || {});
            return t.index
        },
        close: function(e) {
            var n = a("#" + o[0] + e)[0];
            n && (n.innerHTML = "", t.body.removeChild(n), clearTimeout(l.timer[e]), delete l.timer[e], "function" == typeof l.end[e] && l.end[e](), delete l.end[e])
        },
        closeAll: function() {
            for (var e = t[i](o[0]), n = 0, a = e.length; n < a; n++) jrflayer.close(0 | e[0].getAttribute("index"))
        }
    }, "function" == typeof define ? define(function() {
        return jrflayer
    }) : function() {
        var e = document.scripts,
            n = e[e.length - 1],
            i = n.src,
            a = i.substring(0, i.lastIndexOf("/") + 1);
        try{

            n.getAttribute("merge") || document.head.appendChild(function() {
                var e = t.createElement("link");
                return e.href = "/res/jrfcms_mobi/css/jrf.layer.css?2.0", e.type = "text/css", e.rel = "styleSheet", e.id = "layermcss", e
            }())
        }catch(e){}
    }()
}(window);
