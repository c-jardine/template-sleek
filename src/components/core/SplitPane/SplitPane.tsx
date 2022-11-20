import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const LeftPane = (props: { children: React.ReactNode; flip?: boolean }) => {
  return (
    <Box
      gridRow={{ base: 2, lg: 1 }}
      gridColumn={!props.flip ? { base: 1, lg: 2 } : 1}
    >
      {props.children}
    </Box>
  );
};

const RightPane = (props: { children: React.ReactNode; flip?: boolean }) => {
  return (
    <Box
      gridRow={1}
      gridColumn={!props.flip ? 1 : { base: 1, lg: 2 }}
      w='full'
      alignSelf='center'
    >
      {props.children}
    </Box>
  );
};

const SplitPane = (props: { children: React.ReactNode }) => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16}>
      {props.children}
    </SimpleGrid>
  );
};

SplitPane.LeftPane = LeftPane;
SplitPane.RightPane = RightPane;

export default SplitPane;
