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
        <chakra.h2 textStyle='h2'>Ready to get started?</chakra.h2>
        <Text variant='feature' textStyle='gradient' fontSize={24}>
          Get in touch or read more.
        </Text>
      </Box>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        spacing={4}
        w={{ base: '100%', sm: 'auto' }}
      >
        <Button>Get Started</Button>
        <Button variant='light'>Learn more</Button>
      </Stack>
    </Stack>
  );
};

export default Banner;
