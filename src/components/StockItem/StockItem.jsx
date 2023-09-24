import React from 'react';
import s from './StockItem.module.scss';

const StockItem = ({ stock, deleteFromFavorite }) => {
  return (
    <li className={s.stockItem}>
      <p>{stock.description}</p>
      <p onClick={() => deleteFromFavorite(stock.symbol)} className={s.delete}>
        Delete
      </p>
    </li>
  );
};

export default StockItem;
