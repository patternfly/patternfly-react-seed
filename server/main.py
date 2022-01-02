from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from datetime import date
from alpha_vantage.timeseries import TimeSeries

app = FastAPI()

ts = TimeSeries(key="P806T3E80Y5C9QNM", output_format="pandas")

@app.get("/")
async def root():
    return {"message": "Hello World"}

app.mount("/static", StaticFiles(directory="src"), name="static")

@app.get("/prices/{symbol}")
async def read_item(symbol: str, start: date, end: date):
    data, _ = ts.get_weekly_adjusted(symbol=symbol)
    data = data[["5. adjusted close","7. dividend amount"]]
    return data.rename(columns={"5. adjusted close": "close", "7. dividend amount": "div"}).to_csv(line_terminator="\n")