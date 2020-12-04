"use strict";

$(function () {
  //start    
  $('header').load('common_inc.html header');
  $('.popup_box').load('common_inc.html .popup_box');
  $('.popup_box2').load('common_inc.html .popup_box2');
  $('.popup_box3').load('common_inc.html .popup_box3');
  $('.popup_box4').load('common_inc.html .popup_box4');
  $('.popup_box5').load('common_inc.html .popup_box5', head);
  $('footer').load('common_inc.html footer');

  function head() {
    $('.menu-trigger').on('click', function (e) {
      e.preventDefault();
      console.log('a');

      if ($('.list nav').css('display') == 'none') {
        $('.list nav').css('display', 'block');
        $('.menu-trigger').addClass('active');
      } else {
        $('.list nav').css('display', 'none');
        $('.menu-trigger').removeClass('active');
      }
    });
    $('.icons nav a').eq(0).on('click', function () {
      $('.popup_box').css('display', 'block');
    });
    $('.x').on('click', function () {
      $('.popup_box').css('display', 'none');
      $('.popup_box2').css('display', 'none');
      $('.popup_box3').css('display', 'none');
      $('.popup_box4').css('display', 'none');
      $('.popup_box5').css('display', 'none');
    });
    $('.first a').on('click', function () {
      $('.popup_box2').css('display', 'block');
      $('.popup_box').css('display', 'none');
    });
    $('.icons nav a').eq(1).on('click', function () {
      $('.popup_box4').css('display', 'block');
    });
    $('.btn5_left').on('click', function () {
      $('.popup_box5').css('display', 'none');
    });
    $('.btn5_right').on('click', function () {
      $('.popup_box5').css('display', 'none');
    });
  }
});