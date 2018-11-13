window.onload = function(){
    //获取省市级对象
   var pro = document.getElementById("pro");
   var city = document.getElementById("city");
   var county = document.getElementById("county");
   //创建省市级数组
    var pros = ["天津市","北京市","河北省"];
    //创建市级（区）数组
    var citys =
        [
            ["空港","河东","河西"],
            ["朝阳区","大兴区","海淀区"],
            ["石家庄市","衡水市"]
        ];
    //创建县级（街道）
    var countys  =
        [
            [
                ["西七道","西八道"],
                ["河东一区","河东二区"],
                ["河西一区","河西二区"]
            ],
            [
                ["朝阳一区","朝阳二区"],
                ["旧宫","亦庄"],
                ["海淀一区","海淀二区"]
            ],
            [
                ["新华区","黄河大道"],
                ["桃城区","安平县"]
            ]
        ];
    /**
     * 创建一个向select中添加数据的方法
     */
    function addArrays(arrs,sel) {
        if(arrs.length > 0){
            for(var i = 0;i < arrs.length;i++){
                var ops = new Option(arrs[i],i);
                sel.appendChild(ops);
            }
        }
    }
    //创建省级对象
    addArrays(pros,pro);
    //创建一个数组
    var arrays ;
    //对省（市）设置触发事件
    pro.onchange = function () {
        //清空市级对象
        city.options.length = 1;
        //清空县级
        county.options.length = 1;
        //获取省级value值
        var psValue = this.value;
        if(psValue != -1){
            arrays = countys[psValue];
            addArrays(citys[psValue],city)
        }
    }
    //对改变city时，创建县，街道
    city.onchange = function () {
        //清空县级
        county.options.length = 1;
        //获取value值
        var cityValue = this.value;
        if(cityValue != -1){
            //创建县级对象
            addArrays(arrays[cityValue],county);
        }
    }
}