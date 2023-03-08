$(function () {
    const header = $(".header");
    $(window).scroll(function (e) {
        let pos = $(window).scrollTop();
        if (pos > 10) {
            header.addClass("scroll");
        } else {
            header.removeClass("scroll");
        }
    });

    const header_title = $(".header-title");
    const laptop = $(".laptop-inner");
    $(window).scroll(function (e) {
        let pos = $(window).scrollTop();
        console.log(pos)
        if (pos > 10) {
            header_title.addClass("scroll");
            laptop.addClass("scroll");
            if(pos < 300){
                laptop.css('top', `calc(50% + ${pos*0.65}px)`);
            }
        } else{
            header_title.removeClass("scroll");
            laptop.removeClass("scroll");
            laptop.css('top', `0px`);
        }
    });

    $("#form").on("submit", function (e) {
        e.preventDefault();
        $(this).hide();
        $(this)[0].reset();
        $("#thankyou").show();
    });
    $("#thankyou button").on("click", function (e) {
        e.preventDefault();
        $("#form").show();
        $("#thankyou").hide();
    });
});
