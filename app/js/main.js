
$(function () {
    $('.about-video-box').on('click', '.about-video-additional__poster', function () {
        var src = $(this).attr('src');
        $(this).parent().parent().parent().find('.about-video-main .about-video-main__poster').attr('src', src);
    });

    $('.reviews-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
    
    });
    
    $('.gallery-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });
    
});