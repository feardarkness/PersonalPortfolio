$(".calc-button").on("click", function (element) {
	 
});

function esSuma(tecla){
	if (tecla == "+"){
		return true;
	}
	return false;	
}

function esResta(tecla){
	if (tecla == "-"){
		return true;
	}
	return false;	
}

function esMulti(tecla){
	if (tecla == "x"){
		return true;
	}
	return false;	
}

function esDiv(tecla){
	if (tecla == "\u00F7"){
		return true;
	}
	return false;	
}

function esOperacion(tecla){
	if (esMulti(tecla) || esResta(tecla) || esSuma(tecla) || esDiv(tecla) || tecla == "%"){
		return true;
	}
	return false;
}

/* from https://stackoverflow.com/questions/6449611/how-to-check-whether-a-value-is-a-number-in-javascript-or-jquery */
function esNumero(tecla) {
	return !isNaN(parseFloat(tecla)) && isFinite(tecla);
}

function esLimpiaPantalla(tecla){
	if (tecla == "AC" || tecla == "CA"){
		return true;
	}
	return false;
}

function esSeparadorDecimal(tecla){
	if (tecla == "."){
		return true;
	}
	return false;
}

function esIgual(tecla){
	if (tecla == "="){
		return true;
	}
	return false;
}