// JavaScript Document
var slideIndex = 1;

function plusDivs(n,num) {
	showDivs(slideIndex += n,num);
}

function currentDiv(n,num) {
	showDivs(slideIndex = n,num);
}

function showDivs(n,num) {
var i;
var x = document.getElementsByClassName("mySlides"+' '+String(num));
var dots = document.getElementsByClassName("demo");
	if (n > x.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("w3-dark-grey", "");
		dots[slideIndex-1].className += "w3-transparent";
	}
	x[slideIndex-1].style.display = "block";  
	/*dots[slideIndex-1].className = dots[slideIndex-1].className.replace("w3-transparent", "");
	dots[slideIndex-1].className += "w3-dark-grey";*/
}

var preload=document.getElementById('prel');
function animation() {
	preload.style.display="none";
	preload.style.zIndex=0;	
}
function OffPrell() {
	preload.className = preload.className.replace("preload", "preload1");
	setTimeout(animation, 200);
}