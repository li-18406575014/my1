$.metadata.setType("attr", "vld");

$.validator.AlertError = {
	invalidHandler : function(form, validator) {
		var errors = validator.numberOfInvalids();
		if (errors) {
			for (var name in validator.invalid) {
				$.alert(validator.invalid[name]);
				return;
			}
		}
	},
	showErrors : function(errors) {
	}
};

$.validator.addMethod("user", function(value) {
	if(value.length==0) {return true;}
	var p = /^[a-zA-Z]\w{5,31}$/;
	return p.exec(value) ? true : false;
}, "Please enter only letters and digits");

$.validator.addMethod("username", function(value) {
	if(value.length==0) {return true;}
	var p = /^[0-9a-zA-Z\u4e00-\u9fa5\.\-@_]+$/;
	return p.exec(value) ? true : false;
}, "Please enter only letters,digits,chinese and '_','-','@'");

$.validator.addMethod("path", function(value) {
	if(value.length==0) {return true;}
	var p = /^[0-9a-zA-Z]+$/;
	return p.exec(value) ? true : false;
}, "Please enter only letters and digits");

$.validator.addMethod("password", function(value) {
	if(value!=''&&$.trim(value).length>0){
		var p = /^[A-Za-z0-9_-]+$/;
		return p.exec(value) ? true : false;
	}else{
		return true;
	}
}, "Please enter a valid password.");

// 判断整数value是否等于0
jQuery.validator.addMethod("isIntEqZero", function (value, element) {
    value = parseInt(value);
    return this.optional(element) || value == 0;
}, "整数必须为0");


// 判断整数value是否大于0
jQuery.validator.addMethod("isIntGtZero", function (value, element) {
    value = parseInt(value);
    return this.optional(element) || value > 0;
}, "整数必须大于0");


// 判断整数value是否大于或等于0
jQuery.validator.addMethod("isIntGteZero", function (value, element) {
    value = parseInt(value);
    return this.optional(element) || value >= 0;
}, "整数必须大于或等于0");


// 判断整数value是否不等于0
jQuery.validator.addMethod("isIntNEqZero", function (value, element) {
    value = parseInt(value);
    return this.optional(element) || value != 0;
}, "整数必须不等于0");


// 判断整数value是否小于0
jQuery.validator.addMethod("isIntLtZero", function (value, element) {
    value = parseInt(value);
    return this.optional(element) || value < 0;
}, "整数必须小于0");


// 判断整数value是否小于或等于0
jQuery.validator.addMethod("isIntLteZero", function (value, element) {
    value = parseInt(value);
    return this.optional(element) || value <= 0;
}, "整数必须小于或等于0");


// 判断浮点数value是否等于0
jQuery.validator.addMethod("isFloatEqZero", function (value, element) {
    value = parseFloat(value);
    return this.optional(element) || value == 0;
}, "浮点数必须为0");


// 判断浮点数value是否大于0
jQuery.validator.addMethod("isFloatGtZero", function (value, element) {
    value = parseFloat(value);
    return this.optional(element) || value > 0;
}, "浮点数必须大于0");


// 判断浮点数value是否大于或等于0
jQuery.validator.addMethod("isFloatGteZero", function (value, element) {
    value = parseFloat(value);
    return this.optional(element) || value >= 0;
}, "浮点数必须大于或等于0");


// 判断浮点数value是否不等于0
jQuery.validator.addMethod("isFloatNEqZero", function (value, element) {
    value = parseFloat(value);
    return this.optional(element) || value != 0;
}, "浮点数必须不等于0");


// 判断浮点数value是否小于0
jQuery.validator.addMethod("isFloatLtZero", function (value, element) {
    value = parseFloat(value);
    return this.optional(element) || value < 0;
}, "浮点数必须小于0");


// 判断浮点数value是否小于或等于0
jQuery.validator.addMethod("isFloatLteZero", function (value, element) {
    value = parseFloat(value);
    return this.optional(element) || value <= 0;
}, "浮点数必须小于或等于0");


// 判断浮点型
jQuery.validator.addMethod("isFloat", function (value, element) {
    return this.optional(element) || /^[-\+]?\d+(\.\d+)?$/.test(value);
}, "只能包含数字、小数点等字符");


// 匹配integer
jQuery.validator.addMethod("isInteger", function (value, element) {
    return this.optional(element) || (/^[-\+]?\d+$/.test(value) && parseInt(value) >= 0);
}, "匹配integer");


// 判断数值类型，包括整数和浮点数
jQuery.validator.addMethod("isNumber", function (value, element) {
    return this.optional(element) || /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);
}, "匹配数值类型，包括整数和浮点数");


// 只能输入[0-9]数字
jQuery.validator.addMethod("isDigits", function (value, element) {
    return this.optional(element) || /^\d+$/.test(value);
}, "只能输入0-9数字");


// 判断中文字符
jQuery.validator.addMethod("isChinese", function (value, element) {
    return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);
}, "只能包含中文字符。");


// 判断英文字符
jQuery.validator.addMethod("isEnglish", function (value, element) {
    return this.optional(element) || /^[A-Za-z]+$/.test(value);
}, "只能包含英文字符。");


// 手机号码验证
jQuery.validator.addMethod("isMobile", function (value, element) {
    var length = value.length;
    return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));
}, "请正确填写您的手机号码。");


// 电话号码验证
jQuery.validator.addMethod("isPhone", function (value, element) {
    var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
    return this.optional(element) || (tel.test(value));
}, "请正确填写您的电话号码。");


// 联系电话(手机/电话皆可)验证
jQuery.validator.addMethod("isTel", function (value, element) {
    var length = value.length;
    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
    return this.optional(element) || tel.test(value) || (length == 11 && mobile.test(value));
}, "请正确填写您的联系方式");


// 匹配qq
jQuery.validator.addMethod("isQq", function (value, element) {
    return this.optional(element) || /^[1-9]\d{4,12}$/;
}, "匹配QQ");


// 邮政编码验证
jQuery.validator.addMethod("isZipCode", function (value, element) {
    var zip = /^[0-9]{6}$/;
    return this.optional(element) || (zip.test(value));
}, "请正确填写您的邮政编码。");


// 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。
jQuery.validator.addMethod("isPwd", function (value, element) {
    return this.optional(element) || /^[a-zA-Z]\\w{6,12}$/.test(value);
}, "以字母开头，长度在6-12之间，只能包含字符、数字和下划线。");


// 身份证号码验证
jQuery.validator.addMethod("isIdCardNo", function (value, element) {
    //var idCard = /^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/;
    return this.optional(element) || isIdCardNo(value);
}, "请输入正确的身份证号码。");


// IP地址验证
jQuery.validator.addMethod("ip", function (value, element) {
    return this.optional(element) || /^(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.)(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.){2}([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))$/.test(value);
}, "请填写正确的IP地址。");


// 字符验证，只能包含中文、英文、数字、下划线等字符。
jQuery.validator.addMethod("stringCheck", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/.test(value);
}, "只能包含中文、英文、数字、下划线等字符");


// 匹配english
jQuery.validator.addMethod("isEnglish", function (value, element) {
    return this.optional(element) || /^[A-Za-z]+$/.test(value);
}, "匹配english");


// 匹配汉字
jQuery.validator.addMethod("isChinese", function (value, element) {
    return this.optional(element) || /^[\u4e00-\u9fa5]+$/.test(value);
}, "匹配汉字");


// 匹配中文(包括汉字和字符)
jQuery.validator.addMethod("isChineseChar", function (value, element) {
    return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);
}, "匹配中文(包括汉字和字符) ");


// 判断是否为合法字符(a-zA-Z0-9-_)
jQuery.validator.addMethod("isRightfulString", function (value, element) {
    return this.optional(element) || /^[A-Za-z0-9_-]+$/.test(value);
}, "判断是否为合法字符(a-zA-Z0-9-_)");


// 判断是否金额 小数点后两位
jQuery.validator.addMethod(
    "isAmount",
    function (value, element) {
        return value && /^\d*\.?\d{0,2}$/.test(value);
    },
    "金额必须大于0且小数位数不超过2位"
);

jQuery.validator.addMethod("tel", function(value) {
    if(value.length==0) {return true;}
    var p = /^[0-9\-]{13}$/;
    return p.exec(value) ? true : false;
}, "请输入正确的电话号码");

//身份证号码的验证规则
function isIdCardNo(num) {
    //if (isNaN(num)) {alert("输入的不是数字！"); return false;}
    var len = num.length, re;
    if (len == 15)
        re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/);
    else if (len == 18)
        re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/);
    else {
        //alert("输入的数字位数不对。");
        return false;
    }
    var a = num.match(re);
    if (a != null) {
        if (len == 15) {
            var D = new Date("19" + a[3] + "/" + a[4] + "/" + a[5]);
            var B = D.getYear() == a[3] && (D.getMonth() + 1) == a[4] && D.getDate() == a[5];
        }
        else {
            var D = new Date(a[3] + "/" + a[4] + "/" + a[5]);
            var B = D.getFullYear() == a[3] && (D.getMonth() + 1) == a[4] && D.getDate() == a[5];
        }
        if (!B) {
            //alert("输入的身份证号 "+ a[0] +" 里出生日期不对。");
            return false;
        }
    }
    if (!re.test(num)) {
        //alert("身份证最后一位只能是数字和字母。");
        return false;
    }
    return true;
}

if("undefined" == typeof SiteLanguage || SiteLanguage == "cn"){
    $.extend($.validator.messages, {
        required : "*必填",
        remote : "请修正该字段",
        email : "请输入正确格式的电子邮件",
        url : "请输入合法的网址",
        date : "请输入合法的日期",
        dateISO : "请输入合法的日期 ",
        number : "请输入合法的数字",
        digits : "只能输入整数",
        creditcard : "请输入合法的信用卡号",
        equalTo : "请再次输入相同的值",
        accept : "请输入拥有合法后缀名的字符串",
        maxlength : $.format("请输入一个长度最多是 {0} 的字符"),
        minlength : $.format("请输入一个长度最少是 {0} 的字符"),
        rangelength : $.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
        range : $.format("请输入一个介于 {0} 和 {1} 之间的值"),
        max : $.format("该项不能大于 {0}"),
        min : $.format("该项不能小于 {0}"),
        username : "只能输入字符、数字、中文、中划线、下划线、＠符号",
        path : "只能输入字符和数字的组合",
        url3 : "请输入合法的网址",
        url4 : "*输入有误",
        user : "只能输入英文、数字,并且用户名长度不能小于6",
        password :"只能输入英文、数字、中划线、下划线"
    });
}else if(SiteLanguage == "en"){
    $.extend($.validator.messages, {
        required : "*The item is mandatory",
        remote : "Please correct this field",
        email : "Please enter E-mail in the correct format",
        url : "Please enter a legal website",
        date : "Please enter a legal date",
        dateISO : "Please enter a legal date",
        number : "Please enter a valid number",
        digits : "Enter an integer",
        creditcard : "Please enter a valid credit card number",
        equalTo : "Please enter the same value again",
        accept : "Please enter a string with a valid suffix name",
        maxlength : $.format("Please enter a character with a maximum length of {0}"),
        minlength : $.format("Please enter a character with a minimum length of {0}"),
        rangelength : $.format("Enter a string that is between {0} and {1}"),
        range : $.format("Please enter a value between {0} and {1}"),
        max : $.format("The item cannot be greater than {0}"),
        min : $.format("This item cannot be less than {0}"),
        username : "Only characters, Numbers, Chinese, underlined, underlined, @ symbol can be entered",
        path : "Only combinations of characters and Numbers can be entered",
        url3 : "Please enter a legal website",
        url4 : "*Incorrect syntax",
        user : "Only English, number, and user name length cannot be less than 6",
        password :"Only enter English, number, underline, underline"
    });
}else if(SiteLanguage == "tcn"){
    $.extend($.validator.messages, {
        required : "*該項為必填項",
        remote : "請修正該字段",
        email : "請輸入正確格式的電子郵件",
        url : "请输入合法的网址",
        date : "請輸入合法的日期",
        dateISO : "請輸入合法的日期",
        number : "請輸入合法的數字",
        digits : "只能輸入整數",
        creditcard : "請輸入合法的信用卡號",
        equalTo : "請再次輸入相同的值",
        accept : "請輸入擁有合法後綴名的字符串",
        maxlength : $.format("請輸入一個長度最多是 {0} 的字符"),
        minlength : $.format("請輸入一個長度最少是 {0} 的字符"),
        rangelength : $.format("請輸入一個長度介于 {0} 和 {1} 之間的字符串"),
        range : $.format("請輸入一個介于 {0} 和 {1} 之間的值"),
        max : $.format("該項不能大于 {0}"),
        min : $.format("該項不能小于 {0}"),
        username : "只能輸入字符、數字、中文、中劃線、下劃線、＠符號",
        path : "只能輸入字符和數字的組合",
        url3 : "請輸入合法的網址",
        url4 : "*輸入有誤",
        user : "只能輸入英文、數字,並且用戶名長度不能小于6",
        password :"只能輸入英文、數字、中劃線、下劃線"
    });
}else if(SiteLanguage == "jap"){
    $.extend($.validator.messages, {
        required : "*そのためには必要なものが必要だ",
        remote : "このフィールドを修正してください",
        email : "正しいフォーマットのeメールを入力してください",
        url : "合法アドレスを入力してください",
        date : "合法的な日時を入力してください",
        dateISO : "合法的な日時を入力してください",
        number : "合法的な数字を入力してください",
        digits : "整数を入力しなければなりません",
        creditcard : "合法的なクレジットカード番号を入力してください",
        equalTo : "再度同じ値を入力してください",
        accept : "合法的なバックスペリングの文字列を入力してください",
        maxlength : $.format("1つの長さが {0} の文字を入力してください"),
        minlength : $.format("1つの長さが少なくとも {0} の文字を入力してください"),
        rangelength : $.format("{0} と {1} の间の文字列を入力してください"),
        range : $.format("{0} と {1} の値を入力してください"),
        max : $.format("これは {0} より大きい"),
        min : $.format("これは {0} ではない"),
        username : "文字、数字、中国语、中线、下线線、@記号を入力します",
        path : "文字と数字の組み合わせだけが入力されます",
        url3 : "合法アドレスを入力してください",
        url4 : "*誤りを入力する",
        user : "英語、数字だけが入力され、ユーザーの長さは6を下回ることはできない",
        password :"英語、数字、中線、下線を入力しなければならない"
    });
}else if(SiteLanguage == "kor"){
    $.extend($.validator.messages, {
        required : "*이 항목은 필기사항이다",
        remote : "이 글자의 단락을 수정 해 주십시오",
        email : "정확 한 격식의 e 메일을 입력 해 주십시오",
        url : "합법적인 사이트 주소를 입력하십시오",
        date : "합법적인 날짜를 입력 해 주십시오",
        dateISO : "합법적인 날짜를 입력 해 주십시오 ",
        number : "합법적인 숫자를 입력 해 주십시오",
        digits : "정수를 입력 할 수 밖에 없다",
        creditcard : "합법적인 신용카드 번호를 입력하십시오",
        equalTo : "다시 같은 가치를 입력하십시오",
        accept : "합법적인 후에 이름을 갖고 있는 문자를 입력하십시오",
        maxlength : $.format("한 가지 길이 가 {0} 이라는 글자를 입력하십시오"),
        minlength : $.format("길이 가 가장적은 {0} 의 글자를 입력하십시오"),
        rangelength : $.format("길이 {0} 과 {1} 사이의 글씨를 입력하십시오"),
        range : $.format("{0} 와 {1} 사이의 가치를 입력하십시오"),
        max : $.format("이 책은 {0} 보다 더 클 수 없다"),
        min : $.format("이 일은 {0} 군에 못 미 친다"),
        username : "글자와 숫자, 중국어, 중에 밑줄을 긋고, 다음에 선, @ 기호를 입력 할 수 밖에 없다",
        path : "글자와 숫자의 조합을 입력 할 수 밖에 없다",
        url3 : "합법적인 사이트 주소를 입력하십시오",
        url4 : "*잘못 입력하다",
        user : "영어와 숫자를 입력 할 수 밖에 없고, 사용자 명의의 길이는 6개에 못 미 친다",
        password :"영문과 숫자, 중간 정도, 밑줄을 입력 할 수 밖에 없다"
    });
}else if(SiteLanguage == "lo"){
    $.extend($.validator.messages, {
        required : "*ນີ້ທີ່ກໍານົດໄວ້",
        remote : "ກະລຸນາແກ້ໄຂພາກສະຫນາມ",
        email : "ກະລຸນາໃສ່ຮູບແບບອີເມວທີ່ຖືກຕ້ອງ ",
        url : "ກະລຸນາໃສ່ URL ທີ່ຖືກຕ້ອງ ",
        date : "ກະລຸນາໃສ່ວັນທີທີ່ຖືກຕ້ອງ ",
        dateISO : "ທີ່ກະລຸນາໃສ່ທີ່ຖືກຕ້ອງ ",
        number : "ກະລຸນາໃສ່ຈໍານວນທີ່ຖືກຕ້ອງ ",
        digits : "ພຽງແຕ່ສາມາດເຂົ້າເປັນຈໍານວນເຕັມ",
        creditcard : "ກະລຸນາໃສ່ຈໍານວນບັດເຄຣດິດທີ່ຖືກຕ້ອງ",
        equalTo : "ກະລຸນາໃສ່ຄຸນຄ່າດຽວກັນອີກເທື່ອຫນຶ່ງ ",
        accept : "ກະລຸນາໃສ່ສະຕິງມີນາມສະກຸນທີ່ຖືກຕ້ອງຂອງ",
        maxlength : $.format("ກະລຸນາໃສ່ຄວາມຍາວສູງສຸດຂອງລັກສະນະເປັນ {0}"),
        minlength : $.format("ໃສ່ຄວາມຍາວຕ່ໍາສຸດແມ່ນ {0} ມີລັກສະນະ"),
        rangelength : $.format("ໃສ່ຄວາມຍາວຂອງ string ລະຫວ່າງ {0} ແລະ {1} ແມ່ນລະຫວ່າງ"),
        range : $.format("ກະລຸນາໃສ່ຈໍານວນລະຫວ່າງ {0} ແລະ { 1} ລະຫວ່າງຄຸນຄ່າຂອງ"),
        max : $.format("ການ {0} ບໍ່ສາມາດຈະມີຫຼາຍຂຶ້ນກ່ວາ"),
        min : $.format("ທີ່ບໍ່ຫນ້ອຍກ່ວາ {0}"),
        username : "ທ່ານພຽງແຕ່ສາມາດເຂົ້າຕົວອັກສອນຈໍານວນ, ຈີນ, ໃນ dash, ຂີດ, @ sign ",
        path : "ສາມາດພຽງແຕ່ໃສ່ການລວມກັນຂອງຕົວອັກສອນແລະຕົວເລກ ",
        url3 : "ກະລຸນາໃສ່ URL ທີ່ຖືກຕ້ອງ",
        url4 : "*ແມ່ນເຂົ້າບໍ່ຖືກຕ້ອງ",
        user : "ພຽງແຕ່ສາມາດເຂົ້າອັງກິດ, ຕົວເລກ, ແລະຊື່ຜູ້ໃຊ້ບໍ່ສາມາດຈະຕໍ່ໄປອີກແລ້ວກ່ວາ 6",
        password :"ພຽງແຕ່ສາມາດເຂົ້າ ພາສາອັງກິດ, ຕົວເລກ, dash ໄດ້, ຂີດໄດ້"
    });
}else if(SiteLanguage == "th"){
    $.extend($.validator.messages, {
        required : "*ที่ต้องการสินค้า",
        remote : "แก้ไขเขตข้อมูล",
        email : "กรุณาระบุการจัดรูปแบบอย่างถูกต้องอีเมล์กรุณาใส่อีเมล์จัดรูปแบบอย่างถูกต้อง",
        url : "โปรดระบุ URL ถูกต้อง",
        date : "โปรดป้อนวันที่ถูกต้อง",
        dateISO : "โปรดป้อนวันที่ถูกต้อง ",
        number : "กรุณาใส่หมายเลขที่ถูกต้อง",
        digits : "ป้อนจำนวนเต็มเท่านั้น",
        creditcard : "กรุณาใส่หมายเลขบัตรเครดิต",
        equalTo : "โปรดใส่ค่าเดียวกัน",
        accept : "กรุณาใส่นามสกุลเป็นกฎหมายของสายอักขระ",
        maxlength : $.format("โปรดป้อนได้สูงสุด {0} อักขระความยาว"),
        minlength : $.format("โปรดป้อนน้อย {0} อักขระความยาว"),
        rangelength : $.format("กรุณาใส่หมายเลขระหว่าง {0} ถึง {1} ของสายอักขระความยาวระหว่าง"),
        range : $.format("กรุณาใส่ค่าระหว่าง {0} ถึง {1}"),
        max : $.format("สินค้าไม่สามารถมากกว่า {0}"),
        min : $.format("สินค้าต้องไม่น้อยกว่า {0}"),
        username : "ใส่เฉพาะตัวอักษร ตัวเลข เส้นประ ขีด ที่@สัญลักษณ์ในจีน",
        path : "ป้อนชุดของอักขระและตัวเลขเท่านั้น",
        url3 : "โปรดระบุ URL ถูกต้อง",
        url4 : "*ชนิดไม่ถูกต้อง",
        user : "เฉพาะคุณสามารถป้อนตัวอักษรภาษาอังกฤษ ตัวเลข และความยาวของชื่อผู้ใช้ไม่น้อยกว่า 6",
        password :"สามารถป้อนข้อมูลเพียงเส้นประ ตัวอักษรภาษาอังกฤษ ตัวเลข ขีด"
    });
}else if(SiteLanguage == "es"){
    $.extend($.validator.messages, {
        required : "*Debemos completar la",
        remote : "Por favor las enmiendas en este campo",
        email : "Por favor ingrese el formato correcto el correo electrónico",
        url : "Por favor ingrese en el sitio web de la legítima",
        date : "Por favor ingrese la fecha legal",
        dateISO : "Por favor ingrese la fecha legal",
        number : "Por favor ingrese legal de números",
        digits : "Sólo enteros de entrada",
        creditcard : "Por favor ingrese legal números de tarjetas de crédito",
        equalTo : "Por favor ingrese nuevamente el mismo valor",
        accept : "Por favor ingrese con cadenas de sufijos legal",
        maxlength : $.format("Por favor ingrese UN mayor longitud es {0} de caracteres"),
        minlength : $.format("Por favor ingrese una longitud de carácter mínimo es {0}"),
        rangelength : $.format("Por favor ingrese una longitud de entre {0} y {1} entre cadenas"),
        range : $.format("Por favor ingrese UN {0} y UN {1} es de mediar entre el valor"),
        max : $.format("{0} no superior a la"),
        min : $.format("{0} no inferior a la"),
        username : "Sólo personajes, números, de entrada, subrayado en chino, el trazo, en símbolos",
        path : "Sólo caracteres de entrada y la combinación de números",
        url3 : "Por favor ingrese en el sitio web de la legítima",
        url4 : "*Ingrese inexactamente",
        user : "Sólo en inglés, de entrada, la cifra de longitud y el nombre de usuario no inferior a 6",
        password :"Sólo números, en inglés, de entrada, subrayado en el trazo"
    });
}else if(SiteLanguage == "ru"){
    $.extend($.validator.messages, {
        required : "*Этого необходимо заполнить",
        remote : "Пожалуйста, поправки в поле",
        email : "Введите точно формат электронной почты",
        url : "Пожалуйста, введите законным веб-сайт",
        date : "Пожалуйста, введите дату законным",
        dateISO : "Пожалуйста, введите дату законным",
        number : "Введите законным цифры",
        digits : "Введите целое число только",
        creditcard : "Пожалуйста, введите законным номер кредитной карточки",
        equalTo : "Опять же, введите одинаковое значение",
        accept : "Пожалуйста, введите законного суффикс из строки",
        maxlength : $.format("Пожалуйста, введите до длины, символы {0}"),
        minlength : $.format("Пожалуйста, введите меньше длины, символы {0}"),
        rangelength : $.format("Пожалуйста, введите длина между {0} и {1} между строк"),
        range : $.format("Пожалуйста, введите между {0} и {1} значения"),
        max : $.format("экскурсоводом ч давле этого не превышает {0}"),
        min : $.format("Этого не менее {0}"),
        username : "Только ввод символ, цифры, китайском, разметка, подчеркивание, символ @",
        path : "Только ввод символ и комбинация цифр",
        url3 : "Пожалуйста, введите законным веб-сайт",
        url4 : "*Введите фальшиво",
        user : "Только на английском, ввода цифры, и имя пользователя длиной не менее 6",
        password :"Только на английском, ввода цифры, разметка, подчеркивание"
    });
}else if(SiteLanguage == "fra"){
    $.extend($.validator.messages, {
        required : "*Le montant est d’utiliser",
        remote : "Prie de modifier le champs",
        email : "Présentation de données par courrier électronique",
        url : "Prie les légitimes dans",
        date : "Dans la demande légitime",
        dateISO : "Dans la demande légitime ",
        number : "Prie. Saisie légale",
        digits : "Saisie ne correspond",
        creditcard : "Saisie d’une demande légitime",
        equalTo : "Prie de nouveau les",
        accept : "Prie les détenteurs légitimes suffixe saisie de nom",
        maxlength : $.format("La longueur de tout un jeu de {0}"),
        minlength : $.format("Prie la longueur minimum est un jeu de {0}"),
        rangelength : $.format("Prie la longueur entre {0} et un nom, les caraïbes (voir tableau {1})"),
        range : $.format("Prie entre {0} et {1} dans une valeur entre"),
        max : $.format("Ce ne peut être supérieur à {0}"),
        min : $.format("{0} ne sont pas moins la"),
        username : "Saisie, chiffres, ne caractères chinois, en italique sont soulignés, symboles, @",
        path : "Saisie et ne caractères",
        url3 : "Prie les légitimes dans",
        url4 : "*mal",
        user : "Saisie en anglais, ne peut et ne peut pas être inférieure à 6 d’utilisateurs",
        password :"En anglais uniquement, chiffres, saisie, en italique sont soulignés"
    });
}else if(SiteLanguage == "it"){
    $.extend($.validator.messages, {
        required : "*L'elemento è richiesto",
        remote : "Si prega di correggere il campo",
        email : "Inserisci un indirizzo email correttamente formattato",
        url : "Inserisci un URL valido",
        date : "Si prega di inserire una data valida",
        dateISO : "Si prega di inserire una data valida",
        number : "Inserisci un numero valido",
        digits : "Immettere solo numeri interi",
        creditcard : "Inserisci un numero di carta di credito valida",
        equalTo : "Immettere nuovamente lo stesso valore",
        accept : "Si prega di inserire un'estensione legale della stringa",
        maxlength : $.format("Inserisci un massimo di {0} caratteri di lunghezza"),
        minlength : $.format("Si prega di inserire almeno {0} caratteri di lunghezza"),
        rangelength : $.format("Inserisci un numero compreso tra {0} e {1} di stringa di lunghezza tra"),
        range : $.format("Immettere un valore compreso tra {0} e {1}"),
        max : $.format("L'elemento non può essere maggiore di {0}"),
        min : $.format("L'elemento non può essere inferiore a {0}"),
        username : "Inserire solo caratteri, numeri, trattini, caratteri di sottolineatura, il simbolo @ nel cinese,",
        path : "Inserire solo la combinazione di caratteri e numeri",
        url3 : "Inserisci un URL valido",
        url4 : "*Tipo è sbagliato",
        user : "È possibile immettere solo lettere dell'alfabeto inglese, numeri, e la lunghezza del nome utente non può essere inferiore a 6",
        password :"Possibile immettere solo lettere dell'alfabeto inglese, numeri, trattini, caratteri di sottolineatura,"
    });
}else if(SiteLanguage == "de"){
    $.extend($.validator.messages, {
        required : "*Das Element ist erforderlich",
        remote : "Bitte korrigieren Sie das Feld",
        email : "Bitte geben Sie eine korrekt formatierte e-Mail",
        url : "Bitte geben Sie eine gültige URL",
        date : "Bitte geben Sie ein gültiges Datum",
        dateISO : "Bitte geben Sie ein gültiges Datum",
        number : "Bitte geben Sie eine gültige Zahl",
        digits : "Geben Sie nur ganze Zahlen",
        creditcard : "Bitte geben Sie eine gültige Kreditkartennummer",
        equalTo : "Geben Sie den gleichen Wert",
        accept : "Bitte geben Sie eine gesetzliche Erweiterung der Zeichenfolge",
        maxlength : $.format("Bitte geben Sie maximal {0} Zeichen lang"),
        minlength : $.format("Bitte geben Sie mindestens {0} Zeichen lang"),
        rangelength : $.format("Bitte geben Sie eine Zahl zwischen {0} und {1} der Zeichenfolge der Länge zwischen"),
        range : $.format("Bitte Geben Sie Eine Zahl Zwischen {0} Und {1} der Zeichenfolge der Länge zwischen"),
        max : $.format("Das Element darf nicht größer als {0}"),
        min : $.format("Das Element darf nicht weniger als {0}"),
        username : "Geben Sie nur Buchstaben, zahlen, Bindestriche, Unterstriche, das @-Symbol in Chinesisch,",
        path : "Geben Sie nur die Kombination aus Buchstaben und Zahlen",
        url3 : "Bitte geben Sie eine gültige URL",
        url4 : "*Typ ist falsch",
        user : "Geben Sie nur englische Buchstaben und Zahlen, und die Länge des Benutzers darf nicht weniger als 6",
        password :"Können nur englische Buchstaben, zahlen, Bindestriche, Unterstriche eingeben,"
    });
}
$.fn.extend( {
	showBy : function(target) {
		var offset = target.offset();
		var top, left;
		var b = $(window).height() + $(document).scrollTop() - offset.top
				- target.outerHeight();
		var t = offset.top - $(document).scrollTop();
		var r = $(window).width() + $(document).scrollLeft() - offset.left;
		var l = offset.left + target.outerWidth() - $(document).scrollLeft();
		if (b - this.outerHeight() < 0 && t > b) {
			top = offset.top - this.outerHeight() - 1;
		} else {
			top = offset.top + target.outerHeight() + 1;
		}
		if (r - this.outerWidth() < 0 && l > r) {
			left = offset.left + target.outerWidth() - this.outerWidth();
		} else {
			left = offset.left;
		}
		this.css("top", top).css("left", left).show();
	}
});
