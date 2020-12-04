$(function() {

    $(".A_product_list").slick({
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    var count = 0;
    var count2 = 0;
    var span = $(".A_bar span");

    $(".slick-next").on('click', function(e) {
        console.log(count);

        e.preventDeflaut;

        if (count == 0) {
            span.css('left', '40%');
        } else {
            span.css('left', '80%');
        }
        count++;
    });

    $(".slick-prev").on('click', function(e) {
        console.log(count2);
        e.preventDeflaut;

        if (count2 == 0) {
            span.css('left', '40%');
        } else {
            span.css('left', '0%');
        }
        count2++;
    });

    // ---------------------------------------------------------------------


    var mql = window.matchMedia("screen and (max-width: 1024px)");

    if (mql.matches) {
        // $(".A_product_list").slick({
        //     dots: false,
        //     infinite: false,
        //     slidesToShow: 3,
        //     slidesToScroll: 2
        // });
    } else {
        console.log("화면의 너비가 1024px 보다 큽니다.");
    };


});