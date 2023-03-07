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
