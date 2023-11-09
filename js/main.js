$(function () {

    $('.header__menu-burger').on('click', function () {
        $('.header__menu-burger').removeClass('--active');
        $('.leftside__info').toggleClass('--active');
        $('.header__menu-nav').toggleClass('--active');
        $('.leftside__info-close').toggleClass('--active');
    });

    $('.leftside__info-close').on('click', function () {
        $('.header__menu-burger').toggleClass('--active');
        $('.leftside__info').removeClass('--active');
        $('.header__menu-nav').removeClass('--active');
        $('.leftside__info-close').removeClass('--active');
    });


    $('.header__content-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        prevArrow: $('.prevArrow-btn'),
        nextArrow: $('.nextArrow-btn'),
    });

    $('.projects__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        focusOnSelect: true,

        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                },

                breakpoint: 981,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                },
            },]
    });

});