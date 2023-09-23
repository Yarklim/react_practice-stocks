import axios from 'axios';

const API_KEY = 'c4q8am2ad3icc97rdfcg';
const BASE_URL = 'https://finnhub.io/api/v1/';

const stocksApi = {
  getStocks: async () => {
    const { data } = await axios.get(
      `${BASE_URL}/stock/symbol?exchange=US&token=${API_KEY}`
    );

    return data;
  },
};

export default stocksApi;
