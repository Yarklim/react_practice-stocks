import React from 'react';
import s from './StocksList.module.scss';

const StocksList = ({ favorites }) => {
  return (
    <ul className={s.container}>
      {favorites?.map((stock) => (
        <li key={stock.figi}>{stock.description}</li>
      ))}
    </ul>
  );
};

export default StocksList;
