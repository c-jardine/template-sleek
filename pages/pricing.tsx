import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { Prices } from '../lib/prices';
import { Header } from '../src/components/core/Header';
import { Banner } from '../src/components/ctas/Banner';
import { PriceCards } from '../src/components/sections/PriceCards';
import { PageLayout } from '../src/layouts/PageLayout';

const Pricing: NextPage = () => {
  return (
    <PageLayout>
      <Box position='sticky' top={32} zIndex={0} px={{ base: 4, lg: 0 }}>
        <Parallax speed={20} opacity={[3, 0]}>
          <Box my={16}>
            <Header
              center
              title='Sit consequat occaecat adipisicing nulla'
              subtitle='Pricing'
              description='Amet nulla ea mollit sunt labore consectetur laboris minim id duis cillum. Aute consectetur commodo eu qui Lorem. Ad enim aute commodo excepteur commodo eiusmod non ipsum pariatur consequat.'
            />
          </Box>
        </Parallax>
      </Box>
      <Box
        py={16}
        position='relative'
        zIndex={1}
        w='100vw'
        style={{ WebkitTransform: 'translate3d(0,0,0)' }}
        bg='cardBackground'
      >
        <PriceCards prices={Prices} />
      </Box>
      <Banner />
      <Box h={0} />
    </PageLayout>
  );
};

export default Pricing;
