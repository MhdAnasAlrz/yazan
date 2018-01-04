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
		1:"http://etc.usf.edu/clipart/42100/42158/die_01_42158_lg.gif",
		2:"http://moziru.com/images/dice-clipart-side-2-5.gif",
		3:"http://etc.usf.edu/clipart/42100/42160/die_03_42160_sm.gif",
		4:"http://etc.usf.edu/clipart/42100/42161/die_04_42161_md.gif",
		5:"http://etc.usf.edu/clipart/42100/42162/die_05_42162_lg.gif",
		6:"http://etc.usf.edu/clipart/42100/42164/die_06_42164_lg.gif"
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
		$('.sumResult').html("your result is : "+sum);
		
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
		$('.sumResult1').html("your result is : "+sum1);
		
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