"use strict";

$(function () {
  $('.count1').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'easeOutQuad',
      step: function step(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  $('.count2').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'easeOutQuad',
      step: function step(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  $('.count3').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4500,
      easing: 'easeOutQuad',
      step: function step(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
});