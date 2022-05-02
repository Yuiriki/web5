(function($){

    $('.main-btn').stop().mouseenter(function(){
        $('.main-btn').removeClass('on');
        $(this).addClass('on');
        $('.sub').stop().slideUp(0);
        $(this).next().stop().slideDown(300);
    });

    $('#nav').stop().mouseleave(function(){
        $('.sub').stop().slideUp(300);
        $('.main-btn').stop().removeClass('on');
    });


   let cnt=0;

    function mainSlide(){
        $('.slide-wrap').stop().animate({left:`${-100*cnt}%`},600,function(){
            cnt>2?cnt=0:cnt;
            $('.slide-wrap').stop().animate({left:`${-100*cnt}%`},0);
        });
    }

    function nextCount(){
        cnt++;
        mainSlide();
    }
    function autoTimer(){
       setInterval(nextCount,3000);
    }
    autoTimer();

    $('.gallery-btn').click(function(){
        $('.notice-btn').addClass('on')
        $('.gallery-btn').addClass('on')
        $('.notice').addClass('on')
        $('.gallery').addClass('on')
    });
    $('.notice-btn').click(function(){
        $('.gallery-btn').removeClass('on')
        $('.notice-btn').removeClass('on')
        $('.gallery').removeClass('on')
        $('.notice').removeClass('on')
        
    });

    $('.close-btn').stop().click(function(){
        $('#modal').fadeOut(300);
    });
    $('.link-btn').stop().click(function(){
        $('#modal').fadeIn(300);
    });

})(jQuery);