import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Tab1 = () => {
  return (
    <Box
      id="tab1"
      minH='100vh'
      bg='teal.100'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Text color='black' fontSize='4xl'>Content goes here, But dont click on the Tabs!!</Text>
    </Box>
  );
};

export default Tab1;
