"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('nav');
  var navEl = document.querySelectorAll('nav a');
  var secEl = document.querySelectorAll('section');
  var secArr = [];
  setTimeout(function () {
    secEl.forEach(function (sl, idx) {
      secArr.push(sl.offsetTop);
    });
  }, 500);
  window.scrollTo(0, 0);
  navEl.forEach(function (sl, idx) {
    sl.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo(0, secArr[idx]);
    });
  });
  var winH = window.innerHeight / 2;
  window.addEventListener('scroll', function () {
    secArr.forEach(function (el, idx) {
      if (window.scrollY >= secArr[idx] - winH) {
        navEl.forEach(function (a) {
          a.classList.remove('active');
        });
        navEl[idx].classList.add('active');
      }
    }); //scroll end
  });
  var body = document.querySelector('body');
  setTimeout(function () {
    body.classList.add('active');
  }, 10);
  $(document).ready(function () {
    $('.bubble').addClass('active');
    $('.bubble2').addClass('active');
    $('.bubble3').addClass('active');
    $('.bubble4').addClass('active');
    $('.text').addClass('active');
    $('.img').addClass('active');
    $('nav').fadeToggle(3800);
    $('h1').css('font-weight', '600');
  });
  var prevScrollTop = 0;
  var nowScrollTop = 0;

  function wheelDelta() {
    return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
  }

  ;
  var color = {
    r: 243,
    g: 239,
    b: 161
  };
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > $('.text').offset().top) {
      $('.text2').css('transform', 'translate(0,0)').css('transition', '1.5s').css('opacity', '1');
    } else {
      $('.text2').css('transform', 'translate(0,200%)').css('transition', '1.5s').css('opacity', '0');
    }

    ;

    if ($(this).scrollTop() > $('.skill').offset().top) {
      $('.skill_text').css('transform', 'translate(0,0)').css('transition', '1.5s');
      $('canvas').css('overflow', 'visible').css('transition', '1.5s');
    } else {
      $('.skill_text').css('transform', 'translate(0,200%)').css('transition', '1.5s');
      $('canvas').css('overflow', 'hidden').css('transition', '1.5s');
    }

    if ($(this).scrollTop() > $('#graph').offset().top) {
      $('.skill_text2').css('opacity', '1').css('transition', '1.5s');
    } else {
      $('.skill_text2').css('opacity', '0').css('transition', '1.5s');
    }

    if ($(this).scrollTop() > $('.click_text').offset().top) {
      $('.click_text').css('transform', 'translate(0,0)').css('transition', '1.5s');
    } else {
      $('.click_text').css('transform', 'translate(100%,0)').css('transition', '1.5s');
    }

    nowScrollTop = $(this).scrollTop();

    if (wheelDelta() == 'down') {
      $('nav').slideUp();
      $('.img').css('top', '30%').css('transition', '1s');
      $('.bubble').css('top', '25%').css('transition', '1s');
      $('.bubble2').css('top', '15%').css('transition', '1s');
      $('.bubble3').css('top', '-10%').css('transition', '1s');
      $('.bubble4').css('top', '-15%').css('transition', '1s');

      if (secArr[1] < nowScrollTop && secArr[2] > nowScrollTop) {
        if (color.r < 253) color.r += 2;
        if (color.g > 215) color.g -= 2;
        if (color.b > 129) color.b -= 2;
      } else if (secArr[2] + 1000 < nowScrollTop) {
        if (color.r > 243) color.r -= 1;
        if (color.g < 239) color.g += 1;
        if (color.b < 161) color.b += 1;
      }
    }

    if (wheelDelta() == 'up') {
      $('nav').slideDown();
      $('.img').css('top', '40%').css('transition', '1s');
      $('.bubble').css('top', '40%').css('transition', '1s');
      $('.bubble2').css('top', '35%').css('transition', '1s');
      $('.bubble3').css('top', '10%').css('transition', '1s');
      $('.bubble4').css('top', '15%').css('transition', '1s');

      if (secArr[1] > nowScrollTop) {
        if (color.r > 243) color.r -= 1;
        if (color.g < 239) color.g += 1;
        if (color.b < 161) color.b += 1;
      } else if (secArr[3] > nowScrollTop) {
        if (color.r < 253) color.r += 0.5;
        if (color.g > 215) color.g -= 0.5;
        if (color.b > 129) color.b -= 0.5;
      }
    }

    prevScrollTop = nowScrollTop;
    $('.background').css({
      backgroundColor: "rgb(" + color.r + "," + color.g + "," + color.b + ")"
    });
  });
  var canvas = document.querySelector('#graph');
  var ctx = canvas.getContext('2d');
  var cw = canvas.width;
  var ch = canvas.height;
  ctx.font = 'bold 190px Oswald';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Ps', cw / 8, ch / 1.95);
  ctx.fillText('CSS', cw - cw / 2.6, ch / 1.95);
  ctx.fillText('JS', cw - cw / 7, ch / 1.95);
  ctx.font = 'bold 140px Oswald';
  ctx.fillText('HTML', cw / 2.7, ch / 1.95);

  function draw(x, y, r, pst, end, color) {
    pst++;
    ctx.beginPath();
    ctx.lineWidth = 30;
    ctx.strokeStyle = color;
    ctx.arc(x, y, r, -Math.PI / 2, Math.PI / 180 * pst * 3.6 - Math.PI / 2, false);
    ctx.stroke();

    if (pst <= end) {
      setTimeout(function () {
        draw(x, y, r, pst, end, color);
      }, 20);
    }
  }

  draw(cw / 8, ch / 2, ch / 4, 0, 80, "#008ed8");
  draw(cw / 2.7, ch / 2, ch / 4, 0, 70, "#f35825");
  draw(cw - cw / 2.6, ch / 2, ch / 4, 0, 70, "#007bc9");
  draw(cw - cw / 7, ch / 2, ch / 4, 0, 60, "#f78224");
  var canvas2 = document.querySelector('#can_bubble'),
      ctx2 = canvas2.getContext('2d'),
      x = Math.random(),
      y = 1000; // x,y,반지름 변경
  // x랑 반지름은 랜덤하게 y는 1000(화면 바닥)부터 0(화면 상단)으로 -

  function draw2() {
    ctx2.beginPath();
    ctx2.lineWidth = 0.4;
    ctx2.strokeStyle = "#666ccd";
    ctx2.arc(100, y, 100, 0, 2 * Math.PI);
    ctx2.stroke();
  }

  function moveTo() {
    y += -3; //원크기마다 속도도 다르게(작은거는 빨리 큰거는 느리게), 스크롤이 빠르면 속도도 증가

    draw2();
  }

  function run() {
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    moveTo();
    window.requestAnimationFrame(run);
  }

  draw2();
  run(); // ctx2.beginPath();
  // ctx2.arc(500, 10, 20, 0, 2 * Math.PI);
  // ctx2.stroke();
  // ctx2.closePath();
  // ctx2.beginPath();
  // ctx2.arc(1000, 300, 50, 0, 2 * Math.PI);
  // ctx2.stroke();
  // ctx2.closePath();
});