var xhttpquote = new XMLHttpRequest();
var test;

xhttpquote.onreadystatechange = function() {
	if (xhttpquote.readyState == 4 && xhttpquote.status == 200) {
		var quotearray = xhttpquote.responseText.trim().split('\t'); //splits string at tab to array
		quoteString = quotearray.join('\n'); //joins the array to a string using new lines to separate
		quotearray = quoteString.split('\n'); //splits the string into an array at the new lines

	console.log(quotearray);
	
		//set quote
		document.getElementById('quoteMonthQuote').innerText = quotearray[2]; //Start at index two because headers take up the first two indices
		document.getElementById('quoteMonthSayer').innerText = quotearray[3];
		document.getElementById('quoteMonthQuoteMobile').innerText = quotearray[2]; //Start at index two because headers take up the first two indices
		document.getElementById('quoteMonthSayerMobile').innerText = quotearray[3];
	};
};

xhttpquote.open("GET", "/Scripts/quoteofthemonth.tsv", true);

xhttpquote.send();