import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Catagory from "../../Components/Category/Category";
import Product from "../../Components/Product/Products";
import Layout from "../../Components/Layout/Layout";

function Landing() {
  return (
    <Layout>
      <Carousel />
      <Catagory />
      <Product />
    </Layout>
  );
}

export default Landing;
