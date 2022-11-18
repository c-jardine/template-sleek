import {
  Box,
  Button as ChakraButton,
  ChakraProvider,
  Icon,
} from '@chakra-ui/react';
import { FaMoon } from '@react-icons/all-files/fa/FaMoon';
import { FaSun } from '@react-icons/all-files/fa/FaSun';
import type { AppProps } from 'next/app';
import React from 'react';
import { Footer } from '../src/components/core/Footer';
import { Navbar } from '../src/components/core/Navbar';
import '../src/styles/globals.css';
import chakraTheme from '../src/styles/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState(chakraTheme.lightTheme);
  return (
    <ChakraProvider theme={theme}>
      <Box
        as={ChakraButton}
        position='fixed'
        display='flex'
        justifyContent='center'
        alignItems='center'
        zIndex={100}
        bg={theme === chakraTheme.lightTheme ? 'yellow.400' : 'purple.900'}
        shadow='dark-lg'
        w={14}
        h={14}
        rounded='full'
        bottom={4}
        right={4}
        onClick={() => {
          theme === chakraTheme.lightTheme
            ? setTheme(chakraTheme.darkTheme)
            : setTheme(chakraTheme.lightTheme);
        }}
      >
        {theme === chakraTheme.lightTheme ? (
          <Icon as={FaSun} w={6} h={6} color='white' />
        ) : (
          <Icon as={FaMoon} w={6} h={6} color='white' />
        )}
      </Box>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
