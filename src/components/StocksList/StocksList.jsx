import React from 'react';
import StockItem from '../StockItem/StockItem';
import s from './StocksList.module.scss';

const StocksList = ({ favorites }) => {
  return (
    <ul className={s.container}>
      {favorites?.map((stock) => (
        <StockItem key={stock.figi} stock={stock} />
      ))}
    </ul>
  );
};

export default StocksList;
