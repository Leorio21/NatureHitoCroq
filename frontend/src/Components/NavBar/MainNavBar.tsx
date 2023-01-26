import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/" className="link">
          Accueil
        </NavLink>
        <NavLink to="/aboutUs" className="link">
          Qui sommes-nous?
        </NavLink>
        <NavLink to="/products" className="link">
          Nos Produits
        </NavLink>
        <NavLink to="/events" className="link">
          Evénements
        </NavLink>
        <NavLink to="/contactUs" className="link">
          Contact
        </NavLink>
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
  & .active {
    border: 1.5px solid var(--light-color);
    border-radius: 15px;
    background-color: #000000;
  }
  & .link {
    color: var(--primary-text-color);
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
      width: max-content;
    }
  }
`;
