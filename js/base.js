$(document).ready(function(){
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>258){
			$(".header").css("visibility","hidden");
			$(".container .header-logo").css("visibility","hidden");
			$(".nav-container").css({"position":"fixed","width":"100%","padding-left":"18.4%","top":"0","border-bottom":"1px solid #999"});
			$(".container .nav-container .nav ul li.item").css("padding","10px 3px");
			$("#nav_logo").css("display","block");
		}else{
			$(".header").css("visibility","visible");
			$(".container .header-logo").css("visibility","visible");
			$(".nav-container").css({"position":"relative","width":"1200px","padding":"0","border-bottom":"0"});
			$(".container .nav-container .nav ul li.item").css("padding","10px");
			$("#nav_logo").css("display","none");
		}
	})
})
