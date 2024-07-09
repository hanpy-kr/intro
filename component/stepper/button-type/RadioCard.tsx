import { Box, useRadio, UseRadioProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type RadioCardProps = UseRadioProps & {
  children: ReactNode;
};

function RadioCard(props: RadioCardProps) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        // border="19px"
        borderWidth="1px"
        borderRadius="30px"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}
export default RadioCard;
