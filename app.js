(function($) {
	$('input[type="checkbox"]').on('change', function(e) {
		$('.monthly').toggle();
		$('.annually').toggle();
	});
})(jQuery);