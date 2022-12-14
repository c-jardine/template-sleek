import {
  Box,
  BoxProps,
  chakra,
  Flex,
  Link as ChakraLink,
} from '@chakra-ui/react';
import React from 'react';

const Button = (props: {
  variant?: 'light' | 'dark';
  href?: string;
  ariaLabel: string;
  children: string | React.ReactNode;
  style?: BoxProps;
}) => {
  return (
    <Box
      aria-label={props.ariaLabel}
      as={ChakraLink}
      href={props.href}
      bgGradient='linear(to-br, purple.400, brand.400)'
      h={12}
      style={{ padding: 1 }}
      role='group'
      {...props.style}
    >
      <Flex
        justify='center'
        bg={
          (props.variant === 'light' && 'background') ||
          (props.variant === 'dark' && 'whiteAlpha.50') ||
          'whiteAlpha.50'
        }
        py={4}
        px={4}
        h='full'
        lineHeight={1.18}
        alignItems='center'
        textTransform='uppercase'
        letterSpacing={2}
        fontSize='sm'
        _groupHover={{
          bg:
            (props.variant === 'light' && 'lightButtonHover') ||
            (props.variant === 'dark' && 'darkButtonHover') ||
            'darkButtonHover',
        }}
        transition='all 200ms ease-in-out'
      >
        <chakra.span
          color={props.variant === 'light' ? 'headerText' : 'charcoal'}
        >
          {props.children}
        </chakra.span>
      </Flex>
    </Box>
  );
};

export default Button;
