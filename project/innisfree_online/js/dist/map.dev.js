"use strict";

$(function () {
  //start  
  $.ajax({
    url: 'map.xml',
    type: 'GET',
    data: {
      a: 10
    },
    success: function success(data) {
      var product = '',
          type,
          name,
          address,
          cell;

      function funList(code) {
        product = '';
        $(data).find('item').each(function () {
          name = $(this).find('name').text();
          address = $(this).find('address').text();
          cell = $(this).find('cell').text();
          type = $(this).find('type').text();

          if (code == type || code == 'all') {
            product += "<tr>";
            product += "<td>" + name + "</td>";
            product += "<td>" + address + "</td>";
            product += "<td>" + cell + "</td>";
            product += "</tr>";
          }
        });
        $('.list_text table tbody').html(product);
        $('.nav a').removeClass('active');
        $(".nav a[href='" + code + "']").addClass('active');
      }

      funList('all');
      $('.nav a').on('click', function (e) {
        e.preventDefault();
        var type = $(this).attr('href');
        funList(type);
        history.pushState({
          page: type
        }, 'pageHistory', '');
      });
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