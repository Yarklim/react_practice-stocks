export const deleteSymbolFromFavorites = (symbol, callback) => {
  const storage = localStorage.getItem('favorites');

  const filteredStocks = JSON.parse(storage).filter((el) => el !== symbol);
  localStorage.setItem('favorites', JSON.stringify(filteredStocks));
  callback(filteredStocks);
};
