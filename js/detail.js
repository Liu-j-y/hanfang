$(function() {
    //商品数量增减
    $(".add").click(function() {
        var $num = $(".num-input");
        var num = $num.attr("value");
        var cash=parseInt($(".cash").text());
        var totalPrice=parseInt($(".cash").text());
        $num.attr("value",parseInt(num) + 1);
        totalPrice+=(cash*num);
        $(".cash").css("display","none");
        $(".cash2").text(totalPrice);
    });
    $(".plus").click(function() {
        var $num = $(".num-input");
        var num = $num.attr("value");
        var cash=parseInt($(".cash").text());
        var totalPrice=parseInt($(".cash2").text());
        if(num==1){
            $num.attr("value",1);
        }else{
            $num.attr("value",parseInt(num) - 1);
            totalPrice-=(cash);
            $(".cash2").text(totalPrice);
        }
    });
    //图片放大效果
    $(".jqzoom").jqueryzoom({xzoom:380,yzoom:380});
    
    $(".items li").mouseenter(function(){
        $(this).find(".img-box").css("border","1px solid #000");
        $(this).siblings("li").find(".img-box").css("border","1px solid #eee");
        $(this).find("i").css("display","block");
        $(this).siblings("li").find("i").css("display","none");
    });
    //颜色
    $(".color li").click(function(){
        $(this).addClass("active");
        $(this).find("i").addClass("active");
        $(this).siblings().removeClass("active");
        $(this).siblings().find("i").removeClass("active");
    });
    //尺码
    $(".size a").click(function(){
        $(this).addClass("active");
        $(this).find("i").addClass("active");
        $(this).siblings().removeClass("active");
        $(this).siblings().find("i").removeClass("active");
    });
})
function preview(img){
    $(".jqzoom img").attr("src",$(img).attr("src"));
    $(".jqzoom img").attr("jqimg",$(img).attr("bimg"));
}
function shoppingCar() {
   var id=$("input[name=id]").val();
   var num=$("input[name=num]").val();
   var color=$(".color li.active").attr("title");
   var size=$(".size a.active").attr("title");
   location.href="CartServlet?id="+id+"&num="+num+"&color="+color+"&size="+size;
}
function search(){
    var keyword=$(".keyword").val();
    window.location.href="SearchProductServlet?keyword="+keyword+"&&page=1";
}