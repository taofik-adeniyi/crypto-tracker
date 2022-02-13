import axios from "axios";

export const axiosInstance =  axios.create({
    baseUrl: 'https://api.coingecko.com/api/v3'
})



export const getDetailedCoinData = async (coinId='bitcoin') => {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`)
        return res.data
    } catch (e) {
        console.log(e);
    }
}

export const getCoinMarketCap = async (coinId='bitcoin', selectedRange) => {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${selectedRange}&interval=hourly`)
        return res.data
    } catch (e) {
        console.log(e);
    }
}

export const getMarketData = async (pageNumber=1) => {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`)
        // console.log('coingecko res:', res);
        return res.data
    } catch (e) {
        console.log(e);
    }
}

export const getWishListCoins = async (pageNumber=1, coinIds) => {
    try {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h`)
      return res.data
    } catch (e) {
      console.log(e);
    }
  }
export const getAllCoins = async () => {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/list?include_platform=false`)
        return res.data
    } catch (e) {
        console.log(e);
    }
}


export const getCandleChartData = async (coinId, days = 1) => {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=usd&days=${days}`)
        return res.data
    } catch (e) {
        console.log(e);
    }
}