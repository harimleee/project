"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body');
  var menu = document.querySelectorAll('nav a');
  setTimeout(function () {
    body.classList.add('active');
  }, 10); // menu[2].addEventListener('click',function(e){
  //     e.preventDefault();
  //     body.classList.remove('active');
  //     setTimeout(function(){
  //         location.href = menu[1].href;
  //     },1000);
  // });

  menu[1].addEventListener('click', function (e) {
    e.preventDefault();
    body.classList.remove('active');
    setTimeout(function () {
      location.href = menu[1].href;
    }, 1000);
  });
  menu[0].addEventListener('click', function (e) {
    e.preventDefault();
    body.classList.remove('active');
    setTimeout(function () {
      location.href = menu[0].href;
    }, 1000);
  });
  var asideEl = document.querySelector('aside');
  console.log(asideEl);
  asideEl.addEventListener('click', function () {
    window.scrollTo({
      left: 0,
      top: 0
    });
  });
  window.addEventListener('scroll', function () {
    if (this.scrollY < window.innerHeight) {
      asideEl.style.display = "none";
    } else {
      asideEl.style.display = "block";
    }
  });
  setTimeout(function () {
    $('h1').addClass('active');
  }, 150);
  setTimeout(function () {
    $('img').addClass('active');
  }, 680);
  setTimeout(function () {
    $('nav').slideToggle(1000);
  }, 1000);
  var prevScrollTop = 0;
  var nowScrollTop = 0;

  function wheelDelta() {
    return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
  }

  ;
  $(window).on('scroll', function () {
    // console.log($(this).scrollTop());
    nowScrollTop = $(this).scrollTop();

    if (wheelDelta() == 'down') {
      $('nav').css('display', 'none');
    }

    if (wheelDelta() == 'up') {
      $('h1').css('color', 'rgba(242,237,146,1)').css('transform', 'translate(0,0)');
      $('nav').css('display', 'block');
      $('.main > img').css('width', '35%').css('transition', '.8s');
    }

    prevScrollTop = nowScrollTop;

    if ($(this).scrollTop() > $('h1').offset().top) {
      $('h1').css('color', 'rgba(242,237,146,0)').css('transform', 'translate(0,70%)');
      $('.main > img').css('width', '28%').css('transition', '1s');
      $('.main > p').css('transform', 'translate(0,0)').css('transition', '2s').css('opacity', '1');
    } else {
      $('h1').css('color', 'rgba(242,237,146,1)').css('transform', 'translate(0,0%)');
      $('.main > img').css('width', '35%').css('transition', '1s');
      $('.main > p').css('transform', 'translate(0,100%)').css('transition', '1s').css('opacity', '0');
    }

    ;

    if ($(this).scrollTop() > $('.main p').offset().top) {
      $('.site_map').css('transform', 'translate(0,0)').css('transition', '1.5s').css('opacity', '1');
    } else {
      $('.site_map').css('transform', 'translate(0,100%)').css('transition', '1s').css('opacity', '0');
    }

    ;

    if ($(this).scrollTop() > $('.site_map').offset().top) {
      $('.reactive_web').css('transform', 'translate(0,0)').css('transition', '1.5s').css('opacity', '1');
    } else {
      $('.reactive_web').css('transform', 'translate(0,100%)').css('transition', '1s').css('opacity', '0');
    }

    ;

    if ($(this).scrollTop() > $('.reactive_web').offset().top) {
      $('.suggections').css('transform', 'translate(0,0)').css('transition', '1.2s').css('opacity', '1');
      $('.suggections .first').css('transform', 'translate(0,0)').css('transition', '1.2s').css('opacity', '1');
    } else {
      $('.suggections').css('transform', 'translate(0,10%)').css('transition', '1.2s').css('opacity', '0');
      $('.suggections .first').css('transform', 'translate(0,50%)').css('transition', '1.2s').css('opacity', '0');
    }

    ;

    if ($(this).scrollTop() > $('.first img').offset().top) {
      $('.suggections .second').css('transform', 'translate(0,0)').css('transition', '1.5s').css('opacity', '1');
    } else {
      $('.suggections .second').css('transform', 'translate(0,50%)').css('transition', '1s').css('opacity', '0');
    }

    ;

    if ($(this).scrollTop() > $('.second img').offset().top) {
      $('.suggections .third').css('transform', 'translate(0,0)').css('transition', '1.5s').css('opacity', '1');
    } else {
      $('.suggections .third').css('transform', 'translate(0,50%)').css('transition', '1s').css('opacity', '0');
    }

    ;

    if ($(this).scrollTop() > $('.third img').offset().top) {
      $('.used').css('transform', 'translate(0,0)').css('transition', '1.8s').css('opacity', '1');
    } else {
      $('.used').css('transform', 'translate(0,2%)').css('transition', '1s').css('opacity', '0');
    }

    ;
  });

  function bubble() {
    var canvas = document.querySelector('#can_bubble');
    var ctx = canvas.getContext('2d');
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);
    var cw = canvas.width;
    var ch = canvas.height;

    function drawCircle(y) {
      this.x = Math.random() * cw, this.y = Math.random() * ch + 300, this.speed = Math.random() * 5 + 4, this.r = Math.random() * 50 + 20;
    }

    drawCircle.prototype = {
      update: function update() {
        this.y -= this.speed;
        if (this.y + this.r < 0) this.y = ch;
      }
    };
    var cirArr = [];

    for (var i = 0; i < 10; i++) {
      cirArr.push(new drawCircle(0));
    }

    function draw() {
      requestAnimationFrame(draw);
      ctx.clearRect(0, 0, cw, ch);

      for (var i = 0; i < 10; i++) {
        cirArr[i];
        ctx.beginPath();
        ctx.strokeStyle = ' #fff';
        ctx.lineWidth = 0.4;
        ctx.arc(cirArr[i].x, cirArr[i].y, cirArr[i].r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.globalAlpha = 0.8;
        cirArr[i].update();
      }
    }

    draw();
  }

  bubble();
  var mql = window.matchMedia("screen and (max-width: 1024px)");

  if (mql.matches) {
    var _bubble = function _bubble() {
      var canvas = document.querySelector('#can_bubble');
      var ctx = canvas.getContext('2d');
      canvas.setAttribute('width', window.innerWidth);
      canvas.setAttribute('height', window.innerHeight);
      var cw = canvas.width;
      var ch = canvas.height;

      function drawCircle(y) {
        this.x = Math.random() * cw, this.y = Math.random() * ch + 300, this.speed = Math.random() * 5 + 4, this.r = Math.random() * 40 + 20;
      }

      drawCircle.prototype = {
        update: function update() {
          this.y -= this.speed;
          if (this.y + this.r < 0) this.y = ch;
        }
      };
      var cirArr = [];

      for (var i = 0; i < 10; i++) {
        cirArr.push(new drawCircle(0));
      }

      function draw() {
        requestAnimationFrame(draw);
        ctx.clearRect(0, 0, cw, ch);

        for (var i = 0; i < 10; i++) {
          cirArr[i];
          ctx.beginPath();
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 0.4;
          ctx.arc(cirArr[i].x, cirArr[i].y, cirArr[i].r, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.globalAlpha = 0.8;
          cirArr[i].update();
        }
      }

      draw();
    };

    _bubble();

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > $('h1').offset().top) {
        $('h1').css('color', 'rgba(242,237,146,0)').css('transform', 'translate(0,70%)');
        $('.main > img').css('width', '40%').css('transition', '1s');
        $('.main > p').css('transform', 'translate(0,0)').css('transition', '2s').css('opacity', '1');
      } else {
        $('h1').css('color', 'rgba(242,237,146,1)').css('transform', 'translate(0,0%)');
        $('.main > img').css('width', '50%').css('transition', '1s');
        $('.main > p').css('transform', 'translate(0,100%)').css('transition', '1s').css('opacity', '0');
      }

      ;

      if ($(this).scrollTop() > $('.reactive_web').offset().top) {
        $('.suggections').css('transform', 'translate(0,0)').css('transition', '1.2s').css('opacity', '1');
        $('.suggections .first').css('transform', 'translate(0,0)').css('transition', '1.2s').css('opacity', '1');
      } else {
        $('.suggections').css('transform', 'translate(0,10%)').css('transition', '1.2s').css('opacity', '0');
        $('.suggections .first').css('transform', 'translate(0,50%)').css('transition', '1.2s').css('opacity', '0');
      }

      ;
    });
  } else {
    console.log("화면의 너비가 1024px 보다 큽니다.");
  }

  ;
});