import React, { useState } from 'react';
import SearchStocks from '../../components/SearchStocks/SearchStocks';
import StocksList from '../../components/StocksList/StocksList';
import s from './StocksPage.module.scss';

const StocksPage = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (stock) => {
    const favorite = favorites.find((item) => item.figi === stock.figi);
    if (favorite) return;

    const storage = localStorage.getItem('favorites');
    if (storage) {
      localStorage.setItem(
        'favorites',
        JSON.stringify([stock.symbol, ...JSON.parse(storage)])
      );
    } else {
      localStorage.setItem('favorites', JSON.stringify([stock.symbol]));
    }

    setFavorites((prev) => [stock, ...prev]);
  };

  const deleteFromFavorite = (symbol) => {
    const filteredStocks = favorites.filter((el) => el.symbol !== symbol);
    setFavorites(filteredStocks);
  };

  return (
    <div className={s.stocksPage}>
      <h1 className={s.title}>Stocks</h1>
      <SearchStocks addToFavorites={addToFavorites} />
      <StocksList stocks={favorites} deleteFromFavorite={deleteFromFavorite} />
    </div>
  );
};

export default StocksPage;
