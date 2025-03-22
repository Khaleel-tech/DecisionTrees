import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';

const QuizContainer = styled.div`
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

const QuizCard = styled(motion.div)`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.medium};
`;

const Question = styled.h2`
  font-family: ${theme.typography.fontFamily.heading};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.h3};
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};
`;

const Option = styled(motion.button)`
  background-color: ${({ isSelected, isCorrect, isAnswered }) => {
    if (!isAnswered) return theme.colors.white;
    if (isSelected && isCorrect) return theme.colors.primary + '22';
    if (isSelected && !isCorrect) return theme.colors.error + '22';
    if (!isSelected && isCorrect) return theme.colors.primary + '22';
    return theme.colors.white;
  }};
  border: 2px solid ${({ isSelected, isCorrect, isAnswered }) => {
    if (!isAnswered) return theme.colors.primary;
    if (isSelected && isCorrect) return theme.colors.primary;
    if (isSelected && !isCorrect) return theme.colors.error;
    if (!isSelected && isCorrect) return theme.colors.primary;
    return theme.colors.primary;
  }};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.md};
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.body};
  cursor: ${({ isAnswered }) => isAnswered ? 'default' : 'pointer'};
  text-align: left;
  width: 100%;
  transition: all 0.2s ease;

  &:hover {
    transform: ${({ isAnswered }) => isAnswered ? 'none' : 'translateY(-2px)'};
    box-shadow: ${({ isAnswered }) => isAnswered ? 'none' : theme.shadows.medium};
  }
`;

const Feedback = styled(motion.div)`
  margin-top: ${theme.spacing.lg};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  background-color: ${({ isCorrect }) =>
    isCorrect ? theme.colors.primary + '22' : theme.colors.error + '22'};
  color: ${({ isCorrect }) =>
    isCorrect ? theme.colors.primary : theme.colors.error};
`;

const NextButton = styled(motion.button)`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-family: ${theme.typography.fontFamily.heading};
  font-weight: ${theme.typography.fontWeight.bold};
  cursor: pointer;
  margin-top: ${theme.spacing.lg};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.medium};
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.small};
  margin-bottom: ${theme.spacing.xl};
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.small};
`;

const Score = styled.div`
  text-align: center;
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.h2};
  color: ${theme.colors.primary};
  margin: ${theme.spacing.xl} 0;
`;

const quizQuestions = [
  {
    id: 1,
    question: "What is a Decision Tree?",
    options: [
      {
        text: "A flowchart-like structure that helps make decisions based on conditions",
        correct: true,
        explanation: "Correct! Decision trees are visual tools that help us make choices by following a path of conditions and outcomes."
      },
      {
        text: "A type of plant that grows in a computer",
        correct: false,
        explanation: "Not quite! Decision trees are actually diagrams that help us make choices, not actual trees."
      },
      {
        text: "A random number generator",
        correct: false,
        explanation: "Incorrect. Decision trees are structured diagrams that help us make systematic choices, not random ones."
      },
      {
        text: "A list of rules without any structure",
        correct: false,
        explanation: "Wrong. Decision trees have a clear structure with nodes and branches, not just a list of rules."
      }
    ]
  },
  {
    id: 2,
    question: "Which part of a Decision Tree represents a question or condition?",
    options: [
      {
        text: "Leaf Node",
        correct: false,
        explanation: "Incorrect. Leaf nodes represent final outcomes or decisions, not questions."
      },
      {
        text: "Decision Node",
        correct: true,
        explanation: "Correct! Decision nodes (internal nodes) contain questions or conditions that help guide us to a decision."
      },
      {
        text: "Branch",
        correct: false,
        explanation: "Not quite. Branches connect nodes and represent possible answers, but don't contain the questions themselves."
      },
      {
        text: "Root",
        correct: false,
        explanation: "While the root is a decision node, not all decision nodes are roots. This answer is too specific."
      }
    ]
  },
  {
    id: 3,
    question: "When would you use a Decision Tree?",
    options: [
      {
        text: "Only for mathematical calculations",
        correct: false,
        explanation: "Incorrect. Decision trees can be used for many types of decisions, not just mathematical ones."
      },
      {
        text: "When you need to make random choices",
        correct: false,
        explanation: "Wrong. Decision trees help make systematic, not random choices."
      },
      {
        text: "When you have a series of choices to make based on different conditions",
        correct: true,
        explanation: "Correct! Decision trees are perfect for situations where you need to make choices based on different conditions or criteria."
      },
      {
        text: "Only in computer programming",
        correct: false,
        explanation: "Incorrect. Decision trees can be used in many areas of life, not just programming."
      }
    ]
  }
];

const QuizzesPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionClick = (option) => {
    if (showFeedback) return;
    setSelectedOption(option);
    setShowFeedback(true);
    if (option.correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  if (currentQuestion >= quizQuestions.length) {
    return (
      <QuizContainer>
        <Title>Quiz Complete! 🎉</Title>
        <QuizCard>
          <Score>
            Your Score: {score} / {quizQuestions.length}
            <br />
            ({Math.round((score / quizQuestions.length) * 100)}%)
          </Score>
          <NextButton
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </NextButton>
        </QuizCard>
      </QuizContainer>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <QuizContainer>
      <Title>Decision Tree Quiz</Title>
      <ProgressBar>
        <Progress
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </ProgressBar>
      <QuizCard>
        <Question>Question {currentQuestion + 1}: {question.question}</Question>
        <OptionsContainer>
          {question.options.map((option, index) => (
            <Option
              key={index}
              onClick={() => handleOptionClick(option)}
              isSelected={selectedOption === option}
              isCorrect={option.correct}
              isAnswered={showFeedback}
              whileHover={!showFeedback ? { scale: 1.02 } : {}}
              whileTap={!showFeedback ? { scale: 0.98 } : {}}
            >
              {option.text}
            </Option>
          ))}
        </OptionsContainer>
        {showFeedback && selectedOption && (
          <>
            <Feedback
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              isCorrect={selectedOption.correct}
            >
              {selectedOption.explanation}
            </Feedback>
            <NextButton
              onClick={handleNextQuestion}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next Question
            </NextButton>
          </>
        )}
      </QuizCard>
    </QuizContainer>
  );
};

export default QuizzesPage; 