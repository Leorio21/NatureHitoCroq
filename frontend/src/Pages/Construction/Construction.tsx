import React from "react";
import styled from "styled-components";
import construction from "../../assets/construction.png";

const Construction = (): React.ReactElement => {
  return (
    <Container>
      <Img src={construction} alt="Site en construction" />
    </Container>
  );
};

export default Construction;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
`;
