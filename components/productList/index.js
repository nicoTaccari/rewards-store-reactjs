import React from "react";
import { ProductCard } from "../productCard/index";

const getFilteredProducts = ({ name, orderBy }, products) => {
  let filtered = products.data.filter(product =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );
  const [field, order] = orderBy.split("/");
  return filtered.sort((a, b) => {
    if (a[field] < b[field] && order === "ASC") return -1;
    if (a[field] > b[field] && order === "ASC") return 1;
    if (a[field] > b[field] && order === "DSC") return -1;
    if (a[field] < b[field] && order === "DSC") return 1;
    return 0;
  });
};

export const ProductList = props => {
  const { filters, products } = props;

  return products ? (
    getFilteredProducts(filters, products).map(product => (
      <ProductCard key={product._id} product={product} />
    ))
  ) : (
    <Loading />
  );
};
