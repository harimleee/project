"use strict";

$(function () {
  $(".three_img").slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  var two = $(".two");
  $(".v_btn").on('click', function () {
    window.scrollTo(0, two.offset().top);
  });
});