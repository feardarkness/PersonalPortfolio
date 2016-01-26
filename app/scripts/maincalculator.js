var result = 0,
	oldOperation = "+",
	operationSet = false;
$(".calc-button").on("click", function () {
	var keyValue = $(this).html(),
		oldOperation = "";
	if (isNumberOrDot(keyValue)){			
		handleDotOrNumberPressed(keyValue);
		operationSet = false;
	}else if(isClearScreen(keyValue)){
		handleClearScreenPressed(keyValue);
		operationSet = false;
	}else if(isOperationOrEqual(keyValue)){
		handleOperation(keyValue);		
		operationSet = true;
	}

});

function handleOperation(keyValue){
	makeCalculation(getScreenValue());
	setValueOnScreen(result);
	oldOperation = keyValue;
}

function makeCalculation(screenValue){	
	if (isAddition(oldOperation)){		
		result = result + +screenValue;
	}else if (isSubtraction(oldOperation)){
		result = result - +screenValue;
	}else if (isDivision(oldOperation)){
		result = result / +screenValue;
	}else if (isMultiplication(oldOperation)){
		result = result * +screenValue;
	}else if(isEqual(oldOperation)){
		result = screenValue;
	}else if(isPercentage(oldOperation)){
		result = (result / 100) * + screenValue;
	}
}

function getScreenValue(){
	return $(".calc-screen").html();
}


function handleClearScreenPressed(keyValue){	
	if (keyValue == "CE"){
		result = 0;
		oldOperation = "+";
	}
	setValueOnScreen("0");
}

function handleDotOrNumberPressed(keyValue){
	var newScreenValue = "",
		screenValue = getScreenValue();
	if(operationSet){		
		screenValue = "0";
	}
	if (isDot(keyValue)){			
		if (!screenHasDot(screenValue) && screenValue == "0"){
			newScreenValue = "0.";
		}else if(!screenHasDot(screenValue)){
			newScreenValue = screenValue + keyValue;
		}else{
			newScreenValue = screenValue;
		}			
	}else if(screenValue == "0"){			
		newScreenValue = keyValue;
	}else{
		newScreenValue = screenValue+keyValue;
	}
	setValueOnScreen(newScreenValue);
}

function setValueOnScreen(value){
	$(".calc-screen").html(value);
}

function isAddition(keyValue){
	if (keyValue == "+"){
		return true;
	}
	return false;	
}

function isSubtraction(keyValue){
	if (keyValue == "-"){
		return true;
	}
	return false;	
}

function isMultiplication(keyValue){
	if (keyValue == "x"){
		return true;
	}
	return false;	
}

function isDivision(keyValue){
	if (keyValue == "\u00F7"){
		return true;
	}
	return false;	
}

function isOperation(keyValue){
	if (isMultiplication(keyValue) || isSubtraction(keyValue) || 
		isAddition(keyValue) || isDivision(keyValue) || keyValue == "%"){
		return true;
	}
	return false;
}

function isOperationOrEqual (keyValue){
	if(isOperation(keyValue) || isEqual(keyValue)){
		return true;
	}
	return false;
}

/* from https://stackoverflow.com/questions/6449611/how-to-check-whether-a-value-is-a-number-in-javascript-or-jquery */
function isNumber(keyValue) {
	return !isNaN(parseFloat(keyValue)) && isFinite(keyValue);
}

function isClearScreen(keyValue){
	if (keyValue == "AC" || keyValue == "CE"){
		return true;
	}
	return false;
}

function isDot(keyValue){
	if (keyValue == "."){
		return true;
	}
	return false;
}

function isEqual(keyValue){
	if (keyValue == "="){
		return true;
	}
	return false;
}

function isPercentage(keyValue){
	if (keyValue == "%"){
		return true;
	}
	return false;
}

function isNumberOrDot(keyValue){
	if (isNumber(keyValue) || isDot(keyValue)){
		return true;
	}
	return false;
}

function screenHasDot(screenValue){
	if (screenValue.indexOf(".") != -1){
		return true;
	}
	return false;
}