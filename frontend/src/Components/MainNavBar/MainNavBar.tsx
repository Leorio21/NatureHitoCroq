import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { devices } from "../../Styles/devices";
import classNames from "classNames";
import styled from "styled-components";

const MainNavBar = (): React.ReactElement => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const onMenuIconClickHandler = (): void => {
    setMenuIsVisible((prev) => {
      return !prev;
    });
  };

  return (
    <Container>
      <Bars3Icon className="button_menu" onClick={onMenuIconClickHandler} />
      <NavBar className={classNames({ visible: menuIsVisible })}>
        <Link to="/" className="link">
          Accueil
        </Link>
        <Link to="/aboutUs" className="link">
          Qui sommes-nous?
        </Link>
        <Link to="/products" className="link">
          Nos Produits
        </Link>
        <Link to="/events" className="link">
          Evènements
        </Link>
        <Link to="/contactUs" className="link">
          Contact
        </Link>
        {/* <Link to="/test" className="link">
          Test
        </Link> */}
      </NavBar>
    </Container>
  );
};

export default MainNavBar;

const Container = styled.div`
  position: fixed;
  top: 80px;
  left: 0px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  & .button_menu {
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
