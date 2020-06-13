$(document).ready(function(){
	$(".tab-mobile").click(function () {
    	$(".form-log-username").removeClass("active");
        $(".form-log-mobile").addClass("active");
        $(".tab-mobile").css({"background":"#333333","color":"#ffffff"});
        $(".tab-username").css({"background":"#f3f3f3","color":"#333333"});
    })
    $(".tab-username").click(function () {
        $(".form-log-mobile").removeClass("active");
        $(".form-log-username").addClass("active");
        $(".tab-username").css({"background":"#333333","color":"#ffffff"});
        $(".tab-mobile").css({"background":"#f3f3f3","color":"#333333"});
    })

	//通过账号密码登录
    $(".form-log-username :input").blur(function () {
        var $parent = $(this).parent();
        //验证姓名
        if($(this).is("#username")){
            var nameVal = $.trim(this.value); //原生js去空格方式：this.replace(/(^\s*)|(\s*$)/g, "")
            // var regName = /[~#^$%&!*()<>:;'"{}【】  ]/;
            var errortips = $(".errortips:eq(0)");
            if(nameVal == ""){
        		errortips.text("*请输入账号");
        		$(".con .username").css("border","1px solid #CF4633");
            }
            else if(nameVal.length < 3 || nameVal.length >16){
            	errortips.text("*账号应在3-16个字符之间");
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
    });

    //通过手机快捷登录
    $(".form-log-mobile :input").blur(function () {
        var $parent = $(this).parent();
        //验证姓名
        if($(this).is("#mobile")){
            var mobVal = $.trim(this.value); //原生js去空格方式：this.replace(/(^\s*)|(\s*$)/g, "")
            var regMob = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
            var errortips = $(".errortips:eq(2)");
            if(mobVal == ""){
        		errortips.text("*请输入手机号码");
        		 $(".con .mobile").css("border","1px solid #CF4633");
            }
            else if(mobVal.length != 11 || (!regMob.test(mobVal))){
            	errortips.text("*请输入正确的手机号码");
            	$(".con .mobile").css("border","1px solid #CF4633");
            }
            else{
                errortips.text("");
                $(".con .mobile").css("border","1px solid #e3e2e2");
            }
        }
        //验证密码
        if($(this).is("#code")){
            var pwdVal = $.trim(this.value);
            var errortips = $(".errortips:eq(3)");
            if(pwdVal== ""){
               errortips.text("*请输入短信验证码");
               $(".con .code").css("border","1px solid #CF4633");
            }
            else if(pwdVal.length !=4 ){
            	errortips.text("*请输入正确短信验证码");
            	$(".con .code").css("border","1px solid #CF4633");
            }
            else{
               errortips.text("");
               $(".con .code").css("border","1px solid #e3e2e2");
            }
        }
    });
})