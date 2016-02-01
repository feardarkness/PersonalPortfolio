var mustRun = false,
	percentage = 0,
	breakTime = 5,
	workTime = 25,
	elapsedTime = -1,
	breakOrWork = "work",
	workColor = "#00FF22",
	breakColor = "#D61B1B",
	color = workColor,
	interval = undefined;

$("#inner-inner-circle").on("click", function(){
	mustRun = !mustRun;
	if (mustRun){
		workTime = convertMinutesToSeconds($("#work-time").html());
		breakTime = convertMinutesToSeconds($("#break-time").html());
		run();
	}else{
		clearTimerInterval();
		resetTimer();
	}
});

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
		breakOrWork = "break";
		color = breakColor;
	}else{
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
	$("#inner-inner-circle").css({
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

function run(){
	
	interval = window.setInterval(function(){
					var totalTime = getTotalTime();
					elapsedTime = elapsedTime + 1;
					if(elapsedTime > totalTime){
						changeMoment();
						resetTimer();
					}
			  		doIt(calculatePercentage(elapsedTime, totalTime), color);
				}, 1000);
}