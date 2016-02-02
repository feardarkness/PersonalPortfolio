$(".text-fit").fitText();

$(".plus-minus").on('click', function(event) {
	var $span = $(this).parent().children('.time-display').first(),
		value = +$span.html();
	if ( $(this).next().is('span') ){
		if(value+1 <= 100){
			$span.html(+$span.html() + 1);
		}
	}else{
		if(value-1 >= 1){
			$span.html(+$span.html() - 1);
		}
	}
});

var mustRun = false,
	percentage = 0,
	breakTime = 5,
	workTime = 25,
	elapsedTime = -1,
	breakOrWork = "work",
	workColor = "#1DCC34",
	breakColor = "#D61B1B",
	color = workColor,
	interval = undefined,
	circleId = "#inner-circle", 
	textId = "#floating-text";

$(circleId + ", "+textId).on("click", function(){
	mustRun = !mustRun;
	if (mustRun){
		setWorkTime();
		setBreakTime();
		run();
	}else{
		clearTimerInterval();
		resetTimer();
	}
});

function setWorkTime(){
	workTime = convertMinutesToSeconds($("#work-time").html());
}

function setBreakTime(){
	breakTime = convertMinutesToSeconds($("#break-time").html());
}

function resetTimer(){
	elapsedTime = -1;
	percentage = 0;
	breakOrWork = "work";
	color = workColor;
}

function getTotalTime(){
	if(breakOrWork == "work"){
		return workTime;
	}else{
		return breakTime;
	}
}

function changeMoment(){
	if (breakOrWork == "work"){
		setWorkTime();
		breakOrWork = "break";
		color = breakColor;
	}else{
		setBreakTime();
		breakOrWork = "work";
		color = workColor;
	}
}

/*
	totalTime must be break or work time, depending of the moment
*/
function calculatePercentage(elapsedTime, totalTime){
	return (elapsedTime * 100) / +totalTime;
}

function convertMinutesToSeconds(minutes){
	return minutes * 60;
}
/**/

function doIt(percentage, color){	
	var first = percentage,
		second = percentage + 1,
		third = percentage + 2;
	$(circleId).css({
		background: "-webkit-linear-gradient( 0deg, "+color+", "+first+"%, "+color+", "+second+"%, #000000, "+third+"%, #000000)",
		background: "-moz-linear-gradient( 0deg, "+color+", "+first+"%, "+color+", "+second+"%, #000000, "+third+"%, #000000)",
		background: "-ms-linear-gradient( 0deg, "+color+", "+first+"%, "+color+", "+second+"%, #000000, "+third+"%, #000000)",
		background: "-o-linear-gradient( 0deg, "+color+", "+first+"%, "+color+", "+second+"%, #000000, "+third+"%, #000000)",
		background: "linear-gradient( 0deg, "+color+", "+first+"%, "+color+", "+second+"%, #000000, "+third+"%, #000000)"
	});	
}

function clearTimerInterval(){
	window.clearInterval(interval);
}

function convertSecondsToMinutes(seconds){
	var minutes = ("0" + (Math.floor(seconds/60))).slice(-2),
		seconds = ("0" + (seconds % 60)).slice(-2);

	return minutes + ":" +seconds;
}

function run(){
	
	interval = window.setInterval(function(){
					var totalTime = getTotalTime();
					elapsedTime = elapsedTime + 1;
					$("#current-time").html(convertSecondsToMinutes(totalTime - elapsedTime));
					doIt(calculatePercentage(elapsedTime, totalTime), color);
					if(elapsedTime + 1 > totalTime){
						changeMoment();
						elapsedTime = -1;
						//resetTimer();
					}
			  		
				}, 1000);
}