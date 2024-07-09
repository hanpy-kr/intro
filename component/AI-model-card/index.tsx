// import AIPlayerProvider from "@/providers/AIPlayer";
import { HStack, StackDivider, Box, Center } from "@chakra-ui/react";
import React from "react";
// import CardAIModel from "../AIPlayer/CardAIModel";
import FreetalkSpeechAssessment from "./cards/FreetalkSpeechAssessment";
import WordSpeechAssessment from "./cards/WordSpeechAssessment";

type AIModelCardProp = { ContentType: string };

const AIModelCard = ({ ContentType }: AIModelCardProp) => {
  const Assessment = ({ ContentType }: AIModelCardProp) => {
    switch (ContentType) {
      case "WordEvaluation":
        return <WordSpeechAssessment />;
      case "FreetalkEvaluation":
        return <FreetalkSpeechAssessment />;
      default:
        return null;
    }
  };
  return (
    <>
      <HStack
        divider={<StackDivider borderColor="gray.200" />}
        pt="20px"
        pb="20px"
        w="80vw"
        h="80vh"
        maxW="1400px"
        minW="1200px"
        maxH="800px"
        minH="600"
        shadow="md"
        borderWidth="1px"
        justify="center"
      >
        <Assessment ContentType={ContentType} />
      </HStack>
    </>
  );
};

export default AIModelCard;
