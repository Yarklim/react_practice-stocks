import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import stocksApi from '../../api/stocksApi';
import { filterStocks } from '../../helpers/filterStocks';
import s from './SearchStocks.module.scss';
import { useKeyPress } from '../../hooks/useKeyPress';

const SearchStocks = ({ addToFavorites }) => {
  const { data } = useQuery('getStocks', () => stocksApi['getStocks']());
  const [value, setValue] = useState('');
  const [stocks, setStocks] = useState([]);
  const [focus, setFocus] = useState(false);

  const autocompliteRef = useRef(null);

  const isKeyPressed = useKeyPress('Escape');

  useEffect(() => {
    if (isKeyPressed) {
      setValue('');
    }
  }, [setValue, isKeyPressed]);

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
    addToFavorites(stock.symbol);
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
        <span onClick={() => setValue('')}>Clear</span>
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
