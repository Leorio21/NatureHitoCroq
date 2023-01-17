import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";

const Header = (): React.ReactElement => {
  return (
    <HeaderContainer>
      <Title />
      <Logo width={120} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #000000;
`;
