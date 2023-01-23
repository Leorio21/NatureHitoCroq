import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";

interface CardProps {
  event: {
    id: number;
    type: string;
    startDate: string;
    endDate: string;
    info: string;
    location: string;
    illustration: string;
    Lien: string;
  };
}

const Card = ({ event }: CardProps): React.ReactElement => {
  return (
    <Container>
      <Title level={"h2"} title={event.startDate} />
      <Figure>
        <Img src={event.illustration} />
        <Figcaption>{event.type}</Figcaption>
      </Figure>
      <EventInfos>
        <Info>
          Du {event.startDate} au {event.endDate}
        </Info>
        {event.location !== "" && event.location !== undefined && (
          <Info>Lieu : {event.location}</Info>
        )}
        <Info>Détail : {event.info}</Info>
      </EventInfos>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  max-width: 400px;
  padding: 10px;
  width: 100%;
  border: 2px solid var(--primary-text-color);
  border-radius: 15px;
  margin: auto;
`;

const Figure = styled.figure`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 200px;
  margin: 10px 0px;
`;

const Img = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`;

const Figcaption = styled.figcaption`
  text-align: center;
  background-color: #000000;
`;

const EventInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Info = styled.p`
  width: 100%;
  text-align: justify;
`;
