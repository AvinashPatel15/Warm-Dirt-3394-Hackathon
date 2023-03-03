import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container, Box, FormLabel, FormControl, Input, Stack, Button, Heading, VStack, Text, useColorModeValue, useToast,
} from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const toast = useToast()
  const navigate = useNavigate()
  const handleSubmit = async () => {
    const formData = {
      email, password
    }
    setLoading(true);
    try {
      let res = await fetch(
        "https://new-wave-fashion-server.cyclic.app/users/login",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

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


      let resData = await res.json();
      setLoading(false);
      if (res.status >= 400) {
        toast({
          position: "top",
          description: resData.message,
          status: "error",
          duration: 2000,
          isClosable: false,
        });
      } else {
        toast({
          position: "top",
          description: resData.message,
          status: "success",
          duration: 2000,
          isClosable: false,
        });
        localStorage.setItem(
          "TeachMemoryToken",
          JSON.stringify({
            token: resData.token,
            firstName: resData.first_name,
            lastName: resData.last_name,
            email: resData.email,
            admin: resData.isAdmin,
          })
        );
        navigate("/game");
      }
    } catch (error: any) {
      setLoading(false);
      toast({
        position: "top",
        description: error.message,
        status: "error",
        duration: 2000,
        isClosable: false,
      });
    }
    return (
      <Box bg={"black"}>
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
                  <Input type="email" placeholder="Your email" rounded="md" onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Your password" rounded="md" onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                {
                  loading ? <><Button color="white" _hover={{ bg: 'black' }} rounded="md" w="100%" bgGradient="linear(to-l, #7928CA,#FF0080)" onClick={handleSubmit} > Play now </Button></> : <><Button color="white" _hover={{ bg: 'black' }} rounded="md" w="100%" bgGradient="linear(to-l, #7928CA,#FF0080)" onClick={handleSubmit} > Play now </Button></>
                }
                <Button color="white" _hover={{ bg: 'black' }} rounded="md" w="100%" bgGradient="linear(to-l, #7928CA,#FF0080)" onClick={handleSubmit} > Play now </Button>
                <Link to="/">
                  <Heading size={"sm"} _hover={{ color: "blue", textDecoration: "" }} >Create new account</Heading>
                </Link>
              </VStack>
            </Box>
          </Stack>
        </Container>
      </Box>
    );
  };
}
  export default Login;