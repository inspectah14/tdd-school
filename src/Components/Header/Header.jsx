import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import Burger from "../HamburgerMenu/Burger/Burger";
import Menu from "../HamburgerMenu/Menu/Menu";

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background: #0b1316;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    justify-content: space-evenly;
    align-items: center;
  }
`;

const H1 = styled.h1`
  color: white;
  font-size: 16px;

  @media (min-width: 500px) {
    font-size: 18px;
  }
  @media (min-width: 800px) {
    font-size: 20px;
  }
`;

const LinkBox = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  width: 140px;
  height: 29px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  text-decoration: none;
  text-align: center;
  color: white;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const menuId = "main-menu";
  return (
    <StyledHeader>
      <>
        <Burger isOpen={isOpen} setOpen={setOpen} aria-controls={menuId} />
        <Menu isOpen={isOpen} setOpen={setOpen} id={menuId} />
      </>
      <NavBar>
        <div>
          <H1>International School of Södermalm</H1>
        </div>
        <LinkBox>
          <StyledLink to="/">home</StyledLink>
          <StyledLink to="/addcourses">add courses</StyledLink>
          <StyledLink to="/addteachers">add teachers</StyledLink>
        </LinkBox>
      </NavBar>
    </StyledHeader>
  );
};

export default Header;
