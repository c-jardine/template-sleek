import { Box, chakra, Container, Image, Stack, Text } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaDatabase } from '@react-icons/all-files/fa/FaDatabase';
import { FaNetworkWired } from '@react-icons/all-files/fa/FaNetworkWired';
import { Button } from '../../core/Button';
import { Icon } from '../../core/Icon';

const features = [
  {
    title: 'Lorem',
    detail: 'Possimus necessitatibus temporibus natus tempore.',
    icon: FaDatabase,
  },
  {
    title: 'Ipsum',
    detail: 'Laborio et dolor fugiat blanditiis.',
    icon: FaNetworkWired,
  },
];
const CtaLeftAlign = () => {
  return (
    <Box w='100vw' h={{ lg: '100vh' }}>
      <Box
        display={{ base: 'none', lg: 'block' }}
        w='33%'
        h='100vh'
        bg='gray.100'
        position='absolute'
      />
      <Container
        position='relative'
        maxW='7xl'
        px={{ base: 6, lg: 10 }}
        py={14}
        h='full'
        w='full'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Stack direction={{ base: 'column', lg: 'row' }} gap={12}>
          <Image
            boxSize='375px'
            objectFit='cover'
            src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='People consulting at a desk'
            rounded='lg'
            overflow='hidden'
          />
          <Stack direction='column' spacing={10} justifyContent='center'>
            <chakra.h1
              fontSize='5xl'
              lineHeight={1}
              fontWeight='bold'
              textAlign='left'
            >
              Lorem ipsum
              <chakra.span
                bgGradient='linear(to-br, purple.400, brand.400)'
                bgClip='text'
              >
                {' '}
                dolor sit amet{' '}
              </chakra.span>{' '}
              <br /> ut labore magna aliqua
            </chakra.h1>
            <Text
              color='gray.500'
              fontSize='lg'
              textAlign='left'
              fontWeight='light'
              lineHeight='taller'
              maxW='700px'
            >
              Officia in impedit commodi saepe voluptas sed culpa vero, qui
              aliquid error optio cupiditate, ea odit. Voluptatum voluptates
              animi explicabo repellendus corrupti!
            </Text>
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: 5, md: 10 }}
              flexWrap='wrap'
            >
              {features.map((feature, index) => (
                <Stack key={index} direction='row' spacing={2}>
                  <Icon size={32}>{feature.icon}</Icon>
                  <Stack direction='column' spacing={0}>
                    <Text fontSize='md' fontWeight='500'>
                      {feature.title}
                    </Text>
                    <Text
                      fontSize='sm'
                      color='gray.500'
                      lineHeight='tall'
                      maxW={{ base: '100%', lg: '200px' }}
                    >
                      {feature.detail}
                    </Text>
                  </Stack>
                </Stack>
              ))}
            </Stack>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={{ base: 0, sm: 2 }}
              flexWrap='wrap'
            >
              <Button>Get Started</Button>
              <Button variant='light'>View Prices</Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Box
        maxW='66%'
        bgGradient='linear(to-r, purple.700, brand.400)'
        style={{ height: 1 }}
      />
    </Box>
  );
};

export default CtaLeftAlign;
