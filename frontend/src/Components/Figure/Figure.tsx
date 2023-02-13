import React from "react";
import styled from "styled-components";

interface FigureProps {
  illustration: string;
  title?: string;
}

const Figure = ({
  illustration,
  title = "",
}: FigureProps): React.ReactElement => {
  return (
    <FigureContainer>
      <Img src={illustration} />
      {title !== "" && <Figcaption>{title}</Figcaption>}
    </FigureContainer>
  );
};

export default Figure;

const FigureContainer = styled.figure`
  position: relative;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 200px;
  margin: 10px 0px;
`;

const Img = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
`;

const Figcaption = styled.figcaption`
  position: absolute;
  width: 100%;
  bottom: 0px;
  white-space: break-spaces;
  text-align: center;
  background-color: #000000;
`;
