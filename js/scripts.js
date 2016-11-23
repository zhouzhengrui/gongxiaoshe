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
    var sliderImageLoad = [];
    $(".sliderBox img").each(function () {
        var sliderImage = $.Deferred();
        $(this).load(sliderImage.resolve);
        sliderImageLoad.push(sliderImage);
    });
    $.when.apply(null, sliderImageLoad).done(function () {
        $(".fontIconLoading").remove();
    });

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

    // --------------------------------------------- lazyload --------------------------------------------- //

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
                left: event.clientX - 25,
                top: event.clientY - 25
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

    // --------------------------------------------- cxSelect & selectUI --------------------------------------------- //

    $('#region').cxSelect({
        url: 'js/cxSelect/cityData.min.json',
        selects: ['province', 'city', 'area'],
        required: true
    });

    $(".select").selectmenu({
        classes: {
            "ui-selectmenu-button": "selectBox",
            "ui-selectmenu-text": "selectText",
            "ui-selectmenu-icon": "selectIcon",
            "ui-selectmenu-button-closed": "selectBoxClosed",
            "ui-selectmenu-button-open": "selectBoxOpen",
            "ui-selectmenu-menu": "selectMenu",
            "ui-selectmenu-open": "selectMenuOpen",
            "ui-state-active": "selectMenuActive"
        },
        icons: {
            button: "icon-arrow-1-down"
        },
        close: function(event, data) {
            $("#" + $(this).attr("id")).trigger("change");
            setTimeout(refreshMenu, 100);
        }
    });

    function refreshMenu() {
        $(".select").selectmenu("refresh");
    }

    // --------------------------------------------- jQueryUI --------------------------------------------- //

    $(".radiocheckbox").checkboxradio({
        classes: {
            "ui-checkboxradio-label": "radiocheckBox",
            "ui-checkboxradio-icon": "radiocheckIcon icon-checkmark-1",
            "ui-checkboxradio-checked": "radiocheckActive"
        }
    });

    $(".tooltip").tooltip({
        content: function() {
            return $(this).prop('title');
        },
        classes: {
            "ui-tooltip": "tooltipBox"
        },
        position: {
            my: "center bottom-20",
            at: "center top",
            using: function(position, feedback) {
                $(this).css(position);
                $("<div>")
                    .addClass("arrow")
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        },
        show: null,
        open: function(event, ui) {
            ui.tooltip.animate({
                top: ui.tooltip.position().top + 10
            }, "fast");
        }
    });

    $(".tabBox").tabs({
        event: 'mouseover',
        classes: {
            "ui-tabs-active": "current"
        }
    });

    $(".quantity").spinner({
        min: 1,
        max: 100,
        classes: {
            "ui-spinner": "spinnerBox",
            "ui-spinner-button": "spinnerButton",
            "ui-spinner-up": "spinnerButtonUp",
            "ui-spinner-down": "spinnerButtonDown"
        },
        icons: {
            up: "spinnerIcon icon-plus-1",
            down: "spinnerIcon icon-minus-1"
        },
        create: function(event, ui) {
            if ($(this).val() == 1) {
                $(this).parent().children(".ui-spinner-down").addClass('disabled');
            } else if ($(this).val() == 100) {
                $(this).parent().children(".ui-spinner-up").addClass('disabled');
            }
        },
        spin: function(event, ui) {
            if (ui.value == 1) {
                $(this).parent().children(".ui-spinner-down").addClass('disabled');
            } else if (ui.value == 100) {
                $(this).parent().children(".ui-spinner-up").addClass('disabled');
            } else {
                $(this).parent().children(".ui-spinner-down,.ui-spinner-up").removeClass('disabled')
            }
        },
        change: function(event, ui) {
            if ($(this).val() < 1) {
                $(this).val(1);
            } else if ($(this).val() > 100) {
                $(this).val(100);
            }
            if ($(this).val() == 1) {
                $(this).parent().children(".ui-spinner-down").addClass('disabled');
                $(this).parent().children(".ui-spinner-up").removeClass('disabled')
            } else if ($(this).val() == 100) {
                $(this).parent().children(".ui-spinner-up").addClass('disabled');
                $(this).parent().children(".ui-spinner-down").removeClass('disabled')
            } else {
                $(this).parent().children(".ui-spinner-down,.ui-spinner-up").removeClass('disabled')
            }
        }
    });

    // --------------------------------------------- goods image --------------------------------------------- //

    $(".zoomImage").elevateZoom({
        gallery: '.gallery',
        cursor: 'pointer',
        galleryActiveClass: 'current',
        constrainType: 'width',
        zoomWindowOffetx: 10,
        borderSize: 2,
        zoomWindowWidth: 416,
        zoomWindowHeight: 416,
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 500,
        lensFadeIn: 500,
        lensFadeOut: 500,
        borderColour: '#fff',
        loadingIcon: '../img/loading.gif'
    });

    $(".zoomImage").bind("click", function(e) {
        var ez = $('.zoomImage').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
    });

    $(".scrollable").scrollable();

    // --------------------------------------------- order --------------------------------------------- //

    $("ul.orderAddressList li").each(function () {
        $(this).hover(function () {
            $(".function", this).show();
        }, function () {
            $(".function", this).hide();
        });
    });

});
