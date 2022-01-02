# Call Flow

## MVL - no caching, single ticker symbol
1. Portfolio gets updated
2. App calls backend with ticker symbol and dates
   - Oldest ticker symbols go back to ~1980
   - 2022-1980 = 43 years * 365 days/year = 16K dates
   - 16K dates * 100 bytes = 1.6mb of data per ticker, maximum

3. Backend calls fin API for each ticker symbol and dates
4. Backend compiles prices and dates as CSV
```
Date,AAPLPrice,AAPLDiv,VLCAXPrice,VLCAXDiv
11-1-2020,100,0,200,0
11-2-2020,101,0.34,199,0
```
5. App computes number of shares held of each on every applicable date
6. App displays graph

# Assumptions
* No commissions
* Purchase at closing price each day
* No taxes
* All prices are adjusted; purchase in $ amounts only