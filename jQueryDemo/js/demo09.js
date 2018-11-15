/**
 * 点击删除链接时，缓慢显示删除确认框
 在确认框中点击取消，确认框快速消失
 */
$(function () {
    $("#div1").hide();
    $("#delete").click(function () {
        $("#div1").slideDown("slow");
        $("#out").click(function () {
            $("#div1").slideUp("fast");
        });
    });
    //对全选设置事件
    $("#allcheck").click(function () {
        console.log($("#allcheck").is(":checked"));
        if( $("#allcheck").is(":checked")){
            $("#one").attr("checked",true);
        }
        if( $("#allcheck").is(":checked") == false){
            $("#one").attr("checked",false);
        }
    })
})