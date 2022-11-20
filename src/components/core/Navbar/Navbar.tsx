import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  MenuItem,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '/public/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position={{ base: 'sticky', lg: 'fixed' }}
      top={0}
      zIndex={50}
      width='100vw'
      px={4}
      bg='cardBackground'
      borderBottom={'2px solid'}
      borderColor='background'
      shadow='md'
      textTransform='uppercase'
      fontSize='sm'
      letterSpacing={4}
    >
      <Flex
        h={16}
        justifyContent='space-between'
        alignItems='center'
        maxW='8xl'
        marginX='auto'
      >
        <Flex alignItems='center' gap={4}>
          <Image
            src={logo}
            alt='Logo'
            style={{
              objectFit: 'contain',
              height: '2rem',
              width: 'fit-content',
            }}
          />
          <Text
            fontSize='xl'
            letterSpacing='widest'
            textTransform='uppercase'
            color='headerText !important'
          >
            Logoipsum
          </Text>
        </Flex>

        <HStack spacing={8} alignItems='center'>
          <HStack
            as='nav'
            spacing={6}
            alignItems='center'
            display={{ base: 'none', md: 'flex' }}
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </HStack>
        </HStack>
        <IconButton
          bg='transparent'
          color='headerText'
          size='lg'
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label='Open Menu'
          display={{ base: 'inherit', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          _hover={{ bg: 'transparent' }}
          _focus={{ bg: 'transparent' }}
        />
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} display={{ base: 'inherit', md: 'none' }}>
          <Stack as='nav' spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

// NavLink Component
interface NavLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = ({ name, path, onClose }: NavLinkProps) => {
  const router = useRouter();
  return (
    <Link
      href={path}
      py={2}
      lineHeight='inherit'
      color={router.pathname === path ? 'brand.500' : 'bodyText'}
      _hover={{
        color: 'brand.500',
      }}
      transition='150ms ease-in-out'
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};

// Dropdown MenuLink Component
interface MenuLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const MenuLink = ({ name, path, onClose }: MenuLinkProps) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem
        _hover={{
          color: 'blue.400',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
      >
        <Text>{name}</Text>
      </MenuItem>
    </Link>
  );
};

export default Navbar;
