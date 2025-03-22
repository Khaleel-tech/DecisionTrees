import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../theme';

const NodeContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const NodeContent = styled(motion.div)`
  background-color: ${theme.colors.white};
  border: 2px solid ${({ isQuestion }) => 
    isQuestion ? theme.colors.primary : theme.colors.accent};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.md};
  min-width: 200px;
  max-width: 300px;
  box-shadow: ${theme.shadows.medium};
  cursor: pointer;
  transition: ${theme.transitions.default};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${theme.shadows.large};
  }
`;

const ChildrenContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  position: relative;
  padding-top: ${theme.spacing.lg};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: ${theme.spacing.lg};
    background-color: ${theme.colors.primary};
    transform: translateX(-50%);
  }
`;

const nodeVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const TreeNode = ({ 
  content,
  isQuestion = true,
  children,
  onNodeClick,
  isExpanded = false
}) => {
  return (
    <NodeContainer
      initial="hidden"
      animate="visible"
      variants={nodeVariants}
    >
      <NodeContent
        isQuestion={isQuestion}
        onClick={onNodeClick}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </NodeContent>
      
      {isExpanded && children && (
        <ChildrenContainer>
          {children}
        </ChildrenContainer>
      )}
    </NodeContainer>
  );
};

export default TreeNode; 