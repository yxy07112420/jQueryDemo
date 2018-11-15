$(function () {
    deleteNew();
    allbox();
    //新增设置事件
    $("div a").click(function () {
        //对table中添加数据
        $("table").append("<tr>" +
            "<td><input type='checkbox' name='box'/></td>" +
            "<td>王五</td>" +
            "<td>男</td>" +
            "<td>123456789012345678</td>"+
            "<td>高级</td>"+
            "<td>12345678901</td>"+
            "<td>1995-10-11</td>"+
            "<td>20,000.00</td>"+
            "<td>" +
            "<img src='../img/wirte.svg' style='width: 20px ;height: 20px'/> " +
            "<img src='../img/delete.svg' style='width: 20px ;height: 20px' class='delete'/>" +
            "</td>"+
            "</tr>");
        deleteNew();
        allbox();
    })
    //设置删除操作
        function deleteNew()
        {
            $(".delete").each(function () {
                $(this).click(function () {
                    if(confirm("确定要删除吗？")){
                        $(this).parents("tr").remove();
                        alert("删除成功");
                        return true;
                    }
                    return false;
                })
            })
        }
     //设置全选操作方法
    function  allbox() {
        $("#allboxs").click(function () {
            console.log($("#allboxs").is(":checked"));
            if($("#allboxs").is(":checked")){
                $("input[name='box']").attr("checked",true);
            }
            if($("#allboxs").is(":checked") == false){
                $("input[name='box']").attr("checked",false);
            }
        })
    }
})