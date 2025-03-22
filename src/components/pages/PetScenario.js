import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TreeNode from '../common/TreeNode';
import { theme } from '../../theme';

const ScenarioContainer = styled.div`
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
  font-size: ${theme.typography.fontSize.body};
`;

const TreeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${theme.spacing.xl};
  overflow-x: auto;
`;

const ResultMessage = styled(motion.div)`
  background-color: ${theme.colors.success};
  color: ${theme.colors.white};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  margin-top: ${theme.spacing.xl};
  text-align: center;
  font-family: ${theme.typography.fontFamily.body};
`;

const petDecisionTree = {
  id: 1,
  content: "Do you have space for a pet?",
  children: [
    {
      id: 2,
      content: "Yes, I have plenty of space",
      children: [
        {
          id: 4,
          content: "Do you have time for daily walks?",
          children: [
            {
              id: 8,
              content: "Yes",
              result: "A dog would be perfect for you! Dogs need space and regular exercise."
            },
            {
              id: 9,
              content: "No",
              children: [
                {
                  id: 10,
                  content: "Do you like independent pets?",
                  children: [
                    {
                      id: 11,
                      content: "Yes",
                      result: "A cat would be great! Cats are independent and don't need walks."
                    },
                    {
                      id: 12,
                      content: "No",
                      result: "Consider a rabbit! They need space but are social and don't need walks."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      content: "No, I have limited space",
      children: [
        {
          id: 5,
          content: "Are you home most of the time?",
          children: [
            {
              id: 6,
              content: "Yes",
              result: "A hamster or gerbil would be perfect! They're small and entertaining."
            },
            {
              id: 7,
              content: "No",
              result: "Fish would be ideal! They don't need much attention and are calming to watch."
            }
          ]
        }
      ]
    }
  ]
};

const PetScenario = () => {
  const [expandedNodes, setExpandedNodes] = useState(new Set([1]));
  const [result, setResult] = useState(null);

  const handleNodeClick = (nodeId, nodeResult) => {
    if (nodeResult) {
      setResult(nodeResult);
      return;
    }

    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const renderNode = (node) => {
    const isExpanded = expandedNodes.has(node.id);
    
    return (
      <TreeNode
        key={node.id}
        content={node.content}
        isQuestion={!node.result}
        isExpanded={isExpanded}
        onNodeClick={() => handleNodeClick(node.id, node.result)}
      >
        {node.children?.map(child => renderNode(child))}
      </TreeNode>
    );
  };

  return (
    <ScenarioContainer>
      <Title>Choose Your Perfect Pet! 🐾</Title>
      <Description>
        Answer these questions to find out which pet would be the best match for your lifestyle.
        Click on each option to explore further!
      </Description>
      
      <TreeContainer>
        {renderNode(petDecisionTree)}
      </TreeContainer>

      {result && (
        <ResultMessage
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {result}
        </ResultMessage>
      )}
    </ScenarioContainer>
  );
};

export default PetScenario; 