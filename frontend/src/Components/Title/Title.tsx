import React from "react";
import styled from "styled-components";

const Title = (): React.ReactElement => {
  return <TitleContainer>NATURE HITO CROQ</TitleContainer>;
};

export default Title;

const TitleContainer = styled.h1`
  font-family: "stencilregular";
  font-size: 30px;
  color: #27990f;
  text-align: center;
`;
