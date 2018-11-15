/**
 * 当文本框获得焦点时，文本框内默认文字消失，失去焦点时，文本框内提示文字再次出现
 */
$(function () {
    $("input:not(:last)").on(
        {
            "focus":function () {
                $(this).removeAttr("placeholder");
            },
            "blur":function () {
                if($(this).attr("id") == "username"){
                    $(this).attr("placeholder","通行账号/邮箱");
                }else if($(this).attr("id") == "password"){
                    $(this).attr("placeholder","密码");
                }
            }
        }
    )
})