// jshint devel:true
function randomQuote(element){
	clearTwitterButton();
	$("#boton-cita").button("loading");
	$.ajax({
		url: 'http://api.forismatic.com/api/1.0/',
		data: {method: "getQuote", format: "jsonp", lang: "en"},
		dataType: 'jsonp',
		jsonp: "jsonp"
	}).done(function(data) {
		$(".frase").html(data.quoteText);
		$("#autor").html(data.quoteAuthor);
		$("#autor").attr("title", data.quoteAuthor);
		$("#quote-container").show();
		createTwetterButton(data.quoteText, data.quoteAuthor);
	}).fail(function(error) {
		alert("Ha ocurrido un error, estamos trabajando en ello, por favor, espera unos minutos antes de volver a intentar");
	}).always(function() {
		$("#boton-cita").button("reset");
	});
}

function createTwetterButton(quoteText, author){
	twttr.widgets.createShareButton(
			  'http://arielalvarado.com/randomquote.html',
			  document.getElementById('twitter-button'),
			  {
			    text: quoteText + " --"+ author
			  }
	);
}

function clearTwitterButton(){
	$("#twitter-button").empty();
}