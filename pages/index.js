import React from "react";
import Head from "next/head";
import { getProducts } from "../redux/reducers/productReducer";
import { ProductCard } from "../components/productCard";

const Home = props => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <div>Hello world</div>
      <ul>
        {props.products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ul>
    </Head>
  </>
);

Home.getInitialProps = async ({ reduxStore }) => {
  const products = await reduxStore.dispatch(getProducts());

  return { products };
};

export default Home;
