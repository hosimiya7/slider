$('.slider').slick({
    arrows:false,
    asNavFor:'.thumb',
    autoplay: true,
    autoplaySpeed:3000,
    dots:true,

});
$('.thumb').slick({
    asNavFor:'.slider',
    arrows:false,
    focusOnSelect: true,
    slidesToShow:3,
    slidesToScroll:1,
    centerMode: true,
});

