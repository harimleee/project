$(function(){
       
    

    $('.text ul li').on('click',function(){
        var idx3=$(this).index()
        $('ul li p').removeClass('active');
        $('ul li p').eq(idx3).addClass('active');
    })

})