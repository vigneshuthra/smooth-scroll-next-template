import { Box, Divider, Flex, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-scroll';

import React from 'react';
import { HamburgerIcon } from "@chakra-ui/icons";


const SiteHeader = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const clickToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Box h="80px" position="fixed" top={0} right={0} left={0} bg="white" zIndex={1}>
      <Flex
        w="100%"
        h="100%"
        justify='space-between'
        alignItems="center"
        pr={{ base: 4, md: 10 }}
        pl={{ base: 4, md: 10 }}
        color="black"
        bgColor="lightsteelblue	"
        >
        <Flex align="center" mr={2}>
          <Link activeClass="active" to="tab1" spy={true} smooth={true} duration={1000}>
            <Text as={'a'} cursor="pointer" _hover={{ color: 'teal' }}>
              Logo
            </Text>
          </Link>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={clickToggle}>
          <HamburgerIcon />
        </Box>

        <Box>
          <Stack
            spacing={12}
            direction={{ base: "column", md: "row" }}
            display={{ base: isOpen ? "block" : "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >

            <Link activeClass="active" to="tab1" spy={true} smooth={true} duration={1000}>
              <Text as={'a'} cursor="pointer" _hover={{ color: 'teal' }}>
                Tab 1
              </Text>
            </Link>

            <Link activeClass="active" to="tab2" spy={true} smooth={true} duration={1000}>
              <Text as={'a'} cursor="pointer" _hover={{ color: 'teal' }}>
                Tab 2
              </Text>
            </Link>

            <Link activeClass="active" to="tab3" spy={true} smooth={true} duration={1000}>
              <Text as={'a'} cursor="pointer" _hover={{ color: 'teal' }}>
                Tab 3
              </Text>
            </Link>
          </Stack>
        </Box>

      </Flex>
      <Divider borderColor="black" />

    </Box>
  );
};

export default SiteHeader;
