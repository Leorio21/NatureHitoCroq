import React from "react";
import styled from "styled-components";
import SocialNetwork from "../SocialNetwork/SocialNetwork";

const Footer = (): React.ReactElement => {
  return (
    <FooterContainer>
      <SocialNetwork />
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #000000;
`;
