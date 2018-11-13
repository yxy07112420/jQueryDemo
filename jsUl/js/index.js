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
    for(var i = 0;i < first.length;i++){
        li = document.createElement("li");
        //设置li的样式
        li.setAttribute("style","margin-bottom:10px");
        //将创建的li标签放在ul中
        ul.appendChild(li);
        //创建div
        var divs = document.createElement("div");
        li.appendChild(divs);
        divs.id = i;
        for(var j = 0;j < second[i].length;j++){
            div1.style.display = "none";
            //对div设置样式
            divs.setAttribute("style","display: inline-block");
            span = document.createElement("span");
            divs.appendChild(span);
            span.innerText = second[i][j]+"|";
            //对列表设置鼠标滑过效果
            divs.onmouseover = function () {
                div1.style.display = "none";
                var divid = this.id;
                console.log("当前的div为："+divid);
               //添加li
               var sli = document.createElement("li");
               //设置li的样式
               sli.setAttribute("style","margin-bottom:10px");
               //将创建的li标签放在ul中
               tUl.appendChild(sli);
               //创建div标签
               if(this.id == 0){
                   div1.setAttribute("style","width:500px;height:500px;position: absolute;margin-left: 165px;margin-top:0px;background-color:red;display:block");
               }
               if(this.id == 1){
                   div1.setAttribute("style","width:500px;height:500px;position: absolute;margin-left: 165px;margin-top:0pxbackground-color:blue;display:block");
               }if(this.id == 2){
                   div1.setAttribute("style","width:500px;height:500px;position: absolute;margin-left: 165px;margin-top:0pxbackground-color:green;display:block");
                }
           }

        }
    }

}