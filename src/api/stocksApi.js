import axios from 'axios';

const API_KEY = 'c4q8am2ad3icc97rdfcg';
const BASE_URL = 'https://finnhub.io/api/v1/';
// 'https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token='
// 'https://finnhub.io/api/v1/quote?symbol=AAPL&token=';
const stocksApi = {
  getStocks: async () => {
    const { data } = await axios.get(
      `${BASE_URL}/stock/symbol?exchange=US&token=${API_KEY}`
    );

    return data;
  },

  getProfile: (symbol) =>
    axios.get(`${BASE_URL}/stock/profile2?symbol=${symbol}&token=${API_KEY}`),
  getPrice: (symbol) =>
    axios.get(`${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`),
};

export default stocksApi;
