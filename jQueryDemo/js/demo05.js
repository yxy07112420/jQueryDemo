$(function () {
    //让下方列表隐藏
    $("#uls").hide();
    //创建title单击事件
    $("#title").click(function () {
        $("#uls").toggle();
        //对列表中的元素
        $("ul").children().mousemove(function () {
            $(this).css("background-color","#ff9999");
        });
        $("ul").children().mouseout(function () {

            $(this).css("background-color","gainsboro");
        });
    });
})