jQuery(document).ready(function($) {
    console.log('object')

    $(".autoplay").each(function() {
        $(this).slick($(this).data());
    });

    // fixed menu
    (function($) {
        let menu = $('.fixed-main-menu');
        body = $('body,html');
        menuPosition = menu.offset().top;
        $(window).scroll(() => {
            let startpage = body.scrollTop();
            (startpage > menuPosition) ? (menu.addClass('fixed')) : (menu.removeClass('fixed'))
        });
    })($);
    // end fixed menu

    // load top
    (function($) {
        let up_btn = $("body .up");
        let body = $('body,html');
        up_btn.css({
            cursor: 'pointer'
        });
        up_btn.click(function() {
            $('html,body').animate({ scrollTop: 0 }, 1000);
        });
        $(window).scroll(function(event) {
            let startpage = body.scrollTop();
            if (startpage > 200) {
                up_btn.addClass('up-active');
            } else if (startpage < 200) {
                up_btn.removeClass('up-active');
            }
        });
    })($);
    // end load top

    // Effect accordion
    $(function() {
        $('.accordion .show-option').click(function(event) {
            event.preventDefault();
            $(this).parent().siblings().find('.fretboard').slideUp();
            $(this).parent().find('.fretboard').slideToggle();
        });
    });
    // end Effect accordion

    // Effect drop down
    (function($) {
        let box = $('body .inside');
        box.find('.drop-down').slideUp();
        $(document).mouseup(e => {
            if (!box.is(e.target) && box.has(e.target).length === 0) {
                box.find('.drop-down').slideUp();
            }
        });
        box.find('.command-button').on('click', function(event) {
            event.preventDefault();
            $(this).parent().siblings().find('.drop-down').slideUp();
            $(this).parent().find('.drop-down').slideToggle();
        });
    })($);
    // end Effect drop down

    // toggle button
    $(".toggle-tab").click(function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('toggle-visible');
        $('.toggle-content').toggleClass('visible');
    });

    // close button 
    $(".btn-close").click(function(event) {
        event.preventDefault();
        $(this).parents('.popup').toggleClass('visible');
    });

    // minicart
    $(".minicart .showcart ").click(function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).parent().find('.minicart-content').toggleClass('visible');
        $("html").toggleClass('open-minicart');
    });

    $(".minicart .btn-close").click(function(event) {
        event.preventDefault();
        $(this).parents('.minicart').toggleClass('active');
        $("html").toggleClass('open-minicart');
    });

    // footer mobile
    $(function() {
        $('.collapsible .collapsible-tab').click(function(event) {
            event.preventDefault();
            $(this).parents('.collapsible').toggleClass('active');
            $(this).parents('.collapsible').siblings().find('.collapsible-content').slideUp();
            $(this).parents('.collapsible').find('.collapsible-content').slideToggle();
        });
    });
});