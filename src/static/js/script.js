/*
 * WebdevChecklist
 * https://github.com/BlackTears/webdevchecklist
 *
 * Copyright (c) 2013 Maxim Gladkih
 * Licensed under the MIT license.
 */

(function () {
	'use strict';
	$(function () {
		var currentMarker = $('.sub-list-marker');

		$('.b-article__checkbox').customInput();

		$('a.menu-item__link').on( 'click', function() {
			var elementClick = $(this).attr( 'href'),
				destination = $(elementClick).offset().top;
			$('html:not(:animated),body:not(:animated)').animate(
				{scrollTop: destination},
				1100
			);
			return false;
		});

		currentMarker.on('click', function(){
			var _this = $(this);
			_this.toggleClass('open');
			_this.hasClass('open') ? _this.html('[-]') : _this.html('[+]');
			_this.next('ul').toggle();
		});

	});

})();