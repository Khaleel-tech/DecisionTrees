import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';

const ExamplesContainer = styled.div`
  padding: ${theme.spacing.xl};
  padding-top: calc(80px + ${theme.spacing.xl}); // Account for fixed header
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: ${theme.typography.fontFamily.heading};
  color: ${theme.colors.text};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const Description = styled.p`
  font-family: ${theme.typography.fontFamily.body};
  color: ${theme.colors.text};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ExamplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
`;

const ExampleCard = styled(motion.div)`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.medium};
  cursor: pointer;
`;

const ExampleIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing.md};
  text-align: center;
`;

const ExampleTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
  text-align: center;
`;

const ExampleDescription = styled.p`
  font-family: ${theme.typography.fontFamily.body};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
`;

const DetailedView = styled(motion.div)`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.medium};
`;

const DetailedTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.heading};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
`;

const DetailedDescription = styled.p`
  font-family: ${theme.typography.fontFamily.body};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.6;
`;

const BackButton = styled(motion.button)`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-family: ${theme.typography.fontFamily.heading};
  font-weight: ${theme.typography.fontWeight.bold};
  cursor: pointer;
  margin-top: ${theme.spacing.lg};
`;

const examples = [
  {
    id: 1,
    icon: '🏥',
    title: 'Medical Diagnosis',
    shortDescription: 'How doctors use decision trees to diagnose common illnesses',
    detailedDescription: `In medical diagnosis, decision trees help doctors make systematic decisions based on symptoms and test results. For example:

    1. Patient presents with a fever
    2. Check temperature range
    3. Assess other symptoms (cough, headache, etc.)
    4. Consider patient history
    5. Recommend tests or treatment

    This systematic approach helps ensure accurate diagnoses and appropriate treatments.`,
  },
  {
    id: 2,
    icon: '🎮',
    title: 'Game AI',
    shortDescription: 'How video games use decision trees for character behavior',
    detailedDescription: `Video game characters use decision trees to make realistic decisions. For example:

    1. Enemy spots player
    2. Check distance to player
    3. Assess own health level
    4. Consider available weapons
    5. Choose action (attack, hide, or flee)

    This creates more engaging and challenging gameplay experiences.`,
  },
  {
    id: 3,
    icon: '🌦️',
    title: 'Weather Prediction',
    shortDescription: 'How meteorologists use decision trees to forecast weather',
    detailedDescription: `Weather forecasting uses decision trees to predict weather conditions:

    1. Analyze atmospheric pressure
    2. Check temperature patterns
    3. Monitor wind direction
    4. Assess cloud formations
    5. Predict precipitation probability

    This helps meteorologists make more accurate weather forecasts.`,
  },
  {
    id: 4,
    icon: '💼',
    title: 'Career Guidance',
    shortDescription: 'How counselors use decision trees to guide career choices',
    detailedDescription: `Career counselors use decision trees to help students choose career paths:

    1. Assess interests and passions
    2. Consider academic strengths
    3. Evaluate skill sets
    4. Factor in market demand
    5. Suggest suitable career options

    This structured approach helps make better career decisions.`,
  },
  {
    id: 5,
    icon: '🏦',
    title: 'Loan Approval',
    shortDescription: 'How banks use decision trees for loan applications',
    detailedDescription: `Banks use decision trees to evaluate loan applications:

    1. Check credit score
    2. Verify income level
    3. Assess debt-to-income ratio
    4. Review employment history
    5. Make loan decision

    This helps make fair and consistent lending decisions.`,
  },
  {
    id: 6,
    icon: '🛒',
    title: 'Product Recommendations',
    shortDescription: 'How online stores suggest products using decision trees',
    detailedDescription: `E-commerce sites use decision trees for product recommendations:

    1. Analyze purchase history
    2. Consider browsing behavior
    3. Compare with similar users
    4. Factor in current trends
    5. Suggest relevant products

    This helps provide personalized shopping experiences.`,
  },
];

const ExamplesPage = () => {
  const [selectedExample, setSelectedExample] = useState(null);

  return (
    <ExamplesContainer>
      <Title>Real-World Examples</Title>
      <Description>
        Discover how decision trees are used in various fields to solve real-world problems.
        Click on any example to learn more about its application.
      </Description>

      <ExamplesGrid>
        {examples.map((example) => (
          <ExampleCard
            key={example.id}
            onClick={() => setSelectedExample(example)}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExampleIcon>{example.icon}</ExampleIcon>
            <ExampleTitle>{example.title}</ExampleTitle>
            <ExampleDescription>{example.shortDescription}</ExampleDescription>
          </ExampleCard>
        ))}
      </ExamplesGrid>

      {selectedExample && (
        <DetailedView
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DetailedTitle>
            {selectedExample.icon} {selectedExample.title}
          </DetailedTitle>
          <DetailedDescription>
            {selectedExample.detailedDescription}
          </DetailedDescription>
          <BackButton
            onClick={() => setSelectedExample(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Examples
          </BackButton>
        </DetailedView>
      )}
    </ExamplesContainer>
  );
};

export default ExamplesPage; 