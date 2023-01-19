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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: auto;
`;
