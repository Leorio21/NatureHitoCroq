import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
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
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Products;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
