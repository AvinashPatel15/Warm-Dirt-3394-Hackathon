import * as React from 'react';
import { Link } from 'react-router-dom';
import {Container,Box,FormLabel, FormControl, Input,Stack,Button,Heading,VStack, Text,  useColorModeValue
} from '@chakra-ui/react';

const Signup = () => {
  return (
    <Box marginTop="60px" >
    <Container maxW="5xl" p={{ base: 5, md: 10 }} >
      <Stack spacing={4} maxW={{ base: '20rem', sm: '25rem' }} margin="0 auto">
        <Stack align="center" spacing={2}>
          <Heading fontSize={{ base: 'xl', sm: '3xl' }} color="white">Create your account</Heading>
        </Stack>
        <Box pos="relative">
          <Box pos="absolute" top="-7px" right="-7px" bottom="-7px" left="-7px" rounded="lg" bgGradient="linear(to-l, #7928CA,#FF0080)" transform="rotate(-2deg)" ></Box>
          <VStack as="form" pos="relative" spacing={8} p={6} bg={useColorModeValue('white', 'gray.800')} rounded="lg" boxShadow="lg" >
            <FormControl id="firstname" isRequired>
              <FormLabel >First Name</FormLabel>
              <Input type="firstname" placeholder="Your first name" rounded="md" />
            </FormControl>
            <FormControl id="lastname" isRequired>
              <FormLabel >Last Name</FormLabel>
              <Input type="lastname" placeholder="Your last name" rounded="md" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel >Email address</FormLabel>
              <Input type="email" placeholder="Your email" rounded="md" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Your password" rounded="md" required />
            </FormControl>
            <Button  color="white" _hover={{ bg: 'black' }} rounded="md" w="100%" bgGradient="linear(to-l, #7928CA,#FF0080)" > Signup </Button>
          </VStack>
        </Box>
      </Stack>
    </Container>
    </Box>
  );
};

export default Signup;