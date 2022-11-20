import { GridItem, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaLocationArrow } from '@react-icons/all-files/fa/FaLocationArrow';
import { FaPhone } from '@react-icons/all-files/fa/FaPhone';

const ContactColumn = () => {
  return (
    <Stack>
      <Text color='white' fontSize='2xl' fontWeight='bold'>
        Contact
      </Text>
      <Stack spacing={12}>
        <SimpleGrid templateColumns='auto 1fr' columnGap={4} rowGap={0}>
          <GridItem w='max-content' mt={-1}>
            <Icon as={FaLocationArrow} w={6} h={6} color='headerText' />
          </GridItem>
          <GridItem>
            <Text color='white' lineHeight={1} fontWeight='semibold'>
              Location
            </Text>
          </GridItem>
          <GridItem colStart={2}>
            <Text color='whiteAlpha.600' letterSpacing={1} lineHeight={1}>
              123 Main St.
            </Text>
          </GridItem>
          <GridItem mt={1} colStart={2}>
            <Text color='whiteAlpha.600' letterSpacing={1} lineHeight={1}>
              Toledo, OH 43604
            </Text>
          </GridItem>
        </SimpleGrid>

        <SimpleGrid templateColumns='auto 1fr' columnGap={4} rowGap={0}>
          <GridItem w='max-content' mt={-1}>
            <Icon as={FaEnvelope} w={6} h={6} color='headerText' />
          </GridItem>
          <GridItem>
            <Text color='white' lineHeight={1} fontWeight='semibold'>
              Email
            </Text>
          </GridItem>
          <GridItem colStart={2}>
            <Text color='whiteAlpha.600' letterSpacing={1} lineHeight={1}>
              lorem@ipsum.com
            </Text>
          </GridItem>
        </SimpleGrid>

        <SimpleGrid templateColumns='auto 1fr' columnGap={4} rowGap={0}>
          <GridItem w='max-content' mt={-1}>
            <Icon as={FaPhone} w={6} h={6} color='headerText' />
          </GridItem>
          <GridItem>
            <Text color='white' lineHeight={1} fontWeight='semibold'>
              Phone
            </Text>
          </GridItem>
          <GridItem colStart={2}>
            <Text color='whiteAlpha.600' letterSpacing={1} lineHeight={1}>
              (419) 555-5555
            </Text>
          </GridItem>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default ContactColumn;
