$(function(){
$(".slider #pictures li").hide();
$(".slider #pictures li:first").show();
$(".slider #buttons li:first").addClass("aktif");
$(".slider #buttons li").hover(function(){
	var index=$(this).index();
	$(".slider #pictures li").hide();
	$(".slider #pictures li:eq("+index+")").fadeIn("slow");
	$(".slider #buttons li").removeClass("aktif");
	$(".slider #buttons li:eq("+index+")").addClass("aktif");
	return false
})
});
$(function(){
$(".slider2 #pictures2 li").hide();
$(".slider2 #pictures2 li:first").show();
$(".slider2 #buttons2 li:first").addClass("aktif2");
$(".slider2 #buttons2 li").hover(function(){
	var index=$(this).index();
	$(".slider2 #pictures2 li").hide();
	$(".slider2 #pictures2 li:eq("+index+")").fadeIn("slow");
	$(".slider2 #buttons2 li").removeClass("aktif2");
	$(".slider2 #buttons2 li:eq("+index+")").addClass("aktif2");
	return false
})
});
$(function(){
$(".slider3 #pictures3 li").hide();
$(".slider3 #pictures3 li:first").show();
$(".slider3 #buttons3 li:first").addClass("aktif3");
$(".slider3 #buttons3 li").hover(function(){
	var index=$(this).index();
	$(".slider3 #pictures3 li").hide();
	$(".slider3 #pictures3 li:eq("+index+")").fadeIn("slow");
	$(".slider3 #buttons3 li").removeClass("aktif3");
	$(".slider3 #buttons3 li:eq("+index+")").addClass("aktif3");
	return false
})
});
$(function(){
$(".slider4 #pictures4 li").hide();
$(".slider4 #pictures4 li:first").show();
$(".slider4 #buttons4 li:first").addClass("aktif4");
$(".slider4 #buttons4 li").hover(function(){
	var index=$(this).index();
	$(".slider4 #pictures4 li").hide();
	$(".slider4 #pictures4 li:eq("+index+")").fadeIn("slow");
	$(".slider4 #buttons4 li").removeClass("aktif4");
	$(".slider4 #buttons4 li:eq("+index+")").addClass("aktif4");
	return false
})
});
$(function(){
$(".slider5 #pictures5 li").hide();
$(".slider5 #pictures5 li:first").show();
$(".slider5 #buttons5 li:first").addClass("aktif5");
$(".slider5 #buttons5 li").hover(function(){
	var index=$(this).index();
	$(".slider5 #pictures5 li").hide();
	$(".slider5 #pictures5 li:eq("+index+")").fadeIn("slow");
	$(".slider5 #buttons5 li").removeClass("aktif5");
	$(".slider5 #buttons5 li:eq("+index+")").addClass("aktif5");
	return false
})
}); 
