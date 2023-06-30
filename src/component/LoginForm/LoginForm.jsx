import styled from "styled-components";
import LoginInput from "./LoginInput";
import CheckBox from "./CheckBox";

export default function LoginForm() {
  return (
    <Form>
      <LoginInput type="text" />
      <LoginInput type="password" />
      <CheckBox labelName="호명 기억하기" />
      <SubmitButton type="submit">이리 오너라</SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
