import { chakra, Flex, Stack, Text, VisuallyHidden } from '@chakra-ui/react';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/logo.png';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg='socialBackground'
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 200ms ease'}
      _hover={{
        bg: 'brand.500',
      }}
      color='white'
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const BrandColumn = () => {
  return (
    <Stack>
      <Flex
        flexDirection='column'
        alignItems={{ base: 'center', lg: 'flex-start' }}
        gap={8}
      >
        <Image
          src={logo}
          alt='Logo'
          style={{
            objectFit: 'contain',
            height: '2rem',
            width: 'fit-content',
          }}
        />

        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter size={24} />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube size={24} />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram size={24} />
          </SocialButton>
        </Stack>
        <Text color='whiteAlpha.600' fontSize='sm' w='full'>
          Developed by Keplux Development
        </Text>
      </Flex>
    </Stack>
  );
};

export default BrandColumn;
