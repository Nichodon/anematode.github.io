document.getElementById("navMenu").innerHTML =
'<div id="hgroup">'+
    '<h1><a href="index.html">FTC Team 11101</a></h1>'+
    '<h2>Robot Fanatics</h2>'+
'</div>'+
'<nav>'+
    '<ul>'+
        '<li><a href="index.html">Home</a></li>'+
		'<li class="dropdown">' +
    		'<a href="javascript:void(0)">Seasons</a>' +
			'<div class="dropdown-content">' +
				'<a href="#" class="drop">2016 &ndash; 2017</a>' +
   				'<a href="#" class="drop">2017 &ndash; 2018</a>' +
				'<a href="#" class="drop">2018 &ndash; 2019</a>' +
   			'</div>' +
  		'</li>' +
        '<li><a href="#">Our Robots</a></li>'+
        '<li><a href="#">FTC Info</a></li>'+
        '<li class="last"><a href="about.html">About Us</a></li>'+
    '</ul>'+
'</nav>';
