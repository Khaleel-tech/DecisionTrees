import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../theme';

const HomeContainer = styled.div`
  padding-top: 80px; // Account for fixed header
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary}22, ${theme.colors.accent}22);
  padding: ${theme.spacing.xl} 0;
  text-align: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
`;

const Title = styled(motion.h1)`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: 3.5rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
`;

const Subtitle = styled(motion.p)`
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.h3};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.xl};
`;

const CTAButton = styled(motion.button)`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-family: ${theme.typography.fontFamily.heading};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.body};
  border-radius: ${theme.borderRadius.medium};
  cursor: pointer;
  box-shadow: ${theme.shadows.medium};
`;

const FeaturesSection = styled.section`
  padding: ${theme.spacing.xl} 0;
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
`;

const FeatureCard = styled(motion.div)`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing.md};
`;

const FeatureTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
`;

const FeatureDescription = styled.p`
  font-family: ${theme.typography.fontFamily.body};
  color: ${theme.colors.text};
`;

const features = [
  {
    icon: '🌳',
    title: 'Interactive Trees',
    description: 'Learn through dynamic, clickable decision trees that respond to your choices.'
  },
  {
    icon: '🎮',
    title: 'Gamified Scenarios',
    description: 'Engage with real-world scenarios in a fun, game-like environment.'
  },
  {
    icon: '📝',
    title: 'Quizzes & Challenges',
    description: 'Test your knowledge with interactive quizzes and exciting challenges.'
  },
  {
    icon: '🌍',
    title: 'Real-Life Applications',
    description: 'Discover how decision trees are used in everyday situations and AI.'
  }
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/learn');
  };

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Make Smarter Choices with Decision Trees!
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Interactive learning for curious minds
          </Subtitle>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
          >
            Get Started
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default HomePage; 