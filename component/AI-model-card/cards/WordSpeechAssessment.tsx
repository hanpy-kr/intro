// import { AIPlayerContext } from "@/providers/AIPlayer";
import {
  Box,
  Button,
  Heading,
  VStack,
  Text,
  Icon,
  Center,
  Circle,
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { MdMic, MdMicOff, MdOutlineRefresh } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import useAzure from "@/hooks/useAzure";
import speechSynthesisUtterance from "@/utils/speechSynthesisUtterance";
import debounce from "@/utils/debounce";
import { testWord } from "@/contents/educationWordSet/word";
// import useAzure from "@/pages/education/hooks/useAzure";
// import speechSynthesisUtterance from "@/pages/education/utils/speechSynthesisUtterance";
// import { testWord } from "@/pages/education/contants/educationWordSet/word";
// import debounce from "@/pages/education/utils/debounce";

const WordSpeechAssessment = () => {
  // const Human_Player = useContext(AIPlayerContext);
  const {
    azureState,
    sttFromMic,
    fileChange,
    azureScore,
    doPronunciationAssessmentOnceAsync,
  } = useAzure();
  const { textToSpeech } = speechSynthesisUtterance();
  const speechStartButton = useRef<HTMLDivElement | null>(null);
  const speechStopButton = useRef<HTMLDivElement | null>(null);
  const [isSpeack, setIsSpeak] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const startTextToSpeech = debounce(() => {
    textToSpeech(
      `Please click the microphone, and read aloud the following word.`
    ),
      300;
  }, 300);

  useEffect(() => {
    startTextToSpeech();
  }, []);

  useEffect(() => {
    if (azureScore) {
      setIsResult(true);
    }
  }, [azureScore]);

  const handleListenWord = () => {
    // if (!Human_Player) return;
    // Human_Player.send({
    //   text: `${testWord[wordIndex]}? ${testWord[wordIndex]}? ${testWord[wordIndex]}.`,
    // });
    textToSpeech(`${testWord[wordIndex]}.`);
  };

  const handleStartSpeech = () => {
    setIsSpeak(true);
  };

  useEffect(() => {
    if (isSpeack) {
      if (speechStartButton.current === null) return;
      if (speechStopButton.current === null) return;
      speechStopButton.current.style.visibility = "visible";
      speechStartButton.current.style.visibility = "hidden";
      doPronunciationAssessmentOnceAsync(
        testWord[wordIndex],
        speechStopButton.current
      );
    }
  }, [isSpeack, doPronunciationAssessmentOnceAsync, wordIndex]);

  const shuffleWord = () => {
    if (wordIndex < testWord.length - 1) {
      setWordIndex((prev) => prev + 1);
    } else {
      setWordIndex(0);
    }
  };

  const handleStopSpeech = () => {
    if (speechStartButton.current === null) return;
    if (speechStopButton.current === null) return;
    setIsSpeak(false);
    speechStartButton.current.style.visibility = "visible";
    speechStopButton.current.style.visibility = "hidden";
  };

  const handleReset = () => {
    setIsSpeak(false);
    setIsResult(false);
  };

  const BeforeSpeechAssessment = () => {
    return (
      <>
        <Box h="110px">
          <Text as="b" fontSize="5xl">
            {testWord[wordIndex]}{" "}
            <Icon onClick={shuffleWord} as={MdOutlineRefresh} w={5} h={5} />
          </Text>
        </Box>
        <Button onClick={handleListenWord}>
          Listen &ensp; <Icon as={GiSpeaker} w={5} h={5} />
        </Button>
        <Box position="relative">
          <Circle
            ref={speechStartButton}
            onClick={handleStartSpeech}
            size="60px"
            bg="blue.500"
            color="white"
            cursor="pointer"
            position="absolute"
          >
            <Icon as={MdMic} w={10} h={10} />
          </Circle>
          <Circle
            ref={speechStopButton}
            size="60px"
            bg="blue.500"
            color="white"
            cursor="pointer"
            visibility="hidden"
            onClick={handleStopSpeech}
          >
            <Icon as={MdMicOff} w={10} h={10} />
          </Circle>
        </Box>
      </>
    );
  };
  const AfterSpeechAssessment = () => {
    return (
      <>
        <Box h="110px">
          {" "}
          <CircularProgress
            size={140}
            value={azureScore?.PronScore}
            color="#3fac85"
          >
            <CircularProgressLabel>
              {azureScore?.PronScore}
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            size={140}
            m="0px 20px"
            value={azureScore?.AccuracyScore}
            color="#f7ba31"
          >
            <CircularProgressLabel>
              {azureScore?.AccuracyScore}
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            size={140}
            value={azureScore?.FluencyScore}
            color="#fd5c5c"
          >
            <CircularProgressLabel>
              {azureScore?.FluencyScore}
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Flex pr="33px" gap="35px" justifyContent="space-around">
          <Box fontWeight="extrabold">Pronunciation score</Box>
          <Box fontWeight="extrabold">Accuracy score</Box>
          <Box fontWeight="extrabold">fluency score</Box>
        </Flex>
        <Button onClick={handleReset}>Retray</Button>
      </>
    );
  };

  return (
    <Box w="50%" h="100%" p={5} borderRight={1} borderRightColor="red">
      <Center mt="50px">
        <VStack spacing={10}>
          <Heading as="h4" size="md">
            Speech Assessment of English Word
          </Heading>
          <Text mt={4}>
            Please click the microphone and read aloud the following word.
          </Text>
          {isResult ? <AfterSpeechAssessment /> : <BeforeSpeechAssessment />}
        </VStack>
      </Center>
    </Box>
  );
};

export default WordSpeechAssessment;
