import {
  Container,
  Icon as ChakraIcon,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';
import { FaBolt } from '@react-icons/all-files/fa/FaBolt';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { FaUsers } from '@react-icons/all-files/fa/FaUsers';
import { Header } from '../../core/Header';
import FeatureCard from './FeatureCard';
import { FeatureCardProps } from './FeatureCard.types';

const features: FeatureCardProps[] = [
  {
    heading: 'Lorem',
    imgSrc:
      'https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    imgAlt: 'An RGB keyboard',
    content: 'Neque convallis a cras semper auctor neque vitae tempus quam.',
    icon: FaUsers,
  },
  {
    heading: 'Ipsum',
    imgSrc:
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1294&q=80',
    imgAlt: 'Wireframing',
    content:
      'Sit amet consectetur adipiscing elit pellentesque habitant morbi.',
    icon: FaSearch,
  },
  {
    heading: 'Et Dolor',
    imgSrc:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    imgAlt: 'Typing at a computer',
    content:
      'Viverra maecenas accumsan lacus vel facilisis volutpat est velit.',
    icon: FaBolt,
  },
];

const FeatureCards = () => {
  return (
    <Container maxW='8xl' px={{ base: 5, md: 10 }}>
      <Header
        center
        subtitle='Lorem ipsum'
        title='Quasi maiores cupiditate id minus porro voluptates a nostrum ipsum
          dolor nesciunt'
        description='Dolor nulla consequat enim culpa incididunt nulla nulla nulla. Sint sint sint non aliquip aute ut ut irure. Exercitation commodo nulla ex ipsum in. Officia consectetur esse dolor reprehenderit Lorem est adipisicing eiusmod est et. Cupidatat et proident officia incididunt incididunt eiusmod qui amet nostrud occaecat voluptate irure.'
      />
      <SimpleGrid gap={8} columns={{ base: 1, lg: 3 }} mt={16}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </SimpleGrid>
      <Link
        display='flex'
        flexDirection='row'
        alignItems='center'
        gap={2}
        w='fit-content'
        mt={12}
        role='group'
      >
        <Text textStyle='link' variant='upperWide'>
          Learn more
        </Text>
        <ChakraIcon as={BsArrowRight} h={5} w={5} color='bodyText' />
      </Link>
    </Container>
  );
};

export default FeatureCards;
