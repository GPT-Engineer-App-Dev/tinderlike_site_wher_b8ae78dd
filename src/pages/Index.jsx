import React, { useState } from "react";
import { Box, Flex, Text, Button, Image, VStack, useToast } from "@chakra-ui/react";
import { FaSmile, FaBatteryFull, FaBed, FaSadTear, FaRunning } from "react-icons/fa";

const moods = [
  { id: 1, name: "Happy", icon: <FaSmile size="2em" />, colorScheme: "yellow" },
  { id: 2, name: "Energized", icon: <FaBatteryFull size="2em" />, colorScheme: "green" },
  { id: 3, name: "Tired", icon: <FaBed size="2em" />, colorScheme: "purple" },
  { id: 4, name: "Anxious", icon: <FaSadTear size="2em" />, colorScheme: "red" },
  { id: 5, name: "Motivated", icon: <FaRunning size="2em" />, colorScheme: "blue" },
];

const Index = () => {
  const [currentMood, setCurrentMood] = useState(null);
  const toast = useToast();

  const handleSwipe = (mood) => {
    setCurrentMood(mood);
    toast({
      title: `Mood selected: ${mood.name}`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" align="center" justify="center" h="100vh" w="100vw" p={5} bg="gray.100">
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          How are you feeling today?
        </Text>
        <Flex wrap="wrap" justify="center" align="center">
          {moods.map((mood) => (
            <Button key={mood.id} leftIcon={mood.icon} colorScheme={mood.colorScheme} variant="solid" m={2} onClick={() => handleSwipe(mood)}>
              {mood.name}
            </Button>
          ))}
        </Flex>
        {currentMood && (
          <Box textAlign="center">
            <Text fontSize="xl" fontWeight="bold">
              You're feeling {currentMood.name}
            </Text>
            <Image src={`https://images.unsplash.com/photo-1687360440984-3a0d7cfde903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0JjdXJyZW50TW9vZC5uYW1lLnRvTG93ZXJDYXNlJTI4JTI5JTdEJTIwbW9vZHxlbnwwfHx8fDE3MTIzODM3MzF8MA&ixlib=rb-4.0.3&q=80&w=1080`} boxSize="150px" borderRadius="full" alt={currentMood.name} m="4" />
          </Box>
        )}
      </VStack>
    </Flex>
  );
};

export default Index;
