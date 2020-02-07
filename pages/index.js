import React, { useEffect } from "react";
import { getProducts } from "../ducks/reducers/productReducer";
import { getUser } from "../ducks/reducers/userReducer";
import { Sidenav } from "../components/sidenav";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUser());
  }, []);

  return (
    <>
      <ToastContainer />
      <title>Rewards Store</title>
      <Sidenav />
    </>
  );
};

export default Home;
