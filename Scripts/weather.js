d3.tsv(selectedweather.tsv, function(data) {
	console.log(data);
	test = data[0];
});

var element = document.getElementById("test");
element.textContent = test;