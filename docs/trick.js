$(document).ready(function() {
	var pass = false;
	var status = 0;
	var pic = 0;
	$(document).keydown(function(event){
		console.log(event.which);
		console.log("current status : " + status);
		switch(event.which){
			case 37: //left
				if(status === 4 || status === 6) status++;
				else status = 0;
				break;
			case 38: //up
				if(status === 0 || status === 1) status++;
				else status = 0;
				break;
			case 39: //right
				if(status === 5 || status === 7) status++;
				else status = 0;
				break;
			case 40: //down
				if(status === 2 || status === 3) status++;
				else status = 0;
				break;
			case 65: //A
				if(status === 9) 
				{
					status = 0
					console.log("Unlock!!");
					if(!pass)
					{
						pass = true;
						var answer = prompt("請輸入通關密碼～～\n提醒：只能輸入一次");
						if(answer == "小桃子")
						{
							$("#peach").attr("src","http://i.imgur.com/64hRmfE.png");
						}
						else
						{
							$("#peach").attr("src","http://i.imgur.com/BxDYBX5.png");
						}
						
					}
					if(pic === 0)
					{
						pic = 1;
						$('#peach').animate({left: "0px"}, 1500);
						$('#peach').animate({left: "-320px"}, 1500,function(){pic = 0});
					}
					else
					{
						pic = 0;
						$('#meatball').animate({right: "0px"}, 1500);
						$('#meatball').animate({right: "-500px"}, 1500);
					}
				}
				else status = 0;
				break;
			case 66: //B
				if(status === 8) status = 9;
				else status = 0;
				break;	
			default:
				status = 0;
		}
	});
});