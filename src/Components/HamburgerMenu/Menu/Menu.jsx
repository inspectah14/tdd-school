import { Link } from "react-router-dom";
import React, { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../../../store/auth-context";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #0b1316;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (min-width: 830px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

const StyledButton = styled.button`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s linear;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  @media (min-width: 830px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Menu = ({ isOpen, setOpen, ...props }) => {
  const isHidden = isOpen ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  const context = useContext(AuthContext);

  const onLogoutHandler = (e) => {
    e.preventDefault();
    context.onLogout();
    handleClick();
  };

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <StyledMenu isOpen={isOpen} aria-hidden={!isHidden} {...props}>
      <Link to="/" tabIndex={tabIndex} onClick={handleClick}>
        <span aria-hidden="true" />
        home
      </Link>
      <Link to="/addcourses" tabIndex={tabIndex} onClick={handleClick}>
        <span aria-hidden="true" />
        add courses
      </Link>
      <Link to="/addteachers" tabIndex={tabIndex} onClick={handleClick}>
        <span aria-hidden="true" />
        add teachers
      </Link>
      {context.isLoggedIn && (
        <StyledButton onClick={onLogoutHandler}>log out</StyledButton>
      )}
    </StyledMenu>
  );
};

export default Menu;
