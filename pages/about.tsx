import {
  Box,
  chakra,
  Image,
  SimpleGrid,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { Button } from '../src/components/core/Button';
import { Header } from '../src/components/core/Header';
import { PageLayout } from '../src/layouts/PageLayout';

const About: NextPage = () => {
  return (
    <PageLayout>
      <Box
        position='sticky'
        mb={32}
        top={32}
        zIndex={0}
        px={{ base: 4, lg: 0 }}
      >
        <Parallax speed={20} opacity={[3, 0]}>
          <Box my={16}>
            <Header
              center
              title='Irure nulla velit ut ullamco'
              subtitle='About'
              description='Voluptate ea incididunt nisi nisi ut adipisicing est commodo occaecat. Dolor excepteur ullamco ea incididunt non qui cillum enim nostrud voluptate nisi exercitation deserunt dolor.'
            />
          </Box>
        </Parallax>
      </Box>
      <Box
        position='relative'
        style={{ WebkitTransform: 'translate3d(0,0,0)' }}
        bg='background'
      >
        <Stack
          position='relative'
          zIndex={1}
          w='100vw'
          style={{ WebkitTransform: 'translate3d(0,0,0)' }}
          bg='cardBackground'
          spacing={28}
          alignItems='center'
        >
          <Box mt={-32} mx='auto' maxW='4xl' w='full' h='lg'>
            <Image
              src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
              alt=''
              filter='saturate(50%)'
              objectFit='cover'
              w='full'
              h='full'
            />
          </Box>
          <SimpleGrid
            columns={{ base: 1, xl: 3 }}
            mx='auto'
            maxW='7xl'
            px={{ base: 4, xl: 0 }}
          >
            <chakra.h3 color='headerText' fontSize='4xl'>
              Who we are
            </chakra.h3>
            <Stack gridColumn={{ base: 1, xl: '2 / span 2' }}>
              <Text>
                Consectetur id velit id anim enim laboris do quis laborum esse
                est magna ipsum. Dolor minim exercitation nostrud ex eiusmod et
                aliquip esse consequat amet et proident fugiat eu.
              </Text>
              <Text>
                Labore nostrud enim laboris exercitation enim fugiat veniam. Id
                cupidatat aute commodo id. Aute pariatur culpa ipsum dolor irure
                proident sunt magna magna. Id qui voluptate proident velit sunt.
                Lorem dolore do quis sint et sit.
              </Text>
            </Stack>
          </SimpleGrid>

          <Stack spacing={16} w='full'>
            <Header
              center
              title='Nostrud labore enim cupidatat ullamco'
              subtitle='Ullamco dolor'
              description='Proident minim et ut adipisicing ut excepteur incididunt exercitation magna aliquip mollit anim. Nisi velit reprehenderit sit voluptate magna magna deserunt. Reprehenderit pariatur est aliquip sunt dolore et mollit anim est nulla laborum. Tempor non voluptate incididunt non duis exercitation quis.'
            />
            <Box>
              <Box position='relative' h={{ base: '2xl', lg: 'lg' }}>
                <Image
                  src='https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80'
                  alt=''
                  filter='saturate(50%)'
                  objectFit='cover'
                  w='full'
                  h='full'
                />
                <Box
                  position='absolute'
                  w='full'
                  maxW='md'
                  top={{ base: '50%', lg: 32 }}
                  right={{ base: '50%', lg: 16, xl: 32 }}
                  transform={{
                    base: 'translateX(50%) translateY(-50%)',
                    lg: 'translateX(0%) translateY(0%)',
                  }}
                  px={4}
                  mx='auto'
                >
                  <Parallax opacity={[-1, 5]} speed={10}>
                    <Box
                      p={1}
                      bgGradient='linear(to-br, purple.500, brand.500)'
                      shadow='dark-lg'
                    >
                      <Stack
                        bg='cardBackground'
                        h='full'
                        spacing={8}
                        px={8}
                        py={16}
                      >
                        <chakra.h3
                          color='brand.500'
                          fontSize='2xl'
                          fontWeight='semibold'
                        >
                          Anim culpa
                        </chakra.h3>
                        <Text>
                          Sunt irure exercitation aliqua ex cupidatat
                          reprehenderit laboris id cillum non.
                        </Text>
                        <Text>
                          Et adipisicing incididunt aliqua aliquip minim elit
                          occaecat qui magna consequat non laborum elit.
                        </Text>
                        <Button ariaLabel='Contact us' variant='light'>
                          Contact us
                        </Button>
                      </Stack>
                    </Box>
                  </Parallax>
                </Box>
              </Box>
              <StatGroup
                bg='background'
                py={8}
                w='full'
                display='flex'
                justifyContent='flex-start'
              >
                <SimpleGrid columns={2} maxW='xl' w='full' px={8}>
                  <Stat justifySelf='center' w='full'>
                    <StatLabel color='bodyText' fontSize='lg'>
                      Clients
                    </StatLabel>
                    <StatNumber color='headerText' fontSize='4xl'>
                      74
                    </StatNumber>
                    <StatHelpText color='bodyText' fontSize='lg'>
                      <StatArrow type='increase' w={4} h={4} />
                      45%
                    </StatHelpText>
                  </Stat>

                  <Stat justifySelf='center' w='full'>
                    <StatLabel color='bodyText' fontSize='lg'>
                      Employees
                    </StatLabel>
                    <StatNumber color='headerText' fontSize='4xl'>
                      4
                    </StatNumber>
                    <StatHelpText color='bodyText' fontSize='lg'>
                      <StatArrow type='increase' w={4} h={4} />
                      25%
                    </StatHelpText>
                  </Stat>
                </SimpleGrid>
              </StatGroup>
            </Box>
          </Stack>
        </Stack>
        <SimpleGrid
          position='relative'
          columns={{ base: 1, lg: 2 }}
          gap={16}
          bg='background'
          py={28}
          style={{ WebkitTransform: 'translate3d(0,0,0)' }}
          alignItems='center'
        >
          <Box p={{ base: 4, lg: 8, xl: 16 }}>
            <Header
              title='Reprehenderit qui dolor ut tempor aliqua'
              subtitle='Veniam commodo'
              description='Aliqua laboris sint reprehenderit commodo cillum laborum amet sint magna eiusmod officia. Irure sint non magna elit sit cupidatat amet exercitation. Amet laboris mollit incididunt proident non officia consequat aliqua. Anim excepteur cupidatat consectetur do in sunt dolore ut esse id pariatur in excepteur. Laboris commodo quis velit officia anim proident voluptate cupidatat id mollit dolor ullamco cillum laborum.'
            />
          </Box>
          <SimpleGrid columns={2} gap={2}>
            <Box w='full' h='full'>
              <Image
                src='https://i.pravatar.cc/500?img=5'
                alt=''
                filter='saturate(50%)'
                objectFit='cover'
                w='full'
                h='full'
              />
            </Box>
            <Box w='full' h='full'>
              <Image
                src='https://i.pravatar.cc/500?img=25'
                alt=''
                filter='saturate(50%)'
                objectFit='cover'
                w='full'
                h='full'
              />
            </Box>
            <Box w='full' h='full'>
              <Image
                src='https://i.pravatar.cc/500?img=11'
                alt=''
                filter='saturate(50%)'
                objectFit='cover'
                w='full'
                h='full'
              />
            </Box>
            <Box w='full' h='full'>
              <Image
                src='https://i.pravatar.cc/500?img=48'
                alt=''
                filter='saturate(50%)'
                objectFit='cover'
                w='full'
                h='full'
              />
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </Box>
    </PageLayout>
  );
};

export default About;
