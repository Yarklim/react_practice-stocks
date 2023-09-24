import React from 'react';
import { useQuery } from 'react-query';
import stocksApi from '../../api/stocksApi';
import stockImg from '../../assets/stock.jpg';
import s from './StockItem.module.scss';

const fetchStock = async (symbol) => {
  const price = await stocksApi['getPrice'](symbol);
  const profile = await stocksApi['getProfile'](symbol);

  const stock = { ...profile.data, price: price.data.c };

  return stock;
};

const StockItem = ({ stock, deleteFromFavorite }) => {
  const { data, isLoading } = useQuery(`getStock/${stock.symbol}`, () =>
    fetchStock(stock.symbol)
  );
  return (
    <li className={s.stockItem}>
      <div className={s.info}>
        <div>
          {data ? (
            <img
              className={s.logo}
              src={data?.logo || stockImg}
              alt={data?.name}
            />
          ) : null}
        </div>
        <div className={s.infoDesc}>
          <p style={{ fontWeight: 500 }}>{data?.ticker}</p>
          <p>
            {data?.price} {data?.currency}
          </p>
        </div>
      </div>
      <p>{stock.description}</p>
      <p onClick={() => deleteFromFavorite(stock.symbol)} className={s.delete}>
        Delete
      </p>
    </li>
  );
};

export default StockItem;
