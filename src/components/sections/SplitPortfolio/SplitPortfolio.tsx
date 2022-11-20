import { Box, Icon, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { Header } from '../../core/Header';
import { SplitPane } from '../../core/SplitPane';
import { SplitPortfolioProps } from './SplitPortfolio.types';

const Feature = (props: { title: string; description: string }) => {
  return (
    <SimpleGrid columns={2} templateColumns='auto 1fr' gap={2}>
      <Icon as={FaChevronRight} mt={1} color='brand.600' />
      <Box>
        <Text
          fontSize='xl'
          letterSpacing='wider'
          lineHeight='short'
          fontWeight='normal'
        >
          {props.title}
        </Text>
        <Text fontSize='sm' lineHeight='tall' letterSpacing='wider'>
          {props.description}
        </Text>
      </Box>
    </SimpleGrid>
  );
};

const SplitPortfolio = (props: SplitPortfolioProps) => {
  return (
    <SplitPane>
      <SplitPane.LeftPane flip={!props.flip}>
        <Box p={{ base: 4, lg: 8, xl: 16 }} maxW='4xl' w='full'>
          <Header
            title='Mollit sit anim ea tempor aliqua in reprehenderit'
            subtitle='Laboris et laborum'
            description='Veniam aliquip pariatur proident Lorem sint amet. Lorem exercitation
            nostrud adipisicing incididunt qui enim qui fugiat proident veniam
            culpa eu non amet. Ut ea in labore voluptate esse irure duis
            exercitation sint ullamco nisi cillum.'
          />
          <Stack
            mt={8}
            spacing={8}
            maxW='lg'
            w='full'
            px={4}
            alignSelf='center'
          >
            <Feature
              title='Maxime ullam'
              description='Velit irure dolor aute fugiat cupidatat reprehenderit tempor
                  minim eu nisi reprehenderit.'
            />
            <Feature
              title='Dolor aute'
              description='Id eu proident reprehenderit exercitation laborum amet id
                  consectetur id sint labore.'
            />
            <Feature
              title='Tempor eu minim'
              description='Officia consectetur enim sint eiusmod elit consequat aliqua
                  nisi excepteur pariatur nisi eu eu minim.'
            />
            <Feature
              title='Elit consequat'
              description='Ullamco nulla tempor sint incididunt cupidatat ullamco
                  cupidatat sit labore amet incididunt.'
            />
          </Stack>
        </Box>
      </SplitPane.LeftPane>

      <SplitPane.RightPane flip={!props.flip}>
        <SimpleGrid
          gridRow={{ base: 2, xl: 1 }}
          gridColumn={!props.flip ? { base: 1, xl: 2 } : 1}
          columns={2}
          gap={2}
          px={2}
        >
          <SimpleGrid
            autoRows='1fr'
            gridRow={1}
            gridColumn={!props.flip ? 1 : 2}
            spacing={2}
            h={{ base: 'lg', xl: 'container.md' }}
          >
            <Box
              w='full'
              bgGradient={`linear(${
                !props.flip ? 'to-br' : 'to-bl'
              }, purple.500, brand.500)`}
              style={{ padding: 1, gridRow: '1 / span 1' }}
            >
              <Text
                display='flex'
                justifyContent='center'
                alignItems='center'
                bg='background'
                color='brand.500 !important'
                w='full'
                h='full'
                lineHeight='normal'
                textAlign='center'
                fontSize={['md', '2xl', '4xl']}
                fontWeight='semibold'
                textTransform='uppercase'
                p={4}
              >
                100% satisfaction
              </Text>
            </Box>
            <Box w='full' overflow='hidden' style={{ gridRow: '2 / span 2' }}>
              <Image
                filter='saturate(50%)'
                src='https://images.unsplash.com/photo-1581092582520-3da64a3c0d4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt=''
                objectFit='cover'
                h='full'
                w='full'
              />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            gridRow={1}
            gridColumn={!props.flip ? 2 : 1}
            spacing={2}
            h={{ base: 'lg', xl: 'container.md' }}
          >
            <Box w='full' overflow='hidden' style={{ gridRow: '1 / span 2' }}>
              <Image
                filter='saturate(50%)'
                src='https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
                alt=''
                objectFit='cover'
                h='full'
                w='full'
              />
            </Box>
            <Box w='full' overflow='hidden' style={{ gridRow: '3 / span 1' }}>
              <Image
                filter='saturate(50%)'
                src='https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt=''
                objectFit='cover'
                h='full'
                w='full'
              />
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </SplitPane.RightPane>
    </SplitPane>
  );
};

export default SplitPortfolio;
