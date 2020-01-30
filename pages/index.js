import React from "react";
import { getProducts } from "../ducks/reducers/productReducer";
import { getUser } from "../ducks/reducers/userReducer";
import { Sidenav } from "../components/sidenav";

const Home = props => (
  <>
    <title>Rewards Store</title>
    <Sidenav {...props} />
  </>
);

Home.getInitialProps = async ({ reduxStore }) => {
  const products = await reduxStore.dispatch(getProducts());
  const user = await reduxStore.dispatch(getUser());

  return { products, user };
};

export default Home;
