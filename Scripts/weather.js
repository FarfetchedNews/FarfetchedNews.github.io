d3.tsv("/Scripts/selectedweather.tsv", function(data) {
	console.log(data);
	test = data[2];
});

var element = document.getElementById("test");
element.textContent = test;