import React from "react";
import { Link } from "react-router-dom";
import { devices } from "../../Styles/devices";
import styled from "styled-components";

const MainNavBar = (): React.ReactElement => {
  return (
    <NavBar>
      <Link to="/">Accueil</Link>
      <Link to="aboutUs">Qui sommes-nous?</Link>
      <Link to="/products">Nos Produits</Link>
      <Link to="/events">Evènements</Link>
      <Link to="/contactUs">Contact</Link>
    </NavBar>
  );
};

export default MainNavBar;

const NavBar = styled.nav`
  width: 100%;
  padding: 10px;
  border-bottom: 3px solid var(--primary-text-color);
  @media ${devices.tablette} {
    display: flex;
    justify-content: space-evenly;
    & a {
      color: var(--primary-text-color);
      text-decoration: none;
      font-family: "stencilregular";
      font-size: 1.2rem;
      width: max-content;
      padding: 5px 10px;
    }
  }
`;
