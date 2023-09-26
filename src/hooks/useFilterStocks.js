import { useEffect, useState } from 'react';
import { filterStocks } from '../helpers/filterStocks';
import { useDebounce } from './useDebounce';

export const useFilterStocks = (data) => {
  const [value, setValue] = useState('');
  const [stocks, setStocks] = useState([]);

  const debounceValue = useDebounce(value, 1000);

  useEffect(() => {
    if (!data) return;
    const filteredStocks = filterStocks(data, debounceValue);
    setStocks(filteredStocks);
  }, [data, debounceValue]);
};
