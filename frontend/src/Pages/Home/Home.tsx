import React from "react";
import styled from "styled-components";
import { devices } from "../../Styles/devices";
import Slider from "../../Components/Slider/Slider";
import boutique from "../../assets/boutique.jpg";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MainNavBar from "../../Components/MainNavBar/MainNavBar";

const Home = (): React.ReactElement => {
  return (
    <>
      <Header />
      <MainNavBar />
      <Container>
        <Slider />
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
      <Footer />
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
