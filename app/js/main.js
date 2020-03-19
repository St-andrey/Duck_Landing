
$(document).ready(function () {

    var controller = new ScrollMagic.Controller;

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