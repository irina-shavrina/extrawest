'use strict';

const getAllProducts = () => {
  const getAllProductsUrl = 'https://fakestoreapi.com/products';

  return fetch(getAllProductsUrl)
    .then(response => response.json())
    .then(data => data.sort(productsComparer));
};

const productsComparer = (item1, item2) => (item1.category.localeCompare(item2.category) || item2.price - item1.price);
  
getAllProducts().then(console.log);
