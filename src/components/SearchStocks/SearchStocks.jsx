import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import stocksApi from '../../api/stocksApi';
import { filterStocks } from '../../helpers/filterStocks';
import s from './SearchStocks.module.scss';

const SearchStocks = ({ addSymbolToFavorites }) => {
  const { data } = useQuery('getStocks', () => stocksApi['getStocks']());
  const [value, setValue] = useState('');
  const [stocks, setStocks] = useState([]);
  const [focus, setFocus] = useState(false);

  const autocompliteRef = useRef(null);

  useEffect(() => {
    if (!data) return;
    const filteredStocks = filterStocks(data, value);
    setStocks(filteredStocks);
  }, [data, value]);

  const onBlurHandler = (e) => {
    setTimeout(() => {
      if (
        autocompliteRef.current &&
        !autocompliteRef.current.contains(e.target)
      ) {
        setFocus(false);
      }
    }, 300);
  };

  const selectStock = (stock) => {
    setValue(stock.description);
    addSymbolToFavorites(stock);
  };

  return (
    <div className={s.searchBlock}>
      <div className={s.inputContainer}>
        <input
          className={s.input}
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={onBlurHandler}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <span onClick={() => setValue('')}>x</span>
      </div>
      {focus && stocks.length ? (
        <ul className={s.list} ref={autocompliteRef}>
          {stocks.map((stock) => (
            <li
              className={s.item}
              key={stock.figi}
              onClick={() => selectStock(stock)}
            >
              {stock.description}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchStocks;
