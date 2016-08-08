$(document).ready(function(){

	// full page 
	$('#fullpage').fullpage({
		anchors: ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6'],
		menu: '.header-navbar-nav',
		navigation: true,
		// animation page - ease, if need 'cubic-bezier' uncomment next line
		// easingc ss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
		scrollingSpeed: 800,
		// resize : true,
		paddingTop: '0px',
		responsiveWidth: 768,
		fixedElements: '.header-navbar'
	});

	// close mobile menu
	$('.header-navbar-nav li a').on('click', function(){

		if ($(window).width() < 768) {
			// hide menu after click
			$('.navbar-collapse').collapse('hide');
			// console.log("I'm button, close me");
		}

	});
});


