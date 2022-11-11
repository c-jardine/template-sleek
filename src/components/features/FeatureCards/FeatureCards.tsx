import {
  chakra,
  Container,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
} from '@chakra-ui/react';
import { IconType } from '@react-icons/all-files';
import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';
import { FaBolt } from '@react-icons/all-files/fa/FaBolt';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { FaUsers } from '@react-icons/all-files/fa/FaUsers';
import { Icon } from '../../core/Icon';

interface IFeature {
  heading: string;
  content: string;
  icon: IconType;
}

const features: IFeature[] = [
  {
    heading: 'Lorem',
    content: 'Neque convallis a cras semper auctor neque vitae tempus quam.',
    icon: FaUsers,
  },
  {
    heading: 'Ipsum',
    content:
      'Sit amet consectetur adipiscing elit pellentesque habitant morbi.',
    icon: FaSearch,
  },
  {
    heading: 'Et Dolor',
    content:
      'Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas.',
    icon: FaBolt,
  },
];

const FeatureCards = () => {
  return (
    <Container maxW='6xl' p={{ base: 5, md: 10 }}>
      <Text textTransform='uppercase' textAlign='center' letterSpacing={6}>
        Lorem ipsum
      </Text>
      <chakra.h2
        fontSize={{ base: '3xl', md: '5xl' }}
        fontWeight='bold'
        mb={16}
        textAlign='center'
      >
        <chakra.span
          bgGradient='linear(to-br, purple.400, brand.400)'
          bgClip='text'
        >
          Quasi maiores cupiditate id minus porro voluptates a nostrum ipsum
          dolor nesciunt
        </chakra.span>
      </chakra.h2>
      <Grid
        // templateColumns={{ base: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
        gap={8}
        placeItems='center'
      >
        {features.map((feature, index) => (
          <GridItem
            key={index}
            bg={index === 1 ? 'transparent' : 'blackAlpha.50'}
            p={12}
            justifyContent='center'
            textAlign='center'
            pos='relative'
            border={index === 1 ? '1px solid' : 'none'}
            borderColor='blackAlpha.100'
            rowSpan={4}
            colSpan={12}
            gridRowStart={
              (index === 0 && 1) ||
              (index === 1 && { base: 5, lg: 2 }) ||
              (index === 2 && { base: 9, lg: 3 }) ||
              1
            }
          >
            <Flex justifyContent='center'>
              <Icon size={32}>{feature.icon}</Icon>
            </Flex>
            <chakra.h3 fontSize='xl' mt={6} letterSpacing='wide'>
              {feature.heading}
            </chakra.h3>
            <Text
              fontSize='md'
              mt={4}
              color='blackAlpha.600'
              fontWeight='light'
              letterSpacing='wide'
              lineHeight='taller'
            >
              {feature.content}
            </Text>
          </GridItem>
        ))}
      </Grid>
      <Link
        display='flex'
        flexDirection='row'
        alignItems='center'
        gap={2}
        w='fit-content'
        mt={{ base: 16, lg: -4 }}
        role='group'
      >
        <Text
          textTransform='uppercase'
          letterSpacing={6}
          fontSize='sm'
          _groupHover={{
            color: 'brand.500',
          }}
          transition='150ms ease-in-out'
        >
          Learn more
        </Text>
        <chakra.span
          _groupHover={{ color: 'brand.500' }}
          transition='150ms ease-in-out'
        >
          <BsArrowRight size={20} />
        </chakra.span>
      </Link>
    </Container>
  );
};

export default FeatureCards;
