import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const FullImageStats = () => {
  return (
    <Box
      position='relative'
      mx='auto'
      maxW='1920px'
      w='full'
      h='2xl'
      overflow='hidden'
    >
      <Image
        src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        boxSize='full'
        objectFit='cover'
      />
      <Box
        maxW='1920px'
        w='full'
        h='2xl'
        position='absolute'
        top={0}
        left={0}
      />
      <SimpleGrid
        display={{ base: 'none', md: 'grid' }}
        columns={2}
        w='lg'
        position='absolute'
        bottom={0}
        left='20%'
        spacing={8}
      >
        <Box bg='chalkboard' color='white' p={8}>
          <Text fontSize='2xl' letterSpacing={2} color='white'>
            150 +
          </Text>
          <Text fontSize='sm' letterSpacing={2} color='white'>
            Projects Completed
          </Text>
        </Box>
        <Box bg='white' color='black' p={8}>
          <Text fontSize='2xl' letterSpacing={2}>
            75 +
          </Text>
          <Text fontSize='sm' letterSpacing={2}>
            Custom Templates
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default FullImageStats;
