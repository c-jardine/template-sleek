import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../core/Header';
import { Testimonial, TestimonialProps } from '../core/Testimonial';

const testimonials: TestimonialProps[] = [
  {
    name: 'John Priya',
    image: 'https://i.pravatar.cc/300',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae magni sunt accusamus inventore aliquid voluptatem numquam exercitationem nemo at, quod perferendis.',
  },
  {
    name: 'Verona Blair',
    image: 'https://i.pravatar.cc/301',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, in totam. Suscipit adipisci eius, quam nostrum optio necessitatibus animi hic minima expedita, rem repudiandae.',
  },
  {
    name: 'Mia Wong',
    image: 'https://i.pravatar.cc/302',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt aliquid porro dicta culpa eum sit, earum provident molestiae vel nulla quia expedita ut obcaecati dolore.',
  },
];

const Testimonials = () => {
  return (
    <Box px={{ base: 5, md: 10 }}>
      <Header
        center
        subtitle='Excepturi'
        title='Cupidatat nisi velit qui nisi anim mollit amet'
        description='Pariatur proident proident excepteur nisi adipisicing amet. Tempor tempor cillum aliquip velit ullamco ea. Anim quis nisi Lorem dolore cupidatat duis aliquip aute exercitation nostrud ullamco amet pariatur excepteur.'
      />
      <SimpleGrid
        mt={16}
        columns={{ base: 1, lg: 3 }}
        spacing={{ base: 16, lg: 0 }}
        maxW='8xl'
        gap={12}
      >
        {testimonials.map((t) => (
          <Testimonial key={t.name} {...t} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Testimonials;
