jQuery(document).ready(function($) {
	$(".autoplay").each(function() {
		$(this).slick($(this).data());
	});

	new WOW().init();

	// fixed menu
	(function ($) {
		let	menu = $('.fixed-main-menu');
			body = $('body,html');
			menuPosition = menu.offset().top;
		$(window).scroll( () => {
			let startpage = body.scrollTop();
			(startpage > menuPosition) ? (menu.addClass('fixed')) : (menu.removeClass('fixed'))
		});	
	})($);
	// end fixed menu

	// load top
	(function ($) {
		let up_btn = $("body .up");
		let body = $('body,html');
		up_btn.css({
			cursor: 'pointer'
		});
		up_btn.click(function() {
			$('html,body').animate({scrollTop: 0}, 1000);
		});
		$(window).scroll(function(event){
			let startpage = body.scrollTop();
			if(startpage > 200)
			{
				up_btn.addClass('up-active');		
			}
			else if(startpage < 200){
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
			($(this).parent().find('.show').text() == '-') ? 
			($(this).parent().find('.show').removeClass('active').text('+')) : 
			($(this).parent().find('.show').addClass('active').text('-'))
		});
	});
	// end Effect accordion

	// Effect drop down
	(function ($) {
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

	// tabs
	$(function() {
		$(".magic-tabs  ul li").on('click', function() {
			var container_tab = $(this).closest('.cover-tab');
			container_tab.find('.tab-content .content').removeClass('active-tab-content');
			$(this).siblings().removeClass("action-tab-btn");
			$(this).addClass('action-tab-btn');
			container_tab.find('.tab-content .content').eq($(this).index()).addClass('active-tab-content');
		});	
	});
	// end tabs
});