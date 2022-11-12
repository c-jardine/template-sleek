import { Box, chakra, Image, Text, VStack, Link } from '@chakra-ui/react';
import React from 'react';
import { CardProps } from './Card.types';

const Card = (props: CardProps) => {
  return (
    <VStack as={Link} role='group' spacing={0}>
      <Box
        h='lg'
        w='full'
        maxW='md'
        overflow='hidden'
        transition='all 250ms ease-in-out'
        _groupHover={{ transform: { lg: 'scale(0.975)' } }}
      >
        <Image
          src={props.imgSrc}
          alt={props.imgAlt}
          objectFit='cover'
          w='full'
          h='full'
          transition='all 250ms ease-in-out'
          _groupHover={{ transform: { lg: 'scale(1.1)' } }}
        />
      </Box>

      <Box p={8} pb={0} textAlign='center'>
        <chakra.h3 fontSize='xl' fontWeight='semibold' letterSpacing='wider'>
          {props.title}
        </chakra.h3>
        <Text color='blackAlpha.500'>{props.details}</Text>
      </Box>
    </VStack>
  );
};

export default Card;
