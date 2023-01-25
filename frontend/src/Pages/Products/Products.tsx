import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MainNavBar from "../../Components/NavBar/MainNavBar";
import ProductNavBar from "../../Components/NavBar/ProductNavBar";

const Products = (): React.ReactElement => {
  return (
    <>
      <Header />
      <MainNavBar />
      <ProductNavBar />
      <Footer />
    </>
  );
};

export default Products;
