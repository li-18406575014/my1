/*!
 * jQuery UI Core lib js
 * UI for jinrf
 * Base On jQuery UI 1.8.24
 * URL:http://www.jinrf.com
 * @Time 2012-10-29
 * @Last Update Time 2012-10-29
 *
 */

/**
 * jquery.ui.core
 * 1.8.24
 * */
(function(a, d) {
	a.ui = a.ui || {};
	if (a.ui.version) {
		return
	}
	a.extend(a.ui, {
		version: "@VERSION",
		keyCode: {
			ALT: 18,
			BACKSPACE: 8,
			CAPS_LOCK: 20,
			COMMA: 188,
			COMMAND: 91,
			COMMAND_LEFT: 91,
			COMMAND_RIGHT: 93,
			CONTROL: 17,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			INSERT: 45,
			LEFT: 37,
			MENU: 93,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SHIFT: 16,
			SPACE: 32,
			TAB: 9,
			UP: 38,
			WINDOWS: 91
		}
	});
	a.fn.extend({
		propAttr: a.fn.prop || a.fn.attr,
		_focus: a.fn.focus,
		focus: function(e, f) {
			return typeof e === "number" ? this.each(function() {
				var g = this;
				setTimeout(function() {
					a(g).focus();
					if (f) {
						f.call(g)
					}
				}, e)
			}) : this._focus.apply(this, arguments)
		},
		scrollParent: function() {
			var e;
			if ((a.browser.msie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
				e = this.parents().filter(function() {
					return (/(relative|absolute|fixed)/).test(a.curCSS(this, "position", 1)) && (/(auto|scroll)/).test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
				}).eq(0)
			} else {
				e = this.parents().filter(function() {
					return (/(auto|scroll)/).test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
				}).eq(0)
			}
			return (/fixed/).test(this.css("position")) || !e.length ? a(document) : e
		},
		zIndex: function(h) {
			if (h !== d) {
				return this.css("zIndex", h)
			}
			if (this.length) {
				var f = a(this[0]),
					e, g;
				while (f.length && f[0] !== document) {
					e = f.css("position");
					if (e === "absolute" || e === "relative" || e === "fixed") {
						g = parseInt(f.css("zIndex"), 10);
						if (!isNaN(g) && g !== 0) {
							return g
						}
					}
					f = f.parent()
				}
			}
			return 0
		},
		disableSelection: function() {
			return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
				e.preventDefault()
			})
		},
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		}
	});
	if (!a("<a>").outerWidth(1).jquery) {
		a.each(["Width", "Height"], function(g, e) {
			var f = e === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
				h = e.toLowerCase(),
				k = {
					innerWidth: a.fn.innerWidth,
					innerHeight: a.fn.innerHeight,
					outerWidth: a.fn.outerWidth,
					outerHeight: a.fn.outerHeight
				};

			function j(m, l, i, n) {
				a.each(f, function() {
					l -= parseFloat(a.curCSS(m, "padding" + this, true)) || 0;
					if (i) {
						l -= parseFloat(a.curCSS(m, "border" + this + "Width", true)) || 0
					}
					if (n) {
						l -= parseFloat(a.curCSS(m, "margin" + this, true)) || 0
					}
				});
				return l
			}
			a.fn["inner" + e] = function(i) {
				if (i === d) {
					return k["inner" + e].call(this)
				}
				return this.each(function() {
					a(this).css(h, j(this, i) + "px")
				})
			};
			a.fn["outer" + e] = function(i, l) {
				if (typeof i !== "number") {
					return k["outer" + e].call(this, i)
				}
				return this.each(function() {
					a(this).css(h, j(this, i, true, l) + "px")
				})
			}
		})
	}

	function c(g, e) {
		var j = g.nodeName.toLowerCase();
		if ("area" === j) {
			var i = g.parentNode,
				h = i.name,
				f;
			if (!g.href || !h || i.nodeName.toLowerCase() !== "map") {
				return false
			}
			f = a("img[usemap=#" + h + "]")[0];
			return !!f && b(f)
		}
		return (/input|select|textarea|button|object/.test(j) ? !g.disabled : "a" == j ? g.href || e : e) && b(g)
	}

	function b(e) {
		return !a(e).parents().andSelf().filter(function() {
			return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this)
		}).length
	}
	a.extend(a.expr[":"], {
		data: a.expr.createPseudo ? a.expr.createPseudo(function(e) {
			return function(f) {
				return !!a.data(f, e)
			}
		}) : function(g, f, e) {
			return !!a.data(g, e[3])
		},
		focusable: function(e) {
			return c(e, !isNaN(a.attr(e, "tabindex")))
		},
		tabbable: function(g) {
			var e = a.attr(g, "tabindex"),
				f = isNaN(e);
			return (f || e >= 0) && c(g, !f)
		}
	});
	a(function() {
		var e = document.body,
			f = e.appendChild(f = document.createElement("div"));
		f.offsetHeight;
		a.extend(f.style, {
			minHeight: "100px",
			height: "auto",
			padding: 0,
			borderWidth: 0
		});
		a.support.minHeight = f.offsetHeight === 100;
		a.support.selectstart = "onselectstart" in f;
		e.removeChild(f).style.display = "none"
	});
	if (!a.curCSS) {
		a.curCSS = a.css
	}
	a.extend(a.ui, {
		plugin: {
			add: function(f, g, j) {
				var h = a.ui[f].prototype;
				for (var e in j) {
					h.plugins[e] = h.plugins[e] || [];
					h.plugins[e].push([g, j[e]])
				}
			},
			call: function(e, g, f) {
				var j = e.plugins[g];
				if (!j || !e.element[0].parentNode) {
					return
				}
				for (var h = 0; h < j.length; h++) {
					if (e.options[j[h][0]]) {
						j[h][1].apply(e.element, f)
					}
				}
			}
		},
		contains: function(f, e) {
			return document.compareDocumentPosition ? f.compareDocumentPosition(e) & 16 : f !== e && f.contains(e)
		},
		hasScroll: function(h, f) {
			if (a(h).css("overflow") === "hidden") {
				return false
			}
			var e = (f && f === "left") ? "scrollLeft" : "scrollTop",
				g = false;
			if (h[e] > 0) {
				return true
			}
			h[e] = 1;
			g = (h[e] > 0);
			h[e] = 0;
			return g
		},
		isOverAxis: function(f, e, g) {
			return (f > e) && (f < (e + g))
		},
		isOver: function(j, f, i, h, e, g) {
			return a.ui.isOverAxis(j, i, e) && a.ui.isOverAxis(f, h, g)
		}
	})
})(jQuery);

/**
 * jquery.ui.widget
 * 1.8.24
 * */
(function(b, d) {
	if (b.cleanData) {
		var c = b.cleanData;
		b.cleanData = function(f) {
			for (var g = 0, h;
			(h = f[g]) != null; g++) {
				try {
					b(h).triggerHandler("remove")
				} catch (j) {}
			}
			c(f)
		}
	} else {
		var a = b.fn.remove;
		b.fn.remove = function(e, f) {
			return this.each(function() {
				if (!f) {
					if (!e || b.filter(e, [this]).length) {
						b("*", this).add([this]).each(function() {
							try {
								b(this).triggerHandler("remove")
							} catch (g) {}
						})
					}
				}
				return a.call(b(this), e, f)
			})
		}
	}
	b.widget = function(f, h, e) {
		var g = f.split(".")[0],
			j;
		f = f.split(".")[1];
		j = g + "-" + f;
		if (!e) {
			e = h;
			h = b.Widget
		}
		b.expr[":"][j] = function(k) {
			return !!b.data(k, f)
		};
		b[g] = b[g] || {};
		b[g][f] = function(k, l) {
			if (arguments.length) {
				this._createWidget(k, l)
			}
		};
		var i = new h();
		i.options = b.extend(true, {}, i.options);
		b[g][f].prototype = b.extend(true, i, {
			namespace: g,
			widgetName: f,
			widgetEventPrefix: b[g][f].prototype.widgetEventPrefix || f,
			widgetBaseClass: j
		}, e);
		b.widget.bridge(f, b[g][f])
	};
	b.widget.bridge = function(f, e) {
		b.fn[f] = function(i) {
			var g = typeof i === "string",
				h = Array.prototype.slice.call(arguments, 1),
				j = this;
			i = !g && h.length ? b.extend.apply(null, [true, i].concat(h)) : i;
			if (g && i.charAt(0) === "_") {
				return j
			}
			if (g) {
				this.each(function() {
					var k = b.data(this, f),
						l = k && b.isFunction(k[i]) ? k[i].apply(k, h) : k;
					if (l !== k && l !== d) {
						j = l;
						return false
					}
				})
			} else {
				this.each(function() {
					var k = b.data(this, f);
					if (k) {
						k.option(i || {})._init()
					} else {
						b.data(this, f, new e(i, this))
					}
				})
			}
			return j
		}
	};
	b.Widget = function(e, f) {
		if (arguments.length) {
			this._createWidget(e, f)
		}
	};
	b.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		options: {
			disabled: false
		},
		_createWidget: function(f, g) {
			b.data(g, this.widgetName, this);
			this.element = b(g);
			this.options = b.extend(true, {}, this.options, this._getCreateOptions(), f);
			var e = this;
			this.element.bind("remove." + this.widgetName, function() {
				e.destroy()
			});
			this._create();
			this._trigger("create");
			this._init()
		},
		_getCreateOptions: function() {
			return b.metadata && b.metadata.get(this.element[0])[this.widgetName]
		},
		_create: function() {},
		_init: function() {},
		destroy: function() {
			this.element.unbind("." + this.widgetName).removeData(this.widgetName);
			this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
		},
		widget: function() {
			return this.element
		},
		option: function(f, g) {
			var e = f;
			if (arguments.length === 0) {
				return b.extend({}, this.options)
			}
			if (typeof f === "string") {
				if (g === d) {
					return this.options[f]
				}
				e = {};
				e[f] = g
			}
			this._setOptions(e);
			return this
		},
		_setOptions: function(f) {
			var e = this;
			b.each(f, function(g, h) {
				e._setOption(g, h)
			});
			return this
		},
		_setOption: function(e, f) {
			this.options[e] = f;
			if (e === "disabled") {
				this.widget()[f ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", f)
			}
			return this
		},
		enable: function() {
			return this._setOption("disabled", false)
		},
		disable: function() {
			return this._setOption("disabled", true)
		},
		_trigger: function(e, f, g) {
			var j, i, h = this.options[e];
			g = g || {};
			f = b.Event(f);
			f.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase();
			f.target = this.element[0];
			i = f.originalEvent;
			if (i) {
				for (j in i) {
					if (!(j in f)) {
						f[j] = i[j]
					}
				}
			}
			this.element.trigger(f, g);
			return !(b.isFunction(h) && h.call(this.element[0], f, g) === false || f.isDefaultPrevented())
		}
	}
})(jQuery);

/**
 * jquery.ui.mouse
 * 1.8.24
 * */
(function(b, c) {
	var a = false;
	b(document).mouseup(function(d) {
		a = false
	});
	b.widget("ui.mouse", {
		options: {
			cancel: ":input,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var d = this;
			this.element.bind("mousedown." + this.widgetName, function(e) {
				return d._mouseDown(e)
			}).bind("click." + this.widgetName, function(e) {
				if (true === b.data(e.target, d.widgetName + ".preventClickEvent")) {
					b.removeData(e.target, d.widgetName + ".preventClickEvent");
					e.stopImmediatePropagation();
					return false
				}
			});
			this.started = false
		},
		_mouseDestroy: function() {
			this.element.unbind("." + this.widgetName);
			if (this._mouseMoveDelegate) {
				b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
			}
		},
		_mouseDown: function(f) {
			if (a) {
				return
			}(this._mouseStarted && this._mouseUp(f));
			this._mouseDownEvent = f;
			var e = this,
				g = (f.which == 1),
				d = (typeof this.options.cancel == "string" && f.target.nodeName ? b(f.target).closest(this.options.cancel).length : false);
			if (!g || d || !this._mouseCapture(f)) {
				return true
			}
			this.mouseDelayMet = !this.options.delay;
			if (!this.mouseDelayMet) {
				this._mouseDelayTimer = setTimeout(function() {
					e.mouseDelayMet = true
				}, this.options.delay)
			}
			if (this._mouseDistanceMet(f) && this._mouseDelayMet(f)) {
				this._mouseStarted = (this._mouseStart(f) !== false);
				if (!this._mouseStarted) {
					f.preventDefault();
					return true
				}
			}
			if (true === b.data(f.target, this.widgetName + ".preventClickEvent")) {
				b.removeData(f.target, this.widgetName + ".preventClickEvent")
			}
			this._mouseMoveDelegate = function(h) {
				return e._mouseMove(h)
			};
			this._mouseUpDelegate = function(h) {
				return e._mouseUp(h)
			};
			b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
			f.preventDefault();
			a = true;
			return true
		},
		_mouseMove: function(d) {
			if (b.browser.msie && !(document.documentMode >= 9) && !d.button) {
				return this._mouseUp(d)
			}
			if (this._mouseStarted) {
				this._mouseDrag(d);
				return d.preventDefault()
			}
			if (this._mouseDistanceMet(d) && this._mouseDelayMet(d)) {
				this._mouseStarted = (this._mouseStart(this._mouseDownEvent, d) !== false);
				(this._mouseStarted ? this._mouseDrag(d) : this._mouseUp(d))
			}
			return !this._mouseStarted
		},
		_mouseUp: function(d) {
			b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
			if (this._mouseStarted) {
				this._mouseStarted = false;
				if (d.target == this._mouseDownEvent.target) {
					b.data(d.target, this.widgetName + ".preventClickEvent", true)
				}
				this._mouseStop(d)
			}
			return false
		},
		_mouseDistanceMet: function(d) {
			return (Math.max(Math.abs(this._mouseDownEvent.pageX - d.pageX), Math.abs(this._mouseDownEvent.pageY - d.pageY)) >= this.options.distance)
		},
		_mouseDelayMet: function(d) {
			return this.mouseDelayMet
		},
		_mouseStart: function(d) {},
		_mouseDrag: function(d) {},
		_mouseStop: function(d) {},
		_mouseCapture: function(d) {
			return true
		}
	})
})(jQuery);

/**
 * jquery.ui.sortable
 * 1.8.24
 * */
(function(a, b) {
	a.widget("ui.sortable", a.ui.mouse, {
		widgetEventPrefix: "sort",
		ready: false,
		options: {
			appendTo: "parent",
			axis: false,
			connectWith: false,
			containment: false,
			cursor: "auto",
			cursorAt: false,
			dropOnEmpty: true,
			forcePlaceholderSize: false,
			forceHelperSize: false,
			grid: false,
			handle: false,
			helper: "original",
			items: "> *",
			opacity: false,
			placeholder: false,
			revert: false,
			scroll: true,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1000
		},
		_create: function() {
			var c = this.options;
			this.containerCache = {};
			this.element.addClass("ui-sortable");
			this.refresh();
			this.floating = this.items.length ? c.axis === "x" || (/left|right/).test(this.items[0].item.css("float")) || (/inline|table-cell/).test(this.items[0].item.css("display")) : false;
			this.offset = this.element.offset();
			this._mouseInit();
			this.ready = true
		},
		destroy: function() {
			a.Widget.prototype.destroy.call(this);
			this.element.removeClass("ui-sortable ui-sortable-disabled");
			this._mouseDestroy();
			for (var c = this.items.length - 1; c >= 0; c--) {
				this.items[c].item.removeData(this.widgetName + "-item")
			}
			return this
		},
		_setOption: function(c, d) {
			if (c === "disabled") {
				this.options[c] = d;
				this.widget()[d ? "addClass" : "removeClass"]("ui-sortable-disabled")
			} else {
				a.Widget.prototype._setOption.apply(this, arguments)
			}
		},
		_mouseCapture: function(g, h) {
			var f = this;
			if (this.reverting) {
				return false
			}
			if (this.options.disabled || this.options.type == "static") {
				return false
			}
			this._refreshItems(g);
			var e = null,
				d = this,
				c = a(g.target).parents().each(function() {
					if (a.data(this, f.widgetName + "-item") == d) {
						e = a(this);
						return false
					}
				});
			if (a.data(g.target, f.widgetName + "-item") == d) {
				e = a(g.target)
			}
			if (!e) {
				return false
			}
			if (this.options.handle && !h) {
				var i = false;
				a(this.options.handle, e).find("*").andSelf().each(function() {
					if (this == g.target) {
						i = true
					}
				});
				if (!i) {
					return false
				}
			}
			this.currentItem = e;
			this._removeCurrentsFromItems();
			return true
		},
		_mouseStart: function(f, g, c) {
			var h = this.options,
				d = this;
			this.currentContainer = this;
			this._trigger("beforeStart", f, this._uiHash());
			this._refreshItems(f);
			this.refreshPositions();
			this.helper = this._createHelper(f);
			this._cacheHelperProportions();
			this._cacheMargins();
			this.scrollParent = this.helper.scrollParent();
			this.offset = this.currentItem.offset();
			this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			};
			a.extend(this.offset, {
				click: {
					left: f.pageX - this.offset.left,
					top: f.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			});
			this.helper.css("position", "absolute");
			this.cssPosition = this.helper.css("position");
			this.originalPosition = this._generatePosition(f);
			this.originalPageX = f.pageX;
			this.originalPageY = f.pageY;
			(h.cursorAt && this._adjustOffsetFromHelper(h.cursorAt));
			this.domPosition = {
				prev: this.currentItem.prev()[0],
				parent: this.currentItem.parent()[0]
			};
			if (this.helper[0] != this.currentItem[0]) {
				this.currentItem.hide()
			}
			this._createPlaceholder();
			if (h.containment) {
				this._setContainment()
			}
			if (h.cursor) {
				if (a("body").css("cursor")) {
					this._storedCursor = a("body").css("cursor")
				}
				a("body").css("cursor", h.cursor)
			}
			if (h.opacity) {
				if (this.helper.css("opacity")) {
					this._storedOpacity = this.helper.css("opacity")
				}
				this.helper.css("opacity", h.opacity)
			}
			if (h.zIndex) {
				if (this.helper.css("zIndex")) {
					this._storedZIndex = this.helper.css("zIndex")
				}
				this.helper.css("zIndex", h.zIndex)
			}
			if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
				this.overflowOffset = this.scrollParent.offset()
			}
			this._trigger("start", f, this._uiHash());
			if (!this._preserveHelperProportions) {
				this._cacheHelperProportions()
			}
			if (!c) {
				for (var e = this.containers.length - 1; e >= 0; e--) {
					this.containers[e]._trigger("activate", f, d._uiHash(this))
				}
			}
			if (a.ui.ddmanager) {
				a.ui.ddmanager.current = this
			}
			if (a.ui.ddmanager && !h.dropBehaviour) {
				a.ui.ddmanager.prepareOffsets(this, f)
			}
			this.dragging = true;
			this.helper.addClass("ui-sortable-helper");
			this._mouseDrag(f);
			return true
		},
		_mouseDrag: function(g) {
			this.position = this._generatePosition(g);
			this.positionAbs = this._convertPositionTo("absolute");
			if (!this.lastPositionAbs) {
				this.lastPositionAbs = this.positionAbs
			}
			if (this.options.scroll) {
				var h = this.options,
					c = false;
				if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
					if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - g.pageY < h.scrollSensitivity) {
						this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop + h.scrollSpeed
					} else {
						if (g.pageY - this.overflowOffset.top < h.scrollSensitivity) {
							this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop - h.scrollSpeed
						}
					}
					if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - g.pageX < h.scrollSensitivity) {
						this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft + h.scrollSpeed
					} else {
						if (g.pageX - this.overflowOffset.left < h.scrollSensitivity) {
							this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft - h.scrollSpeed
						}
					}
				} else {
					if (g.pageY - a(document).scrollTop() < h.scrollSensitivity) {
						c = a(document).scrollTop(a(document).scrollTop() - h.scrollSpeed)
					} else {
						if (a(window).height() - (g.pageY - a(document).scrollTop()) < h.scrollSensitivity) {
							c = a(document).scrollTop(a(document).scrollTop() + h.scrollSpeed)
						}
					}
					if (g.pageX - a(document).scrollLeft() < h.scrollSensitivity) {
						c = a(document).scrollLeft(a(document).scrollLeft() - h.scrollSpeed)
					} else {
						if (a(window).width() - (g.pageX - a(document).scrollLeft()) < h.scrollSensitivity) {
							c = a(document).scrollLeft(a(document).scrollLeft() + h.scrollSpeed)
						}
					}
				}
				if (c !== false && a.ui.ddmanager && !h.dropBehaviour) {
					a.ui.ddmanager.prepareOffsets(this, g)
				}
			}
			this.positionAbs = this._convertPositionTo("absolute");
			if (!this.options.axis || this.options.axis != "y") {
				this.helper[0].style.left = this.position.left + "px"
			}
			if (!this.options.axis || this.options.axis != "x") {
				this.helper[0].style.top = this.position.top + "px"
			}
			for (var e = this.items.length - 1; e >= 0; e--) {
				var f = this.items[e],
					d = f.item[0],
					j = this._intersectsWithPointer(f);
				if (!j) {
					continue
				}
				if (f.instance !== this.currentContainer) {
					continue
				}
				if (d != this.currentItem[0] && this.placeholder[j == 1 ? "next" : "prev"]()[0] != d && !a.ui.contains(this.placeholder[0], d) && (this.options.type == "semi-dynamic" ? !a.ui.contains(this.element[0], d) : true)) {
					this.direction = j == 1 ? "down" : "up";
					if (this.options.tolerance == "pointer" || this._intersectsWithSides(f)) {
						this._rearrange(g, f)
					} else {
						break
					}
					this._trigger("change", g, this._uiHash());
					break
				}
			}
			this._contactContainers(g);
			if (a.ui.ddmanager) {
				a.ui.ddmanager.drag(this, g)
			}
			this._trigger("sort", g, this._uiHash());
			this.lastPositionAbs = this.positionAbs;
			return false
		},
		_mouseStop: function(d, e) {
			if (!d) {
				return
			}
			if (a.ui.ddmanager && !this.options.dropBehaviour) {
				a.ui.ddmanager.drop(this, d)
			}
			if (this.options.revert) {
				var c = this;
				var f = c.placeholder.offset();
				c.reverting = true;
				a(this.helper).animate({
					left: f.left - this.offset.parent.left - c.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
					top: f.top - this.offset.parent.top - c.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
				}, parseInt(this.options.revert, 10) || 500, function() {
					c._clear(d)
				})
			} else {
				this._clear(d, e)
			}
			return false
		},
		cancel: function() {
			var c = this;
			if (this.dragging) {
				this._mouseUp({
					target: null
				});
				if (this.options.helper == "original") {
					this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
				} else {
					this.currentItem.show()
				}
				for (var d = this.containers.length - 1; d >= 0; d--) {
					this.containers[d]._trigger("deactivate", null, c._uiHash(this));
					if (this.containers[d].containerCache.over) {
						this.containers[d]._trigger("out", null, c._uiHash(this));
						this.containers[d].containerCache.over = 0
					}
				}
			}
			if (this.placeholder) {
				if (this.placeholder[0].parentNode) {
					this.placeholder[0].parentNode.removeChild(this.placeholder[0])
				}
				if (this.options.helper != "original" && this.helper && this.helper[0].parentNode) {
					this.helper.remove()
				}
				a.extend(this, {
					helper: null,
					dragging: false,
					reverting: false,
					_noFinalSort: null
				});
				if (this.domPosition.prev) {
					a(this.domPosition.prev).after(this.currentItem)
				} else {
					a(this.domPosition.parent).prepend(this.currentItem)
				}
			}
			return this
		},
		serialize: function(e) {
			var c = this._getItemsAsjQuery(e && e.connected);
			var d = [];
			e = e || {};
			a(c).each(function() {
				var f = (a(e.item || this).attr(e.attribute || "id") || "").match(e.expression || (/(.+)[-=_](.+)/));
				if (f) {
					d.push((e.key || f[1] + "[]") + "=" + (e.key && e.expression ? f[1] : f[2]))
				}
			});
			if (!d.length && e.key) {
				d.push(e.key + "=")
			}
			return d.join("&")
		},
		toArray: function(e) {
			var c = this._getItemsAsjQuery(e && e.connected);
			var d = [];
			e = e || {};
			c.each(function() {
				d.push(a(e.item || this).attr(e.attribute || "id") || "")
			});
			return d
		},
		_intersectsWith: function(m) {
			var e = this.positionAbs.left,
				d = e + this.helperProportions.width,
				k = this.positionAbs.top,
				j = k + this.helperProportions.height;
			var f = m.left,
				c = f + m.width,
				n = m.top,
				i = n + m.height;
			var o = this.offset.click.top,
				h = this.offset.click.left;
			var g = (k + o) > n && (k + o) < i && (e + h) > f && (e + h) < c;
			if (this.options.tolerance == "pointer" || this.options.forcePointerForContainers || (this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > m[this.floating ? "width" : "height"])) {
				return g
			} else {
				return (f < e + (this.helperProportions.width / 2) && d - (this.helperProportions.width / 2) < c && n < k + (this.helperProportions.height / 2) && j - (this.helperProportions.height / 2) < i)
			}
		},
		_intersectsWithPointer: function(e) {
			var f = (this.options.axis === "x") || a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
				d = (this.options.axis === "y") || a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
				h = f && d,
				c = this._getDragVerticalDirection(),
				g = this._getDragHorizontalDirection();
			if (!h) {
				return false
			}
			return this.floating ? (((g && g == "right") || c == "down") ? 2 : 1) : (c && (c == "down" ? 2 : 1))
		},
		_intersectsWithSides: function(f) {
			var d = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, f.top + (f.height / 2), f.height),
				e = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, f.left + (f.width / 2), f.width),
				c = this._getDragVerticalDirection(),
				g = this._getDragHorizontalDirection();
			if (this.floating && g) {
				return ((g == "right" && e) || (g == "left" && !e))
			} else {
				return c && ((c == "down" && d) || (c == "up" && !d))
			}
		},
		_getDragVerticalDirection: function() {
			var c = this.positionAbs.top - this.lastPositionAbs.top;
			return c != 0 && (c > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function() {
			var c = this.positionAbs.left - this.lastPositionAbs.left;
			return c != 0 && (c > 0 ? "right" : "left")
		},
		refresh: function(c) {
			this._refreshItems(c);
			this.refreshPositions();
			return this
		},
		_connectWith: function() {
			var c = this.options;
			return c.connectWith.constructor == String ? [c.connectWith] : c.connectWith
		},
		_getItemsAsjQuery: function(c) {
			var m = this;
			var h = [];
			var f = [];
			var k = this._connectWith();
			if (k && c) {
				for (var e = k.length - 1; e >= 0; e--) {
					var l = a(k[e]);
					for (var d = l.length - 1; d >= 0; d--) {
						var g = a.data(l[d], this.widgetName);
						if (g && g != this && !g.options.disabled) {
							f.push([a.isFunction(g.options.items) ? g.options.items.call(g.element) : a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g])
						}
					}
				}
			}
			f.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
				options: this.options,
				item: this.currentItem
			}) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
			for (var e = f.length - 1; e >= 0; e--) {
				f[e][0].each(function() {
					h.push(this)
				})
			}
			return a(h)
		},
		_removeCurrentsFromItems: function() {
			var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
			for (var d = 0; d < this.items.length; d++) {
				for (var c = 0; c < e.length; c++) {
					if (e[c] == this.items[d].item[0]) {
						this.items.splice(d, 1)
					}
				}
			}
		},
		_refreshItems: function(c) {
			this.items = [];
			this.containers = [this];
			var k = this.items;
			var q = this;
			var g = [
				[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], c, {
					item: this.currentItem
				}) : a(this.options.items, this.element), this]
			];
			var m = this._connectWith();
			if (m && this.ready) {
				for (var f = m.length - 1; f >= 0; f--) {
					var n = a(m[f]);
					for (var e = n.length - 1; e >= 0; e--) {
						var h = a.data(n[e], this.widgetName);
						if (h && h != this && !h.options.disabled) {
							g.push([a.isFunction(h.options.items) ? h.options.items.call(h.element[0], c, {
								item: this.currentItem
							}) : a(h.options.items, h.element), h]);
							this.containers.push(h)
						}
					}
				}
			}
			for (var f = g.length - 1; f >= 0; f--) {
				var l = g[f][1];
				var d = g[f][0];
				for (var e = 0, o = d.length; e < o; e++) {
					var p = a(d[e]);
					p.data(this.widgetName + "-item", l);
					k.push({
						item: p,
						instance: l,
						width: 0,
						height: 0,
						left: 0,
						top: 0
					})
				}
			}
		},
		refreshPositions: function(c) {
			if (this.offsetParent && this.helper) {
				this.offset.parent = this._getParentOffset()
			}
			for (var e = this.items.length - 1; e >= 0; e--) {
				var f = this.items[e];
				if (f.instance != this.currentContainer && this.currentContainer && f.item[0] != this.currentItem[0]) {
					continue
				}
				var d = this.options.toleranceElement ? a(this.options.toleranceElement, f.item) : f.item;
				if (!c) {
					f.width = d.outerWidth();
					f.height = d.outerHeight()
				}
				var g = d.offset();
				f.left = g.left;
				f.top = g.top
			}
			if (this.options.custom && this.options.custom.refreshContainers) {
				this.options.custom.refreshContainers.call(this)
			} else {
				for (var e = this.containers.length - 1; e >= 0; e--) {
					var g = this.containers[e].element.offset();
					this.containers[e].containerCache.left = g.left;
					this.containers[e].containerCache.top = g.top;
					this.containers[e].containerCache.width = this.containers[e].element.outerWidth();
					this.containers[e].containerCache.height = this.containers[e].element.outerHeight()
				}
			}
			return this
		},
		_createPlaceholder: function(e) {
			var c = e || this,
				f = c.options;
			if (!f.placeholder || f.placeholder.constructor == String) {
				var d = f.placeholder;
				f.placeholder = {
					element: function() {
						var g = a(document.createElement(c.currentItem[0].nodeName)).addClass(d || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
						if (!d) {
							g.style.visibility = "hidden"
						}
						return g
					},
					update: function(g, h) {
						if (d && !f.forcePlaceholderSize) {
							return
						}
						if (!h.height()) {
							h.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10))
						}
						if (!h.width()) {
							h.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10))
						}
					}
				}
			}
			c.placeholder = a(f.placeholder.element.call(c.element, c.currentItem));
			c.currentItem.after(c.placeholder);
			f.placeholder.update(c, c.placeholder)
		},
		_contactContainers: function(c) {
			var e = null,
				l = null;
			for (var g = this.containers.length - 1; g >= 0; g--) {
				if (a.ui.contains(this.currentItem[0], this.containers[g].element[0])) {
					continue
				}
				if (this._intersectsWith(this.containers[g].containerCache)) {
					if (e && a.ui.contains(this.containers[g].element[0], e.element[0])) {
						continue
					}
					e = this.containers[g];
					l = g
				} else {
					if (this.containers[g].containerCache.over) {
						this.containers[g]._trigger("out", c, this._uiHash(this));
						this.containers[g].containerCache.over = 0
					}
				}
			}
			if (!e) {
				return
			}
			if (this.containers.length === 1) {
				this.containers[l]._trigger("over", c, this._uiHash(this));
				this.containers[l].containerCache.over = 1
			} else {
				if (this.currentContainer != this.containers[l]) {
					var k = 10000;
					var h = null;
					var d = this.positionAbs[this.containers[l].floating ? "left" : "top"];
					for (var f = this.items.length - 1; f >= 0; f--) {
						if (!a.ui.contains(this.containers[l].element[0], this.items[f].item[0])) {
							continue
						}
						var m = this.containers[l].floating ? this.items[f].item.offset().left : this.items[f].item.offset().top;
						if (Math.abs(m - d) < k) {
							k = Math.abs(m - d);
							h = this.items[f];
							this.direction = (m - d > 0) ? "down" : "up"
						}
					}
					if (!h && !this.options.dropOnEmpty) {
						return
					}
					this.currentContainer = this.containers[l];
					h ? this._rearrange(c, h, null, true) : this._rearrange(c, null, this.containers[l].element, true);
					this._trigger("change", c, this._uiHash());
					this.containers[l]._trigger("change", c, this._uiHash(this));
					this.options.placeholder.update(this.currentContainer, this.placeholder);
					this.containers[l]._trigger("over", c, this._uiHash(this));
					this.containers[l].containerCache.over = 1
				}
			}
		},
		_createHelper: function(d) {
			var e = this.options;
			var c = a.isFunction(e.helper) ? a(e.helper.apply(this.element[0], [d, this.currentItem])) : (e.helper == "clone" ? this.currentItem.clone() : this.currentItem);
			if (!c.parents("body").length) {
				a(e.appendTo != "parent" ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(c[0])
			}
			if (c[0] == this.currentItem[0]) {
				this._storedCSS = {
					width: this.currentItem[0].style.width,
					height: this.currentItem[0].style.height,
					position: this.currentItem.css("position"),
					top: this.currentItem.css("top"),
					left: this.currentItem.css("left")
				}
			}
			if (c[0].style.width == "" || e.forceHelperSize) {
				c.width(this.currentItem.width())
			}
			if (c[0].style.height == "" || e.forceHelperSize) {
				c.height(this.currentItem.height())
			}
			return c
		},
		_adjustOffsetFromHelper: function(c) {
			if (typeof c == "string") {
				c = c.split(" ")
			}
			if (a.isArray(c)) {
				c = {
					left: +c[0],
					top: +c[1] || 0
				}
			}
			if ("left" in c) {
				this.offset.click.left = c.left + this.margins.left
			}
			if ("right" in c) {
				this.offset.click.left = this.helperProportions.width - c.right + this.margins.left
			}
			if ("top" in c) {
				this.offset.click.top = c.top + this.margins.top
			}
			if ("bottom" in c) {
				this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top
			}
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var c = this.offsetParent.offset();

            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
				c.left += this.scrollParent.scrollLeft();
				//c.top += this.scrollParent.scrollTop();
                //20171121  mxs 修改原因：模块在布局内拖动 谷歌火狐没问题获取的srollTop 为0 ， 但在360极速等其他以谷歌为内核的浏览器中获取的srollTop 不为0 导致拖拽时helper top值不正确
                c.top += 0;
			}
			if ((this.offsetParent[0] == document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie)) {
				c = {
					top: 0,
					left: 0
				}
			}
			return {
				top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if (this.cssPosition == "relative") {
				var c = this.currentItem.position();
				return {
					top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			} else {
				return {
					top: 0,
					left: 0
				}
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
				top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var f = this.options;
			if (f.containment == "parent") {
				f.containment = this.helper[0].parentNode
			}
			if (f.containment == "document" || f.containment == "window") {
				this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(f.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a(f.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
			}
			if (!(/^(document|window|parent)$/).test(f.containment)) {
				var d = a(f.containment)[0];
				var e = a(f.containment).offset();
				var c = (a(d).css("overflow") != "hidden");
				this.containment = [e.left + (parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (c ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (c ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
			}
		},
		_convertPositionTo: function(g, i) {
			if (!i) {
				i = this.position
			}
			var e = g == "absolute" ? 1 : -1;
			var f = this.options,
				c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				h = (/(html|body)/i).test(c[0].tagName);
			return {
				top: (i.top + this.offset.relative.top * e + this.offset.parent.top * e - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (h ? 0 : c.scrollTop())) * e)),
				left: (i.left + this.offset.relative.left * e + this.offset.parent.left * e - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : c.scrollLeft()) * e))
			}
		},
		_generatePosition: function(f) {
			var i = this.options,
				c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				j = (/(html|body)/i).test(c[0].tagName);
			if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) {
				this.offset.relative = this._getRelativeOffset()
			}
			var e = f.pageX;
			var d = f.pageY;
			if (this.originalPosition) {
				if (this.containment) {
					if (f.pageX - this.offset.click.left < this.containment[0]) {
						e = this.containment[0] + this.offset.click.left
					}
					if (f.pageY - this.offset.click.top < this.containment[1]) {
						d = this.containment[1] + this.offset.click.top
					}
					if (f.pageX - this.offset.click.left > this.containment[2]) {
						e = this.containment[2] + this.offset.click.left
					}
					if (f.pageY - this.offset.click.top > this.containment[3]) {
						d = this.containment[3] + this.offset.click.top
					}
				}
				if (i.grid) {
					var h = this.originalPageY + Math.round((d - this.originalPageY) / i.grid[1]) * i.grid[1];
					d = this.containment ? (!(h - this.offset.click.top < this.containment[1] || h - this.offset.click.top > this.containment[3]) ? h : (!(h - this.offset.click.top < this.containment[1]) ? h - i.grid[1] : h + i.grid[1])) : h;
					var g = this.originalPageX + Math.round((e - this.originalPageX) / i.grid[0]) * i.grid[0];
					e = this.containment ? (!(g - this.offset.click.left < this.containment[0] || g - this.offset.click.left > this.containment[2]) ? g : (!(g - this.offset.click.left < this.containment[0]) ? g - i.grid[0] : g + i.grid[0])) : g
				}
			}
			return {
				top: (d - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (j ? 0 : c.scrollTop())))),
				left: (e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : j ? 0 : c.scrollLeft())))
			}
		},
		_rearrange: function(h, g, d, f) {
			d ? d[0].appendChild(this.placeholder[0]) : g.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction == "down" ? g.item[0] : g.item[0].nextSibling));
			this.counter = this.counter ? ++this.counter : 1;
			var e = this,
				c = this.counter;
			window.setTimeout(function() {
				if (c == e.counter) {
					e.refreshPositions(!f)
				}
			}, 0)
		},
		_clear: function(e, f) {
			this.reverting = false;
			var g = [],
				c = this;
			if (!this._noFinalSort && this.currentItem.parent().length) {
				this.placeholder.before(this.currentItem)
			}
			this._noFinalSort = null;
			if (this.helper[0] == this.currentItem[0]) {
				for (var d in this._storedCSS) {
					if (this._storedCSS[d] == "auto" || this._storedCSS[d] == "static") {
						this._storedCSS[d] = ""
					}
				}
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else {
				this.currentItem.show()
			}
			if (this.fromOutside && !f) {
				g.push(function(h) {
					this._trigger("receive", h, this._uiHash(this.fromOutside))
				})
			}
			if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !f) {
				g.push(function(h) {
					this._trigger("update", h, this._uiHash())
				})
			}
			if (this !== this.currentContainer) {
				if (!f) {
					g.push(function(h) {
						this._trigger("remove", h, this._uiHash())
					});
					g.push((function(h) {
						return function(i) {
							h._trigger("receive", i, this._uiHash(this))
						}
					}).call(this, this.currentContainer));
					g.push((function(h) {
						return function(i) {
							h._trigger("update", i, this._uiHash(this))
						}
					}).call(this, this.currentContainer))
				}
			}
			for (var d = this.containers.length - 1; d >= 0; d--) {
				if (!f) {
					g.push((function(h) {
						return function(i) {
							h._trigger("deactivate", i, this._uiHash(this))
						}
					}).call(this, this.containers[d]))
				}
				if (this.containers[d].containerCache.over) {
					g.push((function(h) {
						return function(i) {
							h._trigger("out", i, this._uiHash(this))
						}
					}).call(this, this.containers[d]));
					this.containers[d].containerCache.over = 0
				}
			}
			if (this._storedCursor) {
				a("body").css("cursor", this._storedCursor)
			}
			if (this._storedOpacity) {
				this.helper.css("opacity", this._storedOpacity)
			}
			if (this._storedZIndex) {
				this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex)
			}
			this.dragging = false;
			if (this.cancelHelperRemoval) {
				if (!f) {
					this._trigger("beforeStop", e, this._uiHash());
					for (var d = 0; d < g.length; d++) {
						g[d].call(this, e)
					}
					this._trigger("stop", e, this._uiHash())
				}
				this.fromOutside = false;
				return false
			}
			if (!f) {
				this._trigger("beforeStop", e, this._uiHash())
			}
			this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
			if (this.helper[0] != this.currentItem[0]) {
				this.helper.remove()
			}
			this.helper = null;
			if (!f) {
				for (var d = 0; d < g.length; d++) {
					g[d].call(this, e)
				}
				this._trigger("stop", e, this._uiHash())
			}
			this.fromOutside = false;
			return true
		},
		_trigger: function() {
			if (a.Widget.prototype._trigger.apply(this, arguments) === false) {
				this.cancel()
			}
		},
		_uiHash: function(d) {
			var c = d || this;
			return {
				helper: c.helper,
				placeholder: c.placeholder || a([]),
				position: c.position,
				originalPosition: c.originalPosition,
				offset: c.positionAbs,
				item: c.currentItem,
				sender: d ? d.element : null
			}
		}
	});
	a.extend(a.ui.sortable, {
		version: "@VERSION"
	})
})(jQuery);

/**
 * jquery.ui.selectable
 * 1.8.24
 * */
(function(a, b) {
	a.widget("ui.selectable", a.ui.mouse, {
		options: {
			appendTo: "body",
			autoRefresh: true,
			distance: 0,
			filter: "*",
			tolerance: "touch"
		},
		_create: function() {
			var c = this;
			this.element.addClass("ui-selectable");
			this.dragged = false;
			var d;
			this.refresh = function() {
				d = a(c.options.filter, c.element[0]);
				d.addClass("ui-selectee");
				d.each(function() {
					var e = a(this);
					var f = e.offset();
					a.data(this, "selectable-item", {
						element: this,
						$element: e,
						left: f.left,
						top: f.top,
						right: f.left + e.outerWidth(),
						bottom: f.top + e.outerHeight(),
						startselected: false,
						selected: e.hasClass("ui-selected"),
						selecting: e.hasClass("ui-selecting"),
						unselecting: e.hasClass("ui-unselecting")
					})
				})
			};
			this.refresh();
			this.selectees = d.addClass("ui-selectee");
			this._mouseInit();
			this.helper = a("<div class='ui-selectable-helper'></div>")
		},
		destroy: function() {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item");
			this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
			this._mouseDestroy();
			return this
		},
		_mouseStart: function(e) {
			var c = this;
			this.opos = [e.pageX, e.pageY];
			if (this.options.disabled) {
				return
			}
			var d = this.options;
			this.selectees = a(d.filter, this.element[0]);
			this._trigger("start", e);
			a(d.appendTo).append(this.helper);
			this.helper.css({
				left: e.clientX,
				top: e.clientY,
				width: 0,
				height: 0
			});
			if (d.autoRefresh) {
				this.refresh()
			}
			this.selectees.filter(".ui-selected").each(function() {
				var f = a.data(this, "selectable-item");
				f.startselected = true;
				if (!e.metaKey && !e.ctrlKey) {
					f.$element.removeClass("ui-selected");
					f.selected = false;
					f.$element.addClass("ui-unselecting");
					f.unselecting = true;
					c._trigger("unselecting", e, {
						unselecting: f.element
					})
				}
			});
			a(e.target).parents().andSelf().each(function() {
				var g = a.data(this, "selectable-item");
				if (g) {
					var f = (!e.metaKey && !e.ctrlKey) || !g.$element.hasClass("ui-selected");
					g.$element.removeClass(f ? "ui-unselecting" : "ui-selected").addClass(f ? "ui-selecting" : "ui-unselecting");
					g.unselecting = !f;
					g.selecting = f;
					g.selected = f;
					if (f) {
						c._trigger("selecting", e, {
							selecting: g.element
						})
					} else {
						c._trigger("unselecting", e, {
							unselecting: g.element
						})
					}
					return false
				}
			})
		},
		_mouseDrag: function(j) {
			var d = this;
			this.dragged = true;
			if (this.options.disabled) {
				return
			}
			var f = this.options;
			var e = this.opos[0],
				i = this.opos[1],
				c = j.pageX,
				h = j.pageY;
			if (e > c) {
				var g = c;
				c = e;
				e = g
			}
			if (i > h) {
				var g = h;
				h = i;
				i = g
			}
			this.helper.css({
				left: e,
				top: i,
				width: c - e,
				height: h - i
			});
			this.selectees.each(function() {
				var k = a.data(this, "selectable-item");
				if (!k || k.element == d.element[0]) {
					return
				}
				var l = false;
				if (f.tolerance == "touch") {
					l = (!(k.left > c || k.right < e || k.top > h || k.bottom < i))
				} else {
					if (f.tolerance == "fit") {
						l = (k.left > e && k.right < c && k.top > i && k.bottom < h)
					}
				}
				if (l) {
					if (k.selected) {
						k.$element.removeClass("ui-selected");
						k.selected = false
					}
					if (k.unselecting) {
						k.$element.removeClass("ui-unselecting");
						k.unselecting = false
					}
					if (!k.selecting) {
						k.$element.addClass("ui-selecting");
						k.selecting = true;
						d._trigger("selecting", j, {
							selecting: k.element
						})
					}
				} else {
					if (k.selecting) {
						if ((j.metaKey || j.ctrlKey) && k.startselected) {
							k.$element.removeClass("ui-selecting");
							k.selecting = false;
							k.$element.addClass("ui-selected");
							k.selected = true
						} else {
							k.$element.removeClass("ui-selecting");
							k.selecting = false;
							if (k.startselected) {
								k.$element.addClass("ui-unselecting");
								k.unselecting = true
							}
							d._trigger("unselecting", j, {
								unselecting: k.element
							})
						}
					}
					if (k.selected) {
						if (!j.metaKey && !j.ctrlKey && !k.startselected) {
							k.$element.removeClass("ui-selected");
							k.selected = false;
							k.$element.addClass("ui-unselecting");
							k.unselecting = true;
							d._trigger("unselecting", j, {
								unselecting: k.element
							})
						}
					}
				}
			});
			return false
		},
		_mouseStop: function(e) {
			var c = this;
			this.dragged = false;
			var d = this.options;
			a(".ui-unselecting", this.element[0]).each(function() {
				var f = a.data(this, "selectable-item");
				f.$element.removeClass("ui-unselecting");
				f.unselecting = false;
				f.startselected = false;
				c._trigger("unselected", e, {
					unselected: f.element
				})
			});
			a(".ui-selecting", this.element[0]).each(function() {
				var f = a.data(this, "selectable-item");
				f.$element.removeClass("ui-selecting").addClass("ui-selected");
				f.selecting = false;
				f.selected = true;
				f.startselected = true;
				c._trigger("selected", e, {
					selected: f.element
				})
			});
			this._trigger("stop", e);
			this.helper.remove();
			return false
		}
	});
	a.extend(a.ui.selectable, {
		version: "@VERSION"
	})
})(jQuery);


/**
 * jquery.ui.draggable
 * 1.9.1
 * */
(function($, undefined) {
	$.widget("ui.draggable", $.ui.mouse, {
		version: "1.9.1",
		widgetEventPrefix: "drag",
		options: {
			addClasses: true,
			appendTo: "parent",
			axis: false,
			connectToSortable: false,
			containment: false,
			cursor: "auto",
			cursorAt: false,
			grid: false,
			handle: false,
			helper: "original",
			iframeFix: false,
			opacity: false,
			refreshPositions: false,
			revert: false,
			revertDuration: 500,
			scope: "default",
			scroll: true,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: false,
			snapMode: "both",
			snapTolerance: 20,
			stack: false,
			zIndex: false
		},
		_create: function() {
			if (this.options.helper == 'original' && !(/^(?:r|a|f)/).test(this.element.css("position"))) this.element[0].style.position = 'relative';
			(this.options.addClasses && this.element.addClass("ui-draggable"));
			(this.options.disabled && this.element.addClass("ui-draggable-disabled"));
			this._mouseInit()
		},
		_destroy: function() {
			this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
			this._mouseDestroy()
		},
		_mouseCapture: function(event) {
			var o = this.options;
			if (this.helper || o.disabled || $(event.target).is('.ui-resizable-handle')) return false;
			this.handle = this._getHandle(event);
			if (!this.handle) return false;
			$(o.iframeFix === true ? "iframe" : o.iframeFix).each(function() {
				$('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
					width: this.offsetWidth + "px",
					height: this.offsetHeight + "px",
					position: "absolute",
					opacity: "0.001",
					zIndex: 1000
				}).css($(this).offset()).appendTo("body")
			});
			return true
		},
		_mouseStart: function(event) {
			var o = this.options;
            this.startTop = $(document).scrollTop();
			this.helper = this._createHelper(event);
			this.helper.addClass("ui-draggable-dragging");
			this._cacheHelperProportions();
			if ($.ui.ddmanager) $.ui.ddmanager.current = this;
			this._cacheMargins();
			this.cssPosition = this.helper.css("position");
			this.scrollParent = this.helper.scrollParent();
			this.offset = this.positionAbs = this.element.offset();
			this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			};
			$.extend(this.offset, {
				click: {
					left: event.pageX - this.offset.left,
					top: event.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			});
			this.originalPosition = this.position = this._generatePosition(event);
			this.originalPageX = event.pageX;
			this.originalPageY = event.pageY;
			(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));
			if (o.containment) this._setContainment();
			if (this._trigger("start", event) === false) {
				this._clear();
				return false
			}
			this._cacheHelperProportions();
			if ($.ui.ddmanager && !o.dropBehaviour) $.ui.ddmanager.prepareOffsets(this, event);
			this._mouseDrag(event, true);
			if ($.ui.ddmanager) $.ui.ddmanager.dragStart(this, event);
			return true
		},
		_mouseDrag: function(event, noPropagation) {
			this.position = this._generatePosition(event);
			this.positionAbs = this._convertPositionTo("absolute");
			if (!noPropagation) {
				var ui = this._uiHash();
				if (this._trigger('drag', event, ui) === false) {
					this._mouseUp({});
					return false
				}
				this.position = ui.position
			}
			if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + 'px';

			var _lock = this.helper[0].getAttribute("_lock");
            var _side = this.helper[0].getAttribute("_side");
            //侧停、锁定 20171116   mxs   模块侧停拖动
            if($(this.helper[0]).parent().hasClass("absForm") || $(this.helper[0]).parent().hasClass("floatRightForm") || $(this.helper[0]).parent().hasClass("floatLeftForm") ){
			//if (_lock ||_side|| $.browser.mozilla) {
				if (!this.options.axis || this.options.axis != "x") {
					this.helper[0].style.top = this.position.top + "px";
				}
			} else {
				if (!this.options.axis || this.options.axis != "x") {
					//this.helper[0].style.top = this.position.top + $(document).scrollTop() + "px"
                    //侧停 20171116   mxs   模块侧停拖动
                    //this.helper[0].style.top = this.position.top + "px"
                    //  20171116   mxs   工具箱从左侧拖拽除模块时helper 定位不正确 修改
                    this.helper[0].style.top = this.position.top - $(document).scrollTop()+this.startTop+ "px";
				}
			};
			if ($.ui.ddmanager) $.ui.ddmanager.drag(this, event);
			return false
		},
		_mouseStop: function(event) {
			var dropped = false;
			if ($.ui.ddmanager && !this.options.dropBehaviour) dropped = $.ui.ddmanager.drop(this, event);
			if (this.dropped) {
				dropped = this.dropped;
				this.dropped = false
			}
			var element = this.element[0],
				elementInDom = false;
			while (element && (element = element.parentNode)) {
				if (element == document) {
					elementInDom = true
				}
			}
			if (!elementInDom && this.options.helper === "original") return false;
			if ((this.options.revert == "invalid" && !dropped) || (this.options.revert == "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) {
				var that = this;
				$(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
					if (that._trigger("stop", event) !== false) {
						that._clear()
					}
				})
			} else {
				if (this._trigger("stop", event) !== false) {
					this._clear()
				}
			}
			return false
		},
		_mouseUp: function(event) {
			$("div.ui-draggable-iframeFix").each(function() {
				this.parentNode.removeChild(this)
			});
			if ($.ui.ddmanager) $.ui.ddmanager.dragStop(this, event);
			return $.ui.mouse.prototype._mouseUp.call(this, event)
		},
		cancel: function() {
			if (this.helper.is(".ui-draggable-dragging")) {
				this._mouseUp({})
			} else {
				this._clear()
			}
			return this
		},
		_getHandle: function(event) {
			var handle = !this.options.handle || !$(this.options.handle, this.element).length ? true : false;
			$(this.options.handle, this.element).find("*").andSelf().each(function() {
				if (this == event.target) handle = true
			});
			return handle
		},
		_createHelper: function(event) {
			var o = this.options;
			var helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event])) : (o.helper == 'clone' ? this.element.clone().removeAttr('id') : this.element);
			if (!helper.parents('body').length) helper.appendTo((o.appendTo == 'parent' ? this.element[0].parentNode : o.appendTo));
			if (helper[0] != this.element[0] && !(/(fixed|absolute)/).test(helper.css("position"))) helper.css("position", "absolute");
			return helper
		},
		_adjustOffsetFromHelper: function(obj) {
			if (typeof obj == 'string') {
				obj = obj.split(' ')
			}
			if ($.isArray(obj)) {
				obj = {
					left: +obj[0],
					top: +obj[1] || 0
				}
			}
			if ('left' in obj) {
				this.offset.click.left = obj.left + this.margins.left
			}
			if ('right' in obj) {
				this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left
			}
			if ('top' in obj) {
				this.offset.click.top = obj.top + this.margins.top
			}
			if ('bottom' in obj) {
				this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top
			}
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var po = this.offsetParent.offset();
			if (this.cssPosition == 'absolute' && this.scrollParent[0] != document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
				po.left += this.scrollParent.scrollLeft();
				//po.top += this.scrollParent.scrollTop();
                po.top += 0;
			}
			if ((this.offsetParent[0] == document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == 'html' && $.ui.ie)) po = {
				top: 0,
				left: 0
			};
			return {
				top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if (this.cssPosition == "relative") {
				var p = this.element.position();
				return {
					top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			} else {
				return {
					top: 0,
					left: 0
				}
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: (parseInt(this.element.css("marginLeft"), 10) || 0),
				top: (parseInt(this.element.css("marginTop"), 10) || 0),
				right: (parseInt(this.element.css("marginRight"), 10) || 0),
				bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var o = this.options;
			if (o.containment == 'parent') o.containment = this.helper[0].parentNode;
			if (o.containment == 'document' || o.containment == 'window') this.containment = [o.containment == 'document' ? 0 : $(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, o.containment == 'document' ? 0 : $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (o.containment == 'document' ? 0 : $(window).scrollLeft()) + $(o.containment == 'document' ? document : window).width() - this.helperProportions.width - this.margins.left, (o.containment == 'document' ? 0 : $(window).scrollTop()) + ($(o.containment == 'document' ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
			if (!(/^(document|window|parent)$/).test(o.containment) && o.containment.constructor != Array) {
				var c = $(o.containment);
				var ce = c[0];
				if (!ce) return;
				var co = c.offset();
				var over = ($(ce).css("overflow") != 'hidden');
				this.containment = [(parseInt($(ce).css("borderLeftWidth"), 10) || 0) + (parseInt($(ce).css("paddingLeft"), 10) || 0), (parseInt($(ce).css("borderTopWidth"), 10) || 0) + (parseInt($(ce).css("paddingTop"), 10) || 0), (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"), 10) || 0) - (parseInt($(ce).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"), 10) || 0) - (parseInt($(ce).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
				this.relative_container = c
			} else if (o.containment.constructor == Array) {
				this.containment = o.containment
			}
		},
		_convertPositionTo: function(d, pos) {
			if (!pos) pos = this.position;
			var mod = d == "absolute" ? 1 : -1;
			var o = this.options,
				scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != document && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);
			return {
				top: (pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - ((this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : (scrollIsRootNode ? 0 : scroll.scrollTop())) * mod)),
				left: (pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - ((this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft()) * mod))
			}
		},
		_generatePosition: function(event) {
			var o = this.options,
				scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != document && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);
			var pageX = event.pageX;
			var pageY = event.pageY;
			if (this.originalPosition) {
				var containment;
				if (this.containment) {
					if (this.relative_container) {
						var co = this.relative_container.offset();
						containment = [this.containment[0] + co.left, this.containment[1] + co.top, this.containment[2] + co.left, this.containment[3] + co.top]
					} else {
						containment = this.containment
					}
					if (event.pageX - this.offset.click.left < containment[0]) pageX = containment[0] + this.offset.click.left;
					if (event.pageY - this.offset.click.top < containment[1]) pageY = containment[1] + this.offset.click.top;
					if (event.pageX - this.offset.click.left > containment[2]) pageX = containment[2] + this.offset.click.left;
					if (event.pageY - this.offset.click.top > containment[3]) pageY = containment[3] + this.offset.click.top
				}
				if (o.grid) {
					var top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
					pageY = containment ? (!(top - this.offset.click.top < containment[1] || top - this.offset.click.top > containment[3]) ? top : (!(top - this.offset.click.top < containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;
					var left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
					pageX = containment ? (!(left - this.offset.click.left < containment[0] || left - this.offset.click.left > containment[2]) ? left : (!(left - this.offset.click.left < containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left
				}
			}
			return {
				top: (pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : (scrollIsRootNode ? 0 : scroll.scrollTop())))),
				left: (pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft())))
			}
		},
		_clear: function() {
			this.helper.removeClass("ui-draggable-dragging");
			if (this.helper[0] != this.element[0] && !this.cancelHelperRemoval) this.helper.remove();
			this.helper = null;
			this.cancelHelperRemoval = false
		},
		_trigger: function(type, event, ui) {
			ui = ui || this._uiHash();
			$.ui.plugin.call(this, type, [event, ui]);
			if (type == "drag") this.positionAbs = this._convertPositionTo("absolute");
			return $.Widget.prototype._trigger.call(this, type, event, ui)
		},
		plugins: {},
		_uiHash: function(event) {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	});
	$.ui.plugin.add("draggable", "connectToSortable", {
		start: function(event, ui) {
			var inst = $(this).data("draggable"),
				o = inst.options,
				uiSortable = $.extend({}, ui, {
					item: inst.element
				});
			inst.sortables = [];
			$(o.connectToSortable).each(function() {
				var sortable = $.data(this, 'sortable');
				if (sortable && !sortable.options.disabled) {
					inst.sortables.push({
						instance: sortable,
						shouldRevert: sortable.options.revert
					});
					sortable.refreshPositions();
					sortable._trigger("activate", event, uiSortable)
				}
			})
		},
		stop: function(event, ui) {
			var inst = $(this).data("draggable"),
				uiSortable = $.extend({}, ui, {
					item: inst.element
				});
			$.each(inst.sortables, function() {
				if (this.instance.isOver) {
					this.instance.isOver = 0;
					inst.cancelHelperRemoval = true;
					this.instance.cancelHelperRemoval = false;
					if (this.shouldRevert) this.instance.options.revert = true;
					this.instance._mouseStop(event);
					this.instance.options.helper = this.instance.options._helper;
					if (inst.options.helper == 'original') this.instance.currentItem.css({
						top: 'auto',
						left: 'auto'
					})
				} else {
					this.instance.cancelHelperRemoval = false;
					this.instance._trigger("deactivate", event, uiSortable)
				}
			})
		},
		drag: function(event, ui) {
			var inst = $(this).data("draggable"),
				that = this;
			var checkPos = function(o) {
					var dyClick = this.offset.click.top,
						dxClick = this.offset.click.left;
					var helperTop = this.positionAbs.top,
						helperLeft = this.positionAbs.left;
					var itemHeight = o.height,
						itemWidth = o.width;
					var itemTop = o.top,
						itemLeft = o.left;
					return $.ui.isOver(helperTop + dyClick, helperLeft + dxClick, itemTop, itemLeft, itemHeight, itemWidth)
				};
			$.each(inst.sortables, function(i) {
				var innermostIntersecting = false;
				var thisSortable = this;
				this.instance.positionAbs = inst.positionAbs;
				this.instance.helperProportions = inst.helperProportions;
				this.instance.offset.click = inst.offset.click;
				if (this.instance._intersectsWith(this.instance.containerCache)) {
					innermostIntersecting = true;
					$.each(inst.sortables, function() {
						this.instance.positionAbs = inst.positionAbs;
						this.instance.helperProportions = inst.helperProportions;
						this.instance.offset.click = inst.offset.click;
						if (this != thisSortable && this.instance._intersectsWith(this.instance.containerCache) && $.ui.contains(thisSortable.instance.element[0], this.instance.element[0])) innermostIntersecting = false;
						return innermostIntersecting
					})
				}
				if (innermostIntersecting) {
					if (!this.instance.isOver) {
						this.instance.isOver = 1;
						this.instance.currentItem = $(that).clone().removeAttr('id').appendTo(this.instance.element).data("sortable-item", true);
						this.instance.options._helper = this.instance.options.helper;
						this.instance.options.helper = function() {
							return ui.helper[0]
						};
						event.target = this.instance.currentItem[0];
						this.instance._mouseCapture(event, true);
						this.instance._mouseStart(event, true, true);
						this.instance.offset.click.top = inst.offset.click.top;
						this.instance.offset.click.left = inst.offset.click.left;
						this.instance.offset.parent.left -= inst.offset.parent.left - this.instance.offset.parent.left;
						this.instance.offset.parent.top -= inst.offset.parent.top - this.instance.offset.parent.top;
						inst._trigger("toSortable", event);
						inst.dropped = this.instance.element;
						inst.currentItem = inst.element;
						this.instance.fromOutside = inst
					}
					if (this.instance.currentItem) this.instance._mouseDrag(event)
				} else {
					if (this.instance.isOver) {
						this.instance.isOver = 0;
						this.instance.cancelHelperRemoval = true;
						this.instance.options.revert = false;
						this.instance._trigger('out', event, this.instance._uiHash(this.instance));
						this.instance._mouseStop(event, true);
						this.instance.options.helper = this.instance.options._helper;
						this.instance.currentItem.remove();
						if (this.instance.placeholder) this.instance.placeholder.remove();
						inst._trigger("fromSortable", event);
						inst.dropped = false
					}
				}
			})
		}
	});
	$.ui.plugin.add("draggable", "cursor", {
		start: function(event, ui) {
			var t = $('body'),
				o = $(this).data('draggable').options;
			if (t.css("cursor")) o._cursor = t.css("cursor");
			t.css("cursor", o.cursor)
		},
		stop: function(event, ui) {
			var o = $(this).data('draggable').options;
			if (o._cursor) $('body').css("cursor", o._cursor)
		}
	});
	$.ui.plugin.add("draggable", "opacity", {
		start: function(event, ui) {
			var t = $(ui.helper),
				o = $(this).data('draggable').options;
			if (t.css("opacity")) o._opacity = t.css("opacity");
			t.css('opacity', o.opacity)
		},
		stop: function(event, ui) {
			var o = $(this).data('draggable').options;
			if (o._opacity) $(ui.helper).css('opacity', o._opacity)
		}
	});
	$.ui.plugin.add("draggable", "scroll", {
		start: function(event, ui) {
			var i = $(this).data("draggable");
			if (i.scrollParent[0] != document && i.scrollParent[0].tagName != 'HTML') i.overflowOffset = i.scrollParent.offset()
		},
		drag: function(event, ui) {
			var i = $(this).data("draggable"),
				o = i.options,
				scrolled = false;
			if (i.scrollParent[0] != document && i.scrollParent[0].tagName != 'HTML') {
				if (!o.axis || o.axis != 'x') {
					if ((i.overflowOffset.top + i.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop + o.scrollSpeed;
					else if (event.pageY - i.overflowOffset.top < o.scrollSensitivity) i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop - o.scrollSpeed
				}
				if (!o.axis || o.axis != 'y') {
					if ((i.overflowOffset.left + i.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft + o.scrollSpeed;
					else if (event.pageX - i.overflowOffset.left < o.scrollSensitivity) i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft - o.scrollSpeed
				}
			} else {
				if (!o.axis || o.axis != 'x') {
					if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
					else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed)
				}
				if (!o.axis || o.axis != 'y') {
					if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
					else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed)
				}
			}
			if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) $.ui.ddmanager.prepareOffsets(i, event)
		}
	});
	$.ui.plugin.add("draggable", "snap", {
		start: function(event, ui) {
			var i = $(this).data("draggable"),
				o = i.options;
			i.snapElements = [];
			$(o.snap.constructor != String ? (o.snap.items || ':data(draggable)') : o.snap).each(function() {
				var $t = $(this);
				var $o = $t.offset();
				if (this != i.element[0]) i.snapElements.push({
					item: this,
					width: $t.outerWidth(),
					height: $t.outerHeight(),
					top: $o.top,
					left: $o.left
				})
			})
		},
		drag: function(event, ui) {
			var inst = $(this).data("draggable"),
				o = inst.options;
			var d = o.snapTolerance;
			var x1 = ui.offset.left,
				x2 = x1 + inst.helperProportions.width,
				y1 = ui.offset.top,
				y2 = y1 + inst.helperProportions.height;
			for (var i = inst.snapElements.length - 1; i >= 0; i--) {
				var l = inst.snapElements[i].left,
					r = l + inst.snapElements[i].width,
					t = inst.snapElements[i].top,
					b = t + inst.snapElements[i].height;
				if (!((l - d < x1 && x1 < r + d && t - d < y1 && y1 < b + d) || (l - d < x1 && x1 < r + d && t - d < y2 && y2 < b + d) || (l - d < x2 && x2 < r + d && t - d < y1 && y1 < b + d) || (l - d < x2 && x2 < r + d && t - d < y2 && y2 < b + d))) {
					if (inst.snapElements[i].snapping)(inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), {
						snapItem: inst.snapElements[i].item
					})));
					inst.snapElements[i].snapping = false;
					continue
				}
				if (o.snapMode != 'inner') {
					var ts = Math.abs(t - y2) <= d;
					var bs = Math.abs(b - y1) <= d;
					var ls = Math.abs(l - x2) <= d;
					var rs = Math.abs(r - x1) <= d;
					if (ts) ui.position.top = inst._convertPositionTo("relative", {
						top: t - inst.helperProportions.height,
						left: 0
					}).top - inst.margins.top;
					if (bs) ui.position.top = inst._convertPositionTo("relative", {
						top: b,
						left: 0
					}).top - inst.margins.top;
					if (ls) ui.position.left = inst._convertPositionTo("relative", {
						top: 0,
						left: l - inst.helperProportions.width
					}).left - inst.margins.left;
					if (rs) ui.position.left = inst._convertPositionTo("relative", {
						top: 0,
						left: r
					}).left - inst.margins.left
				}
				var first = (ts || bs || ls || rs);
				if (o.snapMode != 'outer') {
					var ts = Math.abs(t - y1) <= d;
					var bs = Math.abs(b - y2) <= d;
					var ls = Math.abs(l - x1) <= d;
					var rs = Math.abs(r - x2) <= d;
					if (ts) ui.position.top = inst._convertPositionTo("relative", {
						top: t,
						left: 0
					}).top - inst.margins.top;
					if (bs) ui.position.top = inst._convertPositionTo("relative", {
						top: b - inst.helperProportions.height,
						left: 0
					}).top - inst.margins.top;
					if (ls) ui.position.left = inst._convertPositionTo("relative", {
						top: 0,
						left: l
					}).left - inst.margins.left;
					if (rs) ui.position.left = inst._convertPositionTo("relative", {
						top: 0,
						left: r - inst.helperProportions.width
					}).left - inst.margins.left
				}
				if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first))(inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), {
					snapItem: inst.snapElements[i].item
				})));
				inst.snapElements[i].snapping = (ts || bs || ls || rs || first)
			}
		}
	});
	$.ui.plugin.add("draggable", "stack", {
		start: function(event, ui) {
			var o = $(this).data("draggable").options;
			var group = $.makeArray($(o.stack)).sort(function(a, b) {
				return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0)
			});
			if (!group.length) {
				return
			}
			var min = parseInt(group[0].style.zIndex) || 0;
			$(group).each(function(i) {
				this.style.zIndex = min + i
			});
			this[0].style.zIndex = min + group.length
		}
	});
	$.ui.plugin.add("draggable", "zIndex", {
		start: function(event, ui) {
			var t = $(ui.helper),
				o = $(this).data("draggable").options;
			if (t.css("zIndex")) o._zIndex = t.css("zIndex");
			t.css('zIndex', o.zIndex)
		},
		stop: function(event, ui) {
			var o = $(this).data("draggable").options;
			if (o._zIndex) $(ui.helper).css('zIndex', o._zIndex)
		}
	})
})(jQuery);

/**
 * jquery.ui.slider
 * 1.9.1
 * */
(function( $, undefined ) {

// number of pages in a slider
// (how many times can you page up/down to go through the whole range)
var numPages = 5;

$.widget( "ui.slider", $.ui.mouse, {

	widgetEventPrefix: "slide",

	options: {
		animate: false,
		distance: 0,
		max: 100,
		min: 0,
		orientation: "horizontal",
		range: false,
		step: 1,
		value: 0,
		values: null
	},

	_create: function() {
		var self = this,
			o = this.options,
			existingHandles = this.element.find( ".ui-slider-handle" ).addClass( "ui-state-default ui-corner-all" ),
			handle = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
			handleCount = ( o.values && o.values.length ) || 1,
			handles = [];

		this._keySliding = false;
		this._mouseSliding = false;
		this._animateOff = true;
		this._handleIndex = null;
		this._detectOrientation();
		this._mouseInit();

		this.element
			.addClass( "ui-slider" +
				" ui-slider-" + this.orientation +
				" ui-widget" +
				" ui-widget-content" +
				" ui-corner-all" +
				( o.disabled ? " ui-slider-disabled ui-disabled" : "" ) );

		this.range = $([]);

		if ( o.range ) {
			if ( o.range === true ) {
				if ( !o.values ) {
					o.values = [ this._valueMin(), this._valueMin() ];
				}
				if ( o.values.length && o.values.length !== 2 ) {
					o.values = [ o.values[0], o.values[0] ];
				}
			}

			this.range = $( "<div></div>" )
				.appendTo( this.element )
				.addClass( "ui-slider-range" +
				// note: this isn't the most fittingly semantic framework class for this element,
				// but worked best visually with a variety of themes
				" ui-widget-header" + 
				( ( o.range === "min" || o.range === "max" ) ? " ui-slider-range-" + o.range : "" ) );
		}

		for ( var i = existingHandles.length; i < handleCount; i += 1 ) {
			handles.push( handle );
		}

		this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( self.element ) );

		this.handle = this.handles.eq( 0 );

		this.handles.add( this.range ).filter( "a" )
			.click(function( event ) {
				event.preventDefault();
			})
			.hover(function() {
				if ( !o.disabled ) {
					$( this ).addClass( "ui-state-hover" );
				}
			}, function() {
				$( this ).removeClass( "ui-state-hover" );
			})
			.focus(function() {
				if ( !o.disabled ) {
					$( ".ui-slider .ui-state-focus" ).removeClass( "ui-state-focus" );
					$( this ).addClass( "ui-state-focus" );
				} else {
					$( this ).blur();
				}
			})
			.blur(function() {
				$( this ).removeClass( "ui-state-focus" );
			});

		this.handles.each(function( i ) {
			$( this ).data( "index.ui-slider-handle", i );
		});

		this.handles
			.keydown(function( event ) {
				var index = $( this ).data( "index.ui-slider-handle" ),
					allowed,
					curVal,
					newVal,
					step;
	
				if ( self.options.disabled ) {
					return;
				}
	
				switch ( event.keyCode ) {
					case $.ui.keyCode.HOME:
					case $.ui.keyCode.END:
					case $.ui.keyCode.PAGE_UP:
					case $.ui.keyCode.PAGE_DOWN:
					case $.ui.keyCode.UP:
					case $.ui.keyCode.RIGHT:
					case $.ui.keyCode.DOWN:
					case $.ui.keyCode.LEFT:
						event.preventDefault();
						if ( !self._keySliding ) {
							self._keySliding = true;
							$( this ).addClass( "ui-state-active" );
							allowed = self._start( event, index );
							if ( allowed === false ) {
								return;
							}
						}
						break;
				}
	
				step = self.options.step;
				if ( self.options.values && self.options.values.length ) {
					curVal = newVal = self.values( index );
				} else {
					curVal = newVal = self.value();
				}
	
				switch ( event.keyCode ) {
					case $.ui.keyCode.HOME:
						newVal = self._valueMin();
						break;
					case $.ui.keyCode.END:
						newVal = self._valueMax();
						break;
					case $.ui.keyCode.PAGE_UP:
						newVal = self._trimAlignValue( curVal + ( (self._valueMax() - self._valueMin()) / numPages ) );
						break;
					case $.ui.keyCode.PAGE_DOWN:
						newVal = self._trimAlignValue( curVal - ( (self._valueMax() - self._valueMin()) / numPages ) );
						break;
					case $.ui.keyCode.UP:
					case $.ui.keyCode.RIGHT:
						if ( curVal === self._valueMax() ) {
							return;
						}
						newVal = self._trimAlignValue( curVal + step );
						break;
					case $.ui.keyCode.DOWN:
					case $.ui.keyCode.LEFT:
						if ( curVal === self._valueMin() ) {
							return;
						}
						newVal = self._trimAlignValue( curVal - step );
						break;
				}
	
				self._slide( event, index, newVal );
			})
			.keyup(function( event ) {
				var index = $( this ).data( "index.ui-slider-handle" );
	
				if ( self._keySliding ) {
					self._keySliding = false;
					self._stop( event, index );
					self._change( event, index );
					$( this ).removeClass( "ui-state-active" );
				}
	
			});

		this._refreshValue();

		this._animateOff = false;
	},

	destroy: function() {
		this.handles.remove();
		this.range.remove();

		this.element
			.removeClass( "ui-slider" +
				" ui-slider-horizontal" +
				" ui-slider-vertical" +
				" ui-slider-disabled" +
				" ui-widget" +
				" ui-widget-content" +
				" ui-corner-all" )
			.removeData( "slider" )
			.unbind( ".slider" );

		this._mouseDestroy();

		return this;
	},

	_mouseCapture: function( event ) {
		var o = this.options,
			position,
			normValue,
			distance,
			closestHandle,
			self,
			index,
			allowed,
			offset,
			mouseOverHandle;

		if ( o.disabled ) {
			return false;
		}

		this.elementSize = {
			width: this.element.outerWidth(),
			height: this.element.outerHeight()
		};
		this.elementOffset = this.element.offset();

		position = { x: event.pageX, y: event.pageY };
		normValue = this._normValueFromMouse( position );
		distance = this._valueMax() - this._valueMin() + 1;
		self = this;
		this.handles.each(function( i ) {
			var thisDistance = Math.abs( normValue - self.values(i) );
			if ( distance > thisDistance ) {
				distance = thisDistance;
				closestHandle = $( this );
				index = i;
			}
		});

		// workaround for bug #3736 (if both handles of a range are at 0,
		// the first is always used as the one with least distance,
		// and moving it is obviously prevented by preventing negative ranges)
		if( o.range === true && this.values(1) === o.min ) {
			index += 1;
			closestHandle = $( this.handles[index] );
		}

		allowed = this._start( event, index );
		if ( allowed === false ) {
			return false;
		}
		this._mouseSliding = true;

		self._handleIndex = index;

		closestHandle
			.addClass( "ui-state-active" )
			.focus();
		
		offset = closestHandle.offset();
		mouseOverHandle = !$( event.target ).parents().andSelf().is( ".ui-slider-handle" );
		this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
			// left 不用除以 元素的宽度 
			left: event.pageX - offset.left,
			top: event.pageY - offset.top -
				( closestHandle.height() / 2 ) -
				( parseInt( closestHandle.css("borderTopWidth"), 10 ) || 0 ) -
				( parseInt( closestHandle.css("borderBottomWidth"), 10 ) || 0) +
				( parseInt( closestHandle.css("marginTop"), 10 ) || 0)
		};
		//console.log(this._clickOffset,"什么时候显示的位置",event.pageX,offset.left)
		if ( !this.handles.hasClass( "ui-state-hover" ) ) {
			this._slide( event, index, normValue );
		}
		this._animateOff = true;
		return true;
	},

	_mouseStart: function( event ) {
		return true;
	},

	_mouseDrag: function( event ) {
		var position = { x: event.pageX, y: event.pageY },
			normValue = this._normValueFromMouse( position );
		this._slide( event, this._handleIndex, normValue );

		return false;
	},

	_mouseStop: function( event ) {
		this.handles.removeClass( "ui-state-active" );
		this._mouseSliding = false;

		this._stop( event, this._handleIndex );
		this._change( event, this._handleIndex );

		this._handleIndex = null;
		this._clickOffset = null;
		this._animateOff = false;

		return false;
	},
	
	_detectOrientation: function() {
		this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
	},

	_normValueFromMouse: function( position ) {
		var pixelTotal,
			pixelMouse,
			percentMouse,
			valueTotal,
			valueMouse;

		if ( this.orientation === "horizontal" ) {
			pixelTotal = this.elementSize.width;
			pixelMouse = position.x - this.elementOffset.left - ( this._clickOffset ? this._clickOffset.left : 0 );
		} else {
			pixelTotal = this.elementSize.height;
			pixelMouse = position.y - this.elementOffset.top - ( this._clickOffset ? this._clickOffset.top : 0 );
		}

		percentMouse = ( pixelMouse / pixelTotal );
		if ( percentMouse > 1 ) {
			percentMouse = 1;
		}
		if ( percentMouse < 0 ) {
			percentMouse = 0;
		}
		if ( this.orientation === "vertical" ) {
			percentMouse = 1 - percentMouse;
		}

		valueTotal = this._valueMax() - this._valueMin();
		valueMouse = this._valueMin() + percentMouse * valueTotal;

		return this._trimAlignValue( valueMouse );
	},

	_start: function( event, index ) {
		var uiHash = {
			handle: this.handles[ index ],
			value: this.value()
		};
		if ( this.options.values && this.options.values.length ) {
			uiHash.value = this.values( index );
			uiHash.values = this.values();
		}
		return this._trigger( "start", event, uiHash );
	},

	_slide: function( event, index, newVal ) {
		var otherVal,
			newValues,
			allowed;

		if ( this.options.values && this.options.values.length ) {
			otherVal = this.values( index ? 0 : 1 );

			if ( ( this.options.values.length === 2 && this.options.range === true ) && 
					( ( index === 0 && newVal > otherVal) || ( index === 1 && newVal < otherVal ) )
				) {
				newVal = otherVal;
			}

			if ( newVal !== this.values( index ) ) {
				newValues = this.values();
				newValues[ index ] = newVal;
				// A slide can be canceled by returning false from the slide callback
				allowed = this._trigger( "slide", event, {
					handle: this.handles[ index ],
					value: newVal,
					values: newValues
				} );
				otherVal = this.values( index ? 0 : 1 );
				if ( allowed !== false ) {
					this.values( index, newVal, true );
				}
			}
		} else {
			if ( newVal !== this.value() ) {
				// A slide can be canceled by returning false from the slide callback
				allowed = this._trigger( "slide", event, {
					handle: this.handles[ index ],
					value: newVal
				} );
				if ( allowed !== false ) {
					this.value( newVal );
				}
			}
		}
	},

	_stop: function( event, index ) {
		var uiHash = {
			handle: this.handles[ index ],
			value: this.value()
		};
		if ( this.options.values && this.options.values.length ) {
			uiHash.value = this.values( index );
			uiHash.values = this.values();
		}

		this._trigger( "stop", event, uiHash );
	},

	_change: function( event, index ) {
		if ( !this._keySliding && !this._mouseSliding ) {
			var uiHash = {
				handle: this.handles[ index ],
				value: this.value()
			};
			if ( this.options.values && this.options.values.length ) {
				uiHash.value = this.values( index );
				uiHash.values = this.values();
			}

			this._trigger( "change", event, uiHash );
		}
	},

	value: function( newValue ) {
		if ( arguments.length ) {
			this.options.value = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, 0 );
			return;
		}

		return this._value();
	},

	values: function( index, newValue ) {
		var vals,
			newValues,
			i;

		if ( arguments.length > 1 ) {
			this.options.values[ index ] = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, index );
			return;
		}

		if ( arguments.length ) {
			if ( $.isArray( arguments[ 0 ] ) ) {
				vals = this.options.values;
				newValues = arguments[ 0 ];
				for ( i = 0; i < vals.length; i += 1 ) {
					vals[ i ] = this._trimAlignValue( newValues[ i ] );
					this._change( null, i );
				}
				this._refreshValue();
			} else {
				if ( this.options.values && this.options.values.length ) {
					return this._values( index );
				} else {
					return this.value();
				}
			}
		} else {
			return this._values();
		}
	},

	_setOption: function( key, value ) {
		var i,
			valsLength = 0;

		if ( $.isArray( this.options.values ) ) {
			valsLength = this.options.values.length;
		}

		$.Widget.prototype._setOption.apply( this, arguments );

		switch ( key ) {
			case "disabled":
				if ( value ) {
					this.handles.filter( ".ui-state-focus" ).blur();
					this.handles.removeClass( "ui-state-hover" );
					this.handles.propAttr( "disabled", true );
					this.element.addClass( "ui-disabled" );
				} else {
					this.handles.propAttr( "disabled", false );
					this.element.removeClass( "ui-disabled" );
				}
				break;
			case "orientation":
				this._detectOrientation();
				this.element
					.removeClass( "ui-slider-horizontal ui-slider-vertical" )
					.addClass( "ui-slider-" + this.orientation );
				this._refreshValue();
				break;
			case "value":
				this._animateOff = true;
				this._refreshValue();
				this._change( null, 0 );
				this._animateOff = false;
				break;
			case "values":
				this._animateOff = true;
				this._refreshValue();
				for ( i = 0; i < valsLength; i += 1 ) {
					this._change( null, i );
				}
				this._animateOff = false;
				break;
		}
	},

	//internal value getter
	// _value() returns value trimmed by min and max, aligned by step
	_value: function() {
		var val = this.options.value;
		val = this._trimAlignValue( val );

		return val;
	},

	//internal values getter
	// _values() returns array of values trimmed by min and max, aligned by step
	// _values( index ) returns single value trimmed by min and max, aligned by step
	_values: function( index ) {
		var val,
			vals,
			i;

		if ( arguments.length ) {
			val = this.options.values[ index ];
			val = this._trimAlignValue( val );

			return val;
		} else {
			// .slice() creates a copy of the array
			// this copy gets trimmed by min and max and then returned
			vals = this.options.values.slice();
			for ( i = 0; i < vals.length; i+= 1) {
				vals[ i ] = this._trimAlignValue( vals[ i ] );
			}

			return vals;
		}
	},
	
	// returns the step-aligned value that val is closest to, between (inclusive) min and max
	_trimAlignValue: function( val ) {
		if ( val <= this._valueMin() ) {
			return this._valueMin();
		}
		if ( val >= this._valueMax() ) {
			return this._valueMax();
		}
		var step = ( this.options.step > 0 ) ? this.options.step : 1,
			valModStep = (val - this._valueMin()) % step,
			alignValue = val - valModStep;

		if ( Math.abs(valModStep) * 2 >= step ) {
			alignValue += ( valModStep > 0 ) ? step : ( -step );
		}

		// Since JavaScript has problems with large floats, round
		// the final value to 5 digits after the decimal point (see #4124)
		return parseFloat( alignValue.toFixed(5) );
	},

	_valueMin: function() {
		return this.options.min;
	},

	_valueMax: function() {
		return this.options.max;
	},
	
	_refreshValue: function() {
		var oRange = this.options.range,
			o = this.options,
			self = this,
			animate = ( !this._animateOff ) ? o.animate : false,
			valPercent,
			_set = {},
			lastValPercent,
			value,
			valueMin,
			valueMax;

		if ( this.options.values && this.options.values.length ) {
			this.handles.each(function( i, j ) {
				valPercent = ( self.values(i) - self._valueMin() ) / ( self._valueMax() - self._valueMin() ) * 100;
				_set[ self.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
				$( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
				if ( self.options.range === true ) {
					if ( self.orientation === "horizontal" ) {
						if ( i === 0 ) {
							self.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { left: valPercent + "%" }, o.animate );
						}
						if ( i === 1 ) {
							self.range[ animate ? "animate" : "css" ]( { width: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
						}
					} else {
						if ( i === 0 ) {
							self.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { bottom: ( valPercent ) + "%" }, o.animate );
						}
						if ( i === 1 ) {
							self.range[ animate ? "animate" : "css" ]( { height: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
						}
					}
				}
				lastValPercent = valPercent;
			});
		} else {
			value = this.value();
			valueMin = this._valueMin();
			valueMax = this._valueMax();
			valPercent = ( valueMax !== valueMin ) ?
					( value - valueMin ) / ( valueMax - valueMin ) * 100 :
					0;
			_set[ self.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
			this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

			if ( oRange === "min" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { width: valPercent + "%" }, o.animate );
			}
			if ( oRange === "max" && this.orientation === "horizontal" ) {
				this.range[ animate ? "animate" : "css" ]( { width: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
			}
			if ( oRange === "min" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { height: valPercent + "%" }, o.animate );
			}
			if ( oRange === "max" && this.orientation === "vertical" ) {
				this.range[ animate ? "animate" : "css" ]( { height: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
			}
		}
	}

});

$.extend( $.ui.slider, {
	version: "1.8.24"
});

}(jQuery));



/*!
 * jQuery UI Autocomplete @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(a, b) {
	var c = 0;
	a.widget("ui.autocomplete", {
		options: {
			appendTo: "body",
			autoFocus: false,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null
		},
		pending: 0,
		_create: function() {
			var d = this,
				f = this.element[0].ownerDocument,
				e;
			this.isMultiLine = this.element.is("textarea");
			this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").bind("keydown.autocomplete", function(g) {
				if (d.options.disabled || d.element.propAttr("readOnly")) {
					return
				}
				e = false;
				var h = a.ui.keyCode;
				switch (g.keyCode) {
				case h.PAGE_UP:
					d._move("previousPage", g);
					break;
				case h.PAGE_DOWN:
					d._move("nextPage", g);
					break;
				case h.UP:
					d._keyEvent("previous", g);
					break;
				case h.DOWN:
					d._keyEvent("next", g);
					break;
				case h.ENTER:
				case h.NUMPAD_ENTER:
					if (d.menu.active) {
						e = true;
						g.preventDefault()
					}
				case h.TAB:
					if (!d.menu.active) {
						return
					}
					d.menu.select(g);
					break;
				case h.ESCAPE:
					d.element.val(d.term);
					d.close(g);
					break;
				default:
					clearTimeout(d.searching);
					d.searching = setTimeout(function() {
						if (d.term != d.element.val()) {
							d.selectedItem = null;
							d.search(null, g)
						}
					}, d.options.delay);
					break
				}
			}).bind("keypress.autocomplete", function(g) {
				if (e) {
					e = false;
					g.preventDefault()
				}
			}).bind("focus.autocomplete", function() {
				if (d.options.disabled) {
					return
				}
				d.selectedItem = null;
				d.previous = d.element.val()
			}).bind("blur.autocomplete", function(g) {
				if (d.options.disabled) {
					return
				}
				clearTimeout(d.searching);
				d.closing = setTimeout(function() {
					d.close(g);
					d._change(g)
				}, 150)
			});
			this._initSource();
			this.menu = a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo || "body", f)[0]).mousedown(function(g) {
				var h = d.menu.element[0];
				if (!a(g.target).closest(".ui-menu-item").length) {
					setTimeout(function() {
						a(document).one("mousedown", function(i) {
							if (i.target !== d.element[0] && i.target !== h && !a.ui.contains(h, i.target)) {
								d.close()
							}
						})
					}, 1)
				}
				setTimeout(function() {
					clearTimeout(d.closing)
				}, 13)
			}).menu({
				focus: function(h, i) {
					var g = i.item.data("item.autocomplete");
					if (false !== d._trigger("focus", h, {
						item: g
					})) {
						if (/^key/.test(h.originalEvent.type)) {
							d.element.val(g.value)
						}
					}
				},
				selected: function(i, j) {
					var h = j.item.data("item.autocomplete"),
						g = d.previous;
					if (d.element[0] !== f.activeElement) {
						d.element.focus();
						d.previous = g;
						setTimeout(function() {
							d.previous = g;
							d.selectedItem = h
						}, 1)
					}
					if (false !== d._trigger("select", i, {
						item: h
					})) {
						d.element.val(h.label)
					}
					d.term = d.element.val();
					d.close(i);
					d.selectedItem = h
				},
				blur: function(g, h) {
					if (d.menu.element.is(":visible") && (d.element.val() !== d.term)) {
						d.element.val(d.term)
					}
				}
			}).zIndex(this.element.zIndex() + 1).css({
				top: 0,
				left: 0
			}).hide().data("menu");
			if (a.fn.bgiframe) {
				this.menu.element.bgiframe()
			}
			d.beforeunloadHandler = function() {
				d.element.removeAttr("autocomplete")
			};
			a(window).bind("beforeunload", d.beforeunloadHandler)
		},
		destroy: function() {
			this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
			this.menu.element.remove();
			a(window).unbind("beforeunload", this.beforeunloadHandler);
			a.Widget.prototype.destroy.call(this)
		},
		_setOption: function(d, e) {
			a.Widget.prototype._setOption.apply(this, arguments);
			if (d === "source") {
				this._initSource()
			}
			if (d === "appendTo") {
				this.menu.element.appendTo(a(e || "body", this.element[0].ownerDocument)[0])
			}
			if (d === "disabled" && e && this.xhr) {
				this.xhr.abort()
			}
		},
		_initSource: function() {
			var d = this,
				f, e;
			if (a.isArray(this.options.source)) {
				f = this.options.source;
				this.source = function(h, g) {
					g(a.ui.autocomplete.filter(f, h.term))
				}
			} else {
				if (typeof this.options.source === "string") {
					e = this.options.source;
					this.source = function(h, g) {
						if (d.xhr) {
							d.xhr.abort()
						}
						d.xhr = a.ajax({
							url: e,
							data: h,
							dataType: "json",
							success: function(j, i) {
								g(j)
							},
							error: function() {
								g([])
							}
						})
					}
				} else {
					this.source = this.options.source
				}
			}
		},
		search: function(e, d) {
			e = e != null ? e : this.element.val();
			this.term = this.element.val();
			if (e.length < this.options.minLength) {
				return this.close(d)
			}
			clearTimeout(this.closing);
			if (this._trigger("search", d) === false) {
				return
			}
			return this._search(e)
		},
		_search: function(d) {
			this.pending++;
			this.element.addClass("ui-autocomplete-loading");
			this.source({
				term: d
			}, this._response())
		},
		_response: function() {
			var e = this,
				d = ++c;
			return function(f) {
				if (d === c) {
					e.__response(f)
				}
				e.pending--;
				if (!e.pending) {
					e.element.removeClass("ui-autocomplete-loading")
				}
			}
		},
		__response: function(d) {
			if (!this.options.disabled && d && d.length) {
				d = this._normalize(d);
				this._suggest(d);
				this._trigger("open")
			} else {
				this.close()
			}
		},
		close: function(d) {
			clearTimeout(this.closing);
			if (this.menu.element.is(":visible")) {
				this.menu.element.hide();
				this.menu.deactivate();
				this._trigger("close", d)
			}
		},
		_change: function(d) {
			if (this.previous !== this.element.val()) {
				this._trigger("change", d, {
					item: this.selectedItem
				})
			}
		},
		_normalize: function(d) {
			if (d.length && d[0].label && d[0].value) {
				return d
			}
			return a.map(d, function(e) {
				if (typeof e === "string") {
					return {
						label: e,
						value: e
					}
				}
				return a.extend({
					label: e.label || e.value,
					value: e.value || e.label
				}, e)
			})
		},
		_suggest: function(d) {
			var e = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
			this._renderMenu(e, d);
			this.menu.deactivate();
			this.menu.refresh();
			e.show();
			this._resizeMenu();
			e.position(a.extend({
				of: this.element
			}, this.options.position));
			if (this.options.autoFocus) {
				this.menu.next(new a.Event("mouseover"))
			}
		},
		_resizeMenu: function() {
			var d = this.menu.element;
			d.outerWidth(Math.max(d.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function(f, e) {
			var d = this;
			a.each(e, function(g, h) {
				d._renderItem(f, h)
			})
		},
		_renderItem: function(d, e) {
			return a("<li></li>").data("item.autocomplete", e).append(a("<a></a>").text(e.label)).appendTo(d)
		},
		_move: function(e, d) {
			if (!this.menu.element.is(":visible")) {
				this.search(null, d);
				return
			}
			if (this.menu.first() && /^previous/.test(e) || this.menu.last() && /^next/.test(e)) {
				this.element.val(this.term);
				this.menu.deactivate();
				return
			}
			this.menu[e](d)
		},
		widget: function() {
			return this.menu.element
		},
		_keyEvent: function(e, d) {
			if (!this.isMultiLine || this.menu.element.is(":visible")) {
				this._move(e, d);
				d.preventDefault()
			}
		}
	});
	a.extend(a.ui.autocomplete, {
		escapeRegex: function(d) {
			return d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
		},
		filter: function(f, d) {
			var e = new RegExp(a.ui.autocomplete.escapeRegex(d), "i");
			return a.grep(f, function(g) {
				return e.test(g.label || g.value || g)
			})
		}
	})
}(jQuery));
(function(a) {
	a.widget("ui.menu", {
		_create: function() {
			var b = this;
			this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
				role: "listbox",
				"aria-activedescendant": "ui-active-menuitem"
			}).click(function(c) {
				if (!a(c.target).closest(".ui-menu-item a").length) {
					return
				}
				c.preventDefault();
				b.select(c)
			});
			this.refresh()
		},
		refresh: function() {
			var c = this;
			var b = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
			b.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(d) {
				c.activate(d, a(this).parent())
			}).mouseleave(function() {
				c.deactivate()
			})
		},
		activate: function(e, d) {
			this.deactivate();
			if (this.hasScroll()) {
				var f = d.offset().top - this.element.offset().top,
					b = this.element.scrollTop(),
					c = this.element.height();
				if (f < 0) {
					this.element.scrollTop(b + f)
				} else {
					if (f >= c) {
						this.element.scrollTop(b + f - c + d.height())
					}
				}
			}
			this.active = d.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end();
			this._trigger("focus", e, {
				item: d
			})
		},
		deactivate: function() {
			if (!this.active) {
				return
			}
			this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
			this._trigger("blur");
			this.active = null
		},
		next: function(b) {
			this.move("next", ".ui-menu-item:first", b)
		},
		previous: function(b) {
			this.move("prev", ".ui-menu-item:last", b)
		},
		first: function() {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		last: function() {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		move: function(e, d, c) {
			if (!this.active) {
				this.activate(c, this.element.children(d));
				return
			}
			var b = this.active[e + "All"](".ui-menu-item").eq(0);
			if (b.length) {
				this.activate(c, b)
			} else {
				this.activate(c, this.element.children(d))
			}
		},
		nextPage: function(d) {
			if (this.hasScroll()) {
				if (!this.active || this.last()) {
					this.activate(d, this.element.children(".ui-menu-item:first"));
					return
				}
				var e = this.active.offset().top,
					c = this.element.height(),
					b = this.element.children(".ui-menu-item").filter(function() {
						var f = a(this).offset().top - e - c + a(this).height();
						return f < 10 && f > -10
					});
				if (!b.length) {
					b = this.element.children(".ui-menu-item:last")
				}
				this.activate(d, b)
			} else {
				this.activate(d, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
			}
		},
		previousPage: function(d) {
			if (this.hasScroll()) {
				if (!this.active || this.first()) {
					this.activate(d, this.element.children(".ui-menu-item:last"));
					return
				}
				var e = this.active.offset().top,
					c = this.element.height(),
					b = this.element.children(".ui-menu-item").filter(function() {
						var f = a(this).offset().top - e + c - a(this).height();
						return f < 10 && f > -10
					});
				if (!b.length) {
					b = this.element.children(".ui-menu-item:first")
				}
				this.activate(d, b)
			} else {
				this.activate(d, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
			}
		},
		hasScroll: function() {
			return this.element.height() < this.element[a.fn.prop ? "prop" : "attr"]("scrollHeight")
		},
		select: function(b) {
			this._trigger("selected", b, {
				item: this.active
			})
		}
	})
}(jQuery));
(function(f, b) {
	var k, e, a, h, i = "ui-button ui-widget ui-state-default ui-corner-all",
		c = "ui-state-hover ui-state-active ",
		g = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
		j = function() {
			var l = f(this).find(":ui-button");
			setTimeout(function() {
				l.button("refresh")
			}, 1)
		},
		d = function(m) {
			var l = m.name,
				n = m.form,
				o = f([]);
			if (l) {
				if (n) {
					o = f(n).find("[name='" + l + "']")
				} else {
					o = f("[name='" + l + "']", m.ownerDocument).filter(function() {
						return !this.form
					})
				}
			}
			return o
		};
	f.widget("ui.button", {
		options: {
			disabled: null,
			text: true,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function() {
			this.element.closest("form").unbind("reset.button").bind("reset.button", j);
			if (typeof this.options.disabled !== "boolean") {
				this.options.disabled = !! this.element.propAttr("disabled")
			} else {
				this.element.propAttr("disabled", this.options.disabled)
			}
			this._determineButtonType();
			this.hasTitle = !! this.buttonElement.attr("title");
			var l = this,
				n = this.options,
				o = this.type === "checkbox" || this.type === "radio",
				p = "ui-state-hover" + (!o ? " ui-state-active" : ""),
				m = "ui-state-focus";
			if (n.label === null) {
				n.label = this.buttonElement.html()
			}
			this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter.button", function() {
				if (n.disabled) {
					return
				}
				f(this).addClass("ui-state-hover");
				if (this === k) {
					f(this).addClass("ui-state-active")
				}
			}).bind("mouseleave.button", function() {
				if (n.disabled) {
					return
				}
				f(this).removeClass(p)
			}).bind("click.button", function(q) {
				if (n.disabled) {
					q.preventDefault();
					q.stopImmediatePropagation()
				}
			});
			this.element.bind("focus.button", function() {
				l.buttonElement.addClass(m)
			}).bind("blur.button", function() {
				l.buttonElement.removeClass(m)
			});
			if (o) {
				this.element.bind("change.button", function() {
					if (h) {
						return
					}
					l.refresh()
				});
				this.buttonElement.bind("mousedown.button", function(q) {
					if (n.disabled) {
						return
					}
					h = false;
					e = q.pageX;
					a = q.pageY
				}).bind("mouseup.button", function(q) {
					if (n.disabled) {
						return
					}
					if (e !== q.pageX || a !== q.pageY) {
						h = true
					}
				})
			}
			if (this.type === "checkbox") {
				this.buttonElement.bind("click.button", function() {
					if (n.disabled || h) {
						return false
					}
					f(this).toggleClass("ui-state-active");
					l.buttonElement.attr("aria-pressed", l.element[0].checked)
				})
			} else {
				if (this.type === "radio") {
					this.buttonElement.bind("click.button", function() {
						if (n.disabled || h) {
							return false
						}
						f(this).addClass("ui-state-active");
						l.buttonElement.attr("aria-pressed", "true");
						var q = l.element[0];
						d(q).not(q).map(function() {
							return f(this).button("widget")[0]
						}).removeClass("ui-state-active").attr("aria-pressed", "false")
					})
				} else {
					this.buttonElement.bind("mousedown.button", function() {
						if (n.disabled) {
							return false
						}
						f(this).addClass("ui-state-active");
						k = this;
						f(document).one("mouseup", function() {
							k = null
						})
					}).bind("mouseup.button", function() {
						if (n.disabled) {
							return false
						}
						f(this).removeClass("ui-state-active")
					}).bind("keydown.button", function(q) {
						if (n.disabled) {
							return false
						}
						if (q.keyCode == f.ui.keyCode.SPACE || q.keyCode == f.ui.keyCode.ENTER) {
							f(this).addClass("ui-state-active")
						}
					}).bind("keyup.button", function() {
						f(this).removeClass("ui-state-active")
					});
					if (this.buttonElement.is("a")) {
						this.buttonElement.keyup(function(q) {
							if (q.keyCode === f.ui.keyCode.SPACE) {
								f(this).click()
							}
						})
					}
				}
			}
			this._setOption("disabled", n.disabled);
			this._resetButton()
		},
		_determineButtonType: function() {
			if (this.element.is(":checkbox")) {
				this.type = "checkbox"
			} else {
				if (this.element.is(":radio")) {
					this.type = "radio"
				} else {
					if (this.element.is("input")) {
						this.type = "input"
					} else {
						this.type = "button"
					}
				}
			}
			if (this.type === "checkbox" || this.type === "radio") {
				var l = this.element.parents().filter(":last"),
					n = "label[for='" + this.element.attr("id") + "']";
				this.buttonElement = l.find(n);
				if (!this.buttonElement.length) {
					l = l.length ? l.siblings() : this.element.siblings();
					this.buttonElement = l.filter(n);
					if (!this.buttonElement.length) {
						this.buttonElement = l.find(n)
					}
				}
				this.element.addClass("ui-helper-hidden-accessible");
				var m = this.element.is(":checked");
				if (m) {
					this.buttonElement.addClass("ui-state-active")
				}
				this.buttonElement.attr("aria-pressed", m)
			} else {
				this.buttonElement = this.element
			}
		},
		widget: function() {
			return this.buttonElement
		},
		destroy: function() {
			this.element.removeClass("ui-helper-hidden-accessible");
			this.buttonElement.removeClass(i + " " + c + " " + g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
			if (!this.hasTitle) {
				this.buttonElement.removeAttr("title")
			}
			f.Widget.prototype.destroy.call(this)
		},
		_setOption: function(l, m) {
			f.Widget.prototype._setOption.apply(this, arguments);
			if (l === "disabled") {
				if (m) {
					this.element.propAttr("disabled", true)
				} else {
					this.element.propAttr("disabled", false)
				}
				return
			}
			this._resetButton()
		},
		refresh: function() {
			var l = this.element.is(":disabled");
			if (l !== this.options.disabled) {
				this._setOption("disabled", l)
			}
			if (this.type === "radio") {
				d(this.element[0]).each(function() {
					if (f(this).is(":checked")) {
						f(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true")
					} else {
						f(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
					}
				})
			} else {
				if (this.type === "checkbox") {
					if (this.element.is(":checked")) {
						this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true")
					} else {
						this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
					}
				}
			}
		},
		_resetButton: function() {
			if (this.type === "input") {
				if (this.options.label) {
					this.element.val(this.options.label)
				}
				return
			}
			var p = this.buttonElement.removeClass(g),
				n = f("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(p.empty()).text(),
				m = this.options.icons,
				l = m.primary && m.secondary,
				o = [];
			if (m.primary || m.secondary) {
				if (this.options.text) {
					o.push("ui-button-text-icon" + (l ? "s" : (m.primary ? "-primary" : "-secondary")))
				}
				if (m.primary) {
					p.prepend("<span class='ui-button-icon-primary ui-icon " + m.primary + "'></span>")
				}
				if (m.secondary) {
					p.append("<span class='ui-button-icon-secondary ui-icon " + m.secondary + "'></span>")
				}
				if (!this.options.text) {
					o.push(l ? "ui-button-icons-only" : "ui-button-icon-only");
					if (!this.hasTitle) {
						p.attr("title", n)
					}
				}
			} else {
				o.push("ui-button-text-only")
			}
			p.addClass(o.join(" "))
		}
	});
	f.widget("ui.buttonset", {
		options: {
			items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
		},
		_create: function() {
			this.element.addClass("ui-buttonset")
		},
		_init: function() {
			this.refresh()
		},
		_setOption: function(l, m) {
			if (l === "disabled") {
				this.buttons.button("option", l, m)
			}
			f.Widget.prototype._setOption.apply(this, arguments)
		},
		refresh: function() {
			var l = this.element.css("direction") === "rtl";
			this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
				return f(this).button("widget")[0]
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(l ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(l ? "ui-corner-left" : "ui-corner-right").end().end()
		},
		destroy: function() {
			this.element.removeClass("ui-buttonset");
			this.buttons.map(function() {
				return f(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
			f.Widget.prototype.destroy.call(this)
		}
	})
}(jQuery));

(function(g, h) {
	g.ui = g.ui || {};
	var d = /left|center|right/,
		e = /top|center|bottom/,
		a = "center",
		f = {},
		b = g.fn.position,
		c = g.fn.offset;
	g.fn.position = function(j) {
		if (!j || !j.of) {
			return b.apply(this, arguments)
		}
		j = g.extend({}, j);
		var n = g(j.of),
			m = n[0],
			p = (j.collision || "flip").split(" "),
			o = j.offset ? j.offset.split(" ") : [0, 0],
			l, i, k;
		if (m.nodeType === 9) {
			l = n.width();
			i = n.height();
			k = {
				top: 0,
				left: 0
			}
		} else {
			if (m.setTimeout) {
				l = n.width();
				i = n.height();
				k = {
					top: n.scrollTop(),
					left: n.scrollLeft()
				}
			} else {
				if (m.preventDefault) {
					j.at = "left top";
					l = i = 0;
					k = {
						top: j.of.pageY,
						left: j.of.pageX
					}
				} else {
					l = n.outerWidth();
					i = n.outerHeight();
					k = n.offset()
				}
			}
		}
		g.each(["my", "at"], function() {
			var q = (j[this] || "").split(" ");
			if (q.length === 1) {
				q = d.test(q[0]) ? q.concat([a]) : e.test(q[0]) ? [a].concat(q) : [a, a]
			}
			q[0] = d.test(q[0]) ? q[0] : a;
			q[1] = e.test(q[1]) ? q[1] : a;
			j[this] = q
		});
		if (p.length === 1) {
			p[1] = p[0]
		}
		o[0] = parseInt(o[0], 10) || 0;
		if (o.length === 1) {
			o[1] = o[0]
		}
		o[1] = parseInt(o[1], 10) || 0;
		if (j.at[0] === "right") {
			k.left += l
		} else {
			if (j.at[0] === a) {
				k.left += l / 2
			}
		}
		if (j.at[1] === "bottom") {
			k.top += i
		} else {
			if (j.at[1] === a) {
				k.top += i / 2
			}
		}
		k.left += o[0];
		k.top += o[1];
		return this.each(function() {
			var t = g(this),
				v = t.outerWidth(),
				s = t.outerHeight(),
				u = parseInt(g.curCSS(this, "marginLeft", true)) || 0,
				r = parseInt(g.curCSS(this, "marginTop", true)) || 0,
				x = v + u + (parseInt(g.curCSS(this, "marginRight", true)) || 0),
				y = s + r + (parseInt(g.curCSS(this, "marginBottom", true)) || 0),
				w = g.extend({}, k),
				q;
			if (j.my[0] === "right") {
				w.left -= v
			} else {
				if (j.my[0] === a) {
					w.left -= v / 2
				}
			}
			if (j.my[1] === "bottom") {
				w.top -= s
			} else {
				if (j.my[1] === a) {
					w.top -= s / 2
				}
			}
			if (!f.fractions) {
				w.left = Math.round(w.left);
				w.top = Math.round(w.top)
			}
			q = {
				left: w.left - u,
				top: w.top - r
			};
			g.each(["left", "top"], function(A, z) {
				if (g.ui.position[p[A]]) {
					g.ui.position[p[A]][z](w, {
						targetWidth: l,
						targetHeight: i,
						elemWidth: v,
						elemHeight: s,
						collisionPosition: q,
						collisionWidth: x,
						collisionHeight: y,
						offset: o,
						my: j.my,
						at: j.at
					})
				}
			});
			if (g.fn.bgiframe) {
				t.bgiframe()
			}
			t.offset(g.extend(w, {
				using: j.using
			}))
		})
	};
	g.ui.position = {
		fit: {
			left: function(i, j) {
				var l = g(window),
					k = j.collisionPosition.left + j.collisionWidth - l.width() - l.scrollLeft();
				i.left = k > 0 ? i.left - k : Math.max(i.left - j.collisionPosition.left, i.left)
			},
			top: function(i, j) {
				var l = g(window),
					k = j.collisionPosition.top + j.collisionHeight - l.height() - l.scrollTop();
				i.top = k > 0 ? i.top - k : Math.max(i.top - j.collisionPosition.top, i.top)
			}
		},
		flip: {
			left: function(j, l) {
				if (l.at[0] === a) {
					return
				}
				var n = g(window),
					m = l.collisionPosition.left + l.collisionWidth - n.width() - n.scrollLeft(),
					i = l.my[0] === "left" ? -l.elemWidth : l.my[0] === "right" ? l.elemWidth : 0,
					k = l.at[0] === "left" ? l.targetWidth : -l.targetWidth,
					o = -2 * l.offset[0];
				j.left += l.collisionPosition.left < 0 ? i + k + o : m > 0 ? i + k + o : 0
			},
			top: function(j, l) {
				if (l.at[1] === a) {
					return
				}
				var n = g(window),
					m = l.collisionPosition.top + l.collisionHeight - n.height() - n.scrollTop(),
					i = l.my[1] === "top" ? -l.elemHeight : l.my[1] === "bottom" ? l.elemHeight : 0,
					k = l.at[1] === "top" ? l.targetHeight : -l.targetHeight,
					o = -2 * l.offset[1];
				j.top += l.collisionPosition.top < 0 ? i + k + o : m > 0 ? i + k + o : 0
			}
		}
	};
	if (!g.offset.setOffset) {
		g.offset.setOffset = function(m, j) {
			if (/static/.test(g.curCSS(m, "position"))) {
				m.style.position = "relative"
			}
			var l = g(m),
				o = l.offset(),
				i = parseInt(g.curCSS(m, "top", true), 10) || 0,
				n = parseInt(g.curCSS(m, "left", true), 10) || 0,
				k = {
					top: (j.top - o.top) + i,
					left: (j.left - o.left) + n
				};
			if ("using" in j) {
				j.using.call(m, k)
			} else {
				l.css(k)
			}
		};
		g.fn.offset = function(i) {
			var j = this[0];
			if (!j || !j.ownerDocument) {
				return null
			}
			if (i) {
				if (g.isFunction(i)) {
					return this.each(function(k) {
						g(this).offset(i.call(this, k, g(this).offset()))
					})
				}
				return this.each(function() {
					g.offset.setOffset(this, i)
				})
			}
			return c.call(this)
		}
	}
	if (!g.curCSS) {
		g.curCSS = g.css
	}(function() {
		var j = document.getElementsByTagName("body")[0],
			q = document.createElement("div"),
			n, p, k, o, m;
		n = document.createElement(j ? "div" : "body");
		k = {
			visibility: "hidden",
			width: 0,
			height: 0,
			border: 0,
			margin: 0,
			background: "none"
		};
		if (j) {
			g.extend(k, {
				position: "absolute",
				left: "-1000px",
				top: "-1000px"
			})
		}
		for (var l in k) {
			n.style[l] = k[l]
		}
		n.appendChild(q);
		p = j || document.documentElement;
		p.insertBefore(n, p.firstChild);
		q.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";
		o = g(q).offset(function(i, r) {
			return r
		}).offset();
		n.innerHTML = "";
		p.removeChild(n);
		m = o.top + o.left + (j ? 2000 : 0);
		f.fractions = m > 21 && m < 22
	})()
}(jQuery));
(function(c, d) {
	c.widget("ui.resizable", c.ui.mouse, {
		widgetEventPrefix: "resize",
		options: {
			alsoResize: false,
			animate: false,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: false,
			autoHide: false,
			containment: false,
			ghost: false,
			grid: false,
			handles: "e,s,se",
			helper: false,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 1000
		},
		_create: function() {
			var f = this,
				k = this.options;
			this.element.addClass("ui-resizable");
			c.extend(this, {
				_aspectRatio: !! (k.aspectRatio),
				aspectRatio: k.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: k.helper || k.ghost || k.animate ? k.helper || "ui-resizable-helper" : null
			});
			if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
				this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
					position: this.element.css("position"),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css("top"),
					left: this.element.css("left")
				}));
				this.element = this.element.parent().data("resizable", this.element.data("resizable"));
				this.elementIsWrapper = true;
				this.element.css({
					marginLeft: this.originalElement.css("marginLeft"),
					marginTop: this.originalElement.css("marginTop"),
					marginRight: this.originalElement.css("marginRight"),
					marginBottom: this.originalElement.css("marginBottom")
				});
				this.originalElement.css({
					marginLeft: 0,
					marginTop: 0,
					marginRight: 0,
					marginBottom: 0
				});
				this.originalResizeStyle = this.originalElement.css("resize");
				this.originalElement.css("resize", "none");
				this._proportionallyResizeElements.push(this.originalElement.css({
					position: "static",
					zoom: 1,
					display: "block"
				}));
				this.originalElement.css({
					margin: this.originalElement.css("margin")
				});
				this._proportionallyResize()
			}
			this.handles = k.handles || (!c(".ui-resizable-handle", this.element).length ? "e,s,se" : {
				n: ".ui-resizable-n",
				e: ".ui-resizable-e",
				s: ".ui-resizable-s",
				w: ".ui-resizable-w",
				se: ".ui-resizable-se",
				sw: ".ui-resizable-sw",
				ne: ".ui-resizable-ne",
				nw: ".ui-resizable-nw"
			});
			if (this.handles.constructor == String) {
				if (this.handles == "all") {
					this.handles = "n,e,s,w,se,sw,ne,nw"
				}
				var l = this.handles.split(",");
				this.handles = {};
				for (var g = 0; g < l.length; g++) {
					var j = c.trim(l[g]),
						e = "ui-resizable-" + j;
					var h = c('<div class="ui-resizable-handle ' + e + '"></div>');
					h.css({
						zIndex: k.zIndex
					});
					if ("se" == j) {
						h.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
					}
					this.handles[j] = ".ui-resizable-" + j;
					this.element.append(h)
				}
			}
			this._renderAxis = function(q) {
				q = q || this.element;
				for (var n in this.handles) {
					if (this.handles[n].constructor == String) {
						this.handles[n] = c(this.handles[n], this.element).show()
					}
					if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
						var o = c(this.handles[n], this.element),
							p = 0;
						p = /sw|ne|nw|se|n|s/.test(n) ? o.outerHeight() : o.outerWidth();
						var m = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join("");
						q.css(m, p);
						this._proportionallyResize()
					}
					if (!c(this.handles[n]).length) {
						continue
					}
				}
			};
			this._renderAxis(this.element);
			this._handles = c(".ui-resizable-handle", this.element).disableSelection();
			this._handles.mouseover(function() {
				if (!f.resizing) {
					if (this.className) {
						var i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
					}
					f.axis = i && i[1] ? i[1] : "se"
				}
			});
			if (k.autoHide) {
				this._handles.hide();
				c(this.element).addClass("ui-resizable-autohide").hover(function() {
					if (k.disabled) {
						return
					}
					c(this).removeClass("ui-resizable-autohide");
					f._handles.show()
				}, function() {
					if (k.disabled) {
						return
					}
					if (!f.resizing) {
						c(this).addClass("ui-resizable-autohide");
						f._handles.hide()
					}
				})
			}
			this._mouseInit()
		},
		destroy: function() {
			this._mouseDestroy();
			var e = function(g) {
					c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
				};
			if (this.elementIsWrapper) {
				e(this.element);
				var f = this.element;
				f.after(this.originalElement.css({
					position: f.css("position"),
					width: f.outerWidth(),
					height: f.outerHeight(),
					top: f.css("top"),
					left: f.css("left")
				})).remove()
			}
			this.originalElement.css("resize", this.originalResizeStyle);
			e(this.originalElement);
			return this
		},
		_mouseCapture: function(f) {
			var g = false;
			for (var e in this.handles) {
				if (c(this.handles[e])[0] == f.target) {
					g = true
				}
			}
			return !this.options.disabled && g
		},
		_mouseStart: function(g) {
			var j = this.options,
				f = this.element.position(),
				e = this.element;
			this.resizing = true;
			this.documentScroll = {
				top: c(document).scrollTop(),
				left: c(document).scrollLeft()
			};
			if (e.is(".ui-draggable") || (/absolute/).test(e.css("position"))) {
				e.css({
					position: "absolute",
					top: f.top,
					left: f.left
				})
			}
			this._renderProxy();
			var k = b(this.helper.css("left")),
				h = b(this.helper.css("top"));
			if (j.containment) {
				k += c(j.containment).scrollLeft() || 0;
				h += c(j.containment).scrollTop() || 0
			}
			this.offset = this.helper.offset();
			this.position = {
				left: k,
				top: h
			};
			this.size = this._helper ? {
				width: e.outerWidth(),
				height: e.outerHeight()
			} : {
				width: e.width(),
				height: e.height()
			};
			this.originalSize = this._helper ? {
				width: e.outerWidth(),
				height: e.outerHeight()
			} : {
				width: e.width(),
				height: e.height()
			};
			this.originalPosition = {
				left: k,
				top: h
			};
			this.sizeDiff = {
				width: e.outerWidth() - e.width(),
				height: e.outerHeight() - e.height()
			};
			this.originalMousePosition = {
				left: g.pageX,
				top: g.pageY
			};
			this.aspectRatio = (typeof j.aspectRatio == "number") ? j.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
			var i = c(".ui-resizable-" + this.axis).css("cursor");
			c("body").css("cursor", i == "auto" ? this.axis + "-resize" : i);
			e.addClass("ui-resizable-resizing");
			this._propagate("start", g);
			return true
		},
		_mouseDrag: function(e) {
			var h = this.helper,
				g = this.options,
				m = {},
				q = this,
				j = this.originalMousePosition,
				n = this.axis;
			var r = (e.pageX - j.left) || 0,
				p = (e.pageY - j.top) || 0;
			var i = this._change[n];
			if (!i) {
				return false
			}
			var l = i.apply(this, [e, r, p]),
				k = c.browser.msie && c.browser.version < 7,
				f = this.sizeDiff;
			this._updateVirtualBoundaries(e.shiftKey);
			if (this._aspectRatio || e.shiftKey) {
				l = this._updateRatio(l, e)
			}
			l = this._respectSize(l, e);
			this._propagate("resize", e);
			h.css({
				top: this.position.top + "px",
				left: this.position.left + "px",
				width: this.size.width + "px",
				height: this.size.height + "px"
			});
			if (!this._helper && this._proportionallyResizeElements.length) {
				this._proportionallyResize()
			}
			this._updateCache(l);
			this._trigger("resize", e, this.ui());
			return false
		},
		_mouseStop: function(h) {
			this.resizing = false;
			var i = this.options,
				m = this;
			if (this._helper) {
				var g = this._proportionallyResizeElements,
					e = g.length && (/textarea/i).test(g[0].nodeName),
					f = e && c.ui.hasScroll(g[0], "left") ? 0 : m.sizeDiff.height,
					k = e ? 0 : m.sizeDiff.width;
				var n = {
					width: (m.helper.width() - k),
					height: (m.helper.height() - f)
				},
					j = (parseInt(m.element.css("left"), 10) + (m.position.left - m.originalPosition.left)) || null,
					l = (parseInt(m.element.css("top"), 10) + (m.position.top - m.originalPosition.top)) || null;
				if (!i.animate) {
					this.element.css(c.extend(n, {
						top: l,
						left: j
					}))
				}
				m.helper.height(m.size.height);
				m.helper.width(m.size.width);
				if (this._helper && !i.animate) {
					this._proportionallyResize()
				}
			}
			c("body").css("cursor", "auto");
			this.element.removeClass("ui-resizable-resizing");
			this._propagate("stop", h);
			if (this._helper) {
				this.helper.remove()
			}
			return false
		},
		_updateVirtualBoundaries: function(g) {
			var j = this.options,
				i, h, f, k, e;
			e = {
				minWidth: a(j.minWidth) ? j.minWidth : 0,
				maxWidth: a(j.maxWidth) ? j.maxWidth : Infinity,
				minHeight: a(j.minHeight) ? j.minHeight : 0,
				maxHeight: a(j.maxHeight) ? j.maxHeight : Infinity
			};
			if (this._aspectRatio || g) {
				i = e.minHeight * this.aspectRatio;
				f = e.minWidth / this.aspectRatio;
				h = e.maxHeight * this.aspectRatio;
				k = e.maxWidth / this.aspectRatio;
				if (i > e.minWidth) {
					e.minWidth = i
				}
				if (f > e.minHeight) {
					e.minHeight = f
				}
				if (h < e.maxWidth) {
					e.maxWidth = h
				}
				if (k < e.maxHeight) {
					e.maxHeight = k
				}
			}
			this._vBoundaries = e
		},
		_updateCache: function(e) {
			var f = this.options;
			this.offset = this.helper.offset();
			if (a(e.left)) {
				this.position.left = e.left
			}
			if (a(e.top)) {
				this.position.top = e.top
			}
			if (a(e.height)) {
				this.size.height = e.height
			}
			if (a(e.width)) {
				this.size.width = e.width
			}
		},
		_updateRatio: function(h, g) {
			var i = this.options,
				j = this.position,
				f = this.size,
				e = this.axis;
			if (a(h.height)) {
				h.width = (h.height * this.aspectRatio)
			} else {
				if (a(h.width)) {
					h.height = (h.width / this.aspectRatio)
				}
			}
			if (e == "sw") {
				h.left = j.left + (f.width - h.width);
				h.top = null
			}
			if (e == "nw") {
				h.top = j.top + (f.height - h.height);
				h.left = j.left + (f.width - h.width)
			}
			return h
		},
		_respectSize: function(l, g) {
			var j = this.helper,
				i = this._vBoundaries,
				r = this._aspectRatio || g.shiftKey,
				q = this.axis,
				t = a(l.width) && i.maxWidth && (i.maxWidth < l.width),
				m = a(l.height) && i.maxHeight && (i.maxHeight < l.height),
				h = a(l.width) && i.minWidth && (i.minWidth > l.width),
				s = a(l.height) && i.minHeight && (i.minHeight > l.height);
			if (h) {
				l.width = i.minWidth
			}
			if (s) {
				l.height = i.minHeight
			}
			if (t) {
				l.width = i.maxWidth
			}
			if (m) {
				l.height = i.maxHeight
			}
			var f = this.originalPosition.left + this.originalSize.width,
				p = this.position.top + this.size.height;
			var k = /sw|nw|w/.test(q),
				e = /nw|ne|n/.test(q);
			if (h && k) {
				l.left = f - i.minWidth
			}
			if (t && k) {
				l.left = f - i.maxWidth
			}
			if (s && e) {
				l.top = p - i.minHeight
			}
			if (m && e) {
				l.top = p - i.maxHeight
			}
			var n = !l.width && !l.height;
			if (n && !l.left && l.top) {
				l.top = null
			} else {
				if (n && !l.top && l.left) {
					l.left = null
				}
			}
			return l
		},
		_proportionallyResize: function() {
			var k = this.options;
			if (!this._proportionallyResizeElements.length) {
				return
			}
			var g = this.helper || this.element;
			for (var f = 0; f < this._proportionallyResizeElements.length; f++) {
				var h = this._proportionallyResizeElements[f];
				if (!this.borderDif) {
					var e = [h.css("borderTopWidth"), h.css("borderRightWidth"), h.css("borderBottomWidth"), h.css("borderLeftWidth")],
						j = [h.css("paddingTop"), h.css("paddingRight"), h.css("paddingBottom"), h.css("paddingLeft")];
					this.borderDif = c.map(e, function(l, n) {
						var m = parseInt(l, 10) || 0,
							o = parseInt(j[n], 10) || 0;
						return m + o
					})
				}
				if (c.browser.msie && !(!(c(g).is(":hidden") || c(g).parents(":hidden").length))) {
					continue
				}
				h.css({
					height: (g.height() - this.borderDif[0] - this.borderDif[2]) || 0,
					width: (g.width() - this.borderDif[1] - this.borderDif[3]) || 0
				})
			}
		},
		_renderProxy: function() {
			var f = this.element,
				i = this.options;
			this.elementOffset = f.offset();
			if (this._helper) {
				this.helper = this.helper || c('<div style="overflow:hidden;"></div>');
				var e = c.browser.msie && c.browser.version < 7,
					g = (e ? 1 : 0),
					h = (e ? 2 : -1);
				this.helper.addClass(this._helper).css({
					width: this.element.outerWidth() + h,
					height: this.element.outerHeight() + h,
					position: "absolute",
					left: this.elementOffset.left - g + "px",
					top: this.elementOffset.top - g + "px",
					zIndex: ++i.zIndex
				});
				this.helper.appendTo("body").disableSelection()
			} else {
				this.helper = this.element
			}
		},
		_change: {
			e: function(g, f, e) {
				return {
					width: this.originalSize.width + f
				}
			},
			w: function(h, f, e) {
				var j = this.options,
					g = this.originalSize,
					i = this.originalPosition;
				return {
					left: i.left + f,
					width: g.width - f
				}
			},
			n: function(h, f, e) {
				var j = this.options,
					g = this.originalSize,
					i = this.originalPosition;
				return {
					top: i.top + e,
					height: g.height - e
				}
			},
			s: function(g, f, e) {
				return {
					height: this.originalSize.height + e
				}
			},
			se: function(g, f, e) {
				return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [g, f, e]))
			},
			sw: function(g, f, e) {
				return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [g, f, e]))
			},
			ne: function(g, f, e) {
				return c.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [g, f, e]))
			},
			nw: function(g, f, e) {
				return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [g, f, e]))
			}
		},
		_propagate: function(f, e) {
			c.ui.plugin.call(this, f, [e, this.ui()]);
			(f != "resize" && this._trigger(f, e, this.ui()))
		},
		plugins: {},
		ui: function() {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	});
	c.extend(c.ui.resizable, {
		version: "@VERSION"
	});
	c.ui.plugin.add("resizable", "alsoResize", {
		start: function(f, g) {
			var e = c(this).data("resizable"),
				i = e.options;
			var h = function(j) {
					c(j).each(function() {
						var k = c(this);
						k.data("resizable-alsoresize", {
							width: parseInt(k.width(), 10),
							height: parseInt(k.height(), 10),
							left: parseInt(k.css("left"), 10),
							top: parseInt(k.css("top"), 10)
						})
					})
				};
			if (typeof(i.alsoResize) == "object" && !i.alsoResize.parentNode) {
				if (i.alsoResize.length) {
					i.alsoResize = i.alsoResize[0];
					h(i.alsoResize)
				} else {
					c.each(i.alsoResize, function(j) {
						h(j)
					})
				}
			} else {
				h(i.alsoResize)
			}
		},
		resize: function(g, i) {
			var f = c(this).data("resizable"),
				j = f.options,
				h = f.originalSize,
				l = f.originalPosition;
			var k = {
				height: (f.size.height - h.height) || 0,
				width: (f.size.width - h.width) || 0,
				top: (f.position.top - l.top) || 0,
				left: (f.position.left - l.left) || 0
			},
				e = function(m, n) {
					c(m).each(function() {
						var q = c(this),
							r = c(this).data("resizable-alsoresize"),
							p = {},
							o = n && n.length ? n : q.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						c.each(o, function(s, u) {
							var t = (r[u] || 0) + (k[u] || 0);
							if (t && t >= 0) {
								p[u] = t || null
							}
						});
						q.css(p)
					})
				};
			if (typeof(j.alsoResize) == "object" && !j.alsoResize.nodeType) {
				c.each(j.alsoResize, function(m, n) {
					e(m, n)
				})
			} else {
				e(j.alsoResize)
			}
		},
		stop: function(e, f) {
			c(this).removeData("resizable-alsoresize")
		}
	});
	c.ui.plugin.add("resizable", "animate", {
		stop: function(i, n) {
			var p = c(this).data("resizable"),
				j = p.options;
			var h = p._proportionallyResizeElements,
				e = h.length && (/textarea/i).test(h[0].nodeName),
				f = e && c.ui.hasScroll(h[0], "left") ? 0 : p.sizeDiff.height,
				l = e ? 0 : p.sizeDiff.width;
			var g = {
				width: (p.size.width - l),
				height: (p.size.height - f)
			},
				k = (parseInt(p.element.css("left"), 10) + (p.position.left - p.originalPosition.left)) || null,
				m = (parseInt(p.element.css("top"), 10) + (p.position.top - p.originalPosition.top)) || null;
			p.element.animate(c.extend(g, m && k ? {
				top: m,
				left: k
			} : {}), {
				duration: j.animateDuration,
				easing: j.animateEasing,
				step: function() {
					var o = {
						width: parseInt(p.element.css("width"), 10),
						height: parseInt(p.element.css("height"), 10),
						top: parseInt(p.element.css("top"), 10),
						left: parseInt(p.element.css("left"), 10)
					};
					if (h && h.length) {
						c(h[0]).css({
							width: o.width,
							height: o.height
						})
					}
					p._updateCache(o);
					p._propagate("resize", i)
				}
			})
		}
	});
	c.ui.plugin.add("resizable", "containment", {
		start: function(f, r) {
			var t = c(this).data("resizable"),
				j = t.options,
				l = t.element;
			var g = j.containment,
				k = (g instanceof c) ? g.get(0) : (/parent/.test(g)) ? l.parent().get(0) : g;
			if (!k) {
				return
			}
			t.containerElement = c(k);
			if (/document/.test(g) || g == document) {
				t.containerOffset = {
					left: 0,
					top: 0
				};
				t.containerPosition = {
					left: 0,
					top: 0
				};
				t.parentData = {
					element: c(document),
					left: 0,
					top: 0,
					width: c(document).width(),
					height: c(document).height() || document.body.parentNode.scrollHeight
				}
			} else {
				var n = c(k),
					i = [];
				c(["Top", "Right", "Left", "Bottom"]).each(function(p, o) {
					i[p] = b(n.css("padding" + o))
				});
				t.containerOffset = n.offset();
				t.containerPosition = n.position();
				t.containerSize = {
					height: (n.innerHeight() - i[3]),
					width: (n.innerWidth() - i[1])
				};
				var q = t.containerOffset,
					e = t.containerSize.height,
					m = t.containerSize.width,
					h = (c.ui.hasScroll(k, "left") ? k.scrollWidth : m),
					s = (c.ui.hasScroll(k) ? k.scrollHeight : e);
				t.parentData = {
					element: k,
					left: q.left,
					top: q.top,
					width: h,
					height: s
				}
			}
		},
		resize: function(g, q) {
			var t = c(this).data("resizable"),
				i = t.options,
				f = t.containerSize,
				p = t.containerOffset,
				m = t.size,
				n = t.position,
				r = t._aspectRatio || g.shiftKey,
				e = {
					top: 0,
					left: 0
				},
				h = t.containerElement;
			if (h[0] != document && (/static/).test(h.css("position"))) {
				e = p
			}
			if (n.left < (t._helper ? p.left : 0)) {
				t.size.width = t.size.width + (t._helper ? (t.position.left - p.left) : (t.position.left - e.left));
				if (r) {
					t.size.height = t.size.width / t.aspectRatio
				}
				t.position.left = i.helper ? p.left : 0
			}
			if (n.top < (t._helper ? p.top : 0)) {
				t.size.height = t.size.height + (t._helper ? (t.position.top - p.top) : t.position.top);
				if (r) {
					t.size.width = t.size.height * t.aspectRatio
				}
				t.position.top = t._helper ? p.top : 0
			}
			t.offset.left = t.parentData.left + t.position.left;
			t.offset.top = t.parentData.top + t.position.top;
			var l = Math.abs((t._helper ? t.offset.left - e.left : (t.offset.left - e.left)) + t.sizeDiff.width),
				s = Math.abs((t._helper ? t.offset.top - e.top : (t.offset.top - p.top)) + t.sizeDiff.height);
			var k = t.containerElement.get(0) == t.element.parent().get(0),
				j = /relative|absolute/.test(t.containerElement.css("position"));
			if (k && j) {
				l -= t.parentData.left
			}
			if (l + t.size.width >= t.parentData.width) {
				t.size.width = t.parentData.width - l;
				if (r) {
					t.size.height = t.size.width / t.aspectRatio
				}
			}
			if (s + t.size.height >= t.parentData.height) {
				t.size.height = t.parentData.height - s;
				if (r) {
					t.size.width = t.size.height * t.aspectRatio
				}
			}
		},
		stop: function(f, n) {
			var q = c(this).data("resizable"),
				g = q.options,
				l = q.position,
				m = q.containerOffset,
				e = q.containerPosition,
				i = q.containerElement;
			var j = c(q.helper),
				r = j.offset(),
				p = j.outerWidth() - q.sizeDiff.width,
				k = j.outerHeight() - q.sizeDiff.height;
			if (q._helper && !g.animate && (/relative/).test(i.css("position"))) {
				c(this).css({
					left: r.left - e.left - m.left,
					width: p,
					height: k
				})
			}
			if (q._helper && !g.animate && (/static/).test(i.css("position"))) {
				c(this).css({
					left: r.left - e.left - m.left,
					width: p,
					height: k
				})
			}
		}
	});
	c.ui.plugin.add("resizable", "ghost", {
		start: function(g, h) {
			var e = c(this).data("resizable"),
				i = e.options,
				f = e.size;
			e.ghost = e.originalElement.clone();
			e.ghost.css({
				opacity: 0.25,
				display: "block",
				position: "relative",
				height: f.height,
				width: f.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : "");
			e.ghost.appendTo(e.helper)
		},
		resize: function(f, g) {
			var e = c(this).data("resizable"),
				h = e.options;
			if (e.ghost) {
				e.ghost.css({
					position: "relative",
					height: e.size.height,
					width: e.size.width
				})
			}
		},
		stop: function(f, g) {
			var e = c(this).data("resizable"),
				h = e.options;
			if (e.ghost && e.helper) {
				e.helper.get(0).removeChild(e.ghost.get(0))
			}
		}
	});
	c.ui.plugin.add("resizable", "grid", {
		resize: function(e, m) {
			var p = c(this).data("resizable"),
				h = p.options,
				k = p.size,
				i = p.originalSize,
				j = p.originalPosition,
				n = p.axis,
				l = h._aspectRatio || e.shiftKey;
			h.grid = typeof h.grid == "number" ? [h.grid, h.grid] : h.grid;
			var g = Math.round((k.width - i.width) / (h.grid[0] || 1)) * (h.grid[0] || 1),
				f = Math.round((k.height - i.height) / (h.grid[1] || 1)) * (h.grid[1] || 1);
			if (/^(se|s|e)$/.test(n)) {
				p.size.width = i.width + g;
				p.size.height = i.height + f
			} else {
				if (/^(ne)$/.test(n)) {
					p.size.width = i.width + g;
					p.size.height = i.height + f;
					p.position.top = j.top - f
				} else {
					if (/^(sw)$/.test(n)) {
						p.size.width = i.width + g;
						p.size.height = i.height + f;
						p.position.left = j.left - g
					} else {
						p.size.width = i.width + g;
						p.size.height = i.height + f;
						p.position.top = j.top - f;
						p.position.left = j.left - g
					}
				}
			}
		}
	});
	var b = function(e) {
			return parseInt(e, 10) || 0
		};
	var a = function(e) {
			return !isNaN(parseInt(e, 10))
		}
})(jQuery);
(function(d, e) {
	var b = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
		a = {
			buttons: true,
			height: true,
			maxHeight: true,
			maxWidth: true,
			minHeight: true,
			minWidth: true,
			width: true
		},
		c = {
			maxHeight: true,
			maxWidth: true,
			minHeight: true,
			minWidth: true
		};
	d.widget("ui.dialog", {
		options: {
			autoOpen: true,
			buttons: {},
			closeOnEscape: true,
			closeText: "close",
			dialogClass: "",
			draggable: true,
			hide: null,
			height: "auto",
			maxHeight: false,
			maxWidth: false,
			minHeight: 150,
			minWidth: 150,
			modal: false,
			position: {
				my: "center",
				at: "center",
				collision: "fit",
				using: function(g) {
					var f = d(this).css(g).offset().top;
					if (f < 0) {
						d(this).css("top", g.top - f)
					}
				}
			},
			resizable: true,
			show: null,
			stack: true,
			title: "",
			width: 300,
			zIndex: 1000
		},
		_create: function() {
			this.originalTitle = this.element.attr("title");
			if (typeof this.originalTitle !== "string") {
				this.originalTitle = ""
			}
			this.options.title = this.options.title || this.originalTitle;
			var n = this,
				o = n.options,
				l = o.title || "&#160;",
				g = d.ui.dialog.getTitleId(n.element),
				m = (n.uiDialog = d("<div></div>")).appendTo(document.body).hide().addClass(b + o.dialogClass).css({
					zIndex: o.zIndex
				}).attr("tabIndex", -1).css("outline", 0).keydown(function(p) {
					if (o.closeOnEscape && !p.isDefaultPrevented() && p.keyCode && p.keyCode === d.ui.keyCode.ESCAPE) {
						n.close(p);
						p.preventDefault()
					}
				}).attr({
					role: "dialog",
					"aria-labelledby": g
				}).mousedown(function(p) {
					n.moveToTop(false, p)
				}),
				i = n.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(m),
				h = (n.uiDialogTitlebar = d("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(m),
				k = d('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
					k.addClass("ui-state-hover")
				}, function() {
					k.removeClass("ui-state-hover")
				}).focus(function() {
					k.addClass("ui-state-focus")
				}).blur(function() {
					k.removeClass("ui-state-focus")
				}).click(function(p) {
					n.close(p);
					return false
				}).appendTo(h),
				j = (n.uiDialogTitlebarCloseText = d("<span></span>")).addClass("ui-icon ui-icon-closethick").text(o.closeText).appendTo(k),
				f = d("<span></span>").addClass("ui-dialog-title").attr("id", g).html(l).prependTo(h);
			if (d.isFunction(o.beforeclose) && !d.isFunction(o.beforeClose)) {
				o.beforeClose = o.beforeclose
			}
			h.find("*").add(h).disableSelection();
			if (o.draggable && d.fn.draggable) {
				n._makeDraggable()
			}
			if (o.resizable && d.fn.resizable) {
				n._makeResizable()
			}
			n._createButtons(o.buttons);
			n._isOpen = false;
			if (d.fn.bgiframe) {
				m.bgiframe()
			}
		},
		_init: function() {
			if (this.options.autoOpen) {
				this.open()
			}
		},
		destroy: function() {
			var f = this;
			if (f.overlay) {
				f.overlay.destroy()
			}
			f.uiDialog.hide();
			f.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
			f.uiDialog.remove();
			if (f.originalTitle) {
				f.element.attr("title", f.originalTitle)
			}
			return f
		},
		widget: function() {
			return this.uiDialog
		},
		close: function(i) {
			var f = this,
				h, g;
			if (false === f._trigger("beforeClose", i)) {
				return
			}
			if (f.overlay) {
				f.overlay.destroy()
			}
			f.uiDialog.unbind("keypress.ui-dialog");
			f._isOpen = false;
			if (f.options.hide) {
				f.uiDialog.hide(f.options.hide, function() {
					f._trigger("close", i)
				})
			} else {
				f.uiDialog.hide();
				f._trigger("close", i)
			}
			d.ui.dialog.overlay.resize();
			if (f.options.modal) {
				h = 0;
				d(".ui-dialog").each(function() {
					if (this !== f.uiDialog[0]) {
						g = d(this).css("z-index");
						if (!isNaN(g)) {
							h = Math.max(h, g)
						}
					}
				});
				d.ui.dialog.maxZ = h
			}
			return f
		},
		isOpen: function() {
			return this._isOpen
		},
		moveToTop: function(j, i) {
			var f = this,
				h = f.options,
				g;
			if ((h.modal && !j) || (!h.stack && !h.modal)) {
				return f._trigger("focus", i)
			}
			if (h.zIndex > d.ui.dialog.maxZ) {
				d.ui.dialog.maxZ = h.zIndex
			}
			if (f.overlay) {
				d.ui.dialog.maxZ += 1;
				f.overlay.$el.css("z-index", d.ui.dialog.overlay.maxZ = d.ui.dialog.maxZ)
			}
			g = {
				scrollTop: f.element.scrollTop(),
				scrollLeft: f.element.scrollLeft()
			};
			d.ui.dialog.maxZ += 1;
			f.uiDialog.css("z-index", d.ui.dialog.maxZ);
			f.element.attr(g);
			f._trigger("focus", i);
			return f
		},
		open: function() {
			if (this._isOpen) {
				return
			}
			var g = this,
				h = g.options,
				f = g.uiDialog;
			g.overlay = h.modal ? new d.ui.dialog.overlay(g) : null;
			g._size();
			g._position(h.position);
			f.show(h.show);
			g.moveToTop(true);
			if (h.modal) {
				f.bind("keydown.ui-dialog", function(k) {
					if (k.keyCode !== d.ui.keyCode.TAB) {
						return
					}
					var j = d(":tabbable", this),
						l = j.filter(":first"),
						i = j.filter(":last");
					if (k.target === i[0] && !k.shiftKey) {
						l.focus(1);
						return false
					} else {
						if (k.target === l[0] && k.shiftKey) {
							i.focus(1);
							return false
						}
					}
				})
			}
			d(g.element.find(":tabbable").get().concat(f.find(".ui-dialog-buttonpane :tabbable").get().concat(f.get()))).eq(0).focus();
			g._isOpen = true;
			g._trigger("open");
			return g
		},
		_createButtons: function(i) {
			var h = this,
				f = false,
				g = d("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
				j = d("<div></div>").addClass("ui-dialog-buttonset").appendTo(g);
			h.uiDialog.find(".ui-dialog-buttonpane").remove();
			if (typeof i === "object" && i !== null) {
				d.each(i, function() {
					return !(f = true)
				})
			}
			if (f) {
				d.each(i, function(k, m) {
					m = d.isFunction(m) ? {
						click: m,
						text: k
					} : m;
					var l = d('<button type="button"></button>').click(function() {
						m.click.apply(h.element[0], arguments)
					}).appendTo(j);
					d.each(m, function(n, o) {
						if (n === "click") {
							return
						}
						if (n in l) {
							l[n](o)
						} else {
							l.attr(n, o)
						}
					});
					if (d.fn.button) {
						l.button()
					}
				});
				g.appendTo(h.uiDialog)
			}
		},
		_makeDraggable: function() {
			var f = this,
				i = f.options,
				j = d(document),
				h;

			function g(k) {
				return {
					position: k.position,
					offset: k.offset
				}
			}
			f.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function(k, l) {
					h = i.height === "auto" ? "auto" : d(this).height();
					d(this).height(d(this).height()).addClass("ui-dialog-dragging");
					f._trigger("dragStart", k, g(l))
				},
				drag: function(k, l) {
					f._trigger("drag", k, g(l))
				},
				stop: function(k, l) {
					i.position = [l.position.left - j.scrollLeft(), l.position.top - j.scrollTop()];
					d(this).removeClass("ui-dialog-dragging").height(h);
					f._trigger("dragStop", k, g(l));
					d.ui.dialog.overlay.resize()
				}
			})
		},
		_makeResizable: function(k) {
			k = (k === e ? this.options.resizable : k);
			var g = this,
				j = g.options,
				f = g.uiDialog.css("position"),
				i = (typeof k === "string" ? k : "n,e,s,w,se,sw,ne,nw");

			function h(l) {
				return {
					originalPosition: l.originalPosition,
					originalSize: l.originalSize,
					position: l.position,
					size: l.size
				}
			}
			g.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: g.element,
				maxWidth: j.maxWidth,
				maxHeight: j.maxHeight,
				minWidth: j.minWidth,
				minHeight: g._minHeight(),
				handles: i,
				start: function(l, m) {
					d(this).addClass("ui-dialog-resizing");
					g._trigger("resizeStart", l, h(m))
				},
				resize: function(l, m) {
					g._trigger("resize", l, h(m))
				},
				stop: function(l, m) {
					d(this).removeClass("ui-dialog-resizing");
					j.height = d(this).height();
					j.width = d(this).width();
					g._trigger("resizeStop", l, h(m));
					d.ui.dialog.overlay.resize()
				}
			}).css("position", f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
		},
		_minHeight: function() {
			var f = this.options;
			if (f.height === "auto") {
				return f.minHeight
			} else {
				return Math.min(f.minHeight, f.height)
			}
		},
		_position: function(g) {
			var h = [],
				i = [0, 0],
				f;
			if (g) {
				if (typeof g === "string" || (typeof g === "object" && "0" in g)) {
					h = g.split ? g.split(" ") : [g[0], g[1]];
					if (h.length === 1) {
						h[1] = h[0]
					}
					d.each(["left", "top"], function(k, j) {
						if (+h[k] === h[k]) {
							i[k] = h[k];
							h[k] = j
						}
					});
					g = {
						my: h.join(" "),
						at: h.join(" "),
						offset: i.join(" ")
					}
				}
				g = d.extend({}, d.ui.dialog.prototype.options.position, g)
			} else {
				g = d.ui.dialog.prototype.options.position
			}
			f = this.uiDialog.is(":visible");
			if (!f) {
				this.uiDialog.show()
			}
			this.uiDialog.css({
				top: 0,
				left: 0
			}).position(d.extend({
				of: window
			}, g));
			if (!f) {
				this.uiDialog.hide()
			}
		},
		_setOptions: function(i) {
			var g = this,
				f = {},
				h = false;
			d.each(i, function(j, k) {
				g._setOption(j, k);
				if (j in a) {
					h = true
				}
				if (j in c) {
					f[j] = k
				}
			});
			if (h) {
				this._size()
			}
			if (this.uiDialog.is(":data(resizable)")) {
				this.uiDialog.resizable("option", f)
			}
		},
		_setOption: function(i, j) {
			var g = this,
				f = g.uiDialog;
			switch (i) {
			case "beforeclose":
				i = "beforeClose";
				break;
			case "buttons":
				g._createButtons(j);
				break;
			case "closeText":
				g.uiDialogTitlebarCloseText.text("" + j);
				break;
			case "dialogClass":
				f.removeClass(g.options.dialogClass).addClass(b + j);
				break;
			case "disabled":
				if (j) {
					f.addClass("ui-dialog-disabled")
				} else {
					f.removeClass("ui-dialog-disabled")
				}
				break;
			case "draggable":
				var h = f.is(":data(draggable)");
				if (h && !j) {
					f.draggable("destroy")
				}
				if (!h && j) {
					g._makeDraggable()
				}
				break;
			case "position":
				g._position(j);
				break;
			case "resizable":
				var k = f.is(":data(resizable)");
				if (k && !j) {
					f.resizable("destroy")
				}
				if (k && typeof j === "string") {
					f.resizable("option", "handles", j)
				}
				if (!k && j !== false) {
					g._makeResizable(j)
				}
				break;
			case "title":
				d(".ui-dialog-title", g.uiDialogTitlebar).html("" + (j || "&#160;"));
				break
			}
			d.Widget.prototype._setOption.apply(g, arguments)
		},
		_size: function() {
			var j = this.options,
				g, i, f = this.uiDialog.is(":visible");
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				height: 0
			});
			if (j.minWidth > j.width) {
				j.width = j.minWidth
			}
			g = this.uiDialog.css({
				height: "auto",
				width: j.width
			}).height();
			i = Math.max(0, j.minHeight - g);
			if (j.height === "auto") {
				if (d.support.minHeight) {
					this.element.css({
						minHeight: i,
						height: "auto"
					})
				} else {
					this.uiDialog.show();
					var h = this.element.css("height", "auto").height();
					if (!f) {
						this.uiDialog.hide()
					}
					this.element.height(Math.max(h, i))
				}
			} else {
				this.element.height(Math.max(j.height - g, 0))
			}
			if (this.uiDialog.is(":data(resizable)")) {
				this.uiDialog.resizable("option", "minHeight", this._minHeight())
			}
		}
	});
	d.extend(d.ui.dialog, {
		version: "@VERSION",
		uuid: 0,
		maxZ: 0,
		getTitleId: function(f) {
			var g = f.attr("id");
			if (!g) {
				this.uuid += 1;
				g = this.uuid
			}
			return "ui-dialog-title-" + g
		},
		overlay: function(f) {
			this.$el = d.ui.dialog.overlay.create(f)
		}
	});
	d.extend(d.ui.dialog.overlay, {
		instances: [],
		oldInstances: [],
		maxZ: 0,
		events: d.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(f) {
			return f + ".dialog-overlay"
		}).join(" "),
		create: function(g) {
			if (this.instances.length === 0) {
				setTimeout(function() {
					if (d.ui.dialog.overlay.instances.length) {
						d(document).bind(d.ui.dialog.overlay.events, function(h) {
							if (d(h.target).zIndex() < d.ui.dialog.overlay.maxZ) {
								return false
							}
						})
					}
				}, 1);
				d(document).bind("keydown.dialog-overlay", function(h) {
					if (g.options.closeOnEscape && !h.isDefaultPrevented() && h.keyCode && h.keyCode === d.ui.keyCode.ESCAPE) {
						g.close(h);
						h.preventDefault()
					}
				});
				d(window).bind("resize.dialog-overlay", d.ui.dialog.overlay.resize)
			}
			var f = (this.oldInstances.pop() || d("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
				width: this.width(),
				height: this.height()
			});
			if (d.fn.bgiframe) {
				f.bgiframe()
			}
			this.instances.push(f);
			return f
		},
		destroy: function(f) {
			var g = d.inArray(f, this.instances);
			if (g != -1) {
				this.oldInstances.push(this.instances.splice(g, 1)[0])
			}
			if (this.instances.length === 0) {
				d([document, window]).unbind(".dialog-overlay")
			}
			f.remove();
			var h = 0;
			d.each(this.instances, function() {
				h = Math.max(h, this.css("z-index"))
			});
			this.maxZ = h
		},
		height: function() {
			var g, f;
			if (d.browser.msie && d.browser.version < 7) {
				g = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
				f = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
				if (g < f) {
					return d(window).height() + "px"
				} else {
					return g + "px"
				}
			} else {
				return d(document).height() + "px"
			}
		},
		width: function() {
			var f, g;
			if (d.browser.msie) {
				f = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
				g = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
				if (f < g) {
					return d(window).width() + "px"
				} else {
					return f + "px"
				}
			} else {
				return d(document).width() + "px"
			}
		},
		resize: function() {
			var f = d([]);
			d.each(d.ui.dialog.overlay.instances, function() {
				f = f.add(this)
			});
			f.css({
				width: 0,
				height: 0
			}).css({
				width: d.ui.dialog.overlay.width(),
				height: d.ui.dialog.overlay.height()
			})
		}
	});
	d.extend(d.ui.dialog.overlay.prototype, {
		destroy: function() {
			d.ui.dialog.overlay.destroy(this.$el)
		}
	})
}(jQuery));
(function($, undefined) {
	$.extend($.ui, {
		datepicker: {
			version: "@VERSION"
		}
	});
	var PROP_NAME = "datepicker";
	var dpuuid = new Date().getTime();
	var instActive;

	function Datepicker() {
		this.debug = false;
		this._curInst = null;
		this._keyEvent = false;
		this._disabledInputs = [];
		this._datepickerShowing = false;
		this._inDialog = false;
		this._mainDivId = "ui-datepicker-div";
		this._inlineClass = "ui-datepicker-inline";
		this._appendClass = "ui-datepicker-append";
		this._triggerClass = "ui-datepicker-trigger";
		this._dialogClass = "ui-datepicker-dialog";
		this._disableClass = "ui-datepicker-disabled";
		this._unselectableClass = "ui-datepicker-unselectable";
		this._currentClass = "ui-datepicker-current-day";
		this._dayOverClass = "ui-datepicker-days-cell-over";
		this.regional = [];
		this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ""
		};
		this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: false,
			hideIfNoPrevNext: false,
			navigationAsDateFormat: false,
			gotoCurrent: false,
			changeMonth: false,
			changeYear: false,
			yearRange: "c-10:c+10",
			showOtherMonths: false,
			selectOtherMonths: false,
			showWeek: false,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: true,
			showButtonPanel: false,
			autoSize: false,
			disabled: false
		};
		$.extend(this._defaults, this.regional[""]);
		this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
	}
	$.extend(Datepicker.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		log: function() {
			if (this.debug) {
				console.log.apply("", arguments)
			}
		},
		_widgetDatepicker: function() {
			return this.dpDiv
		},
		setDefaults: function(settings) {
			extendRemove(this._defaults, settings || {});
			return this
		},
		_attachDatepicker: function(target, settings) {
			var inlineSettings = null;
			for (var attrName in this._defaults) {
				var attrValue = target.getAttribute("date:" + attrName);
				if (attrValue) {
					inlineSettings = inlineSettings || {};
					try {
						inlineSettings[attrName] = eval(attrValue)
					} catch (err) {
						inlineSettings[attrName] = attrValue
					}
				}
			}
			var nodeName = target.nodeName.toLowerCase();
			var inline = (nodeName == "div" || nodeName == "span");
			if (!target.id) {
				this.uuid += 1;
				target.id = "dp" + this.uuid
			}
			var inst = this._newInst($(target), inline);
			inst.settings = $.extend({}, settings || {}, inlineSettings || {});
			if (nodeName == "input") {
				this._connectDatepicker(target, inst)
			} else {
				if (inline) {
					this._inlineDatepicker(target, inst)
				}
			}
		},
		_newInst: function(target, inline) {
			var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
			return {
				id: id,
				input: target,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: inline,
				dpDiv: (!inline ? this.dpDiv : bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))
			}
		},
		_connectDatepicker: function(target, inst) {
			var input = $(target);
			inst.append = $([]);
			inst.trigger = $([]);
			if (input.hasClass(this.markerClassName)) {
				return
			}
			this._attachments(input, inst);
			input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(event, key, value) {
				inst.settings[key] = value
			}).bind("getData.datepicker", function(event, key) {
				return this._get(inst, key)
			});
			this._autoSize(inst);
			$.data(target, PROP_NAME, inst);
			if (inst.settings.disabled) {
				this._disableDatepicker(target)
			}
		},
		_attachments: function(input, inst) {
			var appendText = this._get(inst, "appendText");
			var isRTL = this._get(inst, "isRTL");
			if (inst.append) {
				inst.append.remove()
			}
			if (appendText) {
				inst.append = $('<span class="' + this._appendClass + '">' + appendText + "</span>");
				input[isRTL ? "before" : "after"](inst.append)
			}
			input.unbind("focus", this._showDatepicker);
			if (inst.trigger) {
				inst.trigger.remove()
			}
			var showOn = this._get(inst, "showOn");
			if (showOn == "focus" || showOn == "both") {
				input.focus(this._showDatepicker)
			}
			if (showOn == "button" || showOn == "both") {
				var buttonText = this._get(inst, "buttonText");
				var buttonImage = this._get(inst, "buttonImage");
				inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
					src: buttonImage,
					alt: buttonText,
					title: buttonText
				}) : $('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage == "" ? buttonText : $("<img/>").attr({
					src: buttonImage,
					alt: buttonText,
					title: buttonText
				})));
				input[isRTL ? "before" : "after"](inst.trigger);
				inst.trigger.click(function() {
					if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0]) {
						$.datepicker._hideDatepicker()
					} else {
						if ($.datepicker._datepickerShowing && $.datepicker._lastInput != input[0]) {
							$.datepicker._hideDatepicker();
							$.datepicker._showDatepicker(input[0])
						} else {
							$.datepicker._showDatepicker(input[0])
						}
					}
					return false
				})
			}
		},
		_autoSize: function(inst) {
			if (this._get(inst, "autoSize") && !inst.inline) {
				var date = new Date(2009, 12 - 1, 20);
				var dateFormat = this._get(inst, "dateFormat");
				if (dateFormat.match(/[DM]/)) {
					var findMax = function(names) {
							var max = 0;
							var maxI = 0;
							for (var i = 0; i < names.length; i++) {
								if (names[i].length > max) {
									max = names[i].length;
									maxI = i
								}
							}
							return maxI
						};
					date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort"))));
					date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - date.getDay())
				}
				inst.input.attr("size", this._formatDate(inst, date).length)
			}
		},
		_inlineDatepicker: function(target, inst) {
			var divSpan = $(target);
			if (divSpan.hasClass(this.markerClassName)) {
				return
			}
			divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker", function(event, key, value) {
				inst.settings[key] = value
			}).bind("getData.datepicker", function(event, key) {
				return this._get(inst, key)
			});
			$.data(target, PROP_NAME, inst);
			this._setDate(inst, this._getDefaultDate(inst), true);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
			if (inst.settings.disabled) {
				this._disableDatepicker(target)
			}
			inst.dpDiv.css("display", "block")
		},
		_dialogDatepicker: function(input, date, onSelect, settings, pos) {
			var inst = this._dialogInst;
			if (!inst) {
				this.uuid += 1;
				var id = "dp" + this.uuid;
				this._dialogInput = $('<input type="text" id="' + id + '" style="position: absolute; top: -100px; width: 0px;"/>');
				this._dialogInput.keydown(this._doKeyDown);
				$("body").append(this._dialogInput);
				inst = this._dialogInst = this._newInst(this._dialogInput, false);
				inst.settings = {};
				$.data(this._dialogInput[0], PROP_NAME, inst)
			}
			extendRemove(inst.settings, settings || {});
			date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
			this._dialogInput.val(date);
			this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
			if (!this._pos) {
				var browserWidth = document.documentElement.clientWidth;
				var browserHeight = document.documentElement.clientHeight;
				var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
				var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
				this._pos = [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY]
			}
			this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
			inst.settings.onSelect = onSelect;
			this._inDialog = true;
			this.dpDiv.addClass(this._dialogClass);
			this._showDatepicker(this._dialogInput[0]);
			if ($.blockUI) {
				$.blockUI(this.dpDiv)
			}
			$.data(this._dialogInput[0], PROP_NAME, inst);
			return this
		},
		_destroyDatepicker: function(target) {
			var $target = $(target);
			var inst = $.data(target, PROP_NAME);
			if (!$target.hasClass(this.markerClassName)) {
				return
			}
			var nodeName = target.nodeName.toLowerCase();
			$.removeData(target, PROP_NAME);
			if (nodeName == "input") {
				inst.append.remove();
				inst.trigger.remove();
				$target.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
			} else {
				if (nodeName == "div" || nodeName == "span") {
					$target.removeClass(this.markerClassName).empty()
				}
			}
		},
		_enableDatepicker: function(target) {
			var $target = $(target);
			var inst = $.data(target, PROP_NAME);
			if (!$target.hasClass(this.markerClassName)) {
				return
			}
			var nodeName = target.nodeName.toLowerCase();
			if (nodeName == "input") {
				target.disabled = false;
				inst.trigger.filter("button").each(function() {
					this.disabled = false
				}).end().filter("img").css({
					opacity: "1.0",
					cursor: ""
				})
			} else {
				if (nodeName == "div" || nodeName == "span") {
					var inline = $target.children("." + this._inlineClass);
					inline.children().removeClass("ui-state-disabled");
					inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
				}
			}
			this._disabledInputs = $.map(this._disabledInputs, function(value) {
				return (value == target ? null : value)
			})
		},
		_disableDatepicker: function(target) {
			var $target = $(target);
			var inst = $.data(target, PROP_NAME);
			if (!$target.hasClass(this.markerClassName)) {
				return
			}
			var nodeName = target.nodeName.toLowerCase();
			if (nodeName == "input") {
				target.disabled = true;
				inst.trigger.filter("button").each(function() {
					this.disabled = true
				}).end().filter("img").css({
					opacity: "0.5",
					cursor: "default"
				})
			} else {
				if (nodeName == "div" || nodeName == "span") {
					var inline = $target.children("." + this._inlineClass);
					inline.children().addClass("ui-state-disabled");
					inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
				}
			}
			this._disabledInputs = $.map(this._disabledInputs, function(value) {
				return (value == target ? null : value)
			});
			this._disabledInputs[this._disabledInputs.length] = target
		},
		_isDisabledDatepicker: function(target) {
			if (!target) {
				return false
			}
			for (var i = 0; i < this._disabledInputs.length; i++) {
				if (this._disabledInputs[i] == target) {
					return true
				}
			}
			return false
		},
		_getInst: function(target) {
			try {
				return $.data(target, PROP_NAME)
			} catch (err) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function(target, name, value) {
			var inst = this._getInst(target);
			if (arguments.length == 2 && typeof name == "string") {
				return (name == "defaults" ? $.extend({}, $.datepicker._defaults) : (inst ? (name == "all" ? $.extend({}, inst.settings) : this._get(inst, name)) : null))
			}
			var settings = name || {};
			if (typeof name == "string") {
				settings = {};
				settings[name] = value
			}
			if (inst) {
				if (this._curInst == inst) {
					this._hideDatepicker()
				}
				var date = this._getDateDatepicker(target, true);
				var minDate = this._getMinMaxDate(inst, "min");
				var maxDate = this._getMinMaxDate(inst, "max");
				extendRemove(inst.settings, settings);
				if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
					inst.settings.minDate = this._formatDate(inst, minDate)
				}
				if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
					inst.settings.maxDate = this._formatDate(inst, maxDate)
				}
				this._attachments($(target), inst);
				this._autoSize(inst);
				this._setDate(inst, date);
				this._updateAlternate(inst);
				this._updateDatepicker(inst)
			}
		},
		_changeDatepicker: function(target, name, value) {
			this._optionDatepicker(target, name, value)
		},
		_refreshDatepicker: function(target) {
			var inst = this._getInst(target);
			if (inst) {
				this._updateDatepicker(inst)
			}
		},
		_setDateDatepicker: function(target, date) {
			var inst = this._getInst(target);
			if (inst) {
				this._setDate(inst, date);
				this._updateDatepicker(inst);
				this._updateAlternate(inst)
			}
		},
		_getDateDatepicker: function(target, noDefault) {
			var inst = this._getInst(target);
			if (inst && !inst.inline) {
				this._setDateFromField(inst, noDefault)
			}
			return (inst ? this._getDate(inst) : null)
		},
		_doKeyDown: function(event) {
			var inst = $.datepicker._getInst(event.target);
			var handled = true;
			var isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
			inst._keyEvent = true;
			if ($.datepicker._datepickerShowing) {
				switch (event.keyCode) {
				case 9:
					$.datepicker._hideDatepicker();
					handled = false;
					break;
				case 13:
					var sel = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", inst.dpDiv);
					if (sel[0]) {
						$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0])
					}
					var onSelect = $.datepicker._get(inst, "onSelect");
					if (onSelect) {
						var dateStr = $.datepicker._formatDate(inst);
						onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst])
					} else {
						$.datepicker._hideDatepicker()
					}
					return false;
					break;
				case 27:
					$.datepicker._hideDatepicker();
					break;
				case 33:
					$.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M");
					break;
				case 34:
					$.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M");
					break;
				case 35:
					if (event.ctrlKey || event.metaKey) {
						$.datepicker._clearDate(event.target)
					}
					handled = event.ctrlKey || event.metaKey;
					break;
				case 36:
					if (event.ctrlKey || event.metaKey) {
						$.datepicker._gotoToday(event.target)
					}
					handled = event.ctrlKey || event.metaKey;
					break;
				case 37:
					if (event.ctrlKey || event.metaKey) {
						$.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D")
					}
					handled = event.ctrlKey || event.metaKey;
					if (event.originalEvent.altKey) {
						$.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M")
					}
					break;
				case 38:
					if (event.ctrlKey || event.metaKey) {
						$.datepicker._adjustDate(event.target, -7, "D")
					}
					handled = event.ctrlKey || event.metaKey;
					break;
				case 39:
					if (event.ctrlKey || event.metaKey) {
						$.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D")
					}
					handled = event.ctrlKey || event.metaKey;
					if (event.originalEvent.altKey) {
						$.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M")
					}
					break;
				case 40:
					if (event.ctrlKey || event.metaKey) {
						$.datepicker._adjustDate(event.target, +7, "D")
					}
					handled = event.ctrlKey || event.metaKey;
					break;
				default:
					handled = false
				}
			} else {
				if (event.keyCode == 36 && event.ctrlKey) {
					$.datepicker._showDatepicker(this)
				} else {
					handled = false
				}
			}
			if (handled) {
				event.preventDefault();
				event.stopPropagation()
			}
		},
		_doKeyPress: function(event) {
			var inst = $.datepicker._getInst(event.target);
			if ($.datepicker._get(inst, "constrainInput")) {
				var chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
				var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
				return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1)
			}
		},
		_doKeyUp: function(event) {
			var inst = $.datepicker._getInst(event.target);
			if (inst.input.val() != inst.lastVal) {
				try {
					var date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), (inst.input ? inst.input.val() : null), $.datepicker._getFormatConfig(inst));
					if (date) {
						$.datepicker._setDateFromField(inst);
						$.datepicker._updateAlternate(inst);
						$.datepicker._updateDatepicker(inst)
					}
				} catch (err) {
					$.datepicker.log(err)
				}
			}
			return true
		},
		_showDatepicker: function(input) {
			input = input.target || input;
			if (input.nodeName.toLowerCase() != "input") {
				input = $("input", input.parentNode)[0]
			}
			if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) {
				return
			}
			var inst = $.datepicker._getInst(input);
			if ($.datepicker._curInst && $.datepicker._curInst != inst) {
				$.datepicker._curInst.dpDiv.stop(true, true);
				if (inst && $.datepicker._datepickerShowing) {
					$.datepicker._hideDatepicker($.datepicker._curInst.input[0])
				}
			}
			var beforeShow = $.datepicker._get(inst, "beforeShow");
			var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
			if (beforeShowSettings === false) {
				return
			}
			extendRemove(inst.settings, beforeShowSettings);
			inst.lastVal = null;
			$.datepicker._lastInput = input;
			$.datepicker._setDateFromField(inst);
			if ($.datepicker._inDialog) {
				input.value = ""
			}
			if (!$.datepicker._pos) {
				$.datepicker._pos = $.datepicker._findPos(input);
				$.datepicker._pos[1] += input.offsetHeight
			}
			var isFixed = false;
			$(input).parents().each(function() {
				isFixed |= $(this).css("position") == "fixed";
				return !isFixed
			});
			if (isFixed && $.browser.opera) {
				$.datepicker._pos[0] -= document.documentElement.scrollLeft;
				$.datepicker._pos[1] -= document.documentElement.scrollTop
			}
			var offset = {
				left: $.datepicker._pos[0],
				top: $.datepicker._pos[1]
			};
			$.datepicker._pos = null;
			inst.dpDiv.empty();
			inst.dpDiv.css({
				position: "absolute",
				display: "block",
				top: "-1000px"
			});
			$.datepicker._updateDatepicker(inst);
			offset = $.datepicker._checkOffset(inst, offset, isFixed);
			inst.dpDiv.css({
				position: ($.datepicker._inDialog && $.blockUI ? "static" : (isFixed ? "fixed" : "absolute")),
				display: "none",
				left: offset.left + "px",
				top: offset.top + "px"
			});
			if (!inst.inline) {
				var showAnim = $.datepicker._get(inst, "showAnim");
				var duration = $.datepicker._get(inst, "duration");
				var postProcess = function() {
						var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
						if ( !! cover.length) {
							var borders = $.datepicker._getBorders(inst.dpDiv);
							cover.css({
								left: -borders[0],
								top: -borders[1],
								width: inst.dpDiv.outerWidth(),
								height: inst.dpDiv.outerHeight()
							})
						}
					};
				inst.dpDiv.zIndex($(input).zIndex() + 1);
				$.datepicker._datepickerShowing = true;
				if ($.effects && $.effects[showAnim]) {
					inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess)
				} else {
					inst.dpDiv[showAnim || "show"]((showAnim ? duration : null), postProcess)
				}
				if (!showAnim || !duration) {
					postProcess()
				}
				if (inst.input.is(":visible") && !inst.input.is(":disabled")) {
					inst.input.focus()
				}
				$.datepicker._curInst = inst
			}
		},
		_updateDatepicker: function(inst) {
			var self = this;
			self.maxRows = 4;
			var borders = $.datepicker._getBorders(inst.dpDiv);
			instActive = inst;
			inst.dpDiv.empty().append(this._generateHTML(inst));
			this._attachHandlers(inst);
			var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
			if ( !! cover.length) {
				cover.css({
					left: -borders[0],
					top: -borders[1],
					width: inst.dpDiv.outerWidth(),
					height: inst.dpDiv.outerHeight()
				})
			}
			inst.dpDiv.find("." + this._dayOverClass + " a").mouseover();
			var numMonths = this._getNumberOfMonths(inst);
			var cols = numMonths[1];
			var width = 17;
			inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
			if (cols > 1) {
				inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em")
			}
			inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
			inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
			if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && inst.input[0] != document.activeElement) {
				inst.input.focus()
			}
			if (inst.yearshtml) {
				var origyearshtml = inst.yearshtml;
				setTimeout(function() {
					if (origyearshtml === inst.yearshtml && inst.yearshtml) {
						inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)
					}
					origyearshtml = inst.yearshtml = null
				}, 0)
			}
		},
		_getBorders: function(elem) {
			var convert = function(value) {
					return {
						thin: 1,
						medium: 2,
						thick: 3
					}[value] || value
				};
			return [parseFloat(convert(elem.css("border-left-width"))), parseFloat(convert(elem.css("border-top-width")))]
		},
		_checkOffset: function(inst, offset, isFixed) {
			var dpWidth = inst.dpDiv.outerWidth();
			var dpHeight = inst.dpDiv.outerHeight();
			var inputWidth = inst.input ? inst.input.outerWidth() : 0;
			var inputHeight = inst.input ? inst.input.outerHeight() : 0;
			var viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft());
			var viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());
			offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
			offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
			offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;
			offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
			offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ? Math.abs(dpHeight + inputHeight) : 0);
			return offset
		},
		_findPos: function(obj) {
			var inst = this._getInst(obj);
			var isRTL = this._get(inst, "isRTL");
			while (obj && (obj.type == "hidden" || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
				obj = obj[isRTL ? "previousSibling" : "nextSibling"]
			}
			var position = $(obj).offset();
			return [position.left, position.top]
		},
		_hideDatepicker: function(input) {
			var inst = this._curInst;
			if (!inst || (input && inst != $.data(input, PROP_NAME))) {
				return
			}
			if (this._datepickerShowing) {
				var showAnim = this._get(inst, "showAnim");
				var duration = this._get(inst, "duration");
				var postProcess = function() {
						$.datepicker._tidyDialog(inst)
					};
				if ($.effects && $.effects[showAnim]) {
					inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess)
				} else {
					inst.dpDiv[(showAnim == "slideDown" ? "slideUp" : (showAnim == "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess)
				}
				if (!showAnim) {
					postProcess()
				}
				this._datepickerShowing = false;
				var onClose = this._get(inst, "onClose");
				if (onClose) {
					onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst])
				}
				this._lastInput = null;
				if (this._inDialog) {
					this._dialogInput.css({
						position: "absolute",
						left: "0",
						top: "-100px"
					});
					if ($.blockUI) {
						$.unblockUI();
						$("body").append(this.dpDiv)
					}
				}
				this._inDialog = false
			}
		},
		_tidyDialog: function(inst) {
			inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function(event) {
			if (!$.datepicker._curInst) {
				return
			}
			var $target = $(event.target),
				inst = $.datepicker._getInst($target[0]);
			if ((($target[0].id != $.datepicker._mainDivId && $target.parents("#" + $.datepicker._mainDivId).length == 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))) || ($target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != inst)) {
				$.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function(id, offset, period) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			if (this._isDisabledDatepicker(target[0])) {
				return
			}
			this._adjustInstDate(inst, offset + (period == "M" ? this._get(inst, "showCurrentAtPos") : 0), period);
			this._updateDatepicker(inst)
		},
		_gotoToday: function(id) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			if (this._get(inst, "gotoCurrent") && inst.currentDay) {
				inst.selectedDay = inst.currentDay;
				inst.drawMonth = inst.selectedMonth = inst.currentMonth;
				inst.drawYear = inst.selectedYear = inst.currentYear
			} else {
				var date = new Date();
				inst.selectedDay = date.getDate();
				inst.drawMonth = inst.selectedMonth = date.getMonth();
				inst.drawYear = inst.selectedYear = date.getFullYear()
			}
			this._notifyChange(inst);
			this._adjustDate(target)
		},
		_selectMonthYear: function(id, select, period) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			inst["selected" + (period == "M" ? "Month" : "Year")] = inst["draw" + (period == "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);
			this._notifyChange(inst);
			this._adjustDate(target)
		},
		_selectDay: function(id, month, year, td) {
			var target = $(id);
			if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
				return
			}
			var inst = this._getInst(target[0]);
			inst.selectedDay = inst.currentDay = $("a", td).html();
			inst.selectedMonth = inst.currentMonth = month;
			inst.selectedYear = inst.currentYear = year;
			this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear))
		},
		_clearDate: function(id) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			this._selectDate(target, "")
		},
		_selectDate: function(id, dateStr) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
			if (inst.input) {
				inst.input.val(dateStr)
			}
			this._updateAlternate(inst);
			var onSelect = this._get(inst, "onSelect");
			if (onSelect) {
				onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst])
			} else {
				if (inst.input) {
					inst.input.trigger("change")
				}
			}
			if (inst.inline) {
				this._updateDatepicker(inst)
			} else {
				this._hideDatepicker();
				this._lastInput = inst.input[0];
				if (typeof(inst.input[0]) != "object") {
					inst.input.focus()
				}
				this._lastInput = null
			}
		},
		_updateAlternate: function(inst) {
			var altField = this._get(inst, "altField");
			if (altField) {
				var altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
				var date = this._getDate(inst);
				var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
				$(altField).each(function() {
					$(this).val(dateStr)
				})
			}
		},
		noWeekends: function(date) {
			var day = date.getDay();
			return [(day > 0 && day < 6), ""]
		},
		iso8601Week: function(date) {
			var checkDate = new Date(date.getTime());
			checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
			var time = checkDate.getTime();
			checkDate.setMonth(0);
			checkDate.setDate(1);
			return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1
		},
		parseDate: function(format, value, settings) {
			if (format == null || value == null) {
				throw "Invalid arguments"
			}
			value = (typeof value == "object" ? value.toString() : value + "");
			if (value == "") {
				return null
			}
			var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
			shortYearCutoff = (typeof shortYearCutoff != "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
			var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
			var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
			var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
			var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
			var year = -1;
			var month = -1;
			var day = -1;
			var doy = -1;
			var literal = false;
			var lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
					if (matches) {
						iFormat++
					}
					return matches
				};
			var getNumber = function(match) {
					var isDoubled = lookAhead(match);
					var size = (match == "@" ? 14 : (match == "!" ? 20 : (match == "y" && isDoubled ? 4 : (match == "o" ? 3 : 2))));
					var digits = new RegExp("^\\d{1," + size + "}");
					var num = value.substring(iValue).match(digits);
					if (!num) {
						throw "Missing number at position " + iValue
					}
					iValue += num[0].length;
					return parseInt(num[0], 10)
				};
			var getName = function(match, shortNames, longNames) {
					var names = $.map(lookAhead(match) ? longNames : shortNames, function(v, k) {
						return [[k, v]]
					}).sort(function(a, b) {
						return -(a[1].length - b[1].length)
					});
					var index = -1;
					$.each(names, function(i, pair) {
						var name = pair[1];
						if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
							index = pair[0];
							iValue += name.length;
							return false
						}
					});
					if (index != -1) {
						return index + 1
					} else {
						throw "Unknown name at position " + iValue
					}
				};
			var checkLiteral = function() {
					if (value.charAt(iValue) != format.charAt(iFormat)) {
						throw "Unexpected literal at position " + iValue
					}
					iValue++
				};
			var iValue = 0;
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
						literal = false
					} else {
						checkLiteral()
					}
				} else {
					switch (format.charAt(iFormat)) {
					case "d":
						day = getNumber("d");
						break;
					case "D":
						getName("D", dayNamesShort, dayNames);
						break;
					case "o":
						doy = getNumber("o");
						break;
					case "m":
						month = getNumber("m");
						break;
					case "M":
						month = getName("M", monthNamesShort, monthNames);
						break;
					case "y":
						year = getNumber("y");
						break;
					case "@":
						var date = new Date(getNumber("@"));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "!":
						var date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'")) {
							checkLiteral()
						} else {
							literal = true
						}
						break;
					default:
						checkLiteral()
					}
				}
			}
			if (iValue < value.length) {
				throw "Extra/unparsed characters found in date: " + value.substring(iValue)
			}
			if (year == -1) {
				year = new Date().getFullYear()
			} else {
				if (year < 100) {
					year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100)
				}
			}
			if (doy > -1) {
				month = 1;
				day = doy;
				do {
					var dim = this._getDaysInMonth(year, month - 1);
					if (day <= dim) {
						break
					}
					month++;
					day -= dim
				} while (true)
			}
			var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
			if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day) {
				throw "Invalid date"
			}
			return date
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
		formatDate: function(format, date, settings) {
			if (!date) {
				return ""
			}
			var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
			var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
			var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
			var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
			var lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
					if (matches) {
						iFormat++
					}
					return matches
				};
			var formatNumber = function(match, value, len) {
					var num = "" + value;
					if (lookAhead(match)) {
						while (num.length < len) {
							num = "0" + num
						}
					}
					return num
				};
			var formatName = function(match, value, shortNames, longNames) {
					return (lookAhead(match) ? longNames[value] : shortNames[value])
				};
			var output = "";
			var literal = false;
			if (date) {
				for (var iFormat = 0; iFormat < format.length; iFormat++) {
					if (literal) {
						if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
							literal = false
						} else {
							output += format.charAt(iFormat)
						}
					} else {
						switch (format.charAt(iFormat)) {
						case "d":
							output += formatNumber("d", date.getDate(), 2);
							break;
						case "D":
							output += formatName("D", date.getDay(), dayNamesShort, dayNames);
							break;
						case "o":
							output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
							break;
						case "m":
							output += formatNumber("m", date.getMonth() + 1, 2);
							break;
						case "M":
							output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
							break;
						case "y":
							output += (lookAhead("y") ? date.getFullYear() : (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
							break;
						case "@":
							output += date.getTime();
							break;
						case "!":
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'")) {
								output += "'"
							} else {
								literal = true
							}
							break;
						default:
							output += format.charAt(iFormat)
						}
					}
				}
			}
			return output
		},
		_possibleChars: function(format) {
			var chars = "";
			var literal = false;
			var lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
					if (matches) {
						iFormat++
					}
					return matches
				};
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
						literal = false
					} else {
						chars += format.charAt(iFormat)
					}
				} else {
					switch (format.charAt(iFormat)) {
					case "d":
					case "m":
					case "y":
					case "@":
						chars += "0123456789";
						break;
					case "D":
					case "M":
						return null;
					case "'":
						if (lookAhead("'")) {
							chars += "'"
						} else {
							literal = true
						}
						break;
					default:
						chars += format.charAt(iFormat)
					}
				}
			}
			return chars
		},
		_get: function(inst, name) {
			return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name]
		},
		_setDateFromField: function(inst, noDefault) {
			if (inst.input.val() == inst.lastVal) {
				return
			}
			var dateFormat = this._get(inst, "dateFormat");
			var dates = inst.lastVal = inst.input ? inst.input.val() : null;
			var date, defaultDate;
			date = defaultDate = this._getDefaultDate(inst);
			var settings = this._getFormatConfig(inst);
			try {
				date = this.parseDate(dateFormat, dates, settings) || defaultDate
			} catch (event) {
				this.log(event);
				dates = (noDefault ? "" : dates)
			}
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			inst.currentDay = (dates ? date.getDate() : 0);
			inst.currentMonth = (dates ? date.getMonth() : 0);
			inst.currentYear = (dates ? date.getFullYear() : 0);
			this._adjustInstDate(inst)
		},
		_getDefaultDate: function(inst) {
			return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date()))
		},
		_determineDate: function(inst, date, defaultDate) {
			var offsetNumeric = function(offset) {
					var date = new Date();
					date.setDate(date.getDate() + offset);
					return date
				};
			var offsetString = function(offset) {
					try {
						return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst))
					} catch (e) {}
					var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date();
					var year = date.getFullYear();
					var month = date.getMonth();
					var day = date.getDate();
					var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
					var matches = pattern.exec(offset);
					while (matches) {
						switch (matches[2] || "d") {
						case "d":
						case "D":
							day += parseInt(matches[1], 10);
							break;
						case "w":
						case "W":
							day += parseInt(matches[1], 10) * 7;
							break;
						case "m":
						case "M":
							month += parseInt(matches[1], 10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
						case "y":
						case "Y":
							year += parseInt(matches[1], 10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break
						}
						matches = pattern.exec(offset)
					}
					return new Date(year, month, day)
				};
			var newDate = (date == null || date === "" ? defaultDate : (typeof date == "string" ? offsetString(date) : (typeof date == "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
			newDate = (newDate && newDate.toString() == "Invalid Date" ? defaultDate : newDate);
			if (newDate) {
				newDate.setHours(0);
				newDate.setMinutes(0);
				newDate.setSeconds(0);
				newDate.setMilliseconds(0)
			}
			return this._daylightSavingAdjust(newDate)
		},
		_daylightSavingAdjust: function(date) {
			if (!date) {
				return null
			}
			date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
			return date
		},
		_setDate: function(inst, date, noChange) {
			var clear = !date;
			var origMonth = inst.selectedMonth;
			var origYear = inst.selectedYear;
			var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
			inst.selectedDay = inst.currentDay = newDate.getDate();
			inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
			inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
			if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange) {
				this._notifyChange(inst)
			}
			this._adjustInstDate(inst);
			if (inst.input) {
				inst.input.val(clear ? "" : this._formatDate(inst))
			}
		},
		_getDate: function(inst) {
			var startDate = (!inst.currentYear || (inst.input && inst.input.val() == "") ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate
		},
		_attachHandlers: function(inst) {
			var stepMonths = this._get(inst, "stepMonths");
			var id = "#" + inst.id.replace(/\\\\/g, "\\");
			inst.dpDiv.find("[data-handler]").map(function() {
				var handler = {
					prev: function() {
						window["DP_jQuery_" + dpuuid].datepicker._adjustDate(id, -stepMonths, "M")
					},
					next: function() {
						window["DP_jQuery_" + dpuuid].datepicker._adjustDate(id, +stepMonths, "M")
					},
					hide: function() {
						window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
					},
					today: function() {
						window["DP_jQuery_" + dpuuid].datepicker._gotoToday(id)
					},
					selectDay: function() {
						window["DP_jQuery_" + dpuuid].datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
						return false
					},
					selectMonth: function() {
						window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(id, this, "M");
						return false
					},
					selectYear: function() {
						window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(id, this, "Y");
						return false
					}
				};
				$(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function(inst) {
			var today = new Date();
			today = this._daylightSavingAdjust(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
			var isRTL = this._get(inst, "isRTL");
			var showButtonPanel = this._get(inst, "showButtonPanel");
			var hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext");
			var navigationAsDateFormat = this._get(inst, "navigationAsDateFormat");
			var numMonths = this._getNumberOfMonths(inst);
			var showCurrentAtPos = this._get(inst, "showCurrentAtPos");
			var stepMonths = this._get(inst, "stepMonths");
			var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
			var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
			var minDate = this._getMinMaxDate(inst, "min");
			var maxDate = this._getMinMaxDate(inst, "max");
			var drawMonth = inst.drawMonth - showCurrentAtPos;
			var drawYear = inst.drawYear;
			if (drawMonth < 0) {
				drawMonth += 12;
				drawYear--
			}
			if (maxDate) {
				var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
				maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
				while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
					drawMonth--;
					if (drawMonth < 0) {
						drawMonth = 11;
						drawYear--
					}
				}
			}
			inst.drawMonth = drawMonth;
			inst.drawYear = drawYear;
			var prevText = this._get(inst, "prevText");
			prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst)));
			var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>"));
			var nextText = this._get(inst, "nextText");
			nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst)));
			var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>"));
			var currentText = this._get(inst, "currentText");
			var gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
			currentText = (!navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
			var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(inst, "closeText") + "</button>" : "");
			var otherButton = this._get(inst, "otherButton");
			var otherButtonHtml = (typeof(otherButton) == "undefined") ? "" : '<button type="button" id="' + otherButton.id + '" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="' + (otherButton.clickHide == true ? "hide" : "") + '" data-event="click">' + otherButton.text + "</button>";
			var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + currentText + "</button>" : "") + otherButtonHtml + (isRTL ? "" : controls) + "</div>" : "";
			var firstDay = parseInt(this._get(inst, "firstDay"), 10);
			firstDay = (isNaN(firstDay) ? 0 : firstDay);
			var showWeek = this._get(inst, "showWeek");
			var dayNames = this._get(inst, "dayNames");
			var dayNamesShort = this._get(inst, "dayNamesShort");
			var dayNamesMin = this._get(inst, "dayNamesMin");
			var monthNames = this._get(inst, "monthNames");
			var monthNamesShort = this._get(inst, "monthNamesShort");
			var beforeShowDay = this._get(inst, "beforeShowDay");
			var showOtherMonths = this._get(inst, "showOtherMonths");
			var selectOtherMonths = this._get(inst, "selectOtherMonths");
			var calculateWeek = this._get(inst, "calculateWeek") || this.iso8601Week;
			var defaultDate = this._getDefaultDate(inst);
			var html = "";
			for (var row = 0; row < numMonths[0]; row++) {
				var group = "";
				this.maxRows = 4;
				for (var col = 0; col < numMonths[1]; col++) {
					var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
					var cornerClass = " ui-corner-all";
					var calender = "";
					if (isMultiMonth) {
						calender += '<div class="ui-datepicker-group';
						if (numMonths[1] > 1) {
							switch (col) {
							case 0:
								calender += " ui-datepicker-group-first";
								cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
								break;
							case numMonths[1] - 1:
								calender += " ui-datepicker-group-last";
								cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
								break;
							default:
								calender += " ui-datepicker-group-middle";
								cornerClass = "";
								break
							}
						}
						calender += '">'
					}
					calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' + (/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : "") + (/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
					var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, "weekHeader") + "</th>" : "");
					for (var dow = 0; dow < 7; dow++) {
						var day = (dow + firstDay) % 7;
						thead += "<th" + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + dayNames[day] + '">' + dayNamesMin[day] + "</span></th>"
					}
					calender += thead + "</tr></thead><tbody>";
					var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
					if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth) {
						inst.selectedDay = Math.min(inst.selectedDay, daysInMonth)
					}
					var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
					var curRows = Math.ceil((leadDays + daysInMonth) / 7);
					var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows);
					this.maxRows = numRows;
					var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
					for (var dRow = 0; dRow < numRows; dRow++) {
						calender += "<tr>";
						var tbody = (!showWeek ? "" : '<td class="ui-datepicker-week-col">' + this._get(inst, "calculateWeek")(printDate) + "</td>");
						for (var dow = 0; dow < 7; dow++) {
							var daySettings = (beforeShowDay ? beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
							var otherMonth = (printDate.getMonth() != drawMonth);
							var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] || (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
							tbody += '<td class="' + ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (otherMonth ? " ui-datepicker-other-month" : "") + ((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || (defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ? " " + this._dayOverClass : "") + (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + (printDate.getTime() == currentDate.getTime() ? " " + this._currentClass : "") + (printDate.getTime() == today.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : "") + (unselectable ? "" : ' data-handler="selectDay" data-event="click" data-month="' + printDate.getMonth() + '" data-year="' + printDate.getFullYear() + '"') + ">" + (otherMonth && !showOtherMonths ? "&#xa0;" : (unselectable ? '<span class="ui-state-default">' + printDate.getDate() + "</span>" : '<a class="ui-state-default' + (printDate.getTime() == today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() == currentDate.getTime() ? " ui-state-active" : "") + (otherMonth ? " ui-priority-secondary" : "") + '" href="#">' + printDate.getDate() + "</a>")) + "</td>";
							printDate.setDate(printDate.getDate() + 1);
							printDate = this._daylightSavingAdjust(printDate)
						}
						calender += tbody + "</tr>"
					}
					drawMonth++;
					if (drawMonth > 11) {
						drawMonth = 0;
						drawYear++
					}
					calender += "</tbody></table>" + (isMultiMonth ? "</div>" + ((numMonths[0] > 0 && col == numMonths[1] - 1) ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
					group += calender
				}
				html += group
			}
			html += buttonPanel + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !inst.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "");
			inst._keyEvent = false;
			return html
		},
		_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
			var changeMonth = this._get(inst, "changeMonth");
			var changeYear = this._get(inst, "changeYear");
			var showMonthAfterYear = this._get(inst, "showMonthAfterYear");
			var html = '<div class="ui-datepicker-title">';
			var monthHtml = "";
			if (secondary || !changeMonth) {
				monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + "</span>"
			} else {
				var inMinYear = (minDate && minDate.getFullYear() == drawYear);
				var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
				monthHtml += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
				for (var month = 0; month < 12; month++) {
					if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
						monthHtml += '<option value="' + month + '"' + (month == drawMonth ? ' selected="selected"' : "") + ">" + monthNamesShort[month] + "</option>"
					}
				}
				monthHtml += "</select>"
			}
			if (!showMonthAfterYear) {
				html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "")
			}
			if (!inst.yearshtml) {
				inst.yearshtml = "";
				if (secondary || !changeYear) {
					html += '<span class="ui-datepicker-year">' + drawYear + "</span>"
				} else {
					var years = this._get(inst, "yearRange").split(":");
					var thisYear = new Date().getFullYear();
					var determineYear = function(value) {
							var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) : (value.match(/[+-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10)));
							return (isNaN(year) ? thisYear : year)
						};
					var year = determineYear(years[0]);
					var endYear = Math.max(year, determineYear(years[1] || ""));
					year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
					endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
					inst.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
					for (; year <= endYear; year++) {
						inst.yearshtml += '<option value="' + year + '"' + (year == drawYear ? ' selected="selected"' : "") + ">" + year + "</option>"
					}
					inst.yearshtml += "</select>";
					html += inst.yearshtml;
					inst.yearshtml = null
				}
			}
			html += this._get(inst, "yearSuffix");
			if (showMonthAfterYear) {
				html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml
			}
			html += "</div>";
			return html
		},
		_adjustInstDate: function(inst, offset, period) {
			var year = inst.drawYear + (period == "Y" ? offset : 0);
			var month = inst.drawMonth + (period == "M" ? offset : 0);
			var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period == "D" ? offset : 0);
			var date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			if (period == "M" || period == "Y") {
				this._notifyChange(inst)
			}
		},
		_restrictMinMax: function(inst, date) {
			var minDate = this._getMinMaxDate(inst, "min");
			var maxDate = this._getMinMaxDate(inst, "max");
			var newDate = (minDate && date < minDate ? minDate : date);
			newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
			return newDate
		},
		_notifyChange: function(inst) {
			var onChange = this._get(inst, "onChangeMonthYear");
			if (onChange) {
				onChange.apply((inst.input ? inst.input[0] : null), [inst.selectedYear, inst.selectedMonth + 1, inst])
			}
		},
		_getNumberOfMonths: function(inst) {
			var numMonths = this._get(inst, "numberOfMonths");
			return (numMonths == null ? [1, 1] : (typeof numMonths == "number" ? [1, numMonths] : numMonths))
		},
		_getMinMaxDate: function(inst, minMax) {
			return this._determineDate(inst, this._get(inst, minMax + "Date"), null)
		},
		_getDaysInMonth: function(year, month) {
			return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate()
		},
		_getFirstDayOfMonth: function(year, month) {
			return new Date(year, month, 1).getDay()
		},
		_canAdjustMonth: function(inst, offset, curYear, curMonth) {
			var numMonths = this._getNumberOfMonths(inst);
			var date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
			if (offset < 0) {
				date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()))
			}
			return this._isInRange(inst, date)
		},
		_isInRange: function(inst, date) {
			var minDate = this._getMinMaxDate(inst, "min");
			var maxDate = this._getMinMaxDate(inst, "max");
			return ((!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()))
		},
		_getFormatConfig: function(inst) {
			var shortYearCutoff = this._get(inst, "shortYearCutoff");
			shortYearCutoff = (typeof shortYearCutoff != "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
			return {
				shortYearCutoff: shortYearCutoff,
				dayNamesShort: this._get(inst, "dayNamesShort"),
				dayNames: this._get(inst, "dayNames"),
				monthNamesShort: this._get(inst, "monthNamesShort"),
				monthNames: this._get(inst, "monthNames")
			}
		},
		_formatDate: function(inst, day, month, year) {
			if (!day) {
				inst.currentDay = inst.selectedDay;
				inst.currentMonth = inst.selectedMonth;
				inst.currentYear = inst.selectedYear
			}
			var date = (day ? (typeof day == "object" ? day : this._daylightSavingAdjust(new Date(year, month, day))) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
			return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst))
		}
	});

	function bindHover(dpDiv) {
		var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return dpDiv.bind("mouseout", function(event) {
			var elem = $(event.target).closest(selector);
			if (!elem.length) {
				return
			}
			elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
		}).bind("mouseover", function(event) {
			var elem = $(event.target).closest(selector);
			if ($.datepicker._isDisabledDatepicker(instActive.inline ? dpDiv.parent()[0] : instActive.input[0]) || !elem.length) {
				return
			}
			elem.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
			elem.addClass("ui-state-hover");
			if (elem.hasClass("ui-datepicker-prev")) {
				elem.addClass("ui-datepicker-prev-hover")
			}
			if (elem.hasClass("ui-datepicker-next")) {
				elem.addClass("ui-datepicker-next-hover")
			}
		})
	}

	function extendRemove(target, props) {
		$.extend(target, props);
		for (var name in props) {
			if (props[name] == null || props[name] == undefined) {
				target[name] = props[name]
			}
		}
		return target
	}

	function isArray(a) {
		return (a && (($.browser.safari && typeof a == "object" && a.length) || (a.constructor && a.constructor.toString().match(/\Array\(\)/))))
	}
	$.fn.datepicker = function(options) {
		if (!this.length) {
			return this
		}
		if (!$.datepicker.initialized) {
			$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);
			$.datepicker.initialized = true
		}
		var otherArgs = Array.prototype.slice.call(arguments, 1);
		if (typeof options == "string" && (options == "isDisabled" || options == "getDate" || options == "widget")) {
			return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs))
		}
		if (options == "option" && arguments.length == 2 && typeof arguments[1] == "string") {
			return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs))
		}
		return this.each(function() {
			typeof options == "string" ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options)
		})
	};
	$.datepicker = new Datepicker();
	$.datepicker.initialized = false;
	$.datepicker.uuid = new Date().getTime();
	$.datepicker.version = "@VERSION";
	window["DP_jQuery_" + dpuuid] = $
})(jQuery);
jQuery(function(a) {
	a.datepicker.regional["zh-CN"] = {
		closeText: "关闭",
		prevText: "&#x3c;上月",
		nextText: "下月&#x3e;",
		currentText: "今天",
		monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
		dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
		dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
		weekHeader: "周",
		dateFormat: "yy-mm-dd",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "年"
	};
	a.datepicker.setDefaults(a.datepicker.regional["zh-CN"])
});
(function(a, b) {
	a.widget("ui.droppable", {
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: false,
			addClasses: true,
			greedy: false,
			hoverClass: false,
			scope: "default",
			tolerance: "intersect"
		},
		_create: function() {
			var d = this.options,
				c = d.accept;
			this.isover = 0;
			this.isout = 1;
			this.accept = a.isFunction(c) ? c : function(e) {
				return e.is(c)
			};
			this.proportions = {
				width: this.element[0].offsetWidth,
				height: this.element[0].offsetHeight
			};
			a.ui.ddmanager.droppables[d.scope] = a.ui.ddmanager.droppables[d.scope] || [];
			a.ui.ddmanager.droppables[d.scope].push(this);
			(d.addClasses && this.element.addClass("ui-droppable"))
		},
		destroy: function() {
			var c = a.ui.ddmanager.droppables[this.options.scope];
			for (var d = 0; d < c.length; d++) {
				if (c[d] == this) {
					c.splice(d, 1)
				}
			}
			this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
			return this
		},
		_setOption: function(c, d) {
			if (c == "accept") {
				this.accept = a.isFunction(d) ? d : function(e) {
					return e.is(d)
				}
			}
			a.Widget.prototype._setOption.apply(this, arguments)
		},
		_activate: function(d) {
			var c = a.ui.ddmanager.current;
			if (this.options.activeClass) {
				this.element.addClass(this.options.activeClass)
			}(c && this._trigger("activate", d, this.ui(c)))
		},
		_deactivate: function(d) {
			var c = a.ui.ddmanager.current;
			if (this.options.activeClass) {
				this.element.removeClass(this.options.activeClass)
			}(c && this._trigger("deactivate", d, this.ui(c)))
		},
		_over: function(d) {
			var c = a.ui.ddmanager.current;
			if (!c || (c.currentItem || c.element)[0] == this.element[0]) {
				return
			}
			if (this.accept.call(this.element[0], (c.currentItem || c.element))) {
				if (this.options.hoverClass) {
					this.element.addClass(this.options.hoverClass)
				}
				this._trigger("over", d, this.ui(c))
			}
		},
		_out: function(d) {
			var c = a.ui.ddmanager.current;
			if (!c || (c.currentItem || c.element)[0] == this.element[0]) {
				return
			}
			if (this.accept.call(this.element[0], (c.currentItem || c.element))) {
				if (this.options.hoverClass) {
					this.element.removeClass(this.options.hoverClass)
				}
				this._trigger("out", d, this.ui(c))
			}
		},
		_drop: function(d, e) {
			var c = e || a.ui.ddmanager.current;
			if (!c || (c.currentItem || c.element)[0] == this.element[0]) {
				return false
			}
			var f = false;
			this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
				var g = a.data(this, "droppable");
				if (g.options.greedy && !g.options.disabled && g.options.scope == c.options.scope && g.accept.call(g.element[0], (c.currentItem || c.element)) && a.ui.intersect(c, a.extend(g, {
					offset: g.element.offset()
				}), g.options.tolerance)) {
					f = true;
					return false
				}
			});
			if (f) {
				return false
			}
			if (this.accept.call(this.element[0], (c.currentItem || c.element))) {
				if (this.options.activeClass) {
					this.element.removeClass(this.options.activeClass)
				}
				if (this.options.hoverClass) {
					this.element.removeClass(this.options.hoverClass)
				}
				this._trigger("drop", d, this.ui(c));
				return this.element
			}
			return false
		},
		ui: function(d) {
			return {
				draggable: (d.currentItem || d.element),
				helper: d.helper,
				position: d.position,
				offset: d.positionAbs
			}
		}
	});
	a.extend(a.ui.droppable, {
		version: "@VERSION"
	});
	a.ui.intersect = function(q, j, o) {
		if (!j.offset) {
			return false
		}
		var e = (q.positionAbs || q.position.absolute).left,
			d = e + q.helperProportions.width,
			n = (q.positionAbs || q.position.absolute).top,
			m = n + q.helperProportions.height;
		var g = j.offset.left,
			c = g + j.proportions.width,
			p = j.offset.top,
			k = p + j.proportions.height;
		switch (o) {
		case "fit":
			return (g <= e && d <= c && p <= n && m <= k);
			break;
		case "intersect":
			return (g < e + (q.helperProportions.width / 2) && d - (q.helperProportions.width / 2) < c && p < n + (q.helperProportions.height / 2) && m - (q.helperProportions.height / 2) < k);
			break;
		case "pointer":
			var h = ((q.positionAbs || q.position.absolute).left + (q.clickOffset || q.offset.click).left),
				i = ((q.positionAbs || q.position.absolute).top + (q.clickOffset || q.offset.click).top),
				f = a.ui.isOver(i, h, p, g, j.proportions.height, j.proportions.width);
			return f;
			break;
		case "touch":
			return ((n >= p && n <= k) || (m >= p && m <= k) || (n < p && m > k)) && ((e >= g && e <= c) || (d >= g && d <= c) || (e < g && d > c));
			break;
		default:
			return false;
			break
		}
	};
	a.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function(f, h) {
			var c = a.ui.ddmanager.droppables[f.options.scope] || [];
			var g = h ? h.type : null;
			var k = (f.currentItem || f.element).find(":data(droppable)").andSelf();
			droppablesLoop: for (var e = 0; e < c.length; e++) {
				if (c[e].options.disabled || (f && !c[e].accept.call(c[e].element[0], (f.currentItem || f.element)))) {
					continue
				}
				for (var d = 0; d < k.length; d++) {
					if (k[d] == c[e].element[0]) {
						c[e].proportions.height = 0;
						continue droppablesLoop
					}
				}
				c[e].visible = c[e].element.css("display") != "none";
				if (!c[e].visible) {
					continue
				}
				if (g == "mousedown") {
					c[e]._activate.call(c[e], h)
				}
				c[e].offset = c[e].element.offset();
				c[e].proportions = {
					width: c[e].element[0].offsetWidth,
					height: c[e].element[0].offsetHeight
				}
			}
		},
		drop: function(c, d) {
			var e = false;
			a.each(a.ui.ddmanager.droppables[c.options.scope] || [], function() {
				if (!this.options) {
					return
				}
				if (!this.options.disabled && this.visible && a.ui.intersect(c, this, this.options.tolerance)) {
					e = this._drop.call(this, d) || e
				}
				if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (c.currentItem || c.element))) {
					this.isout = 1;
					this.isover = 0;
					this._deactivate.call(this, d)
				}
			});
			return e
		},
		dragStart: function(c, d) {
			c.element.parents(":not(body,html)").bind("scroll.droppable", function() {
				if (!c.options.refreshPositions) {
					a.ui.ddmanager.prepareOffsets(c, d)
				}
			})
		},
		drag: function(c, d) {
			if (c.options.refreshPositions) {
				a.ui.ddmanager.prepareOffsets(c, d)
			}
			a.each(a.ui.ddmanager.droppables[c.options.scope] || [], function() {
				if (this.options.disabled || this.greedyChild || !this.visible) {
					return
				}
				var g = a.ui.intersect(c, this, this.options.tolerance);
				var i = !g && this.isover == 1 ? "isout" : (g && this.isover == 0 ? "isover" : null);
				if (!i) {
					return
				}
				var h;
				if (this.options.greedy) {
					var f = this.options.scope;
					var e = this.element.parents(":data(droppable)").filter(function() {
						return a.data(this, "droppable").options.scope === f
					});
					if (e.length) {
						h = a.data(e[0], "droppable");
						h.greedyChild = (i == "isover" ? 1 : 0)
					}
				}
				if (h && i == "isover") {
					h.isover = 0;
					h.isout = 1;
					h._out.call(h, d)
				}
				this[i] = 1;
				this[i == "isout" ? "isover" : "isout"] = 0;
				this[i == "isover" ? "_over" : "_out"].call(this, d);
				if (h && i == "isout") {
					h.isout = 0;
					h.isover = 1;
					h._over.call(h, d)
				}
			})
		},
		dragStop: function(c, d) {
			c.element.parents(":not(body,html)").unbind("scroll.droppable");
			if (!c.options.refreshPositions) {
				a.ui.ddmanager.prepareOffsets(c, d)
			}
		}
	}
})(jQuery);
(function(d, f) {
	var c = 0,
		b = 0;

	function e() {
		return ++c
	}

	function a() {
		return ++b
	}
	d.widget("ui.tabs", {
		options: {
			add: null,
			ajaxOptions: null,
			cache: false,
			cookie: null,
			collapsible: false,
			disable: null,
			disabled: [],
			enable: null,
			event: "click",
			fx: null,
			idPrefix: "ui-tabs-",
			load: null,
			panelTemplate: "<div></div>",
			remove: null,
			select: null,
			show: null,
			spinner: "<em>Loading&#8230;</em>",
			tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
		},
		_create: function() {
			this._tabify(true)
		},
		_setOption: function(g, h) {
			if (g == "selected") {
				if (this.options.collapsible && h == this.options.selected) {
					return
				}
				this.select(h)
			} else {
				this.options[g] = h;
				this._tabify()
			}
		},
		_tabId: function(g) {
			return g.title && g.title.replace(/\s/g, "_").replace(/[^\wÀ-￿-]/g, "") || this.options.idPrefix + e()
		},
		_sanitizeSelector: function(g) {
			return g.replace(/:/g, "\\:")
		},
		_cookie: function() {
			var g = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + a());
			return d.cookie.apply(null, [g].concat(d.makeArray(arguments)))
		},
		_ui: function(h, g) {
			return {
				tab: h,
				panel: g,
				index: this.anchors.index(h)
			}
		},
		_cleanup: function() {
			this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
				var g = d(this);
				g.html(g.data("label.tabs")).removeData("label.tabs")
			})
		},
		_tabify: function(t) {
			var u = this,
				j = this.options,
				h = /^#.+/;
			this.list = this.element.find("ol,ul").eq(0);
			this.lis = d(" > li:has(a[href])", this.list);
			this.anchors = this.lis.map(function() {
				return d("a", this)[0]
			});
			this.panels = d([]);
			this.anchors.each(function(w, o) {
				var v = d(o).attr("href");
				var x = v.split("#")[0],
					y;
				if (x && (x === location.toString().split("#")[0] || (y = d("base")[0]) && x === y.href)) {
					v = o.hash;
					o.href = v
				}
				if (h.test(v)) {
					u.panels = u.panels.add(u.element.find(u._sanitizeSelector(v)))
				} else {
					if (v && v !== "#") {
						d.data(o, "href.tabs", v);
						d.data(o, "load.tabs", v.replace(/#.*$/, ""));
						var A = u._tabId(o);
						o.href = "#" + A;
						var z = u.element.find("#" + A);
						if (!z.length) {
							z = d(j.panelTemplate).attr("id", A).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(u.panels[w - 1] || u.list);
							z.data("destroy.tabs", true)
						}
						u.panels = u.panels.add(z)
					} else {
						j.disabled.push(w)
					}
				}
			});
			if (t) {
				this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
				this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
				this.lis.addClass("ui-state-default ui-corner-top");
				this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
				if (j.selected === f) {
					if (location.hash) {
						this.anchors.each(function(v, o) {
							if (o.hash == location.hash) {
								j.selected = v;
								return false
							}
						})
					}
					if (typeof j.selected !== "number" && j.cookie) {
						j.selected = parseInt(u._cookie(), 10)
					}
					if (typeof j.selected !== "number" && this.lis.filter(".ui-tabs-selected").length) {
						j.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))
					}
					j.selected = j.selected || (this.lis.length ? 0 : -1)
				} else {
					if (j.selected === null) {
						j.selected = -1
					}
				}
				j.selected = ((j.selected >= 0 && this.anchors[j.selected]) || j.selected < 0) ? j.selected : 0;
				j.disabled = d.unique(j.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"), function(v, o) {
					return u.lis.index(v)
				}))).sort();
				if (d.inArray(j.selected, j.disabled) != -1) {
					j.disabled.splice(d.inArray(j.selected, j.disabled), 1)
				}
				this.panels.addClass("ui-tabs-hide");
				this.lis.removeClass("ui-tabs-selected ui-state-active");
				if (j.selected >= 0 && this.anchors.length) {
					u.element.find(u._sanitizeSelector(u.anchors[j.selected].hash)).removeClass("ui-tabs-hide");
					this.lis.eq(j.selected).addClass("ui-tabs-selected ui-state-active");
					u.element.queue("tabs", function() {
						u._trigger("show", null, u._ui(u.anchors[j.selected], u.element.find(u._sanitizeSelector(u.anchors[j.selected].hash))[0]))
					});
					this.load(j.selected)
				}
				d(window).bind("unload", function() {
					u.lis.add(u.anchors).unbind(".tabs");
					u.lis = u.anchors = u.panels = null
				})
			} else {
				j.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))
			}
			this.element[j.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible");
			if (j.cookie) {
				this._cookie(j.selected, j.cookie)
			}
			for (var m = 0, s;
			(s = this.lis[m]); m++) {
				d(s)[d.inArray(m, j.disabled) != -1 && !d(s).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled")
			}
			if (j.cache === false) {
				this.anchors.removeData("cache.tabs")
			}
			this.lis.add(this.anchors).unbind(".tabs");
			if (j.event !== "mouseover") {
				var l = function(o, i) {
						if (i.is(":not(.ui-state-disabled)")) {
							i.addClass("ui-state-" + o)
						}
					};
				var p = function(o, i) {
						i.removeClass("ui-state-" + o)
					};
				this.lis.bind("mouseover.tabs", function() {
					l("hover", d(this))
				});
				this.lis.bind("mouseout.tabs", function() {
					p("hover", d(this))
				});
				this.anchors.bind("focus.tabs", function() {
					l("focus", d(this).closest("li"))
				});
				this.anchors.bind("blur.tabs", function() {
					p("focus", d(this).closest("li"))
				})
			}
			var g, n;
			if (j.fx) {
				if (d.isArray(j.fx)) {
					g = j.fx[0];
					n = j.fx[1]
				} else {
					g = n = j.fx
				}
			}

			function k(i, o) {
				i.css("display", "");
				if (!d.support.opacity && o.opacity) {
					i[0].style.removeAttribute("filter")
				}
			}
			var q = n ?
			function(i, o) {
				d(i).closest("li").addClass("ui-tabs-selected ui-state-active");
				o.hide().removeClass("ui-tabs-hide").animate(n, n.duration || "normal", function() {
					k(o, n);
					u._trigger("show", null, u._ui(i, o[0]))
				})
			} : function(i, o) {
				d(i).closest("li").addClass("ui-tabs-selected ui-state-active");
				o.removeClass("ui-tabs-hide");
				u._trigger("show", null, u._ui(i, o[0]))
			};
			var r = g ?
			function(o, i) {
				i.animate(g, g.duration || "normal", function() {
					u.lis.removeClass("ui-tabs-selected ui-state-active");
					i.addClass("ui-tabs-hide");
					k(i, g);
					u.element.dequeue("tabs")
				})
			} : function(o, i, v) {
				u.lis.removeClass("ui-tabs-selected ui-state-active");
				i.addClass("ui-tabs-hide");
				u.element.dequeue("tabs")
			};
			this.anchors.bind(j.event + ".tabs", function() {
				var o = this,
					w = d(o).closest("li"),
					i = u.panels.filter(":not(.ui-tabs-hide)"),
					v = u.element.find(u._sanitizeSelector(o.hash));
				if ((w.hasClass("ui-tabs-selected") && !j.collapsible) || w.hasClass("ui-state-disabled") || w.hasClass("ui-state-processing") || u.panels.filter(":animated").length || u._trigger("select", null, u._ui(this, v[0])) === false) {
					this.blur();
					return false
				}
				j.selected = u.anchors.index(this);
				u.abort();
				if (j.collapsible) {
					if (w.hasClass("ui-tabs-selected")) {
						j.selected = -1;
						if (j.cookie) {
							u._cookie(j.selected, j.cookie)
						}
						u.element.queue("tabs", function() {
							r(o, i)
						}).dequeue("tabs");
						this.blur();
						return false
					} else {
						if (!i.length) {
							if (j.cookie) {
								u._cookie(j.selected, j.cookie)
							}
							u.element.queue("tabs", function() {
								q(o, v)
							});
							u.load(u.anchors.index(this));
							this.blur();
							return false
						}
					}
				}
				if (j.cookie) {
					u._cookie(j.selected, j.cookie)
				}
				if (v.length) {
					if (i.length) {
						u.element.queue("tabs", function() {
							r(o, i)
						})
					}
					u.element.queue("tabs", function() {
						q(o, v)
					});
					u.load(u.anchors.index(this))
				} else {
					throw "jQuery UI Tabs: Mismatching fragment identifier."
				}
				if (d.browser.msie) {
					this.blur()
				}
			});
			this.anchors.bind("click.tabs", function() {
				return false
			})
		},
		_getIndex: function(g) {
			if (typeof g == "string") {
				g = this.anchors.index(this.anchors.filter("[href$='" + g + "']"))
			}
			return g
		},
		destroy: function() {
			var g = this.options;
			this.abort();
			this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
			this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
			this.anchors.each(function() {
				var h = d.data(this, "href.tabs");
				if (h) {
					this.href = h
				}
				var i = d(this).unbind(".tabs");
				d.each(["href", "load", "cache"], function(j, k) {
					i.removeData(k + ".tabs")
				})
			});
			this.lis.unbind(".tabs").add(this.panels).each(function() {
				if (d.data(this, "destroy.tabs")) {
					d(this).remove()
				} else {
					d(this).removeClass(["ui-state-default", "ui-corner-top", "ui-tabs-selected", "ui-state-active", "ui-state-hover", "ui-state-focus", "ui-state-disabled", "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", "ui-tabs-hide"].join(" "))
				}
			});
			if (g.cookie) {
				this._cookie(null, g.cookie)
			}
			return this
		},
		add: function(j, i, h) {
			if (h === f) {
				h = this.anchors.length
			}
			var g = this,
				l = this.options,
				n = d(l.tabTemplate.replace(/#\{href\}/g, j).replace(/#\{label\}/g, i)),
				m = !j.indexOf("#") ? j.replace("#", "") : this._tabId(d("a", n)[0]);
			n.addClass("ui-state-default ui-corner-top").data("destroy.tabs", true);
			var k = g.element.find("#" + m);
			if (!k.length) {
				k = d(l.panelTemplate).attr("id", m).data("destroy.tabs", true)
			}
			k.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
			if (h >= this.lis.length) {
				n.appendTo(this.list);
				k.appendTo(this.list[0].parentNode)
			} else {
				n.insertBefore(this.lis[h]);
				k.insertBefore(this.panels[h])
			}
			l.disabled = d.map(l.disabled, function(p, o) {
				return p >= h ? ++p : p
			});
			this._tabify();
			if (this.anchors.length == 1) {
				l.selected = 0;
				n.addClass("ui-tabs-selected ui-state-active");
				k.removeClass("ui-tabs-hide");
				this.element.queue("tabs", function() {
					g._trigger("show", null, g._ui(g.anchors[0], g.panels[0]))
				});
				this.load(0)
			}
			this._trigger("add", null, this._ui(this.anchors[h], this.panels[h]));
			return this
		},
		remove: function(g) {
			g = this._getIndex(g);
			var i = this.options,
				j = this.lis.eq(g).remove(),
				h = this.panels.eq(g).remove();
			if (j.hasClass("ui-tabs-selected") && this.anchors.length > 1) {
				this.select(g + (g + 1 < this.anchors.length ? 1 : -1))
			}
			i.disabled = d.map(d.grep(i.disabled, function(l, k) {
				return l != g
			}), function(l, k) {
				return l >= g ? --l : l
			});
			this._tabify();
			this._trigger("remove", null, this._ui(j.find("a")[0], h[0]));
			return this
		},
		enable: function(g) {
			g = this._getIndex(g);
			var h = this.options;
			if (d.inArray(g, h.disabled) == -1) {
				return
			}
			this.lis.eq(g).removeClass("ui-state-disabled");
			h.disabled = d.grep(h.disabled, function(k, j) {
				return k != g
			});
			this._trigger("enable", null, this._ui(this.anchors[g], this.panels[g]));
			return this
		},
		disable: function(h) {
			h = this._getIndex(h);
			var g = this,
				i = this.options;
			if (h != i.selected) {
				this.lis.eq(h).addClass("ui-state-disabled");
				i.disabled.push(h);
				i.disabled.sort();
				this._trigger("disable", null, this._ui(this.anchors[h], this.panels[h]))
			}
			return this
		},
		select: function(g) {
			g = this._getIndex(g);
			if (g == -1) {
				if (this.options.collapsible && this.options.selected != -1) {
					g = this.options.selected
				} else {
					return this
				}
			}
			this.anchors.eq(g).trigger(this.options.event + ".tabs");
			return this
		},
		load: function(j) {
			j = this._getIndex(j);
			var h = this,
				l = this.options,
				g = this.anchors.eq(j)[0],
				i = d.data(g, "load.tabs");
			this.abort();
			if (!i || this.element.queue("tabs").length !== 0 && d.data(g, "cache.tabs")) {
				this.element.dequeue("tabs");
				return
			}
			this.lis.eq(j).addClass("ui-state-processing");
			if (l.spinner) {
				var k = d("span", g);
				k.data("label.tabs", k.html()).html(l.spinner)
			}
			this.xhr = d.ajax(d.extend({}, l.ajaxOptions, {
				url: i,
				success: function(n, m) {
					h.element.find(h._sanitizeSelector(g.hash)).html(n);
					h._cleanup();
					if (l.cache) {
						d.data(g, "cache.tabs", true)
					}
					h._trigger("load", null, h._ui(h.anchors[j], h.panels[j]));
					try {
						l.ajaxOptions.success(n, m)
					} catch (o) {}
				},
				error: function(o, m, n) {
					h._cleanup();
					h._trigger("load", null, h._ui(h.anchors[j], h.panels[j]));
					try {
						l.ajaxOptions.error(o, m, j, g)
					} catch (n) {}
				}
			}));
			h.element.dequeue("tabs");
			return this
		},
		abort: function() {
			this.element.queue([]);
			this.panels.stop(false, true);
			this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2));
			if (this.xhr) {
				this.xhr.abort();
				delete this.xhr
			}
			this._cleanup();
			return this
		},
		url: function(h, g) {
			this.anchors.eq(h).removeData("cache.tabs").data("load.tabs", g);
			return this
		},
		length: function() {
			return this.anchors.length
		}
	});
	d.extend(d.ui.tabs, {
		version: "@VERSION"
	});
	d.extend(d.ui.tabs.prototype, {
		rotation: null,
		rotate: function(i, k) {
			var g = this,
				l = this.options;
			var h = g._rotate || (g._rotate = function(m) {
				clearTimeout(g.rotation);
				g.rotation = setTimeout(function() {
					var n = l.selected;
					g.select(++n < g.anchors.length ? n : 0)
				}, i);
				if (m) {
					m.stopPropagation()
				}
			});
			var j = g._unrotate || (g._unrotate = !k ?
			function(m) {
				if (m.clientX) {
					g.rotate(null)
				}
			} : function(m) {
				h()
			});
			if (i) {
				this.element.bind("tabsshow", h);
				this.anchors.bind(l.event + ".tabs", j);
				h()
			} else {
				clearTimeout(g.rotation);
				this.element.unbind("tabsshow", h);
				this.anchors.unbind(l.event + ".tabs", j);
				delete this._rotate;
				delete this._unrotate
			}
			return this
		}
	})
})(jQuery);