jQuery(document).ready(function($){
	'use strict'

	var passed = new Audio('picture.mp3');
	var disabled = false;

	$('.passed').click(function(e){
		if(disabled) {
			return;
		}

		// Show it
		$('.mission-complete').addClass('is-visible');
		// Play it
		passed.play();
		// But dont bug it
		disabled = true;

		setTimeout(function(){
			$('.mission-complete').removeClass('is-visible');
			passed.pause();
			passed.currentTime = 0;

			disabled = false;
		}, 8000);
	});
});