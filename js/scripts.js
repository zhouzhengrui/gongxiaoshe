
jQuery(document).ready(function($) {

    // type menu

    $("ul.typeMenu").superfish({
        hoverClass: "hover",
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: false
    });

    // slider

    $(".sliderBox ul").responsiveSlides({
        namespace: "slider",
        auto: true,
        speed: 800,
        timeout: 6000,
        pager: false,
        nav: true,
        random: false,
        pause: true,
        pauseControls: true,
        prevText: "<i class='icon-arrow-1-left'></i>",
        nextText: "<i class='icon-arrow-1-right'></i>",
        maxwidth: ""
    });
    // var sliderImageLoad = [];
    // $(".sliderBox img").each(function () {
    //     var sliderImage = $.Deferred();
    //     $(this).load(sliderImage.resolve);
    //     sliderImageLoad.push(sliderImage);
    // });
    // $.when.apply(null, sliderImageLoad).done(function () {
    //     $(".fontIconLoading").remove();
    // });

    // text scrool

    var sideScroll;
    $(".sideScroll").hover(function() {
        clearInterval(scrtime);
    }, function() {
        scrtime = setInterval(function() {
            var $ul = $(".sideScroll ul");
            var liHeight = $ul.find("li:last").height();
            $ul.animate({
                marginTop: liHeight + 0 + "px"
            }, 800, function() {
                $ul.find("li:last").prependTo($ul)
                $ul.find("li:first").hide();
                $ul.css({
                    marginTop: 0
                });
                $ul.find("li:first").fadeIn(800);
            });
        }, 4000);
    }).trigger("mouseleave");

    // tab

    $(".tabBox .tab").tabs(".panelBox .panel", {
        event: 'mouseover'
    });

    // fancy box

    $(".fancybox").fancybox({
        helpers: {
            padding: 10,
            margin: 15,
            title: {
                type: 'outside'
            }
        }
    });

    // anchor

    $(".anchor").click(function() {
        var id = '#' + $(this).attr("rel");
        $("html, body").animate({
            scrollTop: $(id).offset().top
        }, 600);
    });

});
