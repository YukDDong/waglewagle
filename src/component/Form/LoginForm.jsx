import styled from "styled-components";
import CheckBox from "./CheckBox";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Input from "./Input";

export default function LoginForm({ getUserInfo, onSubmit, joinUserInfo }) {
  const location = useLocation().pathname;
  const [form, setForm] = useState({
    nickName: "",
    userId: "",
    password: "",
    checkPassword: "",
  });

  useEffect(() => {
    location === "/login" ? getUserInfo(form) : joinUserInfo(form);
  }, [form]);

  const updateForm = useCallback(
    (name, value) => {
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  const onClick = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Form>
      <Input
        icon={"User"}
        type={"email"}
        placeholder={"호명을 적어주시오."}
        name={"userId"}
        updateForm={updateForm}
      />
      <Input
        icon={"Password"}
        type={"password"}
        placeholder={"암호를 적어주시오."}
        name={"password"}
        updateForm={updateForm}
      />
      <CheckBox labelName="호명 기억하기" />
      <SubmitButton onClick={onClick}>
        {location === "/login" ? "이리 오너라" : "회원가입하기"}
      </SubmitButton>
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
