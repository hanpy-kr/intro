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
} from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { MdMic, MdMicOff } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import { GrNext } from "react-icons/gr";
import { MdHearing } from "react-icons/md";
import speechSynthesisUtterance from "@/utils/speechSynthesisUtterance";
import useAzure from "@/hooks/useAzure";
import chatGpt from "@/utils/chatGpt";
import { chatGPTSampleInterviewInit } from "@/contents/chatGPT/role";
import debounce from "@/utils/debounce";
// import useAzure from "@/pages/education/hooks/useAzure";
// import { chatGPTSampleInterviewInit } from "@/pages/education/contants/chatGPT/role";
// import chatGpt from "@/pages/education/utils/chatGpt";
// import speechSynthesisUtterance from "@/pages/education/utils/speechSynthesisUtterance";

const FreetalkSpeechAssessment = () => {
  // const Human_Player = useContext(AIPlayerContext);
  const { textToSpeech } = speechSynthesisUtterance();

  const {
    speechToText,
    azureState,
    sttFromMic,
    fileChange,
    azureScore,
    doPronunciationAssessmentOnceAsync,
  } = useAzure();
  const speechStartButton = useRef<HTMLDivElement | null>(null);
  const speechStopButton = useRef<HTMLDivElement | null>(null);
  const { getCompletionFromOpenAISample } = chatGpt();
  const [isLoading, setIsLoading] = useState(false);
  const [AIHumanSpeechSentence, setAIHumanSpeechSentence] = useState(
    "Hi, nice to meet you. Can you tell me a little bit about yourself?"
  );
  const [userSpeechSentence, setUserSpeechSentence] = useState<string | null>(
    null
  );

  const startTextToSpeech = debounce(() => {
    textToSpeech(
      `Hi, nice to meet you. Can you tell me a little bit about yourself?`
    );
  }, 300);

  useEffect(() => {
    // interview 시작 발화
    if (getCompletionFromOpenAISample) {
      getCompletionFromOpenAISample(chatGPTSampleInterviewInit);
    }

    startTextToSpeech();
  }, []);

  useEffect(() => {
    if (speechToText) {
      setUserSpeechSentence(speechToText);
    }
  }, [speechToText]);

  useEffect(() => {
    if (azureState.displayText !== "active") {
      handleStopSpeech();
    }
  }, [azureState.displayText]);

  const handleChatGpt = async () => {
    // if (!Human_Player) return;
    setIsLoading(true);
    async function generateChatGpt() {
      return getCompletionFromOpenAISample([
        {
          role: "user",
          content: `${userSpeechSentence}. please, tell me next question about this conversation for a job interview.`,
          // "Yes, of course. My name is John and I have a degree in Computer Science. I have been working as a software developer for the past 3 years. ///please, tell me next question",
        },
      ]);
    }
    const nextQuestion = await generateChatGpt();
    setAIHumanSpeechSentence(nextQuestion[0]);
    setUserSpeechSentence(null);
    setIsLoading(false);
    // setTimeout(() => {
    // }, 2000);
    textToSpeech(nextQuestion[0]);
  };

  const handleListenWord = () => {
    textToSpeech(AIHumanSpeechSentence);
  };

  const handleStartSpeech = () => {
    if (speechStartButton.current === null) return;
    if (speechStopButton.current === null) return;
    sttFromMic();
    speechStartButton.current.style.visibility = "hidden";
    speechStopButton.current.style.visibility = "visible";
  };

  const handleStopSpeech = () => {
    if (speechStartButton.current === null) return;
    if (speechStopButton.current === null) return;
    speechStartButton.current.style.visibility = "visible";
    speechStopButton.current.style.visibility = "hidden";
  };

  const handleReset = () => {};

  return (
    <Box w="50%" h="100%" p={5} borderRight={1} borderRightColor="red">
      <Center mt="50px">
        <VStack spacing={10}>
          <Heading as="h4" size="md">
            Speech Assessment of English Conversation
          </Heading>
          <Box w="490px" p="1px" borderRadius="5px">
            <Text mt={4}>
              You practice a conversation for <b>a job interview.</b> Please
              click the microphone and feel free to talk to me. When the
              conversation is over, press the mute button.
            </Text>
          </Box>
          <Box w="430px" backgroundColor="#fff5f5" p="20px" borderRadius="5px">
            <Text as="b" fontSize="ml">
              {userSpeechSentence
                ? `Answer : ${userSpeechSentence}`
                : AIHumanSpeechSentence}
            </Text>
          </Box>
          {/* userSpeechSentence 유무로 아래 버튼 을 Next Question 으로 변경 */}
          {userSpeechSentence ? (
            <Button onClick={handleChatGpt} isLoading={isLoading}>
              Next Question &ensp; <Icon as={GrNext} w={3} h={3} />
            </Button>
          ) : null}
          (
          {userSpeechSentence ? null : azureState.displayText === "active" ? (
            <Button disabled={true}>
              Hearing.. &ensp; <Icon as={MdHearing} w={5} h={5} />
            </Button>
          ) : (
            <Button onClick={handleListenWord}>
              Listen &ensp; <Icon as={GiSpeaker} w={5} h={5} />
            </Button>
          )}
          )
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
        </VStack>
      </Center>
    </Box>
  );
};

export default FreetalkSpeechAssessment;
