import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

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
  justify-content: space-evenly;
  align-items: center;
`;

const H1 = styled.h1`
  color: white;
  font-size: 20px;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
  return (
    <StyledHeader>
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
