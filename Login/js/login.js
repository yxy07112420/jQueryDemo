window.onload = function () {
    var divName;
    var span;
    //创建一个创建span对象的方法
    function creatSpan(divName, str, style) {
        //获取div
        divName = document.getElementById(divName);
        console.log(divName.getElementsByTagName("span"));
        if(divName.getElementsByTagName("span").length > 0){
           for(var i = 0;i < divName.getElementsByTagName("span").length;i++ ){
               divName.removeChild(divName.getElementsByTagName("span")[i]);
           }
        }
        //创建一个span标签
        span = document.createElement("span");
        span.innerText = str;
        //设置span标签的属性
        span.setAttribute("style", style);
        divName.appendChild(span);
    }
    var useIsSuccess =false;
    //设置用户焦点滑出效果
    document.getElementById("username").onblur = function () {
        //对用户名设置正则表达式
        var userRegExp = /[\w]{6,14}/;
        if (!userRegExp.test(this.value)) {
            //创建一个span对象
            creatSpan("uname", "当前用户输入格式不正确", "color:red;font-size:15px;test-align:center");
            useIsSuccess = false;
        } else if (this.value == "123456") {
            //创建一个span对象
            creatSpan("uname", "当前用户已存在", "color:red;font-size:15px;test-align:center");
            useIsSuccess = false;
        } else {
            //创建一个span对象
            creatSpan("uname", "正确", "color:blue;font-size:15px;test-align:center");
            useIsSuccess = true;
        }
    }
    var passIsSuccess =false ;
    //设置密码
    document.getElementById("password").onblur = function () {
        //对密码设置正则表达式
        var pass = /[a-zA-Z\d]{6,14}/;
        if (!pass.test(this.value)) {
            //创建一个span对象
            creatSpan("upass", "密码格式有误", "color:red;font-size:15px;test-align:center");
            passIsSuccess = false;
        } else {
            //创建一个span对象
            creatSpan("upass", "正确", "color:blue;font-size:15px;test-align:center");
            passIsSuccess = true;
        }
    }
    var rpassIsSuccess = false;
    //确认密码
    document.getElementById("rpass").onblur = function () {
        if (this.value != document.getElementById("password").value) {
            //创建一个span对象
            creatSpan("rupass", "两次密码不一致", "color:red;font-size:15px;test-align:center");
            rpassIsSuccess = false;
        } else if(this.value ==""){
            //创建一个span对象
            creatSpan("rupass", "格式有误", "color:red;font-size:15px;test-align:center");
            rpassIsSuccess = false;
        }  else{
            //创建一个span对象
            creatSpan("rupass", "正确", "color:blue;font-size:15px;test-align:center");
            rpassIsSuccess = true;
        }
    }
    var emailIsSuccess = false;
    //邮箱验证
    document.getElementById("email").onblur = function () {
        //对邮箱设置正则表达式
        var pass = /[\w\.\-]+[@](163|qq|126)(\.com|\.cn\.org)/;
        if (!pass.test(this.value)) {
            //创建一个span对象
            creatSpan("uemail", "邮箱格式有误", "color:red;font-size:15px;test-align:center");
            emailIsSuccess = false;
        } else if (this.value == "123@qq.com") {
            //创建一个span对象
            creatSpan("uemail", "该邮箱已经存在", "color:red;font-size:15px;test-align:center");
            emailIsSuccess = false;
        } else {
            //创建一个span对象
            creatSpan("uemail", "正确", "color:blue;font-size:15px;test-align:center");
            emailIsSuccess = true;
        }
    }
    var teiIsSuccess = false;
    //手机号验证
    document.getElementById("telephone").onblur = function () {
        //对手机号设置正则表达式
        var pass = /^(\+86)[0-9]{11}$/;
        if (!pass.test(this.value)) {
            //创建一个span对象
            creatSpan("utel", "手机格式有误", "color:red;font-size:15px;test-align:center");
            teiIsSuccess = false;
        } else if (this.value == "+8612345678901") {
            //创建一个span对象
            creatSpan("utel", "该手机号已经注册过", "color:red;font-size:15px;test-align:center");
            teiIsSuccess = false;
        } else {
            //创建一个span对象
            creatSpan("utel", "正确", "color:blue;font-size:15px;test-align:center");
            teiIsSuccess = true;
        }
    }
    var codeIsSuccess = false;
    //邮编验证
    document.getElementById("code").onblur = function () {
        //对邮编设置正则表达式
        var pass = /^[\d]{6}$/;
        if (!pass.test(this.value)) {
            //创建一个span对象
            creatSpan("ucode", "邮编格式有误", "color:red;font-size:15px;test-align:center");
            codeIsSuccess = false;
        }else {
            //创建一个span对象
            creatSpan("ucode", "正确", "color:blue;font-size:15px;test-align:center");
            codeIsSuccess = true;
        }
    }
    var uidIsSuccess = false;
    //身份证号验证
    document.getElementById("userId").onblur = function () {
        //对邮编设置正则表达式
        var pass = /^[\d]{17}[\d|x|X]$/;
        if (!pass.test(this.value)) {
            //创建一个span对象
            creatSpan("uid", "身份证号格式有误", "color:red;font-size:15px;test-align:center");
            uidIsSuccess = false;
        }else {
            //创建一个span对象
            creatSpan("uid", "正确", "color:blue;font-size:15px;test-align:center");
            uidIsSuccess = true;
        }
    }
    //设置按钮鼠标单击事件
    document.getElementById("login").onclick = function () {
        if(useIsSuccess&&passIsSuccess&&rpassIsSuccess&&emailIsSuccess&&teiIsSuccess&&codeIsSuccess&&uidIsSuccess){
            alert("注册成功");
        }else {
            alert("请重新注册");
            return false;
        }
    }
}
