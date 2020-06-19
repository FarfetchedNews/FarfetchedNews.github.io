d3.tsv("/Scripts/selectedweather.tsv", function(data) {
	console.log(data[0]);
	test = data[1];
	
});

document.getElementById("test").textContent = test;