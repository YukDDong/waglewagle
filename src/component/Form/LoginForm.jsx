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
  }, [form, location, getUserInfo, joinUserInfo]);

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
      {location !== "/login" && (
        <Input
          icon={"User"}
          type={"text"}
          placeholder={"닉네임을 정해주세요."}
          name={"nickName"}
          updateForm={updateForm}
        />
      )}
      {location !== "/login" && (
        <CheckInfo>닉네임은 한글만 가능해요.</CheckInfo>
      )}
      <Input
        icon={location === "/login" ? "User" : "Email"}
        type={"email"}
        placeholder={
          location === "/login" ? "호명을 적어주시오." : "이메일을 적어주세요."
        }
        name={"userId"}
        updateForm={updateForm}
      />
      <Input
        icon={"Password"}
        type={"password"}
        placeholder={
          location === "/login"
            ? "암호를 적어주시오."
            : "비밀번호를 적어주세요."
        }
        name={"password"}
        updateForm={updateForm}
      />
      {location === "/login" ? (
        <CheckBox labelName="호명 기억하기" />
      ) : (
        <CheckInfo>
          6~16자, 영문 대.소문자, 숫자, 특수문자 중 2개 이상 사용하세요.{" "}
        </CheckInfo>
      )}
      {location !== "/login" && (
        <Input
          icon={"Password"}
          type={"password"}
          placeholder={"비밀번호를 한번 더 적어주세요."}
          name={"checkPassword"}
          updateForm={updateForm}
        />
      )}
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
  margin-top: 20px;
  margin-bottom: 10px;
`;

const CheckInfo = styled.span`
  display: block;
  font-size: 12px;
  color: #9e9e9e;
  padding-left: 10px;
  box-sizing: border-box;
`;
