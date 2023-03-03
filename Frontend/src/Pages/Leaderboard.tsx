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
      <Box w={"80%"}>
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
          p={4}
        >
          <Heading color={"white"} mt={5} mb={6} textAlign="center">
            LEADERBOARD
          </Heading>
          <Table variant="simple" gap={"100px"}>
            <Thead>
              <Tr>
                <Th color={"white"}>Rank</Th>
                <Th color={"white"}>Name</Th>
                <Th color={"white"}>Total Score</Th>
                <Th color={"white"}>Highest Score</Th>
                <Th color={"white"}>Highest Time</Th>
              </Tr>
            </Thead>
            <Tbody>
              {leaderboardData.map((item, index) => (
                <Tr key={index}>
                  <Td >
                    <Badge>{item.rank}</Badge>
                  </Td>
                  <Td color={"white"}>{item.name}</Td>
                  <Td color={"white"}>{item.highestScore}</Td>
                  <Td color={"white"}>{item.totalScore}</Td>
                  <Td color={"white"}>{item.bestTime}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Flex justify="flex-end" mt={"10px"}>
            <Text fontSize="sm" color="gray.500">
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
