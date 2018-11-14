$(document).ready(function () {
    //对题目设置标签样式
    $("#question").css(
        {
            "width":"150px",
            "height":"50px",
            "text-align":"center",
            "line-height":"50px",
            "position":"relative"
        }
    );
    //设置查看的样式
    $("#button").css(
        {
            "width":"100px",
            "height":"50px",
            "text-align":"center",
            "line-height":"50px",
            "position":"absolute",
            "margin-left":"150px",
            "margin-top":"-50px",
            "color":"red"
        }
    );
    //查看题目效果
    $("#button").click(function () {
        $("#button").toggle();
        //在题目下方添加答案
        $("#question").after("<div id='answer'>" +
            "<p>jQuery是目前最流行的JavaScript程序库，它通过封装原生的JavaScript函数得到一整套定义好的方法。</p>" +
            "<p>是John Resig于2006年创建的一个开源项目，现今jQuery已经集成了JavaScript、CSS、DOM和Ajax于一体的强大功能。</p>" +
            "<p>它可以用最少的代码，完成更多复杂而困难的功能，从而得到了开发者的喜爱和选用。</p>" +
            "</div>"
        );
    })
})