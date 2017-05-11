$(window).load(function(){
	/*$('html, body').animate({
		scrollTop: 0
	}, 500);*/
});
$(document).ready(function(){
	$(".footer").show();
	new WOW().init();
	
	setArea();
	$(window).on('resize', function(){
		setArea();
	});	
	
	//share
	$('.share_twitter').click(function(){
		window.open('http://twitter.com/share?text=這個粉專超讚！！%0A&url=https://www.facebook.com/NthuCarelife/',
		'test', 'left = 100, top = 200, width = 600, height = 400');
	});
	$('.share_facebook').click(function(){
		window.open('https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=https://www.facebook.com/NthuCarelife/&redirect_uri=https://developers.facebook.com/tools/explorer',
		'test', 'left = 100, top = 200, width = 600, height = 600');
	});
	$('.share_google').click(function(){
		window.open('https://plus.google.com/share?url=https%3A//www.facebook.com/NthuCarelife/',
		'test', 'left = 100, top = 200, width = 600, height = 600');
	});
	

});

//when resize or load website
function setArea(){
	var width = window.innerWidth;
	
	
	$(".nav-desktop a").css("font-size", 21*width/1100);
	$(".nav-desktop a span").css("font-size", 20*width/1100);
	
	if(320 <= width && width <= 1024)
	{
		$('#hamburger').css("display", "block");
		$('.nav-desktop').css("display", "none");
	}
	else
	{
		$('#hamburger').css("display", "none");
		$('.nav-desktop').css("display", "block");
	}
}

