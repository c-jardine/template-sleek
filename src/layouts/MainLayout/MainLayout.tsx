import { VStack } from '@chakra-ui/react';
import React from 'react';

const MainLayout = (props: { children: React.ReactNode }) => {
  return <VStack spacing={16}>{props.children}</VStack>;
};

export default MainLayout;
