import { Box, chakra, Flex, Link } from '@chakra-ui/react';

const Button = (props: { variant?: 'light' | 'dark'; children: string }) => {
  return (
    <Box
      bgGradient='linear(to-br, purple.400, brand.400)'
      h={12}
      style={{ padding: 1 }}
      role='group'
    >
      <Flex
        justify='center'
        bg={
          (props.variant === 'light' && 'white') ||
          (props.variant === 'dark' && 'whiteAlpha.50') ||
          'whiteAlpha.50'
        }
        py={4}
        px={4}
        h='full'
        lineHeight={1.18}
        alignItems='center'
        as={Link}
        textTransform='uppercase'
        letterSpacing={2}
        fontSize='sm'
        _groupHover={{
          bg:
            (props.variant === 'light' && 'whiteAlpha.800') ||
            (props.variant === 'dark' && 'whiteAlpha.400') ||
            'whiteAlpha.400',
        }}
        transition='all 200ms ease-in-out'
      >
        <chakra.span>{props.children}</chakra.span>
      </Flex>
    </Box>
  );
};

export default Button;