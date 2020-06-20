# [uncomment and run this line if it isn't working] install.packages("dplyr")

library(dplyr)

# books --------------------------------------------------------------------

read.table(file = '/Databases/books.tsv', sep = '\t', row.names = 1, header = TRUE) -> booksTable

sample_n(booksTable, 1) -> selectedBook

selectedBook <- cbind(title = rownames(selectedBook), selectedBook)
rownames(selectedBook) <- c()

write.table (selectedBook, file = "bookofthemonth.tsv", sep = '\t', quote = FALSE, na = "MISSING VALUE", row.names = FALSE)

# quotes ------------------------------------------------------------------

read.table(file = 'quotes.tsv', sep = '\t', row.names = 1, header = TRUE) -> quotesTable

sample_n(quotesTable, 1) -> selectedQuote

selectedQuote <- cbind(title = rownames(selectedQuote), selectedQuote)
rownames(selectedQuote) <- c()

write.table (selectedQuote, file = "quoteofthemonth.tsv", sep = '\t', quote = FALSE, na = "MISSING VALUE", row.names = FALSE)

# words -------------------------------------------------------------------

read.table(file = 'words.tsv', sep = '\t', row.names = 1, header = TRUE) -> wordsTable

sample_n(wordsTable, 1) -> selectedWord

selectedWord <- cbind(title = rownames(selectedWord), selectedWord)
rownames(selectedWord) <- c()

write.table (selectedWord, file = "wordofthemonth.tsv", sep = '\t', quote = FALSE, na = "MISSING VALUE", row.names = FALSE)
