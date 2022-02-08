import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const tab3 = () => {
  return (
    <Box
      id="tab3"
      minH='100vh'
      bg='grey'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Text color='black' fontSize='4xl'>Cool content goes here</Text>
    </Box>
  );
};

export default tab3;
