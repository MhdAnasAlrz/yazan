$(document).ready(function(){

		var p1 = prompt("first player put your name :");
		var p2 = prompt("second player put your name :");

		$(".p1").html(p1);
		$(".p2").html(p2);

		$(".roll1").css('display','block');
		$(".roll4").css('display','block');
	$('.playAgain').click(function(){
		location.reload();
	});




	var arr = [];
	var img={
		1:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/600px-Dice-1-b.svg.png",
		2:"http://laoblogger.com/images/2-dice-clipart-5.jpg",
		3:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/600px-Dice-3-b.svg.png",
		4:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/768px-Dice-4-b.svg.png",
		5:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/768px-Dice-5-b.svg.png",
		6:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dice-6a-b.svg/1024px-Dice-6a-b.svg.png"
	};
	$(".roll1").click(function(){
		var number = Math.floor(Math.random() * 6) + 1;
		arr.push(number);
		$(".result1").html(number);
		$(".dice").attr("src",img[number]);
		$(".roll1").css('display','none');
		$(".roll2").css('display','block');
	})
	$(".roll2").click(function(){
		var number = Math.floor(Math.random() * 6) + 1;
		arr.push(number);
		$(".result2").html(number);
		$(".dice").attr("src",img[number]);
		$(".roll2").css('display','none');
		$(".roll3").css('display','block');
	})
	var sum = 0;
	$(".roll3").click(function(){
		var number = Math.floor(Math.random() * 6) + 1;
		arr.push(number);
		$(".result3").html(number);
		$(".dice").attr("src",img[number]);
		$(".roll3").css('display','none');
		
		for (var i = 0; i < arr.length; i++) {
			sum +=arr[i]
		}
		$('.sumResult').html(p1+" - "+sum);
		
		if (sum>0 && sum1>0) {
			setTimeout(yazan, 400);
		}
	})




	var arr1 = [];
	$(".roll4").click(function(){
		var number1 = Math.floor(Math.random() * 6) + 1;
		arr1.push(number1);
		$(".result4").html(number1);
		$(".dice").attr("src",img[number1]);
		$(".roll4").css('display','none');
		$(".roll5").css('display','block');
	})
	$(".roll5").click(function(){
		var number1 = Math.floor(Math.random() * 6) + 1;
		arr1.push(number1);
		$(".result5").html(number1);
		$(".dice").attr("src",img[number1]);
		$(".roll5").css('display','none');
		$(".roll6").css('display','block');
	})
	var sum1 = 0;
	$(".roll6").click(function(){
		var number1 = Math.floor(Math.random() * 6) + 1;
		arr1.push(number1);
		$(".result6").html(number1);
		$(".dice").attr("src",img[number1]);
		$(".roll6").css('display','none');
		
		for (var y = 0; y < arr1.length; y++) {
			sum1 +=arr1[y]
		}
		$('.sumResult1').html(p2+" - "+sum1);
		
		if (sum>0 && sum1>0) {
			setTimeout(yazan, 400);
		}
	})

	function yazan(){
		if (sum > sum1) {
			alert(p1 +" you win !!");
		}else if (sum === sum1) {
			alert("no one win :(");
		}else{
			alert(p2 +" you win !!");
		}
	}
	





});