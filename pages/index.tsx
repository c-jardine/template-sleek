import { Box, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import { FeatureCards } from '../src/components/cards/FeatureCard';
import { StepCards } from '../src/components/cards/StepCard';
import { CtaLeftAlign } from '../src/components/ctas';
import { Banner } from '../src/components/ctas/Banner';
import { SplitPortfolio } from '../src/components/sections/SplitPortfolio';
import { FullImageStats } from '../src/components/stats/FullImageStats';
import { Testimonials } from '../src/components/testimonials';
import { PageLayout } from '../src/layouts/PageLayout';

const HomePage: NextPage = () => {
  return (
    <>
      <PageLayout>
        <CtaLeftAlign />
        <FeatureCards />
        <SplitPortfolio />
        <FullImageStats />
        <SplitPortfolio flip />
        <StepCards />
        <Flex w='100vw' justifyContent='flex-end'>
          <Box
            w='full'
            maxW='66%'
            bgGradient='linear(to-r, brand.400, purple.700)'
            style={{ height: 1 }}
          />
        </Flex>
        <Testimonials />
        <Banner />
        <Box h={0} />
      </PageLayout>
    </>
  );
};

export default HomePage;
