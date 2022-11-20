import { Box, SimpleGrid, Stack } from '@chakra-ui/react';
import { PriceCard, PriceProps } from '../../cards/PriceCard';

const PriceCards = ({ prices }: { prices: PriceProps[] }) => {
  return (
    <Box maxW='8xl' mx='auto'>
      <Stack spacing={28} w='full' py={16} p={{ base: 4, lg: 8, xl: 16 }}>
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={4}>
          {prices.map((price) => (
            <PriceCard key={price.id} {...price} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default PriceCards;
