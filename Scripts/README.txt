tsv files are tab-separated values
I chose tsv over csv(comma-separated value) because tsv is more efficient in loading, and easier to read for people
The first row is header to lable the two columns
I have created a script using R that will pull 5 random lines from the tsv and write them to a document
The R script will import the words.tsv, weather.tsv, quotes.tsv, and books.tsv files, pull random lines from them, and then write them to a file

However, it renders the data to a csv(for now)