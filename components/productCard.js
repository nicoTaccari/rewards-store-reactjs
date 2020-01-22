import { Card, CardTitle, CardFront } from "../styles/styledGrid";
import React, { useState } from "react";

export const ProductCard = props => {
  const { product } = props;

  console.log(props);
  return (
    <Card>
      <CardFront>
        <CardTitle>
          <div>{product.name}</div>
        </CardTitle>

        <img src={product.img.url}></img>
        <div>{product.cost}</div>
        <div>{product.category}</div>
      </CardFront>
    </Card>
  );
};
