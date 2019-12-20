import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <div>Hello world</div>
    </Head>

    <Nav />
  </>
);

export default Home;
