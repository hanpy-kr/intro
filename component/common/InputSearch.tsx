import useDebounce from "@/hooks/common/useDebounce";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import React, { useState } from "react";

type InputSearchProps = {
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
};

/**
 * InputSearch 컴포넌트 설명
 * 기능
 * 1. active State의 기능으로 첫 진입 시 input창 disable 시킴
 * 2. 버튼 누르면, input창에 글을 적을 수 있도록 만듬
 * 3. Input에 글을 적을 시 debounce를 적용함. 0.8초 마다 email을 업데이트 시킴
 *
 * State 설명
 * active는 InputSearch 내부에서만 활용되므로 InputSearch component 내부에 넣어줌
 *
 */
const InputSearch = ({ setEmail }: InputSearchProps) => {
  const [active, setActive] = useState(false);
  const handleEmailInput = useDebounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    800
  );

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type="text"
        disabled={!active}
        placeholder={active ? "Enter email" : "Click Active Button"}
        onChange={handleEmailInput}
      />
      <InputRightElement width="4.5rem">
        <Button
          h="1.75rem"
          size="5m"
          p="1rem"
          onClick={() => setActive((prev) => !prev)}
        >
          {active ? "active" : "unactive"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputSearch;
