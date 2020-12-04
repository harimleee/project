"use strict";

$(function () {
  $(".to_p").slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [{
      breakpoint: 1050,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
});