import { Box, Image } from '@chakra-ui/react';
import { ServiceProps } from '../../../../lib/services';
import { Header } from '../../core/Header';
import { SplitPane } from '../../core/SplitPane';
import { Parallax } from 'react-scroll-parallax';

const ServiceCard = (props: ServiceProps) => {
  return (
    <SplitPane>
      <SplitPane.LeftPane flip={props.flip}>
        <Parallax opacity={[-1, 5]}>
          <Image
            src={props.imgSrc}
            alt={props.imgAlt}
            filter='saturate(50%)'
            w='full'
          />
        </Parallax>
      </SplitPane.LeftPane>
      <SplitPane.RightPane flip={props.flip}>
        <Parallax opacity={[-1, 5]}>
          <Box p={{ base: 4, lg: 8, xl: 16 }}>
            <Header
              title={props.content.title}
              subtitle={props.content.subtitle}
              description={props.content.description}
            />
          </Box>
        </Parallax>
      </SplitPane.RightPane>
    </SplitPane>
  );
};

export default ServiceCard;
