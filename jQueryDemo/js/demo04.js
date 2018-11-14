$(function () {
    $("#p1").click(function () {
        alert($("#p1").text());
    })
    $("#p2").click(function () {
        alert($("#p2").text());
    })
    $("tr:odd").css("background-color","#ff9999");
})