import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MainNavBar from "../../Components/MainNavBar/MainNavBar";
import Title from "../../Components/Title/Title";
import { useFetch } from "../../Fetch/useFetch";
import { EventInterface } from "../../Interfaces/Interfaces";
import { useModal } from "../../Modal/useModal";

const Events = (): React.ReactElement => {
  const { response, error, isLoading } =
    useFetch<EventInterface[]>("Events.json");
  const { setModal, ModalContainer } = useModal();

  useEffect(() => {
    if (error !== "") {
      setModal("Une erreur est survenue : " + error);
    }
  }, []);
  return (
    <>
      <Header />
      <MainNavBar />
      <Container>
        <EventsContainer>
          {isLoading && "Chargement"}
          {response?.length === 0 ? (
            <Title level="h2" title="Aucun évènements pour le moment" />
          ) : (
            response?.map((event, index) => {
              return <Card key={index} event={event} />;
            })
          )}
        </EventsContainer>
      </Container>
      <Footer />
      <ModalContainer />
    </>
  );
};

export default Events;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
`;

const EventsContainer = styled.section`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  row-gap: 20px;
  flex-flow: row wrap;
`;
