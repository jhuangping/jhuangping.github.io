/* JhuangPing Tool ============================================================ */
// dataFun
var dataFun = {
    href: function () {
        $('[data-href]').click(function () {
            var href = $(this).data('href');
            location.href = href;
        });
    },
    open: function () {
        $('[data-open]').click(function () {
            var href = $(this).data('open');
            window.open(href);
        });
    },
    bg: function () {
        $('[data-src]').each(function () {
            var src = $(this).data('src');
            $(this).css('background-image', 'url("' + src + '")');
        });
    },
    changeImg: function () {
        $('[data-img]').each(function () {
            var $this = $(this),
                judge = $this.data('img');
            img = $this.find('img'),
                src = img.attr('src');
            // console.log(judge);

            function imgBg(name) {
                $this.css('background-image', 'url("' + src + '")').addClass('js-img--' + name + ' js-img--config');
                img.hide();
            }
            imgBg(judge);
        });
    },
    all: function () {
        this.href();
        this.open();
        this.bg();
        this.changeImg();
    }
}

// change svg
function svg() {
    $('img[src$=".svg"]').each(function () {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest   
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG   
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG   
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org   
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.   
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG   
            $img.replaceWith($svg);

        }, 'xml');

    });
}

// clear sylte
function clearStyle(ele) {
    $(ele).attr('style', '');
}

// Edit
function tableWrap(ele) {
    $(ele).find('table').wrap('<div class="scroll-y"></div>')
}

$(document).ready(function () {
    dataFun.all();
    svg();
});
