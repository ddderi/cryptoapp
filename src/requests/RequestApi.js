import axios from "axios"


export async function fetchCrypto(page, setCrypto){
    try{
        const result = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${page}&sparkline=false`)
        setCrypto(result.data)
        return result.data
    }catch(error){
        console.log(error)
    }
}

export async function nextPageCrypto(page){
    try{
        const result = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${page}&sparkline=false`)
        return result.data
    }catch(error){
        console.log(error)
    }
}


export async function fetchNews(setNews){
    try{
        const result = await axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&limit=10&')
        setNews(result.data.Data)
        return result.data.Data
    }catch(error){
        console.log(error)
    }
}
