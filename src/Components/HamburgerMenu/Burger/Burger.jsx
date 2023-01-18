import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  // position: absolute;
  // top: 30%;
  // left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${(props) => (props.isOpen ? "0" : "1")};
      transform: ${(props) =>
        props.isOpen ? "translateX(20px)" : "translateX(0)"};
    }
    :nth-child(3) {
      transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media (min-width: 800px) {
    display: none;
  }
`;

const Burger = ({ isOpen, setOpen, ...props }) => {
  const isExpanded = isOpen ? true : false;

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      isOpen={isOpen}
      onClick={() => setOpen(!isOpen)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

export default Burger;
