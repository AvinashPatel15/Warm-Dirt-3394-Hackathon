import { Box, Text, Badge, Flex, Table, Thead, Tr, Th, Tbody, Td, Heading } from "@chakra-ui/react";
import * as Motion from "framer-motion";
import { useEffect, useState } from "react";
import image from "../assets/images/bg_leaderboard.jpg"

interface Player {
  userID: { first_name: string };
  win: number;
  prevTime: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


const Leaderboard = () => {
  const token: string = localStorage.getItem("TechToken") as string;
  const timer: string = localStorage.getItem("GameTime") as string;
  const [players, setPlayers] = useState<Player[]>([]);
  
  const fetchPlayers = async()=> {
    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/leaderboard?sort=high`, {
        headers:{
          authorization:token
        }
      })
      let result = await res.json();
      setPlayers(result);
      console.log(result)
    } catch (error:any) {
      console.log({message:error.message})
    }
  }
  var d = new Date(Date.now());
  
  useEffect(() => {
    fetchPlayers()
  }, [token,timer])
  return (
    <Box
    bgImage={image}
    bgPosition="center"
  bgSize="cover"
  minH="100vh"
  display="flex"
  alignItems="center"
  justifyContent="center"
>
  <Box w={{ base: "90%", md: "80%", xl: "80%" }} mx="auto">
    <Motion.motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Box
        bg="blackAlpha.800"
        shadow="lg"
        rounded="lg"
        p={{ base: 2, md: 4 }}
      >
        <Heading color={"white"} mt={5} mb={6} textAlign="center" fontSize={{ base: "2xl", md: "4xl" }}>
          LEADERBOARD
        </Heading>
        {
          players.length < 1 ? <Box color={"red.400"} display={"flex"} justifyContent="center">
            <Heading>No Data to Show</Heading>
          </Box>:<Table variant="simple" gap={{ base: "20px", md: "100px" }}>
          <Thead>
            <Tr>
              <Th color={"white"}>Rank</Th>
              <Th color={"white"}>Name</Th>
              <Th color={"white"} >Total Games Won</Th>
              <Th color={"white"} display={{ base: "none", sm: "table-cell" }}>Previous Win Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            {players.map((item, index) => (
              <Tr key={index}>
                <Td>
                  <Badge>{index+1}</Badge>
                </Td>
                <Td color={"white"}>{item.userID?.first_name}</Td>
                <Td color={"white"}>{item.win}</Td>
                
                <Td color={"white"} display={{ base: "none", sm: "table-cell" }}>{item.prevTime}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        }
        <Flex justify="flex-end" mt={{ base: 4, md: "10px" }}>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.500">
            Updated at {d.toString()}
          </Text>
        </Flex>
      </Box>
    </Motion.motion.div>
  </Box>
</Box>

  );
};

export default Leaderboard;
