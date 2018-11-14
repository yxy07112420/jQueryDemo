$(function () {
    /**
     * 设置第1行字体为红色
     设置第1行字体大小为20像素
     设置最后一行字体为蓝色
     设置偶数行背景色#ffd
     设置奇数行背景色#ddf
     设置从第5行开始所有行的字体大小为12px
     设置从第1～4行字体大小为14px
     设置hn标题字体大小为30px
     */
    $("tr:first").css(
        {
            "color":"red",
            "font-size":"20px",
        }
    );
    $("tr:last").css("color","blue");
    $("tr:even").css("background-color","#ffd");
    $("tr:odd").css("background-color","#ddf");
    $("tr:gt(3)").css("font-size","12px");
    $("tr:lt(4)").css("font-size","14px");
    $("th").css("font-size","30px")
})