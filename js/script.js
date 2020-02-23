$(document).ready(function () {
    var nav = $('.navbar');
    $('.nav-link').css('color', '#3a3a3a')
    $('.nav-social i').css("color", "#fff");
    nav.addClass('fixed-top')

    $('.to-top').click(function () {
        $('html').animate({
            scrollTop:0
        },1000)

    })

    $('.navbar-nav .nav-link,.down-icon').click(function (e) {
        e.preventDefault()
        $('.nav-item').removeClass('link-active')
        $('.nav-link').css('color', '#3a3a3a')
        $(this).parent().addClass('link-active')
        $(this).css('color', '#fff')
        $('.scroll-down').removeClass('link-active')
        var id = $(this).attr('href')
        var target = $(id).offset().top - 60;
        $('html, body').animate({
            scrollTop: target
        }, 1000)
    })
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        $('.nav-item .nav-link').each(function () {
            var id = $(this).attr('href');
            var selector = $(id).offset().top - 100;
            if (scroll >= selector) {
                $('.nav-item').removeClass('link-active')
                $('.nav-link').css('color', '#3a3a3a')
                $(this).css('color', '#fff')
                $(this).parent().addClass('link-active')
            }
        })
    })
    $('.feature-w').click(function () {
        var answer = $(this).next();
        $(this).next().slideToggle();
        $('.feature-w').next().not(answer).slideUp()

    })
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});