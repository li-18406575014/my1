/**
 * 功能：图片轮播效果JS。
 * 可实现图文链接模块8-1,8-2,8-3,8-4,8-6,8-7轮播效果
 * 可以参考使用本插件做其他效果.本插件需要jquery.1.7以上版本
 * @author wzb
 * @version 1.0
 */
function JRFSlider(id) {
	this.id = id || ''; /*轮播内容 容器ID 必选参数*/
	this.className = "slider"; /*轮播 内容 容器class 必选参数*/
	this.sliderTag = 'ul'; /*轮播容器 标签 默认ul*/
	this.dotId = null; /*点击容器 ID。不为空 则设置小圆点*/
	this.dotCurrent = 'current'; /*选中 小圆点时的样式*/
	this.dotEvent = 'click'; /*小圆点 切换时间 默认click*/
	this.buttonClass = null; /*上一下、下一页 按钮的样式*/
	this.nextBtn = 'rightBtn'; /*下一页按钮样式*/
	this.preBtn = 'leftBtn'; /*上一页按钮样式*/
	this.buttonPos = 'top'; /*翻页按钮 位置*/
	this.hideBtn = true; /*当鼠标进入容器时 隐藏翻页按钮*/
	this.playTime = 2000; /*自动轮播间隔时间*/
	this.speed = 2000; /*动画滚动速度*/
	this.autoPlay = true; /*是否自动轮播*/
	this.noUser = false;
	/**
	 * 以下参数为插件本身定义参数。不需要用户传递
	 */
	this.timer = null;
	this.curShowImg = 0; //当前正在显示图片
	this.idc;
	this.clone;
	this.cloneAppendTo;
	this.len;
	this.height;
	this.width;
	if (!this.speed) {
		this.speed = 2000;
	}
	if (!this.playTime) {
		this.playTime = 2000;
	}
}

JRFSlider.prototype = {
	init: function() {
		if (!this.id) {
			throw new Error("必须指定滚动的容器Id.");
			return;
		}
		var b = this.$('#' + this.id).closest('.box');
		if (b.length > 0 || this.noUser) {
			this.initImpl();
		}
	},
	initImpl: function() {
		this.idc = '#' + this.id + ' .' + this.className;
		this.clone = "#" + this.id + " ." + this.className + " " + this.sliderTag;
		var self = this;
		if (this.$(this.clone + '[_clone="1"]').length <= 0) {
			var c = this.$(this.clone + ":first").clone();
			c.attr('_clone', 1);
			this.$(this.clone + ":last").after(c);
			this.len = this.$(this.clone).length;
		}
		this.height = this.$('#' + this.id).height();
		this.width = this.$(this.clone + ":first").width();
		if (self.autoPlay) {
			window.clearInterval(self.timer);
			self.timer = window.setInterval(function() {
				self.next(self);
			}, self.playTime);
		}
		this.initPageBtn();
		this.initDot();
	},
	initPageBtn: function() {
		if (this.buttonClass) {
			var self = this;
			if (this.buttonPos == 'top') {
				var m = this.height - $('.' + this.buttonClass).height();
				this.$('#' + this.id + ' .' + this.buttonClass).css('top', m / 2);
			} else if (this.buttonPos == 'left') {
				var m = this.width - $('.' + this.buttonClass).width();
				this.$('#' + this.id + ' .' + this.buttonClass).css('left', m / 2);
			}
			if (this.hideBtn) {
				this.$('#' + this.id).unbind('mouseenter').bind('mouseenter', function() {
					if (self.autoPlay) {
						window.clearInterval(self.timer);
					}
					self.$('.' + self.buttonClass).fadeIn();

				});
				this.$('#' + this.id).unbind('mouseleave').bind('mouseleave', function() {
					if (self.autoPlay) {
						window.clearInterval(this.timer);
						this.timer = window.setInterval(function() {
							self.next(self);
						}, this.playTime);
					}
					self.$('.' + self.buttonClass).fadeOut();
				});
			}
			this.$('#' + this.id + ' .' + this.nextBtn).unbind('click').bind('click', function(e) {
				self.next(self);
			});
			this.$('#' + this.id + ' .' + this.preBtn).unbind('click').bind('click', function(e) {
				self.prev(self);
			});
		}
	},
	initDot: function() {
		if (this.dotId) {
			var self = this;
			if (this.buttonClass) {
				var m = this.$('.' + this.buttonClass).width() - this.$('#' + this.dotId).width();
				this.$('#' + this.dotId).css('left', m / 2);
			} else {
				var m = this.$('#' + this.id).width() - this.$('#' + this.dotId).width();
				this.$('#' + this.dotId).css('left', m / 2);
			}
			this.$('#' + this.dotId + ' li').unbind(this.dotEvent).bind(this.dotEvent, function() {
				self.$(self.idc).stop(true, true);
				self.curShowImg = $(this).index()
				self.$(self.idc).animate({
					'left': -self.width * self.curShowImg
				}, self.speed);
				self.addDotCurrent(self);
			});
		}
	},
	next: function(sf) {
		var self = sf;
		if (!self.$(self.idc).is(":animated")) {
			if (self.curShowImg < self.len - 2) {
				++self.curShowImg;
				self.$(self.idc).animate({
					'left': -self.width * self.curShowImg
				}, self.speed);
			} else {
				self.curShowImg = 0;
				self.$(self.idc).animate({
					"left": -self.width * (self.len - 1)
				}, self.speed, function() {
					self.$(self.idc).css("left", 0);
				});
			}
			self.addDotCurrent(self);
		}
	},
	prev: function(sf) {

		var self = sf;
		if (!self.$(self.idc).is(':animated')) {
			if (self.curShowImg > 0) {
				--self.curShowImg;
				self.$(self.idc).animate({
					'left': -self.width * self.curShowImg
				}, self.speed);
			} else {
				self.curShowImg = self.len - 2;
				self.$(self.idc).css('left', -self.width * (self.len - 1));
				self.$(self.idc).animate({
					'left': -self.width * self.curShowImg
				}, self.speed);
			}
			self.addDotCurrent(self);
		}
	},
	addDotCurrent: function(st) {
		if (st.dotId) {
			st.$('#' + st.dotId + " li").eq(st.curShowImg).addClass(st.dotCurrent).siblings().removeClass(st.dotCurrent);
		}
		var h3 = st.$('.' + st.buttonClass).next();
		if (!JRF.isNull(h3) && h3.is('h3')) {
			var tit = st.$(st.idc + ' li img').eq(st.curShowImg).attr('alt');
			if (!JRF.isNull(tit)) {
				h3.html(tit);
			}
		}
	},
	$: function(o) {
		return JRF.dom.find(o);
	}
}

//8-5
function JRFSlider85(id) {
	this.id = id || '';
	this.noUser = false;
	this.currentImg = 0;
	this.timer = null;
	this.playTime = 2000;
	this.len = 0;
}

JRFSlider85.prototype = {
		init: function() {
			if (!this.id) {
				throw new Error("必须指定滚动的容器Id.");
				return;
			}
			$('#' + this.id).showLoading();
			$('#' + this.id + " .pics > li").show();
			var b = $('#' + this.id).closest('.box');
			if (b.length > 0 || this.noUser) {
				this.initImpl();
			}
		},
		initImpl: function() {
			$('#' + this.id).hideLoading();
			$('#' + this.id + " .pics > li").show();
			var self = this;
			this.len = $('#' + this.id + " .pics > li").length;
			window.clearInterval(this.timer);
			this.timer = window.setInterval(function() {
				self.next(self);
			}, this.playTime);
			//翻页
			$('.right_but').click(function() {
				self.prev(self);
			});
			$('.left_but').click(function() {
				self.next(self);
			});
			//小点
			$('#' + this.id + ' .circles li').click(function() {
				self.currentImg = $(this).index();
				self.showNext(self);
			});
			//绑定事件
			$('#' + this.id).mouseenter(function() {
				window.clearInterval(self.timer);
			}).mouseleave(function() {
				window.clearInterval(self.timer);
				self.timer = window.setInterval(function() {
					self.next(self);
				}, self.playTime);
			});
			this.initSize();
		},
		initSize: function() {
			var a = $("#" + this.id).width();
			$("#" + this.id + " .picsLI").css("width", a);
			$("#" + this.id + " .sliderPics li img").css({
				"width": "100%",
				"height": "100%"
			});
			var m = $("#" + this.id + " .formBanner").height();
			var i = $("#" + this.id + " li img").height();
			$("#" + this.id).height(i + m);
		},
		next: function(st) {
			var self = st;
			if (self.currentImg < self.len - 1) {
				++self.currentImg;
			} else {
				self.currentImg = 0;
			}
			self.showNext(self);
		},
		prev: function(st) {
			var self = st;
			if (self.currentImg > 0) {
				--self.currentImg;
			} else {
				self.currentImg = self.len - 1;
			}
			self.showNext(self)
		},
		showNext: function(st) {
			var self = st;
			$("#" + self.id + " .pics .picsLI").hide();
			$("#" + self.id + " .pics .picsLI").eq(self.currentImg).fadeIn(1000);
			$("#" + self.id + " .circles li").eq(self.currentImg).addClass('current').siblings().removeClass('current');
			$("#" + self.id + " h3").html($("#" + self.id + " .pics li img").eq(self.currentImg).attr("alt"));
		}
	}
	//8-8

function JRFSlider08(id) {
	this.id = id || '';
	this.noUser = false;
	this.timer = null;
	this.playTime = 30;
	this.len = 0;
}

JRFSlider08.prototype = {
	init: function() {
		if (!this.id) {
			throw new Error("必须指定滚动的容器Id.");
			return;
		}
		//判断timer是否存在，存在先销毁
		if (this.timer) {
			window.clearInterval(this.timer);
		}
		var b = $('#' + this.id).closest('.box');
		if (b.length > 0 || this.noUser) {
			this.initImpl();
		}
	},
	initImpl: function() {
		var self = this;
		this.len = $('#' + this.id + " .slider08 li").length;
		//var sum = ($('#' + this.id + " .slider08 li img").outerWidth()) * this.len;
        var sum = ($('#' + this.id + " .slider08 li").outerWidth()) * this.len;
		var ul = $('#' + this.id + " .slider08 ul");
		var ul_html = $(ul).html();
		$(ul).append(ul_html);
		var me = $('#' + this.id + " .slider08")[0];
		this.timer = window.setInterval(function() {
			if (me.scrollLeft >= sum) {
				me.scrollLeft -= sum
			} else {
				me.scrollLeft++;
			}
		}, self.playTime)

		$('#' + this.id + " .slider08").die().bind("mouseout", function() {
			self.timer = window.setInterval(function() {
				if (me.scrollLeft >= sum) {
					me.scrollLeft -= sum
				} else {
					me.scrollLeft++;
				}
			}, self.playTime)
		}).bind("mouseover", function() {
			window.clearInterval(self.timer);
		});
	}
}

//8-9
function JRFSlider89(id) {
	this.id = id || '';
	this.timer = null;
	this.currentImg = 0;
	this.len = 0;
	this.playTime = 2000;
}

JRFSlider89.prototype = {
	init: function() {
		if (!this.id) {
			throw new Error("必须指定滚动的容器Id.");
			return;
		}
		var b = $('#' + this.id).closest('.box');
		if (b.length > 0 || this.noUser) {
			this.initImpl();
		}
	},
	initImpl: function() {
		var self = this;
		this.len = $('#' + this.id + ' .pics ul > li').length;
		if (this.len > 1) {
			$('#' + this.id).mouseenter(function() {
				window.clearInterval(self.timer);
			}).mouseleave(function() {
				window.clearInterval(self.timer);
				self.timer = window.setInterval(function() {
					self.next(self);
				}, self.playTime);
			});
			self.timer = window.setInterval(function() {
				self.next(self);
			}, self.playTime);
		}
		$("#" + this.id + " .leftBut").click(function() {
			self.prev(self);
		});
		$("#" + this.id + " .rightBut").click(function() {
			self.next(self);
		});
		this.initSize();
	},
	initSize: function() {
		var a = $("#" + this.id).width();
		// $("#"+this.id+" .pics li").css("width",a);
		$("#" + this.id + " .pics").width($("#" + this.id).width());
		$("#" + this.id + " .pics li img").css({
			"width": "100%",
			"height": "100%"
		});
		var m = $("#" + this.id + " .formBanner").height();
		var i = $("#" + this.id + " ul li img").height();
		$("#" + this.id).height(i + m);
		$("#" + this.id + " .pics").height(i);
		$("#" + this.id + " .pics ul").height(i);
		var m = parseInt(a - a * 0.8);
		$("#" + this.id + " .tk_bg").css("left", m / 2);
	},
	next: function(st) {
		var self = st;
		if (!$('#' + self.id + ' .pics ul li').is(":animated")) {
			if (self.currentImg < self.len - 1) {
				++self.currentImg;
			} else {
				self.currentImg = 0;
			}
			self.showNext(self);
		}
	},
	prev: function(st) {
		var self = st;
		if (!$('#' + self.id + ' .pics ul li').is(":animated")) {
			if (self.currentImg > 0) {
				--self.currentImg;
			} else {
				self.currentImg = self.len - 1;
			}
			self.showNext(self);
		}
	},
	showNext: function(self) {
		$('#' + self.id + ' .pics ul li').hide();
		$('#' + self.id + ' .pics ul li').eq(self.currentImg).fadeIn(800);
		//$('#'+self.id+' .circles li').eq(self.currentImg).addClass("current").siblings().removeClass("current");
		$('#' + self.id + ' .tk_bg p').html($("#" + self.id + " .pics li img").eq(self.currentImg).attr("alt"))
	}
}


//8-11

function JRFSlider811(id) {
	this.id = id || '';
	this.noUser = false;
	this.currentImg = 0;
	this.timer = null;
	this.playTime = 5000;
	this.speed = 5000;
	this.len = 0;
}

JRFSlider811.prototype = {
	init: function() {
		if (!this.id) {
			throw new Error("必须指定滚动的容器Id.");
			return;
		}
		//判断timer是否存在，存在先销毁
		if (this.timer) {
			window.clearInterval(timer);
		}
		var b = $('#' + this.id).closest('.box');
		if (b.length > 0 || this.noUser) {
			this.initImpl();
		}
	},
	//轮播初始化事件
	initImpl: function() {
		var self = this;
		this.len = $('#' + this.id + " .slider13 li").length;
		//图片加载后调用
		$("#" + this.id).find("img").load(function() {
			self.initSize();
		});

		$('#' + this.id + ' .circles li').click(function() {
			$(this).addClass('current').siblings().removeClass('current');
			self.showNext(self, $(this).index());
		});

		if (this.len > 1) {
			this.timer = window.setInterval(function() {
				self.showNext(self);
			}, self.playTime);
			Site.banner_timer = this.timer;
			$('#' + this.id).mouseenter(function() {
				window.clearInterval(self.timer);
			}).mouseleave(function() {
				window.clearInterval(self.timer);
				self.timer = window.setInterval(function() {
					self.showNext(self);
				}, self.playTime);
			});
		}
	},
	//轮播高度设置
	initSize: function() {

		//默认显示第一个图，赋值第一张图片高度
		$('#' + this.id + " .slider13 li:not(:first)").hide();
		$('#' + this.id + ' .slider13 li').eq(0).fadeIn();
		$(".circles li").eq(0).addClass('current').siblings().removeClass('current');
		var $li_height = $('#' + this.id + ' .slider13').find("li").height();
		var fb = $('#' + this.id + ' .formBanner');
		var fbh = 0;
		if (fb.length > 0) {
			fbh = fb.height();
		}
		var a = $("#" + this.id).width();
		$("#" + this.id).height(i + fbh);
		//$("#"+this.id+" .slider13 li").css("width",a);
	},
	//轮播点击事件
	showNext: function(self, l) {
		if (typeof l == "undefined") {
			if (self.currentImg < self.len - 1) {
				++self.currentImg;
			} else {
				self.currentImg = 0;
			}
		} else {
			self.currentImg = l;
		}
		$('#' + self.id + ' .slider13 li').hide();
		$('#' + self.id + ' .circles li').eq(self.currentImg).addClass('current').siblings().removeClass('current');
		$('#' + self.id + ' .slider13 li').eq(self.currentImg).fadeIn();
	}
}

//8-111

function JRFSlider8111(id, pt, sp) {
	if (typeof(pt) == "undefined") {
		pt = 5000;
	}
	if (typeof(sp) == "undefined") {
		sp = 5000;
	}
	this.id = id || '';
	this.noUser = false;
	this.currentImg = 0;
	this.timer = null;
	this.playTime = pt;
	this.speed = sp;
	this.len = 0;
}

JRFSlider8111.prototype = {
	init: function() {
		if (!this.id) {
			throw new Error("必须指定滚动的容器Id.");
			return;
		}
		//判断timer是否存在，存在先销毁
		if (this.timer) {
			window.clearInterval(timer);
		}
		var b = $('#' + this.id).closest('.box');
		if (b.length > 0 || this.noUser) {
			this.initImpl();
		}
		if (this.id == "picBox") {
			if ($('#' + this.id).parent().hasClass('bannercss1')) {
				$('#' + this.id).find(".slideCircles").hide();
				$('#' + this.id).find(".arrow").hide();
				$('#' + this.id).find(".slideNum").show();
			} else if ($('#' + this.id).parent().hasClass('bannercss2')) {
				$('#' + this.id).find(".slideCircles").hide();
				$('#' + this.id).find(".arrow").show();
				$('#' + this.id).find(".slideNum").hide();
			} else if ($('#' + this.id).parent().hasClass('bannercss3')) {
				$('#' + this.id).find(".slideCircles").show();
				$('#' + this.id).find(".arrow").hide();
				$('#' + this.id).find(".slideNum").hide();
			} else {
				$('#' + this.id).find(".slideCircles").hide();
				$('#' + this.id).find(".arrow").hide();
				$('#' + this.id).find(".slideNum").show();
			}
		} else {
			if ($('#' + this.id).hasClass('bannercss1')) {
				$('#' + this.id).find(".slideCircles").hide();
				$('#' + this.id).find(".arrow").hide();
				$('#' + this.id).find(".slideNum").show();
			} else if ($('#' + this.id).hasClass('bannercss2')) {
				$('#' + this.id).find(".slideCircles").hide();
				$('#' + this.id).find(".arrow").show();
				$('#' + this.id).find(".slideNum").hide();
			} else if ($('#' + this.id).hasClass('bannercss3')) {
				$('#' + this.id).find(".slideCircles").show();
				$('#' + this.id).find(".arrow").hide();
				$('#' + this.id).find(".slideNum").hide();
			} else {
				$('#' + this.id).find(".slideCircles").hide();
				$('#' + this.id).find(".arrow").hide();
				$('#' + this.id).find(".slideNum").show();
			}
		}

	},
	//轮播初始化事件
	initImpl: function() {

		var self = this;
		this.len = $('#' + this.id + " .slider8111 li").length;
		//图片加载后调用
		self.initSize();
		//样式1点击事件
		$('#' + this.id + ' .slideCircles li').click(function() {
			$(this).addClass('current').siblings().removeClass('current');
			self.showNext(self, $(this).index());
		});

		//样式2点击事件
		$('#' + this.id + ' .slideNum').find("#slideNumUl li").click(function() {
			$(this).addClass('current').siblings().removeClass('current');
			self.showNext(self, $(this).index());
		});

		//样式3点击事件
		//上一个
		$('#' + this.id + ' .arrow').find(".prev").click(function() {
			self.prev(self);
		});
		//下一个
		$('#' + this.id + ' .arrow').find(".next").click(function() {
			self.next(self);
		});

		if (this.len > 1) {
			this.timer = window.setInterval(function() {
				self.showNext(self);
			}, self.playTime);
			Site.banner_timer = this.timer;
			
			$('#' + this.id).mouseenter(function() {
				window.clearInterval(self.timer);
			}).mouseleave(function() {
				window.clearInterval(self.timer);
				self.timer = window.setInterval(function() {
					self.showNext(self);
				}, self.playTime);
			});
		}
	},
	//轮播高度设置
	initSize: function() {
		//根据背景图片赋值li的高度
		// $('#' + this.id + ' .slider8111 li').each(function(i, o) {
		// 	var that = $(this);
		// 	var image_src = that.attr("img_src");
		// 	var image = new Image();
		// 	image.src = image_src;
		// 	var image_h =0;
		// 	var check= function() {
		// 		// 只要任何一方大于0
		// 		// 表示已经服务器已经返回宽高
		// 		if (image.height > 0) {
		// 			image_h = image.height;
		// 			that.height(image_h);
		// 			that.find("a").height(image_h);
		// 			clearInterval(set);
		// 			return;
		// 		}
		// 	};
		// 	var set = setInterval(check, 40);
		// });

		$('#' + this.id + " .slider8111 li:not(:first)").fadeOut();
		$('#' + this.id + ' .slider8111 li').eq(0).fadeIn();
		var $li_height = $('#' + this.id + ' .slider8111').find("li").height();
		var fb = $('#' + this.id + ' .formBanner');
		var fbh = 0;
		if (fb.length > 0) {
			fbh = fb.height();
		}


		var a = $("#" + this.id).width();
		$("#" + this.id).height(i + fbh);
		$("#" + this.id + " .slider8111 li").css("width", a);
		this.flashInit();
	},
	next: function(st) {
		var self = st;
		if (self.currentImg < self.len - 1) {
			++self.currentImg;
		} else {
			self.currentImg = 0;
		}
		$('#' + self.id + ' .slider8111 li').fadeOut();
		$('#' + self.id + ' .slideCircles li').eq(self.currentImg).addClass('current').siblings().removeClass('current');
		$('#' + self.id + ' .slideNum').find("#slideNumUl li").eq(self.currentImg).addClass('on').siblings().removeClass('on');
		var $li_height = $('#' + this.id + ' .slider8111').find("li").eq(self.currentImg).height();
		self.flashInit();
		$('#' + self.id + ' .slider8111 li').eq(self.currentImg).fadeIn();
	},
	prev: function(st) {
		var self = st;
		if (self.currentImg > 0) {
			--self.currentImg;
		} else {
			self.currentImg = self.len - 1;
		}

		$('#' + self.id + ' .slider8111 li').fadeOut();
		$('#' + self.id + ' .slideCircles li').eq(self.currentImg).addClass('current').siblings().removeClass('current');
		$('#' + self.id + ' .slideNum').find("#slideNumUl li").eq(self.currentImg).addClass('on').siblings().removeClass('on');
		var $li_height = $('#' + this.id + ' .slider8111').find("li").eq(self.currentImg).height();
		self.flashInit();
		$('#' + self.id + ' .slider8111 li').eq(self.currentImg).fadeIn();
	},
	//轮播点击事件
	showNext: function(self, l) {
		if (typeof l == "undefined") {
			if (self.currentImg < self.len - 1) {
				++self.currentImg;
			} else {
				self.currentImg = 0;
			}
		} else {
			self.currentImg = l;
		}
		$('#' + self.id + ' .slider8111 li').fadeOut();
		$('#' + self.id + ' .slideCircles li').eq(self.currentImg).addClass('current').siblings().removeClass('current');
		$('#' + self.id + ' .slideNum').find("#slideNumUl li").eq(self.currentImg).addClass('on').siblings().removeClass('on');
		var $li_height = $('#' + this.id + ' .slider8111').find("li").eq(self.currentImg).height();
		self.flashInit();
		$('#' + self.id + ' .slider8111 li').eq(self.currentImg).fadeIn();
		window.clearInterval(self.timer);
		self.timer = window.setInterval(function() {
			self.showNext(self);
		}, self.playTime);
	},


	flashInit: function() {
		//判断是否有横幅特效
		var flash = $("#picBox").find(".F_sh");
		if (flash.length > 0) {
			var $div_width = $("#picBox").width() - 250;
			var $div_height = $("#picBox").height() - 60;

			var $embed = flash.find("embed");
			if ($embed.length > 0) {
				$embed.attr("height", $div_height);
				$embed.attr("width", $div_width);
			}
		}
	}
}