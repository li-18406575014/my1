Cms = {};

Cms.search = function(){
	var q = encodeURIComponent($('#txtKey').val());
	$('#searchKey').val(q);
	$('#esearchForm').submit();
}

Cms.esearch = function(tag){
	var q = encodeURIComponent(tag);
	$('#searchSelect').val(0);
	$('#searchKey').val(q);
	$('#esearchForm').submit();
}

/**
 * 浏览次数
 */
Cms.viewCount = function(base, contentId, viewId, commentId, downloadId, upId,
		downId) {
	viewId = viewId || "views";
	commentId = commentId || "comments";
	downloadId = downloadId || "downloads";
	upId = upId || "ups";
	downId = downId || "downs";
	$.getJSON(base + "/content_view.jspx", {
		contentId : contentId
	}, function(data) {
		if (data.length > 0) {
			$("#" + viewId).text(data[0]);
			$("#" + commentId).text(data[1]);
			$("#" + downloadId).text(data[2]);
			$("#" + upId).text(data[3]);
			$("#" + downId).text(data[4]);
		}
	});
}

/**
 * 站点流量统计
 */
Cms.siteFlow = function(base, page, referer) {
	$.get(base + "/flow_statistic.jspx", {
		page : page,
		referer : referer
	});
}
/**
 * 成功返回true，失败返回false。
 */
Cms.up = function(base, contentId, origValue, upId) {
	upId = upId || "ups";
	var updown = $.cookie("_cms_updown_" + contentId);
	if (updown) {
		return false;
	}
	$.cookie("_cms_updown_" + contentId, "1");
	$.get(base + "/content_up.jspx", {
		"contentId" : contentId
	}, function(data) {
		$("#" + upId).text(origValue + 1);
	});
	return true;
}
/**
 * 成功返回true，失败返回false。
 */
Cms.down = function(base, contentId, origValue, downId) {
	downId = downId || "downs";
	var updown = $.cookie("_cms_updown_" + contentId);
	if (updown) {
		return false;
	}
	$.cookie("_cms_updown_" + contentId, "1");
	$.get(base + "/content_down.jspx", {
		contentId : contentId
	}, function(data) {
		$("#" + downId).text(origValue + 1);
	});
	return true;
}
/**
 * 获取附件地址
 */
Cms.attachment = function(base, contentId, n, prefix) {
	$.get(base + "/attachment_url.jspx", {
		"cid" : contentId,
		"n" : n
	}, function(data) {
		var url;
		for (var i = 0;i < n; i++) {
			url = base + "/attachment.jspx?cid=" + contentId + "&i=" + i
					+ data[i];
			$("#" + prefix + i).attr("href", url);
		}
	}, "json");
}
/**
 * 提交评论
 */
Cms.comment = function(callback, form) {
	form = form || "commentForm";
	$("#" + form).validate( {
		submitHandler : function(form) {
			$(form).ajaxSubmit( {
				"success" : callback,
				"dataType" : "json"
			});
		}
	});
}
/**
 * 获取评论列表
 * 
 * @param siteId
 * @param contentId
 * @param greatTo
 * @param recommend
 * @param orderBy
 * @param count
 */
Cms.commentList = function(base, c, options) {
	c = c || "commentListDiv";
	$("#" + c).load(base + "/comment_list.jspx", options);
}
/**
 * 客户端包含登录
 */
Cms.loginCsi = function(base, c, options) {
	c = c || "loginCsiDiv";
	$("#" + c).load(base + "/login_csi.jspx", options);
}
/**
 * 向上滚动js类
 */
Cms.UpRoller = function(rid, speed, isSleep, sleepTime, rollRows, rollSpan,
		unitHight) {
	this.speed = speed;
	this.rid = rid;
	this.isSleep = isSleep;
	this.sleepTime = sleepTime;
	this.rollRows = rollRows;
	this.rollSpan = rollSpan;
	this.unitHight = unitHight;
	this.proll = $('#roll-' + rid);
	this.prollOrig = $('#roll-orig-' + rid);
	this.prollCopy = $('#roll-copy-' + rid);
	// this.prollLine = $('#p-roll-line-'+rid);
	this.sleepCount = 0;
	this.prollCopy[0].innerHTML = this.prollOrig[0].innerHTML;
	var o = this;
	this.pevent = setInterval(function() {
		o.roll.call(o)
	}, this.speed);
}
Cms.UpRoller.prototype.roll = function() {
	if (this.proll[0].scrollTop > this.prollCopy[0].offsetHeight) {
		this.proll[0].scrollTop = this.rollSpan + 1;
	} else {
		if (this.proll[0].scrollTop % (this.unitHight * this.rollRows) == 0
				&& this.sleepCount <= this.sleepTime && this.isSleep) {
			this.sleepCount++;
			if (this.sleepCount >= this.sleepTime) {
				this.sleepCount = 0;
				this.proll[0].scrollTop += this.rollSpan;
			}
		} else {
			var modCount = (this.proll[0].scrollTop + this.rollSpan)
					% (this.unitHight * this.rollRows);
			if (modCount < this.rollSpan) {
				this.proll[0].scrollTop += this.rollSpan - modCount;
			} else {
				this.proll[0].scrollTop += this.rollSpan;
			}
		}
	}
}
Cms.LeftRoller = function(rid, speed, rollSpan) {
	this.rid = rid;
	this.speed = speed;
	this.rollSpan = rollSpan;
	this.proll = $('#roll-' + rid);
	this.prollOrig = $('#roll-orig-' + rid);
	this.prollCopy = $('#roll-copy-' + rid);
	this.prollCopy[0].innerHTML = this.prollOrig[0].innerHTML;
	var o = this;
	this.pevent = setInterval(function() {
		o.roll.call(o)
	}, this.speed);
}
Cms.LeftRoller.prototype.roll = function() {
	if (this.proll[0].scrollLeft > this.prollCopy[0].offsetWidth) {
		this.proll[0].scrollLeft = this.rollSpan + 1;
	} else {
		this.proll[0].scrollLeft += this.rollSpan;
	}
}
/**
 * 收藏信息
 */
Cms.collect = function(base, cId, operate,showSpanId,hideSpanId) {
	$.post(base + "/member/collect.jspx", {
		"cId" : cId,
		"operate" : operate
	}, function(data) {
		if(data.result){
			if(operate==1){
				$.alert("收藏成功！");
				$("#"+showSpanId).show();
				$("#"+hideSpanId).hide();
			}else{
				$.alert("取消收藏成功！");
				$("#"+showSpanId).hide();
				$("#"+hideSpanId).show();
			}
		}else{
			$.alert("请先登录");
		}
	}, "json");
}
/**
 * 列表取消收藏信息
 */
Cms.cmsCollect = function(base, cId, operate) {
	$.post(base + "/member/collect.jspx", {
		"cId" : cId,
		"operate" : operate
	}, function(data) {
		if(data.result){
			if(operate==1){
				$.alert("收藏成功！");
			}else{
				$.alert("取消收藏成功！");
				$("#tr_"+cId).remove();
			}
		}else{
			$.alert("请先登录");
		}
	}, "json");
}
/**
 * 检测是否已经收藏信息
 */
Cms.collectexist = function(base, cId,showSpanId,hideSpanId) {
	$.post(base + "/member/collect_exist.jspx", {
		"cId" : cId
	}, function(data) {
		if(data.result){
			$("#"+showSpanId).show();
			$("#"+hideSpanId).hide();
		}else{
			$("#"+showSpanId).hide();
			$("#"+hideSpanId).show();
		}
	}, "json");
}
/**
 * 加载城市
 */
Cms.loadCity = function(value){
	var containerId='cityContainer';
	$.getJSON('/e_industry/v_load_child.jspx',{
		parentId: value,
		sysType: 'city_sys'
	},function(data){
		if(data != null){
			var city = $('#hidCity').val();
			var list = data;
			var s = '<option value="">地区</option>';
			for(var i=0;i<list.length;i++){
				s += '<option value="'+encodeURIComponent(list[i].name)+'"';
				if(decodeURIComponent(city)==encodeURIComponent(list[i].name)){
					s += ' selected="selected"';
				}
				s += '>'+list[i].name+'</option>';
			}
			$('#'+containerId).empty();
			$('#'+containerId).append(s);
			$('#'+containerId).show();
		}
	});
}

/**
 * 显示更多
 */
Cms.showMore = function(t) {
	var sq = $('.search_sq');
	var fl = $('.search_fl');
	if(sq.css('display')=='none'){
		sq.show();
		fl.hide();
		t.html('收起');
	}else{
		sq.hide();
		fl.show();
		t.html('查看更多');
	}
}

function initSearchBar(){
	var province = $('#hidProvince').val();
	if(province!=''){
		province = decodeURIComponent(province);
		$('select[name="province"]').val(province)
		Cms.loadCity(province);
	}
	var orderBy = $('#hidOrderBy').val();
	if(orderBy != ''){
		$('#orderBy').val(orderBy);
	}
}

Cms.logout = function(){
	$.confirm('您确定要退出登录吗？',function(r){
		if(r){
			$.get('/eplogout.jspx',function(){
				location.reload()
			});			
		}
	})
}

/**
 * 加入收藏
 */
Cms.addFavorite = function(obj){
	var url = window.location;
	var title = document.title;
	var e = window.event || arguments.callee.caller.arguments[0];  
	obj.onmousedown = null;
	var b = browserVersion().browser.toLowerCase();
	if (b=='ie') {
		try {
			window.external.AddFavorite(url, title);  
		} catch (exp) {}  
	} else {  
		if (b=='firefox') {  
	          obj.setAttribute("rel", "sidebar"), obj.title = title, obj.href = url;  
	    } else if (b='opera') {  
	        var a = document.createElement("a");  
	        a.rel = "sidebar", a.title = title, a.href = url;  
	        obj.parentNode.insertBefore(a, obj);  
	        a.appendChild(obj);  
	        a = null;  
	     }  
	}  
};  


Cms.behavior = function(obj){
	var vrl = window.location;
	 try{
         obj.style.behavior='url(#default#homepage)';
         obj.setHomePage(vrl);
	 }catch(e){
		 if(window.netscape) {
             try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
             }
             catch (e) {
            	 $.alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
             }
             var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
             prefs.setCharPref('browser.startup.homepage',vrl);
		 }
	 }
}

/**功能：显示排行，鼠标移上去有详细效果*/
Cms.paihangDetail = function(divKey,index){
	$('.listHeight').css('display','');
	$('.more').css('display','none');
	$('#'+divKey+'_'+index).hide();
	$('#'+divKey).show();
	var imgSrc = $('#imgSrc_'+divKey).html();
	$('#img_'+divKey).attr('src',imgSrc);
}

/**功能：鼠标移上去有详细效果*/
Cms.hoverShowDetail = function(o){
	$('#zjsCont li').removeClass('current').addClass('item');
    $('#zjsCont li').find(".content_text").hide();
	$(o).removeClass('item').addClass('current');
	$(o).find(".content_text").show();

}


/**功能：鼠标移上去有详细效果*/
Cms.hoverDlDetail = function(o){
	$(o).addClass('selected').siblings().removeClass('selected');
}

Cms.hoverProductDlDetail = function(o){
	$(o).addClass('selected').siblings().removeClass('selected');
}

/**动态绑定事件 dom方式*/
Cms.addEvent = function(obj,eventType,func){
	if (!obj) {
		return;
	};
	if (obj.attachEvent) {
		obj.attachEvent("on"+eventType, func);
	}else {
		obj.addEventListener(eventType, func, false)
	}
}

Cms.zoom = function(size){
	$('.abstract p').css('font-size',size+'px');
	$('.news_con p').css('font-size',size+'px');
}


function browserVersion(){
	 var userAgent = navigator.userAgent,    
     rMsie = /(msie\s|trident.*rv:)([\w.]+)/,    
     rFirefox = /(firefox)\/([\w.]+)/,    
     rOpera = /(opera).+version\/([\w.]+)/,    
     rChrome = /(chrome)\/([\w.]+)/,    
     rSafari = /version\/([\w.]+).*(safari)/;   
     var browser;   
     var version;   
     var ua = userAgent.toLowerCase();   
     var match = rMsie.exec(ua);   
     if (match != null) {   
         return { browser : "IE", version : match[2] || "0" };   
     }   
     var match = rFirefox.exec(ua);   
     if (match != null) {   
         return { browser : match[1] || "", version : match[2] || "0" };   
     }   
     var match = rOpera.exec(ua);   
     if (match != null) {   
         return { browser : match[1] || "", version : match[2] || "0" };   
     }   
     var match = rChrome.exec(ua);   
     if (match != null) {   
         return { browser : match[1] || "", version : match[2] || "0" };   
     }   
     var match = rSafari.exec(ua);   
     if (match != null) {   
         return { browser : match[2] || "", version : match[1] || "0" };   
     }   
     if (match != null) {   
         return { browser : "", version : "0" };   
     }   
	 var browserMatch = uaMatch(userAgent.toLowerCase());   
	 if (browserMatch.browser) {
		 return {browser : browserMatch.browser, version : browserMatch.version};
	 }   
}
