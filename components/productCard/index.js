import {
  Card,
  CardTitle,
  CardFront,
  CardFooter
} from "../../styles/styledGrid";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { redeemProduct } from "../../ducks/reducers/redeemReducer";
import { Button, Typography } from "@material-ui/core";

export const ProductCard = props => {
  const { product, isRedeem } = props;
  const initialState = useSelector(state => state);
  const dispatch = useDispatch();

  // console.log(props);
  return (
    <Card>
      <CardFront>
        <CardTitle>
          <div>{product.name}</div>
        </CardTitle>

        <img src={product.img.url}></img>
        <CardFooter>
          <Typography variant="h6">{product.category}</Typography>
          {!isRedeem ? (
            <Button
              color="primary"
              onClick={() => dispatch(redeemProduct(product._id))}
            >
              Buy: ${product.cost}
            </Button>
          ) : (
            <div></div>
          )}
        </CardFooter>
      </CardFront>
    </Card>
  );
};
