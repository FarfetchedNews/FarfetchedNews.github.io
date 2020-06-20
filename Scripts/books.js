var xhttp = new XMLHttpRequest();
var test;

xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
		var bookarray = xhttp.responseText.trim().split('\t'); //splits string at tab to array
		bookString = bookarray.join('\n'); //joins the array to a string using new lines to separate
		bookarray = bookString.split('\n'); //splits the string into an array at the new lines

	console.log(bookarray);
	
		//set book
		document.getElementById('bookMonthTitle').innerText = bookarray[2]; //Start at index two because headers take up the first two indices
		document.getElementById('bookMonthAuthor').innerText = bookarray[3];
		document.getElementById('bookMonthTitleMobile').innerText = bookarray[2]; //Start at index two because headers take up the first two indices
		document.getElementById('bookMonthAuthorMobile').innerText = bookarray[3];
	};
};

xhttp.open("GET", "/Scripts/bookofthemonth.tsv", true);

xhttp.send();