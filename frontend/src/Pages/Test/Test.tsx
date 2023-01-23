import React from "react";
import styled from "styled-components";
import MainNavBar from "../../Components/MainNavBar/MainNavBar";
import { useModal } from "../../Modal/useModal";

const Test = (): React.ReactElement => {
  const { setModal, ModalContainer } = useModal();

  const onClickHandler = (): void => {
    setModal(<Toto>Ceci est un test JSX.Element</Toto>);
  };

  return (
    <Container>
      <MainNavBar />
      <button type="button" onClick={onClickHandler}>
        Test Modal
      </button>
      <ModalContainer />
    </Container>
  );
};

export default Test;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Toto = styled.p``;
