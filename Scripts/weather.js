var test;

d3.tsv("/Scripts/selectedweather.tsv", function(data) {
	console.log(data[0]);
	test = data[0];
	
});

document.getElementById("test").textContent = test;