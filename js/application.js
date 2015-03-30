$(document).ready(function() {
	// $('#items-list .quantity').keyup(function () {
	// 	var price = parseInt($('.item-price').data('price'),10);
	// 	var quantity = parseInt($(this).val(),10);
	// 	$('#salmon').text("$" + price * quantity);
	// });


	// $('.quantity').keyup(function () {
	// 	var price = parseInt($('.item-price').data('price'),10);
	// 	var quantity = parseInt($(this).val(),10);
	// 	$('.item-subtotal').text("$" + price * quantity);


//This works but not taking the Item COSTS
	// $('.quantity').keyup(function () {
	// 	var price = parseInt($('.item-price').data('price'),10);
	// 	var quantity = parseInt($(this).val(),10);
	// 	var subTotal = price * quantity;
	// 	$(this).parent().next().text("$" + subTotal);

	$('.quantity').keyup(function () {
		var price = parseInt($(this).parent().prev().data('price'),10);
		var quantity = parseInt($(this).val(),10);
		var subTotal = price * quantity;
		$(this).parent().next().text(subTotal + "$");
	});


 	$('.quantity').keyup(function() {
 		var sum = 0;
 		for (var i = 0; i < $('.item-subtotal').length; i++) {
 		var indexValue = $($('.item-subtotal')[i]).text()
 		console.log(indexValue);
 		console.log(i);
 		var foo = parseInt(indexValue,10);
 			if (isNaN(foo)) {
 				foo = Number("0");
 			} else
 			console.log(foo);
 			sum += foo;
 	}
 		$('#total-price').text("$" + sum)
 	});

//CANT GET GOGOGO BUTTON TO WORK!
	// function playIt() {
 // 		document.getElementById("buttonmp3").innerHTML="<buttonmp3 src='gogogo.mp3' autostart=true loop=false volume=100 hidden=true>";
 // 		return true;
 // 	}

 });

 // $('.item-subtotal')[0]
 // Need an IF statement saying if NaN then give it a value of 0.




