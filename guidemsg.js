(function() {
	'use strict';
	$().ready(function() {
		$('#update-target-location').click(function() {
			$.getJSON("guideInfomation.json",function(data){
				$.each(data,function(idx,info){
					var i;
					i = $('#target-locations').val();
					if (info.id==i){
						$('#guide-message').text(info.infomation);
					}
				});
			});
		});
	});
})();
