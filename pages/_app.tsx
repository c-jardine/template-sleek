import '../src/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Navbar } from '../src/components/core/Navbar';
import { MainLayout } from '../src/layouts/MainLayout';
import theme from '../src/styles/theme/theme';
import { Footer } from '../src/components/core/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <MainLayout>
        <Component {...pageProps} />
        <Footer />
      </MainLayout>
    </ChakraProvider>
  );
}
