import {
  Box,
  FormControl,
  FormLabel,
  Textarea as ChakraTextarea,
  InputProps,
  TextareaProps,
} from '@chakra-ui/react';
import React from 'react';

const Textarea = (props: TextareaProps & { label: string }) => {
  const [focused, setFocused] = React.useState<boolean>(false);
  const [isEmpty, setIsEmpty] = React.useState<boolean>(true);
  return (
    <Box
      position='relative'
      border='1px solid'
      borderColor={focused ? 'brand.500' : 'subtleText'}
      py={1}
    >
      <FormControl>
        <FormLabel
          bg='cardBackground'
          color={focused ? 'brand.500' : 'bodyText'}
          position='absolute'
          top={2}
          left={2}
          zIndex={2}
          px={1}
          transform={
            focused || !isEmpty
              ? 'translateY(-1.5rem) translateX(-0.3rem) scale(0.85)'
              : 'translateY(0) translateX(0) scale(1)'
          }
        >
          {props.label}
        </FormLabel>
        <ChakraTextarea
          {...props}
          style={{ caretColor: 'headerText' }}
          color='headerText'
          rounded='none'
          border={0}
          transformOrigin='0 0'
          _focus={{ boxShadow: 'none' }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(event) => setIsEmpty(event.target.value.length === 0)}
        />
      </FormControl>
    </Box>
  );
};
export default Textarea;
