import { Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import StopwatchModal from "./StopwatchModal";

interface Props {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  elapsedTime: number;
  setElapsedTime: React.Dispatch<React.SetStateAction<number>>;
}

const StopWatch: React.FC<Props> = ({
  isRunning,
  setIsRunning,
  elapsedTime,
  setElapsedTime,
}) => {
  const [startTime, setStartTime] = useState<number>(0);

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

  const handleStart = () => {
    setStartTime(Date.now() - elapsedTime);
    setIsRunning(true);
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
      <StopwatchModal StartGame={handleStart} />
    </>
  );
};

export default StopWatch;
