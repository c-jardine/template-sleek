import { Box, chakra, Text } from '@chakra-ui/react';
import { HeaderProps } from './Header.types';

const Header = (props: HeaderProps) => {
  return (
    <Box maxW='4xl' w='full' mx='auto'>
      <Text variant='upperWide' textAlign={!props.center ? 'left' : 'center'}>
        {props.subtitle}
      </Text>
      <chakra.h2
        textStyle={'gradient'}
        fontSize={['3xl', , '5xl']}
        fontWeight='bold'
        mb={4}
        textAlign={!props.center ? 'left' : 'center'}
      >
        {props.title}
      </chakra.h2>
      <Text maxW='4xl' mx='auto' textAlign={!props.center ? 'left' : 'center'}>
        {props.description}
      </Text>
    </Box>
  );
};

export default Header;
