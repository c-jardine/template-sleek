import {
  chakra,
  Container,
  Flex,
  Grid,
  GridItem,
  Icon as ChakraIcon,
  Link,
  Text,
} from '@chakra-ui/react';
import { IconType } from '@react-icons/all-files';
import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';
import { FaBolt } from '@react-icons/all-files/fa/FaBolt';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { FaUsers } from '@react-icons/all-files/fa/FaUsers';
import { Header } from '../../core/Header';
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
    <Container maxW='6xl' px={{ base: 5, md: 10 }}>
      <Header
        subtitle='Lorem ipsum'
        title='Quasi maiores cupiditate id minus porro voluptates a nostrum ipsum
          dolor nesciunt'
      />
      <Grid gap={8} placeItems='center'>
        {features.map((feature, index) => (
          <GridItem
            key={index}
            bg={index === 1 ? 'transparent' : 'cardBackground'}
            p={12}
            justifyContent='center'
            textAlign='center'
            pos='relative'
            border={index === 1 ? '1px solid' : 'none'}
            borderColor='cardBackground'
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
            <chakra.h3
              fontSize='xl'
              mt={6}
              letterSpacing='wide'
              color='headerText'
            >
              {feature.heading}
            </chakra.h3>
            <Text mt={4}>{feature.content}</Text>
          </GridItem>
        ))}
      </Grid>
      <Link
        display='flex'
        flexDirection='row'
        alignItems='center'
        gap={2}
        w='fit-content'
        mt={{ base: 16, lg: -6 }}
        role='group'
      >
        <Text textStyle='link' variant='upperWide' color='headerText'>
          Learn more
        </Text>
        <ChakraIcon as={BsArrowRight} h={5} w={5} color='bodyText' />
      </Link>
    </Container>
  );
};

export default FeatureCards;
