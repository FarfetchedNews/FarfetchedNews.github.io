var files = ["/Scripts/selectedweather.tsv"]; //Have no idea if this is necessary or does anything

var promises = []; //stackoverflow says to do this

//Stackoverflow said to write in the following two functions
files.forEach(function(url) {
    promises.push(d3.json(url))
});

Promise.all(promises).then(function(values) {
    console.log(values)
});

d3.tsv("/Scripts/selectedweather.tsv", function(data) {
	console.log(data[1]);
	test = data[1];
	
});

document.getElementById("test").textContent = d3.tsv("/Scripts/selectedweather.tsv", function(data) {
	return (data)
});
