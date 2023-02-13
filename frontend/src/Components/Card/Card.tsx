import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { useModal } from "../../Hooks/Modal/useModal";

interface CardProps extends PropsWithChildren {
  showOnClickElement?: JSX.Element;
  width?: string;
}

const EventCard = ({
  children,
  showOnClickElement,
}: CardProps): React.ReactElement => {
  const { setModal, ModalContainer } = useModal();

  return (
    <>
      <Container
        onClick={() => {
          showOnClickElement !== undefined && setModal(showOnClickElement);
        }}
      >
        {children}
      </Container>
      <ModalContainer />
    </>
  );
};

export default EventCard;

const Container = styled.div`
  max-width: 400px;
  padding: 10px;
  width: 100%;
  border: 2px solid var(--primary-text-color);
  border-radius: 15px;
  margin: 0px auto;
  &:hover {
    box-shadow: 0px 0px 10px var(--primary-text-color);
  }
`;
