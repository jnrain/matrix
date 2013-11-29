(function() {
	'use strict';

	var guideText = [
			"出来体育馆后，向背对体育馆的方向直走，直到左边是文浩馆时，向右拐直走即可",
			"出来体育馆后，向右走，直到体育馆的正门，向左拐，直走到第一个路口，向右拐，直走到第一个路口，向左拐直走即可",
			"出来体育馆后，向右走，直到体育馆的正门，向左拐，直走到第一个路口，向右拐直走即可",
			"出来体育馆后，向背对体育馆的方向直走，直到左边是文浩馆时，向右拐直走即可",
			"出来体育馆后，向背对体育馆的方向直走，过桥后右拐即可",
			"给我好好选"
			];

	$().ready(function() {
		$('#update-target-location').click(function() {
			var sel = $('#target-locations').val();

			$('#guide-message').text(guideText[sel]);
		});
	});
})();
