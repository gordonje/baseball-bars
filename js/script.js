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

	$('.player-name').text(playerData.name);

	$.each(playerData.stats, function(i, item) {

		$('.chart').append(
			"<div class='col-md-12 bar-container'>" +
				"<div class='year'>" + item.year + "</div>"+
				"<div class='bar' style='width: " + item.HR * 10+ "px'></div>"+
				"<div class='total'>" + item.HR + "</div>"+
			"</div>"
			);
	});
}

