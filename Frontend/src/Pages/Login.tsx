import * as React from 'react';
import { Link } from 'react-router-dom';
import {Container,Box,FormLabel, FormControl, Input,Stack,Button,Heading,VStack, Text,  useColorModeValue
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Box  marginTop="60px">
    <Container maxW="5xl" p={{ base: 5, md: 10 }} >
      <Stack spacing={4} maxW={{ base: '20rem', sm: '25rem' }} margin="0 auto">
        <Stack align="center" spacing={2}>
          <Heading fontSize={{ base: 'xl', sm: '3xl' }} color="white">Sign in to your account</Heading>
          {/* <Text fontSize={{ base: 'sm', sm: 'md' }}>Send a magic link with your email below</Text> */}
        </Stack>
        <Box pos="relative">
          <Box pos="absolute" top="-7px" right="-7px" bottom="-7px" left="-7px" rounded="lg" bgGradient="linear(to-l, #7928CA,#FF0080)" transform="rotate(-2deg)" ></Box>
          <VStack as="form" pos="relative" spacing={8} p={6} bg={useColorModeValue('white', 'gray.800')} rounded="lg" boxShadow="lg" >
            <FormControl id="email" isRequired>
              <FormLabel >Email address</FormLabel>
              <Input type="email" placeholder="Your email" rounded="md" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Your password" rounded="md" required />
            </FormControl>
            <Button  color="white" _hover={{ bg: 'black' }} rounded="md" w="100%" bgGradient="linear(to-l, #7928CA,#FF0080)" > Play now </Button>
            <Link to="/">
            <Heading size={"sm"} _hover={{color:"blue", textDecoration:""}}>Create new account</Heading>
            </Link>
          </VStack>
        </Box>
      </Stack>
    </Container>
    </Box>
  );
};

export default Login;