$(function () {
    //设置input元素获取焦点的样式
    $("input").on(
        {
            focus:function () {
                $(this).css("border","1px solid blue");
            },
            blur:function () {
                $(this).css("border","1px solid gainsboro");
            }
        }
    )
})