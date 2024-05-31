import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Link } from "@chakra-ui/react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle post submission
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Image:", image);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="content">
          <FormLabel>Content</FormLabel>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </FormControl>
        <FormControl id="image">
          <FormLabel>Image</FormLabel>
          <Input type="file" onChange={handleImageChange} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleSubmit}>Add Post</Button>
        <Link href="/" color="teal.500" fontSize="lg">Back to Home</Link>
      </VStack>
    </Box>
  );
};

export default AddPost;