import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../../theme';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.medium};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion(Link))`
  font-family: ${theme.typography.fontFamily.heading};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.h3};
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  cursor: pointer;
  text-decoration: none;
`;

const LogoIcon = styled.span`
  font-size: 1.5em;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${theme.spacing.lg};
`;

const NavLink = styled(motion(Link))`
  color: ${theme.colors.text};
  text-decoration: none;
  font-family: ${theme.typography.fontFamily.body};
  font-weight: ${theme.typography.fontWeight.medium};
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  position: relative;

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.background};
  }

  &.active {
    color: ${theme.colors.primary};
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background-color: ${theme.colors.primary};
      border-radius: ${theme.borderRadius.small};
    }
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo
          to="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LogoIcon>🌳</LogoIcon>
          Decision Tree Learner
        </Logo>
        <Nav>
          <NavLink
            to="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </NavLink>
          <NavLink
            to="/learn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={location.pathname === '/learn' ? 'active' : ''}
          >
            Learn
          </NavLink>
          <NavLink
            to="/quizzes"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={location.pathname === '/quizzes' ? 'active' : ''}
          >
            Quizzes
          </NavLink>
          <NavLink
            to="/examples"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={location.pathname === '/examples' ? 'active' : ''}
          >
            Examples
          </NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 