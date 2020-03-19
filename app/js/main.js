
$(document).ready(function () {

    var controller = new ScrollMagic.Controller;

    //parallax section animated
    var parallaxDuckling = new ScrollMagic.Scene({
        triggerElement: '.parallax-wrapper',
        triggerHook: 1,
        duration: '200%'
    })
        .setTween(TweenMax.from('.parallax-bg', 1, {y: '-35%', ease:Power0.easeNone}))
        .addTo(controller);

    //subsribe section animated
    var fixedHeaderBar = new ScrollMagic.Scene({
        triggerElement: '#subscribe'
    })
        .setClassToggle('#subscribe', 'fade-in')
        .addTo(controller);




    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        vertical: true,

    });

});