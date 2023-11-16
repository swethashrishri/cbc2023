// js for image gallery //


$(document).ready(function(){
    $('.slider-container').slick({
        dots: true,
        arrows: true
    });

    $('.about-us .small-slider').slick({
        dots: true,
        arrows: true
    });

    $('.testimonial-slider').slick({
        dots: true,
        arrows: true
    });
});
$('.slider-container').slick({
    dots: true,
    arrows: true,
    adaptiveHeight: true // Adjusts slider height based on each slide's content
});
