$(document).ready(function(){
    $(".tab-mobile").click(function () {
        $(".form-reg-username").removeClass("active");
        $(".form-reg-mobile").addClass("active");
        $(".tab-mobile").css({"background":"#333333","color":"#ffffff"});
        $(".tab-username").css({"background":"#f3f3f3","color":"#333333"});
    })
    $(".tab-username").click(function () {
        $(".form-reg-mobile").removeClass("active");
        $(".form-reg-username").addClass("active");
        $(".tab-username").css({"background":"#333333","color":"#ffffff"});
        $(".tab-mobile").css({"background":"#f3f3f3","color":"#333333"});
    })

    //通过用户名注册
    $(".form-reg-username :input").blur(function () {
        var $parent = $(this).parent();
        //验证姓名
        if($(this).is("#username")){
            var nameVal = $.trim(this.value);
            var regName = /[~#^$%&!*()<>:;'"{}【】  ]/;
            var errortips = $(".errortips:eq(0)");
            if(nameVal == ""){
                errortips.text("*请输入用户名");
                $(".con .username").css("border","1px solid #CF4633");
            }
            else if(nameVal.length < 3 || nameVal.length >16){
                errortips.text("*用户名应在3-16个字符之间");
                $(".con .username").css("border","1px solid #CF4633");
            } 
            else if(regName.test(nameVal)){
                errortips.text("*请输入合法的用户名");
                $(".con .username").css("border","1px solid #CF4633");
            }
            else{
                errortips.text("");
                $(".con .username").css("border","1px solid #e3e2e2");
            }
        }
        //验证密码
        if($(this).is("#password")){
            var pwdVal = $.trim(this.value);
            var errortips = $(".errortips:eq(1)");
            if(pwdVal== ""){
               errortips.text("*请输入密码");
               $(".con .password").css("border","1px solid #CF4633");
            }
            else if(pwdVal.length < 6 || pwdVal.length >25){
                errortips.text("*密码应在6-25个字符之间");
                $(".con .password").css("border","1px solid #CF4633");
            }
            else{
               errortips.text("");
               $(".con .password").css("border","1px solid #e3e2e2");
            }
        }
        //验证确认密码
        if($(this).is("#re_password")){
            var repwdVal = $.trim(this.value);
            var pwdVal = $(".password #password").val();
            var errortips = $(".errortips:eq(2)");
            if(repwdVal== ""){
               errortips.text("*请输入密码");
               $(".con .re_password").css("border","1px solid #CF4633");
            }
            else if(repwdVal != pwdVal){
                errortips.text("*两次密码不一致");
                $(".con .re_password").css("border","1px solid #CF4633");
            }
            else if(repwdVal.length < 6 || repwdVal.length >25){
                $(".con .re_password").css("border","1px solid #CF4633");
            }
            else{
               errortips.text("");
               $(".con .re_password").css("border","1px solid #e3e2e2");
            }
        }
        //验证验证码
        if($(this).is("#verifycode")){
        	var codeVal = $.trim(this.value);
            var errortips = $(".errortips:eq(3)");
            if(codeVal== ""){
               errortips.text("*输入验证码");
               $(".con .verifycode").css("border","1px solid #CF4633");
            }
            else if(codeVal.length !=4 ){
                errortips.text("*验证码应是四位数");
                $(".con .password").css("border","1px solid #CF4633");
            }
            else{
               errortips.text("");
               $(".con .verifycode").css("border","1px solid #e3e2e2");
            }
        }
    });
    //生成随机数
    function randomNum(min,max){
        return Math.floor(Math.random()*(max-min)+min);
    }
    //生成随机颜色RGB分量
    function randomColor(min,max){
        var _r = randomNum(min,max);
        var _g = randomNum(min,max);
        var _b = randomNum(min,max);
        return "rgb("+_r+","+_g+","+_b+")";
    }
    //先阻止画布默认点击发生的行为再执行drawPic()方法
    document.getElementById("verify").onclick = function(e){
        e.preventDefault();
        drawPic();
    };
    function drawPic(){
        //获取到元素verify
        var $verify = document.getElementById("verify");
        var _str = "0123456789";//设置随机数库
        var _picTxt = "";//随机数
        var _num = 4;//4个随机数字
        var _width = $verify.width;
        var _height = $verify.height;
        var ctx = $verify.getContext("2d");//获取 context 对象
        ctx.textBaseline = "bottom";//文字上下对齐方式--底部对齐
        ctx.fillStyle = randomColor(180,240);//填充画布颜色
        ctx.fillRect(0,0,_width,_height);//填充矩形--画画
        for(var i=0; i<_num; i++){
            var x = (_width-10)/_num*i+10;
            var y = randomNum(_height/2,_height);
            var deg = randomNum(-45,45);
            var txt = _str[randomNum(0,_str.length)];
            _picTxt += txt;//获取一个随机数
            ctx.fillStyle = randomColor(10,100);//填充随机颜色
            ctx.font = randomNum(16,40)+"px SimHei";//设置随机数大小，字体为SimHei
            ctx.translate(x,y);//将当前xy坐标作为原始坐标
            ctx.rotate(deg*Math.PI/180);//旋转随机角度
            ctx.fillText(txt, 0,0);//绘制填色的文本
            ctx.rotate(-deg*Math.PI/180);
            ctx.translate(-x,-y);
        }
        for(var i=0; i<_num; i++){
            //定义笔触颜色
            ctx.strokeStyle = randomColor(90,180);
            ctx.beginPath();
            //随机划线--4条路径
            ctx.moveTo(randomNum(0,_width), randomNum(0,_height));
            ctx.lineTo(randomNum(0,_width), randomNum(0,_height));
            ctx.stroke();
        }
        for(var i=0; i<_num*10; i++){
            ctx.fillStyle = randomColor(0,255);
            ctx.beginPath();
            //随机画原，填充颜色
            ctx.arc(randomNum(0,_width),randomNum(0,_height), 1, 0, 2*Math.PI);
            ctx.fill();
        }
        return _picTxt;//返回随机数字符串
    }
    drawPic();
})
