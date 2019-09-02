<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>首页 - 运动俱乐部模板二</title>
		<meta name="keywords" content="">
		<meta name="description" content="">

		<link href="<%=request.getContextPath() %>/exercise/index/enterprise.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/front.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/nav.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/border.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/module.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/tabstyle.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/styleDesign.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/bootstrap-combined.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/layoutit.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/contentstyle.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/channletree.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/product.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/photo.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/jquery_002.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/jquery.css" rel="stylesheet" type="text/css">
		<!-- <link href="/res/common/css/jrf.dialog.css?v=20190321" rel="stylesheet" type="text/css"/>-->
		<link href="<%=request.getContextPath() %>/exercise/index/searchBoxStyle1.css" rel="stylesheet" type="text/css">
		<link href="<%=request.getContextPath() %>/exercise/index/member.css" rel="stylesheet" type="text/css">
		<link type="text/css" href="<%=request.getContextPath() %>/exercise/index/icommon.css" rel="stylesheet">
		<link rel="stylesheet" href="<%=request.getContextPath() %>/exercise/index/slider8-111.css">
		<link href="<%=request.getContextPath() %>/exercise/index/logopreiew.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="<%=request.getContextPath() %>/exercise/index/animate.css">
		<script src="<%=request.getContextPath() %>/exercise/index/jquery-core.js" type="text/javascript"></script>
		<script type="text/javascript" src="<%=request.getContextPath() %>/exercise/index/layer.js"></script>
		<link rel="stylesheet" href="<%=request.getContextPath() %>/exercise/index/layer.css" id="layui_layer_skinlayercss" style="">
		<script type="text/javascript">
			var phone = window.location.host;
			document.domain = phone;
		</script>
		<script src="<%=request.getContextPath() %>/exercise/index/slider.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/index/swiper.js"></script>
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
			var channelId = 0;
			var channelTemplateId = 0;
		</script>
		<link rel="stylesheet" href="<%=request.getContextPath() %>/exercise/index/swiper4.css">
		<link href="<%=request.getContextPath() %>/exercise/index/jrf.css" type="text/css" rel="styleSheet" id="layermcss">
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
			
			#module134755 {
				margin-bottom: 20px;
			}
			
			#module134755 {
				margin-top: 30px;
			}
			
			#module134755 .formBanner134755 {
				display: none;
			}
			
			#module134754 {
				margin-bottom: 0px;
			}
			
			#module134754 {
				margin-top: 38px;
			}
			
			#module134754 .formBanner134754 {
				display: none;
			}
			
			#module134753 {
				width: 40px;
			}
			
			#module134753 {
				z-index: 503;
			}
			
			#module134751 {
				width: 447px;
			}
			
			#module134752 {
				z-index: 502;
			}
			
			#module134752 {
				width: 1098px;
			}
			
			#module134752 .formBanner134752 {
				display: none;
			}
			
			#module134751 {
				z-index: 501;
			}
			
			#module134751 .formBanner134751 {
				display: none;
			}
			
			#module134635 {
				z-index: 501;
			}
			
			#module134635 {
				width: 346px;
			}
			
			#module134635 .formBanner134635 {
				display: none;
			}
			
			#module134757 .formBanner134757 {
				display: none;
			}
			
			#module134758 .formBanner134758 {
				display: none;
			}
			
			#module134758 .formMiddle134758 {
				padding-right: 0px;
			}
			
			#module134758 .formMiddle134758 {
				padding-left: 20px;
			}
			
			#module134758 .formMiddle134758 {
				padding-top: 20px;
			}
			
			#module134758 .formMiddle134758 {
				padding-bottom: 0px;
			}
			
			#module134759 .formBanner134759 {
				display: none;
			}
			
			#module134759 {
				margin-right: 15px;
			}
			
			#module134759 {
				margin-left: 20px;
			}
			
			#module134759 {
				margin-top: 18px;
			}
			
			#module134759 {
				margin-bottom: 0px;
			}
			
			#module134760 .formBanner134760 {
				display: none;
			}
			
			#module134760 {
				margin-top: 30px;
			}
			
			#module134760 {
				margin-bottom: 20px;
			}
			
			#module134761 .formBanner134761 {
				display: none;
			}
			
			#module134761 .formMiddle134761 {
				padding-right: 0px;
			}
			
			#module134761 .formMiddle134761 {
				padding-left: 0px;
			}
			
			#module134761 .formMiddle134761 {
				padding-top: 0px;
			}
			
			#module134761 .formMiddle134761 {
				padding-bottom: 20px;
			}
			
			#module134762 .formBanner134762 {
				display: none;
			}
			
			#module134762 {
				z-index: 501;
			}
			
			#module134762 {
				width: 436px;
			}
			
			#module134763 {
				z-index: 502;
			}
			
			#module134763 {
				width: 200px;
			}
			
			#module134764 .formBanner134764 {
				display: none;
			}
			
			#module134764 .formMiddle134764 {
				padding-right: 0px;
			}
			
			#module134764 .formMiddle134764 {
				padding-left: 0px;
			}
			
			#module134764 .formMiddle134764 {
				padding-top: 0px;
			}
			
			#module134764 .formMiddle134764 {
				padding-bottom: 0px;
			}
			
			#module134765 .formBanner134765 {
				display: none;
			}
			
			#module134765 {
				margin-top: 50px;
			}
			
			#module134765 {
				margin-bottom: 20px;
			}
			
			#module134766 .formBanner134766 {
				display: none;
			}
			
			#module134766 {
				margin-top: 10px;
			}
			
			#module134766 {
				margin-bottom: 30px;
			}
			
			#module134757 .formMiddle134757 {
				padding-right: 10px;
			}
			
			#module134757 .formMiddle134757 {
				padding-left: 10px;
			}
			
			#module134757 .formMiddle134757 {
				padding-top: 20px;
			}
			
			#module134757 .formMiddle134757 {
				padding-bottom: 15px;
			}
			
			#row66585 {
				background-color: rgba(31, 30, 30, 1);
			}
			
			#row62294 {
				height: 376px;
			}
			
			#row62294 {
				background-image: url(http://image.fast.126net.cn/group2/M00/01/89/wKgADlukiDWACDJ0AAAM4lz0oLw438.png);
			}
			
			#row62294 {
				background-position: center center;
			}
			
			#row62294 {
				background-repeat: no-repeat;
			}
			
			#row9575 {
				height: 505px;
			}
			
			#row9575 {
				background-image: url(http://image.fast.126net.cn/group1/M00/01/E9/wKgBS1rVUKWAf1qYAAGQFuuYlig062.jpg);
			}
			
			#row9575 {
				background-position: center center;
			}
			
			#row9575 {
				background-repeat: no-repeat;
			}
			
			#row10045 {
				height: 279px;
			}
			
			#row68116 {
				height: 233px;
			}
			
			#row68116 {
				background-color: rgba(0, 0, 0, 1);
			}
			
			#row10045 {
				background-color: rgba(0, 0, 0, 1);
			}
			
			#row47491 {
				background-repeat: no-repeat;
			}
			
			#row47491 {
				background-position: center center;
			}
			
			#row47491 {
				background-image: url(http://image.fast.126net.cn/group2/M00/01/8A/wKgADluknCqAT5ccAACKohlrAkM043.jpg);
			}
			
			#row47491 {
				height: 249px;
			}
			
			#row66585>div[class^='span']:nth-child(1) {
				width: 33.36363636363636%;
			}
			
			#row66585>div[class^='span']:nth-child(2) {
				width: 32.81818181818182%;
			}
			
			#row66585>div[class^='span']:nth-child(3) {
				width: 33.81818181818182%;
			}
		</style>
		<link href="<%=request.getContextPath() %>/exercise/index/jrf.css" type="text/css" rel="styleSheet" id="layermcss">
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
							<a href="#" title="会员中心" target="_blank" class="top_center">会员中心</a>
							<b>|</b>
							<a href="javascript:void(0);" target="_top" id="logout" class="top_quit" onclick="logout(); return false">退出</a>
						</div>

						<div class="weidenglu">
							<span class="welcome_text">您好，欢迎来到&nbsp;&nbsp;运动俱乐部模板二!</span>
							<a href="#" title="登录" class="top_login">登录</a>
							<b>|</b>
							<a href="#" title="注册" target="_blank" class="top_sign">注册</a>
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
							<a href="#"><img id="logoimg" src="<%=request.getContextPath() %>/exercise/index/wKgADlukf-iANkQtAAASr9mQaaA905.png" title="运动俱乐部模板二"></a>
						</div>
						<div id="multilanguage" siteid="1402">
							<div id="multilanguageDiv">

								<div class="language_select language_style01" style="display: none">
									<ul style="">
										<li class="first_select">
											<div class="lan_item">
												<a href="#" class="txtcolor"><i class="icon"></i><span>中文</span></a>
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
										<div class="item itemSelected" id="firstItem0" index="0">
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
							<div class="row-fluid-1 hfbgcss clearfix" id="hfbg">
								<div class="span12">
									<div class="form form134733 bannerstyle11 modulePattern0 bannercss3" id="module134733" style="">
										<div id="picBox" class="sliderBox swiper-container swiper-container-fade swiper-container-horizontal" style="height: 800px">
											<!-- banner图 -->
											<div id="show_banner" class="swiper-wrapper" index="134733" style="transition-duration: 0ms;">
												<div id="bannerhttp://image.fast.126net.cn/group2/M00/01/89/wKgADlukhSGALPrgAAY16UNAGOo875.jpg" class="swiper-slide swiper-no-swiping swiper-slide-duplicate swiper-slide-duplicate-active" style="background: rgba(0, 0, 0, 0) url(&quot;http://image.fast.126net.cn/group2/M00/01/89/wKgADlukhSGALPrgAAY16UNAGOo875.jpg&quot;) no-repeat scroll center center; width: 1519px; height: 800px; transition-duration: 0ms; opacity: 0; transform: translate3d(0px, 0px, 0px);" img_src="<%=request.getContextPath() %>/file/${list7[0].imgname}" banner_id="http://image.fast.126net.cn/group2/M00/01/89/wKgADlukhSGALPrgAAY16UNAGOo875.jpg" advertising_id="38403" custom_flg="1" onclick="tiaozhuan('')" data-swiper-slide-index="1"></div>
												<div id="bannerhttp://image.fast.126net.cn/group1/M00/04/4F/wKgADFukhRyAL4bSAAMOD4ojeus227.jpg" class="swiper-slide swiper-no-swiping swiper-slide-prev swiper-slide-duplicate-next" style="background: rgba(0, 0, 0, 0) url(&quot;http://image.fast.126net.cn/group1/M00/04/4F/wKgADFukhRyAL4bSAAMOD4ojeus227.jpg&quot;) no-repeat scroll center center; width: 1519px; height: 800px; transition-duration: 0ms; opacity: 0; transform: translate3d(-1519px, 0px, 0px);" img_src="<%=request.getContextPath() %>/file/${list7[0].imgname}" custom_flg="1" onclick="tiaozhuan('')" data-swiper-slide-index="0"></div>
												<div id="bannerhttp://image.fast.126net.cn/group2/M00/01/89/wKgADlukhSGALPrgAAY16UNAGOo875.jpg" class="swiper-slide swiper-no-swiping swiper-slide-active" style="background: rgba(0, 0, 0, 0) url(&quot;http://image.fast.126net.cn/group2/M00/01/89/wKgADlukhSGALPrgAAY16UNAGOo875.jpg&quot;) no-repeat scroll center center; width: 1519px; height: 800px; transition-duration: 0ms; opacity: 1; transform: translate3d(-3038px, 0px, 0px);" img_src="<%=request.getContextPath() %>/file/${list7[0].imgname}" banner_id="http://image.fast.126net.cn/group2/M00/01/89/wKgADlukhSGALPrgAAY16UNAGOo875.jpg" advertising_id="38403" custom_flg="1" onclick="tiaozhuan('')" data-swiper-slide-index="1"></div>
												<div id="bannerhttp://image.fast.126net.cn/group1/M00/04/4F/wKgADFukhRyAL4bSAAMOD4ojeus227.jpg" class="swiper-slide swiper-no-swiping swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" style="background: rgba(0, 0, 0, 0) url(&quot;http://image.fast.126net.cn/group1/M00/04/4F/wKgADFukhRyAL4bSAAMOD4ojeus227.jpg&quot;) no-repeat scroll center center; width: 1519px; height: 800px; transition-duration: 0ms; opacity: 0; transform: translate3d(-4557px, 0px, 0px);" img_src="<%=request.getContextPath() %>/file/${list7[0].imgname}" banner_id="http://image.fast.126net.cn/group1/M00/04/4F/wKgADFukhRyAL4bSAAMOD4ojeus227.jpg" advertising_id="38402" custom_flg="1" onclick="tiaozhuan('')" data-swiper-slide-index="0"></div>
											</div>
											<!-- 分页符样式 01 -->
											<div class="swiper-pagination pagination pagination_02 swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span></div>
											<!-- 分页符样式 03 -->
											<!-- 横幅特效 -->
											<!--  -->
										</div>

									</div>

								</div>
								<div class="float_div_class">
								</div>
							</div>
						</div>
					</div>
					<div class="lyrow">
						<div class="view">
							<div class="row-fluid clearfix" id="row62294">
								<div class="span12" _floatmodule="134752,134751,134753">
									<div id="module134751" _float="1" style="left:598px;top:110px;position: absolute;height:217px;width:450px;" class="form text_list form134751 modulePattern0">
										<div style="width: 100%;height: 100%;">
											<style id="styleModuleTest134751" type="text/css">
												#module134751.modulePattern17401 .titleText {
													color: #0cf;
												}
												
												#module134751.modulePattern17401 .titleText:after {
													background: #0cf;
												}
												
												#module134751.modulePattern17402 .titleText {
													color: #0cf;
												}
												
												#module134751.modulePattern17403 .titleText {
													border-left-color: #0cf;
													color: #0cf;
												}
												
												#module134751.modulePattern17404 .formBanner {
													background: #0cf;
												}
												
												#module134751.modulePattern17405 .titleText {
													color: #0cf;
												}
												
												#module134751.modulePattern17405 .titleText:after {
													border-left-color: #0cf;
												}
												
												#module134751.modulePattern17406 .titleText {
													background: #0cf;
												}
												
												#module134751.modulePattern17406 .formBanner {
													border-bottom-color: #0cf;
												}
												
												#module134751.modulePattern17407 .titleText {
													background: #0cf;
												}
												
												#module134751.modulePattern17407 .formBanner {
													border-bottom-color: #0cf;
												}
												
												#module134751.modulePattern17408 .titleText {
													color: #0cf;
												}
												
												#module134751.modulePattern17409 .titleText {
													color: #0cf;
												}
												
												#module134751.modulePattern17410 .formBanner {
													border-bottom-color: #0cf;
												}
												
												#module134751.modulePattern17410 .titleText {
													color: #0cf;
												}
												
												#module134751.modulePattern17411 .titleText:after {
													background: #0cf;
												}
												
												#module134751.modulePattern17412 .titleText {
													border-color: #0cf;
												}
												
												#module134751.modulePattern17413 .titleText {
													background: #0cf;
												}
											</style>
											<div class="formBanner formBanner134751">
												<div class="formBannerTitle formBannerTitle134751">
													<div id="bigg" class="titleText titleText134751" channelname="0">
														<div class="title_zcont">
															文本标题
														</div>
													</div>
													<div class="formBannerMore formBannerMore134751">

													</div>
												</div>
											</div>
											<div class="formMiddle formMiddle134751" style="width: 100%;height: 100%;">
												<div class="ztextbox" style="width: 100%;height: 100%;" ondblclick="Site.editTextStyle($('#134751-moduleLayer .operate-inner'));">

													<span style="line-height:220%;"><span style="color:#ebb257;"><span style="font-size:14px;"><span style="font-family:微软雅黑;">${banner[0].rJieshao }</span></span>
													</span>
													</span>

												</div>
											</div>
										</div>
										<form id="jvForm134751" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134751" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134751" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134751" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134751" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134751" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134751" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134751" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134751" value="1">
										</form>
									</div>
									<div id="module134752" _float="1" style="left:600px;top:33px;position: absolute;;width:130px;height:59px;" class="form pic_module form134752 modulePattern0">
										<div style="height:100%;box-sizing:border-box;">

											<div class="formMiddle formMiddle134752  hover_style00" style="height:100%;">
												<div class="picture_shadebox ">

													<a href="javascript:void(0);" target="_blank">

														<img src="<%=request.getContextPath() %>/exercise/index/wKgADluki5WAVQtjAAAKsLmLYeM700.png" id="134752preImg1" width="100%" height="100%">

													</a>
													<form id="jvForm134752" action="" labelwidth="12">
														<input type="hidden" name="attr_styleList" value="608-23">
														<input type="hidden" name="attr_name" value="图片模块">
														<input type="hidden" name="attr_radius" value="">
														<input type="hidden" name="mcId" value="134752">
														<input type="hidden" name="moduleId" value="351">
														<input type="hidden" name="attr_imageLink" value="">
														<input type="hidden" name="attr_linkTarget" value="1">
														<input type="hidden" name="attr_urlType" value="">
														<input type="hidden" name="attr_shapetype" value="">
														<input type="hidden" name="attr_imageWidth" value="130" id="attrImageWidht">
														<input type="hidden" name="attr_imageHeight" value="59" id="attrImageHeight">

														<input type="hidden" name="attr_imageInitialWidth" value="400" id="attrImageInitialWidht">
														<input type="hidden" name="attr_imageInitialHeight" value="400" id="attrImageInitialHeight">

														<input type="hidden" name="attr_imageUrl" value="http://image.fast.126net.cn/group2/M00/01/89/wKgADluki5WAVQtjAAAKsLmLYeM700.png" id="uploadImgPath134752">
														<input type="hidden" name="attr_hoverEffect" value="0">
													</form>
												</div>
											</div>
										</div>
										<form id="jvForm134752" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134752" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134752" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134752" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134752" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134752" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134752" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134752" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134752" value="1">
										</form>

									</div>
									<div id="module134753" _float="1" style="left:1004px;top:34px;position: absolute;height:40px;width:40px;" class="form form134753 btnstyle modulePattern0
">
										<div style="height: 100%;">
											<div class="buttonStyle1134753 buttonstyle_01" style="width: 100%;height: 100%;">
												<a href="#" style="

                    width: 100%;height: 100%;line-height: 40px;
                    background-color:rgb(222, 44, 46);                        background-color:rgba(235,178,87,1);
                        background-image:url(http://image.fast.126net.cn/group2/M00/01/89/wKgADlukjGiAEvBKAAAENQw_8LE086.png);
                            background-repeat:no-repeat;
" onmouseover="btn_over134753()" onmouseout="btn_out134753()">

												</a>
											</div>
											<form id="jvForm134753" action="">
												<input type="hidden" name="moduleId" value="325">
												<input type="hidden" name="channelId" value="">
												<input type="hidden" name="mcId" value="134753">
												<input type="hidden" name="attr_name" value="按钮模块">
												<input type="hidden" name="attr_styleList" value="325-1">
												<input type="hidden" name="attr_buttonName" value="">
												<input type="hidden" name="attr_lianjie" value="0">
												<input type="hidden" name="attr_buttonSizes" value="1">
												<input type="hidden" name="attr_buttonTextWidth" id="buttonTextWidth" value="40">
												<input type="hidden" name="attr_buttonTextHeight" id="buttonTextHeight" value="40">
												<input type="hidden" name="attr_buttonBgColor" value="rgba(235,178,87,1)">
												<input type="hidden" name="attr_buttonBgColor1" value="rgba(235,178,87,1)">
												<input type="hidden" name="attr_buttonBgPicture" value="http://image.fast.126net.cn/group2/M00/01/89/wKgADlukjGiAEvBKAAAENQw_8LE086.png">
												<input type="hidden" name="attr_butstyle" value="">
												<input type="hidden" name="attr_buttonBgPicture1" value="http://image.fast.126net.cn/group2/M00/01/89/wKgADlukjGiAEvBKAAAENQw_8LE086.png">
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
												<input type="hidden" name="attr_styleDefinedColor" value="rgb(222, 44, 46)">
												<input type="hidden" name="attr_buttonUrl" value="/aboutUs/index.jhtml">
												<input type="hidden" name="attr_backgroundStyle" id="backgroundStyle1" value="1">
												<input type="hidden" name="attr_wordSetup" id="wordSetup1" value="0">
												<input type="hidden" name="attr_wordsStyle" id="wordStyle1" value="0">
												<input type="hidden" name="attr_buttonFram" id="buttonFram1" value="0">
												<input type="hidden" name="attr_buttonFillet" id="buttonFillet1" value="0">
											</form>
										</div>
										<form id="jvForm134753" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134753" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134753" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134753" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134753" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134753" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134753" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134753" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134753" value="1">
										</form>

									</div>
									<div id="module134754" style="" class="form pic_module form134754 modulePattern0">
										<div style="box-sizing:border-box;">

											<div class="formMiddle formMiddle134754  hover_style00">
												<div class="picture_shadebox ">

													<a target="_blank">

														<img src="<%=request.getContextPath() %>/serverimg/${list2[0].imgname}" id="134754preImg1" width="555" height="300">

													</a>
													<form id="jvForm134754" action="" labelwidth="12">
														<input type="hidden" name="attr_styleList" value="608-23">
														<input type="hidden" name="attr_name" value="图片模块">
														<input type="hidden" name="attr_radius" value="">
														<input type="hidden" name="mcId" value="134754">
														<input type="hidden" name="moduleId" value="351">
														<input type="hidden" name="attr_imageLink" value="">
														<input type="hidden" name="attr_linkTarget" value="1">
														<input type="hidden" name="attr_urlType" value="">
														<input type="hidden" name="attr_shapetype" value="">
														<input type="hidden" name="attr_imageWidth" value="555" id="attrImageWidht">
														<input type="hidden" name="attr_imageHeight" value="300" id="attrImageHeight">

														<input type="hidden" name="attr_imageInitialWidth" value="400" id="attrImageInitialWidht">
														<input type="hidden" name="attr_imageInitialHeight" value="400" id="attrImageInitialHeight">

														<input type="hidden" name="attr_imageUrl" value="http://image.fast.126net.cn/group2/M00/01/89/wKgADlukjciAbF5VAAC2AmYqSck424.jpg" id="uploadImgPath134754">
														<input type="hidden" name="attr_hoverEffect" value="0">
													</form>
												</div>
											</div>
										</div>
										<form id="jvForm134754" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134754" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134754" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134754" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134754" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134754" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134754" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134754" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134754" value="1">
										</form>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="lyrow">
						<div class="view">
							<div class="row-fluid ui-resizable-disabled ui-state-disabled clearfix" id="row20112" _heightstatus="2">
								<div class="span12">
									<div id="module134755" style="" class="form pic_module form134755 modulePattern0">
										<div style="box-sizing:border-box;">

											<div class="formMiddle formMiddle134755  hover_style00">
												<div class="picture_shadebox ">

													<a target="_blank">

														<img src="<%=request.getContextPath() %>/exercise/index/wKgADFukjtSAOjgJAAALMkcUjow212.png" id="134755preImg1" width="114" height="59">

													</a>
													<form id="jvForm134755" action="" labelwidth="12">
														<input type="hidden" name="attr_styleList" value="608-23">
														<input type="hidden" name="attr_name" value="图片模块">
														<input type="hidden" name="attr_radius" value="">
														<input type="hidden" name="mcId" value="134755">
														<input type="hidden" name="moduleId" value="351">
														<input type="hidden" name="attr_imageLink" value="">
														<input type="hidden" name="attr_linkTarget" value="1">
														<input type="hidden" name="attr_urlType" value="">
														<input type="hidden" name="attr_shapetype" value="">
														<input type="hidden" name="attr_imageWidth" value="114" id="attrImageWidht">
														<input type="hidden" name="attr_imageHeight" value="59" id="attrImageHeight">

														<input type="hidden" name="attr_imageInitialWidth" value="400" id="attrImageInitialWidht">
														<input type="hidden" name="attr_imageInitialHeight" value="400" id="attrImageInitialHeight">

														<input type="hidden" name="attr_imageUrl" value="http://image.fast.126net.cn/group1/M00/04/4F/wKgADFukjtSAOjgJAAALMkcUjow212.png" id="uploadImgPath134755">
														<input type="hidden" name="attr_hoverEffect" value="0">
													</form>
												</div>
											</div>
										</div>
										<form id="jvForm134755" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134755" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134755" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134755" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134755" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134755" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134755" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134755" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134755" value="1">
										</form>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="lyrow">
						<div class="view">
							<div class="row-fluid clearfix" id="row66585">
								<div class="span4">
									<div id="module134759" style="" class="form pic_module form134759 modulePattern0">
										<div style="box-sizing: border-box; width: 100%; height: 100%; overflow: hidden; border-radius: 5px;">

											<div class="formMiddle formMiddle134759  hover_style00" style="height: 100%; width: 100%;">
												<div class="picture_shadebox ">

													<a target="_blank">

														<img src="<%=request.getContextPath() %>/serverimg/${list2[2].imgname}" id="134759preImg1" width="330" height="280">

													</a>
													<form id="jvForm134759" action="" labelwidth="12">
														<input type="hidden" name="attr_styleList" value="608-23">
														<input type="hidden" name="attr_name" value="图片模块">
														<input type="hidden" name="attr_radius" value="5">
														<input type="hidden" name="mcId" value="134759">
														<input type="hidden" name="moduleId" value="351">
														<input type="hidden" name="attr_imageLink" value="">
														<input type="hidden" name="attr_linkTarget" value="1">
														<input type="hidden" name="attr_urlType" value="">
														<input type="hidden" name="attr_shapetype" value="3">
														<input type="hidden" name="attr_imageWidth" value="330" id="attrImageWidht">
														<input type="hidden" name="attr_imageHeight" value="280" id="attrImageHeight">

														<input type="hidden" name="attr_imageInitialWidth" value="400" id="attrImageInitialWidht">
														<input type="hidden" name="attr_imageInitialHeight" value="400" id="attrImageInitialHeight">

														<input type="hidden" name="attr_imageUrl" value="http://image.fast.126net.cn/group2/M00/01/89/wKgADlukl6yAVVwNAABCfVT-RDI323.jpg" id="uploadImgPath134759">
														<input type="hidden" name="attr_hoverEffect" value="0">
													</form>
												</div>
											</div>
										</div>
										<form id="jvForm134759" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134759" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134759" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134759" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134759" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134759" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134759" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134759" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134759" value="1">
										</form>

									</div>
								</div>
								<div class="span4">
									<div id="module134757" class="form text_list form134757 modulePattern0">
										<div style="width: 100%;height: 100%;">
											<style id="styleModuleTest134757" type="text/css">
												#module134757.modulePattern17401 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17401 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17402 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17403 .titleText {
													border-left-color: rgb(222, 44, 46);
													color: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17404 .formBanner {
													background: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17405 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17405 .titleText:after {
													border-left-color: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17406 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17406 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17407 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17407 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17408 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17409 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17410 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17410 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17411 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17412 .titleText {
													border-color: rgb(222, 44, 46);
												}
												
												#module134757.modulePattern17413 .titleText {
													background: rgb(222, 44, 46);
												}
											</style>
											<div class="formBanner formBanner134757">
												<div class="formBannerTitle formBannerTitle134757">
													<div id="bigg" class="titleText titleText134757" channelname="0">
														<div class="title_zcont">
															文本标题
														</div>
													</div>
													<div class="formBannerMore formBannerMore134757">

													</div>
												</div>
											</div>
											<div class="formMiddle formMiddle134757" style="">
												<div class="ztextbox" ondblclick="Site.editTextStyle($('#134757-moduleLayer .operate-inner'));">
													<span style="line-height:normal;"><span style="color:#ebb257;"><span style="font-family:微软雅黑;"><span style="line-height:250%;"><strong><span style="font-size:28px;">${list3[0].xwzxTitle }</span></strong>
													</span>
													</span>
													</span>
													</span>
													<div><span style="line-height:normal;"><span style="color:#ebb257;"><span style="font-family:微软雅黑;"><span style="line-height:250%;"><strong><span style="font-size:28px;">这是真的吗？</span></strong>
														</span>
														</span>
														</span>
														</span>
													</div>
													<div><span style="line-height:normal;"><span style="color:#ebb257;"><span style="font-family:微软雅黑;">
<span style="font-size:14px;">${list3[0].shijian }</span><br>
														<br>
														<span style="line-height:200%;"><span style="font-size:14px;">${list3[0].xwzxJx }</span></span>
														</span>
														</span>
														</span>
													</div>
												</div>
											</div>
										</div>
										<form id="jvForm134757" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134757" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134757" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134757" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134757" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134757" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134757" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134757" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134757" value="1">
										</form>
									</div>
								</div>
								<div class="span4">
									<div id="module134758" class="form text_list form134758 modulePattern0">
										<div style="width: 100%;height: 100%;">
											<style id="styleModuleTest134758" type="text/css">
												#module134758.modulePattern17401 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17401 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17402 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17403 .titleText {
													border-left-color: rgb(222, 44, 46);
													color: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17404 .formBanner {
													background: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17405 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17405 .titleText:after {
													border-left-color: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17406 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17406 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17407 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17407 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17408 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17409 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17410 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17410 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17411 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17412 .titleText {
													border-color: rgb(222, 44, 46);
												}
												
												#module134758.modulePattern17413 .titleText {
													background: rgb(222, 44, 46);
												}
											</style>
											<div class="formBanner formBanner134758">
												<div class="formBannerTitle formBannerTitle134758">
													<div id="bigg" class="titleText titleText134758" channelname="0">
														<div class="title_zcont">
															文本标题
														</div>
													</div>
													<div class="formBannerMore formBannerMore134758">

													</div>
												</div>
											</div>
											<div class="formMiddle formMiddle134758" style="">
												<div class="ztextbox" ondblclick="Site.editTextStyle($('#134758-moduleLayer .operate-inner'));">
													<span style="line-height:normal;">
													<span style="color:#ebb257;">
													<span style="font-family:微软雅黑;">
													<c:forEach items="${list3}" var="obj">
														<span style="line-height:200%;"><strong><span style="font-size:16px;"> ${obj.xwzxTitle }</span></strong>
														<br> ${obj.shijian }
														</span>
														<br>
													</c:forEach>
													
													</span>
													</span>
													</span>

												</div>
											</div>
										</div>
										<form id="jvForm134758" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134758" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134758" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134758" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134758" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134758" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134758" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134758" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134758" value="1">
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="lyrow">
						<div class="view">
							<div class="row-fluid ui-resizable-disabled ui-state-disabled clearfix" id="row96841" _heightstatus="2">
								<div class="span12">
									<div id="module134760" style="" class="form pic_module form134760 modulePattern0">
										<div style="box-sizing:border-box;">

											<div class="formMiddle formMiddle134760  hover_style00">
												<div class="picture_shadebox ">

													<a target="_blank">

														<img src="<%=request.getContextPath() %>/exercise/index/wKgADFukmiOAU3spAAAKiwgCJpA426.png" id="134760preImg1" width="114" height="59">

													</a>
													<form id="jvForm134760" action="" labelwidth="12">
														<input type="hidden" name="attr_styleList" value="608-23">
														<input type="hidden" name="attr_name" value="图片模块">
														<input type="hidden" name="attr_radius" value="">
														<input type="hidden" name="mcId" value="134760">
														<input type="hidden" name="moduleId" value="351">
														<input type="hidden" name="attr_imageLink" value="">
														<input type="hidden" name="attr_linkTarget" value="1">
														<input type="hidden" name="attr_urlType" value="">
														<input type="hidden" name="attr_shapetype" value="">
														<input type="hidden" name="attr_imageWidth" value="114" id="attrImageWidht">
														<input type="hidden" name="attr_imageHeight" value="59" id="attrImageHeight">

														<input type="hidden" name="attr_imageInitialWidth" value="400" id="attrImageInitialWidht">
														<input type="hidden" name="attr_imageInitialHeight" value="400" id="attrImageInitialHeight">

														<input type="hidden" name="attr_imageUrl" value="http://image.fast.126net.cn/group1/M00/04/4F/wKgADFukmiOAU3spAAAKiwgCJpA426.png" id="uploadImgPath134760">
														<input type="hidden" name="attr_hoverEffect" value="0">
													</form>
												</div>
											</div>
										</div>
										<form id="jvForm134760" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134760" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134760" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134760" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134760" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134760" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134760" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134760" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134760" value="1">
										</form>

									</div>
									<div id="module134761" style="" class="form form134761 contenttext modulePattern0">
										<div>
											<style id="styleModuleTest134761" type="text/css">
												#module134761.modulePattern17401 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17401 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17402 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17403 .titleText {
													border-left-color: rgb(222, 44, 46);
													color: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17404 .formBanner {
													background: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17405 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17405 .titleText:after {
													border-left-color: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17406 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17406 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17407 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17407 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17408 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17409 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17410 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17410 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17411 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17412 .titleText {
													border-color: rgb(222, 44, 46);
												}
												
												#module134761.modulePattern17413 .titleText {
													background: rgb(222, 44, 46);
												}
											</style>
											<div class="formBanner formBanner134761">
												<div class="formBannerTitle formBannerTitle134761">
													<div id="bigg" class="titleText titleText134761" channelname="0">
														<div class="title_zcont">
															文章列表
														</div>
													</div>
													<div class="formBannerMore formBannerMore134761">

													</div>
												</div>
											</div>
											<ul class="formMiddle formMiddle134761 list_style133">
												 <c:forEach items="${shiTi }" var="obj">
														<li>
													<div class="formMiddleContent formMiddleContent134761 contentLine">
														<a title="" class="imga" target="_blank">
															<img src="<%=request.getContextPath()%>/serverimg/${obj.imgname}">
														</a>
														<a class="list_title" title="Witherspoon" target="_blank">
															<span style="">${obj.jlname }	 </span>
														</a>
														<div class="item_mask">
															<h6><span class="c-leftline"></span>${obj.id }</h6>
															<p class="c-description">${obj.jlname }：${obj.jljs }</p>
														</div>
													</div>
												</li>
												</c:forEach>
											</ul>
										</div>
										<form id="jvForm134761" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134761" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134761" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134761" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134761" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134761" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134761" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134761" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134761" value="1">
										</form>
										<style>
											#module134761 .list_style133 .item_mask {
												background: rgba(235, 178, 87, 1);
											}
										</style>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="lyrow">
						<div class="view">
							<div class="row-fluid-1 clearfix" id="row47491">
								<div class="span12" _floatmodule="134762,134763">
								</div>
								<div class="float_div_class">
									<div id="module134762" _float="1" style="left:5px;top:57px;position: absolute;height:141px;width:436px;" class="form text_list form134762 modulePattern0">
										<div style="width: 100%;height: 100%;">
											<style id="styleModuleTest134762" type="text/css">
												#module134762.modulePattern17401 .titleText {
													color: #0cf;
												}
												
												#module134762.modulePattern17401 .titleText:after {
													background: #0cf;
												}
												
												#module134762.modulePattern17402 .titleText {
													color: #0cf;
												}
												
												#module134762.modulePattern17403 .titleText {
													border-left-color: #0cf;
													color: #0cf;
												}
												
												#module134762.modulePattern17404 .formBanner {
													background: #0cf;
												}
												
												#module134762.modulePattern17405 .titleText {
													color: #0cf;
												}
												
												#module134762.modulePattern17405 .titleText:after {
													border-left-color: #0cf;
												}
												
												#module134762.modulePattern17406 .titleText {
													background: #0cf;
												}
												
												#module134762.modulePattern17406 .formBanner {
													border-bottom-color: #0cf;
												}
												
												#module134762.modulePattern17407 .titleText {
													background: #0cf;
												}
												
												#module134762.modulePattern17407 .formBanner {
													border-bottom-color: #0cf;
												}
												
												#module134762.modulePattern17408 .titleText {
													color: #0cf;
												}
												
												#module134762.modulePattern17409 .titleText {
													color: #0cf;
												}
												
												#module134762.modulePattern17410 .formBanner {
													border-bottom-color: #0cf;
												}
												
												#module134762.modulePattern17410 .titleText {
													color: #0cf;
												}
												
												#module134762.modulePattern17411 .titleText:after {
													background: #0cf;
												}
												
												#module134762.modulePattern17412 .titleText {
													border-color: #0cf;
												}
												
												#module134762.modulePattern17413 .titleText {
													background: #0cf;
												}
											</style>
											<div class="formBanner formBanner134762">
												<div class="formBannerTitle formBannerTitle134762">
													<div id="bigg" class="titleText titleText134762" channelname="0">
														<div class="title_zcont">
															文本标题
														</div>
													</div>
													<div class="formBannerMore formBannerMore134762">

													</div>
												</div>
											</div>
											<div class="formMiddle formMiddle134762" style="width: 100%;height: 100%;">
												<div class="ztextbox" style="width: 100%;height: 100%;" ondblclick="Site.editTextStyle($('#134762-moduleLayer .operate-inner'));">
													<strong><span style="font-size:35px;"><span style="color:#ebb257;"><span style="font-family:微软雅黑;">瘦身名人堂<br>
肥宅变型男，只差一步</span></span></span></strong>

												</div>
											</div>
										</div>
										<form id="jvForm134762" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134762" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134762" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134762" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134762" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134762" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134762" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134762" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134762" value="1">
										</form>
									</div>
									<div id="module134763" _float="1" style="left:900px;top:88px;position: absolute;height:60px;width:200px;" class="form form134763 btnstyle modulePattern0
">
										<div style="height: 100%;">
											<div class="buttonStyle1134763 buttonstyle_02" style="width: 100%;height: 100%;">
												<a  style="width: 100%;height: 100%;line-height: 60px; background-color:rgba(235,178,87,1);  font-size:20px; font-family:微软雅黑;font-weight:bold;color:#333;" onmouseover="btn_over134763()" onmouseout="btn_out134763()">

													马上加入

												</a>
											</div>
											<form id="jvForm134763" action="">
												<input type="hidden" name="moduleId" value="325">
												<input type="hidden" name="channelId" value="">
												<input type="hidden" name="mcId" value="134763">
												<input type="hidden" name="attr_name" value="按钮模块">
												<input type="hidden" name="attr_styleList" value="325-1">
												<input type="hidden" name="attr_buttonName" value="马上加入">
												<input type="hidden" name="attr_lianjie" value="0">
												<input type="hidden" name="attr_buttonSizes" value="1">
												<input type="hidden" name="attr_buttonTextWidth" id="buttonTextWidth" value="200">
												<input type="hidden" name="attr_buttonTextHeight" id="buttonTextHeight" value="60">
												<input type="hidden" name="attr_buttonBgColor" value="#ffffff">
												<input type="hidden" name="attr_buttonBgColor1" value="#eee">
												<input type="hidden" name="attr_buttonBgPicture" value="">
												<input type="hidden" name="attr_butstyle" value="">
												<input type="hidden" name="attr_buttonBgPicture1" value="">
												<input type="hidden" name="attr_buttonTextSize" value="20">
												<input type="hidden" name="attr_buttonTextFamily" value="微软雅黑">
												<input type="hidden" name="attr_buttonTextBold" value="true">
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
												<input type="hidden" name="attr_pictureStyle" value="buttonstyle_02">
												<input type="hidden" name="attr_styleDefinedColor" value="rgba(235,178,87,1)">
												<input type="hidden" name="attr_buttonUrl" value="/contactUs/index.jhtml">
												<input type="hidden" name="attr_backgroundStyle" id="backgroundStyle1" value="0">
												<input type="hidden" name="attr_wordSetup" id="wordSetup1" value="1">
												<input type="hidden" name="attr_wordsStyle" id="wordStyle1" value="1">
												<input type="hidden" name="attr_buttonFram" id="buttonFram1" value="0">
												<input type="hidden" name="attr_buttonFillet" id="buttonFillet1" value="0">
											</form>
										</div>
										<form id="jvForm134763" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134763" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134763" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134763" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134763" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134763" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134763" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134763" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134763" value="1">
										</form>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="lyrow">
						<div class="view">
							<div class="row-fluid ui-resizable-disabled ui-state-disabled clearfix" id="row58217" _heightstatus="2">
								<div class="span12">
									<div id="module134765" style="" class="form pic_module form134765 modulePattern0">
										<div style="box-sizing:border-box;">

											<div class="formMiddle formMiddle134765  hover_style00">
												<div class="picture_shadebox ">

													<a target="_blank">

														<img src="<%=request.getContextPath() %>/exercise/index/wKgADluknwOAF9-EAAAKzKcKlJk439.png" id="134765preImg1" width="114" height="59">

													</a>
													<form id="jvForm134765" action="" labelwidth="12">
														<input type="hidden" name="attr_styleList" value="608-23">
														<input type="hidden" name="attr_name" value="图片模块">
														<input type="hidden" name="attr_radius" value="">
														<input type="hidden" name="mcId" value="134765">
														<input type="hidden" name="moduleId" value="351">
														<input type="hidden" name="attr_imageLink" value="">
														<input type="hidden" name="attr_linkTarget" value="1">
														<input type="hidden" name="attr_urlType" value="">
														<input type="hidden" name="attr_shapetype" value="">
														<input type="hidden" name="attr_imageWidth" value="114" id="attrImageWidht">
														<input type="hidden" name="attr_imageHeight" value="59" id="attrImageHeight">

														<input type="hidden" name="attr_imageInitialWidth" value="400" id="attrImageInitialWidht">
														<input type="hidden" name="attr_imageInitialHeight" value="400" id="attrImageInitialHeight">

														<input type="hidden" name="attr_imageUrl" value="http://image.fast.126net.cn/group2/M00/01/8A/wKgADluknwOAF9-EAAAKzKcKlJk439.png" id="uploadImgPath134765">
														<input type="hidden" name="attr_hoverEffect" value="0">
													</form>
												</div>
											</div>
										</div>
										<form id="jvForm134765" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134765" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134765" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134765" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134765" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134765" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134765" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134765" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134765" value="1">
										</form>

									</div>
									<div id="module134764" style="" class="form form134764 contenttext modulePattern0">
										<div>
											<style id="styleModuleTest134764" type="text/css">
												#module134764.modulePattern17401 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17401 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17402 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17403 .titleText {
													border-left-color: rgb(222, 44, 46);
													color: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17404 .formBanner {
													background: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17405 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17405 .titleText:after {
													border-left-color: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17406 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17406 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17407 .titleText {
													background: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17407 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17408 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17409 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17410 .formBanner {
													border-bottom-color: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17410 .titleText {
													color: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17411 .titleText:after {
													background: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17412 .titleText {
													border-color: rgb(222, 44, 46);
												}
												
												#module134764.modulePattern17413 .titleText {
													background: rgb(222, 44, 46);
												}
											</style>
											<div class="formBanner formBanner134764">
												<div class="formBannerTitle formBannerTitle134764">
													<div id="bigg" class="titleText titleText134764" channelname="0">
														<div class="title_zcont">
															文章列表
														</div>
													</div>
													<div class="formBannerMore formBannerMore134764">

													</div>
												</div>
											</div>
											<ul class="formMiddle formMiddle134764 list_style146">
												<c:forEach items="${list6 }" var="obj">
													<li>
													<div class="formMiddleContent formMiddleContent134764 contentLine">
														<a  title="" class="imga" target="_blank">
															<img src="<%=request.getContextPath()%>/serverimg/${obj.imgname}">
														</a>
														<div class="c-contenttext">
															<!-- 头条推荐 -->
															<!-- 显示分类 -->
															<a class="list_title"  title="跳绳和呼拉圈" target="_blank">
																<span style="">${obj.yundongname}	 </span>
															</a>
															<div class="c-description">
															</div>
														</div>

													</div>
												</li>
												</c:forEach>
										</div>
										<form id="jvForm134764" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134764" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134764" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134764" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134764" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134764" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134764" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134764" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134764" value="1">
										</form>
										<style>
											#module134764 .list_style146 .c-contenttext {
												background: rgba(235, 178, 87, 1);
											}
										</style>
									</div>
									<div id="module134766" style="" class="form pic_module form134766 modulePattern0">
										<div style="box-sizing:border-box;">

											<div class="formMiddle formMiddle134766  hover_style00">
												<div class="picture_shadebox ">

													<a target="_blank">

														<img src="<%=request.getContextPath() %>/exercise/index/wKgADlukn-GAXNQQAAApCBhyoKw823.png" id="134766preImg1" width="1100" height="113">

													</a>
													<form id="jvForm134766" action="" labelwidth="12">
														<input type="hidden" name="attr_styleList" value="608-23">
														<input type="hidden" name="attr_name" value="图片模块">
														<input type="hidden" name="attr_radius" value="">
														<input type="hidden" name="mcId" value="134766">
														<input type="hidden" name="moduleId" value="351">
														<input type="hidden" name="attr_imageLink" value="">
														<input type="hidden" name="attr_linkTarget" value="1">
														<input type="hidden" name="attr_urlType" value="">
														<input type="hidden" name="attr_shapetype" value="">
														<input type="hidden" name="attr_imageWidth" value="1100" id="attrImageWidht">
														<input type="hidden" name="attr_imageHeight" value="113" id="attrImageHeight">

														<input type="hidden" name="attr_imageInitialWidth" value="400" id="attrImageInitialWidht">
														<input type="hidden" name="attr_imageInitialHeight" value="400" id="attrImageInitialHeight">

														<input type="hidden" name="attr_imageUrl" value="http://image.fast.126net.cn/group2/M00/01/8A/wKgADlukn-GAXNQQAAApCBhyoKw823.png" id="uploadImgPath134766">
														<input type="hidden" name="attr_hoverEffect" value="0">
													</form>
												</div>
											</div>
										</div>
										<form id="jvForm134766" action="">
											<!-- 模块动画名称 -->
											<input type="hidden" name="attr_bananima" id="bananima134766" value="0">
											<!-- 模块动画方向 -->
											<input type="hidden" name="attr_checkvalue" id="checkvalue134766" value="">
											<!-- 模块动画单次/多次播放 -->
											<input type="hidden" name="attr_trigger" id="atrigger134766" value="1">
											<!-- 模块动画速度 -->
											<input type="hidden" name="attr_Animatespeed" id="speed134766" value="0.5">
											<!-- 模块透明度 -->
											<input type="hidden" name="attr_clarity" id="clarity134766" value="0">
											<!-- 图文动画名称 -->
											<input type="hidden" name="attr_textanima" id="textanima134766" value="0">
											<!-- 图文动画方向 -->
											<input type="hidden" name="attr_checkTextvalue" id="checkTextvalue134766" value="">
											<!-- 图文动画单次/多次播放 -->
											<input type="hidden" name="attr_triggerText" id="atriggerText134766" value="1">
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
		<script src="<%=request.getContextPath() %>/exercise/index/jquery-ui-core.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/index/qrcode.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/index/jquery_002.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/index/jquery_003.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/index/jquery_004.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/index/jrf.js" type="text/javascript"></script>

		<script src="<%=request.getContextPath() %>/exercise/index/modernizr-1.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath() %>/exercise/index/jquery.js" type="text/javascript"></script>

		<script id="manageMinSupport" src="<%=request.getContextPath() %>/exercise/index/manage.js" data="0" language="" sitetplsolution="389f00001" type="text/javascript" charset="utf-8"></script>

		<script src="<%=request.getContextPath() %>/exercise/index/sliderzxr.js" charset="utf-8"></script>
		<script src="<%=request.getContextPath() %>/exercise/index/ScrollTrigger.js" charset="utf-8"></script>
		<!-- <script language="javascript" type="text/javascript" src="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js"></script> -->
		<script src="<%=request.getContextPath() %>/exercise/index/front.js" type="text/javascript" charset="utf-8"></script>
		<script src="<%=request.getContextPath() %>/exercise/index/product.js" type="text/javascript" charset="utf-8"></script>
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
		<script type="text/javascript" src="<%=request.getContextPath() %>/exercise/index/login_status.htm"></script>
		<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath() %>/exercise/index/navigator.js"></script>
	</body>

</html>