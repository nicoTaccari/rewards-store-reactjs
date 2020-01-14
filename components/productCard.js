import { GridColumn, Card, CardTitle, CardFront } from "./styledGrid";
import React, { useState } from "react";

export const ProductCard = props => {
  const { product } = props;

  // console.log(product);

  const [flipped, setFlipped] = useState(false);

  return (
    <GridColumn sm="6" lg="4">
      <Card>
        <div onClick={() => setFlipped(!flipped)}>
          <CardFront>
            <CardTitle>{product.name}</CardTitle>

            <img src={product.img.url}></img>
          </CardFront>
        </div>
      </Card>
    </GridColumn>
  );
};
