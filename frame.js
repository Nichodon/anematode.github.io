var navbar = document.getElementById("navbar");
var footer = document.getElementById("footer");

navbar.innerHTML =
	'<div>' +
	'<a href="https://anematode.github.io">Home</a>' +
	'<a id="d1">Seasons &#9662;</a>' +
	'<a href="https://anematode.github.io/about">About</a>' +
	'<a href="https://anematode.github.io/sponsor">Sponsorship</a>' +
	'<a>Contribute</a>' +
	'</div>' +
	'<div>' +
	'<a id="d2">&#9652;</a>' +
	'<a href="https://anematode.github.io/seasons/2016">2016 &ndash; 2017</a>' +
	'<a href="https://anematode.github.io/seasons/2017">2017 &ndash; 2018</a>' +
	'</div>';

footer.innerHTML =
	'<p>Copyright &copy; Team Steam 2017 &ndash; <a>Top</a><br>Website by <a href="https://github.com/Nichodon">Nichodon</a></p>';

navbar.children[0].style.position = "absolute";
navbar.children[1].style.transform = "translate(0, 200%)";

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

footer.children[0].children[0].onclick = function() {
	"use strict";
	scroll();
};

var parallax = document.getElementById("parallax");

window.onscroll = function() {
	"use strict";
	var rate = window.scrollY * 25 / parallax.offsetHeight;
	parallax.style.transform = "translate(0%, " + rate + "%)";
};

function scroll() {
	"use strict";
    if (window.scrollY === 0) {
		return;
	}
	window.scrollTo(0, window.scrollY - 100);
    setTimeout(function() {
		scroll();
    }, 10);
}
