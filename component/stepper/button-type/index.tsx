import { Button, Stack, Heading, Text, Box } from "@chakra-ui/react";
import StepperButton from "./StepperButton";

const StepperButtonType = () => {
  return (
    <Stack spacing={8}>
      <Stack>
        <Heading
          as="h3"
          size="lg"
          // fontFamily="Malgun Gothic"
          // fontFamily="Gill Sans, sans-serif"
        >
          Enhance Speaking skills
        </Heading>
        <Text color="gray.400" as="i" fontSize="xl">
          Start by telling us about you
        </Text>
      </Stack>
      <hr />
      <Stack spacing={1}>
        <Heading as="h3" size="md">
          Most of my conversation partner is for
        </Heading>
        <Text fontSize="sm">Make a selection below</Text>
      </Stack>
      <Stack spacing={10}>
        <StepperButton />
      </Stack>
    </Stack>
  );
};

export default StepperButtonType;
