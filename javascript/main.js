jQuery(document).ready(function($) {
    console.log('object')

    $(".autoplay").each(function() {
        $(this).slick($(this).data());
    });

    // fixed menu
    // (function($) {
    //     let menu = $('.fixed-main-menu');
    //     body = $('body,html');
    //     menuPosition = menu.offset().top;
    //     $(window).scroll(() => {
    //         let startpage = body.scrollTop();
    //         (startpage > menuPosition) ? (menu.addClass('fixed')) : (menu.removeClass('fixed'))
    //     });
    // })($);
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

    // action convert content page shipping policy
    $(document).ready(function() {
        let text_a = "Chính sách thanh toán";
        let text_b = "Chính sách vận chuyển";
        let text_c = "Chính sách đổi trả";
        let text_d = "Chính sách bảo mật";
        let text_e = "Hướng dẫn chọn size";
        let path = $(".page-policy").find("#box-content");
        $(".page-policy").find("#box-content").load("policy-payment.html");
        $(".page-policy").on('click', '.toolbar-policy .item', function(e) {
            e.preventDefault();
            $(".page-policy").find(".toolbar-policy .item").removeClass("active");
            $(this).toggleClass("active");
            let textpc = $(this).attr('alt');
            switch (textpc) {
                case text_a:
                    path.load("policy-payment.html");
                    break;
                case text_b:
                    path.load("policy-shipping.html");
                    break;
                case text_c:
                    path.load("policy-payment.html");
                    break;
                case text_d:
                    path.load("policy-payment.html");
                    break;
                case text_e:
                    path.load("policy-payment.html");
                    break;
                default:
                    path.load("policy-payment.html");
                    break;
            }
        })
        $('#policy').change(function() {
            let text = $('#policy').val();
            switch (text) {
                case text_a:
                    path.load("policy-payment.html");
                    break;
                case text_b:
                    path.load("policy-shipping.html");
                    break;
                case text_c:
                    path.load("policy-payment.html");
                    break;
                case text_d:
                    path.load("policy-payment.html");
                    break;
                case text_e:
                    path.load("policy-payment.html");
                    break;
                default:
                    path.load("policy-payment.html");
                    break;
            }
        });
    });
    //end

    // action convert account 
    $(document).ready(function() {
        let text_a = "THÔNG TIN TÀI KHOẢN";
        let text_b = "THEO DÕI ĐƠN HÀNG";
        let text_c = "SẢN PHẨM YÊU THÍCH";
        let text_d = "GỬI GÓP Ý";
        let path = $(".page-account").find("#box-content");
        $(".page-account").find("#box-content").load("info-account.html");
        $(".page-account").on('click', '.menu-account .item', function(e) {
            e.preventDefault();
            $(".page-account").find(".menu-account .item").removeClass("active");
            $(this).toggleClass("active");
            let textpc = $(this).attr('alt');
            switch (textpc) {
                case text_a:
                    path.load("info-account.html");
                    break;
                case text_b:
                    path.load("order-tracking-list.html");
                    break;
                case text_c:
                    path.load("my-wishlist.html");
                    break;
                case text_d:
                    path.load("send-comment.html");
                    break;
                default:
                    path.load("info-account.html");
                    break;
            }
        })
        $('#account').change(function() {
            let text = $('#account').val();
            switch (text) {
                case text_a:
                    path.load("info-account.html");
                    break;
                case text_b:
                    path.load("order-tracking-list.html");
                    break;
                case text_c:
                    path.load("my-wishlist.html");
                    break;
                case text_d:
                    path.load("send-comment.html");
                    break;
                default:
                    path.load("info-account.html");
                    break;
            }
        });
    });
    // load popup
    $(document).ready(function() {
            // $(".modals-wrapper.modals-popups").load("popup-signin.html");
            // $(".modals-wrapper.modals-popups").load("reset-password.html");
            // $(".modals-wrapper.modals-popups").load("inform-change-password.html");
            // $(".modals-wrapper.modals-popups").load("registration.html");
            $(".modals-wrapper.modals-popups").load("account-verification.html");
        })
        //end

    //toggle popup
    $(document).ready(function() {
            $(".modals-wrapper").on('click', '.action-close', function(e) {
                $(".modals-wrapper").find(".modal-popup").removeClass("_show");
            })
        })
        //end
});
// show pass
function showPass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
// end

// show pass
function showPass2() {
    var y = document.getElementById("pass2");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
}
// end