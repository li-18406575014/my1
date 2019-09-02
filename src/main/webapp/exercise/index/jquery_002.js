(function($) { $.extend($.fn, { validate: function(options) {
            if (!this.length) { options && options.debug && window.console && console.warn("nothing selected, can't validate, returning nothing");
                return; }
            var validator = $.data(this[0], 'validator');
            if (validator) {
                return validator; }
            validator = new $.validator(options, this[0]);
            $.data(this[0], 'validator', validator);
            if (validator.settings.onsubmit) { this.find("input, button").filter(".cancel").click(function() { validator.cancelSubmit = true; });
                this.submit(function(event) {
                    if (validator.settings.debug) event.preventDefault();

                    function handle() {
                        if (validator.settings.submitHandler) { validator.settings.submitHandler.call(validator, validator.currentForm);
                            return false; }
                        return true; }
                    if (validator.cancelSubmit) { validator.cancelSubmit = false;
                        return handle(); }
                    if (validator.form()) {
                        if (validator.pendingRequest) { validator.formSubmitted = true;
                            return false; }
                        return handle(); } else { validator.focusInvalid();
                        return false; } }); }
            return validator; }, valid: function() {
            if ($(this[0]).is('form')) {
                return this.validate().form(); } else {
                var valid = false;
                var validator = $(this[0].form).validate();
                this.each(function() { valid |= validator.element(this); });
                return valid; } }, removeAttrs: function(attributes) {
            var result = {},
                $element = this;
            $.each(attributes.split(/\s/), function(index, value) { result[value] = $element.attr(value);
                $element.removeAttr(value); });
            return result; }, rules: function(command, argument) {
            var element = this[0];
            if (command) {
                var settings = $.data(element.form, 'validator').settings;
                var staticRules = settings.rules;
                var existingRules = $.validator.staticRules(element);
                switch (command) {
                    case "add":
                        $.extend(existingRules, $.validator.normalizeRule(argument));
                        staticRules[element.name] = existingRules;
                        if (argument.messages) settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
                        break;
                    case "remove":
                        if (!argument) { delete staticRules[element.name];
                            return existingRules; }
                        var filtered = {};
                        $.each(argument.split(/\s/), function(index, method) { filtered[method] = existingRules[method];
                            delete existingRules[method]; });
                        return filtered; } }
            var data = $.validator.normalizeRules($.extend({}, $.validator.metadataRules(element), $.validator.classRules(element), $.validator.attributeRules(element), $.validator.staticRules(element)), element);
            if (data.required) {
                var param = data.required;
                delete data.required;
                data = $.extend({ required: param }, data); }
            return data; } });
    $.extend($.expr[":"], { blank: function(a) {
            return !$.trim(a.value); }, filled: function(a) {
            return !!$.trim(a.value); }, unchecked: function(a) {
            return !a.checked; } });
    $.format = function(source, params) {
        if (arguments.length == 1) return function() {
            var args = $.makeArray(arguments);
            args.unshift(source);
            return $.format.apply(this, args); };
        if (arguments.length > 2 && params.constructor != Array) { params = $.makeArray(arguments).slice(1); }
        if (params.constructor != Array) { params = [params]; }
        $.each(params, function(i, n) { source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n); });
        return source; };
    $.validator = function(options, form) { this.settings = $.extend({}, $.validator.defaults, options);
        this.currentForm = form;
        this.init(); };
    $.extend($.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", errorElement: "label", focusInvalid: true, errorContainer: $([]), errorLabelContainer: $([]), onsubmit: true, ignore: [], ignoreTitle: false, onfocusin: function(element) { this.lastActive = element;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) { this.settings.unhighlight && this.settings.unhighlight.call(this, element, this.settings.errorClass);
                    this.errorsFor(element).hide(); } }, onfocusout: function(element) {
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) { this.element(element); } }, onkeyup: function(element) {
                if (element.name in this.submitted || element == this.lastElement) { this.element(element); } }, onclick: function(element) {
                if (element.name in this.submitted) this.element(element); }, highlight: function(element, errorClass) { $(element).addClass(errorClass); }, unhighlight: function(element, errorClass) { $(element).removeClass(errorClass); } }, setDefaults: function(settings) { $.extend($.validator.defaults, settings); }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", dateDE: "Bitte geben Sie ein gültiges Datum ein.", number: "Please enter a valid number.", numberDE: "Bitte geben Sie eine Nummer ein.", digits: "Please enter only digits", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", accept: "Please enter a value with a valid extension.", maxlength: $.format("Please enter no more than {0} characters."), minlength: $.format("Please enter at least {0} characters."), rangelength: $.format("Please enter a value between {0} and {1} characters long."), range: $.format("Please enter a value between {0} and {1}."), max: $.format("Please enter a value less than or equal to {0}."), min: $.format("Please enter a value greater than or equal to {0}.") }, autoCreateRanges: false, prototype: { init: function() { this.labelContainer = $(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var groups = (this.groups = {});
                $.each(this.settings.groups, function(key, value) { $.each(value.split(/\s/), function(index, name) { groups[name] = key; }); });
                var rules = this.settings.rules;
                $.each(rules, function(key, value) { rules[key] = $.validator.normalizeRule(value); });

                function delegate(event) {
                    var validator = $.data(this[0].form, "validator");
                    validator.settings["on" + event.type] && validator.settings["on" + event.type].call(validator, this[0]); }
                $(this.currentForm).delegate("focusin focusout keyup", ":text, :password, :file, select, textarea", delegate).delegate("click", ":radio, :checkbox", delegate);
                if (this.settings.invalidHandler) $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler); }, form: function() { this.checkForm();
                $.extend(this.submitted, this.errorMap);
                this.invalid = $.extend({}, this.errorMap);
                if (!this.valid()) $(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid(); }, checkForm: function() { this.prepareForm();
                for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) { this.check(elements[i]); }
                return this.valid(); }, element: function(element) { element = this.clean(element);
                this.lastElement = element;
                this.prepareElement(element);
                this.currentElements = $(element);
                var result = this.check(element);
                if (result) { delete this.invalid[element.name]; } else { this.invalid[element.name] = true; }
                if (!this.numberOfInvalids()) { this.toHide = this.toHide.add(this.containers); }
                this.showErrors();
                return result; }, showErrors: function(errors) {
                if (errors) { $.extend(this.errorMap, errors);
                    this.errorList = [];
                    for (var name in errors) { this.errorList.push({ message: errors[name], element: this.findByName(name)[0] }); }
                    this.successList = $.grep(this.successList, function(element) {
                        return !(element.name in errors); }); }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors(); }, resetForm: function() {
                if ($.fn.resetForm) $(this.currentForm).resetForm();
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass); }, numberOfInvalids: function() {
                return this.objectLength(this.invalid); }, objectLength: function(obj) {
                var count = 0;
                for (var i in obj) count++;
                return count; }, hideErrors: function() { this.addWrapper(this.toHide).hide(); }, valid: function() {
                return this.size() == 0; }, size: function() {
                return this.errorList.length; }, focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try { $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus(); } catch (e) {} } }, findLastActive: function() {
                var lastActive = this.lastActive;
                return lastActive && $.grep(this.errorList, function(n) {
                    return n.element.name == lastActive.name; }).length == 1 && lastActive; }, elements: function() {
                var validator = this,
                    rulesCache = {};
                return $([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {!this.name && validator.settings.debug && window.console && console.error("%o has no name assigned", this);
                    if (this.name in rulesCache || !validator.objectLength($(this).rules())) return false;
                    rulesCache[this.name] = true;
                    return true; }); }, clean: function(selector) {
                return $(selector)[0]; }, errors: function() {
                return $(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext); }, reset: function() { this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = $([]);
                this.toHide = $([]);
                this.formSubmitted = false;
                this.currentElements = $([]); }, prepareForm: function() { this.reset();
                this.toHide = this.errors().add(this.containers); }, prepareElement: function(element) { this.reset();
                this.toHide = this.errorsFor(element); }, check: function(element) { element = this.clean(element);
                if (this.checkable(element)) { element = this.findByName(element.name)[0]; }
                var rules = $(element).rules();
                var dependencyMismatch = false;
                for (method in rules) {
                    var rule = { method: method, parameters: rules[method] };
                    try {
                        var result = $.validator.methods[method].call(this, element.value.replace(/\r/g, ""), element, rule.parameters);
                        if (result == "dependency-mismatch") { dependencyMismatch = true;
                            continue; }
                        dependencyMismatch = false;
                        if (result == "pending") { this.toHide = this.toHide.not(this.errorsFor(element));
                            return; }
                        if (!result) { this.formatAndAdd(element, rule);
                            return false; } } catch (e) { this.settings.debug && window.console && console.log("exception occured when checking element " + element.id + ", check the '" + rule.method + "' method");
                        throw e; } }
                if (dependencyMismatch) return;
                if (this.objectLength(rules)) this.successList.push(element);
                return true; }, customMetaMessage: function(element, method) {
                if (!$.metadata) return;
                var meta = this.settings.meta ? $(element).metadata()[this.settings.meta] : $(element).metadata();
                return meta && meta.messages && meta.messages[method]; }, customMessage: function(name, method) {
                var m = this.settings.messages[name];
                return m && (m.constructor == String ? m : m[method]); }, findDefined: function() {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] !== undefined) return arguments[i]; }
                return undefined; }, defaultMessage: function(element, method) {
                return this.findDefined(this.customMessage(element.name, method), this.customMetaMessage(element, method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[method], "<strong>Warning: No message defined for " + element.name + "</strong>"); }, formatAndAdd: function(element, rule) {
                var message = this.defaultMessage(element, rule.method);
                if (typeof message == "function") message = message.call(this, rule.parameters, element);
                this.errorList.push({ message: message, element: element });
                this.errorMap[element.name] = message;
                this.submitted[element.name] = message; }, addWrapper: function(toToggle) {
                if (this.settings.wrapper) toToggle = toToggle.add(toToggle.parents(this.settings.wrapper));
                return toToggle; }, defaultShowErrors: function() {
                for (var i = 0; this.errorList[i]; i++) {
                    var error = this.errorList[i];
                    this.settings.highlight && this.settings.highlight.call(this, error.element, this.settings.errorClass);
                    this.showLabel(error.element, error.message); }
                if (this.errorList.length) { this.toShow = this.toShow.add(this.containers); }
                if (this.settings.success) {
                    for (var i = 0; this.successList[i]; i++) { this.showLabel(this.successList[i]); } }
                if (this.settings.unhighlight) {
                    for (var i = 0, elements = this.validElements(); elements[i]; i++) { this.settings.unhighlight.call(this, elements[i], this.settings.errorClass); } }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show(); }, validElements: function() {
                return this.currentElements.not(this.invalidElements()); }, invalidElements: function() {
                return $(this.errorList).map(function() {
                    return this.element; }); }, showLabel: function(element, message) {
                var label = this.errorsFor(element);
                if (label.length) { label.removeClass().addClass(this.settings.errorClass);
                    label.attr("generated") && label.html(message); } else { label = $("<" + this.settings.errorElement + "/>").attr({ "for": this.idOrName(element), generated: true }).addClass(this.settings.errorClass).html(message || "");
                    if (this.settings.wrapper) { label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent(); }
                    if (!this.labelContainer.append(label).length) this.settings.errorPlacement ? this.settings.errorPlacement(label, $(element)) : label.insertAfter(element); }
                if (!message && this.settings.success) { label.text("");
                    typeof this.settings.success == "string" ? label.addClass(this.settings.success) : this.settings.success(label); }
                this.toShow = this.toShow.add(label); }, errorsFor: function(element) {
                return this.errors().filter("[for='" + this.idOrName(element) + "']"); }, idOrName: function(element) {
                return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name); }, checkable: function(element) {
                return /radio|checkbox/i.test(element.type); }, findByName: function(name) {
                var form = this.currentForm;
                return $(document.getElementsByName(name)).map(function(index, element) {
                    return element.form == form && element.name == name && element || null; }); }, getLength: function(value, element) {
                switch (element.nodeName.toLowerCase()) {
                    case 'select':
                        return $("option:selected", element).length;
                    case 'input':
                        if (this.checkable(element)) return this.findByName(element.name).filter(':checked').length; }
                return value.length; }, depend: function(param, element) {
                return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true; }, dependTypes: { "boolean": function(param, element) {
                    return param; }, "string": function(param, element) {
                    return !!$(param, element.form).length; }, "function": function(param, element) {
                    return param(element); } }, optional: function(element) {
                return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch"; }, startRequest: function(element) {
                if (!this.pending[element.name]) { this.pendingRequest++;
                    this.pending[element.name] = true; } }, stopRequest: function(element, valid) { this.pendingRequest--;
                if (this.pendingRequest < 0) this.pendingRequest = 0;
                delete this.pending[element.name];
                if (valid && this.pendingRequest == 0 && this.formSubmitted && this.form()) { $(this.currentForm).submit(); } else if (!valid && this.pendingRequest == 0 && this.formSubmitted) { $(this.currentForm).triggerHandler("invalid-form", [this]); } }, previousValue: function(element) {
                return $.data(element, "previousValue") || $.data(element, "previousValue", previous = { old: null, valid: true, message: this.defaultMessage(element, "remote") }); } }, classRuleSettings: { required: { required: true }, email: { email: true }, url: { url: true }, date: { date: true }, dateISO: { dateISO: true }, dateDE: { dateDE: true }, number: { number: true }, numberDE: { numberDE: true }, digits: { digits: true }, creditcard: { creditcard: true } }, addClassRules: function(className, rules) { className.constructor == String ? this.classRuleSettings[className] = rules : $.extend(this.classRuleSettings, className); }, classRules: function(element) {
            var rules = {};
            var classes = $(element).attr('class');
            classes && $.each(classes.split(' '), function() {
                if (this in $.validator.classRuleSettings) { $.extend(rules, $.validator.classRuleSettings[this]); } });
            return rules; }, attributeRules: function(element) {
            var rules = {};
            var $element = $(element);
            for (method in $.validator.methods) {
                var value = $element.attr(method);
                if (value) { rules[method] = value; } }
            if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) { delete rules.maxlength; }
            return rules; }, metadataRules: function(element) {
            if (!$.metadata) return {};
            var meta = $.data(element.form, 'validator').settings.meta;
            return meta ? $(element).metadata()[meta] : $(element).metadata(); }, staticRules: function(element) {
            var rules = {};
            var validator = $.data(element.form, 'validator');
            if (validator.settings.rules) { rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {}; }
            return rules; }, normalizeRules: function(rules, element) { $.each(rules, function(prop, val) {
                if (val === false) { delete rules[prop];
                    return; }
                if (val.param || val.depends) {
                    var keepRule = true;
                    switch (typeof val.depends) {
                        case "string":
                            keepRule = !!$(val.depends, element.form).length;
                            break;
                        case "function":
                            keepRule = val.depends.call(element, element);
                            break; }
                    if (keepRule) { rules[prop] = val.param !== undefined ? val.param : true; } else { delete rules[prop]; } } });
            $.each(rules, function(rule, parameter) { rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter; });
            $.each(['minlength', 'maxlength', 'min', 'max'], function() {
                if (rules[this]) { rules[this] = Number(rules[this]); } });
            $.each(['rangelength', 'range'], function() {
                if (rules[this]) { rules[this] = [Number(rules[this][0]), Number(rules[this][1])]; } });
            if ($.validator.autoCreateRanges) {
                if (rules.min && rules.max) { rules.range = [rules.min, rules.max];
                    delete rules.min;
                    delete rules.max; }
                if (rules.minlength && rules.maxlength) { rules.rangelength = [rules.minlength, rules.maxlength];
                    delete rules.minlength;
                    delete rules.maxlength; } }
            if (rules.messages) { delete rules.messages }
            return rules; }, normalizeRule: function(data) {
            if (typeof data == "string") {
                var transformed = {};
                $.each(data.split(/\s/), function() { transformed[this] = true; });
                data = transformed; }
            return data; }, addMethod: function(name, method, message) { $.validator.methods[name] = method;
            $.validator.messages[name] = message;
            if (method.length < 3) { $.validator.addClassRules(name, $.validator.normalizeRule(name)); } }, methods: { required: function(value, element, param) {
                if (!this.depend(param, element)) return "dependency-mismatch";
                switch (element.nodeName.toLowerCase()) {
                    case 'select':
                        var options = $("option:selected", element);
                        return options.length > 0 && (element.type == "select-multiple" || ($.browser.msie && !(options[0].attributes['value'].specified) ? options[0].text : options[0].value).length > 0);
                    case 'input':
                        if (this.checkable(element)) return this.getLength(value, element) > 0;
                    default:
                        return $.trim(value).length > 0; } }, remote: function(value, element, param) {
                if (this.optional(element)) return "dependency-mismatch";
                var rv = $(element).attr("rvalue");
                if (rv && rv != "" && rv == value) {
                    return true; }
                var previous = this.previousValue(element);
                if (!this.settings.messages[element.name]) this.settings.messages[element.name] = {};
                this.settings.messages[element.name].remote = typeof previous.message == "function" ? previous.message(value) : previous.message;
                param = typeof param == "string" && { url: param } || param;
                if (previous.old !== value) { previous.old = value;
                    var validator = this;
                    this.startRequest(element);
                    var data = {};
                    var rname = $(element).attr("rname");
                    if (rname && rename != "") { data[rname] = value; } else { data[element.name] = value; }
                    $.ajax($.extend(true, { url: param, mode: "abort", port: "validate" + element.name, dataType: "json", data: data, success: function(response) {
                            if (response) {
                                var submitted = validator.formSubmitted;
                                validator.prepareElement(element);
                                validator.formSubmitted = submitted;
                                validator.successList.push(element);
                                validator.showErrors(); } else {
                                var errors = {};
                                errors[element.name] = response || validator.defaultMessage(element, "remote");
                                validator.showErrors(errors); }
                            previous.valid = response;
                            validator.stopRequest(element, response); } }, param));
                    return "pending"; } else if (this.pending[element.name]) {
                    return "pending"; }
                return previous.valid; }, minlength: function(value, element, param) {
                return this.optional(element) || this.getLength($.trim(value), element) >= param; }, maxlength: function(value, element, param) {
                return this.optional(element) || this.getLength($.trim(value), element) <= param; }, rangelength: function(value, element, param) {
                var length = this.getLength($.trim(value), element);
                return this.optional(element) || (length >= param[0] && length <= param[1]); }, min: function(value, element, param) {
                return this.optional(element) || value >= param; }, max: function(value, element, param) {
                return this.optional(element) || value <= param; }, range: function(value, element, param) {
                return this.optional(element) || (value >= param[0] && value <= param[1]); }, email: function(value, element) {
                return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value); }, url: function(value, element) {
                if (value.indexOf('http://') && value.indexOf('https://')) { value = "http://" + value;
                    $(element).val(value); }
                return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value); }, date: function(value, element) {
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value)); }, dateISO: function(value, element) {
                return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value); }, dateDE: function(value, element) {
                return this.optional(element) || /^\d\d?\.\d\d?\.\d\d\d?\d?$/.test(value); }, number: function(value, element) {
                return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value); }, numberDE: function(value, element) {
                return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(value); }, digits: function(value, element) {
                return this.optional(element) || /^\d+$/.test(value); }, creditcard: function(value, element) {
                if (this.optional(element)) return "dependency-mismatch";
                if (/[^0-9-]+/.test(value)) return false;
                var nCheck = 0,
                    nDigit = 0,
                    bEven = false;
                value = value.replace(/\D/g, "");
                for (n = value.length - 1; n >= 0; n--) {
                    var cDigit = value.charAt(n);
                    var nDigit = parseInt(cDigit, 10);
                    if (bEven) {
                        if ((nDigit *= 2) > 9) nDigit -= 9; }
                    nCheck += nDigit;
                    bEven = !bEven; }
                return (nCheck % 10) == 0; }, accept: function(value, element, param) { param = typeof param == "string" ? param : "png|jpe?g|gif";
                return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i")); }, equalTo: function(value, element, param) {
                return value == $(param).val(); } } }); })(jQuery);;
(function($) {
    var ajax = $.ajax;
    var pendingRequests = {};
    $.ajax = function(settings) { settings = $.extend(settings, $.extend({}, $.ajaxSettings, settings));
        var port = settings.port;
        if (settings.mode == "abort") {
            if (pendingRequests[port]) { pendingRequests[port].abort(); }
            return (pendingRequests[port] = ajax.apply(this, arguments)); }
        return ajax.apply(this, arguments); }; })(jQuery);;
(function($) { $.each({ focus: 'focusin', blur: 'focusout' }, function(original, fix) { $.event.special[fix] = { setup: function() {
                if ($.browser.msie) return false;
                this.addEventListener(original, $.event.special[fix].handler, true); }, teardown: function() {
                if ($.browser.msie) return false;
                this.removeEventListener(original, $.event.special[fix].handler, true); }, handler: function(e) { arguments[0] = $.event.fix(e);
                arguments[0].type = fix;
                return $.event.handle.apply(this, arguments); } }; });
    $.extend($.fn, { delegate: function(type, delegate, handler) {
            return this.bind(type, function(event) {
                var target = $(event.target);
                if (target.is(delegate)) {
                    return handler.apply(target, arguments); } }); }, triggerEvent: function(type, target) {
            return this.triggerHandler(type, [$.event.fix({ type: type, target: target })]); } }) })(jQuery);
/*
 * jQuery Form Plugin - requires jQuery v1.1 or later
 */
(function($) { $.fn.ajaxSubmit = function(options) {
        if (typeof options == 'function') options = { success: options };
        options = $.extend({ url: this.attr('action') || window.location, type: this.attr('method') || 'GET' }, options || {});
        var veto = {};
        $.event.trigger('form.pre.serialize', [this, options, veto]);
        if (veto.veto) return this;
        var a = this.formToArray(options.semantic);
        if (options.data) {
            for (var n in options.data) a.push({ name: n, value: options.data[n] }); };
        if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) return this;
        $.event.trigger('form.submit.validate', [a, this, options, veto]);
        if (veto.veto) return this;
        var q = $.param(a);
        if (options.type.toUpperCase() == 'GET') { options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
            options.data = null; } else options.data = q;
        var $form = this,
            callbacks = [];
        if (options.resetForm) callbacks.push(function() { $form.resetForm(); });
        if (options.clearForm) callbacks.push(function() { $form.clearForm(); });
        if (!options.dataType && options.target) {
            var oldSuccess = options.success || function() {};
            callbacks.push(function(data) {
                if (this.evalScripts) $(options.target).attr("innerHTML", data).evalScripts().each(oldSuccess, arguments);
                else $(options.target).html(data).each(oldSuccess, arguments); }); } else if (options.success) callbacks.push(options.success);
        options.success = function(data, status) {
            for (var i = 0, max = callbacks.length; i < max; i++) callbacks[i](data, status, $form); };
        var files = $('input:file', this).fieldValue();
        var found = false;
        for (var j = 0; j < files.length; j++)
            if (files[j]) found = true;
        if (options.iframe || found) fileUpload();
        else $.ajax(options);
        $.event.trigger('form.submit.notify', [this, options]);
        return this;

        function fileUpload() {
            var form = $form[0];
            var opts = $.extend({}, $.ajaxSettings, options);
            var id = 'jqFormIO' + $.fn.ajaxSubmit.counter++;
            var $io = $('<iframe id="' + id + '" name="' + id + '" />');
            var io = $io[0];
            var op8 = $.browser.opera && window.opera.version() < 9;
            if ($.browser.msie || op8) io.src = 'javascript:false;document.write("");';
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
            var xhr = { responseText: null, responseXML: null, status: 0, statusText: 'n/a', getAllResponseHeaders: function() {}, getResponseHeader: function() {}, setRequestHeader: function() {} };
            var g = opts.global;
            if (g && !$.active++) $.event.trigger("ajaxStart");
            if (g) $.event.trigger("ajaxSend", [xhr, opts]);
            var cbInvoked = 0;
            var timedOut = 0;
            setTimeout(function() { $io.appendTo('body');
                io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
                var encAttr = form.encoding ? 'encoding' : 'enctype';
                var t = $form.attr('target');
                $form.attr({ target: id, method: 'POST', action: opts.url });
                form[encAttr] = 'multipart/form-data';
                if (opts.timeout) setTimeout(function() { timedOut = true;
                    cb(); }, opts.timeout);
                form.submit();
                $form.attr('target', t); }, 10);

            function cb() {
                if (cbInvoked++) return;
                io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);
                var ok = true;
                try {
                    if (timedOut) throw 'timeout';
                    var data, doc;
                    doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
                    xhr.responseText = doc.body ? doc.body.innerHTML : null;
                    xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                    if (opts.dataType == 'json' || opts.dataType == 'script') {
                        var ta = doc.getElementsByTagName('textarea')[0];
                        data = ta ? ta.value : xhr.responseText;
                        if (opts.dataType == 'json') eval("data = " + data);
                        else $.globalEval(data); } else if (opts.dataType == 'xml') { data = xhr.responseXML;
                        if (!data && xhr.responseText != null) data = toXml(xhr.responseText); } else { data = xhr.responseText; } } catch (e) { ok = false;
                    $.handleError(opts, xhr, 'error', e); };
                if (ok) { opts.success(data, 'success');
                    if (g) $.event.trigger("ajaxSuccess", [xhr, opts]); };
                if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
                if (g && !--$.active) $.event.trigger("ajaxStop");
                if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');
                setTimeout(function() { $io.remove();
                    xhr.responseXML = null; }, 100); };

            function toXml(s, doc) {
                if (window.ActiveXObject) { doc = new ActiveXObject('Microsoft.XMLDOM');
                    doc.async = 'false';
                    doc.loadXML(s); } else doc = (new DOMParser()).parseFromString(s, 'text/xml');
                return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null; }; }; };
    $.fn.ajaxSubmit.counter = 0;
    $.fn.ajaxForm = function(options) {
        return this.ajaxFormUnbind().submit(submitHandler).each(function() { this.formPluginId = $.fn.ajaxForm.counter++;
            $.fn.ajaxForm.optionHash[this.formPluginId] = options;
            $(":submit,input:image", this).click(clickHandler); }); };
    $.fn.ajaxForm.counter = 1;
    $.fn.ajaxForm.optionHash = {};

    function clickHandler(e) {
        var $form = this.form;
        $form.clk = this;
        if (this.type == 'image') {
            if (e.offsetX != undefined) { $form.clk_x = e.offsetX;
                $form.clk_y = e.offsetY; } else if (typeof $.fn.offset == 'function') {
                var offset = $(this).offset();
                $form.clk_x = e.pageX - offset.left;
                $form.clk_y = e.pageY - offset.top; } else { $form.clk_x = e.pageX - this.offsetLeft;
                $form.clk_y = e.pageY - this.offsetTop; } };
        setTimeout(function() { $form.clk = $form.clk_x = $form.clk_y = null; }, 10); };

    function submitHandler() {
        var id = this.formPluginId;
        var options = $.fn.ajaxForm.optionHash[id];
        $(this).ajaxSubmit(options);
        return false; };
    $.fn.ajaxFormUnbind = function() { this.unbind('submit', submitHandler);
        return this.each(function() { $(":submit,input:image", this).unbind('click', clickHandler); }); };
    $.fn.formToArray = function(semantic) {
        var a = [];
        if (this.length == 0) return a;
        var form = this[0];
        var els = semantic ? form.getElementsByTagName('*') : form.elements;
        if (!els) return a;
        for (var i = 0, max = els.length; i < max; i++) {
            var el = els[i];
            var n = el.name;
            if (!n) continue;
            if (semantic && form.clk && el.type == "image") {
                if (!el.disabled && form.clk == el) a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y });
                continue; };
            var v = $.fieldValue(el, true);
            if (v && v.constructor == Array) {
                for (var j = 0, jmax = v.length; j < jmax; j++) a.push({ name: n, value: v[j] }); } else if (v !== null && typeof v != 'undefined') a.push({ name: n, value: v }); };
        if (!semantic && form.clk) {
            var inputs = form.getElementsByTagName("input");
            for (var i = 0, max = inputs.length; i < max; i++) {
                var input = inputs[i];
                var n = input.name;
                if (n && !input.disabled && input.type == "image" && form.clk == input) a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y }); } };
        return a; };
    $.fn.formSerialize = function(semantic) {
        return $.param(this.formToArray(semantic)); };
    $.fn.fieldSerialize = function(successful) {
        var a = [];
        this.each(function() {
            var n = this.name;
            if (!n) return;
            var v = $.fieldValue(this, successful);
            if (v && v.constructor == Array) {
                for (var i = 0, max = v.length; i < max; i++) a.push({ name: n, value: v[i] }); } else if (v !== null && typeof v != 'undefined') a.push({ name: this.name, value: v }); });
        return $.param(a); };
    $.fn.fieldValue = function(successful) {
        for (var val = [], i = 0, max = this.length; i < max; i++) {
            var el = this[i];
            var v = $.fieldValue(el, successful);
            if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) continue;
            v.constructor == Array ? $.merge(val, v) : val.push(v); };
        return val; };
    $.fieldValue = function(el, successful) {
        var n = el.name,
            t = el.type,
            tag = el.tagName.toLowerCase();
        if (typeof successful == 'undefined') successful = true;
        if (successful && (!n || el.disabled || t == 'reset' || t == 'button' || (t == 'checkbox' || t == 'radio') && !el.checked || (t == 'submit' || t == 'image') && el.form && el.form.clk != el || tag == 'select' && el.selectedIndex == -1)) return null;
        if (tag == 'select') {
            var index = el.selectedIndex;
            if (index < 0) return null;
            var a = [],
                ops = el.options;
            var one = (t == 'select-one');
            var max = (one ? index + 1 : ops.length);
            for (var i = (one ? index : 0); i < max; i++) {
                var op = ops[i];
                if (op.selected) {
                    var v = $.browser.msie && !(op.attributes['value'].specified) ? op.text : op.value;
                    if (one) return v;
                    a.push(v); } };
            return a; };
        return el.value; };
    $.fn.clearForm = function() {
        return this.each(function() { $('input,select,textarea', this).clearFields(); }); };
    $.fn.clearFields = $.fn.clearInputs = function() {
        return this.each(function() {
            var t = this.type,
                tag = this.tagName.toLowerCase();
            if (t == 'text' || t == 'password' || tag == 'textarea') this.value = '';
            else if (t == 'checkbox' || t == 'radio') this.checked = false;
            else if (tag == 'select') this.selectedIndex = -1; }); };
    $.fn.resetForm = function() {
        return this.each(function() {
            if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) this.reset(); }); }; })(jQuery);
/*
 * Metadata - jQuery plugin for parsing metadata from elements
 */
(function($) { $.extend({ metadata: { defaults: { type: 'class', name: 'metadata', cre: /({.*})/, single: 'metadata' }, setType: function(type, name) { this.defaults.type = type;
                this.defaults.name = name; }, get: function(elem, opts) {
                var settings = $.extend({}, this.defaults, opts);
                if (!settings.single.length) settings.single = 'metadata';
                var data = $.data(elem, settings.single);
                if (data) return data;
                data = "{}";
                if (settings.type == "class") {
                    var m = settings.cre.exec(elem.className);
                    if (m) data = m[1]; } else if (settings.type == "elem") {
                    if (!elem.getElementsByTagName) return undefined;
                    var e = elem.getElementsByTagName(settings.name);
                    if (e.length) data = $.trim(e[0].innerHTML); } else if (elem.getAttribute != undefined) {
                    var attr = elem.getAttribute(settings.name);
                    if (attr) data = attr; }
                if (data.indexOf('{') < 0) data = "{" + data + "}";
                data = eval("(" + data + ")");
                $.data(elem, settings.single, data);
                return data; } } });
    $.fn.metadata = function(opts) {
        return $.metadata.get(this[0], opts); }; })(jQuery);
/*
 * jQuery cookie
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { options = options || {};
        if (value === null) { value = '';
            options.expires = -1; };
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') { date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000)); } else { date = options.expires; };
            expires = '; expires=' + date.toUTCString(); };
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join(''); } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) { cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break; } } };
        return cookieValue; } };
/*
 * BASE64
 */
BASE64 = { enKey: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', deKey: new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1), encode: function(src) {
        var str = new Array();
        var ch1, ch2, ch3;
        var pos = 0;
        while (pos + 3 <= src.length) { ch1 = src.charCodeAt(pos++);
            ch2 = src.charCodeAt(pos++);
            ch3 = src.charCodeAt(pos++);
            str.push(this.enKey.charAt(ch1 >> 2), this.enKey.charAt(((ch1 << 4) + (ch2 >> 4)) & 0x3f));
            str.push(this.enKey.charAt(((ch2 << 2) + (ch3 >> 6)) & 0x3f), this.enKey.charAt(ch3 & 0x3f)); };
        if (pos < src.length) { ch1 = src.charCodeAt(pos++);
            str.push(this.enKey.charAt(ch1 >> 2));
            if (pos < src.length) { ch2 = src.charCodeAt(pos);
                str.push(this.enKey.charAt(((ch1 << 4) + (ch2 >> 4)) & 0x3f));
                str.push(this.enKey.charAt(ch2 << 2 & 0x3f), '='); } else { str.push(this.enKey.charAt(ch1 << 4 & 0x3f), '=='); } };
        return str.join(''); }, decode: function(src) {
        var str = new Array();
        var ch1, ch2, ch3, ch4;
        var pos = 0;
        src = src.replace(/[^A-Za-z0-9\+\/]/g, '');
        while (pos + 4 <= src.length) { ch1 = this.deKey[src.charCodeAt(pos++)];
            ch2 = this.deKey[src.charCodeAt(pos++)];
            ch3 = this.deKey[src.charCodeAt(pos++)];
            ch4 = this.deKey[src.charCodeAt(pos++)];
            str.push(String.fromCharCode((ch1 << 2 & 0xff) + (ch2 >> 4), (ch2 << 4 & 0xff) + (ch3 >> 2), (ch3 << 6 & 0xff) + ch4)); };
        if (pos + 1 < src.length) { ch1 = this.deKey[src.charCodeAt(pos++)];
            ch2 = this.deKey[src.charCodeAt(pos++)];
            if (pos < src.length) { ch3 = this.deKey[src.charCodeAt(pos)];
                str.push(String.fromCharCode((ch1 << 2 & 0xff) + (ch2 >> 4), (ch2 << 4 & 0xff) + (ch3 >> 2))); } else { str.push(String.fromCharCode((ch1 << 2 & 0xff) + (ch2 >> 4))); } };
        return str.join(''); } };
/*
 * Treeview 1.4 - jQuery plugin to hide and show branches of a tree
 */
(function($) { $.extend($.fn, { swapClass: function(c1, c2) {
            var c1Elements = this.filter('.' + c1);
            this.filter('.' + c2).removeClass(c2).addClass(c1);
            c1Elements.removeClass(c1).addClass(c2);
            return this }, replaceClass: function(c1, c2) {
            return this.filter('.' + c1).removeClass(c1).addClass(c2).end() }, hoverClass: function(className) { className = className || "hover";
            return this.hover(function() { $(this).addClass(className) }, function() { $(this).removeClass(className) }) }, heightToggle: function(animated, callback) { animated ? this.stop().animate({ height: "toggle" }, animated, callback) : this.each(function() { jQuery(this)[jQuery(this).is(":hidden") ? "show" : "hide"]();
                if (callback) callback.apply(this, arguments) }) }, heightHide: function(animated, callback) {
            if (animated) { this.animate({ height: "hide" }, animated, callback) } else { this.hide();
                if (callback) this.each(callback) } }, prepareBranches: function(settings) {
            if (!settings.prerendered) { this.filter(":last-child:not(ul)").addClass(CLASSES.last);
                this.filter((settings.collapsed ? "" : "." + CLASSES.closed) + ":not(." + CLASSES.open + ")").find(">ul").hide() }
            return this.filter(":has(>ul)") }, applyClasses: function(settings, toggler) { this.filter(":has(>ul):not(:has(>a))").find(">span").click(function(event) { toggler.apply($(this).next()) }).add($("a", this)).hoverClass();
            if (!settings.prerendered) { this.filter(":has(>ul:hidden)").addClass(CLASSES.expandable).replaceClass(CLASSES.last, CLASSES.lastExpandable);
                this.not(":has(>ul:hidden)").addClass(CLASSES.collapsable).replaceClass(CLASSES.last, CLASSES.lastCollapsable);
                this.prepend("<div class=\"" + CLASSES.hitarea + "\"/>").find("div." + CLASSES.hitarea).each(function() {
                    var classes = "";
                    $.each($(this).parent().attr("class").split(" "), function() { classes += this + "-hitarea " });
                    $(this).addClass(classes) }) }
            this.find("div." + CLASSES.hitarea).click(toggler) }, treeview: function(settings) { settings = $.extend({ cookieId: "treeview" }, settings);
            if (settings.add) {
                return this.trigger("add", [settings.add]) }
            if (settings.toggle) {
                var callback = settings.toggle;
                settings.toggle = function() {
                    return callback.apply($(this).parent()[0], arguments) } }

            function treeController(tree, control) {
                function handler(filter) {
                    return function() { toggler.apply($("div." + CLASSES.hitarea, tree).filter(function() {
                            return filter ? $(this).parent("." + filter).length : true }));
                        return false } }
                $("a:eq(0)", control).click(handler(CLASSES.collapsable));
                $("a:eq(1)", control).click(handler(CLASSES.expandable));
                $("a:eq(2)", control).click(handler()) }

            function toggler() {
            	 $(this).parent().find(">.hitarea").swapClass(CLASSES.collapsableHitarea, CLASSES.expandableHitarea).swapClass(CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea).end().swapClass(CLASSES.collapsable, CLASSES.expandable).swapClass(CLASSES.lastCollapsable, CLASSES.lastExpandable).find(">ul").heightToggle(settings.animated, settings.toggle);
                if (settings.unique) { $(this).parent().siblings().find(">.hitarea").replaceClass(CLASSES.collapsableHitarea, CLASSES.expandableHitarea).replaceClass(CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea).end().replaceClass(CLASSES.collapsable, CLASSES.expandable).replaceClass(CLASSES.lastCollapsable, CLASSES.lastExpandable).find(">ul").heightHide(settings.animated, settings.toggle) } }

            function serialize() {
                function binary(arg) {
                    return arg ? 1 : 0 }
                var data = [];
                branches.each(function(i, e) { data[i] = $(e).is(":has(>ul:visible)") ? 1 : 0 });
                $.cookie(settings.cookieId, data.join("")) }

            function deserialize() {
                var stored = $.cookie(settings.cookieId);
                if (stored) {
                    var data = stored.split("");
                    branches.each(function(i, e) { $(e).find(">ul")[parseInt(data[i]) ? "show" : "hide"]() }) } }
            this.addClass("treeview");
            var branches = this.find("li").prepareBranches(settings);
            switch (settings.persist) {
                case "cookie":
                    var toggleCallback = settings.toggle;
                    settings.toggle = function() { serialize();
                        if (toggleCallback) { toggleCallback.apply(this, arguments) } };
                    deserialize();
                    break;
                case "location":
                    var current = this.find("a").filter(function() {
                        return this.href.toLowerCase() == location.href.toLowerCase() });
                    if (current.length) { current.addClass("selected").parents("ul, li").add(current.next()).show() }
                    break }
            branches.applyClasses(settings, toggler);
            if (settings.control) { treeController(this, settings.control);
                $(settings.control).show() }
            return this.bind("add", function(event, branches) { $(branches).prev().removeClass(CLASSES.last).removeClass(CLASSES.lastCollapsable).removeClass(CLASSES.lastExpandable).find(">.hitarea").removeClass(CLASSES.lastCollapsableHitarea).removeClass(CLASSES.lastExpandableHitarea);
                $(branches).find("li").andSelf().prepareBranches(settings).applyClasses(settings, toggler) }) } });
    var CLASSES = $.fn.treeview.classes = { open: "open", closed: "closed", expandable: "expandable", expandableHitarea: "expandable-hitarea", lastExpandableHitarea: "lastExpandable-hitarea", collapsable: "collapsable", collapsableHitarea: "collapsable-hitarea", lastCollapsableHitarea: "lastCollapsable-hitarea", lastCollapsable: "lastCollapsable", lastExpandable: "lastExpandable", last: "last", hitarea: "hitarea" };
    $.fn.Treeview = $.fn.treeview })(jQuery);
/*
 * Async Treeview 0.1 - Lazy-loading extension for Treeview
 */
(function($) {
    function load(settings, root, child, container) { $.getJSON(settings.url, { root: root }, function(response) {
            function createNode(parent) {
                var current = $("<li/>").attr("id", this.id || "").html("<span>" + this.text + "</span>").appendTo(parent);
                if (this.classes) { current.children("span").addClass(this.classes); };
                if (this.expanded) { current.addClass("open"); };
                if (this.hasChildren || this.children && this.children.length) {
                    var branch = $("<ul/>").appendTo(current);
                    if (this.hasChildren) { current.addClass("hasChildren");
                        createNode.call({ text: "placeholder", id: "placeholder", children: [] }, branch); };
                    if (this.children && this.children.length) { $.each(this.children, createNode, [branch]) } } };
            $.each(response, createNode, [child]);
            $(container).treeview({ add: child }); }); };
    var proxied = $.fn.treeview;
    $.fn.treeview = function(settings) {
        if (!settings || !settings.url) {
            return proxied.apply(this, arguments); };
        var container = this;
        load(settings, "source", this, container);
        var userToggle = settings.toggle;
        return proxied.call(this, $.extend({}, settings, { collapsed: true, toggle: function() {
                var $this = $(this);
                if ($this.hasClass("hasChildren")) {
                    var childList = $this.removeClass("hasChildren").find("ul");
                    childList.empty();
                    load(settings, this.id, childList, container); };
                if (userToggle) { userToggle.apply(this, arguments); } } })); }; })(jQuery);

/*
 * jquery.loading.min.js
 */
jQuery.fn.showLoading = function (options) {
    var indicatorID;
    var settings = {
        'addClass': '',
        'beforeShow': '',
        'afterShow': '',
        'hPos': 'center',
        'vPos': 'center',
        'indicatorZIndex': 5001,
        'overlayZIndex': 5000,
        'parent': '',
        'marginTop': 0,
        'marginLeft': 0,
        'overlayWidth': null,
        'overlayHeight': null
    };
    jQuery.extend(settings, options);
    var loadingDiv = jQuery('<div></div>');
    var overlayDiv = jQuery('<div></div>');
    if (settings.indicatorID) {
        indicatorID = settings.indicatorID
    } else {
        indicatorID = jQuery(this).attr('id')
    }
    jQuery(loadingDiv).attr('id', 'loading-indicator-' + indicatorID);
    jQuery(loadingDiv).addClass('loading-indicator');
    if (settings.addClass) {
        jQuery(loadingDiv).addClass(settings.addClass)
    }
    jQuery(overlayDiv).css('display', 'none');
    jQuery(document.body).append(overlayDiv);
    jQuery(overlayDiv).attr('id', 'loading-indicator-' + indicatorID + '-overlay');
    jQuery(overlayDiv).addClass('loading-indicator-overlay');
    if (settings.addClass) {
        jQuery(overlayDiv).addClass(settings.addClass + '-overlay')
    }
    var overlay_width = 0;
    var overlay_height = 0;
    var border_top_width = jQuery(this).css('border-top-width');
    var border_left_width = jQuery(this).css('border-left-width');
    border_top_width = isNaN(parseInt(border_top_width)) ? 0 : border_top_width;
    border_left_width = isNaN(parseInt(border_left_width)) ? 0 : border_left_width;
    var overlay_left_pos;
    var overlay_top_pos;
    if (jQuery(this).offset() != null) {
        overlay_left_pos = jQuery(this).offset().left + parseInt(border_left_width);
        overlay_top_pos = jQuery(this).offset().top + parseInt(border_top_width);
    }
    if (settings.overlayWidth !== null) {
        overlay_width = settings.overlayWidth
    } else {
        overlay_width = parseInt(jQuery(this).width()) + parseInt(jQuery(this).css('padding-right')) + parseInt(jQuery(this).css('padding-left'))
    }

    if (settings.overlayHeight !== null) {
        overlay_height = settings.overlayWidth
    } else {
        overlay_height = document.body.scrollHeight > window.innerHeight ? document.body.scrollHeight : window.innerHeight;
    }
    jQuery(overlayDiv).css('width', overlay_width.toString() + 'px');
    //mxs 20180704 ie error: overlay_height nudefined
    if (!overlay_height) {
        if (settings.overlayHeight !== null) {
            overlay_height = settings.overlayWidth
        } else {
            overlay_height = parseInt(jQuery(this).height()) + parseInt(jQuery(this).css('padding-top')) + parseInt(jQuery(this).css('padding-bottom'))
        }
    }
    jQuery(overlayDiv).css('height','100%');
    if(overlay_left_pos !== undefined){
        jQuery(overlayDiv).css('left', overlay_left_pos.toString() + 'px');
    }
    jQuery(overlayDiv).css('position', 'fixed');
    if(overlay_top_pos !== undefined) {
        jQuery(overlayDiv).css('top', overlay_top_pos.toString() + 'px');
    }

    jQuery(overlayDiv).css('z-index', settings.overlayZIndex);
    if (settings.overlayCSS) {
        jQuery(overlayDiv).css(settings.overlayCSS)
    }
    jQuery(loadingDiv).css('display', 'none');
    jQuery(document.body).append(loadingDiv);
    //jQuery(loadingDiv).css('position', 'absolute');
    jQuery(loadingDiv).css('position', 'fixed');
    jQuery(loadingDiv).css('z-index', settings.indicatorZIndex);
    var indicatorTop = overlay_top_pos;
    if (settings.marginTop) {
        indicatorTop += parseInt(settings.marginTop)
    }
    var indicatorLeft = overlay_left_pos;
    if (settings.marginLeft) {
        indicatorLeft += parseInt(settings.marginTop)
    }
    if (settings.hPos.toString().toLowerCase() == 'center') {
        jQuery(loadingDiv).css('left', (indicatorLeft + ((jQuery(overlayDiv).width() - parseInt(jQuery(loadingDiv).width())) / 2)).toString() + 'px')
    } else if (settings.hPos.toString().toLowerCase() == 'left') {
        jQuery(loadingDiv).css('left', (indicatorLeft + parseInt(jQuery(overlayDiv).css('margin-left'))).toString() + 'px')
    } else if (settings.hPos.toString().toLowerCase() == 'right') {
        jQuery(loadingDiv).css('left', (indicatorLeft + (jQuery(overlayDiv).width() - parseInt(jQuery(loadingDiv).width()))).toString() + 'px')
    } else {
        jQuery(loadingDiv).css('left', (indicatorLeft + parseInt(settings.hPos)).toString() + 'px')
    }
    if (settings.vPos.toString().toLowerCase() == 'center') {
        jQuery(loadingDiv).css('top', '0px')
    } else if (settings.vPos.toString().toLowerCase() == 'top') {
        jQuery(loadingDiv).css('top', indicatorTop.toString() + 'px')
    } else if (settings.vPos.toString().toLowerCase() == 'bottom') {
        jQuery(loadingDiv).css('top', (indicatorTop + (jQuery(overlayDiv).height() - parseInt(jQuery(loadingDiv).height()))).toString() + 'px')
    } else {
        jQuery(loadingDiv).css('top', (indicatorTop + parseInt(settings.vPos)).toString() + 'px')
    }
    if (settings.css) {
        jQuery(loadingDiv).css(settings.css)
    }
    var callback_options = {'overlay': overlayDiv, 'indicator': loadingDiv, 'element': this};
    if (typeof(settings.beforeShow) == 'function') {
        settings.beforeShow(callback_options)
    }
    jQuery(overlayDiv).show();
    jQuery(loadingDiv).show();
    if (typeof(settings.afterShow) == 'function') {
        settings.afterShow(callback_options)
    }
    return this
};
jQuery.fn.hideLoading = function (options) {
    var settings = {};
    jQuery.extend(settings, options);
    if (settings.indicatorID) {
        indicatorID = settings.indicatorID
    } else {
        indicatorID = jQuery(this).attr('id')
    }
    jQuery(document.body).find('#loading-indicator-' + indicatorID).remove();
    jQuery(document.body).find('#loading-indicator-' + indicatorID + '-overlay').remove();
    return this
};

/*
 * jquery.alert.min
 */
var hintTips;
var sureBtn;
var cancleBtn;
if("undefined" == typeof SiteLanguage || SiteLanguage == "cn" || SiteLanguage == "tcn") {
    hintTips = '提示';
    sureBtn ='确定';
    cancleBtn ='取消';
}else{
    hintTips = 'Hint';
    sureBtn ='OK';
    cancleBtn ='Cancle';
}
(function ($) {
    $.alerts = {
        verticalOffset: 0,
        horizontalOffset: 0,
        repositionOnResize: true,
        overlayOpacity: .3,
        overlayColor: '#000',
        draggable: true,
        okButton: sureBtn,
        cancelButton: cancleBtn,
        dialogClass: null,
        alert: function (message, title, callback) {
            if (title == null) title = 'Alert';
            $.alerts._show(title, message, null, 'alert', function (result) {
                if (callback) callback(result)
            })
        },
        confirm: function (message, title, callback, width) {
            if (title == null) title = 'Confirm';

            $.alerts._show(title, message, null, 'confirm', function (result) {
                if (callback) callback(result)
            }, width)

        },
        prompt: function (message, value, title, callback) {
            if (title == null) title = 'Prompt';
            $.alerts._show(title, message, value, 'prompt', function (result) {
                if (callback) callback(result)
            })
        },
        _show: function (title, msg, value, type, callback, width) {
            $.alerts._hide();
            $.alerts._overlay('show');
            // animated slideInDown
            JRF.win.$('<div id="popup_container" class="formDialog c-tipwindow "><a  class="formX " id="popup_close" hidefocus="true" href="javascript:;"></a><div id="popup_content" class="c-tipcontent"><div class="uitip_img"></div><div id="popup_message" divname="111"></div></div></div>').appendTo(JRF.top.document.body);
            if ($.alerts.dialogClass) JRF.dom.find("#popup_container").addClass($.alerts.dialogClass);
            var pos = ($.browser.msie && parseInt($.browser.version) <= 6) ? 'absolute' : 'fixed';

            JRF.dom.find("#popup_container").css({position: 'fixed', zIndex: 99999, padding: 0, margin: 0});
            JRF.dom.find("#popup_title").text(title);
            JRF.dom.find("#popup_message").text(msg);
            JRF.dom.find("#popup_message").addClass(type);
            JRF.dom.find("#popup_message").html(JRF.dom.find("#popup_message").text().replace(/\n/g, '<br />'));
            if (JRF.isIE) {
                if (!width) {
                    width = 400;
                }
                JRF.dom.find("#popup_container").width(width)
            } else {
                JRF.dom.find("#popup_container").width(JRF.dom.find("#popup_container").outerWidth())
            }
            $.alerts._reposition();
            $.alerts._maintainPosition(true);
            JRF.dom.find("#popup_close").click(function () {
                $.alerts._hide();
                callback(false)
            });
            switch (type) {
                case 'alert':
                    JRF.dom.find("#popup_message").after('<div id="popup_panel"><input type="button" value="我知道了" id="popup_ok" class="popup_ok" onmouseout="this.className=\'popup_ok\'" onmouseover="this.className=\'popup_ok_m\'"/></div>');
                    JRF.dom.find("#popup_ok").click(function () {
                        $.alerts._hide();
                        callback(true)
                    });
                    JRF.dom.find("#popup_ok").focus().keypress(function (e) {
                        if (e.keyCode == 13 || e.keyCode == 27) JRF.dom.find("#popup_ok").trigger('click')
                    });
                    break;
                case 'confirm':
                    JRF.dom.find("#popup_message").after('<div id="popup_panel"><input type="button" value="' + $.alerts.okButton + '" id="popup_ok"  class="popup_ok" onmouseout="this.className=\'popup_ok\'" onmouseover="this.className=\'popup_ok_m\'"/> <input type="button" value="' + $.alerts.cancelButton + '" id="popup_cancel" class="popup_ok" onmouseout="this.className=\'popup_ok\'" onmouseover="this.className=\'popup_ok_m\'"/></div>');
                    JRF.dom.find("#popup_ok").click(function () {
                        $.alerts._hide();
                        if (callback) callback(true)
                    });
                    JRF.dom.find("#popup_cancel").click(function () {
                        $.alerts._hide();
                        if (callback) callback(false)
                    });
                    JRF.dom.find("#popup_ok").focus();
                    JRF.dom.find("#popup_ok, #popup_cancel").keypress(function (e) {
                        if (e.keyCode == 13) JRF.dom.find("#popup_ok").trigger('click');
                        if (e.keyCode == 27) JRF.dom.find("#popup_cancel").trigger('click')
                    });
                    break;
                case 'prompt':
                    JRF.dom.find("#popup_message").append('<br /><input type="text" size="30" id="popup_prompt" />').after('<div id="popup_panel"><input type="button" value="' + $.alerts.okButton + '" id="popup_ok" /><input type="button" value="' + $.alerts.cancelButton + '" id="popup_cancel" /></div>');
                    JRF.dom.find("#popup_prompt").width(JRF.dom.find("#popup_message").width());
                    JRF.dom.find("#popup_ok").click(function () {
                        var val = JRF.dom.find("#popup_prompt").val();
                        $.alerts._hide();
                        if (callback) callback(val)
                    });
                    JRF.dom.find("#popup_cancel").click(function () {
                        $.alerts._hide();
                        if (callback) callback(null)
                    });
                    JRF.dom.find("#popup_prompt, #popup_ok, #popup_cancel").keypress(function (e) {
                        if (e.keyCode == 13) JRF.dom.find("#popup_ok").trigger('click');
                        if (e.keyCode == 27) JRF.dom.find("#popup_cancel").trigger('click')
                    });
                    if (value) JRF.dom.find("#popup_prompt").val(value);
                    JRF.dom.find("#popup_prompt").focus().select();
                    break
            }

            //弹框提示时去除页面滚动条  20180704 mxs
            JRF.dom.find("#bodyDesign").css("overflow-y", "hidden");
            if ($.alerts.draggable) {
                Drag.init(JRF.top.document.getElementById("popup_title"), JRF.top.document.getElementById("popup_container"));
                JRF.dom.find("#popup_title").css({cursor: 'move'})
            }

        },

        _hide: function () {
            JRF.dom.find("#popup_container").remove();
            $.alerts._overlay('hide');
            $.alerts._maintainPosition(false);
            //存在弹框遮罩时滚动条不进行展示 20180704 mxs
            if (JRF.dom.find(".popupBg").length == 0) {
                JRF.dom.find("#bodyDesign").css("overflow-y", "auto");
            }

        },
        _overlay: function (status) {
            switch (status) {
                case 'show':
                    $.alerts._overlay('hide');
                    JRF.win.$('<div id="popup_overlay"></div>').appendTo(JRF.top.document.body);
                    break;
                case 'hide':
                    JRF.dom.find("#popup_overlay").remove();
                    break
            }
        },
        _reposition: function () {
            var top = (JRF.top.document.documentElement.clientHeight - JRF.dom.find("#popup_container").outerHeight()) / 2;
            var left = (JRF.top.document.documentElement.clientWidth - JRF.dom.find("#popup_container").outerWidth()) / 2;
            if (top < 0) top = 0;
            if (left < 0) left = 0;
            if ($.browser.msie && parseInt($.browser.version) <= 6) top = top + $(window).scrollTop();

            JRF.dom.find("#popup_container").css({top: top + 'px', left: left + 'px'})
        },
        _maintainPosition: function (status) {
            if ($.alerts.repositionOnResize) {
                switch (status) {
                    case true:
                        $(window).bind('resize', $.alerts._reposition);
                        break;
                    case false:
                        $(window).unbind('resize', $.alerts._reposition);
                        break
                }
            }
        }
    };

    $.alert = function (message, callback) {
        try {
            $.alerts.alert(message, hintTips, callback)
        } catch (e) {
        }
    };
    $.confirm = function (message, callback, width) {
        try {
            $.alerts.confirm(message, hintTips, callback, width)
        } catch (e) {
        }
    };
    $.prompt = function (message, value, title, callback) {
        try {
            $.alerts.prompt(message, value, title, callback)
        } catch (e) {
        }
    }
})(jQuery);

/*
 * jquery.help.min
 */
(function($) { $.popup = { ID: null, title: hintTips+":", top: 0, left: 0, width: 0, height: 0, popType: "", repositionOnResize: true, okButton: sureBtn, cancelButton: cancleBtn, isButtonRow: false, isPopup: false, autoClose: 0, tip: function(msg, top, left, autoClose) { this.ID = 'tip';
            this.popType = 'tip';
            this.title = '';
            this.isPopup = false;
            this.autoClose = autoClose || 0;
            this.width = "auto";
            this.height = 30;
            this.top = top || ($(document).height() - this.height) / 2;
            this.left = left || ($(document).width() - this.width) / 2;
            $.popup._show(null, msg, null) }, help: function(elem, title, msg, height) { this.ID = 'help';
            this.title = title || this.title;
            this.width = "auto";
            this.height = height || 40;
            var top = $(elem).offset().top;
            if (top + 50 - this.height > 0) { this.top = $(elem).offset().top + 50 - this.height;
                this.popType = 'help_up' } else { this.top = top + 16;
                this.popType = 'help_down' }
            this.left = $(elem).offset().left - 30;
            $.popup._show(elem, msg) }, prompt: function(elem, title, msg, isButtonRow, isPopup, callback, top, left, width, height) { this.ID = 'prompt';
            this.title = title || this.title;
            this.popType = 'prompt';
            this.isButtonRow = isButtonRow || this.isButtonRow;
            this.isPopup = isPopup || this.isPopup;
            this.top = top || $(elem).offset().top + 16;
            this.left = left || $(elem).offset().left;
            this.width = width || 300;
            this.height = height || 120;
            $.popup._show(elem, msg, function(result) {
                if (callback) callback(result) }) }, _show: function(elem, msg, callback) {
            if ($("#_Popup_" + this.ID).length < 1) {
                var html = '<div class="animated popup_' + this.popType + '" id="_Popup_' + this.ID + '" style="width:' + this.width + 'px"><div class="popup_corner"></div><div class="popup_border"><p id="_Container_' + this.ID + (this.height == 0 ? '">' : '">') + msg + '</p>' + (this.isButtonRow ? '<div class="buttonRow" id="_ButtonRow_' + this.ID + '"></div>' : '') + '</div></div>';
                $("BODY").append(html);
                $("#_Popup_" + this.ID).css({ position: 'absolute', zIndex: 9999999999, padding: 0, marginLeft: -20, marginTop: 20 });
                $("#_Popup_" + this.ID).css({maxWidth: 220});
                $.popup._reposition();
                $.popup._maintainPosition(true);
                $.popup._bindType();
                if (this.isPopup) { $(elem).click(function(e) { e ? e.stopPropagation() : event.cancelBubble = true });
                    $("#_Popup_" + this.ID).click(function(e) { e ? e.stopPropagation() : event.cancelBubble = true });
                    $(document).click(function() { $.popup._hide() }) }
                if (this.autoClose > 0) { $.popup._autoClose() } } else { $("#_Container_" + this.ID).html(msg);
                $.popup._bindType(callback);
                $.popup._reposition();
                $.popup._maintainPosition(true);
                $("#_Popup_" + this.ID).show();
                if (this.autoClose > 0) { $.popup._autoClose() } } }, _bindType: function(callback) {
            switch (this.popType) {
                case 'help':
                    if (this.isButtonRow) { $("#_ButtonRow_" + this.ID).after('<input type="button" value="' + $.popup.okButton + '" id="_ButtonOK_' + this.ID + '" />');
                        $("#_ButtonOK_" + this.ID).click(function() { $.popup._hide();
                            callback(true) });
                        $("#_ButtonOK_" + this.ID).keypress(function(e) {
                            if (e.keyCode == 13 || e.keyCode == 27) $("#_ButtonOK_" + this.ID).trigger('click') }) }
                    break;
                case 'prompt':
                    if (this.isButtonRow) { $("#_ButtonRow_" + this.ID).html('<input type="hidden" id="hid_' + this.ID + '" />                        <input type="button" value="' + $.popup.okButton + '" id="_ButtonOK_' + this.ID + '"/>                        <input type="button" value="' + $.popup.cancelButton + '" id="_ButtonCancel_' + this.ID + '"/>');
                        $("#_ButtonOK_" + this.ID).click(function() {
                            var val = $("#hid_" + this.ID).val();
                            $.popup._hide();
                            if (callback) callback(val) });
                        $("#_ButtonCancel_" + this.ID).click(function() { $.popup._hide();
                            if (callback) callback(null) });
                        $("#_ButtonOK_" + this.ID + ", #_ButtonCancel_" + this.ID).keypress(function(e) {
                            if (e.keyCode == 13) $("#_ButtonOK_" + this.ID).trigger('click');
                            if (e.keyCode == 27) $("#_ButtonCancel_" + this.ID).trigger('click') }) }
                    break;
                case 'tip':
                    break;
                default:
                    break } }, _hide: function() {
            if ($("#_Popup_" + this.ID).length > 0) {
                if (this.popType == "tip") { $("#_Popup_" + this.ID).fadeOut(500) } else { $("#_Popup_" + this.ID).remove() }
                $.popup._maintainPosition(false) } }, _autoClose: function() { setTimeout("$.popup._hide()", this.autoClose * 1000) }, _reposition: function() {
            var top = this.top || (($(document).height() / 2) - ($("#popup_container").outerHeight() / 2));
            var left = this.left || (($(document).width() / 2) - ($("#popup_container").outerWidth() / 2));
            if (top < 0) top = 0;
            if (left < 0) left = 0;

    var baseHeight = $(window).height();
    var baseWidth = $(window).width();
    var tipWidth = $("#_Popup_" + this.ID).width();
    var tipHeight = $("#_Popup_" + this.ID).height();
    var newleft = left - tipWidth/2;
    var newtop = top - tipHeight - 40;

    var arrowTop = tipHeight  -18;

    if(left + tipWidth < baseWidth){
        $("#_Popup_" + this.ID).css({left: left + 'px' });
        $("#_Popup_" + this.ID).find(".popup_corner").css("left",56);
    }else{
        $("#_Popup_" + this.ID).css({left: newleft + 'px' });
        $("#_Popup_" + this.ID).find(".popup_corner").css("left",169);
    }
    if(top + tipHeight +40 < baseHeight){
        $("#_Popup_" + this.ID).css({top: top + 'px' });
        $("#_Popup_" + this.ID).find(".popup_corner").css("top","-24px");
        $("#_Popup_" + this.ID).find(".popup_corner").removeClass("bottomcorner");
        $("#_Popup_" + this.ID).removeClass("fadeInDown").addClass("fadeInUp");

    }else{
        $("#_Popup_" + this.ID).css({top: newtop + 'px' });
        $("#_Popup_" + this.ID).find(".popup_corner").css("top",arrowTop);
        $("#_Popup_" + this.ID).find(".popup_corner").addClass("bottomcorner");
        $("#_Popup_" + this.ID).removeClass("fadeInUp").addClass("fadeInDown");
    }
}, _maintainPosition: function(status) {
            if ($.popup.repositionOnResize) {
                switch (status) {
                    case true:
                        $(window).bind('resize', $.popup._reposition);
                        break;
                    case false:
                        $(window).unbind('resize', $.popup._reposition);
                        break } } } };
    showLoading = function(msg, elem) {
        var loadingMsg = msg || '正在加载数据，请稍候...';
        if (elem == null) { $.popup.tip('<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><img src="images/loading.gif" /> ' + loadingMsg + '</td></tr></table>', null, null, 0) } else {
            var middle = ($(elem).height() - 30) / 2;
            var top = $(elem).offset().top + (middle > 0 ? middle : 0);
            $.popup.tip('<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><img src="images/loading.gif" /> ' + loadingMsg + '</td></tr></table>', top, null, 0) } };
    hideTip = function() { $("#_Popup_tip").fadeOut(500) };
    showTip = function(msg, elem, autoClose) {
        if (elem == null) { $.popup.tip('<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">' + msg + '</td></tr></table>', null, null, autoClose) } else {
            var middle = ($("#" + elem).height() - 50) / 2;
            var top = $("#" + elem).offset().top + (middle > 0 ? middle : 0);
            $.popup.tip('<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">' + msg + '</td></tr></table>', top, null, autoClose) } };
    showHelper = function(elem, msg, height) { $.popup.help(elem, '提示', msg, height) };
    hideHelper = function() {$('#_Popup_help').remove()};
    showPrompt = function(elem, title, msg, isButtonRow, isPopup, callback, top, left, width, height) { $.popup.prompt(elem, title, msg, isButtonRow, isPopup, callback, top, left, width, height) } })(jQuery);


/* * jquery.icolor.min */
(function($) {
    var p = {};
    p.getId = function() {
        var id = $(document).data("icolorID");
        if (!id) { id = 1 } else { id = id + 1 };
        $(document).data("icolorID", id);
        return id };
    p.colorMap = ["00", "33", "66", "99", "aa", "cc", "ee", "ff"];
    p.M = function($t, opts) { this.$t = $t;
        this.$layout = null;
        this.$colors = null;
        this.$otherColors = null;
        this.$otherColorsView = null;
        this.$tb = null;
        this.flat = opts.flat;
        this.colors = opts.colors;
        this.trigger = opts.trigger;
        this.className = opts.cl;
        this.defaultColor = !(this.colors && this.colors.length > 0);
        this.curColor = "";
        this._opts = opts;
        this.valueTargetId = opts.valueTargetId;
        this.viewTargetId = opts.viewTargetId;
        this.changebgcolor = opts.changebgcolor;
        this.haveDefaultColor = false;
        this._init() };
    p.M.prototype = { _init: function() { this._initColors();
            this._initCbk();
            this._initLayout() }, _initColors: function() {
            if (!this.defaultColor) return;
            for (var i = 0; i < p.colorMap.length; i++) this.colors.push(p.colorMap[i] + p.colorMap[i] + p.colorMap[i]);
            for (var i = 1; i < p.colorMap.length; i++) {
                if (i != 4 && i != 6) this.colors.push(p.colorMap[0] + p.colorMap[0] + p.colorMap[i]) };
            for (var i = 1; i < p.colorMap.length; i++) {
                if (i != 2 && i != 4 && i != 6 && i != 7) this.colors.push(p.colorMap[i] + p.colorMap[i] + p.colorMap[7]) };
            for (var i = 1; i < p.colorMap.length; i++) {
                if (i != 4 && i != 6) this.colors.push(p.colorMap[0] + p.colorMap[i] + p.colorMap[0]) };
            for (var i = 1; i < p.colorMap.length; i++) {
                if (i != 2 && i != 4 && i != 6 && i != 7) this.colors.push(p.colorMap[i] + p.colorMap[7] + p.colorMap[i]) };
            for (var i = 1; i < p.colorMap.length; i++) {
                if (i != 4 && i != 6) this.colors.push(p.colorMap[i] + p.colorMap[0] + p.colorMap[0]) };
            for (var i = 1; i < p.colorMap.length; i++) {
                if (i != 2 && i != 4 && i != 6 && i != 7) this.colors.push(p.colorMap[7] + p.colorMap[i] + p.colorMap[i]) };
            for (var i = 1; i < p.colorMap.length; i++) {
                if (i != 4 && i != 6) this.colors.push(p.colorMap[i] + p.colorMap[i] + p.colorMap[0]) };
            for (var i = 1; i < p.colorMap.length; i++) {
                if (i != 2 && i != 4 && i != 6 && i != 7) this.colors.push(p.colorMap[7] + p.colorMap[7] + p.colorMap[i]) };
            for (var i = 1; i < p.colorMap.length; i++) {
                if (i != 4 && i != 6) this.colors.push(p.colorMap[0] + p.colorMap[i] + p.colorMap[i]) };
            for (var i = 1; i < p.colorMap.length; i++) {
                if (i != 2 && i != 4 && i != 6 && i != 7) this.colors.push(p.colorMap[i] + p.colorMap[7] + p.colorMap[7]) };
            for (var i = 1; i < p.colorMap.length; i++) {
                if (i != 4 && i != 6) this.colors.push(p.colorMap[i] + p.colorMap[0] + p.colorMap[i]) };
            for (var i = 1; i < p.colorMap.length; i++) {
                if (i != 2 && i != 4 && i != 6 && i != 7) this.colors.push(p.colorMap[7] + p.colorMap[i] + p.colorMap[7]) } }, _initLayout: function() {
            var _this = this;
            var go = true;
            if (this._opts.beforeInit) { go = this._opts.beforeInit() };
            if (!go) return;
            this._opts.col = this._opts.col || this.colors.length;
            var colNum = this.defaultColor ? 8 : (this._opts.col < 1 ? 1 : this._opts.col);
            var html = '<div class="' + this.className + '" id="icolor_' + p.getId() + '" title="拾色器">';
            html += '<div class=colorsElement>';
            for (var i = 0; i < this.colors.length; i++) { title = this._opts.title ? (' title="#' + this.colors[i] + '"') : "";
                html += '<div class="color_element" style="background-color:#' + this.colors[i] + ';"' + title + ' abbr="' + this.colors[i] + '"></div>' };
            html += '</div>';
            html += '<div class=choseOtherColors><div class="colorSelector" title="自定义颜色"><div style="background-color: #FFFFFF"></div></div><a class="closeCheckedColor" title="关闭">关闭</a><a class="deleteCheckedColor" title="清除">清除</a></div>';
            html += '</div>';
            this.$layout = $(html);
            this.$tb = this.$layout.find(".colorsElement");
            var defaultColorValue = (this.valueTargetId != null) ? this.valueTargetId.val() : _this.$t.attr("value");
            var initColorValue = '#FFFFFF';
            if (defaultColorValue != '') { this.$tb.find("div[title=" + defaultColorValue + "]").removeClass("color_element").addClass("color_slected_hot").addClass($.fn.icolor.isDark(defaultColorValue) ? "checkwht" : "checkblk");
                if (this.$tb.find("div[title=" + defaultColorValue + "]").length > 0) this.haveDefaultColor = true;
                else initColorValue = defaultColorValue }
            this.$colors = this.$tb.find("div");
            this.$otherColors = this.$layout.find('.colorSelector');
            this.$otherColorsView = this.$otherColors.children("div");
            if (this.flat) { this.$t.append(this.$layout.addClass("icolor_flat")) } else { $("body").append(this.$layout.hide()) };
            if (this.haveDefaultColor) { this.$otherColorsView.css('background-color', initColorValue) } else if (defaultColorValue != '') { this.$otherColorsView.css('background-color', defaultColorValue);
                this.$otherColorsView.attr('title', '自定义颜色 ' + defaultColorValue) }
            this.$colors.click(function(e) { _this.$colors.removeClass("color_slected_hot").addClass("color_element");
                $(this).removeClass("color_element");
                _this.curColor = "#" + $(this).attr('abbr');
                $(this).addClass("color_slected_hot").addClass($.fn.icolor.isDark(_this.curColor) ? "checkwht" : "checkblk");
                _this.$otherColorsView.css('background-color', '#FFFFFF');
                _this.$otherColorsView.attr('title', '自定义颜色');
                _this.$otherColorsView.attr('abbr', 'FFFFFF');
                if (_this.valueTargetId != null) { _this.valueTargetId.attr("value", _this.curColor) } else { _this.$t.attr("value", _this.curColor) }
                if (_this.changebgcolor) _this.$t.css('background-color', _this.curColor);
                if (_this.viewTargetId != null) _this.viewTargetId.css({ color: _this.curColor });
                _this.submit() });
            this.$otherColors.ColorPicker({ color: initColorValue, onSubmit: function(hsb, hex, rgb, el) { _this.$otherColorsView.css('background-color', '#' + hex);
                    _this.$otherColorsView.attr('title', '自定义颜色 #' + hex);
                    _this.$otherColorsView.attr('abbr', hex);
                    _this.$colors.removeClass("color_slected_hot").addClass("color_element");
                    if (_this.valueTargetId != null) { _this.valueTargetId.attr("value", '#' + hex) } else { _this.$t.attr("value", '#' + hex) }
                    if (_this.changebgcolor) _this.$t.css('background-color', '#' + hex);
                    if (_this.viewTargetId != null) _this.viewTargetId.css({ color: '#' + hex });
                    $(el).ColorPickerHide();
                    _this.$layout.hide(500) }, onShow: function(colpkr) { $(colpkr).fadeIn(500);
                    return false }, onHide: function(colpkr) { $(colpkr).fadeOut(500);
                    return false } });
            this.$layout.find(".deleteCheckedColor").click(function(e) { _this.clear();
                _this.$layout.hide(500) });
            this.$layout.find(".closeCheckedColor").click(function(e) { _this.$layout.hide(500) });
            if (this._opts.hover) { this.$colors.mouseenter(function(e) { $(this).removeClass("color_element");
                    $(this).addClass("color_mouseenter");
                    var c = "#" + this.abbr });
                this.$colors.mouseleave(function(e) { $(this).removeClass("color_mouseenter");
                    $(this).addClass("color_element") }) };
            if (!this.flat) { this.$t.bind(this.trigger, function(e) {
                    if (_this.$layout.is(":hidden")) _this.show();
                    else { _this.$layout.hide();
                        _this.show() }
                    return false }) };
            if (this._opts.afterInit) this._opts.afterInit() }, show: function() {
            var _this = this;
            var pos = this.$t.offset(),
                cbk = this._opts.onShow ? function() { _this._opts.onShow(pos) } : null;
            this.$layout.css({ left: pos.left, top: pos.top + this.$t.height() });
            if (this._opts.slide) { this.$layout.slideDown("fast", cbk) } else { this.$layout.show(0, cbk) } }, clear: function() {
            var _this = this;
            _this.$colors.removeClass("color_slected_hot").addClass("color_element");
            if (_this.changebgcolor) { _this.$t.css("background-color", "") }
            if (_this.valueTargetId != null) { _this.valueTargetId.attr("value", '') } else { _this.$t.attr("value", '') }
            if (_this.viewTargetId != null) { _this.viewTargetId.css({ color: '' }) }
            _this.$otherColorsView.css('background-color', '#FFFFFF');
            _this.$otherColorsView.attr('title', '自定义颜色');
            _this.$otherColorsView.attr('abbr', 'FFFFFF') }, submit: function() {
            if (this._opts.onSelect) { this._opts.onSelect(this.curColor) };
            if ((!this.flat) && this._opts.autoClose) { this.$layout.hide(500) } }, _proxy: function(f) {
            if (!f) return null;
            var i = this;
            return function() {
                return f.apply(i, arguments) } }, _initCbk: function() { this._opts.onShow = this._proxy(this._opts.onShow);
            this._opts.onSelect = this._proxy(this._opts.onSelect);
            this._opts.beforeInit = this._proxy(this._opts.beforeInit);
            this._opts.afterInit = this._proxy(this._opts.afterInit);
            this._opts.onOver = this._proxy(this._opts.onOver);
            this._opts.onOut = this._proxy(this._opts.onOut) } };
    $.fn.icolor = function(opts) { opts = $.extend({}, $.fn.icolor.defaults, opts);
        return this.each(function() {
            var $i = $(this);
            if (!$i.data("icolor")) $i.data("icolor", new p.M($i, opts)) }) };
    $.fn.icolor.defaults = { trigger: 'click', flat: false, col: 8, colors: [], cl: "icolor", title: true, autoClose: true, slide: true, onShow: null, onSelect: null, beforeInit: null, afterInit: null, onOver: null, onOut: null, hover: true, valueTargetId: null, viewTargetId: null, changebgcolor: false };
    $.fn.icolor.isDark = function(c) {
        var colr = parseInt(c.substr(1), 16);
        return (colr >>> 16) + ((colr >>> 8) & 0x00ff) + (colr & 0x0000ff) < 500 } })(jQuery);

/*
 * colorpicker.min
 */
(function($) {
    var ColorPicker = function() {
        var ids = {},
            inAction, charMin = 65,
            visible, tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" class="input_text07" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" class="input_text07" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" class="input_text07" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" class="input_text07" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" class="input_text07" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" class="input_text07" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" class="input_text07" /><span></span></div><div class="colorpicker_submit" title="Ӧ��"></div></div>',
            defaults = { eventName: 'click', onShow: function() {}, onBeforeShow: function() {}, onHide: function() {}, onChange: function() {}, onSubmit: function() {}, color: 'ff0000', livePreview: true, flat: false },
            fillRGBFields = function(hsb, cal) {
                var rgb = HSBToRGB(hsb);
                $(cal).data('colorpicker').fields.eq(1).val(rgb.r).end().eq(2).val(rgb.g).end().eq(3).val(rgb.b).end() },
            fillHSBFields = function(hsb, cal) { $(cal).data('colorpicker').fields.eq(4).val(hsb.h).end().eq(5).val(hsb.s).end().eq(6).val(hsb.b).end() },
            fillHexFields = function(hsb, cal) { $(cal).data('colorpicker').fields.eq(0).val(HSBToHex(hsb)).end() },
            setSelector = function(hsb, cal) { $(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({ h: hsb.h, s: 100, b: 100 }));
                $(cal).data('colorpicker').selectorIndic.css({ left: parseInt(150 * hsb.s / 100, 10), top: parseInt(150 * (100 - hsb.b) / 100, 10) }) },
            setHue = function(hsb, cal) { $(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h / 360, 10)) },
            setCurrentColor = function(hsb, cal) { $(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb)) },
            setNewColor = function(hsb, cal) { $(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb)) },
            keyDown = function(ev) {
                var pressedKey = ev.charCode || ev.keyCode || -1;
                if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
                    return false }
                var cal = $(this).parent().parent();
                if (cal.data('colorpicker').livePreview === true) { change.apply(this) } },
            change = function(ev) {
                var cal = $(this).parent().parent(),
                    col;
                if (this.parentNode.className.indexOf('_hex') > 0) { cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value)) } else if (this.parentNode.className.indexOf('_hsb') > 0) { cal.data('colorpicker').color = col = fixHSB({ h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10), s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10), b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10) }) } else { cal.data('colorpicker').color = col = RGBToHSB(fixRGB({ r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10), g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10), b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10) })) }
                if (ev) { fillRGBFields(col, cal.get(0));
                    fillHexFields(col, cal.get(0));
                    fillHSBFields(col, cal.get(0)) }
                setSelector(col, cal.get(0));
                setHue(col, cal.get(0));
                setNewColor(col, cal.get(0));
                cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]) },
            blur = function(ev) {
                var cal = $(this).parent().parent();
                cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus') },
            focus = function() { charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
                $(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
                $(this).parent().addClass('colorpicker_focus') },
            downIncrement = function(ev) {
                var field = $(this).parent().find('input').focus();
                var current = { el: $(this).parent().addClass('colorpicker_slider'), max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255), y: ev.pageY, field: field, val: parseInt(field.val(), 10), preview: $(this).parent().parent().data('colorpicker').livePreview };
                $(document).bind('mouseup', current, upIncrement);
                $(document).bind('mousemove', current, moveIncrement) },
            moveIncrement = function(ev) { ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
                if (ev.data.preview) { change.apply(ev.data.field.get(0), [true]) }
                return false },
            upIncrement = function(ev) { change.apply(ev.data.field.get(0), [true]);
                ev.data.el.removeClass('colorpicker_slider').find('input').focus();
                $(document).unbind('mouseup', upIncrement);
                $(document).unbind('mousemove', moveIncrement);
                return false },
            downHue = function(ev) {
                var current = { cal: $(this).parent(), y: $(this).offset().top };
                current.preview = current.cal.data('colorpicker').livePreview;
                $(document).bind('mouseup', current, upHue);
                $(document).bind('mousemove', current, moveHue) },
            moveHue = function(ev) { change.apply(ev.data.cal.data('colorpicker').fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, (ev.pageY - ev.data.y)))) / 150, 10)).get(0), [ev.data.preview]);
                return false },
            upHue = function(ev) { fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
                fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
                $(document).unbind('mouseup', upHue);
                $(document).unbind('mousemove', moveHue);
                return false },
            downSelector = function(ev) {
                var current = { cal: $(this).parent(), pos: $(this).offset() };
                current.preview = current.cal.data('colorpicker').livePreview;
                $(document).bind('mouseup', current, upSelector);
                $(document).bind('mousemove', current, moveSelector) },
            moveSelector = function(ev) { change.apply(ev.data.cal.data('colorpicker').fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, (ev.pageY - ev.data.pos.top)))) / 150, 10)).end().eq(5).val(parseInt(100 * (Math.max(0, Math.min(150, (ev.pageX - ev.data.pos.left)))) / 150, 10)).get(0), [ev.data.preview]);
                return false },
            upSelector = function(ev) { fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
                fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
                $(document).unbind('mouseup', upSelector);
                $(document).unbind('mousemove', moveSelector);
                return false },
            enterSubmit = function(ev) { $(this).addClass('colorpicker_focus') },
            leaveSubmit = function(ev) { $(this).removeClass('colorpicker_focus') },
            clickSubmit = function(ev) {
                var cal = $(this).parent();
                var col = cal.data('colorpicker').color;
                cal.data('colorpicker').origColor = col;
                setCurrentColor(col, cal.get(0));
                cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el) },
            show = function(ev) {
                var cal = $('#' + $(this).data('colorpickerId'));
                cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
                var pos = $(this).offset();
                var viewPort = getViewport();
                var top = pos.top + this.offsetHeight;
                var left = pos.left;
                if (top + 176 > viewPort.t + viewPort.h) { top -= this.offsetHeight + 176 }
                if (left + 356 > viewPort.l + viewPort.w) { left -= 356 }
                cal.css({ left: left + 'px', top: top + 'px' });
                if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) { cal.show() }
                $(document).bind('mousedown', { cal: cal }, hide);
                return false },
            hide = function(ev) {
                if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
                    if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) { ev.data.cal.hide() }
                    $(document).unbind('mousedown', hide) } },
            isChildOf = function(parentEl, el, container) {
                if (parentEl == el) {
                    return true }
                if (parentEl.contains) {
                    return parentEl.contains(el) }
                if (parentEl.compareDocumentPosition) {
                    return !!(parentEl.compareDocumentPosition(el) & 16) }
                var prEl = el.parentNode;
                while (prEl && prEl != container) {
                    if (prEl == parentEl) return true;
                    prEl = prEl.parentNode }
                return false },
            getViewport = function() {
                var m = document.compatMode == 'CSS1Compat';
                return { l: window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft), t: window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop), w: window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth), h: window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight) } },
            fixHSB = function(hsb) {
                return { h: Math.min(360, Math.max(0, hsb.h)), s: Math.min(100, Math.max(0, hsb.s)), b: Math.min(100, Math.max(0, hsb.b)) } },
            fixRGB = function(rgb) {
                return { r: Math.min(255, Math.max(0, rgb.r)), g: Math.min(255, Math.max(0, rgb.g)), b: Math.min(255, Math.max(0, rgb.b)) } },
            fixHex = function(hex) {
                var len = 6 - hex.length;
                if (len > 0) {
                    var o = [];
                    for (var i = 0; i < len; i++) { o.push('0') }
                    o.push(hex);
                    hex = o.join('') }
                return hex },
            HexToRGB = function(hex) {
                var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
                return { r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF) } },
            HexToHSB = function(hex) {
                return RGBToHSB(HexToRGB(hex)) },
            RGBToHSB = function(rgb) {
                var hsb = { h: 0, s: 0, b: 0 };
                var min = Math.min(rgb.r, rgb.g, rgb.b);
                var max = Math.max(rgb.r, rgb.g, rgb.b);
                var delta = max - min;
                hsb.b = max;
                if (max != 0) {}
                hsb.s = max != 0 ? 255 * delta / max : 0;
                if (hsb.s != 0) {
                    if (rgb.r == max) { hsb.h = (rgb.g - rgb.b) / delta } else if (rgb.g == max) { hsb.h = 2 + (rgb.b - rgb.r) / delta } else { hsb.h = 4 + (rgb.r - rgb.g) / delta } } else { hsb.h = -1 }
                hsb.h *= 60;
                if (hsb.h < 0) { hsb.h += 360 }
                hsb.s *= 100 / 255;
                hsb.b *= 100 / 255;
                return hsb },
            HSBToRGB = function(hsb) {
                var rgb = {};
                var h = Math.round(hsb.h);
                var s = Math.round(hsb.s * 255 / 100);
                var v = Math.round(hsb.b * 255 / 100);
                if (s == 0) { rgb.r = rgb.g = rgb.b = v } else {
                    var t1 = v;
                    var t2 = (255 - s) * v / 255;
                    var t3 = (t1 - t2) * (h % 60) / 60;
                    if (h == 360) h = 0;
                    if (h < 60) { rgb.r = t1;
                        rgb.b = t2;
                        rgb.g = t2 + t3 } else if (h < 120) { rgb.g = t1;
                        rgb.b = t2;
                        rgb.r = t1 - t3 } else if (h < 180) { rgb.g = t1;
                        rgb.r = t2;
                        rgb.b = t2 + t3 } else if (h < 240) { rgb.b = t1;
                        rgb.r = t2;
                        rgb.g = t1 - t3 } else if (h < 300) { rgb.b = t1;
                        rgb.g = t2;
                        rgb.r = t2 + t3 } else if (h < 360) { rgb.r = t1;
                        rgb.g = t2;
                        rgb.b = t1 - t3 } else { rgb.r = 0;
                        rgb.g = 0;
                        rgb.b = 0 } }
                return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) } },
            RGBToHex = function(rgb) {
                var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
                $.each(hex, function(nr, val) {
                    if (val.length == 1) { hex[nr] = '0' + val } });
                return hex.join('') },
            HSBToHex = function(hsb) {
                return RGBToHex(HSBToRGB(hsb)) },
            restoreOriginal = function() {
                var cal = $(this).parent();
                var col = cal.data('colorpicker').origColor;
                cal.data('colorpicker').color = col;
                fillRGBFields(col, cal.get(0));
                fillHexFields(col, cal.get(0));
                fillHSBFields(col, cal.get(0));
                setSelector(col, cal.get(0));
                setHue(col, cal.get(0));
                setNewColor(col, cal.get(0)) };
        return { init: function(opt) { opt = $.extend({}, defaults, opt || {});
                if (typeof opt.color == 'string') { opt.color = HexToHSB(opt.color) } else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) { opt.color = RGBToHSB(opt.color) } else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) { opt.color = fixHSB(opt.color) } else {
                    return this }
                return this.each(function() {
                    if (!$(this).data('colorpickerId')) {
                        var options = $.extend({}, opt);
                        options.origColor = opt.color;
                        var id = 'collorpicker_' + parseInt(Math.random() * 1000);
                        $(this).data('colorpickerId', id);
                        var cal = $(tpl).attr('id', id);
                        if (options.flat) { cal.appendTo(this).show() } else { cal.appendTo(document.body) }
                        options.fields = cal.find('input').bind('keyup', keyDown).bind('change', change).bind('blur', blur).bind('focus', focus);
                        cal.find('span').bind('mousedown', downIncrement).end().find('>div.colorpicker_current_color').bind('click', restoreOriginal);
                        options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
                        options.selectorIndic = options.selector.find('div div');
                        options.el = this;
                        options.hue = cal.find('div.colorpicker_hue div');
                        cal.find('div.colorpicker_hue').bind('mousedown', downHue);
                        options.newColor = cal.find('div.colorpicker_new_color');
                        options.currentColor = cal.find('div.colorpicker_current_color');
                        cal.data('colorpicker', options);
                        cal.find('div.colorpicker_submit').bind('mouseenter', enterSubmit).bind('mouseleave', leaveSubmit).bind('click', clickSubmit);
                        fillRGBFields(options.color, cal.get(0));
                        fillHSBFields(options.color, cal.get(0));
                        fillHexFields(options.color, cal.get(0));
                        setHue(options.color, cal.get(0));
                        setSelector(options.color, cal.get(0));
                        setCurrentColor(options.color, cal.get(0));
                        setNewColor(options.color, cal.get(0));
                        if (options.flat) { cal.css({ position: 'relative', display: 'block' }) } else { $(this).bind(options.eventName, show) } } }) }, showPicker: function() {
                return this.each(function() {
                    if ($(this).data('colorpickerId')) { show.apply(this) } }) }, hidePicker: function(t) {
                return this.each(function() {
                    if ($(this).data('colorpickerId')) { $('#' + $(this).data('colorpickerId')).hide(t) } }) }, setColor: function(col) {
                if (typeof col == 'string') { col = HexToHSB(col) } else if (col.r != undefined && col.g != undefined && col.b != undefined) { col = RGBToHSB(col) } else if (col.h != undefined && col.s != undefined && col.b != undefined) { col = fixHSB(col) } else {
                    return this }
                return this.each(function() {
                    if ($(this).data('colorpickerId')) {
                        var cal = $('#' + $(this).data('colorpickerId'));
                        cal.data('colorpicker').color = col;
                        cal.data('colorpicker').origColor = col;
                        fillRGBFields(col, cal.get(0));
                        fillHSBFields(col, cal.get(0));
                        fillHexFields(col, cal.get(0));
                        setHue(col, cal.get(0));
                        setSelector(col, cal.get(0));
                        setCurrentColor(col, cal.get(0));
                        setNewColor(col, cal.get(0)) } }) } } }();
    $.fn.extend({ ColorPicker: ColorPicker.init, ColorPickerHide: ColorPicker.hidePicker, ColorPickerShow: ColorPicker.showPicker, ColorPickerSetColor: ColorPicker.setColor }) })(jQuery);

/*
 * jquery.firstebox.min
 */
var fb_pathToImage = "/res/common/img/jquery_ui/loading.gif";
var ftop1 = 0,
    ftop2 = 0,
    ftop = 0,
    fleft = 0,
    fftop = 0;
$(document).ready(function() { fb_init('.firstebox');
    imgLoader = new Image();
    imgLoader.src = fb_pathToImage });

function fb_init(domChunk) { $(domChunk).unbind('click');
    $(domChunk).click(function() {
        var t = this.title || this.name || null;
        var a = this.href || this.alt;
        var g = this.rel || false;
        fb_show(t, a, g);
        this.blur();
        return false }) };

function fb_show(caption, url, imageGroup) {
    try { ftop = 0, fleft = 0, fftop = 0, ftop1 = 0, ftop2 = 0;
        if (typeof document.body.style.maxHeight === "undefined") { $("body", "html").css({ height: "100%", width: "100%" });
            $("html").css("overflow", "hidden");
            if (document.getElementById("FB_HideSelect") === null) { $("body").append("<iframe id='FB_HideSelect'></iframe><div id='FB_overlay'></div><div id='FB_window'></div>");
                $("#FB_overlay").click(fb_remove) } } else {
            if (document.getElementById("FB_overlay") === null) { $("body").append("<div id='FB_overlay'></div><div id='FB_window'></div>");
                $("#FB_overlay").click(fb_remove) } };
        if (fb_detectMacXFF()) { $("#FB_overlay").addClass("FB_overlayMacFFBGHack") } else { $("#FB_overlay").addClass("FB_overlayBG") };
        if (caption === null) { caption = "" };
        $("body").append("<div id='FB_load'><img src='" + imgLoader.src + "' /></div>");
        $('#FB_load').show();
        var baseURL;
        if (url.indexOf("?") !== -1) { baseURL = url.substr(0, url.indexOf("?")) } else { baseURL = url };
        var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
        var urlType = baseURL.toLowerCase().match(urlString);
        if (urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp') { FB_PrevCaption = "";
            FB_PrevURL = "";
            FB_PrevHTML = "";
            FB_PrevHTML1 = "";
            FB_NextCaption = "";
            FB_NextURL = "";
            FB_NextHTML = "";
            FB_NextHTML1 = "";
            FB_imageCount = "";
            FB_FoundURL = false;
            if (imageGroup) { FB_TempArray = $("a[rel=" + imageGroup + "]").get();
                for (FB_Counter = 0;
                    ((FB_Counter < FB_TempArray.length) && (FB_NextHTML === "")); FB_Counter++) {
                    var urlTypeTemp = FB_TempArray[FB_Counter].href.toLowerCase().match(urlString);
                    if (!(FB_TempArray[FB_Counter].href == url)) {
                        if (FB_FoundURL) { FB_NextCaption = FB_TempArray[FB_Counter].title;
                            FB_NextURL = FB_TempArray[FB_Counter].href;
                            FB_NextHTML = "<span id='FB_next'>&nbsp;&nbsp;<a href='#'>\u4E0B\u4E00\u5F20 &gt;</a></span>";
                            FB_NextHTML1 = '<a href="#" id="nextLink" title="\u4E0B\u4E00\u5F20"></a>' } else { FB_PrevCaption = FB_TempArray[FB_Counter].title;
                            FB_PrevURL = FB_TempArray[FB_Counter].href;
                            FB_PrevHTML = "<span id='FB_prev'>&nbsp;&nbsp;<a href='#'>&lt; \u4E0A\u4E00\u5F20</a></span>";
                            FB_PrevHTML1 = '<a href="#" title="\u4E0A\u4E00\u5F20" id="prevLink"></a>' } } else { FB_FoundURL = true;
                        FB_imageCount = "\u56FE\u7247 " + (FB_Counter + 1) + " / " + (FB_TempArray.length) } } };
            imgPreloader = new Image();
            imgPreloader.onload = function() { imgPreloader.onload = null;
                var pagesize = fb_getPageSize();
                var x = pagesize[0] - 150;
                var y = pagesize[1] - 150;
                var imageWidth = imgPreloader.width;
                var imageHeight = imgPreloader.height;
                if (imageWidth > x) { imageHeight = imageHeight * (x / imageWidth);
                    imageWidth = x;
                    if (imageHeight > y) { imageWidth = imageWidth * (y / imageHeight);
                        imageHeight = y } } else if (imageHeight > y) { imageWidth = imageWidth * (y / imageHeight);
                    imageHeight = y;
                    if (imageWidth > x) { imageHeight = imageHeight * (x / imageWidth);
                        imageWidth = x } };
                FB_WIDTH = imageWidth + 30;
                FB_HEIGHT = imageHeight + 60;
                $("#FB_window").append("<img id='FB_Image' src='" + url + "' width='" + imageWidth + "' height='" + imageHeight + "' alt='" + caption + "'/><div id='hoverNav'>" + FB_PrevHTML1 + FB_NextHTML1 + "</div><div id='FB_caption'>" + caption + "<div id='FB_secondLine'>" + FB_imageCount + FB_PrevHTML + FB_NextHTML + "</div></div><div id='FB_closeWindow'><a href='#' id='FB_closeWindowButton' title='\u5173\u95ED\u6216\u6309\u952E\u76D8\u9000\u51FA\u952E'>\u5173\u95ED</a></div>");
                $("#FB_closeWindowButton").click(fb_remove);
                if (!(FB_PrevHTML === "")) {
                    function goPrev() {
                        if ($(document).unbind("click", goPrev)) { $(document).unbind("click", goPrev) };
                        $("#FB_window").remove();
                        $("body").append("<div id='FB_window'></div>");
                        fb_show(FB_PrevCaption, FB_PrevURL, imageGroup);
                        return false };
                    $('#prevLink').height(imageHeight);
                    $("#FB_prev").click(goPrev);
                    $("#prevLink").click(goPrev) };
                if (!(FB_NextHTML === "")) {
                    function goNext() { $("#FB_window").remove();
                        $("body").append("<div id='FB_window'></div>");
                        fb_show(FB_NextCaption, FB_NextURL, imageGroup);
                        return false };
                    $("#FB_next").click(goNext);
                    $('#nextLink').height(imageHeight);
                    $("#nextLink").click(goNext) };
                document.onkeydown = function(e) {
                    if (e == null) { keycode = event.keyCode } else { keycode = e.which };
                    if (keycode == 27) { fb_remove() } else if (keycode == 39) {
                        if (!(FB_NextHTML === "")) { document.onkeydown = "";
                            goNext() } } else if (keycode == 37) {
                        if (!(FB_PrevHTML === "")) { document.onkeydown = "";
                            goPrev() } } };
                fb_position();
                $("#FB_load").remove();
                $("#FB_ImageOff").click(fb_remove);
                $("#FB_window").css({ display: "block" }) };
            imgPreloader.src = url;
            $("#FB_window").fdrag(true) } else {
            var queryString = url.replace(/^[^\?]+\??/, '');
            var params = fb_parseQuery(queryString);
            var fwidth = params['width'];
            var fheight = params['height'];
            if (fwidth <= 1) { fwidth = $("body").width() * fwidth };
            if (fheight <= 1) { fheight = document.documentElement.clientHeight * fheight };
            FB_WIDTH = (fwidth * 1) + 30 || 630;
            FB_HEIGHT = (fheight * 1) + 40 || 440;
            ajaxContentW = FB_WIDTH - 30;
            ajaxContentH = FB_HEIGHT - 45;
            if (url.indexOf('FB_iframe') != -1) { urlNoQuery = url.split('FB_');
                $("#FB_iframeContent").remove();
                if (params['modal'] != "true") { $("#FB_window").append("<div id='FB_title'><div id='FB_ajaxWindowTitle'>" + caption + "</div><div id='FB_closeAjaxWindow'><a href='#' id='FB_closeWindowButton' title='\u5173\u95ED\u6216\u6309\u952E\u76D8\u9000\u51FA\u952E'>\u5173\u95ED</a></div></div><iframe frameborder='0' hspace='0' src='" + urlNoQuery[0] + "' id='FB_iframeContent' name='FB_iframeContent" + Math.round(Math.random() * 1000) + "' onload='fb_showIframe()' style='width:" + (ajaxContentW + 29) + "px;height:" + (ajaxContentH + 17) + "px;' > </iframe>") } else { $("#FB_overlay").unbind();
                    $("#FB_window").append("<iframe frameborder='0' hspace='0' src='" + urlNoQuery[0] + "' id='FB_iframeContent' name='FB_iframeContent" + Math.round(Math.random() * 1000) + "' onload='fb_showIframe()' style='width:" + (ajaxContentW + 29) + "px;height:" + (ajaxContentH + 17) + "px;'> </iframe>") } } else {
                if ($("#FB_window").css("display") != "block") {
                    if (params['modal'] != "true") { $("#FB_window").append("<div id='FB_title'><div id='FB_ajaxWindowTitle'>" + caption + "</div><div id='FB_closeAjaxWindow'><a href='#' id='FB_closeWindowButton' title='\u5173\u95ED\u6216\u6309\u952E\u76D8\u9000\u51FA\u952E'>\u5173\u95ED</a></div></div><div id='FB_ajaxContent' style='width:" + ajaxContentW + "px;height:" + ajaxContentH + "px'></div>") } else { $("#FB_overlay").unbind();
                        $("#FB_window").append("<div id='FB_ajaxContent' class='FB_modal' style='width:" + ajaxContentW + "px;height:" + ajaxContentH + "px;'></div>") } } else { $("#FB_ajaxContent")[0].style.width = ajaxContentW + "px";
                    $("#FB_ajaxContent")[0].style.height = ajaxContentH + "px";
                    $("#FB_ajaxContent")[0].scrollTop = 0;
                    $("#FB_ajaxWindowTitle").html(caption) } };
            $("#FB_closeWindowButton").click(fb_remove);
            if (url.indexOf('FB_inline') != -1) { $("#FB_ajaxContent").append($('#' + params['inlineId']).children());
                $("#FB_window").unload(function() { $('#' + params['inlineId']).append($("#FB_ajaxContent").children()) });
                fb_position();
                $("#FB_load").remove();
                $("#FB_window").css({ display: "block" }) } else if (url.indexOf('FB_iframe') != -1) { fb_position();
                if ($.browser.safari) { $("#FB_load").remove();
                    $("#FB_window").css({ display: "block" }) } } else { $("#FB_ajaxContent").load(url += "&random=" + (new Date().getTime()), function() { fb_position();
                    $("#FB_load").remove();
                    fb_init("#FB_ajaxContent a.firstebox");
                    $("#FB_window").css({ display: "block" }) }) };
            $("#FB_window").fdrag(true) };
        if (!params['modal']) { $("#FB_window").setHandler('FB_title');
            document.onkeyup = function(e) {
                if (e == null) { keycode = event.keyCode } else { keycode = e.which };
                if (keycode == 27) { fb_remove() } } } } catch (e) {} };

function fb_showIframe() { $("#FB_load").remove();
    $("#FB_window").css({ display: "block" }) };

function fb_remove() { $("#FB_imageOff").unbind("click");
    $("#FB_closeWindowButton").unbind("click");
    $("#FB_window").fadeOut("fast", function() { $('#FB_window,#FB_overlay,#FB_HideSelect').trigger("unload").unbind().remove() });
    $("#FB_load").remove();
    if (typeof document.body.style.maxHeight == "undefined") { $("body", "html").css({ height: "auto", width: "auto" });
        $("html").css("overflow", "") };
    document.onkeydown = "";
    document.onkeyup = "";
    return false };

function fb_position() { $("#FB_window").css({ width: FB_WIDTH + 'px' });
    $("#FB_window").fPosition({ vpos: "middle", hpos: "center", fw: FB_WIDTH, fh: FB_HEIGHT }) };

function fb_parseQuery(query) {
    var Params = {};
    if (!query) {
        return Params };
    var Pairs = query.split(/[;&]/);
    for (var i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split('=');
        if (!KeyVal || KeyVal.length != 2) {
            continue };
        var key = unescape(KeyVal[0]);
        var val = unescape(KeyVal[1]);
        val = val.replace(/\+/g, ' ');
        Params[key] = val };
    return Params };

function fb_getPageSize() {
    var de = document.documentElement;
    var w = window.innerWidth || self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
    var h = window.innerHeight || self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
    arrayPageSize = [w, h];
    return arrayPageSize };

function fb_detectMacXFF() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox') != -1) {
        return true } };
(function($) { $.fn.fPosition = function(options) {
        var defaults = { vpos: null, hpos: null };
        var top;
        var left;
        var options = $.extend(defaults, options);
        return this.each(function(index) {
            var $this = $(this);
            $this.css("position", "absolute");
            if (jQuery.browser.opera) { ftop = ((parseInt(window.innerHeight) / 2) - (options.fh / 2));
                $this.css("top", ($(document).scrollTop() + (parseInt(window.innerHeight) / 2) - (options.fh / 2)) + "px") } else { ftop = ((parseInt($(window).height()) / 2) - (options.fh / 2));
                $this.css("top", ($(document).scrollTop() + (parseInt($(window).height()) / 2) - (options.fh / 2)) + "px") };
            $this.css("left", ((parseInt($(window).width()) / 2) - (options.fw / 2)) + "px");
            fleft = ((parseInt($(window).width()) / 2) - (options.fw / 2)) }) };
    var isMouseDown = false;
    var currentElement = null;
    var dropCallbacks = {};
    var dragCallbacks = {};
    var bubblings = {};
    var lastMouseX;
    var lastMouseY;
    var lastElemTop;
    var lastElemLeft;
    var dragStatus = {};
    var holdingHandler = false;
    $.getMousePosition = function(e) {
        var posx = 0;
        var posy = 0;
        if (!e) var e = window.event;
        if (e.pageX || e.pageY) { posx = e.pageX;
            posy = e.pageY } else if (e.clientX || e.clientY) { posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop };
        return { 'x': posx, 'y': posy } };
    $.updatePosition = function(e) {
        var pos = $.getMousePosition(e);
        var spanX = (pos.x - lastMouseX);
        var spanY = (pos.y - lastMouseY);
        $(currentElement).css("top", (lastElemTop + spanY));
        $(currentElement).css("left", (lastElemLeft + spanX));
        fleft = lastElemLeft + spanX;
        fftop = spanY };
    $(document).mousemove(function(e) {
        if (isMouseDown && dragStatus[currentElement.id] != 'false') { $.updatePosition(e);
            if (dragCallbacks[currentElement.id] != undefined) { dragCallbacks[currentElement.id](e, currentElement) };
            return false } });
    $(document).mouseup(function(e) {
        if (isMouseDown && dragStatus[currentElement.id] != 'false') { isMouseDown = false;
            if (dropCallbacks[currentElement.id] != undefined) { dropCallbacks[currentElement.id](e, currentElement) };
            return false } });
    $.fn.ondrag = function(callback) {
        return this.each(function() { dragCallbacks[this.id] = callback }) };
    $.fn.ondrop = function(callback) {
        return this.each(function() { dropCallbacks[this.id] = callback }) };
    $.fn.dragOff = function() {
        return this.each(function() { dragStatus[this.id] = 'off' }) };
    $.fn.dragOn = function() {
        return this.each(function() { dragStatus[this.id] = 'on' }) };
    $.fn.setHandler = function(handlerId) {
        return this.each(function() {
            var draggable = this;
            bubblings[this.id] = true;
            $(draggable).css("cursor", "");
            dragStatus[draggable.id] = "handler";
            $("#" + handlerId).css("cursor", "move");
            $("#" + handlerId).mousedown(function(e) { holdingHandler = true;
                $(draggable).trigger('mousedown', e) });
            $("#" + handlerId).mouseup(function(e) { holdingHandler = false }) }) };
    $.fn.fdrag = function(allowBubbling) {
        return this.each(function() {
            if (undefined == this.id || !this.id.length) this.id = "easydrag" + (new Date().getTime());
            bubblings[this.id] = allowBubbling ? true : false;
            dragStatus[this.id] = "on";
            $(this).css("cursor", "move");
            $(this).mousedown(function(e) {
                if ((dragStatus[this.id] == "off") || (dragStatus[this.id] == "handler" && !holdingHandler)) return bubblings[this.id];
                $(this).css("position", "absolute");
                $(this).css("z-index", parseInt(new Date().getTime() / 1000));
                isMouseDown = true;
                currentElement = this;
                var pos = $.getMousePosition(e);
                lastMouseX = pos.x;
                lastMouseY = pos.y;
                lastElemTop = this.offsetTop;
                lastElemLeft = this.offsetLeft;
                $.updatePosition(e);
                return bubblings[this.id] }) }) } })(jQuery);
$(window).scroll(function() {
    if (ftop2 != fftop) { ftop1 = ftop1 + fftop;
        ftop2 = fftop };
    $("#FB_window").css("top", (ftop + ftop1 + $(document).scrollTop()) + "px").css("left", (fleft + $(document).scrollLeft()) + "px") });

/*
 * toolbar like google js
 */
var v = window,
    ma = Function,
    navg = navigator,
    u = Number,
    J = Error,
    R = document,
    la = Boolean,
    o = Math,
    S = isNaN,
    m = undefined;

function pa(a, b) {
    return a.height = b }

function ra(a, b) {
    return a.relatedTarget = b }

function V(a, b) {
    return a.currentTarget = b }

function ea(a, b) {
    return a.toString = b }

function qa(a, b) {
    return a.left = b }

function W(a, b) {
    return a.width = b }
var Oa = "document",
    L = "height",
    za = "slice",
    na = "offsetLeft",
    B = "relatedTarget",
    K = "currentTarget",
    ba = "offsetTop",
    da = "target",
    i = "length",
    ca = "play",
    w = "type",
    kb = "firstChild",
    _P = "prototype",
    ya = "nodeType",
    k = "style",
    aa = "left",
    D = "width",
    U = "parentNode",
    oa = "offsetWidth",
    xa = "body",
    lb = lb || {},
    I = this;
var l = function(a) {
        return typeof a != "undefined" },
    O = function(a) {
        return a instanceof Array || va(a) && typeof a.join == "function" && typeof a.reverse == "function" },
    wa = function(a) {
        return typeof a == "string" },
    db = function(a) {
        return typeof a == "number" },
    cb = function(a) {
        return typeof a == "function" },
    va = function(a) {
        return a != null && typeof a == "object" },
    A = function(a) {
        if (a.hasOwnProperty && a.hasOwnProperty(fa)) {
            return a[fa] }
        if (!a[fa]) { a[fa] = String(++Pb) }
        return a[fa] },
    fa = "closure_hashCode_",
    Pb = 0,
    sb = function(a) {
        if (va(a)) {
            if (a.clone) {
                return a.clone() }
            var b = O(a) ? [] : {};
            for (var c in a) { b[c] = sb(a[c]) }
            return b }
        return a },
    rb = function(a, b) {
        var c = a.na || [];
        c = c.concat(Array[_P][za].call(arguments, 2));
        if (a.Q) { b = a.Q }
        if (a.P) { a = a.P }
        var d = function() {
            var f = c.concat(Array[_P][za].call(arguments));
            return a.apply(b, f) };
        d.na = c;
        d.Q = b;
        d.P = a;
        return d },
    Qb = function(a, b) {
        for (var c in b) { a[c] = b[c] } };
if (!ma[_P].apply) { ma[_P].apply = function(a, b) {
        var c = [],
            d, f;
        if (!a) a = I;
        if (!b) b = [];
        for (var e = 0; e < b[i]; e++) { c[e] = "args[" + e + "]" }
        f = "oScope.__applyTemp__.peek().(" + c.join(",") + ");";
        if (!a.__applyTemp__) { a.__applyTemp__ = [] }
        a.__applyTemp__.push(this);
        d = eval(f);
        a.__applyTemp__.pop();
        return d } }
ma[_P].bind = function(a) {
    return rb.apply(null, [this, a].concat(Array[_P][za].call(arguments, 1))) };
ma[_P].inherits = function(a) {
    function b() {}
    b.prototype = a[_P];
    this.oa = a[_P];
    this.prototype = new b;
    this[_P].constructor = this };
if (!Array[_P].push) { Array[_P].push = function() {
        for (var a = 0; a < arguments[i]; a++) { this[this[i]] = arguments[a] }
        return this[i] } }
if (!Array[_P].pop) { Array[_P].pop = function() {
        var a;
        if (this[i]) { a = this[this[i] - 1];
            this.length-- }
        return a } }
Array[_P].peek = function() {
    return this[this[i] - 1] };
if (!Array[_P].shift) { Array[_P].shift = function() {
        var a;
        if (this[i]) { a = this[0];
            for (var b = 0; b < this[i] - 1; b++) { this[b] = this[b + 1] }
            this.length-- }
        return a } }
if (!Array[_P].unshift) { Array[_P].unshift = function() {
        var a = arguments[i];
        for (var b = this[i] - 1; b >= 0; b--) { this[b + a] = this[b] }
        for (var c = 0; c < a; c++) { this[c] = arguments[c] }
        return this[i] } };
var Pa = function(a, b, c) {
        if (a.indexOf) {
            return a.indexOf(b, c) }
        if (Array.indexOf) {
            return Array.indexOf(a, b, c) }
        if (c == null) { c = 0 } else if (c < 0) { c = o.max(0, a[i] + c) }
        for (var d = c; d < a[i]; d++) {
            if (a[d] === b) return d }
        return -1 },
    nb = function(a, b, c) {
        if (a.filter) {
            return a.filter(b, c) }
        if (Array.filter) {
            return Array.filter(a, b, c) }
        var d = a[i],
            f = [],
            e = wa(a) ? a.split("") : a;
        for (var h = 0; h < d; h++) {
            if (b.call(c, e[h], h, a)) { f.push(e[h]) } }
        return f },
    ob = function(a, b, c) {
        if (a.map) {
            return a.map(b, c) }
        if (Array.map) {
            return Array.map(a, b, c) }
        var d = a[i],
            f = [],
            e = wa(a) ? a.split("") : a;
        for (var h = 0; h < d; h++) { f.push(b.call(c, e[h], h, a)) }
        return f },
    mb = function(a, b) {
        if (a.contains) {
            return a.contains(b) }
        return Pa(a, b) > -1 },
    pb = function(a, b) {
        var c = Pa(a, b),
            d;
        if (d = c != -1) { qb(a, c) }
        return d },
    qb = function(a, b) {
        return Array[_P].splice.call(a, b, 1)[i] == 1 };
var Rb = function(a, b) {
    var c;
    if (c = b in a) { delete a[b] }
    return c };
var Sb = function(a) {
        var b = {};
        for (var c = 0; c < a[i]; c++) { b[a.charAt(c)] = true }
        return b },
    gc = Sb("()[]{}+-?*.$^|,:#<!\\");
var Z = function(a, b) { W(this, l(a) ? u(a) : m);
    pa(this, l(b) ? u(b) : m) };
Z[_P].clone = function() {
    return new Z(this[D], this[L]) };
ea(Z[_P], function() {
    return "(" + this[D] + " x " + this[L] + ")" });
Z.equals = function(a, b) {
    if (a == b) {
        return true }
    if (!a || !b) {
        return false }
    return a[D] == b[D] && a[L] == b[L] };
var G = function(a, b) { this.x = l(a) ? u(a) : m;
    this.y = l(b) ? u(b) : m };
G[_P].clone = function() {
    return new G(this.x, this.y) };
ea(G[_P], function() {
    return "(" + this.x + ", " + this.y + ")" });
G.equals = function(a, b) {
    if (a == b) {
        return true }
    if (!a || !b) {
        return false }
    return a.x == b.x && a.y == b.y };
G.distance = function(a, b) {
    var c = a.x - b.x,
        d = a.y - b.y;
    return o.sqrt(c * c + d * d) };
G.squaredDistance = function(a, b) {
    var c = a.x - b.x,
        d = a.y - b.y;
    return c * c + d * d };
G.difference = function(a, b) {
    return new G(a.x - b.x, a.y - b.y) };
var Ja = function(a, b) { a = u(a);
    b = u(b);
    this.start = a < b ? a : b;
    this.end = a < b ? b : a };
Ja[_P].clone = function() {
    return new Ja(this.start, this.end) };
ea(Ja[_P], function() {
    return "[" + this.start + ", " + this.end + "]" });
var Ka = function(a, b, c, d) { qa(this, l(a) ? u(a) : m);
    this.top = l(b) ? u(b) : m;
    W(this, l(c) ? u(c) : m);
    pa(this, l(d) ? u(d) : m) };
Ka[_P].clone = function() {
    return new Ka(this[aa], this.top, this[D], this[L]) };
ea(Ka[_P], function() {
    return "(" + this[aa] + ", " + this.top + " - " + this[D] + "w x " + this[L] + "h)" });
var Ia = function(a, b, c, d) { this.top = l(a) ? u(a) : m;
    this.right = l(b) ? u(b) : m;
    this.bottom = l(c) ? u(c) : m;
    qa(this, l(d) ? u(d) : m) };
Ia[_P].clone = function() {
    return new Ia(this.top, this.right, this.bottom, this[aa]) };
ea(Ia[_P], function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this[aa] + "l)" });
var Ma, ka, Xb, fb, Zb, gb, Yb, Na, bc, ac, cc, $b;
(function() {
    var a = navg.userAgent,
        b = typeof opera != "undefined",
        c = !b && a.indexOf("MSIE") != -1,
        d = !b && a.indexOf("Safari") != -1,
        f = !b && navg.product == "Gecko" && !d,
        e = f && navg.vendor == "Camino",
        h = !b && a.indexOf("Konqueror") != -1,
        j = h || d,
        n, p;
    if (b) { n = opera.version() } else {
        if (f) { p = /rv\:([^\);]+)(\)|;)/ } else if (c) { p = /MSIE\s+([^\);]+)(\)|;)/ } else if (d) { p = /AppleWebKit\/(\S+)/ } else if (h) { p = /Konqueror\/([^\);]+)(\)|;)/ }
        if (p) { p.test(a);
            n = RegExp.$1 } }
    var T = navg.platform,
        hb = T.indexOf("Mac") != -1,
        ib = T.indexOf("Win") != -1,
        jb = T.indexOf("Linux") != -1;
    Ma = b;
    ka = c;
    Xb = f;
    fb = e;
    Zb = h;
    gb = d;
    Yb = j;
    Na = n;
    bc = navg.platform;
    ac = hb;
    cc = ib;
    $b = jb })();
var dc = function(a, b) {
        if (!S(a) && !S(b)) {
            return a - b }
        var c = a.split("."),
            d = b.split("."),
            f = o.min(c[i], d[i]);
        for (var e = 0; e < f; e++) {
            if (typeof d[e] == "undefined") {
                return 1 }
            if (typeof c[e] == "undefined") {
                return -1 }
            if (!S(c[e]) && S(d[e]) && c[e] == parseInt(d[e], 10)) {
                return 1 }
            if (S(c[e]) && !S(d[e]) && parseInt(c[e], 10) == d[e]) {
                return -1 }
            if (d[e] > c[e]) {
                return -1 } else if (d[e] < c[e]) {
                return 1 } }
        return 0 },
    ec = function(a) {
        return dc(Na, a) >= 0 };
var Ba, Ca = function() {
        if (!Ba) { Ba = new E }
        return Ba },
    wb = function() {
        return Ca().T() },
    xb = function(a) {
        return Ca().U(a) },
    Aa = xb,
    yb = function(a, b, c) {
        return Ca().V(a, b, c) },
    sa = yb,
    ub = function(a, b) { a.appendChild(b) },
    Ab = function(a) {
        if (a[U]) { a[U].removeChild(a) } },
    M = function(a, b) {
        if (typeof a.contains != "undefined") {
            return a == b || a.contains(b) }
        if (typeof a.compareDocumentPosition != "undefined") {
            return a == b || la(a.compareDocumentPosition(b) & 16) }
        while (b && a != b) { b = b[U] }
        return b == a },
    Da = function(a) {
        return a[ya] == 9 ? a : a.ownerDocument || a[Oa] },
    vb = function(a, b, c, d) {
        if (a != null) {
            for (var f = 0, e; e = a.childNodes[f]; f++) {
                if (b(e)) { c.push(e);
                    if (d) {
                        return } }
                vb(e, b, c, d) } } },
    tb = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    Qa = { IMG: " ", BR: "\n" },
    zb = function(a, b, c) {
        if (a.nodeName in tb) {} else if (a[ya] == 3) {
            if (c) { b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) } else { b.push(a.nodeValue) } } else if (a.nodeName in Qa) { b.push(Qa[a.nodeName]) } else {
            var d = a[kb];
            while (d) { zb(d, b, c);
                d = d.nextSibling } } },
    E = function(a) { this.p = a || I[Oa] || R };
E[_P].T = function() {
    return this.p };
E[_P].U = function(a) {
    if (wa(a)) {
        return this.p.getElementById(a) } else {
        return a } };
E[_P].V = function(a, b, c) {
    var d = a || "*",
        f = c || this.p,
        e = f.getElementsByTagName(d);
    if (b) {
        return nb(e, function(h) {
            return mb(h.className.split(" "), b) }) } else {
        return e } };
E[_P].createElement = function(a) {
    return this.p.createElement(a) };
E[_P].createTextNode = function(a) {
    return this.p.createTextNode(a) };
E[_P].appendChild = ub;
E[_P].removeNode = Ab;
E[_P].contains = M;
var La, eb = function(a, b) {
        var c = Da(a);
        if (c.defaultView && c.defaultView.getComputedStyle) {
            var d = c.defaultView.getComputedStyle(a, "");
            if (d) {
                return d[b] } }
        if (a.currentStyle) {
            return a.currentStyle[b] } else {
            return a[k][b] } },
    Tb = function(a) {
        var b;
        if (a) {
            if (a[ya] == 9) { b = a } else { b = Da(a) } } else { b = wb() }
        if (ka && b.compatMode != "CSS1Compat") {
            return b[xa] }
        return b.documentElement },
    Ub = function(a) {
        var b = Da(a);
        if (!l(La)) { La = fb && !ec("1.8.0.11") }
        var c = new G(0, 0),
            d = Tb(b);
        if (a == d) {
            return c }
        var f = null,
            e;
        if (a.getBoundingClientRect) { e = a.getBoundingClientRect();
            var h = d.scrollTop,
                j = d.scrollLeft;
            c.x = e[aa] + j;
            c.y = e.top + h } else if (b.getBoxObjectFor && !La) { e = b.getBoxObjectFor(a);
            var n = b.getBoxObjectFor(d);
            c.x = e.screenX - n.screenX;
            c.y = e.screenY - n.screenY } else { c.x = a[na];
            c.y = a[ba];
            f = a.offsetParent;
            if (f != a) {
                while (f) { c.x += f[na];
                    c.y += f[ba];
                    f = f.offsetParent } }
            if (Ma || gb && eb(a, "position") == "absolute") { c.y -= b[xa][ba] }
            f = a[U];
            while (f && f != d) { c.x -= f.scrollLeft;
                if (!Ma || f.tagName != "TR") { c.y -= f.scrollTop }
                f = f[U] } }
        return c },
    Vb = function(a) {
        if (eb(a, "display") != "none") {
            return new Z(a[oa], a.offsetHeight) }
        var b = a[k],
            c = b.visibility,
            d = b.position;
        b.visibility = "hidden";
        b.position = "absolute";
        b.display = "";
        var f = a[oa],
            e = a.offsetHeight;
        b.display = "none";
        b.position = d;
        b.visibility = c;
        return new Z(f, e) },
    Wb = function(a, b) {
        var c = a[k];
        if ("opacity" in c) { c.opacity = b } else if ("MozOpacity" in c) { c.MozOpacity = b } else if ("KhtmlOpacity" in c) { c.KhtmlOpacity = b } else if ("filter" in c) { c.filter = "alpha(opacity=" + b * 100 + ")" } };
var H = function() {};
H[_P].w = false;
H[_P].A = function() {
    return this.w };
H[_P].dispose = function() {
    if (!this.w) { this.w = true } };
var C = {},
    t = {},
    Ta = "on",
    ia = "_",
    s = function(a, b, c, d, f) {
        if (O(b)) {
            for (var e = 0; e < b[i]; e++) { s(a, b[e], c, d, f) }
            return null }
        var h = N(b),
            j = ha(a, h, c, d, f);
        if (j in C) {
            return j }
        var n = A(a);
        if (!(n in t)) { t[n] = {};
            t[n].G = 0 }
        if (!(h in t[n])) { t[n].G++;
            t[n][h] = [] }
        t[n][h].push(j);
        var p = Db(a, j, b);
        C[j] = new Ra(c, p, a, b, d, f);
        if (b instanceof ga) { b.O(C[j]) } else {
            if (a.addEventListener) {
                if (a == I || !a.H) { a.addEventListener(b, p, d) } } else if (a.attachEvent) { a.attachEvent(Ta + b, p) } else {
                throw J("Object {" + a + "} does not support event listeners."); } }
        return j },
    Ua = function(a, b, c, d, f) {
        if (O(b)) {
            for (var e = 0; e < b[i]; e++) { Ua(a, b[e], c, d, f) }
            return null }
        var h = ha(a, b, c, d, f);
        return Y(h) },
    Y = function(a) {
        if (!(a in C)) {
            return false }
        var b = C[a],
            c = b.src,
            d = b[w],
            f = b.proxy;
        if (d instanceof ga) { d.fa(b) } else {
            if (c.removeEventListener) {
                if (c == I || !c.H) { c.removeEventListener(d, f, b.capture) } } else if (c.detachEvent) { c.detachEvent(Ta + d, f) } }
        delete C[a];
        var e = N(d),
            h = A(c),
            j = t[h],
            n = j[e];
        pb(n, a);
        if (n[i] == 0) { j.G--;
            delete j[e] }
        if (j.G == 0) { delete t[h] }
        return true },
    Jb = function(a, b, c) {
        var d = 0;
        if (a) {
            var f = Cb(a, b, c);
            for (var e = 0; e < f[i]; e++) {
                var h = f[e];
                if (h) { Y(ha(h.src, h[w], h.listener, h.capture, h.handler));
                    d++ } } } else {
            for (var j in C) { Y(j);
                d++ } }
        return d },
    Cb = function(a, b, c) {
        var d = A(a),
            f = [];
        if (d in t) {
            var e = t[d];
            if (b) {
                var h = N(b);
                if (b in e) { Sa(f, e[h], c) } } else {
                for (var j in e) { Sa(f, e[j], c) } } }
        return f },
    N = function(a) {
        return a instanceof ga ? A(a) : a },
    Sa = function(a, b, c) {
        var d = !l(c);
        for (var f = 0; f < b[i]; f++) {
            var e = b[f],
                h = C[e];
            if (d || h.capture == c) { a.push(h) } } },
    Eb = function(a, b, c) {
        var d = A(a);
        if (d in t) {
            var f = N(b);
            if (f in t[d]) {
                return t[d][f] } }
        return null },
    ta = "mouseout",
    Fb = function(a, b, c) {
        var d = C[a];
        if (!d) {
            return m }
        if (!d.src.addEventListener && !Hb(d)) {
            return m }
        if (!c && v.event || c && Ib(c)) {
            var f = new X(c || v.event, this);
            try { f.stopPropagation();
                f.i = false;
                var e, h = false;
                if (Fa) { e = [] } else { e = Kb;
                    e.length = 0;
                    h = true;
                    Fa = true }
                for (var j = f[K]; j; j = j[U]) { e.push(j) }
                var n = true;
                for (var p = e[i] - 1; !f.i && p >= 0; p--) { V(f, e[p]);
                    n &= ua(e[p], b, true, f) }
                for (var p = 0; !f.i && p < e[i]; p++) { V(f, e[p]);
                    n &= ua(e[p], b, false, f) }
                if (h) { Fa = false }
                return n } finally { f.dispose() } } else if (c && Gb(c)) {
            var T = new X(c, this);
            try {
                return Ea(d, T) } finally { T.dispose() } } else {
            return Ea(d, c) } },
    Db = function(a, b, c) {
        return function(d) {
            return Fb.call(a, b, c, d) } },
    Kb = [],
    Fa = false,
    Hb = function(a) {
        var b = N(a[w]),
            c = ha(a.src, a[w], a.listener, a.capture, a.handler),
            d = A(a.src);
        return t[d][b][0] == c },
    ua = function(a, b, c, d) {
        var f = 1,
            e = Eb(a, b, c);
        for (var h = 0; e && h < e[i]; h++) {
            var j = C[e[h]];
            if (j.capture == c) { f &= Ea(j, d) !== false } }
        return la(f) },
    Ea = function(a, b) {
        return a.n.call(a, b) },
    Bb = [],
    ha = function(a, b, c, d, f) {
        if (ka) {
            var e = Bb;
            e[0] = A(a);
            e[1] = N(b);
            e[2] = A(c);
            e[3] = d ? "1" : "0";
            e[4] = f ? A(f) : "";
            return e.join(ia) } else {
            return A(a) + ia + N(b) + ia + A(c) + ia + la(d) + ia + (f ? A(f) : "") } },
    Gb = function(a) {
        return va(a) && /event/i.test(a) },
    Ib = function(a) {
        return ka && va(a) && l(a.srcElement) && l(a.cancelBubble) && l(a[w]) };
var ga = function() {};
ga[_P].O = function(a) {
    throw J("Not implemented"); };
ga[_P].fa = function(a) {
    throw J("Not implemented"); };
var x = function(a, b) { this.type = a;
    this.target = b;
    V(this, this[da]) };
x.inherits(H);
x[_P].i = false;
x[_P].t = true;
x[_P].stopPropagation = function() { this.i = true };
x[_P].preventDefault = function() { this.t = false };
var X = function(a, b) { this.type = a[w];
    this.timestamp = new Date;
    this.target = a[da] || a.srcElement;
    V(this, b);
    ra(this, null);
    if (l(a[B])) { ra(this, a[B]) } else if (this[w] == "mouseover") { ra(this, a.fromElement) } else if (this[w] == ta) { ra(this, a.toElement) }
    this.offsetX = l(a.layerX) ? a.layerX : a.offsetX;
    this.offsetY = l(a.layerY) ? a.layerY : a.offsetY;
    this.clientX = l(a.clientX) ? a.clientX : a.pageX;
    this.clientY = l(a.clientY) ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || (this[w] == "keypress" ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.l = a };
X.inherits(x);
X[_P].stopPropagation = function() { this.i = true;
    if (this.l.stopPropagation) { this.l.stopPropagation() } else { this.l.cancelBubble = true } };
X[_P].preventDefault = function() { this.t = false;
    if (!this.l.preventDefault) { this.l.returnValue = false } else { this.l.preventDefault() } };
X[_P].dispose = function() {
    if (!this.A()) { x[_P].dispose.call(this);
        this.l = null } };
var Ra = function(a, b, c, d, f, e) {
    if (cb(a)) { this.navg = true } else if (a && typeof a.n == "function") { this.navg = false } else {
        throw J("Invalid listener argument"); }
    this.listener = a;
    this.proxy = b;
    this.src = c;
    this.type = d;
    this.capture = !(!f);
    this.handler = e };
Ra[_P].n = function(a) {
    if (this.navg) {
        return this.listener.call(this.handler || this.src, a) }
    return this.listener.n.call(this.listener, a) };
var F = function() {};
F.inherits(H);
F[_P].X = function() {
    return null };
F[_P].addEventListener = function(a, b, c, d) { s(this, a, b, c, d) };
F[_P].removeEventListener = function(a, b, c, d) { Ua(this, a, b, c, d) };
F[_P].dispatchEvent = function(a) {
    if (wa(a)) { a = new x(a, this) } else if (!(a instanceof x)) {
        var b = a;
        a = new x(a[w], this);
        Qb(a, b) } else { a.target = a[da] || this }
    var c = [];
    for (var d = this; d; d = d.X()) { c.push(d) }
    var f = 1;
    for (var e = c[i] - 1; !a.i && e >= 0; e--) { V(a, c[e]);
        f &= ua(c[e], a[w], true, a) && a.t != false }
    for (var e = 0; !a.i && e < c[i]; e++) { V(a, c[e]);
        f &= ua(c[e], a[w], false, a) && a.t != false }
    return la(f) };
F[_P].dispose = function() {
    if (!this.A()) { H[_P].dispose.call(this);
        Jb(this) } };
F[_P].H = true;
var Ob = function(a) {
        return 1 - o.pow(1 - a, 3) },
    g = function(a, b, c, d) { F.call(this);
        if (!O(a) || !O(b)) {
            throw J("Start and end parameters must be arrays");
            return }
        if (a[i] != b[i]) {
            throw J("Start and end points must be the same length");
            return }
        this.j = a;
        this.K = b;
        this.J = c;
        this.N = d;
        this.k = [] };
g.inherits(F);
g.EventType = { PLAY: "play", BEGIN: "begin", RESUME: "resume", END: "end", STOP: "stop", FINISH: "finish", PAUSE: "pause", ANIMATE: "animate", DESTROY: "destroy" };
g.State = { STOPPED: 0, PAUSED: -1, PLAYING: 1 };
g[_P].d = g.State.STOPPED;
g[_P].M = 0;
g[_P].a = 0;
g[_P].m = null;
g[_P].L = null;
g[_P].B = null;
g[_P].v = null;
g[_P].play = function(a) {
    if (a || this.d == g.State.STOPPED) { this.a = 0;
        this.k = this.j } else if (this.d == g.State.PLAYING) {
        return false }
    I.clearTimeout(this.v);
    this.m = (new Date).valueOf();
    if (this.d == g.State.PAUSED) { this.m -= this.J * this.a }
    this.L = this.m + this.J;
    this.B = this.m;
    if (this.a == 0) { this.e(g.EventType.BEGIN) }
    this.e(g.EventType.PLAY);
    if (this.d == g.State.PAUSED) { this.e(g.EventType.RESUME) }
    this.d = g.State.PLAYING;
    this.I();
    return true };
g[_P].stop = function(a) { I.clearTimeout(this.v);
    this.d = g.State.STOPPED;
    if (a) this.a = 1;
    this.C(this.a);
    this.e(g.EventType.STOP);
    this.e(g.EventType.END) };
g[_P].I = function() { I.clearTimeout(this.v);
    var a = (new Date).valueOf();
    this.a = (a - this.m) / (this.L - this.m);
    if (this.a >= 1) this.a = 1;
    this.M = 1000 / (a - this.B);
    this.B = a;
    if (cb(this.N)) { this.C(this.N(this.a)) } else { this.C(this.a) }
    if (this.a == 1) { this.d = g.State.STOPPED;
        this.e(g.EventType.FINISH);
        this.e(g.EventType.END) } else if (this.d == g.State.PLAYING) { this.e(g.EventType.ANIMATE);
        var b = this.I.bind(this);
        this.v = I.setTimeout(b, 20) } };
g[_P].C = function(a) { this.k = new Array(this.j[i]);
    for (var b = 0; b < this.j[i]; b++) { this.k[b] = (this.K[b] - this.j[b]) * a + this.j[b] } };
g[_P].e = function(a) { this.dispatchEvent(new Ga(a, this)) };
var Ga = function(a, b) { x.call(this, a);
    this.coords = b.k;
    this.x = b.k[0];
    this.y = b.k[1];
    this.z = b.k[2];
    this.duration = b.J;
    this.progress = b.a;
    this.fps = b.M;
    this.state = b.d;
    this.anim = b };
Ga.inherits(x);
Ga[_P].F = function() {
    return ob(this.coords, o.round) };
var q = function(a, b, c, d, f) { g.call(this, b, c, d, f);
    this.element = a };
q.inherits(g);
var ja = function(a, b, c, d, f) { q.apply(this, arguments);
    if (b[i] != 2 || c[i] != 2) {
        throw "[goog.fxdhtml.Slide] Start and end points must be 2D";
        return }
    var e = [g.EventType.BEGIN, g.EventType.ANIMATE, g.EventType.END];
    s(this, e, this.da, false, this) };
ja.inherits(q);
ja[_P].da = function(a) { qa(this.element[k], o.round(a.x) + "px");
    this.element[k].top = o.round(a.y) + "px" };
var bb = function(a, b, c, d) {
    var f = [a[na], a[ba]];
    s(this, g.EventType.BEGIN, this.ja, false, this);
    ja.call(this, a, f, b, c, d) };
bb.inherits(ja);
bb[_P].ja = function(a) { this.j = [this.element[na], this.element[ba]] };
var Ha = function(a, b, c, d, f) { q.apply(this, arguments);
    if (b[i] != 2 || c[i] != 2) {
        throw "[goog.fxdhtml.Slide] Start and end points must be 2D";
        return }
    var e = [g.EventType.BEGIN, g.EventType.ANIMATE, g.EventType.END];
    s(this, e, this.s, false, this);
    this.ba = o.max(this.K[0], this.j[0]);
    this.aa = o.max(this.K[1], this.j[1]) };
Ha.inherits(q);
Ha[_P].s = function(a) { this.R(o.round(a.x), o.round(a.y), this.ba, this.aa);
    W(this.element[k], o.round(a.x) + "px");
    this.element[k].marginLeft = o.round(a.x) - this.ba + "px";
    this.element[k].marginTop = o.round(a.y) - this.aa + "px" };
Ha[_P].R = function(a, b, c, d) { this.element[k].clip = "rect(" + (d - b) + "px " + c + "px " + d + "px " + (c - a) + "px)" };
var ab = function(a, b, c, d, f) { q.apply(this, arguments);
    if (b[i] != 2 || c[i] != 2) {
        throw "[goog.fx.dom.Scroll] Start and end points must be 2D";
        return }
    var e = [g.EventType.BEGIN, g.EventType.ANIMATE, g.EventType.END];
    s(this, e, this.ia, false, this) };
ab.inherits(q);
ab[_P].ia = function(a) { this.element.scrollLeft = o.round(a.x);
    this.element.scrollTop = o.round(a.y) };
var Ya = function(a, b, c, d, f) { q.apply(this, arguments);
    if (b[i] != 2 || c[i] != 2) {
        throw "[goog.fx.dom.Resize] Start and end points must be 2D";
        return }
    var e = [g.EventType.BEGIN, g.EventType.ANIMATE, g.EventType.END];
    s(this, e, this.s, false, this) };
Ya.inherits(q);
Ya[_P].s = function(a) { W(this.element[k], o.round(a.x) + "px");
    pa(this.element[k], o.round(a.y) + "px") };
var $a = function(a, b, c, d, f) { q.call(this, a, [b], [c], d, f);
    var e = [g.EventType.BEGIN, g.EventType.ANIMATE, g.EventType.END];
    s(this, e, this.ha, false, this) };
$a.inherits(q);
$a[_P].ha = function(a) { W(this.element[k], o.round(a.x) + "px") };
var Za = function(a, b, c, d, f) { q.call(this, a, [b], [c], d, f);
    var e = [g.EventType.BEGIN, g.EventType.ANIMATE, g.EventType.END];
    s(this, e, this.ga, false, this) };
Za.inherits(q);
Za[_P].ga = function(a) { pa(this.element[k], o.round(a.x) + "px") };
var z = function(a, b, c, d, f) {
    if (db(b)) b = [b];
    if (db(c)) c = [c];
    q.call(this, a, b, c, d, f);
    if (b[i] != 1 || c[i] != 1) {
        throw "[goog.fx.dom.Fade] Start and end points must be 1D";
        return }
    var e = [g.EventType.BEGIN, g.EventType.ANIMATE, g.EventType.END];
    s(this, e, this.S, false, this) };
z.inherits(q);
z[_P].S = function(a) { Wb(this.element, a.x) };
z[_P].show = function(a) { this.element[k].display = "" };
z[_P].hide = function(a) { this.element[k].display = "none" };
var Mb = function(a, b, c) { z.call(this, a, 1, 0, b, c) };
Mb.inherits(z);
var Lb = function(a, b, c) { z.call(this, a, 0, 1, b, c) };
Lb.inherits(z);
var Nb = function(a, b, c) { z.call(this, a, 1, 0, b, c);
    s(this, g.EventType.BEGIN, this.show, false, this);
    s(this, g.EventType.END, this.hide, false, this) };
Nb.inherits(z);
var Xa = function(a, b, c) { z.call(this, a, 0, 1, b, c);
    s(this, g.EventType.BEGIN, this.show, false, this) };
Xa.inherits(z);
var Va = function(a, b, c, d, f) { q.apply(this, arguments);
    if (b[i] != 3 || c[i] != 3) {
        throw "[goog.fx.dom.BgColorTransform] Start and end points must be 3D";
        return }
    var e = [g.EventType.BEGIN, g.EventType.ANIMATE, g.EventType.END];
    s(this, e, this.u, false, this) };
Va.inherits(q);
Va[_P].u = function(a) {
    var b = "rgb(" + a.F().join(",") + ")";
    this.element[k].backgroundColor = b };
var Wa = function(a, b, c, d, f) { q.apply(this, arguments);
    if (b[i] != 3 || c[i] != 3) {
        throw "[goog.fx.dom.ColorTransform] Start and end points must be 3D";
        return }
    var e = [g.EventType.BEGIN, g.EventType.ANIMATE, g.EventType.END];
    s(this, e, this.u, false, this) };
Wa.inherits(q);
Wa[_P].u = function(a) {
    var b = "rgb(" + a.F().join(",") + ")";
    this.element[k].color = "rgb(" + b + ")" };
var y = function(a) { this.Y = a };
y.inherits(H);
y.c = null;
y.f = null;
y[_P].listen = function(a, b, c, d, f) {
    if (O(b)) {
        for (var e = 0; e < b[i]; e++) { this.listen(a, b[e], c, d, f) }
        return }
    var h = s(a, b, c || this, d || false, f || this.Y || this);
    if (this.c) { this.c[h] = true } else if (this.f) { this.c = {};
        this.c[this.f] = true;
        this.f = null;
        this.c[h] = true } else { this.f = h } };
y[_P].unlisten = function(a, b, c, d, f) {
    if (!this.f && !this.c) {
        return }
    if (O(b)) {
        for (var e = 0; e < b[i]; e++) { this.unlisten(a, b[e], c, d, f) }
        return }
    var h = ha(a, b, c || this, d || false, f || this.Y || this);
    Y(h);
    if (this.c) { Rb(this.c, h) } else if (this.f == h) { this.f = null } };
y[_P].ea = function() {
    if (this.c) {
        for (var a in this.c) { Y(a) } } else if (this.f) { Y(this.f) } };
y[_P].dispose = function() {
    if (!this.A()) { H[_P].dispose.call(this);
        this.ea() } };
y[_P].n = function(a) {
    throw J("EventHandler.handleEvent not impemented"); };
var fc = [],
    P = function(a, b, c, d, f, e) { y.call(this);
        this.el = a;
        this.mouseTimeout = null;
        this.frames = b - 1;
        this.ySpritePosition = c;
        this.ma = d;
        this.mouseTimeoutTime = f;
        this.D = null;
        this.Z = sa("span", "", this.el)[0];
        this.frameWidth = Vb(this.Z)[D];
        this.o = e ? new Q(this, e) : m;
        this.g = -1;
        this.h = 1;
        this.listen(this.el, "mouseover", this.r);
        this.listen(this.el, ta, this.q);
        this.listen(R, ta, this.la);
        fc.push(this) };
P.inherits(y);
P[_P].play = function(a, b) {
    if (a !== m) { this.g = a;
        this.mouseTimeout = v.clearTimeout(this.mouseTimeout);
        this.D = v.clearTimeout(this.D) }
    if (b !== m) { this.h = b }
    var c = "-" + this.frameWidth * this.h + "px " + this.ySpritePosition;
    this.Z[k].backgroundPosition = c;
    if (this.g == 1 && this.h >= this.frames) { this.h = this.frames - 1;
        return } else if (this.g == -1 && this.h <= 0) { this.h = 1;
        return } else if (this.o && this.g == 1 && !this.o.isShowing) { this.o.show() } else if (this.o && this.g == -1 && this.o.isShowing) { this.o.hide() }
    this.D = v.setTimeout(this[ca].bind(this, m, this.h += this.g), this.ma) };
P[_P].r = function(a) {
    if (a[B] && !M(a[K], a[B])) { this.mouseTimeout = v.clearTimeout(this.mouseTimeout);
        if (this.g == -1) { this.mouseTimeout = v.setTimeout(this[ca].bind(this, 1, m), this.mouseTimeoutTime / 3) } } };
P[_P].q = function(a) {
    if (a[B] && M(a[K], a[da]) && !M(a[K], a[B])) { this.mouseTimeout = v.clearTimeout(this.mouseTimeout);
        if (this.g == 1) { this.mouseTimeout = v.setTimeout(this[ca].bind(this, -1, m), this.mouseTimeoutTime) } } };
P[_P].la = function(a) {
    if (a[B] || this.h == 1) {
        return }
    this.mouseTimeout = v.setTimeout(this[ca].bind(this, -1, m), this.mouseTimeoutTime) };
var Q = function(a, b) { y.call(this);
    this.b = a;
    var c = Aa(b);
    this.el = c.cloneNode(true);
    this.el.id = this.b.el.id + "-tt";
    this.el.className = c.className;
    this.el[k].display = "none";
    var d = sa("", b + "-text", this.el)[0];
    this.ka = d.appendChild(R.createElement("span"));
    R[xa].appendChild(this.el);
    this.isShowing = false;
    this.listen(this.el, "mouseover", this.r);
    this.listen(this.el, ta, this.q) };
Q.inherits(y);
Q[_P].W = function() {
    var a = this.el[k];
    a.visibility = "hidden";
    a.display = "block";
    var b = { height: this.el.offsetHeight, width: this.ka[oa] };
    a.display = "none";
    a.visibility = "visible";
    return b };
Q[_P].r = function(a) {
    if (a[B] && !M(a[K], a[B])) { v.clearTimeout(this.b.mouseTimeout) } };
Q[_P].q = function(a) {
    if (a[B] && M(a[K], a[da]) && !M(a[K], a[B])) { v.clearTimeout(this.b.mouseTimeout);
        this.b.mouseTimeout = v.setTimeout(this.b[ca].bind(this.b, -1, this.b.frames - 2), this.b.mouseTimeoutTime) } };
Q[_P].show = function() { this.isShowing = true;
    var a = Ub(this.b.el),
        b = a.x,
        c = a.y,
        d = this.W();
    d.width += 14;
    W(this.el[k], d[D] + "px");
    b -= (d[D] - this.b.el[oa]) / 2;
    c -= d[L] - 3;
    qa(this.el[k], b + "px");
    this.el[k].top = c + "px";
    var f = new ja(this.el, [b, c + 10], [b, c], 500, Ob);
    f.play();
    var e = new Xa(this.el, 500);
    e.play() };
Q[_P].hide = function() { this.isShowing = false;
    this.el[k].display = "none" };
var rToolBar = {};
rToolBar.svcToolbarFrames = 7;
rToolBar.svcToolbarAnimationSpeed = 75;
rToolBar.svcToolbarMouseoutTime = 100;
rToolBar.init = function() {
    if (ka && Na < 5.5) {
        return }
    var h = sa("a", "", Aa("svc-toolbar"));
    for (var b = 0, c = h[i]; b < c; b++) {
        var d = h[b],
            e = d.id.replace("-i", "");
        new P(d, rToolBar.svcToolbarFrames, rToolBar.svcToolbarYSpritePosition[e], rToolBar.svcToolbarAnimationSpeed, rToolBar.svcToolbarMouseoutTime, "tt") }
    try { R.execCommand("BackgroundImageCache", false, true) } catch (j) {} };

/*
 * jQuery Combobox
 */
(function(a, b) { a.widget("ui.combobox", { _create: function() {
            var f = this;
            var d = this.element;
            var h = d.width();
            var toptemp = f.options.top;
            var e = a("<input>").appendTo(d).autocomplete({ source: f.options.source, delay: 0, minLength: 0, open: function(o, p) {
                    if (toptemp) { a(this).autocomplete("widget").css('top', toptemp + "px") }
                    if (f.options.maxlength) { a(this).autocomplete("widget").width(f.options.maxlength) } else {
                        var n = a(this).autocomplete("widget").width();
                        var l = a(this).outerWidth() - 6;
                        if (e.width() != (h - JRF.getCssInt(e, "border-left-width"))) { l = a(this).outerWidth();
                            if (!f.options.readonly) { l = a(this).outerWidth() - 6 } }
                        a(this).autocomplete("widget").width(l) }
                    var m = a(this).autocomplete("widget").find("li");
                    a(m).each(function(r, s) {
                        var t = a.trim(a(s).text());
                        a(s).attr("title", t) });
                    if (m.length == 1 && a(this).attr("readonly") == false) {
                        var k = a(this).val();
                        var q = false;
                        a(m).each(function(r, s) {
                            var t = a.trim(a(s).text());
                            if (k == t) { q = true } });
                        if (q) { a(this).autocomplete("close") } } }, select: function(k, l) { a(f).data("key", l.item.key);
                    if (f.options.select) { f.options.select(l.item) }
                    if (f.options.change) { f.options.change(l.item.label) }
                    if (f.options.finish) { setTimeout(function() { f.options.finish(l.item) }, 0) } } });
            e.change(function() {
                if (f.options.change) { f.options.change(a(this).val(), this) } });
            e.keyup(function(k) {
                if (f.options.change) { f.options.change(a(this).val(), this) } });
            if (f.options.readonly) { e.click(function(k) {
                    if (e.autocomplete("widget").is(":visible")) { e.autocomplete("close");
                        return false }
                    e.autocomplete("search", "");
                    return false }) }
            if (f.options.id) { e.attr("id", f.options.id) }
            if (f.options.readonly) { e.attr("readonly", "readonly") }
            e.width(h - JRF.getCssInt(e, "border-left-width"));
            d.width(h + JRF.getCssInt(e, "border-left-width") + JRF.getCssInt(e, "border-right-width"));
            if (f.options.name) { e.attr("name", f.options.name) } else { e.attr("name", f.options.id) }
            if (typeof f.options.initVal != "undefined") { e.val(f.options.initVal) }
            if (typeof f.options.initKey != "undefined") { this.setInitKey(f.options.initKey) } else { a(f).data("key", "") }
            var c = d.height();
            var g = a("<div>&nbsp;</div>").attr("tabIndex", -1).css("outline", "none").insertAfter(e).addClass("autoCompleteButton").hover(function() { a(this).addClass("autoCompleteButtonHover") }, function() { a(this).removeClass("autoCompleteButtonHover");
                a(this).removeClass("autoCompleteButtonDown") }).mouseup(function() {}).mousedown(function() { a(this).removeClass("autoCompleteButtonHover");
                a(this).addClass("autoCompleteButtonDown") }).click(function() {
                if (e.autocomplete("widget").is(":visible")) { e.autocomplete("close");
                    return false }
                e.autocomplete("search", "");
                e.focus();
                return false });
            d.css("position", "relative");
            d.css("z-index", 1000);
            var j = JRF.getCssInt(e, "border-left-width") + (h - JRF.getCssInt(e, "border-left-width")) - g.width();
            var i = (c - g.height()) / 2;
            g.css("position", "absolute");
            g.css("left", j + "px");
            g.css("top", i + "px");
            if (!f.options.readonly) { e.width(h - JRF.getCssInt(e, "border-left-width") - 20);
                e.css("padding-right", 20 + "px");
                g.css("background-color", "#ffffff").css("*width", 17 + "px") }
            if (f.options.readonly) { g.show() } else { g.hide();
                e.focus(function() { g.show() }) } }, addSource: function(e) {
            var c = this.element.find("input");
            var f = c.autocomplete("option", "source");
            var d = false;
            a.each(f, function(g, h) {
                if (h.key == e.key) { d = true;
                    f.splice(g, 1, e) } });
            if (!d) { f.push(option) }
            c.autocomplete("option", "source", f) }, setSource: function(d) {
            var c = this.element.find("input");
            c.autocomplete("option", "source", d) }, setInitVal: function(d, e) {
            var c = this.element.find("input");
            c.val(d);
            a(this).data("key", e) }, setInitKey: function(f) {
            var d = this.element.find("input");
            var e = d.autocomplete("option", "source");
            var c = "";
            a.each(e, function(g, h) {
                if (h.key == f) { c = h.label } });
            d.val(c);
            a(this).data("key", f) }, getVal: function() {
            var c = this.element.find("input");
            return c.val() }, getKey: function() {
            return a(this).data("key") } }) }(jQuery));

/*
 * mousewheel
 */
(function(a) {
    function d(b) {
        var c = b || window.event,
            d = [].slice.call(arguments, 1),
            e = 0,
            f = !0,
            g = 0,
            h = 0;
        return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d) }
    var b = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks)
        for (var c = b.length; c;) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
    a.event.special.mousewheel = { setup: function() {
            if (this.addEventListener)
                for (var a = b.length; a;) this.addEventListener(b[--a], d, !1);
            else this.onmousewheel = d }, teardown: function() {
            if (this.removeEventListener)
                for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1);
            else this.onmousewheel = null } }, a.fn.extend({ mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) {
            return this.unbind("mousewheel", a) } }) })(jQuery);

/*
 * custom scrollbar
 */
(function(c) {
    var b = { init: function(e) {
                var f = { set_width: false, set_height: false, horizontalScroll: false, scrollInertia: 950, mouseWheel: true, mouseWheelPixels: "auto", autoDraggerLength: true, autoHideScrollbar: false, snapAmount: null, snapOffset: 0, scrollButtons: { enable: true, scrollType: "continuous", scrollSpeed: "auto", scrollAmount: 40 }, advanced: { updateOnBrowserResize: true, updateOnContentResize: false, autoExpandHorizontalScroll: false, autoScrollOnFocus: true, normalizeMouseWheelDelta: false }, contentTouchScroll: true, callbacks: { onScrollStart: function() {}, onScroll: function() {}, onTotalScroll: function() {}, onTotalScrollBack: function() {}, onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, whileScrolling: function() {} }, theme: "dark-thick" },
                    e = c.extend(true, f, e);
                return this.each(function() {
                    var m = c(this);
                    if (e.set_width) { m.css("width", e.set_width) }
                    if (e.set_height) { m.css("height", e.set_height) }
                    if (!c(document).data("mCustomScrollbar-index")) { c(document).data("mCustomScrollbar-index", "1") } else {
                        var t = parseInt(c(document).data("mCustomScrollbar-index"));
                        c(document).data("mCustomScrollbar-index", t + 1) }
                    m.wrapInner("<div class='mCustomScrollBox mCS-" + e.theme + "' id='mCSB_" + c(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + c(document).data("mCustomScrollbar-index"));
                    var g = m.children(".mCustomScrollBox");
                    if (e.horizontalScroll) { g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                        var k = g.children(".mCSB_h_wrapper");
                        k.wrapInner("<div class='mCSB_container' style='position:absolute;left:0;' />").children(".mCSB_container").css({ width: k.children().outerWidth(), position: "relative" }).unwrap() } else { g.wrapInner("<div class='mCSB_container' style='position:relative;top:0;' />") }
                    var o = g.children(".mCSB_container");
                    if (c.support.touch) { o.addClass("mCS_touch") }
                    o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
                    var l = g.children(".mCSB_scrollTools"),
                        h = l.children(".mCSB_draggerContainer"),
                        q = h.children(".mCSB_dragger");
                    if (e.horizontalScroll) { q.data("minDraggerWidth", q.width()) } else { q.data("minDraggerHeight", q.height()) }
                    if (e.scrollButtons.enable) {
                        if (e.horizontalScroll) { l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>") } else { l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>") } }
                    g.bind("scroll", function() {
                        if (!m.is(".mCS_disabled")) { g.scrollTop(0).scrollLeft(0) } });
                    m.data({ mCS_Init: true, mCustomScrollbarIndex: c(document).data("mCustomScrollbar-index"), horizontalScroll: e.horizontalScroll, scrollInertia: e.scrollInertia, scrollEasing: "mcsEaseOut", mouseWheel: e.mouseWheel, mouseWheelPixels: e.mouseWheelPixels, autoDraggerLength: e.autoDraggerLength, autoHideScrollbar: e.autoHideScrollbar, snapAmount: e.snapAmount, snapOffset: e.snapOffset, scrollButtons_enable: e.scrollButtons.enable, scrollButtons_scrollType: e.scrollButtons.scrollType, scrollButtons_scrollSpeed: e.scrollButtons.scrollSpeed, scrollButtons_scrollAmount: e.scrollButtons.scrollAmount, autoExpandHorizontalScroll: e.advanced.autoExpandHorizontalScroll, autoScrollOnFocus: e.advanced.autoScrollOnFocus, normalizeMouseWheelDelta: e.advanced.normalizeMouseWheelDelta, contentTouchScroll: e.contentTouchScroll, onScrollStart_Callback: e.callbacks.onScrollStart, onScroll_Callback: e.callbacks.onScroll, onTotalScroll_Callback: e.callbacks.onTotalScroll, onTotalScrollBack_Callback: e.callbacks.onTotalScrollBack, onTotalScroll_Offset: e.callbacks.onTotalScrollOffset, onTotalScrollBack_Offset: e.callbacks.onTotalScrollBackOffset, whileScrolling_Callback: e.callbacks.whileScrolling, bindEvent_scrollbar_drag: false, bindEvent_content_touch: false, bindEvent_scrollbar_click: false, bindEvent_mousewheel: false, bindEvent_buttonsContinuous_y: false, bindEvent_buttonsContinuous_x: false, bindEvent_buttonsPixels_y: false, bindEvent_buttonsPixels_x: false, bindEvent_focusin: false, bindEvent_autoHideScrollbar: false, mCSB_buttonScrollRight: false, mCSB_buttonScrollLeft: false, mCSB_buttonScrollDown: false, mCSB_buttonScrollUp: false });
                    if (e.horizontalScroll) {
                        if (m.css("max-width") !== "none") {
                            if (!e.advanced.updateOnContentResize) { e.advanced.updateOnContentResize = true } } } else {
                        if (m.css("max-height") !== "none") {
                            var s = false,
                                r = parseInt(m.css("max-height"));
                            if (m.css("max-height").indexOf("%") >= 0) { s = r, r = m.parent().height() * s / 100 }
                            m.css("overflow", "hidden");
                            g.css("max-height", r) } }
                    m.mCustomScrollbar("update");
                    if (e.advanced.updateOnBrowserResize) {
                        var i, j = c(window).width(),
                            u = c(window).height();
                        c(window).bind("resize." + m.data("mCustomScrollbarIndex"), function() {
                            if (i) { clearTimeout(i) }
                            i = setTimeout(function() {
                                if (!m.is(".mCS_disabled") && !m.is(".mCS_destroyed")) {
                                    var w = c(window).width(),
                                        v = c(window).height();
                                    if (j !== w || u !== v) {
                                        if (m.css("max-height") !== "none" && s) { g.css("max-height", m.parent().height() * s / 100) }
                                        m.mCustomScrollbar("update");
                                        j = w;
                                        u = v } } }, 150) }) }
                    if (e.advanced.updateOnContentResize) {
                        var p;
                        if (e.horizontalScroll) {
                            var n = o.outerWidth() } else {
                            var n = o.outerHeight() }
                        p = setInterval(function() {
                            if (e.horizontalScroll) {
                                if (e.advanced.autoExpandHorizontalScroll) { o.css({ position: "absolute", width: "auto" }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({ width: o.outerWidth(), position: "relative" }).unwrap() }
                                var v = o.outerWidth() } else {
                                var v = o.outerHeight() }
                            if (v != n) { m.mCustomScrollbar("update");
                                n = v } }, 300) } }) }, update: function() {
                var n = c(this),
                    k = n.children(".mCustomScrollBox"),
                    q = k.children(".mCSB_container");
                q.removeClass("mCS_no_scrollbar");
                n.removeClass("mCS_disabled mCS_destroyed");
                k.scrollTop(0).scrollLeft(0);
                var y = k.children(".mCSB_scrollTools"),
                    o = y.children(".mCSB_draggerContainer"),
                    m = o.children(".mCSB_dragger");
                if (n.data("horizontalScroll")) {
                    var A = y.children(".mCSB_buttonLeft"),
                        t = y.children(".mCSB_buttonRight"),
                        f = k.width();
                    if (n.data("autoExpandHorizontalScroll")) { q.css({ position: "absolute", width: "auto" }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({ width: q.outerWidth(), position: "relative" }).unwrap() }
                    var z = q.outerWidth() } else {
                    var w = y.children(".mCSB_buttonUp"),
                        g = y.children(".mCSB_buttonDown"),
                        r = k.height(),
                        i = q.outerHeight() }
                if (i > r && !n.data("horizontalScroll")) { y.css("display", "block");
                    var s = o.height();
                    if (n.data("autoDraggerLength")) {
                        var u = Math.round(r / i * s),
                            l = m.data("minDraggerHeight");
                        if (u <= l) { m.css({ height: l }) } else {
                            if (u >= s - 10) {
                                var p = s - 10;
                                m.css({ height: p }) } else { m.css({ height: u }) } }
                        m.children(".mCSB_dragger_bar").css({ "line-height": m.height() + "px" }) }
                    var B = m.height(),
                        x = (i - r) / (s - B);
                    n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                    var D = Math.abs(q.position().top);
                    n.mCustomScrollbar("scrollTo", D, { scrollInertia: 0, trigger: "internal" }) } else {
                    if (z > f && n.data("horizontalScroll")) { y.css("display", "block");
                        var h = o.width();
                        if (n.data("autoDraggerLength")) {
                            var j = Math.round(f / z * h),
                                C = m.data("minDraggerWidth");
                            if (j <= C) { m.css({ width: C }) } else {
                                if (j >= h - 10) {
                                    var e = h - 10;
                                    m.css({ width: e }) } else { m.css({ width: j }) } } }
                        var v = m.width(),
                            x = (z - f) / (h - v);
                        n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                        var D = Math.abs(q.position().left);
                        n.mCustomScrollbar("scrollTo", D, { scrollInertia: 0, trigger: "internal" }) } else { k.unbind("mousewheel focusin");
                        if (n.data("horizontalScroll")) { m.add(q).css("left", 0) } else { m.add(q).css("top", 0) }
                        y.css("display", "none");
                        q.addClass("mCS_no_scrollbar");
                        n.data({ bindEvent_mousewheel: false, bindEvent_focusin: false }) } } }, scrolling: function(h, p, m, j, w, e, A, v) {
                var k = c(this);
                if (!k.data("bindEvent_scrollbar_drag")) {
                    var n, o;
                    if (c.support.msPointer) { j.bind("MSPointerDown", function(H) { H.preventDefault();
                            k.data({ on_drag: true });
                            j.addClass("mCSB_dragger_onDrag");
                            var G = c(this),
                                J = G.offset(),
                                F = H.originalEvent.pageX - J.left,
                                I = H.originalEvent.pageY - J.top;
                            if (F < G.width() && F > 0 && I < G.height() && I > 0) { n = I;
                                o = F } });
                        c(document).bind("MSPointerMove." + k.data("mCustomScrollbarIndex"), function(H) { H.preventDefault();
                            if (k.data("on_drag")) {
                                var G = j,
                                    J = G.offset(),
                                    F = H.originalEvent.pageX - J.left,
                                    I = H.originalEvent.pageY - J.top;
                                D(n, o, I, F) } }).bind("MSPointerUp." + k.data("mCustomScrollbarIndex"), function(x) { k.data({ on_drag: false });
                            j.removeClass("mCSB_dragger_onDrag") }) } else { j.bind("mousedown touchstart", function(H) { H.preventDefault();
                            H.stopImmediatePropagation();
                            var G = c(this),
                                K = G.offset(),
                                F, J;
                            if (H.type === "touchstart") {
                                var I = H.originalEvent.touches[0] || H.originalEvent.changedTouches[0];
                                F = I.pageX - K.left;
                                J = I.pageY - K.top } else { k.data({ on_drag: true });
                                j.addClass("mCSB_dragger_onDrag");
                                F = H.pageX - K.left;
                                J = H.pageY - K.top }
                            if (F < G.width() && F > 0 && J < G.height() && J > 0) { n = J;
                                o = F } }).bind("touchmove", function(H) { H.preventDefault();
                            H.stopImmediatePropagation();
                            var K = H.originalEvent.touches[0] || H.originalEvent.changedTouches[0],
                                G = c(this),
                                J = G.offset(),
                                F = K.pageX - J.left,
                                I = K.pageY - J.top;
                            D(n, o, I, F) });
                        c(document).bind("mousemove." + k.data("mCustomScrollbarIndex"), function(H) {
                            if (k.data("on_drag")) {
                                var G = j,
                                    J = G.offset(),
                                    F = H.pageX - J.left,
                                    I = H.pageY - J.top;
                                D(n, o, I, F) } }).bind("mouseup." + k.data("mCustomScrollbarIndex"), function(x) { k.data({ on_drag: false });
                            j.removeClass("mCSB_dragger_onDrag") }) }
                    k.data({ bindEvent_scrollbar_drag: true }) }

                function D(G, H, I, F) {
                    if (k.data("horizontalScroll")) { k.mCustomScrollbar("scrollTo", (j.position().left - (H)) + F, { moveDragger: true, trigger: "internal" }) } else { k.mCustomScrollbar("scrollTo", (j.position().top - (G)) + I, { moveDragger: true, trigger: "internal" }) } }
                if (c.support.touch && k.data("contentTouchScroll")) {
                    if (!k.data("bindEvent_content_touch")) {
                        var l, B, r, s, u, C, E;
                        p.bind("touchstart", function(x) { x.stopImmediatePropagation();
                            l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            B = c(this);
                            r = B.offset();
                            u = l.pageX - r.left;
                            s = l.pageY - r.top;
                            C = s;
                            E = u });
                        p.bind("touchmove", function(x) { x.preventDefault();
                            x.stopImmediatePropagation();
                            l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            B = c(this).parent();
                            r = B.offset();
                            u = l.pageX - r.left;
                            s = l.pageY - r.top;
                            if (k.data("horizontalScroll")) { k.mCustomScrollbar("scrollTo", E - u, { trigger: "internal" }) } else { k.mCustomScrollbar("scrollTo", C - s, { trigger: "internal" }) } }) } }
                if (!k.data("bindEvent_scrollbar_click")) { m.bind("click", function(F) {
                        var x = (F.pageY - m.offset().top) * k.data("scrollAmount"),
                            y = c(F.target);
                        if (k.data("horizontalScroll")) { x = (F.pageX - m.offset().left) * k.data("scrollAmount") }
                        if (y.hasClass("mCSB_draggerContainer") || y.hasClass("mCSB_draggerRail")) { k.mCustomScrollbar("scrollTo", x, { trigger: "internal", scrollEasing: "draggerRailEase" }) } });
                    k.data({ bindEvent_scrollbar_click: true }) }
                if (k.data("mouseWheel")) {
                    if (!k.data("bindEvent_mousewheel")) { h.bind("mousewheel", function(H, J) {
                            var G, F = k.data("mouseWheelPixels"),
                                x = Math.abs(p.position().top),
                                I = j.position().top,
                                y = m.height() - j.height();
                            if (k.data("normalizeMouseWheelDelta")) {
                                if (J < 0) { J = -1 } else { J = 1 } }
                            if (F === "auto") { F = 100 + Math.round(k.data("scrollAmount") / 2) }
                            if (k.data("horizontalScroll")) { I = j.position().left;
                                y = m.width() - j.width();
                                x = Math.abs(p.position().left) }
                            if ((J > 0 && I !== 0) || (J < 0 && I !== y)) { H.preventDefault();
                                H.stopImmediatePropagation() }
                            G = x - (J * F);
                            k.mCustomScrollbar("scrollTo", G, { trigger: "internal" }) });
                        k.data({ bindEvent_mousewheel: true }) } }
                if (k.data("scrollButtons_enable")) {
                    if (k.data("scrollButtons_scrollType") === "pixels") {
                        if (k.data("horizontalScroll")) { v.add(A).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", i, g);
                            k.data({ bindEvent_buttonsContinuous_x: false });
                            if (!k.data("bindEvent_buttonsPixels_x")) { v.bind("click", function(x) { x.preventDefault();
                                    q(Math.abs(p.position().left) + k.data("scrollButtons_scrollAmount")) });
                                A.bind("click", function(x) { x.preventDefault();
                                    q(Math.abs(p.position().left) - k.data("scrollButtons_scrollAmount")) });
                                k.data({ bindEvent_buttonsPixels_x: true }) } } else { e.add(w).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", i, g);
                            k.data({ bindEvent_buttonsContinuous_y: false });
                            if (!k.data("bindEvent_buttonsPixels_y")) { e.bind("click", function(x) { x.preventDefault();
                                    q(Math.abs(p.position().top) + k.data("scrollButtons_scrollAmount")) });
                                w.bind("click", function(x) { x.preventDefault();
                                    q(Math.abs(p.position().top) - k.data("scrollButtons_scrollAmount")) });
                                k.data({ bindEvent_buttonsPixels_y: true }) } }

                        function q(x) {
                            if (!j.data("preventAction")) { j.data("preventAction", true);
                                k.mCustomScrollbar("scrollTo", x, { trigger: "internal" }) } } } else {
                        if (k.data("horizontalScroll")) { v.add(A).unbind("click");
                            k.data({ bindEvent_buttonsPixels_x: false });
                            if (!k.data("bindEvent_buttonsContinuous_x")) { v.bind("mousedown touchstart MSPointerDown", function(y) { y.preventDefault();
                                    var x = z();
                                    k.data({ mCSB_buttonScrollRight: setInterval(function() { k.mCustomScrollbar("scrollTo", Math.abs(p.position().left) + x, { trigger: "internal", scrollEasing: "easeOutCirc" }) }, 17) }) });
                                var i = function(x) { x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollRight")) };
                                v.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", i);
                                A.bind("mousedown touchstart MSPointerDown", function(y) { y.preventDefault();
                                    var x = z();
                                    k.data({ mCSB_buttonScrollLeft: setInterval(function() { k.mCustomScrollbar("scrollTo", Math.abs(p.position().left) - x, { trigger: "internal", scrollEasing: "easeOutCirc" }) }, 17) }) });
                                var g = function(x) { x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollLeft")) };
                                A.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", g);
                                k.data({ bindEvent_buttonsContinuous_x: true }) } } else { e.add(w).unbind("click");
                            k.data({ bindEvent_buttonsPixels_y: false });
                            if (!k.data("bindEvent_buttonsContinuous_y")) { e.bind("mousedown touchstart MSPointerDown", function(y) { y.preventDefault();
                                    var x = z();
                                    k.data({ mCSB_buttonScrollDown: setInterval(function() { k.mCustomScrollbar("scrollTo", Math.abs(p.position().top) + x, { trigger: "internal", scrollEasing: "easeOutCirc" }) }, 17) }) });
                                var t = function(x) { x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollDown")) };
                                e.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", t);
                                w.bind("mousedown touchstart MSPointerDown", function(y) { y.preventDefault();
                                    var x = z();
                                    k.data({ mCSB_buttonScrollUp: setInterval(function() { k.mCustomScrollbar("scrollTo", Math.abs(p.position().top) - x, { trigger: "internal", scrollEasing: "easeOutCirc" }) }, 17) }) });
                                var f = function(x) { x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollUp")) };
                                w.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", f);
                                k.data({ bindEvent_buttonsContinuous_y: true }) } }

                        function z() {
                            var x = k.data("scrollButtons_scrollSpeed");
                            if (k.data("scrollButtons_scrollSpeed") === "auto") { x = Math.round((k.data("scrollInertia") + 100) / 40) }
                            return x } } }
                if (k.data("autoScrollOnFocus")) {
                    if (!k.data("bindEvent_focusin")) { h.bind("focusin", function() {return; h.scrollTop(0).scrollLeft(0);
                            var x = c(document.activeElement);
                            if (x.is("input,textarea,select,button,a[tabindex],area,object")) {
                                var G = p.position().top,
                                    y = x.position().top,
                                    F = h.height() - x.outerHeight();
                                if (k.data("horizontalScroll")) { G = p.position().left;
                                    y = x.position().left;
                                    F = h.width() - x.outerWidth() }
                                if (G + y < 0 || G + y > F) { k.mCustomScrollbar("scrollTo", y, { trigger: "internal" }) } } });
                        k.data({ bindEvent_focusin: true }) } }
                if (k.data("autoHideScrollbar")) {
                    if (!k.data("bindEvent_autoHideScrollbar")) { h.bind("mouseenter", function(x) { h.addClass("mCS-mouse-over");
                            d.showScrollbar.call(h.children(".mCSB_scrollTools")) }).bind("mouseleave touchend", function(x) { h.removeClass("mCS-mouse-over");
                            if (x.type === "mouseleave") { d.hideScrollbar.call(h.children(".mCSB_scrollTools")) } });
                        k.data({ bindEvent_autoHideScrollbar: true }) } } }, scrollTo: function(e, f) {
                var i = c(this),
                    o = { moveDragger: false, trigger: "external", callbacks: true, scrollInertia: i.data("scrollInertia"), scrollEasing: i.data("scrollEasing") },
                    f = c.extend(o, f),
                    p, g = i.children(".mCustomScrollBox"),
                    k = g.children(".mCSB_container"),
                    r = g.children(".mCSB_scrollTools"),
                    j = r.children(".mCSB_draggerContainer"),
                    h = j.children(".mCSB_dragger"),
                    t = draggerSpeed = f.scrollInertia,
                    q, s, m, l;
                if (!k.hasClass("mCS_no_scrollbar")) { i.data({ mCS_trigger: f.trigger });
                    if (i.data("mCS_Init")) { f.callbacks = false }
                    if (e || e === 0) {
                        if (typeof(e) === "number") {
                            if (f.moveDragger) { p = e;
                                if (i.data("horizontalScroll")) { e = h.position().left * i.data("scrollAmount") } else { e = h.position().top * i.data("scrollAmount") }
                                draggerSpeed = 0 } else { p = e / i.data("scrollAmount") } } else {
                            if (typeof(e) === "string") {
                                var v;
                                if (e === "top") { v = 0 } else {
                                    if (e === "bottom" && !i.data("horizontalScroll")) { v = k.outerHeight() - g.height() } else {
                                        if (e === "left") { v = 0 } else {
                                            if (e === "right" && i.data("horizontalScroll")) { v = k.outerWidth() - g.width() } else {
                                                if (e === "first") { v = i.find(".mCSB_container").find(":first") } else {
                                                    if (e === "last") { v = i.find(".mCSB_container").find(":last") } else { v = i.find(e) } } } } } }
                                if (v.length === 1) {
                                    if (i.data("horizontalScroll")) { e = v.position().left } else { e = v.position().top }
                                    p = e / i.data("scrollAmount") } else { p = e = v } } }
                        if (i.data("horizontalScroll")) {
                            if (i.data("onTotalScrollBack_Offset")) { s = -i.data("onTotalScrollBack_Offset") }
                            if (i.data("onTotalScroll_Offset")) { l = g.width() - k.outerWidth() + i.data("onTotalScroll_Offset") }
                            if (p < 0) { p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollLeft"));
                                if (!s) { q = true } } else {
                                if (p >= j.width() - h.width()) { p = j.width() - h.width();
                                    e = g.width() - k.outerWidth();
                                    clearInterval(i.data("mCSB_buttonScrollRight"));
                                    if (!l) { m = true } } else { e = -e } }
                            var n = i.data("snapAmount");
                            if (n) { e = Math.round(e / n) * n - i.data("snapOffset") }
                            d.mTweenAxis.call(this, h[0], "left", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "left", Math.round(e), t, f.scrollEasing, { onStart: function() {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) { u("onScrollStart") }
                                    if (i.data("autoHideScrollbar")) { d.showScrollbar.call(r) } }, onUpdate: function() {
                                    if (f.callbacks) { u("whileScrolling") } }, onComplete: function() {
                                    if (f.callbacks) { u("onScroll");
                                        if (q || (s && k.position().left >= s)) { u("onTotalScrollBack") }
                                        if (m || (l && k.position().left <= l)) { u("onTotalScroll") } }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) { d.hideScrollbar.call(r) } } } }) } else {
                            if (i.data("onTotalScrollBack_Offset")) { s = -i.data("onTotalScrollBack_Offset") }
                            if (i.data("onTotalScroll_Offset")) { l = g.height() - k.outerHeight() + i.data("onTotalScroll_Offset") }
                            if (p < 0) { p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollUp"));
                                if (!s) { q = true } } else {
                                if (p >= j.height() - h.height()) { p = j.height() - h.height();
                                    e = g.height() - k.outerHeight();
                                    clearInterval(i.data("mCSB_buttonScrollDown"));
                                    if (!l) { m = true } } else { e = -e } }
                            var n = i.data("snapAmount");
                            if (n) { e = Math.round(e / n) * n - i.data("snapOffset") }
                            d.mTweenAxis.call(this, h[0], "top", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "top", Math.round(e), t, f.scrollEasing, { onStart: function() {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) { u("onScrollStart") }
                                    if (i.data("autoHideScrollbar")) { d.showScrollbar.call(r) } }, onUpdate: function() {
                                    if (f.callbacks) { u("whileScrolling") } }, onComplete: function() {
                                    if (f.callbacks) { u("onScroll");
                                        if (q || (s && k.position().top >= s)) { u("onTotalScrollBack") }
                                        if (m || (l && k.position().top <= l)) { u("onTotalScroll") } }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) { d.hideScrollbar.call(r) } } } }) }
                        if (i.data("mCS_Init")) { i.data({ mCS_Init: false }) } } }

                function u(w) { this.mcs = { top: k.position().top, left: k.position().left, draggerTop: h.position().top, draggerLeft: h.position().left, topPct: Math.round((100 * Math.abs(k.position().top)) / Math.abs(k.outerHeight() - g.height())), leftPct: Math.round((100 * Math.abs(k.position().left)) / Math.abs(k.outerWidth() - g.width())) };
                    switch (w) {
                        case "onScrollStart":
                            i.data("mCS_tweenRunning", true).data("onScrollStart_Callback").call(i, this.mcs);
                            break;
                        case "whileScrolling":
                            i.data("whileScrolling_Callback").call(i, this.mcs);
                            break;
                        case "onScroll":
                            i.data("onScroll_Callback").call(i, this.mcs);
                            break;
                        case "onTotalScrollBack":
                            i.data("onTotalScrollBack_Callback").call(i, this.mcs);
                            break;
                        case "onTotalScroll":
                            i.data("onTotalScroll_Callback").call(i, this.mcs);
                            break } } }, stop: function() {
                var g = c(this),
                    e = g.children().children(".mCSB_container"),
                    f = g.children().children().children().children(".mCSB_dragger");
                d.mTweenAxisStop.call(this, e[0]);
                d.mTweenAxisStop.call(this, f[0]) }, disable: function(e) {
                var j = c(this),
                    f = j.children(".mCustomScrollBox"),
                    h = f.children(".mCSB_container"),
                    g = f.children(".mCSB_scrollTools"),
                    i = g.children().children(".mCSB_dragger");
                f.unbind("mousewheel focusin mouseenter mouseleave touchend");
                h.unbind("touchstart touchmove");
                if (e) {
                    if (j.data("horizontalScroll")) { i.add(h).css("left", 0) } else { i.add(h).css("top", 0) } }
                g.css("display", "none");
                h.addClass("mCS_no_scrollbar");
                j.data({ bindEvent_mousewheel: false, bindEvent_focusin: false, bindEvent_content_touch: false, bindEvent_autoHideScrollbar: false }).addClass("mCS_disabled") }, destroy: function() {
                var e = c(this);
                e.removeClass("mCustomScrollbar _mCS_" + e.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();
                c(document).unbind("mousemove." + e.data("mCustomScrollbarIndex") + " mouseup." + e.data("mCustomScrollbarIndex") + " MSPointerMove." + e.data("mCustomScrollbarIndex") + " MSPointerUp." + e.data("mCustomScrollbarIndex"));
                c(window).unbind("resize." + e.data("mCustomScrollbarIndex")) } },
        d = { showScrollbar: function() { this.stop().animate({ opacity: 1 }, "fast") }, hideScrollbar: function() { this.stop().animate({ opacity: 0 }, "fast") }, mTweenAxis: function(g, i, h, f, o, y) {
                var y = y || {},
                    v = y.onStart || function() {},
                    p = y.onUpdate || function() {},
                    w = y.onComplete || function() {};
                var n = t(),
                    l, j = 0,
                    r = g.offsetTop,
                    s = g.style;
                if (i === "left") { r = g.offsetLeft }
                var m = h - r;
                q();
                e();

                function t() {
                    if (window.performance && window.performance.now) {
                        return window.performance.now() } else {
                        if (window.performance && window.performance.webkitNow) {
                            return window.performance.webkitNow() } else {
                            if (Date.now) {
                                return Date.now() } else {
                                return new Date().getTime() } } } }

                function x() {
                    if (!j) { v.call() }
                    j = t() - n;
                    u();
                    if (j >= g._time) { g._time = (j > g._time) ? j + l - (j - g._time) : j + l - 1;
                        if (g._time < j + 1) { g._time = j + 1 } }
                    if (g._time < f) { g._id = _request(x) } else { w.call() } }

                function u() {
                    if (f > 0) { g.currVal = k(g._time, r, m, f, o);
                        s[i] = Math.round(g.currVal) + "px" } else { s[i] = h + "px" }
                    p.call() }

                function e() { l = 1000 / 60;
                    g._time = j + l;
                    _request = (!window.requestAnimationFrame) ? function(z) { u();
                        return setTimeout(z, 0.01) } : window.requestAnimationFrame;
                    g._id = _request(x) }

                function q() {
                    if (g._id == null) {
                        return }
                    if (!window.requestAnimationFrame) { clearTimeout(g._id) } else { window.cancelAnimationFrame(g._id) }
                    g._id = null }

                function k(B, A, F, E, C) {
                    switch (C) {
                        case "linear":
                            return F * B / E + A;
                            break;
                        case "easeOutQuad":
                            B /= E;
                            return -F * B * (B - 2) + A;
                            break;
                        case "easeInOutQuad":
                            B /= E / 2;
                            if (B < 1) {
                                return F / 2 * B * B + A }
                            B--;
                            return -F / 2 * (B * (B - 2) - 1) + A;
                            break;
                        case "easeOutCubic":
                            B /= E;
                            B--;
                            return F * (B * B * B + 1) + A;
                            break;
                        case "easeOutQuart":
                            B /= E;
                            B--;
                            return -F * (B * B * B * B - 1) + A;
                            break;
                        case "easeOutQuint":
                            B /= E;
                            B--;
                            return F * (B * B * B * B * B + 1) + A;
                            break;
                        case "easeOutCirc":
                            B /= E;
                            B--;
                            return F * Math.sqrt(1 - B * B) + A;
                            break;
                        case "easeOutSine":
                            return F * Math.sin(B / E * (Math.PI / 2)) + A;
                            break;
                        case "easeOutExpo":
                            return F * (-Math.pow(2, -10 * B / E) + 1) + A;
                            break;
                        case "mcsEaseOut":
                            var D = (B /= E) * B,
                                z = D * B;
                            return A + F * (0.499999999999997 * z * D + -2.5 * D * D + 5.5 * z + -6.5 * D + 4 * B);
                            break;
                        case "draggerRailEase":
                            B /= E / 2;
                            if (B < 1) {
                                return F / 2 * B * B * B + A }
                            B -= 2;
                            return F / 2 * (B * B * B + 2) + A;
                            break } } }, mTweenAxisStop: function(e) {
                if (e._id == null) {
                    return }
                if (!window.requestAnimationFrame) { clearTimeout(e._id) } else { window.cancelAnimationFrame(e._id) }
                e._id = null }, rafPolyfill: function() {
                var f = ["ms", "moz", "webkit", "o"],
                    e = f.length;
                while (--e > -1 && !window.requestAnimationFrame) { window.requestAnimationFrame = window[f[e] + "RequestAnimationFrame"];
                    window.cancelAnimationFrame = window[f[e] + "CancelAnimationFrame"] || window[f[e] + "CancelRequestAnimationFrame"] } } };
    d.rafPolyfill.call();
    c.support.touch = !!("ontouchstart" in window);
    c.support.msPointer = window.navigator.msPointerEnabled;
    c.fn.mCustomScrollbar = function(e) {
        if (b[e]) {
            return b[e].apply(this, Array.prototype.slice.call(arguments, 1)) } else {
            if (typeof e === "object" || !e) {
                return b.init.apply(this, arguments) } else { c.error("Method " + e + " does not exist") } } } })(jQuery);


/*
 * excanvas.compiled.js
 */
document.createElement("canvas").getContext || (function() {
    var s = Math,
        j = s.round,
        F = s.sin,
        G = s.cos,
        V = s.abs,
        W = s.sqrt,
        k = 10,
        v = k / 2;

    function X() {
        return this.context_ || (this.context_ = new H(this)) }
    var L = Array.prototype.slice;

    function Y(b, a) {
        var c = L.call(arguments, 2);
        return function() {
            return b.apply(a, c.concat(L.call(arguments))) } }
    var M = { init: function(b) {
            if (/MSIE/.test(navigator.userAgent) && !window.opera) {
                var a = b || document;
                a.createElement("canvas");
                a.attachEvent("onreadystatechange", Y(this.init_, this, a)) } }, init_: function(b) { b.namespaces.g_vml_ || b.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
            b.namespaces.g_o_ || b.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
            if (!b.styleSheets.ex_canvas_) {
                var a = b.createStyleSheet();
                a.owningElement.id = "ex_canvas_";
                a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}" }
            var c = b.getElementsByTagName("canvas"),
                d = 0;
            for (; d < c.length; d++) this.initElement(c[d]) }, initElement: function(b) {
            if (!b.getContext) { b.getContext = X;
                b.innerHTML = "";
                b.attachEvent("onpropertychange", Z);
                b.attachEvent("onresize", $);
                var a = b.attributes;
                if (a.width && a.width.specified) b.style.width = a.width.nodeValue + "px";
                else b.width = b.clientWidth;
                if (a.height && a.height.specified) b.style.height = a.height.nodeValue + "px";
                else b.height = b.clientHeight }
            return b } };

    function Z(b) {
        var a = b.srcElement;
        switch (b.propertyName) {
            case "width":
                a.style.width = a.attributes.width.nodeValue + "px";
                a.getContext().clearRect();
                break;
            case "height":
                a.style.height = a.attributes.height.nodeValue + "px";
                a.getContext().clearRect();
                break } }

    function $(b) {
        var a = b.srcElement;
        if (a.firstChild) { a.firstChild.style.width = a.clientWidth + "px";
            a.firstChild.style.height = a.clientHeight + "px" } }
    M.init();
    var N = [],
        B = 0;
    for (; B < 16; B++) {
        var C = 0;
        for (; C < 16; C++) N[B * 16 + C] = B.toString(16) + C.toString(16) }

    function I() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ] }

    function y(b, a) {
        var c = I(),
            d = 0;
        for (; d < 3; d++) {
            var f = 0;
            for (; f < 3; f++) {
                var h = 0,
                    g = 0;
                for (; g < 3; g++) h += b[d][g] * a[g][f];
                c[d][f] = h } }
        return c }

    function O(b, a) { a.fillStyle = b.fillStyle;
        a.lineCap = b.lineCap;
        a.lineJoin = b.lineJoin;
        a.lineWidth = b.lineWidth;
        a.miterLimit = b.miterLimit;
        a.shadowBlur = b.shadowBlur;
        a.shadowColor = b.shadowColor;
        a.shadowOffsetX = b.shadowOffsetX;
        a.shadowOffsetY = b.shadowOffsetY;
        a.strokeStyle = b.strokeStyle;
        a.globalAlpha = b.globalAlpha;
        a.arcScaleX_ = b.arcScaleX_;
        a.arcScaleY_ = b.arcScaleY_;
        a.lineScale_ = b.lineScale_ }

    function P(b) {
        var a, c = 1;
        b = String(b);
        if (b.substring(0, 3) == "rgb") {
            var d = b.indexOf("(", 3),
                f = b.indexOf(")", d + 1),
                h = b.substring(d + 1, f).split(",");
            a = "#";
            var g = 0;
            for (; g < 3; g++) a += N[Number(h[g])];
            if (h.length == 4 && b.substr(3, 1) == "a") c = h[3] } else a = b;
        return { color: a, alpha: c } }

    function aa(b) {
        switch (b) {
            case "butt":
                return "flat";
            case "round":
                return "round";
            case "square":
            default:
                return "square" } }

    function H(b) { this.m_ = I();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = k * 1;
        this.globalAlpha = 1;
        this.canvas = b;
        var a = b.ownerDocument.createElement("div");
        a.style.width = b.clientWidth + "px";
        a.style.height = b.clientHeight + "px";
        a.style.overflow = "hidden";
        a.style.position = "absolute";
        b.appendChild(a);
        this.element_ = a;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1 }
    var i = H.prototype;
    i.clearRect = function() { this.element_.innerHTML = "" };
    i.beginPath = function() { this.currentPath_ = [] };
    i.moveTo = function(b, a) {
        var c = this.getCoords_(b, a);
        this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y };
    i.lineTo = function(b, a) {
        var c = this.getCoords_(b, a);
        this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y };
    i.bezierCurveTo = function(b, a, c, d, f, h) {
        var g = this.getCoords_(f, h),
            l = this.getCoords_(b, a),
            e = this.getCoords_(c, d);
        Q(this, l, e, g) };

    function Q(b, a, c, d) { b.currentPath_.push({ type: "bezierCurveTo", cp1x: a.x, cp1y: a.y, cp2x: c.x, cp2y: c.y, x: d.x, y: d.y });
        b.currentX_ = d.x;
        b.currentY_ = d.y }
    i.quadraticCurveTo = function(b, a, c, d) {
        var f = this.getCoords_(b, a),
            h = this.getCoords_(c, d),
            g = { x: this.currentX_ + 0.6666666666666666 * (f.x - this.currentX_), y: this.currentY_ + 0.6666666666666666 * (f.y - this.currentY_) };
        Q(this, g, { x: g.x + (h.x - this.currentX_) / 3, y: g.y + (h.y - this.currentY_) / 3 }, h) };
    i.arc = function(b, a, c, d, f, h) { c *= k;
        var g = h ? "at" : "wa",
            l = b + G(d) * c - v,
            e = a + F(d) * c - v,
            m = b + G(f) * c - v,
            r = a + F(f) * c - v;
        if (l == m && !h) l += 0.125;
        var n = this.getCoords_(b, a),
            o = this.getCoords_(l, e),
            q = this.getCoords_(m, r);
        this.currentPath_.push({ type: g, x: n.x, y: n.y, radius: c, xStart: o.x, yStart: o.y, xEnd: q.x, yEnd: q.y }) };
    i.rect = function(b, a, c, d) { this.moveTo(b, a);
        this.lineTo(b + c, a);
        this.lineTo(b + c, a + d);
        this.lineTo(b, a + d);
        this.closePath() };
    i.strokeRect = function(b, a, c, d) {
        var f = this.currentPath_;
        this.beginPath();
        this.moveTo(b, a);
        this.lineTo(b + c, a);
        this.lineTo(b + c, a + d);
        this.lineTo(b, a + d);
        this.closePath();
        this.stroke();
        this.currentPath_ = f };
    i.fillRect = function(b, a, c, d) {
        var f = this.currentPath_;
        this.beginPath();
        this.moveTo(b, a);
        this.lineTo(b + c, a);
        this.lineTo(b + c, a + d);
        this.lineTo(b, a + d);
        this.closePath();
        this.fill();
        this.currentPath_ = f };
    i.createLinearGradient = function(b, a, c, d) {
        var f = new D("gradient");
        f.x0_ = b;
        f.y0_ = a;
        f.x1_ = c;
        f.y1_ = d;
        return f };
    i.createRadialGradient = function(b, a, c, d, f, h) {
        var g = new D("gradientradial");
        g.x0_ = b;
        g.y0_ = a;
        g.r0_ = c;
        g.x1_ = d;
        g.y1_ = f;
        g.r1_ = h;
        return g };
    i.drawImage = function(b) {
        var a, c, d, f, h, g, l, e, m = b.runtimeStyle.width,
            r = b.runtimeStyle.height;
        b.runtimeStyle.width = "auto";
        b.runtimeStyle.height = "auto";
        var n = b.width,
            o = b.height;
        b.runtimeStyle.width = m;
        b.runtimeStyle.height = r;
        if (arguments.length == 3) { a = arguments[1];
            c = arguments[2];
            h = g = 0;
            l = d = n;
            e = f = o } else if (arguments.length == 5) { a = arguments[1];
            c = arguments[2];
            d = arguments[3];
            f = arguments[4];
            h = g = 0;
            l = n;
            e = o } else if (arguments.length == 9) { h = arguments[1];
            g = arguments[2];
            l = arguments[3];
            e = arguments[4];
            a = arguments[5];
            c = arguments[6];
            d = arguments[7];
            f = arguments[8] } else throw Error("Invalid number of arguments");
        var q = this.getCoords_(a, c),
            t = [];
        t.push(" <g_vml_:group", ' coordsize="', k * 10, ",", k * 10, '"', ' coordorigin="0,0"', ' style="width:', 10, "px;height:", 10, "px;position:absolute;");
        if (this.m_[0][0] != 1 || this.m_[0][1]) {
            var E = [];
            E.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", j(q.x / k), ",", "Dy=", j(q.y / k), "");
            var p = q,
                z = this.getCoords_(a + d, c),
                w = this.getCoords_(a, c + f),
                x = this.getCoords_(a + d, c + f);
            p.x = s.max(p.x, z.x, w.x, x.x);
            p.y = s.max(p.y, z.y, w.y, x.y);
            t.push("padding:0 ", j(p.x / k), "px ", j(p.y / k), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", E.join(""), ", sizingmethod='clip');") } else t.push("top:", j(q.y / k), "px;left:", j(q.x / k), "px;");
        t.push(' ">', '<g_vml_:image src="', b.src, '"', ' style="width:', k * d, "px;", " height:", k * f, 'px;"', ' cropleft="', h / n, '"', ' croptop="', g / o, '"', ' cropright="', (n - h - l) / n, '"', ' cropbottom="', (o - g - e) / o, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", t.join("")) };
    i.stroke = function(b) {
        var a = [],
            c = P(b ? this.fillStyle : this.strokeStyle),
            d = c.color,
            f = c.alpha * this.globalAlpha;
        a.push("<g_vml_:shape", ' filled="', !!b, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0 0" coordsize="', k * 10, " ", k * 10, '"', ' stroked="', !b, '"', ' path="');
        var h = { x: null, y: null },
            g = { x: null, y: null },
            l = 0;
        for (; l < this.currentPath_.length; l++) {
            var e = this.currentPath_[l];
            switch (e.type) {
                case "moveTo":
                    a.push(" m ", j(e.x), ",", j(e.y));
                    break;
                case "lineTo":
                    a.push(" l ", j(e.x), ",", j(e.y));
                    break;
                case "close":
                    a.push(" x ");
                    e = null;
                    break;
                case "bezierCurveTo":
                    a.push(" c ", j(e.cp1x), ",", j(e.cp1y), ",", j(e.cp2x), ",", j(e.cp2y), ",", j(e.x), ",", j(e.y));
                    break;
                case "at":
                case "wa":
                    a.push(" ", e.type, " ", j(e.x - this.arcScaleX_ * e.radius), ",", j(e.y - this.arcScaleY_ * e.radius), " ", j(e.x + this.arcScaleX_ * e.radius), ",", j(e.y + this.arcScaleY_ * e.radius), " ", j(e.xStart), ",", j(e.yStart), " ", j(e.xEnd), ",", j(e.yEnd));
                    break }
            if (e) {
                if (h.x == null || e.x < h.x) h.x = e.x;
                if (g.x == null || e.x > g.x) g.x = e.x;
                if (h.y == null || e.y < h.y) h.y = e.y;
                if (g.y == null || e.y > g.y) g.y = e.y } }
        a.push(' ">');
        if (b)
            if (typeof this.fillStyle == "object") {
                var m = this.fillStyle,
                    r = 0,
                    n = { x: 0, y: 0 },
                    o = 0,
                    q = 1;
                if (m.type_ == "gradient") {
                    var t = m.x1_ / this.arcScaleX_,
                        E = m.y1_ / this.arcScaleY_,
                        p = this.getCoords_(m.x0_ / this.arcScaleX_, m.y0_ / this.arcScaleY_),
                        z = this.getCoords_(t, E);
                    r = Math.atan2(z.x - p.x, z.y - p.y) * 180 / Math.PI;
                    if (r < 0) r += 360;
                    if (r < 1.0E-6) r = 0 } else {
                    var p = this.getCoords_(m.x0_, m.y0_),
                        w = g.x - h.x,
                        x = g.y - h.y;
                    n = { x: (p.x - h.x) / w, y: (p.y - h.y) / x };
                    w /= this.arcScaleX_ * k;
                    x /= this.arcScaleY_ * k;
                    var R = s.max(w, x);
                    o = 2 * m.r0_ / R;
                    q = 2 * m.r1_ / R - o }
                var u = m.colors_;
                u.sort(function(ba, ca) {
                    return ba.offset - ca.offset });
                var J = u.length,
                    da = u[0].color,
                    ea = u[J - 1].color,
                    fa = u[0].alpha * this.globalAlpha,
                    ga = u[J - 1].alpha * this.globalAlpha,
                    S = [],
                    l = 0;
                for (; l < J; l++) {
                    var T = u[l];
                    S.push(T.offset * q + o + " " + T.color) }
                a.push('<g_vml_:fill type="', m.type_, '"', ' method="none" focus="100%"', ' color="', da, '"', ' color2="', ea, '"', ' colors="', S.join(","), '"', ' opacity="', ga, '"', ' g_o_:opacity2="', fa, '"', ' angle="', r, '"', ' focusposition="', n.x, ",", n.y, '" />') } else a.push('<g_vml_:fill color="', d, '" opacity="', f, '" />');
        else {
            var K = this.lineScale_ * this.lineWidth;
            if (K < 1) f *= K;
            a.push("<g_vml_:stroke", ' opacity="', f, '"', ' joinstyle="', this.lineJoin, '"', ' miterlimit="', this.miterLimit, '"', ' endcap="', aa(this.lineCap), '"', ' weight="', K, 'px"', ' color="', d, '" />') }
        a.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", a.join("")) };
    i.fill = function() { this.stroke(true) };
    i.closePath = function() { this.currentPath_.push({ type: "close" }) };
    i.getCoords_ = function(b, a) {
        var c = this.m_;
        return { x: k * (b * c[0][0] + a * c[1][0] + c[2][0]) - v, y: k * (b * c[0][1] + a * c[1][1] + c[2][1]) - v } };
    i.save = function() {
        var b = {};
        O(this, b);
        this.aStack_.push(b);
        this.mStack_.push(this.m_);
        this.m_ = y(I(), this.m_) };
    i.restore = function() { O(this.aStack_.pop(), this);
        this.m_ = this.mStack_.pop() };

    function ha(b) {
        var a = 0;
        for (; a < 3; a++) {
            var c = 0;
            for (; c < 2; c++)
                if (!isFinite(b[a][c]) || isNaN(b[a][c])) return false }
        return true }

    function A(b, a, c) {
        if (!!ha(a)) { b.m_ = a;
            if (c) b.lineScale_ = W(V(a[0][0] * a[1][1] - a[0][1] * a[1][0])) } }
    i.translate = function(b, a) { A(this, y([
            [1, 0, 0],
            [0, 1, 0],
            [b, a, 1]
        ], this.m_), false) };
    i.rotate = function(b) {
        var a = G(b),
            c = F(b);
        A(this, y([
            [a, c, 0],
            [-c, a, 0],
            [0, 0, 1]
        ], this.m_), false) };
    i.scale = function(b, a) { this.arcScaleX_ *= b;
        this.arcScaleY_ *= a;
        A(this, y([
            [b, 0, 0],
            [0, a, 0],
            [0, 0, 1]
        ], this.m_), true) };
    i.transform = function(b, a, c, d, f, h) { A(this, y([
            [b, a, 0],
            [c, d, 0],
            [f, h, 1]
        ], this.m_), true) };
    i.setTransform = function(b, a, c, d, f, h) { A(this, [
            [b, a, 0],
            [c, d, 0],
            [f, h, 1]
        ], true) };
    i.clip = function() {};
    i.arcTo = function() {};
    i.createPattern = function() {
        return new U };

    function D(b) { this.type_ = b;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = [] }
    D.prototype.addColorStop = function(b, a) { a = P(a);
        this.colors_.push({ offset: b, color: a.color, alpha: a.alpha }) };

    function U() {}
    G_vmlCanvasManager = M;
    CanvasRenderingContext2D = H;
    CanvasGradient = D;
    CanvasPattern = U })();

/*
 * highcharts.js
 */
(function() {
    function jc(a) {
        if (!a || a.constructor != Array) a = [a];
        return a }

    function Qa(a) {
        return a !== ma && a !== null }

    function da() {
        var a = arguments,
            b, c;
        for (b = 0; b < a.length; b++) { c = a[b];
            if (Qa(c)) return c } }

    function Gb(a, b, c) {
        var d, e = "",
            f = c ? "print" : "",
            g = function(i) {
                return V("style", { type: "text/css", media: i ? "print" : "" }, null, va.getElementsByTagName("HEAD")[0]) };
        kc || (kc = g());
        for (d in b) e += Pb(d) + ":" + b[d] + ";";
        if (Ra) { b = va.styleSheets;
            c && g(true);
            for (c = b.length - 1; c >= 0 && b[c].media != f;) c--;
            f = b[c];
            f.addRule(a, e) } else kc.appendChild(va.createTextNode(a + " {" + e + "}\n")) }

    function H(a, b) { a || (a = {});
        for (var c in b) a[c] = b[c];
        return a }

    function Vc(a) { Ba = aa(Ba, a);
        Cc();
        return Ba }

    function Ca(a) { Qb || (Qb = V(Va));
        a && Qb.appendChild(a);
        Qb.innerHTML = "" }

    function ab(a, b) {
        var c = function() {};
        c.prototype = new a;
        H(c.prototype, b);
        return c }

    function Hb(a, b) {
        if (typeof a == "string") return a;
        else if (a.linearGradient) {
            var c = b.createLinearGradient.apply(b, a.linearGradient);
            p(a.stops, function(d) { c.addColorStop(d[0], d[1]) });
            return c } }

    function V(a, b, c, d, e) { a = va.createElement(a);
        b && H(a, b);
        e && ra(a, { padding: 0, border: "none", margin: 0 });
        c && ra(a, c);
        d && d.appendChild(a);
        return a }

    function ra(a, b) {
        if (Ra)
            if (b.opacity !== ma) b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
        H(a.style, b) }

    function Wc(a, b, c, d) {
        var e = Ba.lang;
        a = a;
        var f = isNaN(b = Da(b)) ? 2 : b;
        b = c === ma ? e.decimalPoint : c;
        d = d === ma ? e.thousandsSep : d;
        e = a < 0 ? "-" : "";
        c = parseInt(a = Da(+a || 0).toFixed(f)) + "";
        var g = (g = c.length) > 3 ? g % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + Da(a - c).toFixed(f).slice(2) : "") }

    function lc(a, b, c) {
        function d(y) {
            return y.toString().replace(/^([0-9])$/, "0$1") }
        if (!Qa(b)) return "Invalid date";
        b = new Date(b * Sa);
        var e = b[mc](),
            f = b[nc](),
            g = b[Ib](),
            i = b[Rb](),
            k = b[Sb](),
            j = Ba.lang,
            r = j.weekdays;
        j = j.months;
        b = { a: r[f].substr(0, 3), A: r[f], d: d(g), e: g, b: j[i].substr(0, 3), B: j[i], m: d(i + 1), y: k.toString().substr(2, 2), Y: k, H: d(e), I: d(e % 12 || 12), l: e % 12 || 12, M: d(b[oc]()), p: e < 12 ? "AM" : "PM", P: e < 12 ? "am" : "pm", S: d(b.getSeconds()) };
        for (var v in b) a = a.replace("%" + v, b[v]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a }

    function Cc() {
        var a = Ba.global.useUTC;
        Tb = a ? Date.UTC : function(b, c, d, e, f, g) {
            return (new Date(b, c, da(d, 1), da(e, 0), da(f, 0), da(g, 0))).getTime() };
        oc = a ? "getUTCMinutes" : "getMinutes";
        mc = a ? "getUTCHours" : "getHours";
        nc = a ? "getUTCDay" : "getDay";
        Ib = a ? "getUTCDate" : "getDate";
        Rb = a ? "getUTCMonth" : "getMonth";
        Sb = a ? "getUTCFullYear" : "getFullYear";
        Dc = a ? "setUTCMinutes" : "setMinutes";
        Ec = a ? "setUTCHours" : "setHours";
        pc = a ? "setUTCDate" : "setDate";
        Fc = a ? "setUTCMonth" : "setMonth";
        Gc = a ? "setUTCFullYear" : "setFullYear" }

    function Hc(a) {
        for (var b = { x: a.offsetLeft, y: a.offsetTop }; a.offsetParent;) { a = a.offsetParent;
            b.x += a.offsetLeft;
            b.y += a.offsetTop;
            if (a != va.body && a != va.documentElement) { b.x -= a.scrollLeft;
                b.y -= a.scrollTop } }
        return b }

    function Xc(a) {
        function b(l, h) {
            var s;
            h = da(h, true);
            na(t, "addSeries", { options: l }, function() { s = d(l);
                s.isDirty = true;
                t.isDirty = true;
                h && t.redraw() });
            return s }

        function c() {
            var l = t.isDirty;
            p(ya, function(h) {
                if (h.isDirty) { h.cleanData();
                    h.getSegments();
                    if (h.options.legendType == "point") l = true } });
            Cb = null;
            if (Ub) { p(Ka, function(h) { h.setScale() });
                j();
                p(Ka, function(h) { h.isDirty && h.redraw() }) }
            p(ya, function(h) { h.isDirty && h.visible && h.redraw() });
            if (l) {
                if (Jb && Jb.renderHTML) { Jb.renderHTML(true);
                    Jb.drawGraphics(true) }
                t.isDirty = false }
            ub && ub.resetTracker && ub.resetTracker();
            na(t, "redraw") }

        function d(l) {
            var h = l.type || A.defaultSeriesType,
                s = bb[h],
                q = t.hasRendered;
            if (q)
                if (Ea && h == "column") s = Ic;
                else if (!Ea && h == "bar") s = Vb;
            h = new s;
            h.init(t, l);
            if (!q && h.inverted) Ea = true;
            if (h.isCartesian) Ub = h.isCartesian;
            ya.push(h);
            return h }

        function e() {
            var l = a.loading;
            if (!vb) { vb = V(Va, { className: "highcharts-loading" }, H(l.style, { left: ga + F, top: I + F, width: sa + F, height: ka + F, zIndex: 10, display: "none" }), oa);
                V("span", { innerHTML: a.lang.loading }, l.labelStyle, vb) }
            ra(vb, { display: "" });
            Db(vb, { opacity: l.style.opacity }, { duration: l.showDuration }) }

        function f() { Db(vb, { opacity: 0 }, { duration: a.loading.hideDuration, complete: function() { ra(vb, { display: "none" }) } }) }

        function g(l) {
            var h, s, q;
            for (h = 0; h < Ka.length; h++)
                if (Ka[h].options.id == l) return Ka[h];
            for (h = 0; h < ya.length; h++)
                if (ya[h].options.id == l) return ya[h];
            for (h = 0; h < ya.length; h++) { q = ya[h].data;
                for (s = 0; s < q.length; s++)
                    if (q[s].id == l) return q[s] }
            return null }

        function i() {
            var l = va.getElementById(qc);
            if (l) lb = Hc(l) }

        function k() {
            var l = a.xAxis || {},
                h = a.yAxis || {},
                s;
            l = jc(l);
            p(l, function(q, M) { q.index = M;
                q.isX = true });
            h = jc(h);
            p(h, function(q, M) { q.index = M });
            Ka = l.concat(h);
            t.xAxis = [];
            t.yAxis = [];
            Ka = qb(Ka, function(q) { s = new Fa(t, q);
                t[s.isXAxis ? "xAxis" : "yAxis"].push(s);
                return s });
            j() }

        function j() { A.alignTicks !== false && p(Ka, function(l) { l.adjustTickAmount() }) }

        function r() {
            var l = [];
            p(ya, function(h) { l = l.concat(Wb(h.data, function(s) {
                    return s.selected })) });
            return l }

        function v() {
            return Wb(ya, function(l) {
                return l.selected }) }

        function y(l) {
            var h = Ba.lang;
            t.toolbar.add("zoom", h.resetZoom, h.resetZoomTitle, function() { na(t, "selection", { resetSelection: true }, y);
                t.toolbar.remove("zoom") });!l || l.resetSelection ? p(Ka, function(s) { s.setExtremes(null, null, false) }) : p(l.xAxis.concat(l.yAxis), function(s) {
                var q = s.axis;
                if (t.tracker[q.isXAxis ? "zoomX" : "zoomY"]) q.setExtremes(s.min, s.max, false) });
            c() }

        function R() {
            var l = a.title,
                h = a.subtitle;
            if (!t.titleLayer) {
                var s = new pa("title-layer", oa, null, { zIndex: 2 });
                l && l.text && V("h2", { className: "highcharts-title", innerHTML: l.text }, l.style, s.div);
                h && h.text && V("h3", { className: "highcharts-subtitle", innerHTML: h.text }, h.style, s.div);
                t.titleLayer = s } }

        function E() {
            var l = true;
            for (var h in t.resources) t.resources[h] || (l = false);
            l && K() }

        function K() { k();
            p(ya, function(l) { l.translate();
                l.setTooltipPoints();
                l.createArea() });
            t.render = Wa;
            setTimeout(function() { Wa();
                na(t, "load") }, 0) }

        function C() { Xa = A.renderTo;
            qc = "highcharts-" + rc++;
            if (typeof Xa == "string") Xa = va.getElementById(Xa);
            Xa.innerHTML = "";
            if (!Xa.offsetWidth) { rb = Xa.cloneNode(0);
                ra(rb, { position: wa, top: "-9999px", display: "" });
                va.body.appendChild(rb) }
            var l = (rb || Xa).offsetHeight;
            mb = A.width || (rb || Xa).offsetWidth || 600;
            Ga = A.height || (l > I + cb ? l : 0) || 400;
            oa = V(Va, { className: "highcharts-container" + (A.className ? " " + A.className : ""), id: qc }, H({ position: Xb, overflow: db, width: mb + F, height: Ga + F, textAlign: "left" }, A.style), rb || Xa) }

        function Wa() {
            var l, h = a.labels,
                s = a.credits;
            l = 2 * (A.borderWidth || 0) + (A.shadow ? 8 : 0);
            Jc.drawRect(l / 2, l / 2, mb - l, Ga - l, A.borderColor, A.borderWidth, A.borderRadius, A.backgroundColor, A.shadow);
            Jc.drawRect(ga, I, sa, ka, null, null, null, A.plotBackgroundColor, null, Yb);
            (new pa("plot-border", oa, null, { zIndex: 4 })).drawRect(ga, I, sa, ka, A.plotBorderColor, A.plotBorderWidth, null, null, A.plotShadow);
            Ra && Gb(".highcharts-image-map", { display: "none" }, "print");
            Ub && p(Ka, function(q) { q.render() });
            R();
            h.items && p(h.items, function() {
                var q = H({ className: "highcharts-label" }, this.attributes);
                sc.drawHtml(this.html, q, H(h.style, this.style)) });
            p(ya, function(q) { q.render() });
            Jb = t.legend = new nb(t);
            if (!t.toolbar) t.toolbar = Kb(t);
            if (s.enabled && !t.credits) t.credits = V("a", { className: "highcharts-credits", href: s.href, innerHTML: s.text, target: s.target }, H(s.style, { zIndex: 8 }), oa);
            t.hasRendered = true;
            if (rb) { Xa.appendChild(oa);
                Ca(rb);
                i() } }

        function La() {
            function l(h) {
                var s = h.attributes,
                    q, M;
                if (s) { q = s.length;
                    for (q = q - 1; q >= 0; q -= 1) { M = s[q].name;
                        try {
                            if (typeof h[M] == "function") h[M] = null } catch (ea) {} } }
                if (s = h.childNodes) { q = s.length;
                    for (q = q - 1; q >= 0; q--) { s = h.childNodes[q];
                        l(s);
                        s.childNodes.length || Ca(s) } } }
            p(ya, function(h) { h.destroy() });
            ya = [];
            l(oa) }

        function Fa(l, h) {
            function s() { h = aa(L ? Zb : tc, Y ? la ? Yc : Kc : la ? Zc : $c, h) }

            function q() {
                var m = [],
                    n;
                Ma = Ta = null;
                $b = [];
                p(ya, function(u) { n = false;
                    p(["xAxis", "yAxis"], function(J) {
                        if ((J == "xAxis" && L || J == "yAxis" && !L) && (u.options[J] == h.index || u.options[J] === ma && h.index == 0)) { u[J] = Ya;
                            $b.push(u);
                            n = true } });
                    if (!u.visible && A.ignoreHiddenSeries) n = false;
                    if (n) {
                        var x;
                        if (!L) { x = u.options.stacking;
                            ac = x == "percent";
                            if (x) {
                                var z = m[u.type] || [];
                                m[u.type] = z }
                            if (ac) { Ma = 0;
                                Ta = 99 } }
                        if (u.isCartesian) { p(u.data, function(J) {
                                var G = J.x,
                                    ja = J.y;
                                if (Ma === null) Ma = Ta = J[wb];
                                if (L)
                                    if (G > Ta) Ta = G;
                                    else {
                                        if (G < Ma) Ma = G }
                                else if (Qa(ja)) {
                                    if (x) z[G] = z[G] ? z[G] + ja : ja;
                                    J = z ? z[G] : ja;
                                    if (!ac)
                                        if (J > Ta) Ta = J;
                                        else if (J < Ma) Ma = J;
                                    if (x) eb[u.type][G] = { total: J, cum: J } } });
                            if (!L && /(area|column|bar)/.test(u.type))
                                if (Ma >= 0) { Ma = 0;
                                    Lc = true } else if (Ta < 0) { Ta = 0;
                                Mc = true } } } }) }

            function M(m, n, u) {
                var x = 1,
                    z = 0;
                if (u) { x *= -1;
                    z = sb }
                if (xb) { x *= -1;
                    z -= x * sb }
                if (n) {
                    if (xb) m = sb - m;
                    m = m / yb + W } else m = x * (m - W) * yb + z;
                return m }

            function ea(m, n, u) {
                if (u) {
                    var x, z, J;
                    x = M(m);
                    var G;
                    m = z = x + bc;
                    x = J = Ga - x - bc;
                    if (Y) { x = I;
                        J = Ga - cb;
                        if (m < ga || m > ga + sa) G = true } else { m = ga;
                        z = mb - fb;
                        if (x < I || x > I + ka) G = true }
                    G || Nc.drawLine(m, x, z, J, n, u) } }

            function xa(m, n, u) { m = Lb(m, W);
                n = Math.min(n, ha);
                var x = (n - m) * yb;
                ea(m + (n - m) / 2, u, x) }

            function D(m, n, u, x, z, J, G) {
                var ja, ba, gb, N = h.labels;
                if (n == "inside") z = -z;
                if (la) z = -z;
                n = ba = M(m + zb) + bc;
                ja = gb = Ga - M(m + zb) - bc;
                if (Y) { ja = Ga - cb - (la ? ka : 0) + Ua;
                    gb = ja + z } else { n = ga + (la ? sa : 0) + Ua;
                    ba = n - z }
                x && Eb.drawLine(n, ja, ba, gb, u, x);
                if (J && N.enabled)
                    if ((m = cc.call({ index: G, isFirst: m == fa[0], isLast: m == fa[fa.length - 1], value: Ha && Ha[m] ? Ha[m] : m })) || m === 0) Eb.addText(m, n + N.x - (zb && Y ? zb * yb * (xb ? -1 : 1) : 0), ja + N.y - (zb && !Y ? zb * yb * (xb ? 1 : -1) : 0), N.style, N.rotation, N.align) }

            function ia(m, n) {
                var u;
                da(h.allowDecimals, true);
                Mb = n ? 1 : ta.pow(10, Za(ta.log(m) / ta.LN10));
                u = m / Mb;
                n || (n = [1, 2, 2.5, 5, 10]);
                for (var x = 0; x < n.length; x++) { m = n[x];
                    if (u <= (n[x] + (n[x + 1] || n[x])) / 2) break }
                m *= Mb;
                return m }

            function U() { fa = [];
                for (var m = Ba.global.useUTC, n = 1E3 / Sa, u = 6E4 / Sa, x = 36E5 / Sa, z = 864E5 / Sa, J = 6048E5 / Sa, G = 2592E6 / Sa, ja = 31556952E3 / Sa, ba = [
                        ["second", n, [1, 2, 5, 10, 15, 30]],
                        ["minute", u, [1, 2, 5, 10, 15, 30]],
                        ["hour", x, [1, 2, 3, 4, 6, 8, 12]],
                        ["day", z, [1, 2]],
                        ["week", J, [1, 2]],
                        ["month", G, [1, 2, 3, 4, 6]],
                        ["year", ja, null]
                    ], gb = ba[6], N = gb[1], Z = gb[2], $a = 0; $a < ba.length; $a++) { gb = ba[$a];
                    N = gb[1];
                    Z = gb[2];
                    if (ba[$a + 1]) {
                        var ad = (N * Z[Z.length - 1] + ba[$a + 1][1]) / 2;
                        if (Ia <= ad) break } }
                if (N == ja && Ia < 5 * N) Z = [1, 2, 5];
                ba = ia(Ia / N, Z);
                var tb;
                Z = new Date(W * Sa);
                Z.setMilliseconds(0);
                if (N >= n) Z.setSeconds(N >= u ? 0 : ba * Za(Z.getSeconds() / ba));
                if (N >= u) Z[Dc](N >= x ? 0 : ba * Za(Z[oc]() / ba));
                if (N >= x) Z[Ec](N >= z ? 0 : ba * Za(Z[mc]() / ba));
                if (N >= z) Z[pc](N >= G ? 1 : ba * Za(Z[Ib]() / ba));
                if (N >= G) { Z[Fc](N >= ja ? 0 : ba * Za(Z[Rb]() / ba));
                    tb = Z[Sb]() }
                if (N >= ja) { tb -= tb % ba;
                    Z[Gc](tb) }
                N == J && Z[pc](Z[Ib]() - Z[nc]() + h.startOfWeek);
                $a = 1;
                n = Z.getTime() / Sa;
                tb = Z[Sb]();
                u = Z[Rb]();
                for (x = Z[Ib](); n < ha && $a < sa;) { fa.push(n);
                    if (N == ja) n = Tb(tb + $a * ba, 0) / Sa;
                    else if (N == G) n = Tb(tb, u + $a * ba) / Sa;
                    else if (!m && (N == z || N == J)) n = Tb(tb, u, x + $a * ba * (N == z ? 1 : 7));
                    else n += N * ba;
                    $a++ }
                fa.push(n);
                h.labels.formatter || (cc = function() {
                    return lc(h.dateTimeLabelFormats[gb[0]], this.value, 1) }) }

            function X() {
                var m = function(x) {
                        var z = (Mb < 1 ? O(1 / Mb) : 1) * 10;
                        return O(x * z) / z },
                    n;
                n = Za(W / Ia) * Ia;
                var u = ta.ceil(ha / Ia) * Ia;
                fa = [];
                for (n = m(n); n <= u;) { fa.push(n);
                    n = m(n + Ia) }
                if (Ha) { W -= 0.5;
                    ha += 0.5 }
                cc || (cc = function() {
                    return this.value }) }

            function ca() { hb ? U() : X();
                var m = fa[0],
                    n = fa[fa.length - 1];
                if (h.startOnTick) W = m;
                else W > m && fa.shift();
                if (h.endOnTick) ha = n;
                else ha < n && fa.pop() }

            function za() {
                if (!hb && !Ha) {
                    var m = Fb,
                        n = fa.length;
                    Fb = Cb[wb];
                    if (n < Fb) {
                        for (; fa.length < Fb;) fa.push(fa[fa.length - 1] + Ia);
                        yb *= (n - 1) / (Fb - 1) }
                    if (Qa(m) && Fb != m) Ya.isDirty = true } }

            function P() {
                var m, n, u, x = W,
                    z = ha;
                m = h.maxZoom;
                var J;
                q();
                W = da(Oc, h.min, Ma);
                ha = da(Pc, h.max, Ta);
                if (ha - W < m) { J = (m - ha + W) / 2;
                    W = Lb(W - J, da(h.min, W - J));
                    ha = ta.min(W + m, da(h.max, W + m)) }
                if (!Ha && !ac) { m = ha - W || 1;
                    if (!Qa(h.min) && Qc && (Ma < 0 || !Lc)) W -= m * Qc;
                    if (!Qa(h.max) && Rc && (Ta > 0 || !Mc)) ha += m * Rc }
                Ia = Ha || W == ha ? 1 : h.tickInterval == "auto" ? (ha - W) * h.tickPixelInterval / sb : h.tickInterval;
                if (!hb && h.tickInterval == "auto") Ia = ia(Ia);
                uc = h.minorTickInterval == "auto" && Ia ? Ia / 5 : h.minorTickInterval;
                ca();
                yb = sb / (ha - W || 1);
                Cb || (Cb = { x: 0, y: 0 });
                if (!hb && fa.length > Cb[wb]) Cb[wb] = fa.length;
                if (!L)
                    for (n in eb)
                        for (u in eb[n]) eb[n][u].cum = eb[n][u].total;
                Ya.isDirty = W != x || ha != z }

            function Aa(m, n, u) { u = da(u, true);
                na(Ya, "setExtremes", { min: m, max: n }, function() {
                    if (Ha) {
                        if (m < 0) m = 0;
                        if (n > Ha.length - 1) n = Ha.length - 1 }
                    Oc = m;
                    Pc = n;
                    u && l.redraw() }) }

            function w(m, n) { Ha = m;
                da(n, true) && o() }

            function qa() {
                return { min: W, max: ha, dataMin: Ma, dataMax: Ta } }

            function S(m) {
                var n = m.width,
                    u = n ? vc : wc;
                u.push(m);
                n ? ea(m.value, m.color, m.width) : xa(m.from, m.to, m.color) }

            function Na(m) { p([wc, vc], function(n) {
                    for (var u = 0; u < n.length; u++)
                        if (n[u].id == m) { n.splice(u, 1);
                            break } });
                Q() }

            function o() { ub.resetTracker && ub.resetTracker();
                Q();
                p($b, function(m) { m.isDirty = true }) }

            function Q() {
                var m = h.title,
                    n = h.alternateGridColor,
                    u = h.minorTickWidth,
                    x = h.lineWidth,
                    z, J;
                z = $b.length && Qa(W) && Qa(ha);
                Eb.clear();
                Nc.clear();
                if (z) { n && p(fa, function(G, ja) {
                        if (ja % 2 == 0 && G < ha) xa(G, fa[ja + 1] !== ma ? fa[ja + 1] : ha, n) });
                    p(wc, function(G) { xa(G.from, G.to, G.color) });
                    if (uc && !Ha)
                        for (z = W; z <= ha; z += uc) { ea(z, h.minorGridLineColor, h.minorGridLineWidth);
                            u && D(z, h.minorTickPosition, h.minorTickColor, u, h.minorTickLength) }
                    p(fa, function(G, ja) { J = G + zb;
                        ea(J, h.gridLineColor, h.gridLineWidth);
                        D(G, h.tickPosition, h.tickColor, h.tickWidth, h.tickLength, !(G == W && !h.showFirstLabel || G == ha && !h.showLastLabel), ja) });
                    p(vc, function(G) { ea(G.value, G.color, G.width) }) }
                if (x) { u = ga + (la ? sa : 0) + Ua;
                    z = Ga - cb - (la ? ka : 0) + Ua;
                    Eb.drawLine(Y ? ga : u, Y ? z : I, Y ? mb - fb : u, Y ? z : Ga - cb, h.lineColor, x) }
                if (m && m.enabled && m.text) { x = Y ? ga : I;
                    u = Y ? sa : ka;
                    x = { low: x + (Y ? 0 : u), middle: x + u / 2, high: x + (Y ? u : 0) }[m.align];
                    u = (Y ? I + ka : ga) + (Y ? 1 : -1) * (la ? -1 : 1) * m.margin - (Ra ? parseInt(m.style.fontSize || m.style.font.replace(/^[a-z ]+/, "")) / 3 : 0);
                    Eb.addText(m.text, Y ? x : u + (la ? sa : 0) + Ua, Y ? u - (la ? ka : 0) + Ua : x, m.style, m.rotation || 0, { low: "left", middle: "center", high: "right" }[m.align]) }
                Eb.strokeText();
                Ya.isDirty = false }
            var L = h.isX,
                la = h.opposite,
                Y = Ea ? !L : L,
                eb = { bar: {}, column: {}, area: {}, areaspline: {} };
            s();
            var Ya = this,
                hb = h.type == "datetime",
                Ua = h.offset || 0,
                wb = L ? "x" : "y",
                sb = Y ? sa : ka,
                yb, bc = Y ? ga : cb,
                Eb = new pa("axis-layer", oa, null, { zIndex: 7 }),
                Nc = new pa("grid-layer", oa, null, { zIndex: 1 }),
                Ma, Ta, $b, Oc, Pc, ha = null,
                W = null,
                Qc = h.minPadding,
                Rc = h.maxPadding,
                Lc, Mc, ac, Sc = h.events,
                xc, wc = h.plotBands || [],
                vc = h.plotLines || [],
                Ia, uc, Mb, fa, Fb, cc = h.labels.formatter,
                Ha = h.categories || L && l.columnCount,
                xb = h.reversed,
                zb = Ha && h.tickmarkPlacement == "between" ? 0.5 : 0;
            if (Ea && L && xb === ma) xb = true;
            la || (Ua *= -1);
            if (Y) Ua *= -1;
            H(Ya, { addPlotBand: S, addPlotLine: S, adjustTickAmount: za, categories: Ha, getExtremes: qa, isXAxis: L, options: h, render: Q, setExtremes: Aa, setScale: P, setCategories: w, translate: M, redraw: o, removePlotBand: Na, removePlotLine: Na, reversed: xb, stacks: eb });
            for (xc in Sc) Oa(Ya, xc, Sc[xc]);
            P() }

        function Kb() {
            function l(M, ea, xa, D) {
                if (!q[M]) { ea = V(Va, { innerHTML: ea, title: xa, onclick: D }, H(a.toolbar.itemStyle, { zIndex: 1003 }), s.div);
                    q[M] = ea } }

            function h(M) { Ca(q[M]);
                q[M] = null }
            var s, q = {};
            s = new pa("toolbar", oa, null, { zIndex: 1004, width: "auto", height: "auto" });
            return { add: l, remove: h } }

        function ob(l, h) {
            function s(o) { o = o || Pa.event;
                if (!o.target) o.target = o.srcElement;
                if (!o.pageX) o.pageX = o.clientX + (va.documentElement.scrollLeft || va.body.scrollLeft);
                if (!o.pageY) o.pageY = o.clientY + (va.documentElement.scrollTop || va.body.scrollTop);
                return o }

            function q(o) {
                var Q = { xAxis: [], yAxis: [] };
                p(Ka, function(L) {
                    var la = L.translate,
                        Y = L.isXAxis,
                        eb = Ea ? !Y : Y;
                    Q[Y ? "xAxis" : "yAxis"].push({ axis: L, value: la(eb ? o.pageX - lb.x - ga : ka - o.pageY + lb.y + I, true) }) });
                return Q }

            function M() { ib.onmousedown = function(o) { o = s(o);
                    o.preventDefault && o.preventDefault();
                    l.mouseIsDown = Nb = true;
                    X = o.pageX;
                    ca = o.pageY;
                    if (Ub && (w || qa)) { P || (P = V(Va, null, { position: wa, border: "none", background: "#4572A7", opacity: 0.25, width: S ? 0 : sa + F, height: Na ? 0 : ka + F }));
                        sc.div.appendChild(P) } };
                ib.onmousemove = function(o) { o = s(o);
                    o.returnValue = false;
                    if (Nb) { za = Math.sqrt(Math.pow(X - o.pageX, 2) + Math.pow(ca - o.pageY, 2)) > 10;
                        if (S) {
                            var Q = o.pageX - X;
                            ra(P, { width: Da(Q) + F, left: (Q > 0 ? 0 : Q) + X - lb.x - ga + F }) }
                        if (Na) { o = o.pageY - ca;
                            ra(P, { height: Da(o) + F, top: (o > 0 ? 0 : o) + +ca - lb.y - I + F }) } } else ea(o);
                    return false };
                ib.onmouseup = function() {
                    var o;
                    if (P) {
                        var Q = { xAxis: [], yAxis: [] },
                            L = P.offsetLeft,
                            la = P.offsetTop,
                            Y = P.offsetWidth,
                            eb = P.offsetHeight;
                        if (za) { p(Ka, function(Ya) {
                                var hb = Ya.translate,
                                    Ua = Ya.isXAxis,
                                    wb = Ea ? !Ua : Ua,
                                    sb = hb(wb ? L : ka - la - eb, true);
                                hb = hb(wb ? L + Y : ka - la, true);
                                Q[Ua ? "xAxis" : "yAxis"].push({ axis: Ya, min: ta.min(sb, hb), max: Lb(sb, hb) }) });
                            na(l, "selection", Q, y);
                            o = true }
                        Ca(P);
                        P = null }
                    l.mouseIsDown = Nb = za = false };
                ib.onmouseout = function(o) { o = o || Pa.event;
                    if ((o = o.relatedTarget || o.toElement) && o != dc && o.tagName != "AREA") { D();
                        l.mouseIsDown = Nb = za = false } };
                ib.onclick = function(o) { o = s(o);
                    o.cancelBubble = true;
                    if (!za)
                        if (U && o.target.tagName == "AREA") {
                            var Q = U.plotX,
                                L = U.plotY;
                            H(U, { pageX: lb.x + ga + (Ea ? sa - L : Q), pageY: lb.y + I + (Ea ? ka - Q : L) });
                            na(l.hoverSeries, "click", H(o, { point: U }));
                            U.firePointEvent("click", o) } else { H(o, q(o));
                            na(l, "click", o) }
                    za = false } }

            function ea(o) {
                var Q = l.hoverPoint,
                    L = l.hoverSeries;
                if (L) { Q || (Q = L.tooltipPoints[Ea ? o.pageY - lb.y - I : o.pageX - lb.x - ga]);
                    if (Q && Q != U) { U && U.firePointEvent("mouseOut");
                        Q.firePointEvent("mouseOver");
                        Ab && Ab.refresh(Q);
                        U = Q } } }

            function xa() {
                var o = "highchartsMap" + bd++;
                l.imagemap = ib = V("map", { name: o, id: o, className: "highcharts-image-map" }, null, oa);
                dc = V("img", { useMap: "#" + o }, { width: sa + F, height: ka + F, left: ga + F, top: I + F, opacity: 0, border: "none", position: wa, clip: "rect(1px," + sa + "px," + ka + "px,1px)", zIndex: 9 }, ib);
                if (!Ra) dc.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" }

            function D() { Ab && Ab.hide();
                if (l.hoverSeries) { l.hoverSeries.setState();
                    U = l.hoverSeries = null } }

            function ia(o) {
                var Q = 0,
                    L, la = ib.childNodes;
                for (L = 0; L < la.length; L++)
                    if (la[L].isLegendArea) { Q = L + 1;
                        break }
                ib.insertBefore(o, la[Q]) }
            var U, X, ca, za, P, Aa = A.zoomType,
                w = /x/.test(Aa),
                qa = /y/.test(Aa),
                S = w && !Ea || qa && Ea,
                Na = qa && !Ea || w && Ea;
            xa();
            if (h.enabled) l.tooltip = Ab = jb(h);
            M();
            setInterval(function() { yc && yc() }, 32);
            H(this, { insertAtFront: ia, zoomX: w, zoomY: qa, resetTracker: D }) }

        function jb(l) {
            function h(ia, U) {
                var X = ia.tooltipPos;
                U = ia.series;
                var ca = l.borderColor || ia.color || U.color || "#606060",
                    za = t.inverted,
                    P, Aa, w, qa = ea.offsetHeight;
                w = ia.tooltipText;
                M = U;
                P = X ? X[0] : za ? sa - ia.plotY : ia.plotX;
                X = X ? X[1] : za ? ka - ia.plotX : ia.plotY;
                if (P >= 0 && P <= sa && X >= 0 && X <= ka) Aa = true;
                if (w === false || !Aa) q();
                else { ea.innerHTML = w;
                    ra(ea, { overflow: ec });
                    Aa = ea.offsetWidth - xa;
                    w = ea.offsetHeight - xa;
                    ra(ea, { overflow: db });
                    if (Aa > (D.w || 0) + 20 || Aa < (D.w || 0) - 20 || w > D.h || D.c != ca || qa != ea.offsetHeight) { D.clear();
                        D.drawRect(xa / 2, xa / 2, Aa + 20, w, ca, xa, l.borderRadius, l.backgroundColor, l.shadow);
                        H(D, { w: Aa, h: w, c: ca }) }
                    ca = P - D.w + ga - 35;
                    P = X - D.h + 10 + I;
                    if (ca < 5) { ca = 5;
                        P -= 20 }
                    if (P < 5) P = 5;
                    else if (P + D.h > Ga) P = Ga - D.h - 5;
                    s(O(ca), O(P));
                    U.drawPointState(ia, "hover");
                    kb.style.visibility = ec } }

            function s(ia, U) {
                var X = kb.style.visibility == db,
                    ca = X ? ia : (kb.offsetLeft + ia) / 2;
                X = X ? U : (kb.offsetTop + U) / 2;
                ra(kb, { left: ca + F, top: X + F });
                yc = Da(ia - ca) > 1 || Da(U - X) > 1 ? function() { s(ia, U) } : null }

            function q() {
                if (kb) kb.style.visibility = db;
                M && M.drawPointState() }
            var M, ea, xa = l.borderWidth,
                D;
            kb = V(Va, null, { position: wa, visibility: db, overflow: db, padding: "0 50px 5px 0", zIndex: 8 }, oa);
            D = new pa("tooltip-box", kb, null, { width: mb + F, height: Ga + F });
            ea = V(Va, { className: "highcharts-tooltip" }, H(l.style, { maxWidth: mb - 40 + F, textOverflow: "ellipsis", position: Xb, zIndex: 2 }), kb);
            return { refresh: h, hide: q } }
        var nb = function(l) {
            function h(Aa) {
                if (Aa) { p(U, function(w) { Ca(w.legendItem) });
                    U = [] }
                P && za.reverse();
                p(za, function(w) {
                    if (w.options.showInLegend) {
                        var qa = w.options.legendType == "point" ? w.data : [w];
                        p(qa, function(S) { S.simpleSymbol = /(bar|pie|area|column)/.test(w.type);
                            S.legendItem = M = V("li", { innerHTML: q.labelFormatter.call(S), className: S.visible ? "" : Ob }, null, D.firstChild);
                            if (S.options && S.options.showCheckbox) S.checkbox = V("input", { type: "checkbox", checked: S.selected, defaultChecked: S.selected }, q.itemCheckboxStyle, M);
                            Oa(M, "mouseover", function() { S.setState("hover") });
                            Oa(M, "mouseout", function() { S.setState() });
                            Oa(M, "click", function(Na) { Na = Na.target;
                                var o = "legendItemClick",
                                    Q = function() { S.setVisible() };
                                if (Na.tagName == "INPUT") na(S, "checkboxClick", { checked: Na.checked }, function() { S.select() });
                                else S.firePointEvent ? S.firePointEvent(o, null, Q) : na(S, o, null, Q) });
                            U.push(S) }) } });
                P && za.reverse() }

            function s(Aa) {
                if (Aa) { X.clear();
                    Ca(ca);
                    ca = null }
                if (za.length) {
                    if (q.borderWidth || q.backgroundColor) X.drawRect(D.offsetLeft, D.offsetTop, D.offsetWidth, D.offsetHeight, q.borderColor, q.borderWidth, q.borderRadius, q.backgroundColor, q.shadow);
                    p(U, function(w) {
                        if (w.legendItem) {
                            var qa = w.legendItem,
                                S = D.offsetLeft + qa.offsetLeft;
                            qa = D.offsetTop + qa.offsetTop + qa.offsetHeight / 2;
                            var Na = w.legendItem.className == Ob,
                                o = Na ? q.itemHiddenStyle.color : w.color;!w.simpleSymbol && w.options && w.options.lineWidth && X.drawLine(S, qa, S + xa, qa, o, w.options.lineWidth);
                            if (w.simpleSymbol) X.drawRect(S, qa - 6, 16, 12, null, 0, 2, o);
                            else if (w.options && w.options.marker && w.options.marker.enabled) w.drawMarker(X, S + xa / 2, qa, aa(w.options.marker, Na ? { fillColor: o, lineColor: o } : null)) } });
                    if (ib) { ca = V("area", { shape: "rect", isLegendArea: true, coords: [D.offsetLeft - ga, D.offsetTop - I, D.offsetLeft + D.offsetWidth - ga, D.offsetTop + D.offsetHeight - I].join(",") });
                        ub.insertAtFront(ca);
                        ca.onmouseover = function(w) { w = w || Pa.event;
                            w = w.relatedTarget || w.fromElement;
                            if (w != D && !Nb) { Ab && Ab.hide();
                                ra(D, { zIndex: 10 }) } };
                        D.onmouseout = ca.onmouseout = function(w) { w = w || Pa.event;
                            if ((w = w.relatedTarget || w.toElement) && (w == dc || w.tagName == "AREA" && w != ca)) ra(D, { zIndex: 7 }) } } } }
            var q = l.options.legend;
            if (q.enabled) {
                var M, ea = q.layout,
                    xa = q.symbolWidth,
                    D, ia = "#" + oa.id + " .highcharts-legend li",
                    U = [],
                    X = new pa("legend", oa, null, { zIndex: 7 }),
                    ca, za = l.series,
                    P = q.reversed;
                this.dom = D = V(Va, { className: "highcharts-legend highcharts-legend-" + ea, innerHTML: '<ul style="margin:0;padding:0"></ul>' }, H({ position: wa, zIndex: 7 }, q.style), oa);
                Gb(ia, H(q.itemStyle, { paddingLeft: xa + q.symbolPadding + F, "float": ea == "horizontal" ? "left" : "none" }));
                Gb(ia + ":hover", q.itemHoverStyle);
                Gb(ia + "." + Ob, q.itemHiddenStyle);
                Gb(".highcharts-legend-horizontal li", { "float": "left" });
                h();
                s();
                return { renderHTML: h, drawGraphics: s } } };
        Pa.G_vmlCanvasManager && Pa.G_vmlCanvasManager.init_(document);
        Zb = aa(Zb, Ba.xAxis);
        tc = aa(tc, Ba.yAxis);
        Ba.xAxis = Ba.yAxis = null;
        a = aa(Ba, a);
        var A = a.chart,
            T = A.margin;
        T = typeof T == "number" ? [T, T, T, T] : T;
        var I = T[0],
            fb = T[1],
            cb = T[2],
            ga = T[3],
            Xa, rb, oa, qc, mb, Ga;
        C();
        var t = this;
        T = A.events;
        var zc, ib, Ab, Nb, Jc = new pa("chart-background", oa),
            vb, sc, ka, sa, ub, dc, Jb, lb = Hc(oa),
            Ub = A.showAxes,
            Ka = [],
            Cb, ya = [],
            Yb, Ea, yc, kb;
        fc = Bb = 0;
        Oa(Pa, "resize", i);
        Oa(Pa, "unload", La);
        if (T)
            for (zc in T) Oa(t, zc, T[zc]);
        t.addLoading = function(l) { t.resources[l] = false };
        t.clearLoading = function(l) { t.resources[l] = true;
            E() };
        t.options = a;
        t.series = ya;
        t.container = oa;
        t.resources = {};
        t.inverted = Ea = a.chart.inverted;
        t.chartWidth = mb;
        t.chartHeight = Ga;
        t.plotWidth = sa = mb - ga - fb;
        t.plotHeight = ka = Ga - I - cb;
        t.plotLeft = ga;
        t.plotTop = I;
        t.redraw = c;
        t.addSeries = b;
        t.getSelectedPoints = r;
        t.getSelectedSeries = v;
        t.showLoading = e;
        t.hideLoading = f;
        t.get = g;
        t.destroy = La;
        t.updatePosition = i;
        t.plotLayer = sc = new pa("plot", oa, null, { position: wa, width: sa + F, height: ka + F, left: ga + F, top: I + F, overflow: db, zIndex: 3 });
        if (A.plotBackgroundImage) { t.addLoading("plotBack");
            Yb = V("img");
            Yb.onload = function() { t.clearLoading("plotBack") };
            Yb.src = A.plotBackgroundImage }
        p(a.series || [], function(l) { d(l) });
        t.tracker = ub = new ob(t, a.tooltip);
        E() }

    function Tc(a) {
        for (var b = [], c = [], d = 0; d < a.length; d++) { b[d] = a[d].plotX;
            c[d] = a[d].plotY }
        this.xdata = b;
        this.ydata = c;
        a = [];
        this.y2 = [];
        var e = c.length;
        this.n = e;
        this.y2[0] = 0;
        this.y2[e - 1] = 0;
        a[0] = 0;
        for (d = 1; d < e - 1; d++) {
            var f = b[d + 1] - b[d - 1];
            f = (b[d] - b[d - 1]) / f;
            var g = f * this.y2[d - 1] + 2;
            this.y2[d] = (f - 1) / g;
            a[d] = (c[d + 1] - c[d]) / (b[d + 1] - b[d]) - (c[d] - c[d - 1]) / (b[d] - b[d - 1]);
            a[d] = (6 * a[d] / (b[d + 1] - b[d - 1]) - f * a[d - 1]) / g }
        for (b = e - 2; b >= 0; b--) this.y2[b] = this.y2[b] * this.y2[b + 1] + a[b] }
    var ma, va = document,
        Pa = window,
        ta = Math,
        O = ta.round,
        Za = ta.floor,
        Lb = ta.max,
        Da = ta.abs,
        gc = ta.cos,
        hc = ta.sin,
        B = navigator.userAgent,
        Ra = /msie/i.test(B) && !Pa.opera,
        cd = /AppleWebKit/.test(B),
        kc, bd = 0,
        Bb, fc, Uc = {},
        rc = 0,
        Sa = 1,
        Qb, Va = "div",
        wa = "absolute",
        Xb = "relative",
        db = "hidden",
        Ob = "highcharts-" + db,
        ec = "visible",
        F = "px",
        Tb, oc, mc, nc, Ib, Rb, Sb, Dc, Ec, pc, Fc, Gc, ua = (B = Pa.HighchartsAdapter) || {},
        p = ua.each,
        Wb = ua.grep,
        qb = ua.map,
        aa = ua.merge,
        Pb = ua.hyphenate,
        Oa = ua.addEvent,
        na = ua.fireEvent,
        Db = ua.animate,
        Ac = ua.getAjax,
        bb = {};
    if (!B && Pa.jQuery) {
        var pb = jQuery;
        p = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (b.call(a[c], a[c], c, a) === false) return c };
        Wb = pb.grep;
        qb = function(a, b) {
            for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = b.call(a[d], a[d], d, a);
            return c };
        aa = function() {
            var a = arguments;
            return pb.extend(true, null, a[0], a[1], a[2], a[3]) };
        Pb = function(a) {
            return a.replace(/([A-Z])/g, function(b, c) {
                return "-" + c.toLowerCase() }) };
        Oa = function(a, b, c) { pb(a).bind(b, c) };
        na = function(a, b, c, d) {
            var e = pb.Event(b),
                f = "detached" + b;
            H(e, c);
            if (a[b]) { a[f] = a[b];
                a[b] = null }
            pb(a).trigger(e);
            if (a[f]) { a[b] = a[f];
                a[f] = null }
            d && !e.isDefaultPrevented() && d(e) };
        Db = function(a, b, c) { pb(a).animate(b, c) };
        Ac = function(a, b) { pb.get(a, null, b) };
        pb.extend(pb.easing, { easeOutQuad: function(a, b, c, d, e) {
                return -d * (b /= e) * (b - 2) + c } }) } else if (!B && Pa.MooTools) { p = $each;
        qb = function(a, b) {
            return a.map(b) };
        Wb = function(a, b) {
            return a.filter(b) };
        aa = $merge;
        Pb = function(a) {
            return a.hyphenate() };
        Oa = function(a, b, c) {
            if (!a.addEvent)
                if (a.nodeName) a = $(a);
                else H(a, new Events);
            a.addEvent(b, c) };
        na = function(a, b, c, d) { b = new Event({ type: b, target: a });
            b = H(b, c);
            b.preventDefault = function() { d = null };
            a.fireEvent && a.fireEvent(b.type, b);
            d && d(b) };
        Db = function(a, b, c) { a = new Fx.Morph($(a), H(c, { transition: Fx.Transitions.Quad.easeInOut }));
            a.start(b) };
        Ac = function(a, b) {
            (new Request({ url: a, method: "get", onSuccess: b })).send() } }
    B = 'normal 12px "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif';
    ua = { enabled: true, align: "center", x: 0, y: 15, style: { color: "#666", font: B.replace("12px", "11px") } };
    var Ba = { colors: ["#4572A7", "#AA4643", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"], symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { loading: "Loading...", months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], decimalPoint: ".", resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: "," }, global: { useUTC: true }, chart: { margin: [50, 50, 60, 80], borderColor: "#4572A7", borderRadius: 5, defaultSeriesType: "line", ignoreHiddenSeries: true, plotBorderColor: "#C0C0C0" }, title: { text: "", style: { textAlign: "center", color: "#3E576F", font: B.replace("12px", "16px"), margin: "10px 0 0 0" } }, subtitle: { text: "", style: { textAlign: "center", color: "#6D869F", font: B, margin: 0 } }, plotOptions: { line: { allowPointSelect: false, showCheckbox: false, animation: true, events: {}, lineWidth: 2, shadow: true, marker: { enabled: true, symbol: "auto", lineWidth: 0, radius: 4, lineColor: "#FFFFFF", fillColor: "auto", states: { hover: {}, select: { fillColor: "#FFFFFF", lineColor: "auto", lineWidth: 2 } } }, point: { events: {} }, dataLabels: aa(ua, { enabled: false, y: -6, formatter: function() {
                            return this.y } }), showInLegend: true, states: { hover: { lineWidth: 3, marker: {} }, select: { marker: {} } } } }, labels: { style: { position: wa, color: "#3E576F", font: B } }, legend: { enabled: true, layout: "horizontal", labelFormatter: function() {
                    return this.name }, borderColor: "#909090", borderRadius: 5, shadow: true, style: { bottom: "10px", left: "80px", padding: "5px" }, itemStyle: { listStyle: "none", margin: 0, padding: "0 2em 0 0", font: B, cursor: "pointer", color: "#3E576F", position: Xb }, itemHoverStyle: { color: "#000" }, itemHiddenStyle: { color: "#CCC" }, itemCheckboxStyle: { position: wa, right: 0 }, symbolWidth: 16, symbolPadding: 5 }, loading: { hideDuration: 100, labelStyle: { font: B.replace("normal", "bold"), position: Xb, top: "1em" }, showDuration: 100, style: { position: wa, backgroundColor: "white", opacity: 0.5, textAlign: "center" } }, tooltip: { enabled: true, formatter: function() {
                    var a = this,
                        b = a.series,
                        c = b.xAxis,
                        d = a.x;
                    return "<b>" + (a.point.name || b.name) + "</b><br/>" + (Qa(d) ? "X value: " + (c && c.options.type == "datetime" ? lc("%Y-%m-%d %H:%M:%S", d) : d) + "<br/>" : "") + "Y value: " + a.y }, backgroundColor: "rgba(255, 255, 255, .85)", borderWidth: 2, borderRadius: 5, shadow: true, snap: 10, style: { color: "#333333", font: B, fontSize: "9pt", padding: "5px", whiteSpace: "nowrap" } }, toolbar: { itemStyle: { color: "#4572A7", cursor: "pointer", margin: "20px", font: B } }, credits: { enabled: true, text: "", href: "http://www.highcharts.com", style: { position: wa, right: "10px", bottom: "5px", color: "#999", textDecoration: "none", font: B.replace("12px", "10px") }, target: "_self" } },
        Zb = { dateTimeLabelFormats: { second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y" }, endOnTick: false, gridLineColor: "#C0C0C0", labels: ua, lineColor: "#C0D0E0", lineWidth: 1, max: null, min: null, maxZoom: null, minorGridLineColor: "#E0E0E0", minorGridLineWidth: 1, minorTickColor: "#A0A0A0", minorTickLength: 2, minorTickPosition: "outside", minorTickWidth: 1, showFirstLabel: true, showLastLabel: false, startOfWeek: 1, startOnTick: false, tickColor: "#C0D0E0", tickInterval: "auto", tickLength: 5, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", tickWidth: 1, title: { enabled: false, text: "X-values", align: "middle", margin: 35, style: { color: "#6D869F", font: B.replace("normal", "bold") } }, type: "linear" },
        tc = aa(Zb, { endOnTick: true, gridLineWidth: 1, tickPixelInterval: 72, showLastLabel: true, labels: { align: "right", x: -8, y: 3 }, lineWidth: 0, maxPadding: 0.05, minPadding: 0.05, startOnTick: true, tickWidth: 0, title: { enabled: true, margin: 40, rotation: 270, text: "Y-values" } }),
        $c = { labels: { align: "right", x: -8, y: 3 }, title: { rotation: 270 } },
        Zc = { labels: { align: "left", x: 8, y: 3 }, title: { rotation: 90 } },
        Kc = { labels: { align: "center", x: 0, y: 14 }, title: { rotation: 0 } },
        Yc = aa(Kc, { labels: { y: -5 } });
    B = Ba.plotOptions;
    ua = B.line;
    B.spline = aa(ua);
    B.scatter = aa(ua, { lineWidth: 0, states: { hover: { lineWidth: 0 } } });
    B.area = aa(ua, { fillColor: "auto" });
    B.areaspline = aa(B.area);
    B.column = aa(ua, { borderColor: "#FFFFFF", borderWidth: 1, borderRadius: 0, groupPadding: 0.2, pointPadding: 0.1, states: { hover: { brightness: 0.1, shadow: false }, select: { color: "#C0C0C0", borderColor: "#000000", shadow: false } } });
    B.bar = aa(B.column, { dataLabels: { align: "left", x: 5, y: 0 } });
    B.pie = aa(ua, { borderColor: "#FFFFFF", borderWidth: 1, center: ["50%", "50%"], legendType: "point", size: "90%", slicedOffset: 10, states: { hover: { brightness: 0.1, shadow: false } } });
    Cc();
    var Bc = function(a) {
            function b(i) {
                if (g = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i)) f = [parseInt(g[1]), parseInt(g[2]), parseInt(g[3]), parseFloat(g[4])];
                else if (g = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(i)) f = [parseInt(g[1], 16), parseInt(g[2], 16), parseInt(g[3], 16), 1] }

            function c() {
                return f && !isNaN(f[0]) ? "rgba(" + f.join(",") + ")" : a }

            function d(i) {
                if (typeof i == "number" && i != 0)
                    for (var k = 0; k < 3; k++) { f[k] += parseInt(i * 255);
                        if (f[k] < 0) f[k] = 0;
                        if (f[k] > 255) f[k] = 255 }
                return this }

            function e(i) { f[3] = i;
                return this }
            var f = [],
                g;
            b(a);
            return { get: c, brighten: d, setOpacity: e } },
        pa = function(a, b, c, d) {
            var e = this,
                f = b.style;
            c = H({ className: "highcharts-" + a }, c);
            d = H({ width: f.width, height: f.height, position: wa, top: 0, left: 0, margin: 0, padding: 0, border: "none" }, d);
            a = V(Va, c, d, b);
            H(e, { div: a, width: parseInt(d.width), height: parseInt(d.height) });
            e.svg = Ra ? "" : '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + e.width + 'px" height="' + e.height + '">';
            e.basicSvg = e.svg };
    pa.prototype = { getCtx: function() {
            if (!this.ctx) {
                var a = V("canvas", { id: "highcharts-canvas-" + rc++, width: this.width, height: this.height }, { position: wa }, this.div);
                if (Ra) { G_vmlCanvasManager.initElement(a);
                    a = va.getElementById(a.id) }
                this.ctx = a.getContext("2d") }
            return this.ctx }, getSvg: function() {
            if (!this.svgObject) {
                var a = this,
                    b = a.div,
                    c = a.width;
                a = a.height;
                if (Ra) {
                    if (!va.namespaces.g_vml_) { va.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml");
                        va.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}" }
                    this.svgObject = V(Va, null, { width: c + F, height: a + F, position: wa }, b) } else this.svgObject = V("object", { width: c, height: a, type: "image/svg+xml" }, { position: wa, left: 0, top: 0 }, b) }
            return this.svgObject }, drawLine: function(a, b, c, d, e, f) {
            var g = this.getCtx();
            if (a == c) a = c = O(a) + f % 2 / 2;
            if (b == d) b = d = O(b) + f % 2 / 2;
            g.lineWidth = f;
            g.lineCap = "round";
            g.beginPath();
            g.moveTo(a, b);
            g.strokeStyle = e;
            g.lineTo(c, d);
            g.closePath();
            g.stroke() }, drawPolyLine: function(a, b, c, d, e) {
            var f = this.getCtx(),
                g = [];
            if (d && c) { p(a, function(i) { g.push(i === ma ? i : i + 1) });
                for (d = 1; d <= 3; d++) this.drawPolyLine(g, "rgba(0, 0, 0, " + 0.05 * d + ")", 6 - 2 * d) }
            f.beginPath();
            for (d = 0; d < a.length; d += 2) f[d == 0 ? "moveTo" : "lineTo"](a[d], a[d + 1]);
            H(f, { lineWidth: c, lineJoin: "round" });
            if (b && c) { f.strokeStyle = Hb(b, f);
                f.stroke() }
            if (e) { f.fillStyle = Hb(e, f);
                f.fill() } }, drawRect: function(a, b, c, d, e, f, g, i, k, j) {
            var r = function() {
                    var R;
                    if (c > 0 && d > 0) { v.beginPath();
                        if (g) { v.moveTo(a, b + g);
                            v.lineTo(a, b + d - g);
                            v.quadraticCurveTo(a, b + d, a + g, b + d);
                            v.lineTo(a + c - g, b + d);
                            v.quadraticCurveTo(a + c, b + d, a + c, b + d - g);
                            v.lineTo(a + c, b + g);
                            v.quadraticCurveTo(a + c, b, a + c - g, b);
                            v.lineTo(a + g, b);
                            v.quadraticCurveTo(a, b, a, b + g) } else v.rect(a, b, c, d);
                        v.closePath();
                        R = true }
                    return R },
                v = this.getCtx(),
                y = (f || 0) % 2 / 2;
            a = O(a) + y;
            b = O(b) + y;
            c = O(c - 2 * y);
            d = O(d - 2 * y);
            if (k)
                for (k = 1; k <= 3; k++) this.drawRect(a + 1, b + 1, c, d, "rgba(0, 0, 0, " + 0.05 * k + ")", 6 - 2 * k, g);
            j && v.drawImage(j, a, b, c, d);
            if (r()) {
                if (i) { v.fillStyle = Hb(i, v);
                    v.fill();
                    Pa.G_vmlCanvasManager && r() }
                if (f) { v.strokeStyle = Hb(e, v);
                    v.lineWidth = f;
                    v.stroke() } } }, drawSymbol: function(a, b, c, d, e, f, g) {
            var i = this.getCtx(),
                k = /^url\((.*?)\)$/;
            i.beginPath();
            if (a == "square") { a = 0.707 * d;
                i.moveTo(b - a, c - a);
                i.lineTo(b + a, c - a);
                i.lineTo(b + a, c + a);
                i.lineTo(b - a, c + a);
                i.lineTo(b - a, c - a) } else if (a == "triangle") { c++;
                i.moveTo(b, c - 1.33 * d);
                i.lineTo(b + d, c + 0.67 * d);
                i.lineTo(b - d, c + 0.67 * d);
                i.lineTo(b, c - 1.33 * d) } else if (a == "triangle-down") { c--;
                i.moveTo(b, c + 1.33 * d);
                i.lineTo(b - d, c - 0.67 * d);
                i.lineTo(b + d, c - 0.67 * d);
                i.lineTo(b, c + 1.33 * d) } else if (a == "diamond") { i.moveTo(b, c - d);
                i.lineTo(b + d, c);
                i.lineTo(b, c + d);
                i.lineTo(b - d, c);
                i.lineTo(b, c - d) } else k.test(a) ? V("img", { onload: function() {
                    var j = this,
                        r = Uc[j.src] || [j.width, j.height];
                    ra(j, { left: O(b - r[0] / 2) + F, top: O(c - r[1] / 2) + F, visibility: ec });
                    Uc[j.src] = r }, src: a.match(k)[1] }, { position: wa, visibility: Ra ? ec : db }, this.div) : i.arc(b, c, d, 0, 2 * ta.PI, true);
            if (g) { i.fillStyle = g;
                i.fill() }
            if (f && e) { i.strokeStyle = f || "rgb(100, 100, 255)";
                i.lineWidth = e || 2;
                i.stroke() } }, drawHtml: function(a, b, c) { V(Va, H(b, { innerHTML: a }), H(c, { position: wa }), this.div) }, drawText: function() { this.addText.apply(this, arguments);
            this.strokeText() }, addText: function(a, b, c, d, e, f) {
            if (a || a === 0) {
                var g = this,
                    i, k = g.div,
                    j, r = "";
                d = d || {};
                var v = d.color || "#000000";
                f = f || "left";
                var y = parseInt(d.fontSize || d.font.replace(/^[a-z ]+/, ""));
                for (var R in d) r += Pb(R) + ":" + d[R] + ";";
                p(["MozTransform", "WebkitTransform", "transform"], function(Wa) {
                    if (Wa in k.style) j = Wa });
                if (!e || j) { a = V("span", { innerHTML: a }, H(d, { position: wa, left: b + F, whiteSpace: "nowrap", bottom: O(g.height - c - y * 0.25) + F, color: v }), k);
                    r = a.offsetWidth;
                    if (f == "right") ra(a, { left: b - r + F });
                    else f == "center" && ra(a, { left: O(b - r / 2) + F });
                    if (e) { f = { left: 0, center: 50, right: 100 }[f];
                        a.style[j] = "rotate(" + e + "deg)";
                        a.style[j + "Origin"] = f + "% 100%" } } else if (Ra) { i = true;
                    d = (e || 0) * ta.PI * 2 / 360;
                    e = gc(d);
                    d = hc(d);
                    R = g.width;
                    y = y / 3 || 3;
                    var E = f == "left",
                        K = f == "right",
                        C = E ? b : b - R * e;
                    b = K ? b : b + R * e;
                    E = E ? c : c - R * d;
                    c = K ? c : c + R * d;
                    C += y * d;
                    b += y * d;
                    E -= y * e;
                    c -= y * e;
                    if (Da(C - b) < 0.1) C += 0.1;
                    if (Da(E - c) < 0.1) E += 0.1;
                    g.svg += '<g_vml_:line from="' + C + ", " + E + '" to="' + b + ", " + c + '" stroked="false"><g_vml_:fill on="true" color="' + v + '"/><g_vml_:path textpathok="true"/><g_vml_:textpath on="true" string="' + a + '" style="v-text-align:' + f + ";" + r + '"/></g_vml_:line>' } else { i = true;
                    g.svg += '<g><text transform="translate(' + b + "," + c + ") rotate(" + (e || 0) + ')" style="fill:' + v + ";text-anchor:" + { left: "start", center: "middle", right: "end" }[f] + ";" + r.replace(/"/g, "'") + '">' + a + "</text></g>" }
                g.hasObject = i } }, strokeText: function() {
            if (this.hasObject) {
                var a = this.getSvg(),
                    b = this.svg;
                if (Ra) a.innerHTML = b;
                else { a.data = "data:image/svg+xml," + b + "</svg>";
                    cd && this.div.appendChild(a) } } }, clear: function() {
            var a = this,
                b = this.div;
            b = b.childNodes;
            a.ctx && a.ctx.clearRect(0, 0, a.width, a.height);
            if (a.svgObject) { Ca(a.svgObject);
                a.svgObject = null;
                a.svg = a.basicSvg }
            for (var c = b.length - 1; c >= 0; c--) { a = b[c]; /(SPAN|IMG)/.test(a.tagName) && Ca(a) } }, hide: function() { ra(this.div, { display: "none" }) }, show: function() { ra(this.div, { display: "" }) }, destroy: function() { Ca(this.div);
            return null } };
    var ic = function() {};
    ic.prototype = { init: function(a, b) {
            var c = this;
            c.series = a;
            c.applyOptions(b);
            return c }, applyOptions: function(a) {
            var b = this,
                c = b.series;
            if (typeof a == "number" || a === null) b.y = a;
            else if (typeof a == "object" && typeof a.length != "number") { H(b, a);
                b.options = a } else if (typeof a[0] == "string") { b.name = a[0];
                b.y = a[1] } else if (typeof a[0] == "number") { b.x = a[0];
                b.y = a[1] }
            if (b.x === ma) b.x = c.autoIncrement() }, destroy: function() {
            var a = this;
            a.stateLayer && a.stateLayer.destroy();
            for (prop in a) a[prop] = null }, select: function(a, b) {
            var c = this,
                d = c.series,
                e = d.chart,
                f, g, i = da(c.stateLayer, d.singlePointLayer, e.singlePointLayer);
            c.selected = a = da(a, !c.selected);
            d.isDirty = true;
            c.firePointEvent(a ? "select" : "unselect");
            i && i.clear();
            p(e.series, function(k) { f = k.stateLayers;
                b || p(k.data, function(j) {
                    if (j.selected && j != c) { j.selected = false;
                        na(j, "unselect");
                        k.isDirty = true } });
                if (k.isDirty) {
                    for (g in f) f[g].clear();
                    k.render() } }) }, update: function(a, b) {
            var c = this,
                d = c.series;
            b = da(b, true);
            c.firePointEvent("update", { options: a }, function() { c.applyOptions(a);
                d.isDirty = true;
                b && d.chart.redraw() }) }, remove: function(a) {
            var b = this,
                c = b.series,
                d = c.chart,
                e = c.data;
            a = da(a, true);
            b.firePointEvent("remove", null, function() { p(e, function(f, g) { f == b && e.splice(g, 1) });
                if (b.layer) b.layer = b.layer.destroy();
                if (b.legendItem) { Ca(b.legendItem);
                    b.legendItem = null;
                    d.isDirty = true }
                c.isDirty = true;
                a && d.redraw() }) }, firePointEvent: function(a, b, c) {
            var d = this,
                e = this.series;
            e = e.options;
            if (e.point.events[a] || d.options && d.options.events && d.options.events[a]) this.importEvents();
            if (a == "click" && e.allowPointSelect) c = function(f) { d.select(null, f.ctrlKey || f.metaKey || f.shiftKey) };
            na(this, a, b, c) }, importEvents: function() {
            if (!this.hasImportedEvents) {
                var a = this,
                    b = aa(a.series.options.point, a.options);
                b = b.events;
                var c;
                a.events = b;
                for (c in b) Oa(a, c, b[c]);
                this.hasImportedEvents = true } }, setTooltipText: function() {
            var a = this;
            a.tooltipText = a.series.chart.options.tooltip.formatter.call({ series: a.series, point: a, x: a.category, y: a.y, percentage: a.percentage, total: a.stackTotal }) } };
    var Ja = function() { this.isCartesian = true;
        this.type = "line";
        this.pointClass = ic };
    Ja.prototype = { init: function(a, b) {
            var c = this,
                d, e = a.series.length;
            c.chart = a;
            b = c.setOptions(b);
            H(c, { index: e, options: b, name: b.name || "Series " + (e + 1), state: "", visible: b.visible !== false, selected: b.selected == true });
            a = b.events;
            for (d in a) Oa(c, d, a[d]);
            c.getColor();
            c.getSymbol();
            c.getData(b) }, getData: function(a) {
            var b = this,
                c = b.chart,
                d = "series" + rc++;
            if (!a.data && a.dataURL) { c.addLoading(d);
                Ac(a.dataURL, function(e) { b.dataLoaded(e);
                    c.clearLoading(d) }) } else b.dataLoaded(a.data) }, dataLoaded: function(a) {
            var b = this,
                c = b.chart,
                d = b.options,
                e = [""],
                f = d.dataParser,
                g = {},
                i;
            if (d.dataURL && !f) f = function(k) {
                return eval(k) };
            if (f) a = f.call(b, a);
            b.layerGroup = i = new pa("series-group", c.plotLayer.div, null, { zIndex: 2 });
            d.states.hover.enabled && e.push("hover");
            p(e, function(k) { g[k] = new pa("state-" + k, i.div) });
            b.stateLayers = g;
            b.setData(a, false) }, autoIncrement: function() {
            var a = this,
                b = a.options,
                c = a.xIncrement;
            c = da(c, b.pointStart, 0);
            a.pointInterval = da(a.pointInterval, b.pointInterval, 1);
            a.xIncrement = c + a.pointInterval;
            return c }, cleanData: function() {
            var a = this;
            a = a.data;
            var b;
            a.sort(function(c, d) {
                return c.x - d.x });
            for (b = a.length - 1; b >= 0; b--) a[b - 1] && a[b - 1].x == a[b].x && a.splice(b - 1, 1) }, getSegments: function() {
            var a = -1,
                b = [],
                c = this.data;
            p(c, function(d, e) {
                if (d.y === null) { e > a + 1 && b.push(c.slice(a + 1, e));
                    a = e } else e == c.length - 1 && b.push(c.slice(a + 1, e + 1)) });
            this.segments = b }, setOptions: function(a) {
            var b = this.chart.options.plotOptions;
            a = aa(b[this.type], b.series, a);
            b = a.marker;
            var c = a.states.hover.marker;
            if (c.lineWidth === ma) c.lineWidth = b.lineWidth + 1;
            if (c.radius === ma) c.radius = b.radius + 1;
            return a }, getColor: function() {
            var a = this.chart.options.colors;
            this.color = this.options.color || a[Bb++] || "#0000ff";
            if (Bb >= a.length) Bb = 0 }, getSymbol: function() {
            var a = this.chart.options.symbols,
                b = this.options.marker.symbol || "auto";
            if (b == "auto") b = a[fc++];
            this.symbol = b;
            if (fc >= a.length) fc = 0 }, addPoint: function(a, b, c) {
            var d = this,
                e = d.data;
            a = (new d.pointClass).init(d, a);
            b = da(b, true);
            e.push(a);
            c && e.shift();
            d.isDirty = true;
            b && d.chart.redraw() }, setData: function(a, b) {
            var c = this;
            c.xIncrement = null;
            a = qb(jc(a), function(d) {
                return (new c.pointClass).init(c, d) });
            c.data = a;
            c.cleanData();
            c.getSegments();
            c.isDirty = true;
            da(b, true) && c.chart.redraw() }, remove: function(a) {
            var b = this,
                c = b.chart;
            a = da(a, true);
            if (!b.isRemoving) { b.isRemoving = true;
                na(b, "remove", null, function() { Ca(b.layerGroup.div);
                    p(b.areas, function(d) { Ca(d) });
                    Ca(b.legendItem);
                    b.legendItem = null;
                    p(c.series, function(d, e) { d == b && c.series.splice(e, 1) });
                    c.isDirty = true;
                    a && c.redraw() }) }
            b.isRemoving = false }, translate: function() {
            var a = this.chart,
                b = this,
                c = b.options.stacking,
                d = b.xAxis.categories,
                e = b.yAxis,
                f = e.stacks[b.type];
            p(this.data, function(g) {
                var i = g.x,
                    k = g.y,
                    j;
                g.plotX = b.xAxis.translate(g.x);
                if (c && b.visible && f[i]) { j = f[i];
                    i = j.total;
                    j.cum = j = j.cum - k;
                    k = j + k;
                    if (c == "percent") { j = i ? j * 100 / i : 0;
                        k = i ? k * 100 / i : 0 }
                    g.percentage = i ? g.y * 100 / i : 0;
                    g.stackTotal = i;
                    g.yBottom = e.translate(j, 0, 1) }
                if (k !== null) g.plotY = e.translate(k, 0, 1);
                g.clientX = a.inverted ? a.plotHeight - g.plotX + a.plotTop : g.plotX + a.plotLeft;
                g.category = d && d[g.x] !== ma ? d[g.x] : g.x }) }, setTooltipPoints: function(a) {
            var b = this,
                c = b.chart,
                d = c.inverted,
                e = [],
                f = d ? c.plotHeight : c.plotWidth,
                g, i, k = [];
            if (a) b.tooltipPoints = null;
            p(b.segments, function(j) { e = e.concat(j) });
            if (b.xAxis.reversed) e = e.reverse();
            p(e, function(j, r) { b.tooltipPoints || j.setTooltipText();
                g = e[r - 1] ? e[r - 1].high + 1 : 0;
                for (i = j.high = e[r + 1] ? Za((j.plotX + (e[r + 1] ? e[r + 1].plotX : f)) / 2) : f; g <= i;) k[d ? f - g++ : g++] = j });
            b.tooltipPoints = k }, drawLine: function(a) {
            var b, c = this,
                d = c.options,
                e = c.chart,
                f = d.animation && c.animate,
                g = c.stateLayers[a],
                i = d.lineColor || c.color,
                k = d.fillColor == "auto" ? Bc(c.color).setOpacity(d.fillOpacity || 0.75).get() : d.fillColor,
                j = e.inverted,
                r = (j ? 0 : e.plotHeight) - c.yAxis.translate(0);
            if (a) d = aa(d, d.states[a]);
            f && c.animate(true);
            p(c.segments, function(v) {
                var y = [],
                    R = [];
                p(v, function(E, K) {
                    if (K && d.step) { K = v[K - 1];
                        y.push(j ? e.plotWidth - K.plotY : E.plotX, j ? e.plotHeight - E.plotX : K.plotY) }
                    y.push(j ? e.plotWidth - E.plotY : E.plotX, j ? e.plotHeight - E.plotX : E.plotY) });
                if (/area/.test(c.type)) {
                    for (b = 0; b < y.length; b++) R.push(y[b]);
                    if (d.stacking && c.type != "areaspline")
                        for (b = v.length - 1; b >= 0; b--) R.push(v[b].plotX, v[b].yBottom);
                    else R.push(j ? r : v[v.length - 1].plotX, j ? e.plotHeight - v[v.length - 1].plotX : r, j ? r : v[0].plotX, j ? e.plotHeight - v[0].plotX : r);
                    g.drawPolyLine(R, null, null, d.shadow, k) }
                d.lineWidth && g.drawPolyLine(y, i, d.lineWidth, d.shadow) });
            f && c.animate() }, animate: function(a) {
            var b = this,
                c = b.chart,
                d = c.inverted,
                e = b.layerGroup.div;
            if (b.visible)
                if (a) ra(e, H({ overflow: db }, d ? { height: 0 } : { width: 0 }));
                else { Db(e, d ? { height: c.plotHeight + F } : { width: c.plotWidth + F }, { duration: 1E3 });
                    this.animate = null } }, drawPoints: function(a) {
            var b = this,
                c = b.stateLayers[a];
            a = b.options;
            var d = a.marker;
            a = b.data;
            var e = b.chart,
                f = e.inverted;
            d.enabled && p(a, function(g) {
                if (g.plotY !== ma) b.drawMarker(c, f ? e.plotWidth - g.plotY : g.plotX, f ? e.plotHeight - g.plotX : g.plotY, aa(d, g.marker));
                g.selected && b.drawPointState(g, "select", c) }) }, drawMarker: function(a, b, c, d) {
            if (d.lineColor == "auto") d.lineColor = this.color;
            if (d.fillColor == "auto") d.fillColor = this.color;
            if (d.symbol == "auto") d.symbol = this.symbol;
            a.drawSymbol(d.symbol, b, c, d.radius, d.lineWidth, d.lineColor, d.fillColor) }, drawDataLabels: function() {
            if (this.options.dataLabels.enabled) {
                var a = this,
                    b, c, d = a.data,
                    e = a.options.dataLabels,
                    f, g = a.dataLabelsLayer,
                    i = a.chart,
                    k = i.inverted,
                    j = a.type,
                    r = j == "pie",
                    v;
                if (g) g.clear();
                else a.dataLabelsLayer = g = new pa("data-labels", a.layerGroup.div, null, { zIndex: 1 });
                e.style.color = e.color == "auto" ? a.color : e.color;
                p(d, function(y) {
                    var R = y.plotX,
                        E = y.plotY,
                        K = y.tooltipPos;
                    f = e.formatter.call({ x: y.x, y: y.y, series: a, point: y });
                    b = (k ? i.plotWidth - E : R) + e.x;
                    c = (k ? i.plotHeight - R : E) + e.y;
                    if (K) { b = K[0] + e.x;
                        c = K[1] + e.y }
                    if (r) {
                        if (!y.dataLabelsLayer) y.dataLabelsLayer = new pa("data-labels", y.layer.div, null, { zIndex: 3 });
                        g = y.dataLabelsLayer }
                    v = e.align;
                    if (j == "column") b += { center: y.w / 2, right: y.w }[v] || 0;
                    if (f) g[r ? "drawText" : "addText"](f, b, c, e.style, e.rotation, v) });
                r || g.strokeText() } }, drawPointState: function(a, b, c) {
            var d = this.chart,
                e = d.inverted,
                f = b == "hover";
            c = c || d.singlePointLayer;
            var g = this.options;
            if (f) {
                if (!c) c = d.singlePointLayer = new pa("single-point", d.plotLayer.div, null, { zIndex: 3 });
                c.clear() }
            if (b) {
                var i = g.states[b].marker;
                b = g.marker.states[b];
                if (f && b.radius === ma) b.radius = i.radius + 2;
                if ((f = aa(g.marker, a.marker, i, b)) && f.enabled) this.drawMarker(c, e ? d.plotWidth - a.plotY : a.plotX, e ? d.plotHeight - a.plotX : a.plotY, f) } }, destroy: function() {
            var a = this,
                b;
            p(a.data, function(c) { c.destroy() });
            for (b in a) a[b] = null }, render: function() {
            var a = this,
                b, c = a.stateLayers;
            a.drawDataLabels();
            if (a.visible)
                for (b in c) { a.drawLine(b);
                    a.drawPoints(b) } else a.setVisible(false, false);
            if (!a.hasRendered && c.hover) { c.hover.hide();
                hasRendered = true }
            a.isDirty = false }, redraw: function() {
            var a = this;
            a.translate();
            a.setTooltipPoints(true);
            a.createArea();
            a.clear();
            a.render() }, clear: function() {
            var a = this.stateLayers;
            for (var b in a) { a[b].clear();
                a[b].cleared = true }
            if (this.dataLabelsLayer) { this.dataLabelsLayer.clear();
                this.hasDrawnDataLabels = false } }, setState: function(a) { a = a || "";
            if (this.state != a) {
                var b = this,
                    c = b.stateLayers,
                    d = c[a];
                c = c[b.state];
                var e = b.singlePointLayer || b.chart.singlePointLayer;
                b.state = a;
                if (d)
                    if (a) d.show();
                    else { c && c.hide();
                        e && e.clear() } } }, setVisible: function(a, b) {
            var c = this,
                d = c.chart,
                e = c.layerGroup,
                f = c.legendItem,
                g = c.areas,
                i = c.visible;
            if (c.visible = a = a === ma ? !i : a) { c.isDirty = true;
                e.show() } else e.hide();
            if (f) { f.className = a ? "" : Ob;
                d.legend.drawGraphics(true) }
            g && p(g, function(k) { a ? d.tracker.insertAtFront(k) : Ca(k) });
            d.options.chart.ignoreHiddenSeries && c.options.stacking && p(d.series, function(k) {
                if (k.options.stacking && k.visible) k.isDirty = true });
            b !== false && d.redraw();
            na(c, a ? "show" : "hide") }, show: function() { this.setVisible(true) }, hide: function() { this.setVisible(false) }, select: function(a) {
            var b = this;
            b.selected = a = a === ma ? !b.selected : a;
            if (b.checkbox) b.checkbox.checked = a;
            na(b, a ? "select" : "unselect") }, getAreaCoords: function() {
            var a = this,
                b = this.chart,
                c = b.inverted,
                d = b.plotWidth,
                e = b.plotHeight,
                f = a.xAxis.reversed,
                g, i = b.options.tooltip.snap,
                k = [];
            p(a.splinedata || a.segments, function(j, r) {
                if ((g = j.length > 1 && j[0].x > j[1].x) && !f || f && !g) j = j.reverse();
                var v = [],
                    y = [],
                    R = [];
                p([y, R], function(E) {
                    for (var K = 0, C = 0, Wa, La, Fa = [j[0]], Kb = E == y ? 1 : -1, ob, jb, nb, A, T, I, fb; j[C];) {
                        if (j[C].plotX > j[K].plotX + i || C == j.length - 1) { Wa = j[C];
                            La = j.slice(K, C - 1);
                            p(La, function(cb) {
                                if (Kb * cb.plotY < Kb * Wa.plotY) Wa = cb });
                            if (O(j[K].plotX) < O(Wa.plotX) || j[C].plotX > j[K].plotX + i) Fa.push(Wa);
                            K = C }
                        C++ }
                    Fa[Fa.length - 1] != j[j.length - 1] && Fa.push(j[j.length - 1]);
                    for (C = 0; C < Fa.length; C++)
                        if (C > 0) { jb = Fa[C].plotX;
                            ob = Fa[C].plotY;
                            K = Fa[C - 1].plotX;
                            La = Fa[C - 1].plotY;
                            A = jb - Fa[C - 1].plotX;
                            I = T = ob - Fa[C - 1].plotY;
                            nb = -A;
                            fb = ta.sqrt(ta.pow(I, 2) + ta.pow(nb, 2));
                            if (C == 1) { K -= i / fb * A;
                                La -= i / fb * T } else if (C == Fa.length - 1) { jb += i / fb * A;
                                ob += i / fb * T }
                            A = Kb * i / fb;
                            K = O(K + A * I);
                            La = O(La + A * nb);
                            jb = O(jb + A * I);
                            nb = O(ob + A * nb);
                            if (E[E.length - 1] && E[E.length - 1][0] > K)
                                for (ob = false; !ob;) { T = E.pop();
                                    I = E[E.length - 1];
                                    if (!I) break;
                                    A = (La - nb) / (K - jb);
                                    T = (I[1] - T[1]) / (I[0] - T[0]);
                                    T = (-T * I[0] + I[1] + A * K - La) / (A - T);
                                    A = A * (T - K) + La;
                                    if (T > I[0]) { E.push([O(T), O(A), 1]);
                                        ob = true } } else isNaN(K) || E.push([K, La]);
                            E[E.length - 1] && E[E.length - 1][0] < jb && E.push([jb, nb]) } });
                for (r = 0; r < y.length; r++) v.push(c ? d - y[r][1] : y[r][0], c ? e - y[r][0] : y[r][1]);
                for (r = R.length - 1; r >= 0; r--) v.push(c ? d - R[r][1] : R[r][0], c ? e - R[r][0] : R[r][1]);
                v.length || v.push(O(j[0].plotX), O(j[0].plotY));
                v.length && k.push([v.join(",")]) });
            return k }, createArea: function() {
            if (this.options.enableMouseTracking !== false) {
                var a, b = this,
                    c = b.options,
                    d = b.chart,
                    e = d.tracker,
                    f = b.getAreaCoords(),
                    g = [],
                    i = b.areas,
                    k;
                i && p(i, function(j) { Ca(j) });
                p(f, function(j) { k = /^[0-9]+,[0-9]+$/.test(j[0]);
                    a = V("area", { shape: k ? "circle" : "poly", chart: d, coords: j[0] + (k ? "," + d.options.tooltip.snap : ""), onmouseover: function() {
                            if (!(!b.visible || d.mouseIsDown)) {
                                var r = d.hoverSeries;
                                d.hoverPoint = j[1];
                                c.events.mouseOver && na(b, "mouseOver", { point: d.hoverPoint });
                                r && r != b && r.setState(); /(column|bar|pie)/.test(b.type) || e.insertAtFront(a);
                                b.setState("hover");
                                d.hoverSeries = b } }, onmouseout: function() {
                            var r = d.hoverSeries;
                            r && c.events.mouseOut && na(r, "mouseOut") } });
                    if (c.cursor == "pointer") a.href = "javascript:;";
                    e.insertAtFront(a);
                    g.push(a) });
                b.areas = g } } };
    B = ab(Ja);
    bb.line = B;
    B = ab(Ja, { type: "area" });
    bb.area = B;
    B = ab(Ja, { type: "spline", translate: function() {
            var a = this;
            Ja.prototype.translate.apply(a, arguments);
            a.splinedata = a.getSplineData() }, drawLine: function() {
            var a = this,
                b = a.segments;
            a.segments = a.splinedata;
            Ja.prototype.drawLine.apply(a, arguments);
            a.segments = b }, getSplineData: function() {
            var a = this,
                b = a.chart,
                c = [],
                d;
            p(a.segments, function(e) {
                if (a.xAxis.reversed) e = e.reverse();
                var f = [],
                    g, i;
                p(e, function(k, j) { g = e[j + 2] || e[j + 1] || k;
                    i = e[j - 2] || e[j - 1] || k;
                    g.plotX > 0 && i.plotY < b.plotWidth && f.push(k) });
                if (f.length > 1) d = O(Lb(b.plotWidth, f[f.length - 1].clientX - f[0].clientX) / 3);
                c.push(e.length > 1 ? d ? (new Tc(f)).get(d) : [] : e) });
            return a.splinedata = c } });
    bb.spline = B;
    Tc.prototype = { get: function(a) { a || (a = 50);
            var b = this.n;
            b = (this.xdata[b - 1] - this.xdata[0]) / (a - 1);
            var c = [],
                d = [];
            c[0] = this.xdata[0];
            d[0] = this.ydata[0];
            for (var e = [{ plotX: c[0], plotY: d[0] }], f = 1; f < a; f++) { c[f] = c[0] + f * b;
                d[f] = this.interpolate(c[f]);
                e[f] = { plotX: c[f], plotY: d[f] } }
            return e }, interpolate: function(a) {
            for (var b = this.n - 1, c = 0; b - c > 1;) {
                var d = (b + c) / 2;
                if (this.xdata[Za(d)] > a) b = d;
                else c = d }
            b = Za(b);
            c = Za(c);
            d = this.xdata[b] - this.xdata[c];
            var e = (this.xdata[b] - a) / d;
            a = (a - this.xdata[c]) / d;
            return e * this.ydata[c] + a * this.ydata[b] + ((e * e * e - e) * this.y2[c] + (a * a * a - a) * this.y2[b]) * d * d / 6 } };
    B = ab(B, { type: "areaspline" });
    bb.areaspline = B;
    var Vb = ab(Ja, { type: "column", init: function() { Ja.prototype.init.apply(this, arguments);
            var a = this,
                b = a.chart;
            b.hasRendered && p(b.series, function(c) {
                if (c.type == a.type) c.isDirty = true }) }, translate: function() {
            var a = this,
                b = a.chart,
                c = 0,
                d;
            Ja.prototype.translate.apply(a);
            p(b.series, function(C) {
                if (C.type == a.type)
                    if (C.options.stacking) { Qa(d) || (d = c++);
                        C.columnIndex = d } else C.columnIndex = c++ });
            var e = a.options,
                f = a.data,
                g = b.inverted,
                i = b.plotWidth,
                k = b.plotHeight,
                j = a.closestPoints;
            j = Da(f[1] ? f[j].plotX - f[j - 1].plotX : g ? k : i);
            var r = j * e.groupPadding,
                v = j - 2 * r;
            v = v / c;
            var y = e.pointWidth;
            e = Qa(y) ? (v - y) / 2 : v * e.pointPadding;
            var R = da(y, v - 2 * e);
            b = (b.options.xAxis.reversed ? c - a.columnIndex : a.columnIndex) || 0;
            var E = -(j / 2) + r + b * v + e,
                K = a.yAxis.translate(0);
            p(f, function(C) { C.plotX += E;
                C.w = R;
                C.y0 = (g ? i : k) - K;
                C.h = (C.yBottom || C.y0) - C.plotY }) }, drawLine: function() {}, getSymbol: function() {}, drawPoints: function(a) {
            var b = this,
                c = b.options,
                d = b.chart,
                e = c.animation && b.animate,
                f = d.inverted,
                g = b.data,
                i = b.stateLayers[a];
            e && this.animate(true);
            p(g, function(k) {
                if (k.plotY !== ma) i.drawRect(f ? k.h >= 0 ? d.plotWidth - k.plotY - k.h : d.plotWidth - k.plotY : k.plotX, f ? d.plotHeight - k.plotX - k.w : k.h >= 0 ? k.plotY : k.plotY + k.h, f ? Da(k.h) : k.w, f ? k.w : Da(k.h), c.borderColor, c.borderWidth, c.borderRadius, k.color || b.color, c.shadow);
                k.selected && b.drawPointState(k, "select", i) });
            e && b.animate() }, drawPointState: function(a, b, c) {
            var d = this,
                e = d.chart,
                f = d.options,
                g = a ? a.options : null,
                i = e.inverted;
            c = c || d.singlePointLayer;
            if (b == "hover") {
                if (!c) c = d.singlePointLayer = new pa("single-point", d.layerGroup.div);
                c.clear() }
            if (b && this.options.states[b]) { b = aa(f, f.states[b], g);
                c.drawRect(i ? e.plotWidth - a.plotY - a.h : a.plotX, i ? e.plotHeight - a.plotX - a.w : a.plotY, i ? a.h : a.w, i ? a.w : a.h, b.borderColor, b.borderWidth, b.borderRadius, Bc(b.color || this.color).brighten(b.brightness).get(), b.shadow) } }, getAreaCoords: function() {
            var a = [],
                b = this.chart,
                c = b.inverted;
            p(this.data, function(d) {
                var e = Lb(Da(d.h), 3) * (d.h < 0 ? -1 : 1),
                    f = c ? b.plotWidth - d.plotY - e : d.plotX,
                    g = c ? b.plotHeight - d.plotX - d.w : d.plotY,
                    i = g + (c ? d.w : e);
                e = f + (c ? e : d.w);
                if (!c && Da(e - f) < 1) e = f + 1;
                else if (c && Da(g - i) < 1) g = i + 1;
                a.push([qb([f, i, f, g, e, g, e, i], O).join(","), d]) });
            return a }, cleanData: function() {
            var a = this,
                b = a.data,
                c, d, e, f;
            Ja.prototype.cleanData.apply(a);
            for (f = b.length - 1; f >= 0; f--)
                if (b[f - 1]) { c = b[f].x - b[f - 1].x;
                    if (d === ma || c < d) { d = c;
                        e = f } }
            a.closestPoints = e }, animate: function(a) {
            var b = this,
                c = b.chart,
                d = c.inverted,
                e = b.layerGroup.div;
            if (a) e.style[d ? "left" : "top"] = (d ? -c.plotWidth : c.plotHeight) + F;
            else { Db(e, c.inverted ? { left: 0 } : { top: 0 });
                b.animate = null } }, remove: function() {
            var a = this,
                b = a.chart;
            b.hasRendered && p(b.series, function(c) {
                if (c.type == a.type) c.isDirty = true });
            Ja.prototype.remove.apply(a, arguments) } });
    bb.column = Vb;
    var Ic = ab(Vb, { type: "bar", init: function(a) { a.inverted = this.inverted = true;
            Vb.prototype.init.apply(this, arguments) } });
    bb.bar = Ic;
    B = ab(Ja, { type: "scatter", getAreaCoords: function() {
            var a = this.data,
                b = [];
            p(a, function(c) { b.push([
                    [O(c.plotX), O(c.plotY)].join(","), c
                ]) });
            return b }, cleanData: function() {} });
    bb.scatter = B;
    B = ab(ic, { setState: function(a) { this.series.drawPointState(this, a) }, init: function() { ic.prototype.init.apply(this, arguments);
            var a = this,
                b = a.series,
                c = b.chart.options.colors;
            H(a, { visible: a.visible !== false, name: da(a.name, "Slice"), color: a.color || c[Bb++] });
            if (Bb >= c.length) Bb = 0;
            if (!a.layer) a.layer = new pa("pie", b.layerGroup.div);
            b = function() { a.slice() };
            Oa(a, "select", b);
            Oa(a, "unselect", b);
            return a }, setVisible: function(a) {
            var b = this,
                c = b.layer,
                d = b.legendItem;
            (b.visible = a = a === ma ? !b.visible : a) ? c.show(): c.hide();
            if (d) { d.className = a ? "" : Ob;
                b.series.chart.legend.drawGraphics(true) } }, slice: function(a, b) {
            var c = this,
                d = c.series;
            b = da(b, true);
            c.sliced = Qa(a) ? a : !c.sliced;
            d.isDirty = true;
            b && d.chart.redraw() } });
    B = ab(Ja, { type: "pie", isCartesian: false, pointClass: B, getColor: function() {}, translate: function() {
            var a = 0,
                b = this,
                c = -0.25,
                d = b.options,
                e = d.slicedOffset,
                f = d.center,
                g = b.chart;
            b = b.data;
            var i = 2 * ta.PI,
                k;
            f.push(d.size);
            f = qb(f, function(j, r) {
                return /%$/.test(j) ? g["plot" + (r ? "Height" : "Width")] * parseInt(j) / 100 : j });
            p(b, function(j) { a += j.y });
            p(b, function(j) { k = a ? j.y / a : 0;
                j.start = c * i;
                c += k;
                j.end = c * i;
                j.percentage = k * 100;
                j.center = [f[0], f[1]];
                j.size = f[2];
                var r = (j.end + j.start) / 2;
                j.centerSliced = qb([gc(r) * e + f[0], hc(r) * e + f[1]], O) });
            this.setTooltipPoints() }, render: function() { this.drawPoints();
            this.drawDataLabels() }, drawPoints: function() {
            var a = this;
            p(this.data, function(b) { a.drawPoint(b, b.layer.getCtx(), b.color);
                b.visible === false && b.setVisible(false);
                b.selected && a.drawPointState(b, "select", b.layer) }) }, getSymbol: function() {}, drawPointState: function(a, b, c) {
            var d = this,
                e = d.options;
            if (a) { c = c || a.stateLayer;
                if (b == "hover") {
                    if (!c) c = a.stateLayer = new pa("single-point", a.layer.div);
                    c.clear() }
                if (b && d.options.states[b]) { b = aa(e, e.states[b]);
                    this.drawPoint(a, c.getCtx(), b.color || a.color, b.brightness) } }
            d.hoverPoint && d.hoverPoint.stateLayer && d.hoverPoint.stateLayer.clear();
            d.hoverPoint = a }, drawPoint: function(a, b, c, d) {
            var e = this.options,
                f = a.sliced ? a.centerSliced : a.center,
                g = f[0];
            f = f[1];
            var i = a.size,
                k = e.borderWidth,
                j = Ra && a.percentage == 100 ? a.start : a.end;
            if (a.y > 0) { b.fillStyle = Hb(Bc(c).brighten(d).get(b), b);
                b.strokeStyle = e.borderColor;
                b.lineWidth = k;
                b.beginPath();
                b.moveTo(g, f);
                b.arc(g, f, i / 2, a.start, j, false);
                b.lineTo(g, f);
                b.closePath();
                b.fill();
                k && b.stroke() } }, getAreaCoords: function() {
            var a = [];
            p(this.data, function(b) {
                for (var c = b.center[0], d = b.center[1], e = b.size / 2, f = b.start, g = b.end, i = [], k = f; k; k += 0.25) {
                    if (k >= g) k = g;
                    i = i.concat([c + gc(k) * e, d + hc(k) * e]);
                    if (k >= g) break }
                i = i.concat([c, d]);
                b.tooltipPos = [c + 2 * gc((f + g) / 2) * e / 3, d + 2 * hc((f + g) / 2) * e / 3];
                a.push([qb(i, O).join(","), b]) });
            return a }, setData: function() {
            var a = this,
                b = a.data,
                c;
            if (b)
                for (c = b.length - 1; c >= 0; c--) b[c].remove();
            Ja.prototype.setData.apply(a, arguments) }, clear: function() { p(this.data, function(a) { a.layer.clear();
                a.dataLabelsLayer && a.dataLabelsLayer.clear();
                a.stateLayer && a.stateLayer.clear() }) } });
    bb.pie = B;
    Highcharts = { numberFormat: Wc, dateFormat: lc, defaultOptions: Ba, setOptions: Vc, Chart: Xc, extendClass: ab, seriesTypes: bb, Layer: pa } })();
/*
 * Simple Set Clipboard System Author: Joseph Huckaby Download by
 * http://www.codefans.net
 */
var ZeroClipboard = { version: "1.0.7", clients: {}, moviePath: 'ZeroClipboard.swf', nextId: 1, $: function(thingy) {
        if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
        if (!thingy.addClass) { thingy.hide = function() { this.style.display = 'none' };
            thingy.show = function() { this.style.display = '' };
            thingy.addClass = function(name) { this.removeClass(name);
                this.className += ' ' + name };
            thingy.removeClass = function(name) {
                var classes = this.className.split(/\s+/);
                var idx = -1;
                for (var k = 0; k < classes.length; k++) {
                    if (classes[k] == name) { idx = k;
                        k = classes.length } }
                if (idx > -1) { classes.splice(idx, 1);
                    this.className = classes.join(' ') }
                return this };
            thingy.hasClass = function(name) {
                return !!this.className.match(new RegExp("\\s*" + name + "\\s*")) } }
        return thingy }, setMoviePath: function(path) { this.moviePath = path }, dispatch: function(id, eventName, args) {
        var client = this.clients[id];
        if (client) { client.receiveEvent(eventName, args) } }, register: function(id, client) { this.clients[id] = client }, getDOMObjectPosition: function(obj, stopObj) {
        var info = { left: 0, top: 0, width: obj.width ? obj.width : obj.offsetWidth, height: obj.height ? obj.height : obj.offsetHeight };
        while (obj && (obj != stopObj)) { info.left += obj.offsetLeft;
            info.top += obj.offsetTop;
            obj = obj.offsetParent }
        return info }, Client: function(elem) { this.handlers = {};
        this.id = ZeroClipboard.nextId++;
        this.movieId = 'ZeroClipboardMovie_' + this.id;
        ZeroClipboard.register(this.id, this);
        if (elem) this.glue(elem) } };
ZeroClipboard.Client.prototype = { id: 0, ready: false, movie: null, clipText: '', handCursorEnabled: true, cssEffects: true, handlers: null, glue: function(elem, appendElem, stylesToAdd) { this.domElement = ZeroClipboard.$(elem);
        var zIndex = 99;
        if (this.domElement.style.zIndex) { zIndex = parseInt(this.domElement.style.zIndex, 10) + 1 }
        if (typeof(appendElem) == 'string') { appendElem = ZeroClipboard.$(appendElem) } else if (typeof(appendElem) == 'undefined') { appendElem = document.getElementsByTagName('body')[0] }
        var box = ZeroClipboard.getDOMObjectPosition(this.domElement, appendElem);
        this.div = document.createElement('div');
        var style = this.div.style;
        style.position = 'absolute';
        style.left = '' + box.left + 'px';
        style.top = '' + box.top + 'px';
        style.width = '' + box.width + 'px';
        style.height = '' + box.height + 'px';
        style.zIndex = zIndex;
        if (typeof(stylesToAdd) == 'object') {
            for (addedStyle in stylesToAdd) { style[addedStyle] = stylesToAdd[addedStyle] } }
        appendElem.appendChild(this.div);
        this.div.innerHTML = this.getHTML(box.width, box.height) }, getHTML: function(width, height) {
        var html = '';
        var flashvars = 'id=' + this.id + '&width=' + width + '&height=' + height;
        if (navigator.userAgent.match(/MSIE/)) {
            var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
            html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + protocol + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + width + '" height="' + height + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + flashvars + '"/><param name="wmode" value="transparent"/></object>' } else { html += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + width + '" height="' + height + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + flashvars + '" wmode="transparent" />' }
        return html }, hide: function() {
        if (this.div) { this.div.style.left = '-2000px' } }, show: function() { this.reposition() }, destroy: function() {
        if (this.domElement && this.div) { this.hide();
            this.div.innerHTML = '';
            var body = document.getElementsByTagName('body')[0];
            try { body.removeChild(this.div) } catch (e) {}
            this.domElement = null;
            this.div = null } }, reposition: function(elem) {
        if (elem) { this.domElement = ZeroClipboard.$(elem);
            if (!this.domElement) this.hide() }
        if (this.domElement && this.div) {
            var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
            var style = this.div.style;
            style.left = '' + box.left + 'px';
            style.top = '' + box.top + 'px' } }, setText: function(newText) { this.clipText = newText;
        if (this.ready) this.movie.setText(newText) }, addEventListener: function(eventName, func) { eventName = eventName.toString().toLowerCase().replace(/^on/, '');
        if (!this.handlers[eventName]) this.handlers[eventName] = [];
        this.handlers[eventName].push(func) }, setHandCursor: function(enabled) { this.handCursorEnabled = enabled;
        if (this.ready) this.movie.setHandCursor(enabled) }, setCSSEffects: function(enabled) { this.cssEffects = !!enabled }, receiveEvent: function(eventName, args) { eventName = eventName.toString().toLowerCase().replace(/^on/, '');
        switch (eventName) {
            case 'load':
                this.movie = document.getElementById(this.movieId);
                if (!this.movie) {
                    var self = this;
                    setTimeout(function() { self.receiveEvent('load', null) }, 1);
                    return }
                if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                    var self = this;
                    setTimeout(function() { self.receiveEvent('load', null) }, 100);
                    this.ready = true;
                    return }
                this.ready = true;
                this.movie.setText(this.clipText);
                this.movie.setHandCursor(this.handCursorEnabled);
                break;
            case 'mouseover':
                if (this.domElement && this.cssEffects) { this.domElement.addClass('hover');
                    if (this.recoverActive) this.domElement.addClass('active') }
                break;
            case 'mouseout':
                if (this.domElement && this.cssEffects) { this.recoverActive = false;
                    if (this.domElement.hasClass('active')) { this.domElement.removeClass('active');
                        this.recoverActive = true }
                    this.domElement.removeClass('hover') }
                break;
            case 'mousedown':
                if (this.domElement && this.cssEffects) { this.domElement.addClass('active') }
                break;
            case 'mouseup':
                if (this.domElement && this.cssEffects) { this.domElement.removeClass('active');
                    this.recoverActive = false }
                break }
        if (this.handlers[eventName]) {
            for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
                var func = this.handlers[eventName][idx];
                if (typeof(func) == 'function') { func(this, args) } else if ((typeof(func) == 'object') && (func.length == 2)) { func[0][func[1]](this, args) } else if (typeof(func) == 'string') { window[func](this, args) } } } } };


/*
 * colorPicker.min.js this one is more freedom than colorpicker.min
 */
(function(g) {
    jQuery.extend({ showcolor: function(r, s, p, n, q, m, o) {

        //mxs 20171227 修改颜色插件
        var m = g("#" + r);
        m.css("background", q)
        m.colorpanel({
            cab:function(rgba,obj){
                var color = 'rgba('+rgba.r+','+rgba.g+','+rgba.b+','+rgba.a+')';
                obj.css("background", color);
                obj.css("border", "1px solid #aab3bb")
                s(color);
            },
            top: m.height()+p,
            left:n-4,
            defColor:q
        });


    } }) })(jQuery);

/*
 *MyInnerHtml.js 
 */
var MyInnerHtml = (function(D) {
    var _loadJs = function(url, callback) { $.ajax({ url: url, dataType: 'script', success: function() { callback.call(callback) } }) };
    var _loadCss = function(url) {
        var o = D.createElement('link');
        o.type = 'text/css';
        o.rel = 'stylesheet';
        o.href = url;
        D.getElementsByTagName('head')[0].appendChild(o) };
    var _createCss = function(css) {
        var o = D.createElement("style");
        o.type = "text/css";
        o.innerHTML = css;
        D.getElementsByTagName("head")[0].appendChild(o) };
    var _loadJsByQueue = function(queue, callback) {
        if (queue.length < 1) { callback.call(callback) } else { _loadJs(queue.shift(), function() { _loadJsByQueue(queue, callback) }) } };
    var _parseStyle = function(o, html) {
        var s = html;
        var r = /<style[^>]*>/ig.exec(s);
        while (null != r) {
            var tag = r[0] + '';
            s = s.substr(r.index + tag.length);
            var endIndex = s.indexOf('</style>');
            o.innerStyle.push(s.substr(0, endIndex));
            s = s.substr(endIndex + 8);
            r = /<style[^>]*>/ig.exec(s) }
        s = html;
        r = /<link[^>]*>/ig.exec(s);
        while (null != r) {
            var tag = r[0] + '';
            if (tag.indexOf('stylesheet') > -1) {
                var src = tag.match(/href=["|'][^"|']*["|']/ig);
                if (null != src) { src = src[0].match(/["|'][^"|']*["|']/ig)[0];
                    src = src.substr(1, src.length - 2);
                    o.outerStyle.push(src) } }
            s = s.substr(r.index + tag.length);
            r = /<link[^>]*>/ig.exec(s) } };
    var _parseScript = function(o, html) {
        var s = html;
        var r = /<script[^>]*>/ig.exec(s);
        while (null != r) {
            var tag = r[0] + '';
            s = s.substr(r.index + tag.length);
            var endIndex = s.indexOf('</script>');
            var src = tag.match(/src=["|'][^"|']*["|']/ig);
            if (null != src) { src = ((src[0] + '').match(/["|'][^"|']*["|']/ig)[0]) + '';
                o.outerScript.push(src.substr(1, src.length - 2)) } else { o.innerScript.push(s.substr(0, endIndex)) }
            s = s.substr(endIndex + 9);
            r = /<script[^>]*>/ig.exec(s) } };
    var _parseHtml = function(o, html) {
        var s = html;
        var r = /<script[^>]*>/ig.exec(s);
        while (null != r) {
            var tag = r[0] + '';
            o.html.push(s.substr(0, r.index));
            s = s.substr(r.index + tag.length);
            var endIndex = s.indexOf('</script>');
            var src = tag.match(/src=["|'][^"|']*["|']/ig);
            if (null != src) { src = ((src[0] + '').match(/["|'][^"|']*["|']/ig)[0]) + '';
                o.outerScript.push(src.substr(1, src.length - 2)) } else { o.innerScript.push(s.substr(0, endIndex)) }
            s = s.substr(endIndex + 9);
            r = /<script[^>]*>/ig.exec(s) }
        o.html.push(s) };
    var _parseTag = function(html, tag) {
        var s = html;
        var index = s.indexOf('<' + tag + '>');
        if (index < 0) {
            return s }
        s = s.substr(index + 2 + tag.length);
        index = s.indexOf('</' + tag + '>');
        if (index < 0) {
            return s }
        return s.substr(0, index) };
    var _parseHead = function(html) {
        return _parseTag(html, 'head') };
    var _parseBody = function(html) {
        return _parseTag(html, 'body') };
    var _parse = function(html) {
        var o = { outerStyle: [], innerStyle: [], outerScript: [], innerScript: [], html: [] };
        var body = _parseBody(html);
        _parseHtml(o, body);
        return o };
    var _html = function(html, dom) {
        var o = _parse(html);
        try { console.log(o) } catch (e) {}
        for (var i = 0; i < o.outerStyle.length; i++) { _loadCss(o.outerStyle[i]) }
        _createCss(o.innerStyle.join(''));
        var target = dom ? dom : D.body;
        target.innerHTML = o.html.join('');
        _loadJsByQueue(o.outerScript, function() {
            var script = D.createElement('script');
            script.text = o.innerScript.join('');
            D.getElementsByTagName('head')[0].appendChild(script);
            script.parentNode.removeChild(script) }) };
    return { parse: function(html) {
            return _parse(html) } } })(document);
