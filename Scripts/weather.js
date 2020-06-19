var xhttp = new XMLHttpRequest();
var test;

xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
                var arrayWithValues = xhttp.responseText.trim().split('\n');
                console.log(arrayWithValues);
        };
};

xhttp.open("GET", "/Scripts/selectedweather.tsv", true);

xhttp.send();

document.getElementById('test').innerText = arrayWithValues[2];