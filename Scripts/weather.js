d3.tsv("/Scripts/selectedweather.tsv", function(data) {
	console.log(data[0]);
	test = data[0];
	
});

var element = document.getElementById("test");
element.textContent = test;