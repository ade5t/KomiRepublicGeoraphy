// JavaScript Document
function mouse(event,name,center,people,link,mystyle) {
var k=document.getElementById('12');
var im=document.getElementById('122');
var pwe=document.getElementById('p1');
var pa=document.getElementById('p2');
var pp=document.getElementById('p3');
	if (event.type==='mouseover') {
		pwe.innerHTML = String(name);
		pa.innerHTML = String(center);
		pp.innerHTML = String(people);
		im.src = im.src.replace("img/1.jpg", link);
		im.style.display = mystyle;
		k.style.left = event.pageX + 0.05*event.pageX + 'px';
		k.style.top = event.pageY + 0.05*event.pageX + 'px';
		k.style.zIndex = 1000; 
		k.style.display = 'block';
	}
	if (event.type==='mouseout') {
		k.style.display='none';
		pwe.innerHTML = '';
		pa.innerHTML = '';
		pp.innerHTML = '';
		im.src = im.src.replace(im.src, "img/1.jpg");
		im.style.display = 'none';
	}
}	