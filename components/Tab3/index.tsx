import { Box, Img, Text } from '@chakra-ui/react';
import React from 'react';

const tab3 = () => {
  return (
    <Box
      id="tab3"
      minH='100vh'
      bg='orange.500'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Img w="20%" borderRadius={10} src='https://media.giphy.com/media/w8eGPgmnM3XnjgZwFw/giphy.gif'></Img>
      <Text color='black' fontSize='4xl'>You Clicked on the Tabs. </Text>
    </Box>
  );
};

export default tab3;
