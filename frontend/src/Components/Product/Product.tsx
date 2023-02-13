import React from "react";
import styled from "styled-components";
import { FoodInterface } from "../../Interfaces/Interfaces";
import { devices } from "../../Styles/devices";
import Title from "../Title/Title";

interface ProductProps {
  product: FoodInterface;
}

const Product = ({ product }: ProductProps): React.ReactElement => {
  return (
    <Container>
      <Title level={"h2"} title={product.name} />
      <Description>
        <Img src={product.image} />
      </Description>
      <SellDiv></SellDiv>
    </Container>
  );
};

export default Product;

const Container = styled.article`
  width: 70vw;
  display: flex;
  flex-direction: column;
  @media ${devices.tablette} {
    width: 80vw;
  }
  @media ${devices.desktop} {
    width: 90vw;
  }
`;

const Description = styled.div`
  width: 100%;
  @media ${devices.tablette} {
    width: 50%;
    flex-direction: row;
  }
`;

const Img = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
`;

const SellDiv = styled.div`
  width: 100%;
  @media ${devices.tablette} {
    width: 50%;
  }
`;
