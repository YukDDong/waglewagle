import { styled } from "styled-components";
import useInput from "../../hooks/useInput";
import {
  HiEnvelope,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi2";
import { useEffect, useState } from "react";

export default function Input({ icon, type, placeholder, name, updateForm }) {
  const [input, setInput] = useInput("");
  const [isFocus, setIsFocus] = useState(false);
  const onFocusChange = () => {
    setIsFocus((isFocus) => !isFocus);
  };
  useEffect(() => {
    updateForm(name, input);
  }, [name, input]);

  return (
    <InputDiv>
      {/* switch문을 통해서 icon값들에 맞는 icon추가 */}
      {(() => {
        switch (icon) {
          case "User":
            return (
              <HiOutlineUser size={20} color={isFocus ? "red" : "black"} />
            );
          case "Email":
            return <HiEnvelope size={20} color={isFocus ? "red" : "black"} />;
          case "Password":
            return (
              <HiOutlineLockClosed
                size={20}
                color={isFocus ? "red" : "black"}
              />
            );
          default:
            break;
        }
      })()}
      <input
        type={type}
        onFocus={onFocusChange}
        onBlur={onFocusChange}
        onChange={setInput}
        value={input}
        placeholder={placeholder}
        name={name}
        required
      />
    </InputDiv>
  );
}

const InputDiv = styled.div`
  width: 486px;
  height: 64px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background-color: white;
  padding: 20px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  &:focus-within {
    border: 1px solid red;
  }
  > input {
    width: 100%;
    font-size: 18px;
    height: fit-content;
    border: none;
    background: none;
    margin-left: 10px;
    &:focus {
      outline: none;
      &::placeholder {
        color: red;
      }
    }
  }
`;
