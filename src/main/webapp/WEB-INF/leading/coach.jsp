<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>教练风采 - 运动俱乐部模板二</title>
		<meta name="keywords" content="">
		<meta name="description" content="">

		<link href="<%=request.getContextPath() %>/exercise/coach/enterprise.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/front.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/nav.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/border.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/module.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/tabstyle.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/styleDesign.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/bootstrap-combined.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/layoutit.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/contentstyle.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/channletree.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/product.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/photo.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/jquery_002.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/jquery.css" rel="stylesheet" type="text/css">
		<!-- <link href="/res/common/css/jrf.dialog.css?v=20190321" rel="stylesheet" type="text/css"/>-->
		<link href="<%=request.getContextPath() %>/exercise/coach/searchBoxStyle1.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/coach/member.css" rel="stylesheet" type="text/css">
		<link type="text/css" href="<%=request.getContextPath() %>/exercise/coach/icommon.css" rel="stylesheet">
		<link rel="stylesheet" href="<%=request.getContextPath() %>/exercise/coach/slider8-111.css">
		<link href="<%=request.getContextPath() %>/exercise/coach/logopreiew.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="<%=request.getContextPath() %>/exercise/coach/animate.css">
		<script src="<%=request.getContextPath() %>/exercise/coach/jquery-core.js" type="text/javascript"></script>
		<script type="text/javascript" src="<%=request.getContextPath() %>/exercise/coach/layer.js"></script>
		<link rel="stylesheet" href="<%=request.getContextPath() %>/exercise/coach/layer.css" id="layui_layer_skinlayercss" style="">
		<script type="text/javascript">
			var phone = window.location.host;
			document.domain = phone;
		</script>
		<script src="<%=request.getContextPath() %>/exercise/coach/slider.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/coach/swiper.js"></script>
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
			var channelId = 26030;
			var channelTemplateId = 63973;
		</script>
		<link rel="stylesheet" href="<%=request.getContextPath() %>/exercise/coach/swiper4.css">
		<link href="<%=request.getContextPath() %>/exercise/coach/jrf.css" type="text/css" rel="styleSheet" id="layermcss">
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
			
			#module134635 .formBanner134635 {
				display: none;
			}
			
			#module134635 {
				width: 346px;
			}
			
			#module134635 {
				z-index: 501;
			}
			
			#module134788 .formBanner134788 {
				display: none;
			}
			
			#module134789 .formBanner134789 {
				display: none;
			}
			
			#module134789 {
				margin-right: 15px;
			}
			
			#module134789 {
				margin-left: 25px;
			}
			
			#module134789 {
				margin-top: 30px;
			}
			
			#module134789 {
				margin-bottom: 30px;
			}
			
			#module134790 .formBanner134790 {
				display: none;
			}
			
			#module134790 {
				z-index: 501;
			}
			
			#module134790 {
				width: 470px;
			}
			
			#module134791 .formBanner134791 {
				display: none;
			}
			
			#module134791 {
				margin-top: 0px;
			}
			
			#module134791 {
				margin-bottom: 30px;
			}
			
			#module134791 {
				width: 100%;
			}
			
			#module134791 .formMiddle134791 {
				padding-right: 0px;
			}
			
			#module134791 .formMiddle134791 {
				padding-left: 0px;
			}
			
			#module134791 .formMiddle134791 {
				padding-top: 0px;
			}
			
			#module134791 .formMiddle134791 {
				padding-bottom: 0px;
			}
			
			#row55146 {
				background-repeat: no-repeat;
			}
			
			#row55146 {
				background-position: center center;
			}
			
			#row55146 {
				background-image: url(http://image.fast.126net.cn/group2/M00/01/8A/wKgADluku-6AOxmxAAB-pAI8Bpk047.png);
			}
		</style>
		<link href="<%=request.getContextPath() %>/exercise/coach/jrf.css" type="text/css" rel="styleSheet" id="layermcss">
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
							<a title="会员中心" target="_blank" class="top_center">会员中心</a>
							<b>|</b>
							<a href="javascript:void(0);" target="_top" id="logout" class="top_quit" onclick="logout(); return false">退出</a>
						</div>

						<div class="weidenglu">
							<span class="welcome_text">您好，欢迎来到&nbsp;&nbsp;运动俱乐部模板二!</span>
							<a title="登录" class="top_login">登录</a>
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
							<a><img id="logoimg" src="<%=request.getContextPath() %>/exercise/coach/wKgADlukf-iANkQtAAASr9mQaaA905.png" title="运动俱乐部模板二"></a>
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
										<div class="item " id="firstItem26028" index="26028">
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
										<div class="item 				itemSelected
" id="firstItem26030" index="26030">
											<input type="hidden" id="channelIndexId" value="26030">
											<span class="itemLeft"></span>
											<span class="itemCenter">
													<a href="<%=request.getContextPath() %>/FrontController/coach" title=""><i class="itemName0">教练风采</i></a>
												</span>
											<span class="itemRight"></span>
										</div>
										<div class="itemSep"></div>
										<div class="item" id="firstItem26027" index="26027">
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
							<div class="row-fluid-1 clearfix" id="row277">
								<div class="span12">
									<div id="module134788" style="" class="form pic_module form134788 modulePattern0">
										<div style="box-sizing:border-box;">

											<div class="formMiddle formMiddle134788  hover_style00">
												<div class="picture_shadebox ">
													<a  target="_blank">
														<img src="<%=request.getContextPath() %>/serverimg/${list7[3].imgname}" id="134788preImg1" width="1920" height="500">
													</a>
													<form id="jvForm134788" action="" labelwidth="12">
														<input type="hidden" name="attr_styleList" value="608-23">
														<input type="hidden" name="attr_name" value="图片模块">
														<input type="hidden" name="attr_radius" value="">
														<input type="hidden" name="mcId" value="134788">
														<input type="hidden" name="moduleId" value="351">
														<input type="hidden" name="attr_imageLink" value="">
														<input type="hidden" name="attr_linkTarget" value="1">
														<input type="hidden" name="attr_urlType" value="">
														<input type="hidden" name="attr_shapetype" value="">
														<input type="hidden" name="attr_imageWidth" value="1920" id="attrImageWidht">
														<input type="hidden" name="attr_imageHeight" value="500" id="attrImageHeight">

														<input type="hidden" name="attr_imageInitialWidth" value="400" id="attrImageInitialWidht">
														<input type="hidden" name="attr_imageInitialHeight" value="400" id="attrImageInitialHeight">

														<input type="hidden" name="attr_imageUrl" value="http://image.fast.126net.cn/group2/M00/01/8A/wKgADlukuvSAKOixAADJR-b2kQI266.jpg" id="uploadImgPath134788">
														<input type="hidden" name="attr_hoverEffect" value="0">
													</form>
												</div>
											</div>
										</div>
										<form id="jvForm134788" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134788" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134788" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134788" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134788" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134788" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134788" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134788" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134788" value="1">
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
							<div class="row-fluid ui-resizable-disabled ui-state-disabled clearfix" id="row40836" _heightstatus="2">
								<div class="span12">
									<!-- 文章列表 图+摘要 -->
									<div id="module134791" style="" class="form form134791 contenttext modulePattern0">
										<div>
											<style id="styleModuleTest134791" type="text/css">
												#module134791.modulePattern17401 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17401 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17402 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17403 .titleText {
													border-left-color: rgb(222, 44, 46);
													color: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17404 .formBanner {
													background: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17405 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17405 .titleText:after {
													border-left-color: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17406 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17406 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17407 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17407 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17408 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17409 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17410 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17410 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17411 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17412 .titleText {
													border-color: rgb(222, 44, 46);
												}
												
												#module134791.modulePattern17413 .titleText {
													background: rgb(222, 44, 46);
												}
											</style>
											<div class="formBanner formBanner134791">
												<div class="formBannerTitle formBannerTitle134791">
													<div id="bigg" class="titleText titleText134791" channelname="0">
														<div class="title_zcont">
															文章列表
														</div>
													</div>
													<div class="formBannerMore formBannerMore134791">

													</div>
												</div>
											</div>
											<ul class="formMiddle formMiddle134791 list_style107">

												<c:forEach items="${shiTi }" var="obj"> 
														<li>
															<div class="formMiddleCenter list_title formMiddleCenter134791" style="cursor: move;">
																<!-- 简短标题 -->
																<div class="formMiddleContent formMiddleContent134791 contentLine">
																	<a  class="list_pic_l" title="" target="_blank">
																		<img src="<%=request.getContextPath() %>/file/${obj.imgname}" target="_blank" width="79" height="79" align="middle">
																		<div class="c-imgshadow"></div>
																	</a>
																	<div class="list_pic_r">
																		<div class="c-time">${obj.shijian }</div>
	
																		<!-- 头条推荐 -->
																		<!-- 显示分类 -->
																		<a class="list_title" href= title="Carina" target="_blank">
	
																			<!-- 任燕龙修改 2016年12月20日18:22:03  由于 文章列表，常规选项中简短标题设置为不使用  结果：文章列表依旧显示简短标题-->
																			<span style="">${obj.jlname }</span>
																		</a>
	
																		<!-- 后面左边显示日期 -->
	
																		<!-- 后面右边显示日期 -->
	
																		<div class="content_text form_lineheight">${obj.jljs }
																		</div>
	
																	</div>
																</div>
	
															</div>
														</li>
												
												</c:forEach>

											</ul>
										</div>
										<div class="pagebar">
											<div class="pagination-list pagination-list02">
												<div class="pagination-main">
													<a class="pagination-item prev-page">&lt;</a>
													<a onclick="_goto134791Page(1);" style="background:rgba(235,178,87,1);color: #fff;border-color:rgba(235,178,87,1)" class="pagination-item pagination-current">1</a>
													<a onclick="_goto134791Page(2);" class="pagination-item">2</a>
													<a onclick="_goto134791Page(2);" class="pagination-item next-page">&gt;</a>
												</div>
											</div>
										</div>

										<form id="jvForm134791" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134791" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134791" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134791" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134791" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134791" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134791" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134791" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134791" value="1">
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
		<script src="<%=request.getContextPath() %>/exercise/coach/jquery-ui-core.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/coach/qrcode.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/coach/jquery.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/coach/jquery_002.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/coach/jquery_004.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/coach/jrf.js" type="text/javascript"></script>

		<script src="<%=request.getContextPath() %>/exercise/coach/modernizr-1.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/coach/jquery_003.js" type="text/javascript"></script>

		<script id="manageMinSupport" src="<%=request.getContextPath() %>/exercise/coach/manage.js" data="0" language="" sitetplsolution="389f00001" type="text/javascript" charset="utf-8"></script>

		<script src="<%=request.getContextPath() %>/exercise/coach/sliderzxr.js" charset="utf-8"></script>
		<script src="<%=request.getContextPath() %>/exercise/coach/ScrollTrigger.js" charset="utf-8"></script>
		<!-- <script language="javascript" type="text/javascript" src="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js"></script> -->
		<script src="<%=request.getContextPath() %>/exercise/coach/front.js" type="text/javascript" charset="utf-8"></script>
		<script src="<%=request.getContextPath() %>/exercise/coach/product.js" type="text/javascript" charset="utf-8"></script>
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
		<script type="text/javascript" src="<%=request.getContextPath() %>/exercise/coach/login_status.htm"></script>
		<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath() %>/exercise/coach/navigator.js"></script>
	</body>

</html>