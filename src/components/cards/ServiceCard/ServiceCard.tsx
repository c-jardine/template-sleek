import { Image } from '@chakra-ui/react';
import { ServiceProps } from '../../../../lib/services';
import { Header } from '../../core/Header';
import { SplitPane } from '../../core/SplitPane';

const ServiceCard = (props: ServiceProps) => {
  return (
    <SplitPane>
      <SplitPane.LeftPane flip={props.flip}>
        <Image src={props.imgSrc} alt={props.imgAlt} filter='saturate(50%)' />
      </SplitPane.LeftPane>
      <SplitPane.RightPane flip={props.flip}>
        <Header
          title={props.content.title}
          subtitle={props.content.subtitle}
          description={props.content.description}
        />
      </SplitPane.RightPane>
    </SplitPane>
  );
};

export default ServiceCard;
