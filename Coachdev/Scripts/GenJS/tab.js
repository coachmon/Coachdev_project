$(function () {

    $('.hide').click('on', function () {
        $('.accordion-demo').slideToggle('fast');
    });

    $('.tabs').children().click(function () {
        var index = $('.tabs').children().index(this);
        $('.tabs-content').children().hide().eq(index).show();
        $('.tabs').children().removeClass('active');
        $(this).addClass('active');
    });

});