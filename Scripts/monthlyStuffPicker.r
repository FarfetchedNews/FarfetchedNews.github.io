# [uncomment and run this line if it isn't working] install.packages("dplyr")

library(dplyr)


# books --------------------------------------------------------------------

read.table(file = 'books.tsv', sep = '\t', row.names = 1, header = TRUE) -> booksTable

sample_n(booksTable, 1) -> selectedBook

selectedBook <- cbind(title = rownames(selectedBook), selectedBook)
rownames(selectedBook) <- c()

write.table (selectedBook, file = "bookofthemonth.tsv", sep = '\t', quote = FALSE, na = "MISSING VALUE", row.names = FALSE)