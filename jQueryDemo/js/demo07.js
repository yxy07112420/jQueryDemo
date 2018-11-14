$(function () {
    //对li标签设置鼠标滑过的效果
    $("li").hover(
        function () {
            $("li:first").css("background-color","darkcyan");
            $(this).css("background-color","lightseagreen");
        },
        function () {
            $(this).css("background-color","darkcyan");
        }
    )
    $("li").mouseout(function () {
        $("li:first").css("background-color","lightseagreen");
    })
})