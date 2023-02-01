import React from "react";
import styled from "styled-components";
import { EventInterface } from "../../Interfaces/Interfaces";
import Title from "../Title/Title";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/plugin/customParseFormat";
import Figure from "../Figure/Figure";

dayjs.locale("fr");
dayjs().format("DD-MM-YYYY");

interface EventProps {
  event: EventInterface;
}

const Event = ({ event }: EventProps): React.ReactElement => {
  return (
    <>
      <Title level={"h2"} title={dayjs(event.startDate).format("DD-MM-YYYY")} />
      <Figure illustration={event.illustration} title={event.title} />
      <EventInfos>
        <Info>
          Du {dayjs(event.startDate).format("DD-MM-YYYY")} au{" "}
          {dayjs(event.endDate).format("DD-MM-YYYY")}
        </Info>
        {event.location !== "" && event.location !== undefined && (
          <Info>Lieu : {event.location}</Info>
        )}
        {event.info !== "" && event.location !== undefined && (
          <Info>Détail : {event.info}</Info>
        )}
      </EventInfos>
    </>
  );
};

export default Event;

const EventInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Info = styled.p`
  width: 100%;
  text-align: justify;
`;
