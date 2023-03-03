import { Button, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const StopWatch: React.FC = () => {
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
      }, 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

//   const handleStart = () => {
    
//   };
   useEffect(() => {
    setStartTime(Date.now() - elapsedTime);
    setIsRunning(true);
   }, [])
   

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setStartTime(0);
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <Text fontSize="4xl" mb={4}>
        {formatTime(elapsedTime)}
      </Text>
      {/* <Button colorScheme="green" onClick={handleStart} disabled={isRunning}>
        Start
      </Button> */}
      <Button
        colorScheme="red"
        ml={4}
        onClick={handleStop}
        disabled={!isRunning}
      >
        Stop
      </Button>
      <Button ml={4} onClick={handleReset} disabled={elapsedTime === 0}>
        Reset
      </Button>
    </>
  );
};

export default StopWatch;
