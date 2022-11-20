import {
  Box,
  chakra,
  Container,
  Grid,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import { FaDatabase } from '@react-icons/all-files/fa/FaDatabase';
import { FaNetworkWired } from '@react-icons/all-files/fa/FaNetworkWired';
import { Button } from '../../core/Button';

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
    <Box w='100vw' h={{ lg: '100vh' }} mt={-12}>
      <Box
        display={{ base: 'none', lg: 'block' }}
        w='33%'
        h='100vh'
        bg='cardBackground'
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
            filter='saturate(50%)'
          />
          <Stack direction='column' spacing={10} justifyContent='center'>
            <chakra.h1 textStyle='h1' textAlign='left' color='headerText'>
              Lorem ipsum
              <chakra.span textStyle='gradient'>
                {' '}
                dolor sit amet{' '}
              </chakra.span>{' '}
              <br /> ut labore magna aliqua
            </chakra.h1>
            <Text maxW='700px' color='bodyText'>
              Officia in impedit commodi saepe voluptas sed culpa vero, qui
              aliquid error optio cupiditate, ea odit. Voluptatum voluptates
              animi explicabo repellendus corrupti!
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
              {features.map((feature, index) => (
                <Grid key={index} templateColumns={'auto 1fr'} gap={4}>
                  <GridItem>
                    <Icon
                      as={feature.icon}
                      w={6}
                      h={6}
                      color='brand.500'
                      mt={1}
                    />
                  </GridItem>
                  <GridItem w='full'>
                    <Text variant='feature' color='headerText'>
                      {feature.title}
                    </Text>
                    <Text variant='details' color='bodyText'>
                      {feature.detail}
                    </Text>
                  </GridItem>
                </Grid>
              ))}
            </SimpleGrid>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={{ base: 4, lg: 8 }}
              flexWrap='wrap'
            >
              <Button ariaLabel='Go to the Get Started page'>
                Get Started
              </Button>
              <Button ariaLabel='Go to the pricing page' variant='light'>
                View Prices
              </Button>
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
