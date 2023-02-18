import React from "react";
import styled from "styled-components";

interface FigureProps {
  illustration: string;
  title?: string;
  height?: string;
}

const Figure = ({
  illustration,
  title = "",
  height = "fit-content",
}: FigureProps): React.ReactElement => {
  return (
    <FigureContainer height={height}>
      <Img src={illustration} />
      {title !== "" && <Figcaption>{title}</Figcaption>}
    </FigureContainer>
  );
};

export default Figure;

const FigureContainer = styled.figure<{
  height: string;
}>`
  position: relative;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: ${(props) => props.height};
  margin: 10px 0px;
`;

const Img = styled.img`
  height: auto;
  max-height: 100%;
  width: auto;
  object-fit: contain;
`;

const Figcaption = styled.figcaption`
  position: absolute;
  width: 100%;
  bottom: 0px;
  white-space: break-spaces;
  color: #ffffff;
  text-align: center;
  background-color: #000000;
`;
