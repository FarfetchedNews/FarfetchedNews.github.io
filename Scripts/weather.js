var xhttweather = new XMLHttpRequest();
var test;

xhttweather.onreadystatechange = function() {
	if (xhttweather.readyState == 4 && xhttweather.status == 200) {
		var arrayWithValues = xhttweather.responseText.trim().split('\t'); //splits string at tab to array
		weatherString = arrayWithValues.join('\n'); //joins the array to a string using new lines to separate
		arrayWithValues = weatherString.split('\n'); //splits the string into an array at the new lines
	
	console.log(arrayWithValues);
	
		//set temps
		document.getElementById('suntemp').innerText = arrayWithValues[2]; //Start at index two because headers take up the first two indices
		document.getElementById('montemp').innerText = arrayWithValues[4];
		document.getElementById('tuetemp').innerText = arrayWithValues[6];
		document.getElementById('wedtemp').innerText = arrayWithValues[8];
		document.getElementById('thutemp').innerText = arrayWithValues[10];
		document.getElementById('fritemp').innerText = arrayWithValues[12];
		document.getElementById('sattemp').innerText = arrayWithValues[14];
		
		//setfx
		document.getElementById('sunfx').innerText = arrayWithValues[3]; //Start at index three because headers take up the first two indices
		document.getElementById('monfx').innerText = arrayWithValues[5];
		document.getElementById('tuefx').innerText = arrayWithValues[7];
		document.getElementById('wedfx').innerText = arrayWithValues[9];
		document.getElementById('thufx').innerText = arrayWithValues[11];
		document.getElementById('frifx').innerText = arrayWithValues[13];
		document.getElementById('satfx').innerText = arrayWithValues[15];
		
		//set temps
		document.getElementById('suntempMobile').innerText = arrayWithValues[2]; //Start at index two because headers take up the first two indices
		document.getElementById('montempMobile').innerText = arrayWithValues[4];
		document.getElementById('tuetempMobile').innerText = arrayWithValues[6];
		document.getElementById('wedtempMobile').innerText = arrayWithValues[8];
		document.getElementById('thutempMobile').innerText = arrayWithValues[10];
		document.getElementById('fritempMobile').innerText = arrayWithValues[12];
		document.getElementById('sattempMobile').innerText = arrayWithValues[14];
		
		//setfx
		document.getElementById('sunfxMobile').innerText = arrayWithValues[3]; //Start at index three because headers take up the first two indices
		document.getElementById('monfxMobile').innerText = arrayWithValues[5];
		document.getElementById('tuefxMobile').innerText = arrayWithValues[7];
		document.getElementById('wedfxMobile').innerText = arrayWithValues[9];
		document.getElementById('thufxMobile').innerText = arrayWithValues[11];
		document.getElementById('frifxMobile').innerText = arrayWithValues[13];
		document.getElementById('satfxMobile').innerText = arrayWithValues[15];
	};
};

xhttweather.open("GET", "/Scripts/selectedweather.tsv", true);

xhttweather.send();