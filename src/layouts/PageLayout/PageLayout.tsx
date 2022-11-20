import { Box, Stack } from '@chakra-ui/react';
import React from 'react';

const PageLayout = (props: { children: React.ReactNode }) => {
  return (
    <Box position='relative' bg='background'>
      <Stack spacing={28} alignItems='center'>
        {props.children}
      </Stack>
    </Box>
  );
};

export default PageLayout;
