$(function () {
    // 設定menu list
    var menuArry = [
        {
            name: 'Getting Started 入門',
            link: 'page/setting'
        },
        {
            name: 'Helpers 助手',
            link: 'page/helpers'
        },
        {
            name: 'Module 模組',
            link: 'page/module'
        },
        {
            name: 'Download 下載',
            link: 'page/download'
        }
    ]

    // 基礎設定 header & footer
    var header = $('<div class="hd_l-wp l-wp-max1680"><a href="index.html" class="hd_logo"><img src="../source/img/common/logo.svg" alt=""></a><div class="hd_toggle"></div><div class="menu"><ul class="menu_ctr"></ul></div></div>'),
        footer = $('<div class="ft_l-wp l-wp-max1680"><div class="copyright">Copyright© JhuangPing 2019 - All. <span> Design by JhuangPing</span></div></div>');
    // $('header').append(header);
    $('footer').append(footer);

    // 建立MENU List
    // $.each(menuArry, function (i, val) { 
    //     var list = $('<li class="menu_item" data-open="' + val.link + '.html">' + val.name + '</li>');
    //     $('.menu_ctr').append(list);
    // });
    
    function openPage(){
        var ctrIr = $('.body-ir'),
            ctrStn = $('.stn-body'),
            ctrClose = $('.body-close')
    
        $('.menu_item').click(function () { 
            var thisOpen = $(this).data('import');
            var inner = $('<iframe src="' + thisOpen + '" frameborder="0"></iframe>')
            ctrIr.stop(false, true).fadeOut(500);
            setTimeout(function () {
                ctrIr.html(inner).stop(false, true).fadeIn(1000);
            }, 500);
    
            ctrStn.addClass('js-show');
        });  
        
        ctrClose.click(function () {
            ctrStn.removeClass('js-show');
        });
    }
    openPage();

});