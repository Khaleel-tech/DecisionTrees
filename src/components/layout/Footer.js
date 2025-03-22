import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.medium};
  padding: ${theme.spacing.xl} 0;
  margin-top: ${theme.spacing.xl};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: ${theme.colors.primary};
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize.h3};
    margin-bottom: ${theme.spacing.md};
  }

  p {
    color: ${theme.colors.text};
    font-family: ${theme.typography.fontFamily.body};
    margin-bottom: ${theme.spacing.sm};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: ${theme.colors.text};
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Us</h3>
          <p>
            Decision Tree Learner is an interactive platform designed to help
            students understand decision-making through engaging scenarios and
            visual learning.
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Contact</h3>
          <p>Email: info@decisiontreelearner.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Learning Street, Education City</p>
        </FooterSection>

        <FooterSection>
          <h3>Follow Us</h3>
          <p>Stay connected with us on social media</p>
          <SocialLinks>
            <SocialLink
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              📱
            </SocialLink>
            <SocialLink
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              💬
            </SocialLink>
            <SocialLink
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              📸
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 