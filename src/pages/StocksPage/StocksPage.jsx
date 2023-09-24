import React, { useEffect, useState } from 'react';
import SearchStocks from '../../components/SearchStocks/SearchStocks';
import StocksList from '../../components/StocksList/StocksList';
import { addSymbolToFavorites } from '../../helpers/addSymbolToFavorites';
import s from './StocksPage.module.scss';
import { deleteSymbolFromFavorites } from '../../helpers/deleteSymbolFromFavorites';

const StocksPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem('favorites');
    if (storage) {
      setFavorites(JSON.parse(storage));
    }
  }, []);

  const addToFavorites = (symbol) => {
    addSymbolToFavorites(symbol, favorites, () =>
      setFavorites((prev) => [symbol, ...prev])
    );
  };

  const deleteFromFavorite = (symbol) => {
    deleteSymbolFromFavorites(symbol, (newArr) => setFavorites(newArr));
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
