jQuery(document).ready(function($) {

    // --------------------------------------------- type menu --------------------------------------------- //

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

    $(".hideTypeMenu").hover(function() {
        if ($(".hideTypeMenu .typeMenu").css("display") == "none") {
            $(".hideTypeMenu .typeMenu").show();
            $(".hideTypeMenu .typeButton").addClass("showTypeMenu");
        } else {
            $(".hideTypeMenu .typeMenu").hide();
            $(".hideTypeMenu .typeButton").removeClass("showTypeMenu");
        }
    });

    // --------------------------------------------- slider --------------------------------------------- //

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

    // --------------------------------------------- tab --------------------------------------------- //

    $(".tabBox .tab").tabs(".panelBox .panel", {
        event: 'mouseover'
    });

    // lazyload

    $("img.lazyload").lazyload({
        effect: "fadeIn"
    });

    // --------------------------------------------- fly --------------------------------------------- //

    // 计算offset
    var resetOffset = function() {
        var offset = $(".sideCart").offset();
        if (offset == null) {
            return;
        }
        if ($(window).height() < offset.top) {
            offset.top = $(".sideCart").offset().top - $(document).scrollTop();
        }
        return offset;
    }
    var offset = resetOffset();
    // 如果窗口大小发生变化时需要重新计算
    window.onresize = function() {
        offset = resetOffset(offset);
    }
    $(".addCart").click(function(event) {
        //AJAX添加到购物车
        var flag = false;
        //AJAX添加成功后设置flag=true
        var addCart = $(this);
        var flyer = $('<img class="flyer" src="img/flyer.png" alt="">');
        flyer.fly({
            speed: 1.2,
            start: {
                left: event.clientX,
                top: event.clientY
            },
            end: {
                left: offset.left + 25,
                top: offset.top + 25,
                width: 0,
                height: 0
            },
            onEnd: function() {
                $(".flyOver").show().animate({
                    width: '50px'
                }, 400).fadeOut(800);
                //设置购物车内数量
                var i = parseInt($("#top-cart-quantity").html());
                $("#top-cart-quantity").html(i + 1);
                $("#side-cart-quantity").html(i + 1);
            }
        });
    });

    // --------------------------------------------- fancy box --------------------------------------------- //

    $(".fancyboxButton").fancybox({
        padding: 0,
        margin: 0,
        minWidth: 350,
        maxWidth: 1000,
        helpers: {
            title: {
                type: 'outside'
            }
        }
    });

    // --------------------------------------------- anchor --------------------------------------------- //

    $(".anchor").click(function() {
        var id = '#' + $(this).attr("rel");
        $("html, body").animate({
            scrollTop: $(id).offset().top
        }, 600);
    });

    // --------------------------------------------- pageGoodsList --------------------------------------------- //

    $(".pageGoodsList").each(function() {
        $(".group:nth-child(5n)", this).addClass("groupFix");
    });

    // --------------------------------------------- tooltip --------------------------------------------- //

    $(".tooltip").tooltip({
        effect: 'slide'
    }).dynamic({
        bottom: {
            direction: 'down',
            bounce: true
        }
    });

});
