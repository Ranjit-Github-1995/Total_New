//Submenu
jQuery(".navbar-nav li .clickD").click(function() {
    if (jQuery(this).parent('li').parent('ul').hasClass('sub-menu')) {
        jQuery(this).toggleClass("toggled");
    } else if (jQuery(this).hasClass("toggled")) {
        jQuery(this).removeClass('toggled');
    } else if (jQuery('.navbar-nav li .clickD').hasClass('toggled')) {
        jQuery('.navbar-nav li .clickD').removeClass('toggled');
        jQuery(this).toggleClass("toggled");
    } else {
        jQuery(this).toggleClass("toggled");
    }
});
//Mobile Menu 
$(document).ready(function() {
    $(".navbar-toggler").click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('change');
        $('body').toggleClass('_overHidden');
        if ($('.navbar-collapse').hasClass("show")) {
            $('.navbar-collapse').removeClass("show");
        } else {
            $('.navbar-collapse').addClass("show");
        }
    });
    $(document).on('click', function(e) {
        var menu_opened = $('.navbar-collapse').hasClass('show');
        if (!$(e.target).closest('.navbar-collapse').length &&
            !$(e.target).is('.navbar-collapse') &&
            menu_opened === true) {
            // $('.navbar-collapse').collapse('toggle');
            $('.navbar-collapse').removeClass('show');
            $('.navbar-toggler').removeClass('change');
            $('body').removeClass('_overHidden');
        }
    });
});
//menu fixed js code
jQuery(window).scroll(function() {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
        jQuery('._header').addClass('_menu_fixed animated fadeInDown');
    } else {
        jQuery('._header').removeClass('_menu_fixed animated fadeInDown');
    }
});



//Wow js 
new WOW().init();



//menu fixed js code
jQuery(window).scroll(function() {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
        jQuery('._header').addClass('_menu_fixed animated fadeInDown');
    } else {
        jQuery('._header').removeClass('_menu_fixed animated fadeInDown');
    }
});





// Owlcar example 1 start
var owl = $('#bannerSlider');
owl.owlCarousel({
    loop: true,
    nav: true,
    navText: ["prev..", "next.."],
    margin: 15,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 1
        },
        1200: {
            items: 1,
            slideBy: 1
        }
    }
});
// Owlcar example 1 end

// Owlcar example 1 start
var owl = $('#owl-demo-2');
owl.owlCarousel({
    loop: true,
    nav: true,
    center: true,
    autoplay: true,
    navText: ["prev..", "next.."],
    margin: 15,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        960: {
            items: 3
        },
        1200: {
            items: 3,
            slideBy: 1
        }
    }
});
// Owlcar example 1 end

