import React from "react";
import { getProducts } from "../ducks/products/reducers/productReducer";
import { ProductCard } from "../components/productCard";

import { Container, Content } from "../styles/styledGrid";
import { DesktopNavbar } from "../components/desktopNavbar";
import { StyledSidenav } from "../styles/styledSidenav";

const Home = props => (
  <>
    <title>Rewards Store</title>
    <DesktopNavbar />
    <Container>
      <StyledSidenav />
      <Content>
        {props.products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Content>
    </Container>
  </>
);

Home.getInitialProps = async ({ reduxStore }) => {
  const products = await reduxStore.dispatch(getProducts());

  return { products };
};

export default Home;
