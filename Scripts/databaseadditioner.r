
# Variables ---------------------------------------------------------------

quotesSelected <- FALSE
booksSelected <- FALSE
wordsSelected <- FALSE
weatherSelected <- FALSE

newTemp <- NULL
newFx <- NULL
newSayer <- NULL
newQuote <- NULL
newWord <- NULL
newDef <- NULL
newEx <- NULL
newBook <- NULL
newAuthor <- NULL

# database addition ------------------------------------------------------

databaseSelected <- readline(prompt="Press 1 for quotes, 2 for books, 3 for words, and 4 for weather.")

if (databaseSelected == 1) {
  newQuote <- readline(prompt="Enter quote: ")
  newSayer<- readline(prompt="Enter sayer: ")
  quoteandSayer <- data.frame(newQuote, newSayer)
  write.table (quoteandSayer, file = './Databases/quotes.tsv', append = TRUE, sep = '\t', quote = FALSE, na = "MISSING VALUE", row.names = FALSE, col.names = FALSE)
}

if (databaseSelected == 2) {
  newBook <- readline(prompt="Enter book title: ")
  newAuthor<- readline(prompt="Enter author: ")
  titleandAuthor <- data.frame(newBook, newAuthor)
  write.table (titleandAuthor, file = './Databases/books.tsv', append = TRUE, sep = '\t', quote = FALSE, na = "MISSING VALUE", row.names = FALSE, col.names = FALSE)
}

if (databaseSelected == 3) {
  newWord <- readline(prompt="Enter word: ")
  newDef <- readline(prompt="Enter definition: ")
  newEx<- readline(prompt="Enter example: ")
  completedWordSeg <- data.frame(newWord, newDef, newEx)
  write.table (completedWordSeg, file = './Databases/words.tsv', append = TRUE, sep = '\t', quote = FALSE, na = "MISSING VALUE", row.names = FALSE, col.names = FALSE)
}

if (databaseSelected == 4) {
  newTemp <- readline(prompt="Enter temperature: ")
  newFx<- readline(prompt="Enter effect: ")
  weatherJoin <- data.frame(newTemp, newFx)
  write.table (weatherJoin, file = './Databases/weather.tsv', append = TRUE, sep = '\t', quote = FALSE, na = "MISSING VALUE", row.names = FALSE, col.names = FALSE)
}