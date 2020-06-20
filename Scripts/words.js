var xhttwords = new XMLHttpRequest();
var test;

xhttwords.onreadystatechange = function() {
	if (xhttwords.readyState == 4 && xhttwords.status == 200) {
		var wordarray = xhttwords.responseText.trim().split('\t'); //splits string at tab to array
		wordString = wordarray.join('\n'); //joins the array to a string using new lines to separate
		wordarray = wordString.split('\n'); //splits the string into an array at the new lines

	console.log(wordarray);
	
		//set word
		document.getElementById('wordMonthWord').innerText = wordarray[2]; //Start at index two because headers take up the first two indices
		document.getElementById('wordMonthDef').innerText = wordarray[3];
		document.getElementById('wordMonthEx').innerText = wordarray[4];
		document.getElementById('wordMonthWordMobile').innerText = wordarray[2]; //Start at index two because headers take up the first two indices
		document.getElementById('wordMonthDefMobile').innerText = wordarray[3];
		document.getElementById('wordMonthExMobile').innerText = wordarray[4];
	};
};

xhttwords.open("GET", "/Scripts/wordofthemonth.tsv", true);

xhttwords.send();