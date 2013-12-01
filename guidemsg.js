(function() {
    'use strict';
    $().ready(function(){
    $.getJSON("guideInfomation.json",function(data){
        var guideData = {};
            $.each(data,function(idx,info){
                guideData[info.id] = info.infomation;
                $('#update-target-location').click(function(){
					var i;
					i = $('#target-locations').val();
					$('#guide-message').text(guideData[i]);
				});
            });
		});
	});
})();
