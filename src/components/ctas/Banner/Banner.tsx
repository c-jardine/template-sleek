import {
  chakra,
  Stack,
  useColorModeValue,
  Container,
  Link,
  Box,
  Text,
} from '@chakra-ui/react';
import { Button } from '../../core/Button';
import { Poppins } from '@next/font/google';

const poppins = Poppins({ weight: '500' });

const Banner = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={28}
      alignItems={{ base: 'flex-start', md: 'center' }}
      justifyContent='space-between'
      rounded='lg'
    >
      <Box>
        <chakra.h2
          className={poppins.className}
          fontSize={['5xl', , '6xl']}
          lineHeight='shorter'
          color='headerText'
        >
          Ready to get started?
        </chakra.h2>
        <Text variant='feature' color='bodyText' fontSize={24}>
          Get in touch or read more.
        </Text>
      </Box>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        spacing={4}
        w={{ base: '100%', sm: 'auto' }}
      >
        <Button ariaLabel='Get started'>Get Started</Button>
        <Button ariaLabel='Learn more' variant='light'>Learn more</Button>
      </Stack>
    </Stack>
  );
};

export default Banner;
