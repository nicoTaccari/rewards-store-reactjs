import React from "react";
import { getProducts } from "../ducks/products/reducers/productReducer";
import { ProductCard } from "../components/productCard";

import { Container, Content } from "../styles/styledGrid";
import { DesktopNavbar } from "../components/desktopNavbar";
import { Sidenav } from "../components/sidenav";

const Home = props => (
  <>
    <title>Rewards Store</title>
    <Sidenav {...props} />
  </>
);

Home.getInitialProps = async ({ reduxStore }) => {
  const products = await reduxStore.dispatch(getProducts());

  return { products };
};

export default Home;
