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

		stat = item.HR 

		$('.chart').append(
			"<div class='col-md-12 bar-container'>" +
				"<div class='year'>" + item.year + "</div>"+
				"<div class='bar' style='width: " + stat * 10 + "px'></div>"+
				"<div class='total'>" + stat + "</div>"+
			"</div>"
			);
	});
}

