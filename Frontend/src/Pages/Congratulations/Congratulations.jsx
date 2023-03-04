import { Heading, Image, Text, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Congratulations = () => {
  const [time, setTime] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => setTime((prev) => prev - 1), 1000);
    setTimeout(() => navigate("/leaderboard"), 3000);
  }, []);
  return (
    <>
      <Box align="center">
        <Image
          width={{ base: "300px", md: "600px", lg: "700px" }}
          height={"auto"}
          src="https://cdn.dribbble.com/users/614270/screenshots/14575431/media/4907a0869e9ed2ac4e2d1c2beaf9f012.gif"
        ></Image>
        <Heading>Congratulations!!</Heading>
        <Text>Redirecting you to Leaderboard in {time} seconds</Text>
      </Box>
    </>
  );
};

export default Congratulations;
