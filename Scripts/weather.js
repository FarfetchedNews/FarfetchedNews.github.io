var test;

d3.tsvParseRows("/Scripts/selectedweather.tsv", function(data) {
	for (var i = 0; i < data.length; i++) {
		console.log(data[i].temp);
		console.log(data[i].Text);
	}
});

document.getElementById("test").textContent = test;