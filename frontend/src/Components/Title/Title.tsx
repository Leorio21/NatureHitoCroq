import React from "react";
import styled from "styled-components";

interface TitleProps {
  level?: string;
  size?: number;
  padding?: number;
  title: string;
  color?: string;
}

const Title = ({
  level = "h1",
  size = 30,
  padding = 0,
  title,
  color = "var(--primary-text-color)",
}: TitleProps): React.ReactElement => {
  return (
    <TitleContainer as={level} padding={padding} size={size} color={color}>
      {title}
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.div<{
  size: number;
  padding: number;
  color: string;
}>`
  font-family: "stencilregular";
  font-size: ${(props) => props.size}px;
  padding: ${(props) => props.padding}px;
  color: ${(props) => props.color};
  text-align: center;
`;
