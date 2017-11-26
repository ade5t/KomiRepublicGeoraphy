// JavaScript Document
		var it=0;
		function SlideSprav(col,styl)
		{"use strict";
		 	for (var k=0; k<=col; k++) {
  			if (k===it) {document.getElementById(String(k)).style.display=String(styl);}
				else {document.getElementById(String(k)).style.display="none";}
			}
		}	
		
		function PrevSprav(col,link,styl)
		{"use strict";
			if (it>0)
			{--it;
			 SlideSprav(col,styl);
			}
		 else {location.href=link;}
		}
		
		function NextSprav(col,link,styl)
		{"use strict";
		 if (it<col)
			{++it;
			 SlideSprav(col,styl);
			}
		 else {location.href=link;}
		}

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
		