import React from "react";
import styled from "styled-components";
import logoFb from "./facebook.png";
import logoInsta from "./instagram.png";
import logoTiktok from "./tiktok.png";

const SocialNetwork = (): React.ReactElement => {
  return (
    <Container>
      <LinkA
        href="https://www.facebook.com/NatureHitoCroq/"
        target="_blank"
        rel="noreferrer"
      >
        <Img src={logoFb} alt="Facebook" />
      </LinkA>
      <LinkA
        href="https://www.tiktok.com/@_lucilelulu_"
        target="_blank"
        rel="noreferrer"
      >
        <Img src={logoTiktok} alt="TikTok" />
      </LinkA>
      <LinkA
        href="https://www.instagram.com/naturehitocroq/?hl=fr"
        target="_blank"
        rel="noreferrer"
      >
        <Img src={logoInsta} alt="Instagram" />
      </LinkA>
    </Container>
  );
};

export default SocialNetwork;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkA = styled.a`
  text-decoration: none;
`;

const Img = styled.img`
  margin: 10px;
  max-width: 50px;
`;
