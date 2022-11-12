import {
  Box,
  chakra,
  Container,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import { RiFlashlightFill } from '@react-icons/all-files/ri/RiFlashlightFill';
import { ReactNode } from 'react';
import BrandColumn from './BrandColumn';
import ContactColumn from './ContactColumn';
import FeatureColumn from './FeatureColumn';

const Footer = () => {
  return (
    <Box w='100vw' bg='chalkboard' color='whiteAlpha.600'>
      <Stack
        maxW='6xl'
        mx='auto'
        py={16}
        spacing={16}
        justify={'center'}
        align={'center'}
      >
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={16} w='full'>
          <ContactColumn />
          <FeatureColumn />
          <BrandColumn />
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Footer;
