import React from "react";
import styled from "styled-components";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MainNavBar from "../../Components/MainNavBar/MainNavBar";
import events from "./Events.json";

const Events = (): React.ReactElement => {
  return (
    <>
      <Header />
      <MainNavBar />
      <Container>
        <EventsContainer>
          {events.map((event, index) => {
            return <Card key={index} event={event} />;
          })}
        </EventsContainer>
      </Container>
      <Footer />
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
