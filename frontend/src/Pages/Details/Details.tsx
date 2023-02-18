import React from "react";
import styled from "styled-components";
import { ProductState } from "../../Interfaces/Interfaces";
import { devices } from "../../Styles/devices";
import Title from "../../Components/Title/Title";
import { useLocation } from "react-router-dom";

const Details = (): React.ReactElement => {
  const location = useLocation();
  const { product }: ProductState = location.state;
  console.log(product);
  return (
    <Container>
      <Title level={"h2"} title={product.name} padding={20} />
      <Description>
        <Img src={product.image} />
        <Composition>
          <u>Composition:</u> <br /> <br />
          {product.composition}
        </Composition>
      </Description>
      <SellDiv></SellDiv>
    </Container>
  );
};

export default Details;

const Container = styled.article`
  width: 70vw;
  height: 100%;
  padding: 10px;
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
  padding: 10px;
  display: flex;
  flex-direction: column;
  @media ${devices.tablette} {
    flex-direction: row;
  }
`;

const Img = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  @media ${devices.tablette} {
    width: 50%;
    max-height: 500px;
  }
`;

const Composition = styled.div`
  width: 100%;
  white-space: break-spaces;
  @media ${devices.tablette} {
    width: 50%;
  }
`;

const SellDiv = styled.div`
  width: 100%;
  @media ${devices.tablette} {
    width: 50%;
  }
`;
