# [uncomment and run this line if it isn't working] install.packages("dplyr")

library(dplyr)

# Weather stuffs ----------------------------------------------------------

read.table(file = 'weather.tsv', sep = '\t', row.names = 1, header = TRUE) -> weatherTable

sample_n(weatherTable, 7) -> randomisedWeather

randomisedWeather <- cbind(Row.Names = rownames(randomisedWeather), randomisedWeather)
rownames(randomisedWeather) <- NULL

colnames(randomisedWeather)[1] -> temp
colnames(randomisedWeather)[2] -> text

print(randomisedWeather)

write.table (randomisedWeather, file = "selectedweather.tsv", sep = '\t', quote = FALSE, na = "MISSING VALUE")