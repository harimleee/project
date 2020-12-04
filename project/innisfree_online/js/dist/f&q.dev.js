"use strict";

$(function () {
  $('.nav p').on('click', function () {
    var idx2 = $(this).index();
    $('.nav p').removeClass('active');
    $('.nav p').eq(idx2).addClass('active');
    $('.nav_text div').removeClass('active');
    $('.nav_text div').eq(idx2).addClass('active');
  });
  $('.nav_text div').eq(0).find('ul li').on('click', function () {
    var idx3 = $(this).index();
    $('ul li p').removeClass('active');
    $('ul li p').eq(idx3).addClass('active');
  });

  if (localStorage.product == '공지사항') {
    $('.nav p').eq(0).trigger('click');
  }

  if (localStorage.product == '1:1상담') {
    $('.nav p').eq(1).trigger('click');
  }

  if (localStorage.product == '창업안내') {
    $('.nav p').eq(2).trigger('click');
  }
});