var debeCorrer = false,
	percentage = 0;
$("#inner-inner-circle").on("click", function(){
	debeCorrer = !debeCorrer;
	if (debeCorrer){
		run();
	}
});


function doIt(percentage){	
	var first = percentage,
		second = percentage + 1,
		third = percentage + 2;

	$("#inner-inner-circle").css({
		background: "-webkit-linear-gradient( 0deg, #00FF22, "+first+"%, #00FF22, "+second+"%, #000000, "+third+"%, #000000)",
		background: "-moz-linear-gradient( 0deg, #00FF22, "+first+"%, #00FF22, "+second+"%, #000000, "+third+"%, #000000)",
		background: "-ms-linear-gradient( 0deg, #00FF22, "+first+"%, #00FF22, "+second+"%, #000000, "+third+"%, #000000)",
		background: "-o-linear-gradient( 0deg, #00FF22, "+first+"%, #00FF22, "+second+"%, #000000, "+third+"%, #000000)",
		background: "linear-gradient( 0deg, #00FF22, "+first+"%, #00FF22, "+second+"%, #000000, "+third+"%, #000000)"
	});	
}

function run(){
	window.setInterval(function(){
		percentage = percentage + 1;
  		doIt(percentage);
	}, 1000);
}