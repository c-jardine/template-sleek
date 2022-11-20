import {
  Box,
  chakra,
  Circle,
  Flex,
  Icon,
  Image,
  Link as ChakraLink,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FeatureCardProps } from './FeatureCard.types';

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <Stack
      as={ChakraLink}
      bg='cardBackground'
      justifyContent='center'
      textAlign='center'
      borderColor='cardBackground'
      shadow='md'
      role='group'
    >
      <Image
        src={props.imgSrc}
        alt={props.imgAlt}
        h={48}
        w='full'
        objectFit='cover'
        filter='saturate(50%)'
        transition='200ms ease-in-out'
        _groupHover={{ filter: 'saturate(80%)' }}
      />
      <Box position='relative'>
        <Flex position='absolute' w='full' justifyContent='center' mt={-10}>
          <Circle
            bg='background'
            size='fit-content'
            p={4}
            shadow='md'
            transition='200ms ease-in-out'
            _groupHover={{ bg: 'brand.500' }}
          >
            <Icon
              as={props.icon}
              w={8}
              h={8}
              color='brand.500'
              transition='200ms ease-in-out'
              _groupHover={{ color: 'white' }}
            />
          </Circle>
        </Flex>
        <Stack p={4}>
          <chakra.h3
            mt={4}
            color='headerText'
            fontSize='2xl'
            letterSpacing='wider'
            textAlign='left'
          >
            {props.heading}
          </chakra.h3>
          <Text textAlign='left'>{props.content}</Text>
        </Stack>
      </Box>
    </Stack>
  );
};

export default FeatureCard;
