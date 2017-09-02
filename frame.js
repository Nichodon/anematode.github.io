var navbar = document.getElementById("navbar");

navbar.innerHTML =
	'<div>' +
	'<a>Home</a>' +
	'<a id="d1">Seasons &#9662;</a>' +
	'<a>Robots</a>' +
	'<a>About</a>' +
	'<a>Contribute</a>' +
	'</div>' + 
	'<div>' +
	'<a id="d2">&#9652;</a>' +
	'<a>2016 &ndash; 2017</a>' +
	'<a>2017 &ndash; 2018</a>' +
	'<a>2018 &ndash; 2019</a>' +
	'</div>';

navbar.children[0].style.position = "absolute";
navbar.children[1].style.transform = "translate(0, 100%)";

document.getElementById("d1").onclick = function() {
	"use strict";
	navbar.children[0].style.transform = "translate(0, -200%)";
	navbar.children[1].style.transform = "translate(0, 0)";
};

document.getElementById("d2").onclick = function() {
	"use strict";
	navbar.children[0].style.transform = "translate(0, 0)";
	navbar.children[1].style.transform = "translate(0, 200%)";
};

var parallax = document.getElementById("parallax");

window.onscroll = function() {
	"use strict";
	var rate = document.body.scrollTop * 25 / parallax.offsetHeight;
	parallax.style.transform = "translate(0%, " + rate + "%)";
};