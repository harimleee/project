window.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('nav');
    var navEl = document.querySelectorAll('nav a');
    var secEl = document.querySelectorAll('section');
    var secArr = [];

    setTimeout(function() {
        secEl.forEach(function(sl, idx) {
            secArr.push(sl.offsetTop);
        });
    }, 500)
    window.scrollTo(0, 0);


    navEl.forEach(function(sl, idx) {
        sl.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo(0, secArr[idx]);
        });
    });



    var winH = window.innerHeight / 2;
    window.addEventListener('scroll', function() {
        secArr.forEach(function(el, idx) {
            if (window.scrollY >= secArr[idx] - winH) {
                navEl.forEach(function(a) {
                    a.classList.remove('active');
                });
                navEl[idx].classList.add('active');
            }
        });
        //scroll end
    });




    var body = document.querySelector('body');
    setTimeout(function() {
        body.classList.add('active');
    }, 10);

    $(document).ready(function() {
        $('.bubble').addClass('active');
        $('.bubble2').addClass('active');
        $('.bubble3').addClass('active');
        $('.bubble4').addClass('active');
        $('.text').addClass('active');
        $('.img').addClass('active');
        $('nav').fadeToggle(3800);
    });

    var prevScrollTop = 0;
    var nowScrollTop = 0;

    function wheelDelta() {
        return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
    };

    var color = { r: 243, g: 239, b: 161 };

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > $('.text').offset().top) {

            $('.text2').css('transform', 'translate(0,0)').css('transition', '1.5s').css('opacity', '1');
        } else {
            $('.text2').css('transform', 'translate(0,200%)').css('transition', '1.5s').css('opacity', '0');
        };

        if ($(this).scrollTop() > $('.skill').offset().top) {
            $('.skill_text').css('transform', 'translate(0,0)').css('transition', '1.2s');
        } else {
            $('.skill_text').css('transform', 'translate(0,300%)').css('transition', '1.2s');
        }

        if ($(this).scrollTop() > $('#graph').offset().top) {
            $('.skill_text2').css('opacity', '1').css('transition', '1.5s');
        } else {
            $('.skill_text2').css('opacity', '0').css('transition', '1.5s');
        }


        if ($(this).scrollTop() > ($('.click_text').offset().top - $(window).height() / 3)) {
            $('.click_text h1').css('right', '0%').css('transition', '1.5s');
        } else {
            $('.click_text h1').css('right', '-100%').css('transition', '1.5s');
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
        })

    });

    setTimeout(function font() {
        var canvas = document.querySelector('#graph');
        var ctx = canvas.getContext('2d');
        var cw = canvas.width;
        var ch = canvas.height;
        ctx.font = 'bold 6vw Oswald';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Ps', cw / 8, ch / 1.95);
        ctx.fillText('CSS', cw - (cw / 2.6), ch / 1.95);
        ctx.fillText('JS', cw - (cw / 7), ch / 1.95);
        ctx.font = 'bold 5.5vw Oswald';
        ctx.fillText('HTML', cw / 2.7, ch / 1.95);


        function draw(x, y, r, pst, end, color) {
            pst++;
            ctx.beginPath();
            ctx.lineWidth = 40;
            ctx.strokeStyle = color;
            ctx.arc(x, y, r, -Math.PI / 2, ((Math.PI / 180 * pst) * 3.6) - Math.PI / 2, false);
            ctx.stroke();

            if (pst <= end) {
                requestAnimationFrame(function() {
                    draw(x, y, r, pst, end, color);
                });
            }
        }

        var graph = { y: ($('#graph').offset().top - $(window).height() / 2.7), state: true }
        $(window).on('scroll', function() {

            if (graph.y < $(window).scrollTop() && graph.state) {
                draw(cw / 8, ch / 2, ch / 4, 0, 80, "#008ed8");
                draw(cw / 2.7, ch / 2, ch / 4, 0, 70, "#f35825");
                draw(cw - (cw / 2.6), ch / 2, ch / 4, 0, 70, "#007bc9");
                draw(cw - (cw / 7), ch / 2, ch / 4, 0, 60, "#f78224");
                graph.state = false;
            }

        });

    }, 200)


    function bubble() {
        var canvas = document.querySelector('#can_bubble');
        var ctx = canvas.getContext('2d');
        canvas.setAttribute('width', window.innerWidth);
        canvas.setAttribute('height', window.innerHeight);
        var cw = canvas.width;
        var ch = canvas.height;
        var color = '#666ccd';
        var ea = 8;

        $(window).on('scroll', function() {


            if ($(this).scrollTop() > $('.skill').offset().top) {
                color = '#cc3362'
            } else {
                color = '#666ccd'
            }

            if ($(this).scrollTop() > $('.contact_info').offset().top) {
                color = '#666ccd'
            }
        });

        function drawCircle(y) {
            this.x = Math.random() * cw,
                this.y = Math.random() * ch + 300,
                this.speed = Math.random() * 5 + 4,
                this.r = Math.random() * 60 + 30;
        }
        drawCircle.prototype = {
            update: function() {
                this.y -= this.speed;
                if (this.y + this.r < 0) this.y = ch;
            }
        }

        var cirArr = [];
        for (var i = 0; i < ea; i++) {
            cirArr.push(new drawCircle(0));
        }

        function draw() {

            requestAnimationFrame(draw);
            ctx.clearRect(0, 0, cw, ch)
            for (var i = 0; i < ea; i++) {
                cirArr[i];
                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.lineWidth = 0.4;
                ctx.arc(cirArr[i].x, cirArr[i].y, cirArr[i].r, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.globalAlpha = 1;
                cirArr[i].update();
            }
        }
        draw();
    }
    bubble();

    // ---------------------------------------------------------------------


    var mql = window.matchMedia("screen and (max-width: 1024px)");

    if (mql.matches) {
        var prevScrollTop = 0;
        var nowScrollTop = 0;

        function wheelDelta() {
            return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
        };

        var color = { r: 243, g: 239, b: 161 };

        $(window).on('scroll', function() {

            nowScrollTop = $(this).scrollTop();
            if (wheelDelta() == 'down') {

                if (secArr[1] <= nowScrollTop && secArr[2] >= nowScrollTop) {
                    if (color.r < 253) color.r += 2.2;
                    if (color.g > 215) color.g -= 2.2;
                    if (color.b > 129) color.b -= 2.2;
                } else if (secArr[2] + 1000 < nowScrollTop) {
                    if (color.r > 243) color.r -= 0.9;
                    if (color.g < 239) color.g += 0.9;
                    if (color.b < 161) color.b += 0.9;
                }

            }

            prevScrollTop = nowScrollTop;




            $('.background').css({
                backgroundColor: "rgb(" + color.r + "," + color.g + "," + color.b + ")"
            })

        });




        function bubble() {
            var canvas = document.querySelector('#can_bubble');
            var ctx = canvas.getContext('2d');
            canvas.setAttribute('width', window.innerWidth);
            canvas.setAttribute('height', window.innerHeight);
            var cw = canvas.width;
            var ch = canvas.height;
            var color = '#666ccd';
            var ea = 8;

            $(window).on('scroll', function() {

                if ($(this).scrollTop() > $('.skill').offset().top) {
                    color = '#cc3362'
                } else {
                    color = '#666ccd'
                }

                if ($(this).scrollTop() > $('.contact_info').offset().top) {
                    color = '#666ccd'
                }
            });

            function drawCircle(y) {
                this.x = Math.random() * cw,
                    this.y = Math.random() * ch + 300,
                    this.speed = Math.random() * 5 + 3,
                    this.r = Math.random() * 40 + 20;
            }
            drawCircle.prototype = {
                update: function() {
                    this.y -= this.speed;
                    if (this.y + this.r < 0) this.y = ch;
                }
            }

            var cirArr = [];
            for (var i = 0; i < ea; i++) {
                cirArr.push(new drawCircle(0));
            }

            function draw() {

                requestAnimationFrame(draw);
                ctx.clearRect(0, 0, cw, ch)
                for (var i = 0; i < ea; i++) {
                    cirArr[i];
                    ctx.beginPath();
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 0.4;
                    ctx.arc(cirArr[i].x, cirArr[i].y, cirArr[i].r, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                    cirArr[i].update();
                }
            }
            draw();
        }
        bubble();

    } else {
        console.log("화면의 너비가 1024px 보다 큽니다.");
    };


});