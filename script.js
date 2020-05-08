var height=$('.iconsBackground').height();
$ (window).scroll(function(){
    if($(this).scrollTop()>height){
        $('.nav').addClass('fixed');
    }
    else{
        $('.nav').removeClass('fixed');
    }
})