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
        <Box p={{ base: 4, lg: 8, xl: 16 }}>
          <Header
            title='Mollit sit anim ea tempor aliqua in reprehenderit'
            subtitle='Laboris et laborum'
          />
          <Text>
            Veniam aliquip pariatur proident Lorem sint amet. Lorem exercitation
            nostrud adipisicing incididunt qui enim qui fugiat proident veniam
            culpa eu non amet. Ut ea in labore voluptate esse irure duis
            exercitation sint ullamco nisi cillum.
          </Text>
          <Stack mt={8} spacing={8} maxW='lg' w='full' alignSelf='center'>
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
          maxH={{ base: 'container.lg' }}
        >
          <Stack gridRow={1} gridColumn={!props.flip ? 1 : 2} spacing={2}>
            <Box
              w='full'
              h='33.33%'
              bgGradient={`linear(${
                !props.flip ? 'to-br' : 'to-bl'
              }, purple.500, brand.500)`}
              style={{ padding: 1 }}
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
            <Box w='full' h='66.66%' overflow='hidden'>
              <Image
                filter='saturate(50%)'
                src='https://images.unsplash.com/photo-1581092582520-3da64a3c0d4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt=''
                objectFit='cover'
                h='full'
                w='full'
              />
            </Box>
          </Stack>
          <Stack gridRow={1} gridColumn={!props.flip ? 2 : 1} spacing={2}>
            <Box w='full' overflow='hidden' h='66.66%'>
              <Image
                filter='saturate(50%)'
                src='https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
                alt=''
                h='full'
                w='full'
                objectFit='cover'
              />
            </Box>
            <Box w='full' overflow='hidden' h='33.33%'>
              <Image
                filter='saturate(50%)'
                src='https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt=''
                objectFit='cover'
                h='full'
                w='full'
              />
            </Box>
          </Stack>
        </SimpleGrid>
      </SplitPane.RightPane>
    </SplitPane>
  );
};

export default SplitPortfolio;