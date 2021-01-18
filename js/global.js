// 返回顶部的JS
$(window).scroll(function(){
    //获取当前的滚动距离
    var top = $(window).scrollTop();
    if(top > 100)
    {
        $("#return-box").show(500);
    }
    else
    {
        $("#return-box").hide(500);
    }
});
$("#return-box").click(function(){
    $("html").animate({
        scrollTop:0
    },500);
});