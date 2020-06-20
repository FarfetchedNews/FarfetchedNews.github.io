var xhttp = new XMLHttpRequest();
var test;

xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
		var quotearray = xhttp.responseText.trim().split('\t'); //splits string at tab to array
		quoteString = quotearray.join('\n'); //joins the array to a string using new lines to separate
		quotearray = quoteString.split('\n'); //splits the string into an array at the new lines

	//	console.log(quotearray);
	
		//set word
		document.getElementById('quoteMonthQuote').innerText = quotearray[2]; //Start at index two because headers take up the first two indices
		document.getElementById('quoteMonthSayer').innerText = quotearray[3];
	};
};

xhttp.open("GET", "/Scripts/quoteofthemonth.tsv", true);

xhttp.send();