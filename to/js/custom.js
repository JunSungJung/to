$(document).ready(function(){
    $('.btnMenu').click(function(){
        $(this).fadeOut();
        $('nav').addClass('on');
        $('section').addClass('on');
    });

    $('nav li').click(function(){
        $('.btnMenu').fadeIn();
        $('nav').removeClass('on');
        $('section').removeClass('on');
        var index = $(this).index();
        $('section > div').removeClass('on');
        $('section > div').eq(index).addClass('on');
    });

    
    var url = location.href;
    var box3 = (url.slice(url.indexOf('?') + 1, url.length));

    function page3(box3){
        if(box3 == "bno=1"){
            $('section').removeClass('on');
            $('section > div').removeClass('on');
            $('section > div').eq(2).addClass('on');
        }
    }
    page3(box3);

    var currentindex = 0;

    $('.box3 .arrow-right').click(function(){
        if(currentindex < 3) {
            currentindex++
        }else {
            currentindex =0;
        }
        $('.eventcon > article').hide().eq(currentindex).show();
    });

    $('.box3 .arrow-left').click(function(){
        if(currentindex <= 3 && currentindex > 0 ) {
            currentindex--
        }else if(currentindex <= 0){
            currentindex =3;
        }
        $('.eventcon > article').hide().eq(currentindex).show();
    });

});

