import React from "react";
import styled from "styled-components";

interface FigureProps {
  illustration: string;
  title: string;
}

const Figure = ({ illustration, title }: FigureProps): React.ReactElement => {
  return (
    <FigureContainer>
      <Img src={illustration} />
      <Figcaption>{title}</Figcaption>
    </FigureContainer>
  );
};

export default Figure;

const FigureContainer = styled.figure`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 200px;
  margin: 10px 0px;
`;

const Img = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`;

const Figcaption = styled.figcaption`
  text-align: center;
  background-color: #000000;
`;
