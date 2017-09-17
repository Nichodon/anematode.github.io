var navbar = document.getElementById("navbar");
var footer = document.getElementById("footer");

navbar.innerHTML =
	'<div>' +
	'<a href="https://anematode.github.io/">Home</a>' +
	'<a id="d1">Seasons &#9662;</a>' +
	'<a>Robots</a>' +
	'<a href="https://anematode.github.io/about/">About</a>' +
	'<a href="https://anematode.github.io/sponsor/">Sponsorship</a>' +
	'<a>Contribute</a>' +
	'</div>' +
	'<div>' +
	'<a id="d2">&#9652;</a>' +
	'<a href="https://anematode.github.io/seasons/2016-2017.html">2016 &ndash; 2017</a>' +
	'<a href="https://anematode.github.io/seasons/2017-2018.html">2017 &ndash; 2018</a>' +
	'</div>';

footer.innerHTML =
	'<p>Copyright &copy; Team Steam 2017 &ndash; <a>Top</a></p>';

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
	var rate = document.body.scrollTop * 25 / parallax.offsetHeight;
	parallax.style.transform = "translate(0%, " + rate + "%)";
};

function scroll() {
	"use strict";
    if (document.body.scrollTop === 0) {
		return;
	}
	document.body.scrollTop -= 100;
    setTimeout(function() {
		scroll();
    }, 10);
}
