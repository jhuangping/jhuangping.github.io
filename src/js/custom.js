/* Variables ================================================================== */
var $window = $(window),
    $header = $('header')
    $body = $('body'),
    rwdw = 1024,
    rwdPad = 768,
    rwdPhone = 480;
/* Plug-in ================================================================ */

/* Element ================================================================ */
// Common -----------------------------------------------------------------

// 判斷是否為 IE
function browser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器 
    // var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器 
    var isIE = window.ActiveXObject || "ActiveXObject" in window
    // var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器 
    var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器 
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器 
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1 && !isEdge; //判断Chrome浏览器 

    var bie = false;

    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (userAgent.indexOf('MSIE 6.0') != -1) {
            bie = true;
            return bie;
        } else if (fIEVersion == 7) {
            bie = true;
            return bie;
        } else if (fIEVersion == 8) {
            bie = true;
            return bie;
        } else if (fIEVersion == 9) {
            bie = true;
            return bie;
        } else if (fIEVersion == 10) {
            bie = true;
            return bie;
        } else if (userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)) {
            bie = true;
            return bie;
        } else {
            bie = true;
            return bie;
        } //IE版本过低
    } //isIE end 

    if (isFF) {
        bie = false;
        return bie;
    }
    if (isOpera) {
        bie = false;
        return bie;
    }
    if (isSafari) {
        bie = false;
        return bie;
    }
    if (isChrome) {
        bie = false;
        return bie;
    }
    if (isEdge) {
        bie = true;
        return bie;
    }
}
// var thisBrowser = browser();
// console.log(thisBrowser);

/* Plug-in ================================================================ */
var swiper = {
    index: function () {
        var idx_bn = new Swiper('.m-bn-idx_swp', {
            spaceBetween: 0,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            speed: 3000,
            effect: 'fade',
            loop: false,
            fadeEffect: {
                crossFade: true,
            },
            // navigation: {
            //     nextEl: '.swiper-button-prev',
            //     prevEl: '.swiper-button-next',
            // }
        });

    },
}

//  Custom --------------------------------------------------------------------
function menu() {
    var btn = $('.hd_toggle'),
        menuStn = $('.hd_menu'),
        menu = $('.menu');

    btn.click(function () { 
        $(this).toggleClass('js-active').next(menuStn).toggleClass('js-show').find(menu).toggleClass('js-show');
    });
}
/* Page =================================================================== */
var readyFunction = {
    checkFunction: function checkFunction() {

        //擷取body id
        var functionName = $('body').data('id');
        // console.log(functionName);
        if (functionName !== undefined) {
            $body.addClass(functionName);
            //呼叫函數( 如果 id = home 輸出的結果為 readyFunction.home(); )
            eval("readyFunction." + functionName + "();");
        }

        //共用函數呼叫
        readyFunction.common();
    },
    common: function () {
        $('header').load('template/header.html',function () {
            menu();
        });
        $('footer').load('template/footer.html');
        tableWrap('.edit');
    },
    index: function () {
        swiper.index();
    }, 
    making: function () {

    },
};

$(function () {
    readyFunction.checkFunction();
});