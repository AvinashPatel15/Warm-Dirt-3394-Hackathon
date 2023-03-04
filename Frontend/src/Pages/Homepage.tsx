import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
import image from "../assets/images/TECH_MEMORY_GAME_LOGO.png";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Navbar></Navbar>
      <Box>
        <Flex
          direction={["column", "column", "row"]}
          justify="center"
          align="center"
          bgGradient="linear(to-r, #7928CA, #FF0080)"
          height={["87vh", "87vh", "87vh"]}
          px={[4, 8]}
        >
          <Box width={["100%", "100%", "50%"]}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Heading
                as="h1"
                size={["3xl", "4xl"]}
                color="white"
                mb={4}
                textAlign={["center", "center", "left"]}
              >
                Welcome to Tech Memory Game
              </Heading>
              <Text
                fontSize={["md", "xl"]}
                color="white"
                textAlign={["center", "center", "left"]}
              >
                Where your gaming dreams come true!
              </Text>
              <Button
                colorScheme="purple"
                size="lg"
                mt={8}
                alignSelf={["center", "center", "flex-start"]}
                onClick={()=> navigate("/game")}
              >
                Play Game
              </Button>
            </motion.div>
          </Box>
          <Box
            display={["none", "none", "block"]}
            width={["100%", "100%", "50%"]}
          >
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: "0" }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ position: "absolute", top: 200, right: 0 }}
            >
              <Image src={image} width={["50%", "50%", "100%"]} />
            </motion.div>
          </Box>
        </Flex>
      </Box>
      <Footer/>
    </Box>
  );
};

export default HomePage;
