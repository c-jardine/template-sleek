import {
  Box,
  chakra,
  Image,
  Text,
  VStack,
  Link,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { CardProps } from './Card.types';

const Card = (props: CardProps) => {
  return (
    <Stack>
      <Box
        as={Link}
        h='lg'
        w='full'
        maxW='md'
        overflow='hidden'
        transition='all 250ms ease-in-out'
      >
        <Image
          src={props.imgSrc}
          alt={props.imgAlt}
          objectFit='cover'
          w='full'
          h='full'
          transition='all 250ms ease-in-out'
          _hover={{ transform: { lg: 'scale(1.1)' } }}
        />
      </Box>

      <Box p={8} textAlign='center' bg='cardBackground' w='full' shadow='md'>
        <chakra.h3
          as={Link}
          textStyle='link'
          fontSize='xl'
          fontWeight='semibold'
          letterSpacing='wider'
          color='headerText'
        >
          {props.title}
        </chakra.h3>
        <Text color='bodyText'>{props.details}</Text>
      </Box>
    </Stack>
  );
};

export default Card;
