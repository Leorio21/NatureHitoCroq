import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface CardProps extends PropsWithChildren {
  width?: number;
}

const Card = ({ children, width = 400 }: CardProps): React.ReactElement => {
  return (
    <>
      <Container width={width}>{children}</Container>
    </>
  );
};

export default Card;

const Container = styled.div<{
  width: number;
}>`
  max-width: ${(props) => props.width}px;
  padding: 10px;
  width: 100%;
  height: fit-content;
  border: 2px solid var(--primary-text-color);
  border-radius: 15px;
  margin: 0px auto;
  &:hover {
    box-shadow: 0px 0px 10px var(--primary-text-color);
  }
`;
