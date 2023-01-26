import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface CardProps extends PropsWithChildren {}

const EventCard = ({ children }: CardProps): React.ReactElement => {
  return <Container>{children}</Container>;
};

export default EventCard;

const Container = styled.div`
  max-width: 400px;
  padding: 10px;
  width: 100%;
  border: 2px solid var(--primary-text-color);
  border-radius: 15px;
  margin: 0px auto;
`;
