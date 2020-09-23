$(function () {
    $(".menu-trigger").click(function () {
        $("nav, .menu-trigger.after").toggle();
    });

    $('.write a').on('click', function () {
        $('.popup').show();
    });
    $('.popup .close').on('click', function () {
        $('.popup').hide();
    });

});
