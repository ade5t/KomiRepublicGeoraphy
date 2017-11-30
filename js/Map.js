// JavaScript Document
function mouse(event,name,center,people) {
var k=document.getElementById('12');
var pwe=document.getElementById('p1');
var pa=document.getElementById('p2');
var pp=document.getElementById('p3');
	if (event.type==='mouseover') {
		pwe.innerHTML = String(name);
		pa.innerHTML = String(center);
		pp.innerHTML = String(people);
		k.style.left = event.pageX + 0.05*event.pageX + 'px';
		k.style.top = event.pageY + 0.05*event.pageX + 'px';
		k.style.zIndex = 1000; 
		k.style.display='block';
	}
	if (event.type==='mouseout') {
		k.style.display='none';
		pwe.innerHTML = '';
		pa.innerHTML = '';
		pp.innerHTML = '';
	}
}	