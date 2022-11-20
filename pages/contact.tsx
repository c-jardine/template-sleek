import { Box, chakra, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { Button } from '../src/components/core/Button';
import { Header } from '../src/components/core/Header';
import { Input } from '../src/components/core/Input';
import { Location } from '../src/components/core/Location';
import { Textarea } from '../src/components/core/Textarea';
import { PageLayout } from '../src/layouts/PageLayout';

const ContactPage: NextPage = () => {
  return (
    <PageLayout>
      <Box position='sticky' top={32} zIndex={0} px={{ base: 4, lg: 0 }}>
        <Parallax speed={20} opacity={[3, 0]}>
          <Box my={16}>
            <Header
              center
              title='Officiis nisi temporibus praesentium magni adipisci'
              subtitle='Contact Us'
              description='Cupidatat ad Lorem dolore duis. Duis consectetur amet qui consectetur exercitation proident. Sunt commodo dolor pariatur aliquip cillum id aliquip dolore occaecat. Do ad sint consequat laboris aliqua sint ad.'
            />
          </Box>
        </Parallax>
      </Box>
      <Box
        position='relative'
        zIndex={1}
        w='100vw'
        style={{ WebkitTransform: 'translate3d(0,0,0)' }}
      >
        <Box bg='cardBackground' w='full' py={16}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            w='full'
            maxW='7xl'
            mx='auto'
            gap={16}
          >
            <Box p={4}>
              <chakra.h2
                textStyle='h2'
                color='headerText'
                mb={16}
                textAlign='left'
                fontSize='4xl'
              >
                Send a message
              </chakra.h2>
              <Stack spacing={8}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                  <Input label='First name' autoComplete='given-name' />
                  <Input label='Last name' autoComplete='family-name' />
                </SimpleGrid>
                <Input label='Phone number' autoComplete='tel' />
                <Input label='Email' autoComplete='email' />
                <Textarea label='Message' />
                <Button ariaLabel='Send the message' variant='light'>
                  Send
                </Button>
              </Stack>
            </Box>
            <Box p={4}>
              <chakra.h2
                textStyle='h2'
                color='headerText'
                mb={16}
                textAlign='left'
                fontSize='4xl'
              >
                Contact info
              </chakra.h2>
              <Stack spacing={8}>
                <Box>
                  <chakra.h3
                    fontSize='xl'
                    fontWeight='semibold'
                    color='headerText'
                    letterSpacing={1}
                  >
                    Talk to us
                  </chakra.h3>
                  <Text>lorem@ipsum.com</Text>
                  <Text>(419) 555-5555</Text>
                </Box>
                <Box>
                  <chakra.h3
                    fontSize='xl'
                    fontWeight='semibold'
                    color='headerText'
                    letterSpacing={1}
                  >
                    Visit us
                  </chakra.h3>
                  <chakra.address>
                    <Text>123 Main St.</Text>
                    <Text>Toledo, OH 43604</Text>
                  </chakra.address>
                </Box>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
        <Location />
      </Box>
    </PageLayout>
  );
};
export default ContactPage;
