// JavaScript Document
		var i=0;
		function SlideSprav(col)
		{"use strict";
		 	for (var k=0; k<=col; k++) {
  			if (k===i) {document.getElementById(String(k)).style.display="inline-block";}
				else {document.getElementById(String(k)).style.display="none";}
			}
		}	
		
		function PrevSprav(col,link)
		{"use strict";
			if (i>0)
			{--i;
			 SlideSprav(col);
			}
		 else {location.href=link;}
		}
		
		function NextSprav(col,link)
		{"use strict";
		 if (i<col)
			{++i;
			 SlideSprav(col);
			}
		 else {location.href=link;}
		}