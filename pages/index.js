import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import ApiService from "../services/apiService";

const Home = data => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <div>Hello world</div>
      {Array(data).map(user => user.name)}
    </Head>

    <Nav />
  </>
);

Home.getInitialProps = async function() {
  const data = ApiService.getUserData();
  console.log(data);
  return { data };
};

export default Home;
