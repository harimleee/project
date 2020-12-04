"use strict";

$(function () {
  //start  
  $.ajax({
    url: 'product_m2.xml',
    type: 'GET',
    data: {
      a: 10
    },
    success: function success(data) {
      var product = '',
          imgSrc,
          kind,
          tit,
          url,
          type;

      function funList(code) {
        product = '';
        $(data).find('item').each(function () {
          imgSrc = $(this).find('imgSrc').text();
          kind = $(this).find('kind').text();
          tit = $(this).find('tit').text();
          url = $(this).find('url').text();
          type = $(this).find('type').text();

          if (code == type || code == 'all') {
            product += "<figure>";
            product += "<a href='" + url + "'>";
            product += "<p><img src='" + imgSrc + "' alt=''></p>";
            product += "<figcaption>";
            product += "<h3>" + kind + "</h3>";
            product += "<p>" + tit + "</p>";
            product += "</figcaption>";
            product += "</a>";
            product += "</figure>";
          }
        });
        $('.list').html(product);
        $('.tab a').removeClass('active');
        $(".tab a[href='" + code + "']").addClass('active');
      }

      funList('all');
      $('.tab a').on('click', function (e) {
        e.preventDefault();
        var type = $(this).attr('href');
        funList(type);
        history.pushState({
          page: type
        }, 'pageHistory', '');
      });

      if (localStorage.product.trim() == '스킨') {
        $('.tab a').eq(2).trigger('click');
      }

      if (localStorage.product.trim() == '로션') {
        $('.tab a').eq(3).trigger('click');
      }

      if (localStorage.product.trim() == '선케어') {
        $('.tab a').eq(4).trigger('click');
      }

      if (localStorage.product.trim() == '에센스&세럼') {
        $('.tab a').eq(5).trigger('click');
      }

      if (localStorage.product.trim() == '페이스오일') {
        $('.tab a').eq(6).trigger('click');
      }

      if (localStorage.product.trim() == '크림&젤') {
        $('.tab a').eq(7).trigger('click');
      }

      if (localStorage.product.trim() == '마사지') {
        $('.tab a').eq(8).trigger('click');
      }

      if (localStorage.product.trim() == '아이케어') {
        $('.tab a').eq(9).trigger('click');
      }

      if (localStorage.product.trim() == '립케어') {
        $('.tab a').eq(10).trigger('click');
      }

      if (localStorage.product.trim() == '미스트') {
        $('.tab a').eq(11).trigger('click');
      }

      if (localStorage.product.trim() == '기획세트') {
        $('.tab a').eq(12).trigger('click');
      }

      if (localStorage.product.trim() == '기타') {
        $('.tab a').eq(13).trigger('click');
      }

      if (localStorage.product.trim() == '대용량') {
        $('.tab a').eq(14).trigger('click');
      }

      $(window).on('popstate', function () {
        var type;

        try {
          type = history.state.page;
        } catch (_unused) {
          type = 'all';
        }

        funList(type);
      });
    }
  }); //end    
});