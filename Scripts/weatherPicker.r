# [uncomment and run this line if it isn't working] install.packages("dplyr")

library(dplyr)

# body ----------------------------------------------------------

read.table(file = 'weather.tsv', sep = '\t', row.names = 1, header = TRUE) -> weatherTable

sample_n(weatherTable, 7) -> randomisedWeather

randomisedWeather <- cbind(temp = rownames(randomisedWeather), randomisedWeather)
rownames(randomisedWeather) <- c()

#print(randomisedWeather[2])

write.table (randomisedWeather, file = "selectedweather.tsv", sep = '\t', quote = FALSE, na = "MISSING VALUE", row.names = FALSE)