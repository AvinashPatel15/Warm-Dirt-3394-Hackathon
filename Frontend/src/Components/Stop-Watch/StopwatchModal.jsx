import React, { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router";

const StopwatchModal = ({ StartGame }) => {
  const OverlayOne = () => (
    <ModalOverlay
      height="100vh"
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const navigate = useNavigate();

  const handleStartGame = () => {
    StartGame();
    onClose();
  };

  useEffect(() => {
    setOverlay(<OverlayOne />);
    onOpen();
  }, []);

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Tech Memory Game</ModalHeader>
          <ModalBody>
            <Text>Custom backdrop filters!</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleStartGame}>
              Start
            </Button>
            <Button onClick={() => navigate("/")}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StopwatchModal;
