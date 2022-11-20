import {
  Box,
  chakra,
  Circle,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FeatureCardProps } from './FeatureCard.types';

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <Stack
      bg='cardBackground'
      justifyContent='center'
      textAlign='center'
      borderColor='cardBackground'
      shadow='md'
    >
      <Image
        src={props.imgSrc}
        alt={props.imgAlt}
        h={48}
        w='full'
        objectFit='cover'
        filter='saturate(50%)'
      />
      <Box position='relative'>
        <Flex position='absolute' w='full' justifyContent='center' mt={-10}>
          <Circle bg='background' size='fit-content' p={4} shadow='md'>
            <Icon as={props.icon} w={8} h={8} color='brand.500' />
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
