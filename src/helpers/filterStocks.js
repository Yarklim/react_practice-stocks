export const filterStocks = (stocks, value) => {
  return stocks
    .filter((stock) =>
      stock.description.toLowerCase().includes(value.toLocaleLowerCase())
    )
    .slice(0, 50);
};
