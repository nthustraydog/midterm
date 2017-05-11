$(document).ready(function() {
  var btn = $('#ham'),
	  content = $('body'),
	  menu = $('nav');
  $('#ham').click(function(event) {
	event.preventDefault();
	content.toggleClass('open');
	
	if (content.hasClass('open')) {
	  $("#ham").css("color", "#ffffff");
	  menu.stop().animate({
		left: 0
	  }, "fast", "linear");
	  content.animate({
		left: 300
	  }, "fast", "linear");
	} else {
	  $("#ham").css("color", "#000000");
	  menu.stop().animate({
		left: -300
	  }, "fast", "linear");
	  content.animate({
		left: 0
	  }, "fast", "linear");
	}
  });
  
  $('.icon-close').on('click', function(event){
	event.preventDefault();
	content.toggleClass('open');
	if (!content.hasClass('open')){
		$("#ham").css("color", "#000000");
		menu.stop().animate({
			left: -300
		}, "fast", "linear");
		content.animate({
			left: 0
		}, "fast", "linear");
	}
  });
	$(document.getElementById("home-li")).hover(function(){
	   $(document.getElementById("home")).css("color", "white");
	   $(this).css("background-color", "#B4705F");
	}); 
	
	$(document.getElementById("dog-li")).hover(function(){
		$(document.getElementById("dog")).css("color", "black");
		$(this).css("background-color", "white");
	}, function(){
	   $(document.getElementById("dog")).css("color", "white");
	   $(this).css("background-color", "black");
	});
	
	$(document.getElementById("activity-li")).hover(function(){
		$(document.getElementById("activity")).css("color", "black");
		$(this).css("background-color", "white");
	}, function(){
	   $(document.getElementById("activity")).css("color", "white");
	   $(this).css("background-color", "black");
	});
	
	$(document.getElementById("about-li")).hover(function(){
		$(document.getElementById("about")).css("color", "black");
		$(this).css("background-color", "white");
	}, function(){
	   $(document.getElementById("about")).css("color", "white");
	   $(this).css("background-color", "black");
	});
	
	// share button
	
});
		
		
		
		