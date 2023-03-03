import { Box, Text, Badge, Flex, Table, Thead, Tr, Th, Tbody, Td, Heading } from "@chakra-ui/react";
import * as Motion from "framer-motion";
import image from "../assets/images/bg_leaderboard.jpg"

type Player = {
    rank: number;
    name: string;
    totalScore: number;
    highestScore: number;
    bestTime:number;
  };

const leaderboardData: Player[] = [
  {
    rank: 1,
    name: "John Doe",
    totalScore: 1200,
    highestScore: 500,
    bestTime:23
  },
  {
    rank: 2,
    name: "Jane Smith",
    totalScore: 1200,
    highestScore: 500,
    bestTime:23
  },
  {
    rank: 3,
    name: "Bob Johnson",
    totalScore: 1200,
    highestScore: 500,
    bestTime:23
  },
  {
    rank: 4,
    name: "Alice Williams",
    totalScore: 1200,
    highestScore: 500,
    bestTime:23
  },
  {
    rank: 5,
    name: "Charlie Brown",
    totalScore: 1200,
    highestScore: 500,
    bestTime:23
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Leaderboard = () => {
    var d = new Date(Date.now());
    
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
        <Table variant="simple" gap={{ base: "20px", md: "100px" }}>
          <Thead>
            <Tr>
              <Th color={"white"}>Rank</Th>
              <Th color={"white"}>Name</Th>
              <Th color={"white"} >Total Score</Th>
              <Th color={"white"} display={{ base: "none", sm: "table-cell" }}>Average Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            {leaderboardData.map((item, index) => (
              <Tr key={index}>
                <Td>
                  <Badge>{index+1}</Badge>
                </Td>
                <Td color={"white"}>{item.name}</Td>
                <Td color={"white"}>{item.totalScore}</Td>
                
                <Td color={"white"} display={{ base: "none", sm: "table-cell" }}>{item.bestTime}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
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
