import {
  Box,
  chakra,
  Flex,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';
import { Button } from '../../core/Button';
import { PriceProps } from '../../../../lib/prices/Price.types';

const PriceCard = (props: PriceProps) => {
  return (
    <Flex
      transform={props.id === 1 && { lg: 'scale(1.1)' }}
      style={{ padding: props.id === 1 && '2px' }}
      bgGradient={props.id === 1 && 'linear(to-br, purple.500, brand.500)'}
    >
      {props.id === 1 && (
        <Flex position='absolute' top={-4} justifyContent='center' w='full'>
          <Flex bg='green.500' h={8} px={4} alignItems='center' shadow='lg'>
            <Text
              color='white !important'
              textTransform='uppercase'
              letterSpacing='wider'
              fontSize='sm'
            >
              Recommended
            </Text>
          </Flex>
        </Flex>
      )}
      <Stack
        w='full'
        shadow={props.id === 1 ? 'dark-lg' : 'md'}
        bg={props.id === 1 ? 'background' : 'cardBackground'}
        border={props.id !== 1 && { lg: '1px solid' }}
        borderColor='subtleText'
        justifyContent='stretch'
        alignItems='center'
      >
        <Box bg='background' p={8} w='full'>
          <chakra.h2
            fontSize='xl'
            fontWeight='bold'
            textTransform='uppercase'
            textAlign='center'
            color='brand.500'
          >
            {props.title}
          </chakra.h2>
          <Text
            py={4}
            fontSize='3xl'
            lineHeight='short'
            fontWeight='bold'
            color='headerText'
            textAlign='center'
          >
            {props.price}
          </Text>
          <Text
            color='subtleText !important'
            textAlign='center'
            lineHeight='short'
            fontSize='sm'
          >
            {props.description}
          </Text>
        </Box>

        <List w='full' flexGrow={1} spacing={4} p={8}>
          {props.items.map((item) => (
            <ListItem
              key={item.id}
              as={SimpleGrid}
              columns={2}
              gridTemplateColumns='auto 1fr'
              color='subtleText'
            >
              <ListIcon as={FaCheck} mt={1} color='green.500' />
              <chakra.span>{item.value}</chakra.span>
            </ListItem>
          ))}
        </List>

        <Button
          ariaLabel={props.ariaLabel}
          href={props.href}
          variant={props.id === 1 ? 'dark' : 'light'}
        >
          {props.buttonText as string}
        </Button>

        <Box h={8} />
      </Stack>
    </Flex>
  );
};

export default PriceCard;
