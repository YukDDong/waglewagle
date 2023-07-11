import { styled } from "styled-components";
import useInput from "../../hooks/useInput";
import { ReactComponent as UserIcon } from "../../assets/octicon-person-24.svg";
import { ReactComponent as PasswordIcon } from "../../assets/icons-8-lock-2.svg";
import { useEffect, useState } from "react";

export default function Input({ icon, updateForm, name, ...rest }) {
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
            return <UserIcon fill={isFocus ? "#E75852" : "#BDBDBD"} />;
          case "Password":
            return <PasswordIcon fill={isFocus ? "#E75852" : "#BDBDBD"} />;
          default:
            break;
        }
      })()}
      <input
        {...rest}
        value={input}
        onFocus={onFocusChange}
        onBlur={onFocusChange}
        onChange={setInput}
        name={name}
        required
      />
    </InputDiv>
  );
}

const InputDiv = styled.div`
  width: 438px;
  height: 64px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  &:focus-within {
    border: 1px solid #e75852;
    background-color: #fff;
  }
  > input {
    width: 100%;
    font-size: 18px;
    height: fit-content;
    border: none;
    background: none;
    margin-left: 10px;
    color: #bdbdbd;
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.64px;
    &::placeholder {
      color: #bdbdbd;
    }
    &:focus {
      outline: none;
      color: #222;
      font-family: Noto Sans KR;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.64px;
      &::placeholder {
        color: #e75852;
      }
    }
  }
`;
