import { Box, chakra, Text } from '@chakra-ui/react';
import { HeaderProps } from './Header.types';

const Header = (props: HeaderProps) => {
  return (
    <Box maxW='6xl' mx='auto'>
      <Text variant='upperWide' textAlign='center'>
        {props.subtitle}
      </Text>
      <chakra.h2 textStyle={['h2', 'gradient']} mb={28} textAlign='center'>
        {props.title}
      </chakra.h2>
    </Box>
  );
};

export default Header;
