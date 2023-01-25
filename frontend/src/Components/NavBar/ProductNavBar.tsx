import React from "react";
import { Link } from "react-router-dom";
import { devices } from "../../Styles/devices";
import styled from "styled-components";

const ProductNavBar = (): React.ReactElement => {
  return (
    <Container>
      <NavBar>
        <Link to="food" className="link">
          Alimentation
        </Link>
        <Link to="sweetmeat" className="link">
          Friandises
        </Link>
        <Link to="care" className="link">
          Soins
        </Link>
        <Link to="toys" className="link">
          Jouets
        </Link>
      </NavBar>
    </Container>
  );
};

export default ProductNavBar;

const Container = styled.div`
  position: fixed;
  top: 80px;
  left: 0px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  & .button_menu {
    position: absolute;
    top: -40px;
    background-color: black;
    z-index: 1;
    margin: 10px;
    width: 40px;
    border: 2px solid var(--primary-text-color);
    border-radius: 20%;
    padding: 5px;
    color: var(--primary-text-color);
  }
  @media ${devices.tablette} {
    position: relative;
    top: unset;
    left: unset;
    & .button_menu {
      display: none;
    }
`;

const NavBar = styled.nav`
  position: absolute;
  left: -100%;
  top: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 100vh;
  background-color: var(--dark-color);
  transition: all 0.3s ease-in-out;
  &.visible {
    left: 0px;
  }
  & .link {
    color: var(--primary-text-color);
    border-bottom: 1px solid var(--primary-text-color);
    text-decoration: none;
    text-align: center;
    font-family: "stencilregular";
    font-size: 1.2rem;
    width: 100%;
    padding: 5px 10px;
  }
  @media ${devices.tablette} {
    position: relative;
    top: unset;
    left: unset;
    height: unset;
    border-bottom: 3px solid var(--primary-text-color);
    justify-content: space-evenly;
    flex-direction: row;
    & .link {
      border-bottom: none;
      width: max-content;
    }
  }
`;
