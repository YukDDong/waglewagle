import styled from "styled-components";
import CheckBox from "./CheckBox";
import { HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi2";
import { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";

export default function LoginForm({ getUserInfo, onSubmit }) {
  const [isFocus, setIsFocus] = useState("");
  const [username, setUsername, resetUsername] = useInput("");
  const [password, setPassword, resetPassword] = useInput("");
  // input focus/blur시에 아이콘의 색상변경을 위한 상태값
  const onFocus = (e) => setIsFocus(e.currentTarget.name);
  const onBlur = () => setIsFocus("");

  useEffect(() => {
    getUserInfo(username, password);
  }, [username, password]);

  const onClick = (e) => {
    e.preventDefault();
    onSubmit();
    resetUsername();
    resetPassword();
  };

  return (
    <Form>
      <InputDiv>
        <HiOutlineUser
          size={20}
          color={isFocus === "username" ? "red" : "black"}
        />
        <input
          type="text"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={setUsername}
          value={username}
          placeholder="호명을 적어주시오."
          name="username"
          required
        />
      </InputDiv>
      <InputDiv>
        <HiOutlineLockClosed
          size={20}
          color={isFocus === "password" ? "red" : "black"}
        />
        <input
          type="password"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={setPassword}
          value={password}
          placeholder={"암호를 적어주시오."}
          name="password"
          required
        />
      </InputDiv>
      <CheckBox labelName="호명 기억하기" />
      <SubmitButton onClick={onClick}>이리 오너라</SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

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

const SubmitButton = styled.button`
  height: 64px;
  padding: 10px;
  box-sizing: border-box;
  color: white;
  font-size: large;
  background-color: #e75852;
  border: none;
  border-radius: 6px;
`;
