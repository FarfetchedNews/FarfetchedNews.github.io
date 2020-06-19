var test;

d3.tsvParseRows("/Scripts/selectedweather.tsv", function(data) {
	console.log(data[0].temp);
	console.log(data[0].Text);
	data.forEach(function(d) {
	d.temp = +d.temp;
	test = toString(d.Text);
	})
});

document.getElementById("test").textContent = test;