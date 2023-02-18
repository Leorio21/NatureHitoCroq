import React, { useEffect } from "react";
import styled from "styled-components";
import { devices } from "../../Styles/devices";
import Slider from "../../Components/Slider/Slider";
import boutique from "../../assets/boutique.jpg";
import { useFetch } from "../../Hooks/Fetch/useFetch";
import { useModal } from "../../Hooks/Modal/useModal";
import { EventInterface } from "../../Interfaces/Interfaces";

const Home = (): React.ReactElement => {
  const { response, error, isLoading } =
    useFetch<EventInterface[]>("Events.json");
  const { setModal, ModalContainer } = useModal();

  useEffect(() => {
    if (error !== "") {
      setModal(`Une erreur est survenue : ${error}`);
    }
  }, [error]);

  return (
    <>
      <Container>
        {isLoading && "Chargement"}
        {response !== undefined && (
          <Slider
            events={response.sort((a, b) => {
              const dateA = a.startDate.split("-");
              const dateB = b.startDate.split("-");
              return Date.parse(dateA[1] + "-" + dateA[0] + "-" + dateA[2]) >
                Date.parse(dateB[1] + "-" + dateB[0] + "-" + dateB[2])
                ? 1
                : -1;
            })}
          />
        )}
        <LocalisationContainer>
          <Img src={boutique} />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1347.1664272222888!2d5.116601258267128!3d47.522382406097066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ed69e5158b948f%3A0xcea1a054ffd49f4d!2sNature%20hito%20croq!5e0!3m2!1sfr!2sfr!4v1648893011397!5m2!1sfr!2sfr"
            height="300"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </LocalisationContainer>
      </Container>
      <ModalContainer />
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LocalisationContainer = styled.section`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${devices.tablette} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Img = styled.img`
  width: 100%;
  @media ${devices.tablette} {
    width: 50%;
  }
`;
