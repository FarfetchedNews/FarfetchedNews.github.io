d3.tsv("/Scripts/selectedweather.tsv", function(data) {
	console.log(data[1]);
	test = data[1];
	
});

document.getElementById("test").textContent = d3.tsv("/Scripts/selectedweather.tsv", function(data) {
	return (data)
});
