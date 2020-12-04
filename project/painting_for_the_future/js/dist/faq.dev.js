"use strict";

$(function () {
  $('.subapp .Subscription li').on('click', function (e) {
    e.preventDefault();
    var idx3 = $(this).index() - 1;
    $('.subapp .Subscription li p').css('display', 'none');
    $('.subapp .Subscription li p').eq(idx3).css('display', 'block');
  });
  $('.subapp .Child li').on('click', function (e) {
    e.preventDefault();
    var idx3 = $(this).index() - 1;
    $('.subapp .Child li p').css('display', 'none');
    $('.subapp .Child li p').eq(idx3).css('display', 'block');
  });
});