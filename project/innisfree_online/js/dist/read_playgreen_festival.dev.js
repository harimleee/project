"use strict";

$(function () {
  $(".three").slick({
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }]
  });
});