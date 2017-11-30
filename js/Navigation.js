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