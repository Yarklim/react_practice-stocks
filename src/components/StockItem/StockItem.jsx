import React from 'react';
import s from './StockItem.module.scss';

const StockItem = ({ stock }) => {
  return <li className={s.stockItem}>{stock.description}</li>;
};

export default StockItem;
