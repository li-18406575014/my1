<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>关于我们 - 运动俱乐部模板二</title>
		<meta name="keywords" content="">
		<meta name="description" content="">

		<link href="<%=request.getContextPath() %>/exercise/aboutwm/enterprise.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/front.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/nav.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/border.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/module.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/tabstyle.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/styleDesign.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/bootstrap-combined.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/layoutit.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/contentstyle.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/channletree.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/product.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/photo.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/jquery_002.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/jquery.css" rel="stylesheet" type="text/css">
		<!-- <link href="/res/common/css/jrf.dialog.css?v=20190321" rel="stylesheet" type="text/css"/>-->
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/searchBoxStyle1.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/member.css" rel="stylesheet" type="text/css">
		<link type="text/css" href="<%=request.getContextPath() %>/exercise/aboutwm/icommon.css" rel="stylesheet">
		<link rel="stylesheet" href="<%=request.getContextPath() %>/exercise/aboutwm/slider8-111.css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/logopreiew.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="<%=request.getContextPath() %>/exercise/aboutwm/animate.css">
		<script src="<%=request.getContextPath() %>/exercise/aboutwm/jquery-core.js" type="text/javascript"></script>
		<script type="text/javascript" src="<%=request.getContextPath() %>/exercise/aboutwm/layer.js"></script>
		<link rel="stylesheet" href="<%=request.getContextPath() %>/exercise/aboutwm/layer.css" id="layui_layer_skinlayercss" style="">
		<script type="text/javascript">
			var phone = window.location.host;
			document.domain = phone;
		</script>
		<script src="<%=request.getContextPath() %>/exercise/aboutwm/slider.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/aboutwm/swiper.js"></script>
		<script language="javascript">
			var userAgent = navigator.userAgent.toLowerCase();
			jQuery.browser = {
				version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
				msie: /msie/.test(userAgent) && !/opera/.test(userAgent)
			};
			if($.browser.msie && ($.browser.version == "6.0") || $.browser.msie && ($.browser.version == "7.0") || $.browser.msie && ($.browser.version == "8.0") || $.browser.msie && ($.browser.version == "9.0") || $.browser.msie && ($.browser.version == "10.0")) {
				$.ajax({
					type: 'GET',
					url: "/jrfr/effectParty/js/swiper2.js",
					async: false,
					dataType: 'script'
				});
				document.write("<link rel=\"stylesheet\" href=\"/jrfr/effectParty/css/swiper2.css\"/>");
			} else {
				$.ajax({
					type: 'GET',
					url: "/jrfr/effectParty/js/swiper4.js",
					async: false,
					dataType: 'script'
				});
				document.write("<link rel=\"stylesheet\" href=\"/jrfr/effectParty/css/swiper4.css\" />");
			}
			var channelId = 26028;
			var channelTemplateId = 63969;
		</script>
		<link rel="stylesheet" href="<%=request.getContextPath() %>/exercise/aboutwm/swiper4.css">
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/jrf.css" type="text/css" rel="styleSheet" id="layermcss">
		<style type="text/css" id="stylemodule">
			#module134769 .formMiddle134769 {
				background: rgba(0, 0, 0, 0) url(http://image.fast.126net.cn/group1/M00/04/4F/wKgADFukox6APoFgAAANuPzkQq0010.png) no-repeat left center;
			}
			
			#module134769 .formMiddleContent134769 {
				background: none;
			}
			
			#module134769 .formMiddle134769 .formMiddleCenter134769 {
				background: none;
			}
			
			#module134769 .formMiddle134769 {
				padding-bottom: 10px;
			}
			
			#module134769 .formMiddle134769 {
				padding-top: 10px;
			}
			
			#module134769 .formMiddle134769 {
				padding-left: 90px;
			}
			
			#module134769 .formMiddle134769 {
				padding-right: 10px;
			}
			
			#module134769 {
				z-index: 503;
			}
			
			#module134769 .formBanner134769 {
				display: none;
			}
			
			#module134768 {
				width: 263px;
			}
			
			#module134768 .formMiddle134768 {
				padding-bottom: 10px;
			}
			
			#module134768 .formMiddle134768 {
				padding-top: 10px;
			}
			
			#module134768 .formMiddle134768 {
				padding-left: 90px;
			}
			
			#module134768 .formMiddle134768 {
				padding-right: 10px;
			}
			
			#module134768 .formMiddle134768 {
				background: rgba(0, 0, 0, 0) url(http://image.fast.126net.cn/group2/M00/01/8A/wKgADlukon2AC2sGAAAMc4Rgc1o118.png) no-repeat left center;
			}
			
			#module134768 .formMiddleContent134768 {
				background: none;
			}
			
			#module134768 .formMiddle134768 .formMiddleCenter134768 {
				background: none;
			}
			
			#module134768 {
				border-bottom-width: 0px;
			}
			
			#module134768 {
				border-top-width: 0px;
			}
			
			#module134768 {
				border-left-width: 0px;
			}
			
			#module134768 {
				border-right-width: 2px;
			}
			
			#module134768 {
				border-style: solid;
			}
			
			#module134768 {
				border-color: rgba(235, 178, 87, 1);
			}
			
			#module134768 {
				z-index: 502;
			}
			
			#module134768 .formBanner134768 {
				display: none;
			}
			
			#module134767 {
				width: 315px;
			}
			
			#module134767 .formMiddle134767 {
				padding-bottom: 10px;
			}
			
			#module134767 .formMiddle134767 {
				padding-top: 10px;
			}
			
			#module134767 .formMiddle134767 {
				padding-left: 90px;
			}
			
			#module134767 .formMiddle134767 {
				padding-right: 10px;
			}
			
			#module134767 {
				border-bottom-width: 0px;
			}
			
			#module134767 {
				border-top-width: 0px;
			}
			
			#module134767 {
				border-left-width: 0px;
			}
			
			#module134767 {
				border-right-width: 2px;
			}
			
			#module134767 {
				border-style: solid;
			}
			
			#module134767 {
				border-color: rgba(235, 178, 87, 1);
			}
			
			#module134767 .formMiddle134767 {
				background: rgba(0, 0, 0, 0) url(http://image.fast.126net.cn/group1/M00/04/4F/wKgADFukoSaAYwcWAAANEy-9gjU335.png) no-repeat left center;
			}
			
			#module134767 .formMiddleContent134767 {
				background: none;
			}
			
			#module134767 .formMiddle134767 .formMiddleCenter134767 {
				background: none;
			}
			
			#module134767 {
				z-index: 501;
			}
			
			#module134767 .formBanner134767 {
				display: none;
			}
			
			#module134769 {
				width: 339px;
			}
			
			#webFooterbk #design_foot {
				padding-right: 0px;
			}
			
			#webFooterbk #design_foot {
				padding-left: 0px;
			}
			
			#webFooterbk #design_foot {
				padding-bottom: 0px;
			}
			
			#webFooterbk #design_foot {
				padding-top: 120px;
			}
			
			#webFooterbk {
				background: rgba(31, 30, 30, 1);
			}
			
			#webBannerbk {
				width: 100%;
			}
			
			#navigationBox1402 {
				width: 1000px;
			}
			
			#modulenav389f00001 {
				width: 500px;
			}
			
			#modulenav389f00001 .navCenter {
				width: 800px;
			}
			
			#modulenav389f00001 .navForm {
				width: 800px;
			}
			
			#modulenav389f00001 .navContent {
				width: 800px;
			}
			
			#moduleNaN {
				z-index: 501;
			}
			
			#bodyDesign {
				background: rgba(0, 0, 0, 0) url(http://image.fast.126net.cn/group1/M00/04/4F/wKgADFukfYKASZhXAACh40ST5e8226.jpg) repeat-y center center;
			}
			
			#webBannerbk {
				background: rgba(0, 0, 0, 0.86);
			}
			
			#logo_picture {
				left: 2px;
			}
			
			#logo_picture {
				position: absolute;
			}
			
			#logo_picture {
				top: 17px;
			}
			
			#modulenav389f00001 {
				left: 459px;
			}
			
			#modulenav389f00001 {
				top: -90px;
			}
			
			#modulenav389f00001 .itemName0 {
				font-family: 微软雅黑;
			}
			
			#modulenav389f00001 .itemName0 {
				color: rgba(235, 178, 87, 1);
			}
			
			#modulenav389f00001 .itemName0 {
				font-size: 17px;
			}
			
			#modulenav389f00001 .itemSelected .itemName0 {
				color: rgba(51, 51, 51, 1);
			}
			
			#modulenav389f00001 .itemHover .itemName0 {
				color: rgba(51, 51, 51, 1);
			}
			
			#modulenav389f00001 .itemSep {
				background: ;
			}
			
			#modulenav389f00001 .mainnav {
				height: 90px;
			}
			
			#modulenav389f00001 .itemCenter a {
				height: 100%;
			}
			
			#modulenav389f00001 .navCenter a {
				line-height: 90px;
			}
			
			#webBannerbk {
				height: 90px;
			}
			
			#module134770 .formBanner134770 {
				display: none;
			}
			
			#module134771 .formBanner134771 {
				display: none;
			}
			
			#module134772 .formBanner134772 {
				display: none;
			}
			
			#module134772 .formMiddle134772 {
				padding-right: 30px;
			}
			
			#module134772 .formMiddle134772 {
				padding-left: 30px;
			}
			
			#module134772 .formMiddle134772 {
				padding-top: 30px;
			}
			
			#module134772 .formMiddle134772 {
				padding-bottom: 30px;
			}
			
			#module134772 .formMiddle134772 .formMiddleCenter134772 {
				background: none;
			}
			
			#module134772 .formMiddleContent134772 {
				background: none;
			}
			
			#module134772 .formMiddle134772 {
				background: rgba(254, 191, 91, 1);
			}
			
			#module134772 {
				border-color: rgba(254, 191, 91, 1);
			}
			
			#module134772 {
				border-style: solid;
			}
			
			#module134772 {
				border-right-width: 10px;
			}
			
			#module134772 {
				border-left-width: 10px;
			}
			
			#module134772 {
				border-top-width: 10px;
			}
			
			#module134772 {
				border-bottom-width: 10px;
			}
			
			#module134772 {
				background: rgba(0, 0, 0, 1);
			}
			
			#module134772 {
				padding-right: 2px;
			}
			
			#module134772 {
				padding-left: 2px;
			}
			
			#module134772 {
				padding-top: 2px;
			}
			
			#module134772 {
				padding-bottom: 2px;
			}
			
			#module134772 {
				width: 456px;
			}
			
			#module134771 .formMiddle134771 {
				padding-right: 0px;
			}
			
			#module134771 .formMiddle134771 {
				padding-left: 0px;
			}
			
			#module134771 .formMiddle134771 {
				padding-top: 50px;
			}
			
			#module134771 .formMiddle134771 {
				padding-bottom: 130px;
			}
			
			#module134773 .formBanner134773 {
				display: none;
			}
			
			#module134773 {
				width: 1901px;
			}
			
			#module134774 .formBanner134774 {
				display: none;
			}
			
			#module134774 {
				width: 1901px;
			}
			
			#module134774 {
				z-index: 503;
			}
			
			#module134775 .formBanner134775 {
				display: none;
			}
			
			#module134775 {
				width: 1901px;
			}
			
			#module134776 .formBanner134776 {
				display: none;
			}
			
			#module134776 {
				width: 1901px;
			}
			
			#module134777 .formBanner134777 {
				display: none;
			}
			
			#module134778 .formBanner134778 {
				display: none;
			}
			
			#module134778 .formMiddle134778 .formMiddleCenter134778 {
				background: none;
			}
			
			#module134778 .formMiddleContent134778 {
				background: none;
			}
			
			#module134779 .formBanner134779 {
				display: none;
			}
			
			#module134772 {
				z-index: 502;
			}
			
			#module134779 .formMiddle134779 .formMiddleCenter134779 {
				background: none;
			}
			
			#module134779 .formMiddleContent134779 {
				background: none;
			}
			
			#module134780 .formBanner134780 {
				display: none;
			}
			
			#module134780 .formMiddle134780 .formMiddleCenter134780 {
				background: none;
			}
			
			#module134780 .formMiddleContent134780 {
				background: none;
			}
			
			#module160385 {
				z-index: 510;
			}
			
			#module160385 {
				width: 164px;
			}
			
			#module134777 {
				z-index: 511;
			}
			
			#module134777 .formMiddle134777 .formMiddleCenter134777 {
				background: none;
			}
			
			#module134777 .formMiddleContent134777 {
				background: none;
			}
			
			#module134777 {
				width: 177px;
			}
			
			#module160385 {
				filter: alpha(opacity=65);
			}
			
			#module160385 {
				opacity: 0.65;
			}
			
			#module134778 {
				width: 205px;
			}
			
			#module160386 {
				z-index: 510;
			}
			
			#module160386 {
				filter: alpha(opacity=65);
			}
			
			#module160386 {
				opacity: 0.65;
			}
			
			#module160386 {
				width: 177px;
			}
			
			#module134775 {
				z-index: 99;
			}
			
			#module134778 {
				z-index: 512;
			}
			
			#module134779 {
				width: 203px;
			}
			
			#module160387 {
				z-index: 510;
			}
			
			#module160387 {
				filter: alpha(opacity=65);
			}
			
			#module160387 {
				opacity: 0.65;
			}
			
			#module160387 {
				width: 177px;
			}
			
			#module134773 {
				z-index: 98;
			}
			
			#module134779 {
				z-index: 513;
			}
			
			#module134780 {
				width: 203px;
			}
			
			#module160388 {
				z-index: 510;
			}
			
			#module160388 {
				filter: alpha(opacity=65);
			}
			
			#module160388 {
				opacity: 0.65;
			}
			
			#module160388 {
				width: 177px;
			}
			
			#module134776 {
				z-index: 97;
			}
			
			#module134780 {
				z-index: 514;
			}
			
			#row80519 {
				height: 300px;
			}
			
			#row14700 {
				background-color: rgba(0, 0, 0, 0.27);
			}
			
			#row14700 {
				height: 841px;
			}
		</style>
		<link href="<%=request.getContextPath() %>/exercise/aboutwm/jrf.css" type="text/css" rel="styleSheet" id="layermcss">
	</head>

	<body id="bodyDesign">

		<script type="text/javascript">
			// 向导页内容居中
			function screenHeight() {
				var srceenWidth = $(window).width();
				var srceenHeight = $(window).height();
				var selfWidth = $("#guidInner").width();
				var selfHeight = $("#guidInner").height();
				var a = (srceenWidth - selfWidth) / 2;
				var b = (srceenHeight - selfHeight) / 2;
				$("#guidInner").css({
					"top": b,
					"left": a
				});
				var scrollHeight = srceenHeight + $(document).scrollTop();
				$(".graybg").height(scrollHeight);
			}

			// 关闭浏览器提示页
			function closeBrowerTip() {
				$("#borwserTip").hide();
			}

			$(function() {

				//	下拉框微信二维码
				$("#wxAttention").hover(function() {
					$(this).siblings(".jrf_code").toggleClass("code_cur");
				});
				$(".top_item").mouseenter(function() {
					//        $(this).find(".top_select").css({
					//            top:"-500px",
					//            display:"none"
					//        },200);
					if(!$(this).find(".top_select").is(":animated")) {
						$(this).find(".top_select").slideDown(150);
					}

					//        if(!$(this).find(".top_select").is(":animated")){
					//          $(this).find('.top_select').show().stop().animate({top:'34px'},500);
					//        } else{
					//          return;
					//        }
				});
				$(".top_item").mouseleave(function() {
					$(this).find(".top_select").slideUp(150);
					//         if(!$(this).find(".top_select").is(":animated")){
					//            $(this).find(".top_select").stop().animate({top:'-500px'},300,function(){
					//            $(this).hide();
					//          });
					//        } else{
					//          return;
					//        }
				});
				screenHeight();
				// 向导页点击事件
				$("#continue").click(function() {
					var m = $("#guidBd li.current").index();
					var lilength = $("#guidBd li").length - 1;
					if(m == lilength - 1) {
						$(this).removeClass('current');
						$("#complete").addClass('current');
						$("#guidBd li").eq(m + 1).addClass('current').siblings().removeClass('current');
					} else {
						$("#guidBd li").eq(m + 1).addClass('current').siblings().removeClass('current');
					}
				});

				$(".exit span").hover(function() {
					$(this).toggleClass('exitHover');
				});
				$(".myPopup_content .myli").hover(function() {
					$(this).toggleClass('exitHover');
				});
				$(".myurl .weburl").hover(function() {
					$(this).toggleClass('exitHover');
				});
			});
			$(window).scroll(function() {
				screenHeight();
				var scrollTop = $(window).scrollTop();
				var topHeight = $(".header_top").height();
			});
			//保存到桌面
			function toDesktop(sUrl, sName) {
				try {
					var WshShell = new ActiveXObject("WScript.Shell");
					var oUrlLink = WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop") + "\\" + sName + ".url");
					oUrlLink.TargetPath = sUrl;
					oUrlLink.Save();
				} catch(e) {
					$.alert("当前安全级别不允许操作！");
				}
			}

			//绑定域名
			function bindDomain() {
				if(!$('#domain').val() || $('#domain').val() == '') {
					$.alert('请输入绑定的域名！');
					return;
				} else {
					$.ajax({
						url: '/jrfadmin/jrfcms/site_config/v_checkoutDomain.do?domain=' + $('#domain').val(),
						success: function(datae) {
							if(datae.status == 1) {
								$.alert("不能填写该站点域名!", function() {
									$('#domain').val("");
								});
							} else if(datae.status == 3) {
								$.alert("不能输入带有,号的域名!", function() {
									$('#domain').val("");
								});
							} else {
								$.ajax({
									url: '/jrfadmin/jrfcms/site/v_checkDomain.do?domain=' + $('#domain').val().toLocaleLowerCase(),
									success: function(data) {
										if(data) {
											$.ajax({
												url: '/jrfadmin/jrfcms/bindDomain.jspx',
												type: 'post',
												data: {
													"domain": $('#domain').val().toLocaleLowerCase()
												},
												success: function(data) {
													var result = $.parseJSON(data);
													if(result.success == 1) {
														$.alert('保存成功！');
														setTimeout(function() {
															window.location.reload();
														}, 2000)
													}
												}
											});
										} else {
											$.alert('域名已存在！');
										}
									}
								});
							}
						}
					});
				}
			}

			//收藏本站
			function AddFavorite(title, url) {
				try {
					window.external.addFavorite(url, title);
				} catch(e) {
					try {
						window.sidebar.addPanel(title, url, "");
					} catch(e) {
						$.alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
					}
				}
			}

			function logout22() {
				//$.ajax({url:'/jrfadmin/jrfcms/logout.do?returnUrl=index.do',async:false});	//退出自助建站
				//window.location.href='https://my.srcb.com/logout?serivce=http://my.srcb.com'; //退出用户中心
				$.ajax({
					url: 'http://form.126net.cn/logout.jhtml',
					async: false
				});
				window.location.href = '/jrfadmin/jrfcms/logout.do?returnUrl=index.do';
			}

			function goToHelp() {

				$.ajax({
					url: '/jrfadmin/jrfcms/ticket/o_getTicket.do',
					type: 'post',
					success: function(result) {
						if(result) {
							window.open("http://csc.126net.com/otherticket/v_help.jspx?code=" + result);
						}
					}
				});

			}

			function getCurrentLoginUser() {
				$.getJSON("/jrfadmin/jrfcms/getCurrentLoginUser.jspx", function(data) {
					if(data.code == "200" && data.mobileDesignUrl != "") {

						/* showSafariTip();

			var el = document.createElement("a");
			document.body.appendChild(el);
			el.href = data.mobileDesignUrl; //url 是你得到的连接
			el.target = '_blank'; //指定在新窗口打开
			el.click();
			document.body.removeChild(el);*/
						window.location.href = data.mobileDesignUrl;
					} else {
						window.location.reload()
					}
				});
			}

			function activityView(id) {
				JRF.popupWindow({
					title: "广告详情",
					frameSrcUrl: '/jrfadmin/jrfcms/site_config/v_activityView.do?id=' + id,
					width: 700,
					height: 400,
					closeFunc: localtionRefresh
				});
			}

			function announView(id) {
				JRF.popupWindow({
					title: "公告详情",
					frameSrcUrl: '/jrfadmin/jrfcms/site_config/v_announView.do?id=' + id,
					width: 700,
					height: 400,
					closeFunc: localtionRefresh
				});
			}

			//保存刷新页面
			function localtionRefresh() {

				//location.reload();

			}

			function serviceCenter() {
				var serverHeight = -parseInt($("#kefuDiv").height() / 2);
				$("#kefuDiv").css("margin-top", serverHeight);
			}

			function goToUpApp(siteId) {

				$.ajax({
					url: '/jrfadmin/jrfcms/ticket/o_getUcenterTicket.do',
					type: 'post',
					success: function(result) {
						if(result) {
							//window.open("http://csc.126net.com/ucenter/SSOlogin.jspx?&token="+result+"&businessId="+siteId+"&appIf=site&returnUrl=/ucenter/memberApp/upApp.jspx");
							window.location.href = "http://csc.126net.com/ucenter/SSOlogin.jspx?&token=" + result + "&businessId=" + siteId + "&appIf=site&returnUrl=/ucenter/memberApp/upApp.jspx";
						}
					}
				});

			}

			function goToRenewApp(siteId) {

				$.ajax({
					url: '/jrfadmin/jrfcms/ticket/o_getUcenterTicket.do',
					type: 'post',
					success: function(result) {
						if(result) {
							//window.open("http://csc.126net.com/ucenter/SSOlogin.jspx?&token="+result+"&businessId="+siteId+"&appIf=site&returnUrl=/ucenter/memberApp/renewApp.jspx");
							window.location.href = "http://csc.126net.com/ucenter/SSOlogin.jspx?&token=" + result + "&businessId=" + siteId + "&appIf=site&returnUrl=/ucenter/memberApp/renewApp.jspx";
						}
					}
				});

			}
			var cnzzFlag = 0;
		</script>

		<div id="pageMain" class="pageMain">
			<div class="top_wrapper" id="topDesign" style="display: none;">
				<div class="top_main">
					<div class="login_top">
						<div class="yidenglu" style="display: none;">
							<span class="welcome_text"><span class="memberName"></span> &nbsp;您好，欢迎来到 &nbsp;&nbsp;运动俱乐部模板二!</span>
							<a  title="会员中心" target="_blank" class="top_center">会员中心</a>
							<b>|</b>
							<a href="javascript:void(0);" target="_top" id="logout" class="top_quit" onclick="logout(); return false">退出</a>
						</div>

						<div class="weidenglu">
							<span class="welcome_text">您好，欢迎来到&nbsp;&nbsp;运动俱乐部模板二!</span>
							<a  title="登录" class="top_login">登录</a>
							<b>|</b>
							<a title="注册" target="_blank" class="top_sign">注册</a>
						</div>

					</div>
				</div>
			</div>
			<div class="top_common_module" id="topCommonModule" style="display: none;">
				<div id="page_head_module" class="demo">
					<div class="lyrow pageHeadlyrow">
						<div class="view">
							<div class="row-fluid-1 clearfix" id="row_head">
								<div class="span12">
								</div>
								<div class="float_div_class">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 右键禁用功能 -->
			<script type="text/javascript">
				//鼠标右键禁用
				function stop() {
					var flg = "false";
					if(flg == "true") {
						return false;
					} else {
						return true;
					}
				}
				document.oncontextmenu = stop

				function logout() {
					$.ajax({
						url: '/ucenter/logout.jspx',
						type: 'get',
						dataType: 'json',
						success: function(data) {
							window.location.reload();
						}
					});
				}
			</script>
			<!-- 判断user 还有调用是否开启广告 -->
			<!-- 网站logo -->
			<div id="webBannerbk" class="web_bannerbk">
				<div id="topPicCont" class="search_xhs">
					<div id="logoPictureContainer" class="mousetest">
						<div id="logo_picture" style="display:block">
							<a ><img id="logoimg" src="<%=request.getContextPath() %>/exercise/aboutwm/wKgADlukf-iANkQtAAASr9mQaaA905.png" title="运动俱乐部模板二"></a>
						</div>
						<div id="multilanguage" siteid="1402">
							<div id="multilanguageDiv">

								<div class="language_select language_style01" style="display: none">
									<ul style="">
										<li class="first_select">
											<div class="lan_item">
												<a class="txtcolor"><i class="icon"></i><span>中文</span></a>
												<b class="arrow"></b>
											</div>
										</li>

									</ul>
								</div>

								<script type="text/javascript">
									$(function() {
										$(".language_select").mouseover(function() {
											$(this).find(".arrow").addClass("arrowhover");
											var selectHeight = $(this).find("ul").height();
											$(".language_select").stop().animate({
												"height": selectHeight
											}, 200);
										});
										$(".language_select").mouseleave(function() {
											$(this).find(".arrow").removeClass("arrowhover");
											var selectHeight = $(this).find(".first_select").height();
											$(".language_select").animate({
												"height": selectHeight
											}, 200);
										});
									});
								</script>
							</div>
						</div>

						<!-- 购物车 -->
					</div>
				</div>
			</div>
			<!-- 导航 -->
			<div class="box navigationBox" id="navigationBox1402">
				<div id="modulenav389f00001" class="form navForm navstyle_bord" _tplsol="389f00001" _mcid="1402" absolutetop="-90" fixedtop="0" absoluteleft="458.9999694824219" fixedleft="668.5999755859375">
					<div id="mainnav" class="mainnav nav2 navStyle306">
						<input type="hidden" id="tplSol" value="389f00001">
						<div class="navtop"><i></i></div>
						<div class="navContent">
							<div class="navLeft"></div>
							<div class="navCenterContent">
								<div id="navCenter" class="navCenter">
									<div class="itemContainer" id="itemcontainerss" _hload="1">
										<div class="item" id="firstItem0" index="0">
											<span class="itemLeft"></span>
											<span class="itemCenter">
										<a href="<%=request.getContextPath() %>/FrontController/Index" title=""><i class="itemName0">首页</i></a>
									</span>
											<span class="itemRight"></span>
										</div>
										<div class="itemSep"></div>
										<div class="item 	itemSelected" id="firstItem26028" index="26028">
											<input type="hidden" id="channelIndexId" value="26028">
											<span class="itemLeft"></span>
											<span class="itemCenter">
													<a href="<%=request.getContextPath() %>/FrontController/aboutwmSkip" title=""><i class="itemName0">关于我们</i></a>
												</span>
											<span class="itemRight"></span>
										</div>
										<div class="itemSep"></div>
										<div class="item " id="firstItem26026" index="26026">
											<input type="hidden" id="channelIndexId" value="26026">
											<span class="itemLeft"></span>
											<span class="itemCenter">
													<a href="<%=request.getContextPath() %>/FrontController/sport" title=""><i class="itemName0">运动项目</i></a>
												</span>
											<span class="itemRight"></span>
										</div>
										<div class="itemSep"></div>
										<div class="item " id="firstItem26030" index="26030">
											<input type="hidden" id="channelIndexId" value="26030">
											<span class="itemLeft"></span>
											<span class="itemCenter">
													<a href="<%=request.getContextPath() %>/FrontController/coach" title=""><i class="itemName0">教练风采</i></a>
												</span>
											<span class="itemRight"></span>
										</div>
										<div class="itemSep"></div>
										<div class="item " id="firstItem26027" index="26027">
											<input type="hidden" id="channelIndexId" value="26027">
											<span class="itemLeft"></span>
											<span class="itemCenter">
													<a href="<%=request.getContextPath() %>/FrontController/journalism" title=""><i class="itemName0">新闻资讯</i></a>
												</span>
											<span class="itemRight"></span>
										</div>
										<div class="itemSep"></div>
										<div class="item " id="firstItem26029" index="26029">
											<input type="hidden" id="channelIndexId" value="26029">
											<span class="itemLeft"></span>
											<span class="itemCenter">
													<a href="<%=request.getContextPath() %>/FrontController/join" title=""><i class="itemName0">加入我们</i></a>
												</span>
											<span class="itemRight"></span>
										</div>
										<div class="itemSep"></div>
									</div>
								</div>
							</div>
							<div class="navRight"></div>
						</div>
						<div class="navbot"><i></i></div>
					</div>

				</div>
				<style id="styleNavTest389f00001">
					#navigationBox1402 .navStyle300 .itemSelected a {
						background: rgba(235, 178, 87, 1);
					}
					
					#navigationBox1402 .navStyle300 .itemHover a {
						background: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle300 li a:hover {
						background: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle300 li .seconditemSelected a {
						background: rgba(235, 178, 87, 1)
					}
					
					#navigationBox1402 .navStyle301 .itemSelected a {
						background: rgba(235, 178, 87, 1);
					}
					
					#navigationBox1402 .navStyle301 .itemHover a {
						background: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle301 li a:hover {
						background: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle301 li .seconditemSelected a {
						background: rgba(235, 178, 87, 1)
					}
					
					#navigationBox1402 .navStyle302 .itemSelected a {
						border-color: rgba(235, 178, 87, 1);
						color: rgba(235, 178, 87, 1);
					}
					
					#navigationBox1402 .navStyle302 .itemHover a {
						border-color: rgba(235, 178, 87, 1);
						color: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle302 li a:hover {
						background: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle302 li .seconditemSelected a {
						background: rgba(235, 178, 87, 1)
					}
					
					#navigationBox1402 .navStyle303 .itemSelected a {
						border-color: rgba(235, 178, 87, 1);
						color: rgba(235, 178, 87, 1);
					}
					
					#navigationBox1402 .navStyle303 .itemHover a {
						border-color: rgba(235, 178, 87, 1);
						color: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle303 li .seconditemSelected a,
					ul.subnavStyle303 li a:hover {
						background: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle303 li .seconditemSelected a {
						background: rgba(235, 178, 87, 1)
					}
					
					#navigationBox1402 .navStyle304 .itemSelected a {
						border-color: rgba(235, 178, 87, 1);
						color: rgba(235, 178, 87, 1);
					}
					
					#navigationBox1402 .navStyle304 .itemHover a {
						border-color: rgba(235, 178, 87, 1);
						color: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle304 li a:hover {
						background: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle304 li .seconditemSelected a {
						background: rgba(235, 178, 87, 1)
					}
					
					#navigationBox1402 .navStyle305 .itemSelected a {
						color: rgba(235, 178, 87, 1);
					}
					
					#navigationBox1402 .navStyle305 .itemHover a {
						color: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle305 li a:hover {
						background: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle305 li .seconditemSelected a {
						background: rgba(235, 178, 87, 1)
					}
					
					#navigationBox1402 .navStyle306 .itemSelected a {
						background: rgba(235, 178, 87, 1);
					}
					
					#navigationBox1402 .navStyle306 .itemHover a {
						background: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle306 li a:hover {
						background: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle306 li .seconditemSelected a {
						background: rgba(235, 178, 87, 1)
					}
					
					#navigationBox1402 .navStyle307 .itemSelected a {
						color: rgba(235, 178, 87, 1);
					}
					
					#navigationBox1402 .navStyle307 .itemHover a {
						color: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle307 li a:hover {
						background: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle307 li .seconditemSelected a {
						background: rgba(235, 178, 87, 1)
					}
					
					#navigationBox1402 .navStyle308 .navCenterContent {
						background: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle308 li a:hover {
						background: rgba(235, 178, 87, 1);
					}
					
					ul.subnavStyle308 li .seconditemSelected a {
						background: rgba(235, 178, 87, 1)
					}
					
					#navigationBox1402 .navStyle309 .itemSelected a {
						border-color: rgba(235, 178, 87, 1);
						color: rgba(235, 178, 87, 1);
					}
					
					#navigationBox1402 .navStyle309 .itemHover a {
						border-color: rgba(235, 178, 87, 1);
						color: rgba(235, 178, 87, 1);
					}
					
					.subnavStyle309 li a:hover {
						background: rgba(235, 178, 87, 1);
					}
					
					.subnavStyle309 li .seconditemSelected a {
						background: rgba(235, 178, 87, 1)
					}
				</style>
				<script>
					$(document).ready(function() {
						var theAbsoluteTop = $(".navForm").position().top;
						var theFixedTop = $(".navForm").offset().top;
						var theAbsoluteLeft = $(".navForm").position().left;
						var theFixedLeft = $(".navForm").offset().left;
						$(".navForm").attr("absolutetop", theAbsoluteTop);
						$(".navForm").attr("fixedtop", theFixedTop);
						$(".navForm").attr("absoluteleft", theAbsoluteLeft);
						$(".navForm").attr("fixedleft", theFixedLeft);
						JRF.loadJavaScript({
							file: '/jrfr/js/navigator.js',
							doneFunc: function() {
								mainNav("1402");
							}
						});
						$(window).scroll(function() {
							var position = $(".navForm").css("position");
							if(position != "fixed") {
								theAbsoluteTop = $(".navForm").position().top;
								var theFixedTop = $(".navForm").offset().top;
								var theAbsoluteLeft = $(".navForm").position().left;
								var theFixedLeft = $(".navForm").offset().left;
								$(".navForm").attr("absolutetop", theAbsoluteTop);
								$(".navForm").attr("fixedtop", theFixedTop);
								$(".navForm").attr("absoluteleft", theAbsoluteLeft);
								$(".navForm").attr("fixedleft", theFixedLeft);

							}
							var newAbsoluteTop = $(".navForm").attr("absolutetop");
							var newFixedTop = $(".navForm").attr("fixedtop");
							var newAbsoluteLeft = $(".navForm").attr("absoluteleft");
							var newFixedLeft = $(".navForm").attr("fixedleft");

							if($(".header_top").length > 0) {
								newFixedTop = newFixedTop - $(".header_top").height();
							}

							if($('#modulenav389f00001').attr("fixation") == 1) {
								if($(window).scrollTop() > newFixedTop) {
									var top = 0;
									if($(".header_top").length > 0) {
										top = $(".header_top").height();
									}
									$(".navForm").css({
										"position": "fixed",
										"top": top,
										"left": newFixedLeft + "px"
									})
									$(".navForm").draggable("disable");
								} else {
									$(".navForm").css({
										"position": "absolute",
										"top": newAbsoluteTop + "px",
										"left": newAbsoluteLeft + "px"
									})
									$(".navForm").draggable("enable");
								}
							} else {
								$(".navForm").css({
									"position": "absolute",
									"top": newAbsoluteTop + "px",
									"left": newAbsoluteLeft + "px"
								})
								$(".navForm").draggable("enable");
							}
						})
					});
				</script>

			</div>
			<div id="main">
				<div id="demoMain">
					<div class="lyrow">
						<div class="view">
							<div class="row-fluid-1 ui-resizable-disabled ui-state-disabled clearfix" id="row39418" _heightstatus="2">
								<div class="span12">
									<div id="module134770" style="" class="form pic_module form134770 modulePattern0">
										<div style="box-sizing:border-box;">

											<div class="formMiddle formMiddle134770  hover_style00">
												<div class="picture_shadebox ">

													<a  target="_blank">

														<img src="<%=request.getContextPath() %>/serverimg/${list7[1].imgname}" id="134770preImg1" width="1920" height="500">

													</a>
													<form id="jvForm134770" action="" labelwidth="12">
														<input type="hidden" name="attr_styleList" value="608-23">
														<input type="hidden" name="attr_name" value="图片模块">
														<input type="hidden" name="attr_radius" value="">
														<input type="hidden" name="mcId" value="134770">
														<input type="hidden" name="moduleId" value="351">
														<input type="hidden" name="attr_imageLink" value="">
														<input type="hidden" name="attr_linkTarget" value="1">
														<input type="hidden" name="attr_urlType" value="">
														<input type="hidden" name="attr_shapetype" value="">
														<input type="hidden" name="attr_imageWidth" value="1920" id="attrImageWidht">
														<input type="hidden" name="attr_imageHeight" value="500" id="attrImageHeight">

														<input type="hidden" name="attr_imageInitialWidth" value="400" id="attrImageInitialWidht">
														<input type="hidden" name="attr_imageInitialHeight" value="400" id="attrImageInitialHeight">

														<input type="hidden" name="attr_imageUrl" value="http://image.fast.126net.cn/group1/M00/04/4F/wKgADFukq4qAKdFzAADEogHHS7U057.jpg" id="uploadImgPath134770">
														<input type="hidden" name="attr_hoverEffect" value="0">
													</form>
												</div>
											</div>
										</div>
										<form id="jvForm134770" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134770" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134770" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134770" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134770" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134770" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134770" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134770" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134770" value="1">
										</form>

									</div>
								</div>
								<div class="float_div_class">
								</div>
							</div>
						</div>
					</div>
					<div class="lyrow">
						<div class="view">
							<div class="row-fluid ui-resizable-disabled ui-state-disabled clearfix" id="row19291" _heightstatus="2">
								<div class="span12">
									<div id="module134771" class="form text_list form134771 modulePattern0">
										<div style="width: 100%;height: 100%;">
											<style id="styleModuleTest134771" type="text/css">
												#module134771.modulePattern17401 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17401 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17402 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17403 .titleText {
													border-left-color: rgb(222, 44, 46);
													color: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17404 .formBanner {
													background: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17405 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17405 .titleText:after {
													border-left-color: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17406 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17406 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17407 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17407 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17408 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17409 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17410 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17410 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17411 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17412 .titleText {
													border-color: rgb(222, 44, 46);
												}
												
												#module134771.modulePattern17413 .titleText {
													background: rgb(222, 44, 46);
												}
											</style>
											<div class="formBanner formBanner134771">
												<div class="formBannerTitle formBannerTitle134771">
													<div id="bigg" class="titleText titleText134771" channelname="0">
														<div class="title_zcont">
															文本标题
														</div>
													</div>
													<div class="formBannerMore formBannerMore134771">

													</div>
												</div>
											</div>
											<div class="formMiddle formMiddle134771" style="">
												<div class="ztextbox" ondblclick="Site.editTextStyle($('#134771-moduleLayer .operate-inner'));">
													<div style="text-align: center;"><span style="line-height:220%;"><span style="color:#febf5b;"><span style="font-family:微软雅黑;"><span style="font-size:24px;">${list[0].cName }</span><br>
														<span style="font-size:14px;">${list[0].eName }</span></span>
														</span>
														</span><br> &nbsp;
													</div>

													<div><span style="line-height:220%;"><span style="color:#febf5b;"><span style="font-family:微软雅黑;">${list[0].rJieshao }</span></span>
														</span>
													</div>

													<div style="text-align: center;"><span style="color:#febf5b;"><span style="font-family:微软雅黑;"><span style="font-size:14px;"></span></span>
														</span>
													</div>

												</div>
											</div>
										</div>
										<form id="jvForm134771" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134771" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134771" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134771" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134771" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134771" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134771" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134771" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134771" value="1">
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="lyrow">
						<div class="view">
							<div class="row-fluid-1 clearfix" id="row14700">
								<div class="span12" _floatmodule="134772,134773,134774,134775,134776,134777,134778,134779,134780,160385,160386,160387,160388">
								</div>
								<div class="float_div_class">
									<div id="module160385" _float="1" style="left:344px;top:156px;position: absolute;height:168px;width:177px;" class="form form160385 btnstyle modulePattern0
">
										<div style="height: 100%;">
											<div class="buttonStyle1160385 buttonstyle_01" style="width: 100%;height: 100%;">
												<a  style="

                    width: 100%;height: 100%;line-height: 168px;
                    background-color:rgb(0, 0, 0);" onmouseover="btn_over160385()" onmouseout="btn_out160385()">

												</a>
											</div>
											<form id="jvForm160385" action="">
												<input type="hidden" name="moduleId" value="325">
												<input type="hidden" name="channelId" value="">
												<input type="hidden" name="mcId" value="160385">
												<input type="hidden" name="attr_name" value="按钮模块">
												<input type="hidden" name="attr_styleList" value="325-1">
												<input type="hidden" name="attr_buttonName" value="">
												<input type="hidden" name="attr_lianjie" value="0">
												<input type="hidden" name="attr_buttonSizes" value="1">
												<input type="hidden" name="attr_buttonTextWidth" id="buttonTextWidth" value="177">
												<input type="hidden" name="attr_buttonTextHeight" id="buttonTextHeight" value="168">
												<input type="hidden" name="attr_buttonBgColor" value="#ffffff">
												<input type="hidden" name="attr_buttonBgColor1" value="#eee">
												<input type="hidden" name="attr_buttonBgPicture" value="">
												<input type="hidden" name="attr_butstyle" value="">
												<input type="hidden" name="attr_buttonBgPicture1" value="">
												<input type="hidden" name="attr_buttonTextSize" value="16">
												<input type="hidden" name="attr_buttonTextFamily" value="微软雅黑">
												<input type="hidden" name="attr_buttonTextBold" value="false">
												<input type="hidden" name="attr_buttonTextI" value="false">
												<input type="hidden" name="attr_buttonTextU" value="false">
												<input type="hidden" name="attr_buttonTextColor" value="#333">
												<input type="hidden" name="attr_buttonTextColor1" value="#333">
												<input type="hidden" name="attr_buttonBolColor" value="#bdbdbd">
												<input type="hidden" name="attr_buttonBolWidth" value="1">
												<input type="hidden" name="attr_buttonBolStyle" value="0">
												<input type="hidden" name="attr_buttonBolTopWidth" value="">
												<input type="hidden" name="attr_buttonBolLeftWidth" value="">
												<input type="hidden" name="attr_buttonBolRightWidth" value="">
												<input type="hidden" name="attr_buttonBolBottomWidth" value="">
												<input type="hidden" name="attr_buttonA1" value="0">
												<input type="hidden" name="attr_buttonA2" value="0">
												<input type="hidden" name="attr_radiusLock" value="0">
												<input type="hidden" name="attr_buttonA3" value="0">
												<input type="hidden" name="attr_buttonA4" value="0">
												<input type="hidden" name="attr_pictureStyle" value="buttonstyle_01">
												<input type="hidden" name="attr_styleDefinedColor" value="rgb(0, 0, 0)">
												<input type="hidden" name="attr_buttonUrl" value="">
												<input type="hidden" name="attr_backgroundStyle" id="backgroundStyle1" value="0">
												<input type="hidden" name="attr_wordSetup" id="wordSetup1" value="0">
												<input type="hidden" name="attr_wordsStyle" id="wordStyle1" value="0">
												<input type="hidden" name="attr_buttonFram" id="buttonFram1" value="0">
												<input type="hidden" name="attr_buttonFillet" id="buttonFillet1" value="0">
											</form>
										</div>
										<form id="jvForm160385" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima160385" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue160385" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger160385" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed160385" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity160385" value="35">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima160385" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue160385" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText160385" value="1">
										</form>

									</div>
									<div id="module160387" _float="1" style="left:344px;top:497px;position: absolute;height:168px;width:177px;" class="form form160387 btnstyle modulePattern0
">
										<div style="height: 100%;">
											<div class="buttonStyle1160387 buttonstyle_01" style="width: 100%;height: 100%;">
												<a  style="

                    width: 100%;height: 100%;line-height: 168px;
                    background-color:rgb(0, 0, 0);" onmouseover="btn_over160387()" onmouseout="btn_out160387()">

												</a>
											</div>
											<form id="jvForm160387" action="">
												<input type="hidden" name="moduleId" value="325">
												<input type="hidden" name="channelId" value="">
												<input type="hidden" name="mcId" value="160387">
												<input type="hidden" name="attr_name" value="按钮模块">
												<input type="hidden" name="attr_styleList" value="325-1">
												<input type="hidden" name="attr_buttonName" value="">
												<input type="hidden" name="attr_lianjie" value="0">
												<input type="hidden" name="attr_buttonSizes" value="1">
												<input type="hidden" name="attr_buttonTextWidth" id="buttonTextWidth" value="177">
												<input type="hidden" name="attr_buttonTextHeight" id="buttonTextHeight" value="168">
												<input type="hidden" name="attr_buttonBgColor" value="#ffffff">
												<input type="hidden" name="attr_buttonBgColor1" value="#eee">
												<input type="hidden" name="attr_buttonBgPicture" value="">
												<input type="hidden" name="attr_butstyle" value="">
												<input type="hidden" name="attr_buttonBgPicture1" value="">
												<input type="hidden" name="attr_buttonTextSize" value="16">
												<input type="hidden" name="attr_buttonTextFamily" value="微软雅黑">
												<input type="hidden" name="attr_buttonTextBold" value="false">
												<input type="hidden" name="attr_buttonTextI" value="false">
												<input type="hidden" name="attr_buttonTextU" value="false">
												<input type="hidden" name="attr_buttonTextColor" value="#333">
												<input type="hidden" name="attr_buttonTextColor1" value="#333">
												<input type="hidden" name="attr_buttonBolColor" value="#bdbdbd">
												<input type="hidden" name="attr_buttonBolWidth" value="1">
												<input type="hidden" name="attr_buttonBolStyle" value="0">
												<input type="hidden" name="attr_buttonBolTopWidth" value="">
												<input type="hidden" name="attr_buttonBolLeftWidth" value="">
												<input type="hidden" name="attr_buttonBolRightWidth" value="">
												<input type="hidden" name="attr_buttonBolBottomWidth" value="">
												<input type="hidden" name="attr_buttonA1" value="0">
												<input type="hidden" name="attr_buttonA2" value="0">
												<input type="hidden" name="attr_radiusLock" value="0">
												<input type="hidden" name="attr_buttonA3" value="0">
												<input type="hidden" name="attr_buttonA4" value="0">
												<input type="hidden" name="attr_pictureStyle" value="buttonstyle_01">
												<input type="hidden" name="attr_styleDefinedColor" value="rgb(0, 0, 0)">
												<input type="hidden" name="attr_buttonUrl" value="">
												<input type="hidden" name="attr_backgroundStyle" id="backgroundStyle1" value="0">
												<input type="hidden" name="attr_wordSetup" id="wordSetup1" value="0">
												<input type="hidden" name="attr_wordsStyle" id="wordStyle1" value="0">
												<input type="hidden" name="attr_buttonFram" id="buttonFram1" value="0">
												<input type="hidden" name="attr_buttonFillet" id="buttonFillet1" value="0">
											</form>
										</div>
										<form id="jvForm160387" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima160387" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue160387" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger160387" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed160387" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity160387" value="35">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima160387" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue160387" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText160387" value="1">
										</form>

									</div>
									<div id="module160388" _float="1" style="left:930px;top:496px;position: absolute;height:168px;width:177px;" class="form form160388 btnstyle modulePattern0
">
										<div style="height: 100%;">
											<div class="buttonStyle1160388 buttonstyle_01" style="width: 100%;height: 100%;">
												<a  style="

                    width: 100%;height: 100%;line-height: 168px;
                    background-color:rgb(0, 0, 0);" onmouseover="btn_over160388()" onmouseout="btn_out160388()">

												</a>
											</div>
											<form id="jvForm160388" action="">
												<input type="hidden" name="moduleId" value="325">
												<input type="hidden" name="channelId" value="">
												<input type="hidden" name="mcId" value="160388">
												<input type="hidden" name="attr_name" value="按钮模块">
												<input type="hidden" name="attr_styleList" value="325-1">
												<input type="hidden" name="attr_buttonName" value="">
												<input type="hidden" name="attr_lianjie" value="0">
												<input type="hidden" name="attr_buttonSizes" value="1">
												<input type="hidden" name="attr_buttonTextWidth" id="buttonTextWidth" value="177">
												<input type="hidden" name="attr_buttonTextHeight" id="buttonTextHeight" value="168">
												<input type="hidden" name="attr_buttonBgColor" value="#ffffff">
												<input type="hidden" name="attr_buttonBgColor1" value="#eee">
												<input type="hidden" name="attr_buttonBgPicture" value="">
												<input type="hidden" name="attr_butstyle" value="">
												<input type="hidden" name="attr_buttonBgPicture1" value="">
												<input type="hidden" name="attr_buttonTextSize" value="16">
												<input type="hidden" name="attr_buttonTextFamily" value="微软雅黑">
												<input type="hidden" name="attr_buttonTextBold" value="false">
												<input type="hidden" name="attr_buttonTextI" value="false">
												<input type="hidden" name="attr_buttonTextU" value="false">
												<input type="hidden" name="attr_buttonTextColor" value="#333">
												<input type="hidden" name="attr_buttonTextColor1" value="#333">
												<input type="hidden" name="attr_buttonBolColor" value="#bdbdbd">
												<input type="hidden" name="attr_buttonBolWidth" value="1">
												<input type="hidden" name="attr_buttonBolStyle" value="0">
												<input type="hidden" name="attr_buttonBolTopWidth" value="">
												<input type="hidden" name="attr_buttonBolLeftWidth" value="">
												<input type="hidden" name="attr_buttonBolRightWidth" value="">
												<input type="hidden" name="attr_buttonBolBottomWidth" value="">
												<input type="hidden" name="attr_buttonA1" value="0">
												<input type="hidden" name="attr_buttonA2" value="0">
												<input type="hidden" name="attr_radiusLock" value="0">
												<input type="hidden" name="attr_buttonA3" value="0">
												<input type="hidden" name="attr_buttonA4" value="0">
												<input type="hidden" name="attr_pictureStyle" value="buttonstyle_01">
												<input type="hidden" name="attr_styleDefinedColor" value="rgb(0, 0, 0)">
												<input type="hidden" name="attr_buttonUrl" value="">
												<input type="hidden" name="attr_backgroundStyle" id="backgroundStyle1" value="0">
												<input type="hidden" name="attr_wordSetup" id="wordSetup1" value="0">
												<input type="hidden" name="attr_wordsStyle" id="wordStyle1" value="0">
												<input type="hidden" name="attr_buttonFram" id="buttonFram1" value="0">
												<input type="hidden" name="attr_buttonFillet" id="buttonFillet1" value="0">
											</form>
										</div>
										<form id="jvForm160388" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima160388" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue160388" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger160388" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed160388" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity160388" value="35">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima160388" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue160388" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText160388" value="1">
										</form>

									</div>
									<div id="module134780" _float="1" style="left:945px;top:508px;position: absolute;height:140px;width:151px;" class="form text_list form134780 modulePattern0">
										<div style="width: 100%;height: 100%;">
											<style id="styleModuleTest134780" type="text/css">
												#module134780.modulePattern17401 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17401 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17402 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17403 .titleText {
													border-left-color: rgb(222, 44, 46);
													color: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17404 .formBanner {
													background: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17405 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17405 .titleText:after {
													border-left-color: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17406 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17406 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17407 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17407 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17408 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17409 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17410 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17410 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17411 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17412 .titleText {
													border-color: rgb(222, 44, 46);
												}
												
												#module134780.modulePattern17413 .titleText {
													background: rgb(222, 44, 46);
												}
											</style>
											<div class="formBanner formBanner134780">
												<div class="formBannerTitle formBannerTitle134780">
													<div id="bigg" class="titleText titleText134780" channelname="0">
														<div class="title_zcont">
															文本标题
														</div>
													</div>
													<div class="formBannerMore formBannerMore134780">

													</div>
												</div>
											</div>
											<div class="formMiddle formMiddle134780" style="width: 100%;height: 100%;">
												<div class="ztextbox" style="width: 100%;height: 100%;" ondblclick="Site.editTextStyle($('#134780-moduleLayer .operate-inner'));">

													<h3 style="font-family: &quot;Microsoft Yahei&quot;; box-sizing: border-box; line-height: 1.1; color: rgb(235, 178, 87); margin: 0em; font-size: 24px; display: inline-block; padding-bottom: 0.3em; border-bottom: 3px solid rgb(235, 178, 87);"><span style="line-height:150%;">${list2[3].fPurpose }</span></h3>
													<span style="line-height:150%;"><span style="color: rgb(235, 178, 87); font-family: &quot;Microsoft Yahei&quot;; font-size: 14px; background-color: rgb(0, 0, 0);"></span></span>

													<p style="font-family: &quot;Microsoft Yahei&quot;; box-sizing: border-box; margin: 0px; line-height: 1.6em; color: rgb(235, 178, 87); font-size: 14px;"><span style="line-height:150%;">${list2[3].fPurposeJieshao }</span></p>

												</div>
											</div>
										</div>
										<form id="jvForm134780" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134780" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134780" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134780" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134780" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134780" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134780" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134780" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134780" value="1">
										</form>
									</div>
									<div id="module134779" _float="1" style="left:355px;top:507px;position: absolute;height:143px;width:162px;" class="form text_list form134779 modulePattern0">
										<div style="width: 100%;height: 100%;">
											<style id="styleModuleTest134779" type="text/css">
												#module134779.modulePattern17401 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17401 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17402 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17403 .titleText {
													border-left-color: rgb(222, 44, 46);
													color: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17404 .formBanner {
													background: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17405 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17405 .titleText:after {
													border-left-color: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17406 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17406 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17407 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17407 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17408 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17409 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17410 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17410 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17411 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17412 .titleText {
													border-color: rgb(222, 44, 46);
												}
												
												#module134779.modulePattern17413 .titleText {
													background: rgb(222, 44, 46);
												}
											</style>
											<div class="formBanner formBanner134779">
												<div class="formBannerTitle formBannerTitle134779">
													<div id="bigg" class="titleText titleText134779" channelname="0">
														<div class="title_zcont">
															文本标题
														</div>
													</div>
													<div class="formBannerMore formBannerMore134779">

													</div>
												</div>
											</div>
											<div class="formMiddle formMiddle134779" style="width: 100%;height: 100%;">
												<div class="ztextbox" style="width: 100%;height: 100%;" ondblclick="Site.editTextStyle($('#134779-moduleLayer .operate-inner'));">

													<h3 style="font-family: &quot;Microsoft Yahei&quot;; box-sizing: border-box; line-height: 1.1; color: rgb(235, 178, 87); margin: 0em; font-size: 24px; display: inline-block; padding-bottom: 0.3em; border-bottom: 3px solid rgb(235, 178, 87);"><span style="line-height:150%;">${list2[2].fPurpose }</span></h3>
													<span style="line-height:150%;"><span style="color: rgb(235, 178, 87); font-family: &quot;Microsoft Yahei&quot;; font-size: 14px; background-color: rgb(0, 0, 0);"></span></span>

													<p style="font-family: &quot;Microsoft Yahei&quot;; box-sizing: border-box; margin: 0px; line-height: 1.6em; color: rgb(235, 178, 87); font-size: 14px;"><span style="line-height:150%;">${list2[2].fPurposeJieshao }</span></p>

												</div>
											</div>
										</div>
										<form id="jvForm134779" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134779" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134779" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134779" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134779" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134779" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134779" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134779" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134779" value="1">
										</form>
									</div>
									<div id="module134777" _float="1" style="left:353px;top:165px;position: absolute;height:162px;width:156px;" class="form text_list form134777 modulePattern0">
										<div style="width: 100%;height: 100%;">
											<style id="styleModuleTest134777" type="text/css">
												#module134777.modulePattern17401 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17401 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17402 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17403 .titleText {
													border-left-color: rgb(222, 44, 46);
													color: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17404 .formBanner {
													background: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17405 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17405 .titleText:after {
													border-left-color: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17406 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17406 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17407 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17407 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17408 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17409 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17410 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17410 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17411 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17412 .titleText {
													border-color: rgb(222, 44, 46);
												}
												
												#module134777.modulePattern17413 .titleText {
													background: rgb(222, 44, 46);
												}
											</style>
											<div class="formBanner formBanner134777">
												<div class="formBannerTitle formBannerTitle134777">
													<div id="bigg" class="titleText titleText134777" channelname="0">
														<div class="title_zcont">
															文本标题
														</div>
													</div>
													<div class="formBannerMore formBannerMore134777">

													</div>
												</div>
											</div>
											<div class="formMiddle formMiddle134777" style="width: 100%;height: 100%;">
												<div class="ztextbox" style="width: 100%;height: 100%;" ondblclick="Site.editTextStyle($('#134777-moduleLayer .operate-inner'));">

													<h3 style="font-family: &quot;Microsoft Yahei&quot;; box-sizing: border-box; line-height: 1.1; color: rgb(235, 178, 87); margin: 0em; font-size: 24px; display: inline-block; padding-bottom: 0.3em; border-bottom: 3px solid rgb(235, 178, 87);"><span style="line-height:150%;">${list2[0].fPurpose }</span></h3>
													<span style="line-height:150%;"><span style="color: rgb(235, 178, 87); font-family: &quot;Microsoft Yahei&quot;; font-size: 14px; background-color: rgb(0, 0, 0);"></span></span>

													<p style="font-family: &quot;Microsoft Yahei&quot;; box-sizing: border-box; margin: 0px; line-height: 1.6em; color: rgb(235, 178, 87); font-size: 14px;"><span style="line-height:150%;">${list2[0].fPurposeJieshao }</span></p>

												</div>
											</div>
										</div>
										<form id="jvForm134777" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134777" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134777" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134777" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134777" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134777" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134777" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134777" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134777" value="1">
										</form>
									</div>
									<div id="module134778" _float="1" style="left:936px;top:163px;position: absolute;height:161px;width:165px;" class="form text_list form134778 modulePattern0">
										<div style="width: 100%;height: 100%;">
											<style id="styleModuleTest134778" type="text/css">
												#module134778.modulePattern17401 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17401 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17402 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17403 .titleText {
													border-left-color: rgb(222, 44, 46);
													color: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17404 .formBanner {
													background: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17405 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17405 .titleText:after {
													border-left-color: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17406 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17406 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17407 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17407 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17408 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17409 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17410 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17410 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17411 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17412 .titleText {
													border-color: rgb(222, 44, 46);
												}
												
												#module134778.modulePattern17413 .titleText {
													background: rgb(222, 44, 46);
												}
											</style>
											<div class="formBanner formBanner134778">
												<div class="formBannerTitle formBannerTitle134778">
													<div id="bigg" class="titleText titleText134778" channelname="0">
														<div class="title_zcont">
															文本标题
														</div>
													</div>
													<div class="formBannerMore formBannerMore134778">

													</div>
												</div>
											</div>
											<div class="formMiddle formMiddle134778" style="width: 100%;height: 100%;">
												<div class="ztextbox" style="width: 100%;height: 100%;" ondblclick="Site.editTextStyle($('#134778-moduleLayer .operate-inner'));">

													<h3 style="font-family: &quot;Microsoft Yahei&quot;; box-sizing: border-box; line-height: 1.1; color: rgb(235, 178, 87); margin: 0em; font-size: 24px; display: inline-block; padding-bottom: 0.3em; border-bottom: 3px solid rgb(235, 178, 87);"><span style="line-height:150%;">${list2[1].fPurpose}</span></h3>
													<span style="line-height:150%;"><span style="color: rgb(235, 178, 87); font-family: &quot;Microsoft Yahei&quot;; font-size: 14px; background-color: rgb(0, 0, 0);"></span></span>

													<p style="font-family: &quot;Microsoft Yahei&quot;; box-sizing: border-box; margin: 0px; line-height: 1.6em; color: rgb(235, 178, 87); font-size: 14px;"><span style="line-height:150%;">${list2[1].fPurposeJieshao }</span></p>

												</div>
											</div>
										</div>
										<form id="jvForm134778" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134778" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134778" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134778" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134778" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134778" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134778" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134778" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134778" value="1">
										</form>
									</div>
									<div id="module160386" _float="1" style="left:927px;top:156px;position: absolute;height:168px;width:177px;" class="form form160386 btnstyle modulePattern0
">
										<div style="height: 100%;">
											<div class="buttonStyle1160386 buttonstyle_01" style="width: 100%;height: 100%;">
												<a  style="

                    width: 100%;height: 100%;line-height: 168px;
                    background-color:rgb(0, 0, 0);" onmouseover="btn_over160386()" onmouseout="btn_out160386()">

												</a>
											</div>
											<form id="jvForm160386" action="">
												<input type="hidden" name="moduleId" value="325">
												<input type="hidden" name="channelId" value="">
												<input type="hidden" name="mcId" value="160386">
												<input type="hidden" name="attr_name" value="按钮模块">
												<input type="hidden" name="attr_styleList" value="325-1">
												<input type="hidden" name="attr_buttonName" value="">
												<input type="hidden" name="attr_lianjie" value="0">
												<input type="hidden" name="attr_buttonSizes" value="1">
												<input type="hidden" name="attr_buttonTextWidth" id="buttonTextWidth" value="177">
												<input type="hidden" name="attr_buttonTextHeight" id="buttonTextHeight" value="168">
												<input type="hidden" name="attr_buttonBgColor" value="#ffffff">
												<input type="hidden" name="attr_buttonBgColor1" value="#eee">
												<input type="hidden" name="attr_buttonBgPicture" value="">
												<input type="hidden" name="attr_butstyle" value="">
												<input type="hidden" name="attr_buttonBgPicture1" value="">
												<input type="hidden" name="attr_buttonTextSize" value="16">
												<input type="hidden" name="attr_buttonTextFamily" value="微软雅黑">
												<input type="hidden" name="attr_buttonTextBold" value="false">
												<input type="hidden" name="attr_buttonTextI" value="false">
												<input type="hidden" name="attr_buttonTextU" value="false">
												<input type="hidden" name="attr_buttonTextColor" value="#333">
												<input type="hidden" name="attr_buttonTextColor1" value="#333">
												<input type="hidden" name="attr_buttonBolColor" value="#bdbdbd">
												<input type="hidden" name="attr_buttonBolWidth" value="1">
												<input type="hidden" name="attr_buttonBolStyle" value="0">
												<input type="hidden" name="attr_buttonBolTopWidth" value="">
												<input type="hidden" name="attr_buttonBolLeftWidth" value="">
												<input type="hidden" name="attr_buttonBolRightWidth" value="">
												<input type="hidden" name="attr_buttonBolBottomWidth" value="">
												<input type="hidden" name="attr_buttonA1" value="0">
												<input type="hidden" name="attr_buttonA2" value="0">
												<input type="hidden" name="attr_radiusLock" value="0">
												<input type="hidden" name="attr_buttonA3" value="0">
												<input type="hidden" name="attr_buttonA4" value="0">
												<input type="hidden" name="attr_pictureStyle" value="buttonstyle_01">
												<input type="hidden" name="attr_styleDefinedColor" value="rgb(0, 0, 0)">
												<input type="hidden" name="attr_buttonUrl" value="">
												<input type="hidden" name="attr_backgroundStyle" id="backgroundStyle1" value="0">
												<input type="hidden" name="attr_wordSetup" id="wordSetup1" value="0">
												<input type="hidden" name="attr_wordsStyle" id="wordStyle1" value="0">
												<input type="hidden" name="attr_buttonFram" id="buttonFram1" value="0">
												<input type="hidden" name="attr_buttonFillet" id="buttonFillet1" value="0">
											</form>
										</div>
										<form id="jvForm160386" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima160386" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue160386" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger160386" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed160386" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity160386" value="35">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima160386" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue160386" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText160386" value="1">
										</form>

									</div>
									<div id="module134772" _float="1" style="left:366px;top:-83px;position: absolute;height:176px;width:399px;" class="form text_list form134772 modulePattern0">
										<div style="width: 100%;height: 100%;">
											<style id="styleModuleTest134772" type="text/css">
												#module134772.modulePattern17401 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17401 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17402 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17403 .titleText {
													border-left-color: rgb(222, 44, 46);
													color: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17404 .formBanner {
													background: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17405 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17405 .titleText:after {
													border-left-color: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17406 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17406 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17407 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17407 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17408 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17409 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17410 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17410 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17411 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17412 .titleText {
													border-color: rgb(222, 44, 46);
												}
												
												#module134772.modulePattern17413 .titleText {
													background: rgb(222, 44, 46);
												}
											</style>
											<div class="formBanner formBanner134772">
												<div class="formBannerTitle formBannerTitle134772">
													<div id="bigg" class="titleText titleText134772" channelname="0">
														<div class="title_zcont">
															文本标题
														</div>
													</div>
													<div class="formBannerMore formBannerMore134772">

													</div>
												</div>
											</div>
											<div class="formMiddle formMiddle134772" style="width: 100%;height: 100%;">
												<div class="ztextbox" style="width: 100%;height: 100%;" ondblclick="Site.editTextStyle($('#134772-moduleLayer .operate-inner'));">

													<div style="text-align: center;"><span style="color:#000;"><span style="font-family:微软雅黑;"><span style="font-size:24px;">型男靓女制造俱乐部</span><br>
														<span style="line-height:400%;"><span style="font-size:16px;">健身&nbsp; |&nbsp; 娱乐&nbsp; |&nbsp; 休闲</span></span>
														</span>
														</span>
													</div>

												</div>
											</div>
										</div>
										<form id="jvForm134772" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134772" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134772" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134772" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134772" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134772" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134772" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134772" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134772" value="1">
										</form>
									</div>
									<div id="module134774" _float="1" style="left:14px;top:156px;position: absolute;;width:540px;height:300px;" class="form pic_module form134774 modulePattern0">
										<div style="height:100%;box-sizing:border-box;">

											<div class="formMiddle formMiddle134774  hover_style00" style="height:100%;">
												<div class="picture_shadebox ">

													<a  target="_blank">

														<img src="<%=request.getContextPath() %>/serverimg/${list2[0].imgname}" id="134774preImg1" width="100%" height="100%">

													</a>
													<form id="jvForm134774" action="" labelwidth="12">
														<input type="hidden" name="attr_styleList" value="608-23">
														<input type="hidden" name="attr_name" value="图片模块">
														<input type="hidden" name="attr_radius" value="">
														<input type="hidden" name="mcId" value="134774">
														<input type="hidden" name="moduleId" value="351">
														<input type="hidden" name="attr_imageLink" value="">
														<input type="hidden" name="attr_linkTarget" value="1">
														<input type="hidden" name="attr_urlType" value="">
														<input type="hidden" name="attr_shapetype" value="">
														<input type="hidden" name="attr_imageWidth" value="540" id="attrImageWidht">
														<input type="hidden" name="attr_imageHeight" value="300" id="attrImageHeight">

														<input type="hidden" name="attr_imageInitialWidth" value="400" id="attrImageInitialWidht">
														<input type="hidden" name="attr_imageInitialHeight" value="400" id="attrImageInitialHeight">

														<input type="hidden" name="attr_imageUrl" value="http://image.fast.126net.cn/group2/M00/01/8A/wKgADluksKOAD_RbAACRrhW0Pf8289.jpg" id="uploadImgPath134774">
														<input type="hidden" name="attr_hoverEffect" value="0">
													</form>
												</div>
											</div>
										</div>
										<form id="jvForm134774" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134774" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134774" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134774" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134774" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134774" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134774" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134774" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134774" value="1">
										</form>

									</div>
									<div id="module134775" _float="1" style="left:595px;top:156px;position: absolute;;width:540px;height:300px;" class="form pic_module form134775 modulePattern0">
										<div style="height:100%;box-sizing:border-box;">

											<div class="formMiddle formMiddle134775  hover_style00" style="height:100%;">
												<div class="picture_shadebox ">

													<a  target="_blank">

														<img src="<%=request.getContextPath() %>/serverimg/${list2[1].imgname}" id="134775preImg1" width="100%" height="100%">

													</a>
													<form id="jvForm134775" action="" labelwidth="12">
														<input type="hidden" name="attr_styleList" value="608-23">
														<input type="hidden" name="attr_name" value="图片模块">
														<input type="hidden" name="attr_radius" value="">
														<input type="hidden" name="mcId" value="134775">
														<input type="hidden" name="moduleId" value="351">
														<input type="hidden" name="attr_imageLink" value="">
														<input type="hidden" name="attr_linkTarget" value="1">
														<input type="hidden" name="attr_urlType" value="">
														<input type="hidden" name="attr_shapetype" value="">
														<input type="hidden" name="attr_imageWidth" value="540" id="attrImageWidht">
														<input type="hidden" name="attr_imageHeight" value="300" id="attrImageHeight">

														<input type="hidden" name="attr_imageInitialWidth" value="400" id="attrImageInitialWidht">
														<input type="hidden" name="attr_imageInitialHeight" value="400" id="attrImageInitialHeight">

														<input type="hidden" name="attr_imageUrl" value="http://image.fast.126net.cn/group2/M00/01/8A/wKgADluksK-AaliuAABcej-0FDM082.jpg" id="uploadImgPath134775">
														<input type="hidden" name="attr_hoverEffect" value="0">
													</form>
												</div>
											</div>
										</div>
										<form id="jvForm134775" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134775" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134775" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134775" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134775" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134775" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134775" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134775" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134775" value="1">
										</form>

									</div>
									<div id="module134773" _float="1" style="left:13px;top:497px;position: absolute;;width:540px;height:300px;" class="form pic_module form134773 modulePattern0">
										<div style="height:100%;box-sizing:border-box;">

											<div class="formMiddle formMiddle134773  hover_style00" style="height:100%;">
												<div class="picture_shadebox ">

													<a  target="_blank">

														<img src="<%=request.getContextPath() %>/serverimg/${list2[2].imgname}" id="134773preImg1" width="100%" height="100%">

													</a>
													<form id="jvForm134773" action="" labelwidth="12">
														<input type="hidden" name="attr_styleList" value="608-23">
														<input type="hidden" name="attr_name" value="图片模块">
														<input type="hidden" name="attr_radius" value="">
														<input type="hidden" name="mcId" value="134773">
														<input type="hidden" name="moduleId" value="351">
														<input type="hidden" name="attr_imageLink" value="">
														<input type="hidden" name="attr_linkTarget" value="1">
														<input type="hidden" name="attr_urlType" value="">
														<input type="hidden" name="attr_shapetype" value="">
														<input type="hidden" name="attr_imageWidth" value="540" id="attrImageWidht">
														<input type="hidden" name="attr_imageHeight" value="300" id="attrImageHeight">

														<input type="hidden" name="attr_imageInitialWidth" value="400" id="attrImageInitialWidht">
														<input type="hidden" name="attr_imageInitialHeight" value="400" id="attrImageInitialHeight">

														<input type="hidden" name="attr_imageUrl" value="http://image.fast.126net.cn/group2/M00/01/8A/wKgADluksJqAGMsHAADxmTrAa7w833.jpg" id="uploadImgPath134773">
														<input type="hidden" name="attr_hoverEffect" value="0">
													</form>
												</div>
											</div>
										</div>
										<form id="jvForm134773" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134773" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134773" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134773" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134773" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134773" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134773" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134773" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134773" value="1">
										</form>

									</div>
									<div id="module134776" _float="1" style="left:595px;top:496px;position: absolute;;width:540px;height:300px;" class="form pic_module form134776 modulePattern0">
										<div style="height:100%;box-sizing:border-box;">

											<div class="formMiddle formMiddle134776  hover_style00" style="height:100%;">
												<div class="picture_shadebox ">

													<a  target="_blank">

														<img src="<%=request.getContextPath() %>/serverimg/${list2[3].imgname}" id="134776preImg1" width="100%" height="100%">

													</a>
													<form id="jvForm134776" action="" labelwidth="12">
														<input type="hidden" name="attr_styleList" value="608-23">
														<input type="hidden" name="attr_name" value="图片模块">
														<input type="hidden" name="attr_radius" value="">
														<input type="hidden" name="mcId" value="134776">
														<input type="hidden" name="moduleId" value="351">
														<input type="hidden" name="attr_imageLink" value="">
														<input type="hidden" name="attr_linkTarget" value="1">
														<input type="hidden" name="attr_urlType" value="">
														<input type="hidden" name="attr_shapetype" value="">
														<input type="hidden" name="attr_imageWidth" value="540" id="attrImageWidht">
														<input type="hidden" name="attr_imageHeight" value="300" id="attrImageHeight">

														<input type="hidden" name="attr_imageInitialWidth" value="400" id="attrImageInitialWidht">
														<input type="hidden" name="attr_imageInitialHeight" value="400" id="attrImageInitialHeight">

														<input type="hidden" name="attr_imageUrl" value="http://image.fast.126net.cn/group1/M00/04/4F/wKgADFuksKqAAaJlAACwb2Zu9Ls924.jpg" id="uploadImgPath134776">
														<input type="hidden" name="attr_hoverEffect" value="0">
													</form>
												</div>
											</div>
										</div>
										<form id="jvForm134776" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134776" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134776" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134776" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134776" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134776" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134776" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134776" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134776" value="1">
										</form>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="webFooterbkcolumn" class="demo" style="display: block;">
				<div class="lyrow webFooterbklyrow">
					<div class="view">
						<div class="row-fluid-1 clearfix">
							<div class="webFooterbkcolumn" style="width:100%">
								<div id="webFooterbk" class="web_footerbk">
									<div id="design_foot" class="footer_zh">
										<div id="foot_designbox" class="foot_bk">

										</div>
										<div class="c-copyright">
											<div style="text-align: center;"><span style="color:#FFFFFF;"></span><span style="font-size:12px;"><span style="color: rgb(255, 255, 255);">COPYRIGHT (©) 2018 Hot Hit.</span><span style="color: rgb(255, 255, 255);">&nbsp;京I</span><span style="color:#ffffff;"><span style="text-align: center;">CP备150530</span><span style="text-align: center;">65</span>号-1</span>
												</span>
											</div>
										</div>
										<div class="support"> <span class="yanshi_stip" style="color: rgb(255, 255, 255);">本站内容、图片、视频为网站模板演示数据，如有涉及侵犯版权，请联系我们提供书面反馈，我们核实后会立即删除。</span>

										</div>
									</div>
								</div>
							</div>

							<div class="float_div_class">
								<div id="module134768" _float="1" style="left:390px;top:22px;position: absolute;height:93px;width:341px;" class="form text_list form134768 modulePattern0">
									<div style="width: 100%;height: 100%;">
										<style id="styleModuleTest134768" type="text/css">
											#module134768.modulePattern17401 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17401 .titleText:after {
												background: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17402 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17403 .titleText {
												border-left-color: rgb(222, 44, 46);
												color: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17404 .formBanner {
												background: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17405 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17405 .titleText:after {
												border-left-color: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17406 .titleText {
												background: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17406 .formBanner {
												border-bottom-color: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17407 .titleText {
												background: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17407 .formBanner {
												border-bottom-color: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17408 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17409 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17410 .formBanner {
												border-bottom-color: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17410 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17411 .titleText:after {
												background: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17412 .titleText {
												border-color: rgb(222, 44, 46);
											}
											
											#module134768.modulePattern17413 .titleText {
												background: rgb(222, 44, 46);
											}
										</style>
										<div class="formBanner formBanner134768">
											<div class="formBannerTitle formBannerTitle134768">
												<div id="bigg" class="titleText titleText134768" channelname="0">
													<div class="title_zcont">
														文本标题
													</div>
												</div>
												<div class="formBannerMore formBannerMore134768">

												</div>
											</div>
										</div>
										<div class="formMiddle formMiddle134768" style="width: 100%;height: 100%;">
											<div class="ztextbox" style="width: 100%;height: 100%;" ondblclick="Site.editTextStyle($('#134768-moduleLayer .operate-inner'));">

												<span style="line-height:200%;"><span style="color: rgb(235, 178, 87); font-family: 微软雅黑; font-size: 16px;">开始运动：</span><br style="color: rgb(235, 178, 87); font-family: 微软雅黑;">
												<span style="color: rgb(235, 178, 87); font-family: 微软雅黑; font-size: 14px;">QQ：464348125<br>
Tel：400-868-9943</span></span>

											</div>
										</div>
									</div>
									<form id="jvForm134768" action="">
										<!-- 模块动画名称 -->
										<input type="hidden" name="attr_bananima" id="bananima134768" value="0">
										<!-- 模块动画方向 -->
										<input type="hidden" name="attr_checkvalue" id="checkvalue134768" value="">
										<!-- 模块动画单次/多次播放 -->
										<input type="hidden" name="attr_trigger" id="atrigger134768" value="1">
										<!-- 模块动画速度 -->
										<input type="hidden" name="attr_Animatespeed" id="speed134768" value="0.5">
										<!-- 模块透明度 -->
										<input type="hidden" name="attr_clarity" id="clarity134768" value="0">
										<!-- 图文动画名称 -->
										<input type="hidden" name="attr_textanima" id="textanima134768" value="0">
										<!-- 图文动画方向 -->
										<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134768" value="">
										<!-- 图文动画单次/多次播放 -->
										<input type="hidden" name="attr_triggerText" id="atriggerText134768" value="1">
									</form>
								</div>
								<div id="module134769" _float="1" style="left:766px;top:22px;position: absolute;height:94px;width:339px;" class="form text_list form134769 modulePattern0">
									<div style="width: 100%;height: 100%;">
										<style id="styleModuleTest134769" type="text/css">
											#module134769.modulePattern17401 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17401 .titleText:after {
												background: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17402 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17403 .titleText {
												border-left-color: rgb(222, 44, 46);
												color: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17404 .formBanner {
												background: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17405 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17405 .titleText:after {
												border-left-color: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17406 .titleText {
												background: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17406 .formBanner {
												border-bottom-color: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17407 .titleText {
												background: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17407 .formBanner {
												border-bottom-color: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17408 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17409 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17410 .formBanner {
												border-bottom-color: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17410 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17411 .titleText:after {
												background: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17412 .titleText {
												border-color: rgb(222, 44, 46);
											}
											
											#module134769.modulePattern17413 .titleText {
												background: rgb(222, 44, 46);
											}
										</style>
										<div class="formBanner formBanner134769">
											<div class="formBannerTitle formBannerTitle134769">
												<div id="bigg" class="titleText titleText134769" channelname="0">
													<div class="title_zcont">
														文本标题
													</div>
												</div>
												<div class="formBannerMore formBannerMore134769">

												</div>
											</div>
										</div>
										<div class="formMiddle formMiddle134769" style="width: 100%;height: 100%;">
											<div class="ztextbox" style="width: 100%;height: 100%;" ondblclick="Site.editTextStyle($('#134769-moduleLayer .operate-inner'));">

												<span style="line-height:200%;"><span style="color: rgb(235, 178, 87); font-family: 微软雅黑; font-size: 16px;">加盟合作：</span><br style="color: rgb(235, 178, 87); font-family: 微软雅黑;">
												<span style="color: rgb(235, 178, 87); font-family: 微软雅黑; font-size: 14px;">QQ：1592147<br>
Tel：010-669-8877</span></span>

											</div>
										</div>
									</div>
									<form id="jvForm134769" action="">
										<!-- 模块动画名称 -->
										<input type="hidden" name="attr_bananima" id="bananima134769" value="0">
										<!-- 模块动画方向 -->
										<input type="hidden" name="attr_checkvalue" id="checkvalue134769" value="">
										<!-- 模块动画单次/多次播放 -->
										<input type="hidden" name="attr_trigger" id="atrigger134769" value="1">
										<!-- 模块动画速度 -->
										<input type="hidden" name="attr_Animatespeed" id="speed134769" value="0.5">
										<!-- 模块透明度 -->
										<input type="hidden" name="attr_clarity" id="clarity134769" value="0">
										<!-- 图文动画名称 -->
										<input type="hidden" name="attr_textanima" id="textanima134769" value="0">
										<!-- 图文动画方向 -->
										<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134769" value="">
										<!-- 图文动画单次/多次播放 -->
										<input type="hidden" name="attr_triggerText" id="atriggerText134769" value="1">
									</form>
								</div>
								<div id="module134767" _float="1" style="left:8px;top:22px;position: absolute;height:92px;width:342px;" class="form text_list form134767 modulePattern0">
									<div style="width: 100%;height: 100%;">
										<style id="styleModuleTest134767" type="text/css">
											#module134767.modulePattern17401 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17401 .titleText:after {
												background: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17402 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17403 .titleText {
												border-left-color: rgb(222, 44, 46);
												color: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17404 .formBanner {
												background: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17405 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17405 .titleText:after {
												border-left-color: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17406 .titleText {
												background: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17406 .formBanner {
												border-bottom-color: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17407 .titleText {
												background: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17407 .formBanner {
												border-bottom-color: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17408 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17409 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17410 .formBanner {
												border-bottom-color: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17410 .titleText {
												color: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17411 .titleText:after {
												background: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17412 .titleText {
												border-color: rgb(222, 44, 46);
											}
											
											#module134767.modulePattern17413 .titleText {
												background: rgb(222, 44, 46);
											}
										</style>
										<div class="formBanner formBanner134767">
											<div class="formBannerTitle formBannerTitle134767">
												<div id="bigg" class="titleText titleText134767" channelname="0">
													<div class="title_zcont">
														文本标题
													</div>
												</div>
												<div class="formBannerMore formBannerMore134767">

												</div>
											</div>
										</div>
										<div class="formMiddle formMiddle134767" style="width: 100%;height: 100%;">
											<div class="ztextbox" style="width: 100%;height: 100%;" ondblclick="Site.editTextStyle($('#134767-moduleLayer .operate-inner'));">

												<span style="color:#ebb257;"><span style="line-height:200%;"><span style="font-family:微软雅黑;"><span style="font-size:16px;">运动问题咨询：</span><br>
												<span style="font-size:14px;">QQ：947984552<br>
Tel：138-2255-6644</span></span>
												</span>
												</span>

											</div>
										</div>
									</div>
									<form id="jvForm134767" action="">
										<!-- 模块动画名称 -->
										<input type="hidden" name="attr_bananima" id="bananima134767" value="0">
										<!-- 模块动画方向 -->
										<input type="hidden" name="attr_checkvalue" id="checkvalue134767" value="">
										<!-- 模块动画单次/多次播放 -->
										<input type="hidden" name="attr_trigger" id="atrigger134767" value="1">
										<!-- 模块动画速度 -->
										<input type="hidden" name="attr_Animatespeed" id="speed134767" value="0.5">
										<!-- 模块透明度 -->
										<input type="hidden" name="attr_clarity" id="clarity134767" value="0">
										<!-- 图文动画名称 -->
										<input type="hidden" name="attr_textanima" id="textanima134767" value="0">
										<!-- 图文动画方向 -->
										<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134767" value="">
										<!-- 图文动画单次/多次播放 -->
										<input type="hidden" name="attr_triggerText" id="atriggerText134767" value="1">
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<input id="isHome" type="hidden" value="1">
		<input type="hidden" value="false" name="top">
		<input id="siteWeightValue" type="hidden" value="1">
		<div id="module_del_data"></div>
		<div id="foot_returnTop" class="backTop" style="display: none;">
			<a></a>
		</div>
		<script type="text/javascript">
			$("#foot_returnTop").click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 500);
				return false;
			})
			var SiteLanguage = "cn";
			var locationDomain = "yundong02.mb.126net.cn";
		</script>
		<script src="<%=request.getContextPath() %>/exercise/aboutwm/jquery-ui-core.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/aboutwm/qrcode.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/aboutwm/jquery_002.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/aboutwm/jquery.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/aboutwm/jquery_004.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/aboutwm/jrf.js" type="text/javascript"></script>

		<script src="<%=request.getContextPath() %>/exercise/aboutwm/modernizr-1.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/aboutwm/jquery_003.js" type="text/javascript"></script>

		<script id="manageMinSupport" src="<%=request.getContextPath() %>/exercise/aboutwm/manage.js" data="0" language="" sitetplsolution="389f00001" type="text/javascript" charset="utf-8"></script>

		<script src="<%=request.getContextPath() %>/exercise/aboutwm/sliderzxr.js" charset="utf-8"></script>
		<script src="<%=request.getContextPath() %>/exercise/aboutwm/ScrollTrigger.js" charset="utf-8"></script>
		<!-- <script language="javascript" type="text/javascript" src="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js"></script> -->
		<script src="<%=request.getContextPath() %>/exercise/aboutwm/front.js" type="text/javascript" charset="utf-8"></script>
		<script src="<%=request.getContextPath() %>/exercise/aboutwm/product.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			$(document).ready(function() {
				var showModule = 1;

				if(/Android|webOS|MicroMessenger|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
					$("#pageMain").addClass("mobi_pagemain");
				}

			})
			window._bannerData = null;
			var newCopyRight2019 = 0;
		</script>
		<script type="text/javascript" src="<%=request.getContextPath() %>/exercise/aboutwm/login_status.htm"></script>
		<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath() %>/exercise/aboutwm/navigator.js"></script>
	</body>

</html>