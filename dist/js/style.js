const scroll = new SmoothScroll('a[href*="#"]');
const navbar = document.getElementById('main-nav');

window.onscroll = function() {
	if (window.pageYOffset > 100) {
		// vertical axis above 100px
		navbar.style.backgroundColor = '#333';
	} else {
		// scrolled = false;
		navbar.style.backgroundColor = 'transparent';
	}
};
