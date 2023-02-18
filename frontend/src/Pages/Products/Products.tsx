import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ProductNavBar from "../../Components/NavBar/ProductNavBar";

const Products = (): React.ReactElement => {
  return (
    <>
      <ProductNavBar />
      <Container>
        <Outlet />
      </Container>
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
