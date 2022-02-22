'use strict';

require('dotenv').config()

export const getAllProducts = () => {
  const getAllProductsUrl = process.env.PRODUCTS_URL;

  return fetch(getAllProductsUrl)
    .then(response => response.json())
    .then(data => data.sort(productsComparer));
};

const productsComparer = (item1, item2) => (item1.category.localeCompare(item2.category) || item2.price - item1.price);
  
