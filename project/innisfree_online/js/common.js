$(function() {
    //start    
    $('.thanks_banner_click').load('common_inc.html .thanks_banner_click p');
    $('.thanks_banner').load('common_inc.html .thanks_banner p');
    $('.member_banner').load('common_inc.html .member_banner p');
    $('.cart').load('common_inc.html .cart');
    $('.head').load('common_inc.html header', head);
    $('.foot').load('common_inc.html footer', foot);
    $('.popup').load('common_inc.html .popup', head);
    $('.popup2').load('common_inc.html .popup2', head);

    $('.log1').load('common_inc.html .log1');
    $('.log2').load('common_inc.html .log2');
    $('.log3').load('common_inc.html .log3');
    $('.log4').load('common_inc.html .log4', log);

    $('aside').load('common_inc.html aside p', top);

    //end       

    function log() {

        var mql3 = window.matchMedia("screen and (max-width: 480px)");
        mql3.addListener(responsive);

        function responsive() {
            if (mql3.matches) {
                $('.thanks_banner').click(function() {
                    console.log('a')
                    if ($('.thanks_banner_click').css('display') == 'none') {
                        $('.thanks_banner_click').css('display', 'block');
                    } else {
                        $('.thanks_banner_click').css('display', 'none');
                    }
                });
            } else {
                $('.thanks_banner_click').css('display', 'none');
            };
        }
        responsive();

        $('.head header .header .header_right a').eq(0).on('click', function(e) {
            e.preventDefault();
            $('.log1').css('display', 'block')
        })

        $('.head header .header .header_right a').eq(1).on('click', function(e) {
            e.preventDefault();
            if ($('.cart').css('display') == 'none') {
                $('.cart').css('display', 'block')

            } else {
                $('.cart').css('display', 'none')
            }
        });


        var emailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        var passwdCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/;

        $('.log1 .login button').on('click', funCheck);
        $('.log2 .login button').on('click', funCheck2);
        $('.log3 .login button').on('click', funCheck3);


        function funCheck(e) {
            e.preventDefault();

            var email = $('input[name=email]').val();

            if (!emailCheck.test(email)) {
                feedback('이메일를 다시 입력해 주세요', 'email');
                return;
            } else {
                $('.log2').css('display', 'block');
                $('.log1').css('display', 'none');

            }

            function feedback(msg, el) {
                alert(msg);
                $('input[name=' + el + ']').val('');
                $('input[name=' + el + ']').focus();
            }

        }
        $('.x3').on('click', function() {
            $('.log1').css('display', 'none');
            $('.log2').css('display', 'none');
            $('.log3').css('display', 'none');
            $('.log4').css('display', 'none');
        });

        $('.log2 .login a').on('click', function(e) {
            e.preventDefault();
            $('.log3').css('display', 'block');
            $('.log2').css('display', 'none');
        })

        $('.log2 .back').on('click', function(e) {
            e.preventDefault();
            $('.log1').css('display', 'block');
            $('.log2').css('display', 'none');
        });
        $('.log3 .back').on('click', function(e) {
            e.preventDefault();
            $('.log2').css('display', 'block');
            $('.log3').css('display', 'none');
        });

        function funCheck2(e) {
            e.preventDefault();

            var email = $('input[name=email]').val();
            var pw = $('input[name=pw]').val();

            if (!emailCheck.test(email)) {
                feedback('이메일를 다시 입력해 주세요', 'email');
                return;
            } else if (!passwdCheck.test(pw)) {
                feedback('pw를 다시 입력해 주세요', 'pw');
                return;
            } else {
                $('.log4').css('display', 'block');
                $('.log1').css('display', 'none');
                $('.log2').css('display', 'none');
                $('.log3').css('display', 'none');

            }

            function feedback(msg, el) {
                alert(msg);
                $('input[name=' + el + ']').val('');
                $('input[name=' + el + ']').focus();
            }

        }

        function funCheck3(e) {
            e.preventDefault();

            var email = $('input[name=email]').val();
            var pw2 = $('input[name=pw2]').val();

            if (!emailCheck.test(email)) {
                feedback('이메일를 다시 입력해 주세요', 'email');
                return;
            } else if (!passwdCheck.test(pw2)) {
                feedback('패스워드를 다시 입력해 주세요', 'pw2');
                return;
            } else {
                $('.log3').css('display', 'none');
            }

            function feedback(msg, el) {
                alert(msg);
                $('input[name=' + el + ']').val('');
                $('input[name=' + el + ']').focus();
            }
        }
    };

    function foot() {
        $('.footer_right .top div').eq(0).find('a').on('click', function(e) {
            e.preventDefault();

            localStorage.product = $(this).text();
            location.href = $(this).attr('href');

            //value값과 .tab a text 값이 같으면 location href로 이동
        });
    };

    function top() {
        var asideEl = document.querySelector('aside');

        asideEl.addEventListener('click', function() {
            window.scrollTo({
                left: 0,
                top: 0
            });
        });

        window.addEventListener('scroll', function() {
            if (this.scrollY < window.innerHeight) {
                asideEl.style.display = "none";
            } else {
                asideEl.style.display = "block";
            }
        });
    };

    function head() {
        var header = $('.header');
        var tab = $('.first');
        $('.header_left a').on('click', function() {
            var idx = $(this).index()
            $('.popup').css('visibility', 'visible')
            $('.popup nav a').eq(idx).trigger('click');
            tab.addClass('active');
        })



        var tabBtn = $('.first nav a');
        var tabCon = $('.first div > div');


        tabBtn.on('click', funTab);

        var last = 0;

        function funTab(event) {
            event.preventDefault();
            var idx = this.dataset.num;
            $('.second').hide()
            $('.popup .first .x').css('display', 'block');

            $('.first').css('transform', 'translateX(0%)').css('transition', '1s');



            tabBtn[last].classList.remove('active');
            tabCon[last].classList.remove('active');

            this.classList.add('active');
            tabCon[idx].classList.add('active');

            last = idx;
        }

        $('.popup .first .x').on('click', function() {
            $('.popup').css('visibility', 'hidden');
            $('.first').css('transform', 'translateX(-100%)').css('transition', '1s');
        })

        $('.popup .second .x').on('click', function() {
            $('.popup').css('visibility', 'hidden');
            $('.popup .second').css('transform', 'translateX(-200%)').css('transition', '1s');
            $('.popup .first').css('transform', 'translateX(-100%)').css('transition', '1s');

        });



        $('.member_banner p').on('click', function() {
            $('.popup2').css('visibility', 'visible');
            $('.popup2 .table').css('transform', 'translateX(0%)');
        })
        $('.popup2 .table .x2').on('click', function() {
            $('.popup2').css('visibility', 'hidden');
            $('.popup2 .table').css('transform', 'translateX(-100%)');
        })



        $('.popup .first div div').eq(0).find('a').on('click', function(e) {
            e.preventDefault();
            var idx2 = $(this).index()
            $('.popup .first .x').css('display', 'none');
            $('.popup .second ').css('display', 'block');
            $('.popup .second div div').removeClass('active')
            $('.popup .second div div').eq(idx2).addClass('active');

            setTimeout(function() { $('.popup .second').css('transform', 'translateX(0%)'); }, 50);
        })

        $('.popup .first div div').eq(1).find('a').on('click', function(e) {
            e.preventDefault();
            var idx2 = $(this).index()

            if (idx2 == 2) {
                location.href = $(this).attr('href');
            } else {
                $('.popup .first .x').css('display', 'none');
                $('.popup .second ').css('display', 'block')
                $('.popup .second div div').removeClass('active')
                $('.popup .second > div').eq(1).find('div').eq(idx2).addClass('active');

                setTimeout(function() { $('.popup .second').css('transform', 'translateX(0%)'); }, 50);
            }
        });

        $('.popup .second div div a').on('click', function(e) {
            e.preventDefault();

            localStorage.product = $(this).text();
            location.href = $(this).attr('href');

            //value값과 .tab a text 값이 같으면 location href로 이동
        });

        // window.addEventListener('scroll',function(){
        //     if( 0 < window.innerHeight) {
        //         asideEl.style.display = "none";
        //     }else{
        //         asideEl.style.display = "block";
        //     }  
        // });







    }

    $('.thanks_banner').slideUp('fast');
    $('.thanks_banner').slideDown('slow');
    $('.member_banner').slideUp('normal');
    $('.member_banner').slideDown('slow');

});