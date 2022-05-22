$(function(){
    'use strict';
    var winH  =$(window).height(),
        upperH=$('.upper-bar').innerHeight(),
        navH  =$('.navbar').innerHeight();
    $('.slider ,.carousel-item').height(winH - (upperH + navH));
});
    //features shuff
$('.features-work ul li').on ('click',function(){
   $(this).addClass('active').siblings().removeClass('active');
    if($(this).data('class')==='all'){
        $('.shifel-img .col-sm').css('opacity',1);
    }else{
        $('.shifel-img .col-sm').css('opacity','.08');
        $($(this).data('class')).parent().css('opacity',1);
    }
});







