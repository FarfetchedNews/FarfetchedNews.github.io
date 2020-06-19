sunday = d3.tsv("/Scripts/selectedweather.tsv",[1]);
monday = d3.tsv("/Scripts/selectedweather.tsv",[2]);
tuesday = d3.tsv("/Scripts/selectedweather.tsv",[3]);
wednesday = d3.tsv("/Scripts/selectedweather.tsv",[4]);
thursday = d3.tsv("/Scripts/selectedweather.tsv",[5]);
friday = d3.tsv("/Scripts/selectedweather.tsv",[6]);
saturday = d3.tsv("/Scripts/selectedweather.tsv",[7]);

var element = document.getElementById("test");
element.textContent = "sunday";