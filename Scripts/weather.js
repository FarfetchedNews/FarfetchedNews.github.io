var test;

d3.tsvParseRows("/Scripts/selectedweather.tsv", function(data) {
    data.forEach(function(d) {
    d.temp = +d.temp;
    test = toString(d.Text);
	})
	console.log(data);
});

document.getElementById("test").textContent = test;