var xhttp = new XMLHttpRequest();
var test;

xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
			var arrayWithValues = xhttp.responseText.trim().split('\t');
			var finalArrayWithValues = arrayWithValues.trim.split('\n');
			console.log(finalArrayWithValues);
			document.getElementById('test').innerText = finalArrayWithValues[2];
        };
};

xhttp.open("GET", "/Scripts/selectedweather.tsv", true);

xhttp.send();