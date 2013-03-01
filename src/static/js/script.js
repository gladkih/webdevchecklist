/*
 * WebdevChecklist
 * https://github.com/BlackTears/webdevchecklist
 *
 * Copyright (c) 2013 Maxim Gladkih
 * Licensed under the MIT license.
 */

(function () {

	$(function () {
		var currentMarker = $('.sub-list-marker');

		currentMarker.on('click', function(){
			var _this = $(this);
			_this.toggleClass('open');
			_this.hasClass('open') ? _this.html('[-]') : _this.html('[+]');
			_this.next('ul').toggle('slow');
		});
	});

})();