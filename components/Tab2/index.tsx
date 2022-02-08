import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Tab2 = () => {
  return (
    <Box
      id="tab2"
      minH='100vh'
      bg='red.100'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Text color='black' fontSize='4xl'>Cool content goes here</Text>
    </Box>
  );
};

export default Tab2;
