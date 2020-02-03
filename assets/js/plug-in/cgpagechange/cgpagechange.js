///////////////////////////////////////
//            轉場href判斷           //
///////////////////////////////////////
// 檢查是否為移動裝置
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var device = isAndroid || isiOS

$('a:not(.nocg)').click(function (e) {
    e.preventDefault();

    var thisClass = $(this).attr("class") ? $(this).attr("class") : 'noClass'
    var thisTarget = $(this).attr("target");
    var aHref = $(this).attr("href");
    
    // 本地
    var x = window.location.pathname.replace("http://","")
    var xArr = x.split("/");    
        xArr = lastArr(xArr)
    // 連結
    var href = $(this).attr("href");
        y = this.href.replace("http://","")
    var yArr = y.split("/");
        yArr = lastArr(yArr);

    // 判斷是否為ie
    var is_oldie = window.navigator.userAgent.indexOf("MSIE") > 0
    var is_newie = window.navigator.userAgent.indexOf("Trident") > 0


    function lastArr(arr) {
        var last = arr.pop()
        if (last.indexOf("#") > -1) {
            arr.push(last)
        } else if (last.indexOf("html") > 0) {
            arr.push(last)
        } else if (last == "") {
            arr.push('index.html')
        } else {
            arr.push(last)
            arr.push('index.html')
        }
        return arr
    }

    if (thisTarget == "_blank" || e.ctrlKey||e.metaKey) {
        window.open(aHref);
    }else if (thisClass.indexOf('nodoit') > -1) {
        //啥事都不幹
    } else if (y.indexOf('jpg') > -1 || y.indexOf('javascript') > -1) {
        //啥事都不幹
    } else if (y.indexOf("#") > -1) {
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, {
                duration: 900,
                easing: 'easeInOutCirc'
            });
        }
    } else if (xArr.length == yArr.length && xArr[xArr.length - 1] == yArr[yArr.length - 1] && xArr[xArr.length - 2] == yArr[yArr.length - 2]) {
        //自己那頁 啥事都不幹
    } else {
        pagechange.CG_A(href);
    }

})



var pagechange = {
    ///////////////////////////////////////
    //           cgpagechangeA           //
    ///////////////////////////////////////
    CG_A: function (href) {
        // $("body").append("<article class='cgBox'></artilce>")

        // var windowWidth = $(window).width();
        // var windowHeight = $(window).height();

        // var widthLength = Math.ceil(windowWidth / 50);
        // if (widthLength % 2 == 0) {
        //     widthLength += 1
        // }
        // var heightLength = Math.ceil(windowHeight / 50);
        // if (heightLength % 2 == 0) {
        //     heightLength += 1
        // }
        // var totalLength = widthLength * heightLength

        // var html = ""
        // for (var i = 0; i < totalLength; i++) {
        //     html += "<div class='box'></div>"
        // }

        // $(".cgBox").css({
        //     "width": ((widthLength *50)+"px"),
        //     "height": ((heightLength*50)+"px")
        // })
        // $(".cgBox").append(html)
        // var center = Math.floor(totalLength / 2)

        // $(".cgBox .box").eq(center).css({
        // })


        // var level =(widthLength>=heightLength)?widthLength:heightLength

        // // 時間間隔
        // var timeGap = 0.04
        // // 層級
        // for (var i = 1; i < Math.ceil(level/2); i++) {
        //     // top
        //     var top = center - (i * widthLength)
        //     var timeDelay = i*timeGap +"s"
        //     if (top >= 0) {
        //         $(".cgBox .box").eq(top).css({
        //             "animation-delay":timeDelay,
        //         })
        //     }
        //     // topleft 
        //     for (var topLeft = 1; topLeft < (i + 1); topLeft++) {
        //         var a = top - topLeft
        //         if (a >= 0) {
        //             $(".cgBox .box").eq(a).css({
        //                 "animation-delay":timeDelay,
        //             })
        //         }
        //     }

        //     // topright
        //     for (var topright = 1; topright < (i + 1); topright++) {
        //         var a = top + topright
        //         if (a >= 0) {
        //             $(".cgBox .box").eq(a).css({
        //                 "animation-delay":timeDelay,
        //             })
        //         }
        //     }

        //     var bottom = center + (i * widthLength)
        //     if (bottom >= 0) {
        //         $(".cgBox .box").eq(bottom).css({
        //             "animation-delay":timeDelay,
        //         })
        //     }
        //     // bottomleft 
        //     for (var bottomLeft = 1; bottomLeft < (i + 1); bottomLeft++) {
        //         var a = bottom - bottomLeft
        //         if (a >= 0) {
        //             $(".cgBox .box").eq(a).css({
        //                 "animation-delay":timeDelay,
        //             })
        //         }
        //     }
        //     // bottomright
        //     for (var bottomright = 1; bottomright < (i + 1); bottomright++) {
        //         var a = bottom + bottomright
        //         if (a >= 0) {
        //             $(".cgBox .box").eq(a).css({
        //                 "animation-delay":timeDelay,
        //             })
        //         }
        //     }

        //     // left
        //     var left = center - i
        //     if (left >= 0) {
        //         $(".cgBox .box").eq(left).css({
        //             "animation-delay":timeDelay,
        //         })
        //     }
        //     // leftTop
        //     for (var leftTop = 0; leftTop < i; leftTop++) {
        //         var a = left - (leftTop*widthLength)
                
        //         if (a >= 0) {
        //             $(".cgBox .box").eq(a).css({
        //                 "animation-delay":timeDelay,
        //             })
        //         }
        //     }
        //     // leftBottom 
        //     for (var leftBottom  = 0; leftBottom  < i; leftBottom ++) {
        //         var a = left + (leftBottom *widthLength)
                
        //         if (a >= 0) {
        //             $(".cgBox .box").eq(a).css({
        //                 "animation-delay":timeDelay,
        //             })
        //         }
        //     }

        //     // right
        //     var right = center + i
        //     if (right >= 0) {
        //         $(".cgBox .box").eq(right).css({
        //             "animation-delay":timeDelay,
        //         })
        //     }
        //     // rightTop
        //     for (var rightTop = 0; rightTop < i; rightTop++) {
        //         var a = right - (rightTop*widthLength)
                
        //         if (a >= 0) {
        //             $(".cgBox .box").eq(a).css({
        //                 "animation-delay":timeDelay,
        //             })
        //         }
        //     }
        //     // rightBottom 
        //     for (var rightBottom  = 0; rightBottom  < i; rightBottom ++) {
        //         var a = right + (rightBottom *widthLength)
                
        //         if (a >= 0) {
        //             $(".cgBox .box").eq(a).css({
        //                 "animation-delay":timeDelay,
        //             })
        //         }
        //     }
        // }

        // var bodyDelay = ((Math.ceil(level/2)-1)*timeGap + parseInt($(".cgBox .box").css("animation-duration")))*1000


        // $("html,body").delay(bodyDelay).animate({
        //     opacity: "0"
        // }, {
        //     queue: true,
        //     duration: 50,
        //     easing: "easeOutQuad",
        //     complete: function () {
        //         setTimeout(function () {
        //             window.location.assign(href);
        //         }, 50);
        //     }
        // });




        $("html,body").delay(0).animate({
            opacity: "0"
        }, {
            queue: true,
            duration: 600,
            easing: "easeOutQuad",
            complete: function () {
                setTimeout(function () {
                    window.location.assign(href);
                }, 600);
            }
        });
    },


}

//動態曲線
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',

    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
});