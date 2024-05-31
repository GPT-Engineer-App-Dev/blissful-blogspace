import { Box, Text, Heading, Link, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="center">
      <Heading as="h1" size="xl">About Me</Heading>
      <Text fontSize="lg">Hello! I'm a passionate writer and this is my personal blog where I share my thoughts, experiences, and ideas on various topics. Stay tuned for more updates!</Text>
      <Link href="/" color="teal.500" fontSize="lg">Back to Home</Link>
    </VStack>
  </Box>
);

export default About;