import { Box, Flex, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { BlogCards } from '../src/components/cards/BlogCards';
import { Card } from '../src/components/core/Card';
import { Header } from '../src/components/core/Header';
import { Testimonial } from '../src/components/core/Testimonial';
import { CtaLeftAlign } from '../src/components/ctas';
import { Banner } from '../src/components/ctas/Banner';
import { FeatureCards } from '../src/components/features';
import { FullImageStats } from '../src/components/stats/FullImageStats';
import { Testimonials } from '../src/components/testimonials';

export default function Home() {
  return (
    <>
      <CtaLeftAlign />
      <FeatureCards />
      <FullImageStats />
      <Testimonials />
      <BlogCards />
      <Flex w='100vw' justifyContent='flex-end'>
        <Box
          w='full'
          maxW='66%'
          bgGradient='linear(to-r, brand.400, purple.700)'
          style={{ height: 1 }}
        />
      </Flex>
      <Banner />
    </>
  );
}
