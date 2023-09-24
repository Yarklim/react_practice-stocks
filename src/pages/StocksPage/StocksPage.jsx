import React, { useState } from 'react';
import SearchStocks from '../../components/SearchStocks/SearchStocks';
import StocksList from '../../components/StocksList/StocksList';
import s from './StocksPage.module.scss';

const StocksPage = () => {
  const [favorites, setFavorites] = useState([]);

  const addSymbolToFavorites = (stock) => {
    const favorite = favorites.find((item) => item.figi === stock.figi);
    if (favorite) return;

    setFavorites((prev) => [stock, ...prev]);
  };

  return (
    <div className={s.stocksPage}>
      <h1 className={s.title}>Stocks</h1>
      <SearchStocks addSymbolToFavorites={addSymbolToFavorites} />
      <StocksList favorites={favorites} />
    </div>
  );
};

export default StocksPage;
