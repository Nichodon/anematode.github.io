document.getElementById("navbar").innerHTML =
	'<a>Home</a>' +
	'<a>Seasons</a>' +
	'<a>Robots</a>' +
	'<a>About</a>' +
	'<a>Contribute</a>';

var parallax = document.getElementsByClassName("parallax")[0];

window.onscroll = function() {
	"use strict";
	var rate = document.body.scrollTop * 25 / parallax.offsetHeight;
	parallax.style.transform = "translate(0%, " + rate + "%)";
};