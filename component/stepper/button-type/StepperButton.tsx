import {
  Box,
  Button,
  HStack,
  Link,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import RadioCard from "./RadioCard";

const StepperButton = () => {
  const options = ["student", "adult"];
  const [redirectUrl, setRedirectUrl] = useState("#");
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    // defaultValue: "adult",
    onChange: (target) => {
      console.log(target);
      if (target === "student") {
        setRedirectUrl("/education/word-evaluation");
      } else if (target === "adult") {
        setRedirectUrl("/education/freetalk-evaluation");
      }
    },
  });
  const group = getRootProps();

  return (
    <>
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
      <Link href={redirectUrl}>
        <Button colorScheme="teal" variant="outline" w={32}>
          Continue
        </Button>
      </Link>
    </>
  );
};

export default StepperButton;
