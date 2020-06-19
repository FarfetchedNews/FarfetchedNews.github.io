# [uncomment and run this line if it isn't working] install.packages("dplyr")

library(dplyr)

# Weather stuffs ----------------------------------------------------------

read.table(file = 'weather.tsv', sep = '\t', header = TRUE) -> weatherTable

sample_n(weatherTable, 7) -> randomisedWeather

print(randomisedWeather)

write.table (randomisedWeather, file = "selectedweather.txt", append = FALSE, quote = FALSE, sep =  "\t", na = "Missing value")