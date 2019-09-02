var navigatorTime;
/**
 * 导航事件
 * */
 
function navigatora(m) {
	m = 'nav'+m;
	var left = 0;
	var top = 0;
	$('#itemcontainerss').on('mouseover','.item',  function() {
		var sheight = $('.itemContainer .item').height();
		if (!$(this).hasClass('itemSelected')) {
			$(this).addClass('itemHover');
		}
		var pid = $(this).attr('index');
		left = $(this).offset().left;
		top = $(this).find("a").offset().top;
		top += sheight;
		addSecondItem(pid, left, top,m);
		// return false;
	});
	$('#itemcontainerss').on('mouseleave','.item',  function() {
		var pid = $(this).attr('index');
		var a = $('#secItem' + pid);
		$(this).removeClass('itemHover');
		removeSecNavgation(pid);
		// return false;
	});
	$('#itemcontainerss').attr('_hload', 1);
}

function mainNav(m) {
	if ($('#itemcontainerss').attr('_hload') != 1) {
		navigatorTime = setTimeout(function(){
			navigatora(m);
		}, 1000);
	} else {
		clearTimeout(navigatorTime);
	}
};



/**
 * 显示二级栏目
 **/
function addSecondItem(pid, left, top,mcId) {
	if ($('#secItem' + pid).length < 1) {
		var mainCss = $('#mainnav').attr('class').split(' ');
		var navs = mainCss[mainCss.length - 1];
		var navStyle = navs.substring(8);
        var showThree = false;
        if(navStyle == 309){
            showThree = true;
        }else{
            showThree = false;
        }
        var secondItem;
        if(showThree){
            secondItem =  $('#secondItemShowMore' + pid);
        }else{
             secondItem =  $('#secondItem' + pid);
        }
		if (secondItem.length > 0) {
            var di;
            if(showThree){
                di = $('<div class="second_container" id="secItem' + pid + '"><div class="second_center">' + secondItem.html() + '</div></div>');
            }else{
                 di = $('<ul class="subnav" id="secItem' + pid + '">' + secondItem.html() + '</ul>');
            }

			di.appendTo('body');
			di.addClass('subnavStyle'+navStyle);
			di.mouseover(function() {
				$(this).attr("_mouseIn", 1);
			}).mouseleave(function() {
				$(this).attr("_mouseIn", 0);
				removeSecNavgation(pid);
			})

			if(showThree){
				var top = $(".navForm.navstyle_bord").offset().top - $(window).scrollTop()+$(".navForm.navstyle_bord").height();
				$(".second_container").css('position', 'fixed');
				$(".second_container").css('left', 0);
				$(".second_container").css('top', top + 'px');
                $(".subnav").css('position', '');
                $(".subnav").css('left', 0);
                $(".subnav").css('top', 0);
			}else{
				$(".subnav").css('position', 'absolute');
				$(".subnav").css('left', left + 'px');
				$(".subnav").css('top', top + 'px');
			}
			subnavClick();
		}
	} else {
		var sdiv = $('#secItem' + pid);
		sdiv.attr('_mouseIn', 1);
	}
}
$(window).scroll(function(){
	var top = $(".navForm.navstyle_bord").offset().top - $(window).scrollTop()+$(".navForm.navstyle_bord").height();
	$(".second_container").css('top', top + 'px');
})

function subnavClick() {
	$('.subnav li').each(function(i, o) {
		var id = $(o).attr('id');
		if(!JRF.isNull(id)){
			var pid = id.substring(6);
			$(this).click(function() {
				$('#itemcontainerss .item').each(function(i, o) {
					if ($(this).hasClass('itemSelected')) {
						$(this).removeClass('itemSelected');
					}
				});
				$('#' + pid).addClass('itemSelected');
			});
		}
	});
}

function removeSecNavgation(pid) {
	var a = 'secItem' + pid;
	$('#' + a).attr('_mouseIn', 0);
	setTimeout("removeSecNavgation_internal('" + a + "')", 100);
}

function removeSecNavgation_internal(a) {
	var b = $('#' + a);
	if (b.attr('_mouseIn') != 1) {
		b.remove();
	}
}


/**
 * 滑动菜单
 * @param obj
 * @return
 */
function rolinTab(obj) {
	var list = document.getElementById(obj).getElementsByTagName("LI");
	var state = {
		show : false,
		hidden : false,
		showObj : false
	};

	for ( var i = 0; i < list.length; i++) {
		var tmp = new rolinItem(list[i], state);
		if (i == 0)
			tmp.pShow();
	}
}

function rolinItem(obj, state) {
	var speed = 0.0666;
	var range = 1;
	var interval;
	var tarH;
	var tar = this;
	var head = getFirstChild(obj);
	var content = getNextChild(head);
	var isOpen = false;
	this.pHidden = function() {
		if (isOpen)
			hidden();
	}
	this.pShow = show;

	var baseH = content.offsetHeight;
	content.style.display = "none";
	var isOpen = false;

	head.onmouseover = function() {
		this.style.background = "#EFEFEF";
	}

	head.onmouseout = mouseout;

	head.onclick = function() {
		this.style.background = "#EFEFEF";
		if (!state.show && !state.hidden) {
			if (!isOpen) {
				head.onmouseout = null;
				show();
			} else {
				hidden();
			}

		}
	}

	function mouseout() {
		this.style.background = "#FFF"
	}
	function show() {
		head.style.borderBottom = "1px solid #DADADA";
		state.show = true;
		if (state.openObj && state.openObj != tar) {
			state.openObj.pHidden();
		}
		content.style.height = "0px";
		content.style.display = "block";
		content.style.overflow = "hidden";
		state.openObj = tar;
		tarH = baseH;

		interval = setInterval(move, 10);
	}
	function showS() {
		isOpen = true;
		state.show = false;
	}

	function hidden() {
		state.hidden = true;
		tarH = 0;
		interval = setInterval(move, 10);
	}

	function hiddenS() {
		head.style.borderBottom = "none";
		head.onmouseout = mouseout;
		head.onmouseout();
		content.style.display = "none";
		isOpen = false;
		state.hidden = false;
	}

	function move() {
		var dist = (tarH - content.style.height.pxToNum()) * speed;
		if (Math.abs(dist) < 1)
			dist = dist > 0 ? 1 : -1;
		content.style.height = (content.style.height.pxToNum() + dist) + "px";
		if (Math.abs(content.style.height.pxToNum() - tarH) <= range) {
			clearInterval(interval);
			content.style.height = tarH + "px";
			if (tarH != 0) {
				showS()
			} else {
				hiddenS();
			}
		}
	}

}

String.prototype.pxToNum = function() {
	return Number(this.replace("px", ""))
}
function getFirstChild(obj) {
	var result = obj.firstChild;
	while (!result.tagName) {
		result = result.nextSibling;
	}
	return result;
}

function getNextChild(obj) {
	var result = obj.nextSibling;
	while (!result.tagName) {
		result = result.nextSibling;
	}
	return result;
}






