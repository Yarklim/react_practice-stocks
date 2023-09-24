import React from 'react';
import StockItem from '../StockItem/StockItem';
import s from './StocksList.module.scss';

const StocksList = ({ stocks, deleteFromFavorite }) => {
  return (
    <ul className={s.container}>
      {stocks?.map((stock) => (
        <StockItem
          key={stock.figi}
          symbol={stock}
          deleteFromFavorite={deleteFromFavorite}
        />
      ))}
    </ul>
  );
};

export default StocksList;
