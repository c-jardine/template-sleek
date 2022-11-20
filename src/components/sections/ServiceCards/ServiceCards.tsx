import { Stack } from '@chakra-ui/react';
import { Parallax } from 'react-scroll-parallax';
import { Services } from '../../../../lib/services';
import { ServiceCard } from '../../cards/ServiceCard';

const ServiceCards = () => {
  return (
    <Stack spacing={28} bg='cardBackground' w='full' py={28}>
      {Services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </Stack>
  );
};

export default ServiceCards;
