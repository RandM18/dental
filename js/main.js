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
});
