import { Box, Img, Text } from '@chakra-ui/react';
import React from 'react';

const Tab2 = () => {
  return (
    <Box
      id="tab2"
      minH='100vh'
      bg='red.200'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Img w="20%" borderRadius={10} src='https://media.giphy.com/media/ftqLysT45BJMagKFuk/giphy.gif'></Img>

      <Text color='black' fontSize='4xl'>No, Dont Click on the Tabs!!!</Text>
    </Box>
  );
};

export default Tab2;
