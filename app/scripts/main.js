// jshint devel:true
var $inicio = $("#name-visible") ,
	$acerca_de = $("#acercade-visible"),
	$proyectos = $("#proyectos-visible"),
	$contacto = $("#contacto-visible");

$(window).on("scroll", setElementActiveIfVisible);

function setElementActiveIfVisible(){
	if (isElementInViewport($inicio)){
		setActive($("#navbar ul li a[href='#inicio-aa']").parent());
	}else if (isElementInViewport($acerca_de)){
		setActive($("#navbar ul li a[href='#acercade-aa']").parent());
	}else if (isElementInViewport($proyectos)){
		setActive($("#navbar ul li a[href='#proyectos-aa']").parent());
	}else if (isElementInViewport($contacto)){
		setActive($("#navbar ul li a[href='#contacto-aa']").parent());
	}
}

function setActive(element){
	$("#navbar ul li.active").removeClass('active')
	element.addClass('active');
}

// function from https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
function isElementInViewport (el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

$(document).ready(function(){
	setElementActiveIfVisible();
});