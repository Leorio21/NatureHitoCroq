import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface ModalProps {
  modalContent: string | JSX.Element;
  setModal: (modalContent: string | JSX.Element) => void;
}

const Modal = ({ modalContent, setModal }: ModalProps): React.ReactElement => {
  const refDialog = useRef<HTMLDialogElement>(null);

  const onCloseHandle = (): void => {
    setModal("");
  };

  useEffect(() => {
    if (modalContent !== "") {
      refDialog.current?.showModal();
    }
  }, [modalContent]);

  return (
    <Container ref={refDialog}>
      {modalContent}
      <CloseButton onClick={onCloseHandle}>
        <XMarkIcon height={20} />
      </CloseButton>
    </Container>
  );
};

export default Modal;

const Container = styled.dialog`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  max-width: 450px;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  border-color: var(--primary-text-color);
  padding: 15px;
  background: var(--dark-color);
  color: var(--light-color);
  &::backdrop {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const CloseButton = styled.p`
  position: absolute;
  cursor: pointer;
  top: 0px;
  right: 5px;
  width: 20px;
  height: 20px;
`;
