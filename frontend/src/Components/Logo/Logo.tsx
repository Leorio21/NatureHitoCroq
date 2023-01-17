import React from "react";
import styled from "styled-components";
import logo from "./logo.jpg";

interface LogoProps {
  width: number;
}

const Logo = ({ width }: LogoProps): React.ReactElement => {
  return (
    <ImgContainer width={width}>
      <Img src={logo} alt="Logo Nature Hito Croq" />
    </ImgContainer>
  );
};

export default Logo;

const ImgContainer = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 15%;
`;
