import React from "react";
import Head from "next/head";
import { getProducts } from "../ducks/products/reducers/productReducer";
import { ProductCard } from "../components/productCard";

import {
  GridContainer,
  LayoutWrapper,
  GridRow
} from "../components/styledGrid";

const Home = props => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <div>Hello world</div>
      <LayoutWrapper>
        <GridContainer>
          <GridRow>
            {props.products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </GridRow>
        </GridContainer>
      </LayoutWrapper>
    </Head>
  </>
);

Home.getInitialProps = async ({ reduxStore }) => {
  const products = await reduxStore.dispatch(getProducts());

  return { products };
};

export default Home;
