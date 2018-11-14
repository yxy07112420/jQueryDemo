$(function () {
    $(".centers").css("display","none");
    //对列表项进行鼠标滑过事件的设置
    $(".titles").hover(
        function () {
            $(this).css("background-color","green") ;
        },
        function () {
            $(this).css("background-color","lightgreen") ;
        }
    )
    //单击列表标题
    $(".titles").click(function () {
        console.log($(this).children(".ulis").text());
        if($(this).children(".ulis").text() == "+"){
            console.log("++++");
            $(this).children(".ulis").text("-") ;
        }
        if($(this).children(".ulis").text() == "-"){
            console.log("-----");
            $(this).children(".ulis").text("+");
        }
        $(this).next().toggle();
    })
})