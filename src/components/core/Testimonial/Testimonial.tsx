import {
  Avatar,
  Box,
  Circle,
  Container,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { FaQuoteRight } from '@react-icons/all-files/fa/FaQuoteRight';
import { TestimonialProps } from './Testimonial.types';

const Testimonial = (props: TestimonialProps) => {
  return (
    <Box px={8}>
      <Container
        style={{ padding: 1 }}
        // maxW='5xl'
        // p={{ base: 10, md: 14 }}
        bgGradient='linear(to-br, purple.400, brand.400)'
      >
        <VStack spacing={3} p={4} bg='white' pos='relative'>
          <Icon
            as={FaQuoteRight}
            w={8}
            h={8}
            color='brand.500'
            position='absolute'
            top={-5}
            left={-4}
          />
          <Stack direction='column' spacing={5} padding={4}>
            <Text variant='details'>{props.content}</Text>
            <Text align='right' mr='4rem !important' variant='feature'>
              {props.name}
            </Text>
          </Stack>
          <Circle
            bgGradient='linear(to-br, purple.400, brand.400)'
            style={{ padding: 1 }}
            pos='absolute'
            right={-4}
            bottom={-4}
          >
            <Avatar name='avatar' src={props.image} size='lg' />
          </Circle>
        </VStack>
      </Container>
    </Box>
  );
};

export default Testimonial;
