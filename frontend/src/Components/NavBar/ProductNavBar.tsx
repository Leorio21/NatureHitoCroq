import React from "react";
import { NavLink } from "react-router-dom";
import { devices } from "../../Styles/devices";
import styled from "styled-components";

const ProductNavBar = (): React.ReactElement => {
  return (
    <Container>
      <NavBar>
        <NavLink to="food" className="link">
          Alimentation
        </NavLink>
        <NavLink to="sweetmeat" className="link">
          Friandises
        </NavLink>
        <NavLink to="care" className="link">
          Soins
        </NavLink>
        <NavLink to="toys" className="link">
          Jouets
        </NavLink>
        <NavLink to="accessories" className="link">
          Accessoires
        </NavLink>
      </NavBar>
    </Container>
  );
};

export default ProductNavBar;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const NavBar = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
  background-color: var(--dark-color);
  border-bottom: 3px solid var(--primary-text-color);
  transition: all 0.3s ease-in-out;
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
    padding: 5px 10px;
  }
  @media ${devices.tablette} {
    position: relative;
    top: unset;
    left: unset;
    height: unset;
    justify-content: space-evenly;
    flex-direction: row;
    & .link {
      width: max-content;
    }
  }
`;
