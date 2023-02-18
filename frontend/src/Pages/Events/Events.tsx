import React, { useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import Card from "../../Components/Card/Card";
import Title from "../../Components/Title/Title";
import { useFetch } from "../../Hooks/Fetch/useFetch";
import { EventInterface } from "../../Interfaces/Interfaces";
import { useModal } from "../../Hooks/Modal/useModal";
import Event from "../../Components/Event/Event";

const Events = (): React.ReactElement => {
  const { response, error, isLoading } =
    useFetch<EventInterface[]>("Events.json");
  const { setModal, ModalContainer } = useModal();

  useEffect(() => {
    if (error !== "") {
      setModal(`Une erreur est survenue : ${error}`);
    }
  }, [response]);
  return (
    <>
      <Container>
        {isLoading && "Chargement"}
        {response?.length === 0 ? (
          <Title level="h2" title="Aucun événements pour le moment" />
        ) : (
          response
            ?.sort((a, b) =>
              dayjs(a.startDate).toDate() > dayjs(b.startDate).toDate() ? 1 : -1
            )
            .map((event, index) => {
              return (
                <Card key={index}>
                  <Event event={event} />
                </Card>
              );
            })
        )}
      </Container>
      <ModalContainer />
    </>
  );
};

export default Events;

const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  row-gap: 20px;
  flex-flow: row wrap;
`;
