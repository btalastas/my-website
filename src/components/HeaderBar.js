import { Box } from "@chakra-ui/react";
import { Flex, Spacer, Heading, Badge, Avatar, Text } from "@chakra-ui/react";
export default function HeaderBar() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="1"
      padding="5"
      bgColor="twitter.500"
    >
      <Box p="2">
        <Box display="grid" position="absolute" top="0">
          <Heading size="md">Btal Domain</Heading>
          <Heading size="md"> More Stuff Here</Heading>
        </Box>
        <Box display="grid" position="absolute" bottom="0">
          <Text>link 1</Text>
          <Text>link 2</Text>
          <Text>link 2</Text>
        </Box>
      </Box>
      <Spacer />

      <Box p="2">
        <Heading size="md"> Extra stuff here</Heading>
      </Box>
      <Spacer />

      <Avatar src="/profile_pic.png" size="2xl" />
      <Box ml="3">
        <Text fontWeight="bold" outline={25}>
          Bjorn Talastas
          <Badge ml="1" colorScheme="green">
            Student
          </Badge>
        </Text>
        <Box
          as="Text"
          fontSize="sm"
          borderRadius="md"
          bg="white"
          color="black"
          px={1}
          h={10}
        >
          George Mason 2024
        </Box>
      </Box>
    </Flex>
  );
}
