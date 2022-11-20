import { Box, chakra, Circle, Flex, Link, Text } from '@chakra-ui/react';
import { StepCardProps } from './StepCard.types';

const Card = (props: StepCardProps) => {
  return (
    <Flex
      position='relative'
      justifyContent={props.flip ? 'flex-end' : 'flex-start'}
    >
      <Box
        position='relative'
        w='fit-content'
        display={{ base: 'none', md: 'block' }}
      >
        <Circle
          size={64}
          bgGradient={`linear(${
            props.flip ? 'to-tl' : 'to-br'
          }, purple.400, brand.400)`}
          style={{ padding: 1 }}
        >
          <Circle bg='background' size='full' />
        </Circle>
        <Circle
          position='absolute'
          size={32}
          border='1px solid'
          borderColor='purple.500'
          opacity={0.5}
          top={-12}
          left={!props.flip && -8}
          right={props.flip && -8}
        />
        <Circle
          position='absolute'
          size={16}
          border='1px solid'
          borderColor='purple.500'
          opacity={0.25}
          bottom={-4}
          right={!props.flip && 4}
          left={props.flip && 4}
        />
        <Circle
          position='absolute'
          size={8}
          border='1px solid'
          borderColor='purple.500'
          opacity={0.5}
          bottom={-4}
          right={!props.flip && 16}
          left={props.flip && 16}
        />
      </Box>
      <Box
        px={12}
        py={8}
        bg='cardBackground'
        border='1px solid'
        borderColor='cardBackground'
        maxW='xl'
        w='full'
        h='fit-content'
        shadow='lg'
        position={{ base: 'relative', md: 'absolute' }}
        top={{ base: 0, md: -16 }}
        left={!props.flip && { base: 0, md: 28 }}
        right={props.flip && { base: 0, md: 28 }}
      >
        <Circle
          position='absolute'
          top={-6}
          left={!props.flip && { base: 6, md: -6 }}
          right={props.flip && { base: 6, md: -6 }}
          bg='brand.600'
          color='white'
          fontWeight='bold'
          fontSize='xl'
          size={12}
        >
          {props.step}
        </Circle>
        <chakra.h3
          as={Link}
          textStyle='link'
          fontSize='2xl'
          fontWeight='semibold'
          letterSpacing='wider'
          color='headerText'
        >
          {props.title}
        </chakra.h3>
        <Text color='bodyText' mt={4}>
          {props.details}
        </Text>
      </Box>
    </Flex>
  );
};

export default Card;
