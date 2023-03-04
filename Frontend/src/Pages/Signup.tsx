import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  FormLabel,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Text,
  useColorModeValue,
  useToast,
  Image,
} from "@chakra-ui/react";
import image from "../assets/images/bg_leaderboard.jpg"
import logo from "../assets/images/TECH_MEMORY_GAME_LOGO.png"

const Signup = (): JSX.Element => {
  const [first_name, setFirstname] = React.useState<string>("");
  const [last_name, setLastname] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false)
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async () => {
    setLoading(true);
    const formData = {
      first_name,
      last_name,
      email,
      password,
    };

    try {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/register`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

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
        navigate("/login");
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
  };

  return (
    <Box bgImage={image}
    bgPosition="center"
    bgSize="cover">
      <Container maxW="5xl" p={{ base: 5, md: 10 }}>
        <Box onClick={()=> navigate("/")} bg={"white"} display="flex" justifyContent={"center"} w="30%" p={"10px"} margin={"auto"} height="150px" borderRadius={"50%"}>
        <Image src={logo} w="60%"></Image>
        </Box>
        <Stack
          spacing={4}
          maxW={{ base: "20rem", sm: "25rem" }}
          margin="0 auto"
        >
          <Stack align="center" spacing={2}>
            <Heading fontSize={{ base: "xl", sm: "3xl" }} color="white">
              Create your account
            </Heading>
            {/* <Text fontSize={{ base: 'sm', sm: 'md' }}>Send a magic link with your email below</Text> */}
          </Stack>
          <Box pos="relative">
            <Box
              pos="absolute"
              top="-7px"
              right="-7px"
              bottom="-7px"
              left="-7px"
              rounded="lg"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              transform="rotate(-2deg)"
            ></Box>
            <VStack
              as="form"
              pos="relative"
              spacing={8}
              p={6}
              bg={useColorModeValue("white", "gray.800")}
              rounded="lg"
              boxShadow="lg"
            >
              <FormControl id="firstname" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="firstname"
                  placeholder="Your first name"
                  rounded="md"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </FormControl>
              <FormControl id="lastname" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="lastname"
                  placeholder="Your last name"
                  rounded="md"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Your email"
                  rounded="md"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Your password"
                  rounded="md"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              {loading ? <>
                <Button
                  isLoading
                  loadingText="Submitting"
                  color="white"
                  _hover={{ bg: "black" }}
                  rounded="md"
                  w="100%"
                  bgGradient="linear(to-l, #7928CA,#FF0080)"
                  onClick={handleSubmit}
                >
                  Signup
                </Button>
              </> : <>
                <Button
                  color="white"
                  _hover={{ bg: "black" }}
                  rounded="md"
                  w="100%"
                  bgGradient="linear(to-l, #7928CA,#FF0080)"
                  onClick={handleSubmit}
                >
                  Signup
                </Button>
              </>}
              <Link to="/login">
                  <Heading size={"sm"} _hover={{ color: "blue", textDecoration: "" }} >Already have an Account? Login</Heading>
                </Link>
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Signup;
