import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: #A2B2FF;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  color: white;
  padding: 10px;
  margin: 10px;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #A2B2FF;
  border-radius: 10px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  padding: 10px;
`;

const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 18px;
  color: white;
  padding: 10px 0;

  &:hover {
    color: white;
  }
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledContainer>
      <DropdownButton onClick={toggleMenu}>X</DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/schedule-demo">Schedule Demo</NavLink>
      </DropdownContent>
    </StyledContainer>
  );
};

Menu.propTypes = {};

export default Menu;