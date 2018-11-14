window.onload = function () {
    //创建导航数组
    var first = ["服装类","箱包类","电子产品类"];
    var second =
        [
            ["女装","男装","内衣"],
            ["鞋靴","箱包","配件"],
            ["家电","数码","手机"]
        ];
    var thrid =
        [
            [
                ["连衣裙","羽绒服","毛衣"],
                ["外套","羽绒服","棉衣"],
                ["内裤","睡衣"]
            ],
            [
                ["商务","休闲","运动"],
                ["女包","男包","旅行包"],
                ["帽子","手套","丝巾"]
            ],
            [
                ["洗衣机","吸尘器","烤箱"],
                ["电脑","手机","鼠标键盘"],
                ["华为","OPPO","苹果"]
            ]
        ];
    //创建一个div
    var divAll = document.createElement("div");
    //将该div放在body里面
    document.body.appendChild(divAll);
    //设置该div样式
    divAll.setAttribute("style","width:500px;height:500px;border:1px solid red;position: relative");
    //创建一个div
    var div1 = document.createElement("div");
    divAll.appendChild(div1);
    div1.setAttribute("style","width:500px;height:500px;border:1px solid blue;position: absolute;margin-left: 165px;margin-top:0px");
    //创建ul(显示第三级内容)
    var tUl =  document.createElement("ul");
    div1.appendChild(tUl);
    tUl.setAttribute("style","list-style:none");
    //创建一个ul标签
    var ul = document.createElement("ul");
    //将ul放在div里
    divAll.appendChild(ul);
    //设置ul样式
    ul.setAttribute("style","list-style:none");
    //创建li标签
    var li ;
    var span;
    //创建一个数组
    var arrays ;
    for(var i = 0;i < first.length;i++){
        li = document.createElement("li");
        //设置li的样式
        li.setAttribute("style","margin-bottom:10px");
        //将创建的li标签放在ul中
        ul.appendChild(li);
        //创建div
        var divs = document.createElement("div");
        li.appendChild(divs);
        // li.id = i;
        divs.id = i;
        arrays = thrid[i];
        console.log(arrays);
        div1.style.display = "none";
        for(var j = 0;j < second[i].length;j++){
            //对div设置样式
            divs.setAttribute("style","display: inline-block");
            span = document.createElement("span");
            divs.appendChild(span);
            span.innerText = second[i][j]+"|";
            //对其鼠标滑过的效果
            divs.onmousemove = function () {
                var index = this.id;
                console.log("鼠标滑过"+index);
                div1.style.display = "block";
                console.log(thrid[index]);
               if(tUl.getElementsByTagName("li").length > 0){
                   for(var n = 0;n<tUl.getElementsByTagName("li").length ;n++){
                       tUl.removeChild(tUl.getElementsByTagName("li")[n]);
                   }
               }
                var li1 = document.createElement("li");
                tUl.appendChild(li1);
                var div2 = document.createElement("div");
                li1.appendChild(div2);
                var span1 = document.createElement("span");
                div2.appendChild(span1);
                span1.innerText =thrid[index];
                //清除冒泡
                event.cancelBubble = true;
            }
            document.onclick = function () {
                div1.style.display = "none";
            }
        }
    }
}