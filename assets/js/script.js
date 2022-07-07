$(document).ready(function () {
	$('.header-bar').on('click', function (e) {
		$('.header-navbar').addClass('active');
	});

	$('.header-navbar').on('click', function (e) {
		if ($(e.target).closest('.header-navbar ul').length <= 0) {
			$('.header-navbar').removeClass('active');
		}
	});
});
