import { Box, Stack } from '@chakra-ui/react';
import React from 'react';

const PageLayout = (props: { children: React.ReactNode }) => {
  return (
    <Box position='relative' bg='background' mt={{ base: -20, lg: 0 }}>
      <Stack py={28} spacing={28} alignItems='center'>
        {props.children}
      </Stack>
    </Box>
  );
};

export default PageLayout;
