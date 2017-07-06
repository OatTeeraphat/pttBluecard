document.createElement("picture");

$(document).foundation();

$(document).ready(function() {
var bw = get_browser();

    if (bw == 'msie' || bw == 'safari') {
       grayscale(document.querySelectorAll('div'));
       grayscale(document.querySelectorAll('body'));  
       grayscale(document.querySelectorAll('img')); 
    }



    
    $('.splashbtn').click(function() {
        $(this).parent('.splashscreen').fadeOut(200);
        $('body').removeClass('splash_open');
    });

    if ($('.load-more-content').length > 0) {
        $('.load-more-content').hide();


        $('.load-more').on('click', function() {
            $(this).siblings('.load-more-content').slideToggle();
            var loadmore = $('.load-more span').attr('class');
            if (loadmore == 'icon-home-arrow-up') {
                $('.load-more span').removeClass('icon-home-arrow-up').addClass('icon-about-arrow-down');
                $('.load-more span').addClass('addline');
                $('.load-more-content').removeClass('addline');
            } else {
                $('.load-more span').removeClass('icon-about-arrow-down').addClass('icon-home-arrow-up');
                $('.load-more span').removeClass('addline');
                $('.load-more-content').addClass('addline');
            }
            return false;
        });
    }

    $(".fullWidth").royalSlider({
        // options go here
        // as an example, enable keyboard arrows nav
        sliderDrag: false,
        sliderTouch: false,
        arrowsNav: true,
        loop: false,
        keyboardNavEnabled: true,
        controlsInside: false,
        imageScaleMode: 'fill',
        arrowsNavAutoHide: false,
        autoScaleSlider: false,
        autoScaleSliderWidth: 1280,
        autoScaleSliderHeight: 351,
        controlNavigation: 'bullets',
        thumbsFitInViewport: false,
        navigateByClick: true,
        startSlideId: 0,
        autoPlay: false,
        transitionType: 'move',
        globalCaption: true,
        deeplinking: {
            enabled: true,
            change: false
        }
    });

    var browser = get_browser();
    $('html').addClass(browser.toLowerCase());

    // Menu
    var browser_width = $(window).width();
    var menu_width;

    console.log(browser_width);

    if (browser_width < 481) {

        menu_width = browser_width + 'px';

        $('.nav-fixed').addClass('full-nav');

        $('.collapse-menu').css({
            'width': menu_width,
            'left': '-' + menu_width
        });

        $('.collapse-close').css('width', menu_width);

    } else {
        menu_width = '320px';
    }

    $('#btn-showmenu').click(function(e) {
        e.preventDefault();
        $('.collapse-menu').animate({ 'left': '0px' });
        $('.collapse-close').fadeIn();
        $('.exit-menu').fadeIn();
        $('#btn-showmenu').animate({ opacity: 0 });
        if (browser_width < 481) {
            $('.s-lang').addClass('ontop');
        }
        if (window.innerHeight > window.innerWidth) {
            $('body,html').css("overflow", "hidden");
            $('body').css("position", "fixed");
            /*$('body').bind('touchmove', function(e) {
                e.preventDefault()
            });*/
        }
    });

    $('#btn-hidemenu, .exit-menu').click(function(e) {
        e.preventDefault();
        $('.collapse-menu').animate({
            'left': '-' + menu_width
        }, {
            complete: function() {
                $('.collapse-main').animate({ 'left': '0' });
                $('.collapse-sub').animate({ 'left': menu_width });
            }
        });

        $('.collapse-close').fadeOut();
        $('.exit-menu').fadeOut();
        $('#btn-showmenu').animate({ opacity: 1 });
        if (browser_width < 481) {
            $('.s-lang').removeClass('ontop');
        }
        $("body,html").css("overflow", "visible");
        $('body').css("position", "relative");
        /*$('body').unbind('touchmove');*/
    });

    //press contactus&sitemapmodal then hide menu for avoid overlaying
    $('.contactus, .sitemapmodal').click(function(e) {
        $('.collapse-close').fadeOut();
        $('#btn-showmenu').animate({ opacity: 1 });
        $('.collapse-menu').animate({
            'left': '-' + menu_width
        });
    });

    $('.submenu').click(function(e) {
        e.preventDefault();
        var menu = $(this).attr('menu');
        $('.collapse-main').animate({ 'left': '-' + menu_width });
        $('.sub').css('display', 'none');
        console.log(menu);
        $('.collapse-sub #' + menu).css('display', 'block');
        $('.collapse-sub').css('visibility', 'visible').animate({ 'left': '0' });
    });

    $('.sub-back').click(function(e) {
        e.preventDefault();
        $('.collapse-main').animate({ 'left': '0' });
        $('.collapse-sub').animate({
            'left': menu_width
        }, {
            complete: function() {
                $('.sub').css('display', 'none');
            }
        });
    });

    // Collapse - About Rules Page
    $collapse_head = $('p.rules')
    $collapse_head.on('click', function() {
        if (!$(this).hasClass('active')) {
            // Hide Content
            $collapse_head.removeClass('active');
            $('p.rules + .list-content').css('display', 'none');
            // Scroll to heading
            $('html, body').animate({
                scrollTop: $(this).offset().top - $('.top-bar').height() - 10
            }, 500);
            // Show Content
            $(this).addClass('active');
            $(this).siblings('.list-content').slideDown(400);
        } else {
            // Hide Content
            $collapse_head.removeClass('active');
            $(this).siblings('.list-content').slideUp(400);
        }
    });

    // Make first collapse active
    $collapse_head.eq(0).addClass('active');
    $collapse_head.eq(0).siblings('.list-content').css('display', 'block');

    // <select> box styling
    // -------------------------------------------
    // Don't for get to include js/vendor/selectordie.min.js for that page
    // Add class="selectordie" on select box that need style
    if ($.fn.selectOrDie) {
        $('.selectordie').selectOrDie({
            size: 5
                /*,
                      onChange: function() {
                        $(this).css('color', '#000');
                      }*/
        });
    }
    /*
      $(function() {
        var flag = 1;
        $('.nav-toggle').on('click', function() {
            $('.main-nav').toggleClass('open');
            / * disable scrolling ************* /
            if (flag < 1) {
                $("body,html").css("overflow", "visible");
                $('body').unbind('touchmove');
                flag = 1;
            } else {
                $('body,html').css("overflow", "hidden");
                $('body').bind('touchmove', function(e) {
                    e.preventDefault()
                });
                flag = 0;
            }
        });
      });
    */
    /*
      $(function() {
        var flag = 1;
        $('#btn-showmenu').on('click', function() {
            $('.collapse-menu').toggleClass('open');
            /* disable scrolling ************* /
            if (flag < 1) {
                $("body,html").css("overflow", "visible");
                $('body').unbind('touchmove');
                flag = 1;
            } else {
                //Detect viewport orientation
                if (window.innerHeight > window.innerWidth) {
                    $('body,html').css("overflow", "hidden");
                    $('body').bind('touchmove', function(e) {
                        e.preventDefault()
                    });
                }

                flag = 0;
            }
        });
    });*/

    $('.menu-icon').click(function(e) {
        e.preventDefault();
        $('.hidden-logged-in').fadeToggle();
        $('.menu-icon').toggleClass('open');
    });

    var callContact = null;

    if (navigator.userAgent.indexOf("Android") != -1) {
        callContact = '<a href="tel:1365"><i class="icon-home-call"></i><span>1365</span></a>';
    } else if (navigator.userAgent.indexOf("iPhone") != -1) {
        callContact = '<a href="callto:1365"><i class="icon-home-call"></i><span>1365</span></a>';
    } else {
        callContact = '<i class="icon-home-call"></i><span>1365</span>';
    }

    $(".contact-tel").html(callContact);

    $('.tel-edit-modal').click(function(e) {
        e.preventDefault();
        $(".tel-edit-input").html("<input class=\"textbox-fix\" type=\"text\" name=\"telephone\" placeholder=\"เบอร์โทรศัพท์ใหม่\">");
    });

    $('.email-edit-modal').click(function(e) {
        e.preventDefault();
        $(".email-edit-input").html("<input class=\"textbox-fix\" type=\"text\" name=\"email\" placeholder=\"อีเมล์ใหม่\">");
    });


});
/*
$(function() {
  $( document ).tooltip({
    position: {
    my: "left top-85",
    at: "right-65 bottom",
    using: function( position, feedback ) {
      $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
  });
});
*/
function get_browser() {
    var ua = navigator.userAgent,
        tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'msie';
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) {
            return 'opera'
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return M[0];
}
