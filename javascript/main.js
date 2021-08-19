jQuery(document).ready(function($) {
    $(".autoplay").each(function() {
        $(this).slick($(this).data());
    });

    $(".select2").each(function() {
        $(this).select2();
    });

    // fixed menu
    (function($) {
        let menu = $('.fixed-main-menu');
        body = $('body,html');
        menuPosition = menu.offset().top;
		let positionPage = 0;
        $(window).scroll(() => {
            let startpage = body.scrollTop();
            (startpage > menuPosition) ? (menu.addClass('fixed')) : (menu.removeClass('fixed'));
			if(positionPage < startpage) {
				menu.addClass('scrollDown').removeClass('scrollUp');
			} else if(positionPage > startpage) {
				menu.addClass('scrollUp').removeClass('scrollDown');
			}
			positionPage = startpage;
        });
    })($);
    // end fixed menu

    //convert tab
    $(function() {
        $(".tabcontent").hide();
        $(".tabcontent:first").show();
        $(body).find(".tablinks").each(function() {
            $(this).click(function(e) {
                e.preventDefault();
                $(body).find(".tablinks").removeClass("active");
                $(this).addClass("active");
                $(".tabcontent").hide();
                var activeTab = $(this).attr("electronic");        
                $("#" + activeTab).fadeIn(); 
            });
        })
    });
    // end

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
            $(this).parent().find('.fretboard').slideUp();
            $(this).parent().find('.fretboard').slideToggle();
        });
    });
    // end Effect accordion

    // Effect dropdown list
    $(function() {
        $('.dropdown .show-option').click(function(event) {
            event.preventDefault();
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

    // spinner quantity
    (function($) {
        $('.quantity').each(function() {
            let spinner = $(this),
                input = $('.quantity input[type="number"]'),
                btnUp = $('.quantity .quantity-up'),
                btnDown = $('.quantity .quantity-down'),
                min = input.attr('min'),
                max = input.attr('max');
            let newVal;
            btnUp.click(function() {
                let oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    newVal = oldValue;
                } else {
                    newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.click(function() {
                let oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    newVal = oldValue;
                } else {
                    newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });
    });
    //end

    //toggle popup
    $(document).ready(function() {
		$(".modals-wrapper").on('click', '.action-close', function(e) {
			$(".modals-wrapper").find(".modal-popup").removeClass("_show");
		})
	})
	//end

    // toggle button
    $(".toggle-tab").click(function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('toggle-visible');
        $(this).parent().find('.toggle-content').toggleClass('visible');
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
            $(this).parents('.collapsible').find('.collapsible-content').slideToggle();
        });
    });

    // nav-toggle
    $(".nav-toggle").click(function(event) {
        event.preventDefault();
        $("html").toggleClass('nav-open');
    });

    $(".menu-close").click(function(event) {
        event.preventDefault();
        $("html").removeClass('nav-open');
    });

    // menu mobile collapse
    $(".nav-mobile .collapse").click(function(event) {
        event.preventDefault();
        $(this).parent().find('> .sub-menu').slideToggle();
    });
});

$(".convert-type").each(function() {
	$(this).click(function() {
		var input = $($(this).next());
		if (input.attr("type") == "password") {
			input.attr("type", "text");
			$(this).val("HIDE");
		} else {
			input.attr("type", "password");
			$(this).val("SHOW");
		}
	});
})
// end