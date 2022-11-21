import {
  Box,
  Button as ChakraButton,
  ChakraProvider,
  Icon,
} from '@chakra-ui/react';
import { FaMoon } from '@react-icons/all-files/fa/FaMoon';
import { FaSun } from '@react-icons/all-files/fa/FaSun';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useAppDispatch, useAppSelector } from '../lib/hooks/redux';
import { asyncToggleTheme } from '../src/redux/slices/themeSlice';
import { RootState } from '../src/redux/store';
import chakraTheme from '../src/styles/theme/theme';

const AppWrapper = (props) => {
  const { darkMode } = useAppSelector((state: RootState) => state.themeReducer);
  const dispatch = useAppDispatch();

  return (
    <ParallaxProvider>
      <ChakraProvider
        theme={darkMode ? chakraTheme.darkTheme : chakraTheme.lightTheme}
      >
        <Box
          as={ChakraButton}
          position='fixed'
          display='flex'
          justifyContent='center'
          alignItems='center'
          zIndex={100}
          bg={darkMode ? 'purple.900' : 'yellow.400'}
          shadow='dark-lg'
          w={14}
          h={14}
          rounded='full'
          bottom={4}
          right={4}
          _hover={darkMode ? { bg: 'purple.800' } : { bg: 'yellow.300' }}
          onClick={() => dispatch(asyncToggleTheme())}
        >
          {darkMode ? (
            <Icon as={FaMoon} w={6} h={6} color='white' />
          ) : (
            <Icon as={FaSun} w={6} h={6} color='white' />
          )}
        </Box>
        {props.children}
      </ChakraProvider>
    </ParallaxProvider>
  );
};

export default AppWrapper;
