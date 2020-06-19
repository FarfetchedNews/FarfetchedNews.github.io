var xhttp = new XMLHttpRequest();
var test;

xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
			var arrayWithValues = xhttp.responseText.trim().split('\t');
			weatherString = arrayWithValues.tostring();
			arrayWithValues = weatherString.split('\n');
			weatherString = arrayWithValues.tostring();
			arrayWithValues = weatherString.split('',);
			console.log(arrayWithValues);
			document.getElementById('test').innerText = arrayWithValues[2];
        };
};

xhttp.open("GET", "/Scripts/selectedweather.tsv", true);

xhttp.send();