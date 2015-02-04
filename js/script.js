var playerData;

$(document).ready(function() {
	getData();
});

function getData() {
	$.getJSON('js/baseballcard.json', function(data) {
		playerData = data;
		drawChart();
	});
}

function drawChart() {
	$.each(playerData.stats, function(i, item) {

		console.log(item)

		var width = item.HR;

		$('.chart').append('<div class="bar" style="width: ' + width * 10 + 'px">' + item.HR + '</div>');
	});
}

