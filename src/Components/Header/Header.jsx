import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import Burger from "../HamburgerMenu/Burger/Burger";
import Menu from "../HamburgerMenu/Menu/Menu";
import AuthContext from "../../store/auth-context";

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

const StyledButton = styled.button`
  width: 140px;
  height: 29px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const context = useContext(AuthContext);
  const menuId = "main-menu";

  const onLogoutHandler = (e) => {
    e.preventDefault();
    context.onLogout();
  };

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
          {context.isLoggedIn && (
            <StyledButton onClick={onLogoutHandler}>log out</StyledButton>
          )}
        </LinkBox>
      </NavBar>
    </StyledHeader>
  );
};

export default Header;
