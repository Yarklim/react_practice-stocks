import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import stocksApi from '../../api/stocksApi';
import stockImg from '../../assets/stock.jpg';
import s from './StockItem.module.scss';
import Modal from '../Modal/Modal';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const fetchStock = async (symbol) => {
  const price = await stocksApi['getPrice'](symbol);
  const profile = await stocksApi['getProfile'](symbol);

  const stock = { ...profile.data, price: price.data.c };

  return stock;
};

const StockItem = ({ symbol, deleteFromFavorite }) => {
  const { data } = useQuery(`getStock/${symbol}`, () => fetchStock(symbol));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useOnClickOutside(modalRef, closeModal);

  return (
    <li className={s.stockItem} onClick={() => setIsModalOpen(true)}>
      <div className={s.info}>
        <div>
          {data ? (
            <img
              className={s.logo}
              src={data?.logo || stockImg}
              alt={data?.name}
            />
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className={s.infoDesc}>
          <p style={{ fontWeight: 500 }}>{data?.ticker}</p>
          <p>
            {data?.price} {data?.currency}
          </p>
        </div>
      </div>
      <p>{symbol.name}</p>
      <p onClick={() => deleteFromFavorite(symbol)} className={s.delete}>
        Delete
      </p>
      {isModalOpen ? <Modal ref={modalRef} data={data} /> : null}
    </li>
  );
};

export default StockItem;
