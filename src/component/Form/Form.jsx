import styled from "styled-components";
import CheckBox from "./CheckBox";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Input from "./Input";
import Button from "../Button/Button";

export default function Form({ getUserInfo, onSubmit, joinUserInfo }) {
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

  const linkToJoin = (e) => {
    e.preventDefault();
    window.location.pathname = "/join";
  };

  return (
    <FormComponent>
      <Input
        icon={"User"}
        type={"email"}
        placeholder={"이메일을 적어주세요."}
        name={"userId"}
        updateForm={updateForm}
      />
      <Input
        icon={"Password"}
        type={"password"}
        placeholder={"비밀번호를 적어주세요."}
        name={"password"}
        updateForm={updateForm}
      />
      {location === "/login" ? (
        <LoginCheckDiv>
          <CheckBox labelName="이메일, 비밀번호 저장" />
          <LinkItem to={"/find_password"}>비밀번호 찾기</LinkItem>
        </LoginCheckDiv>
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
      <Button buttonText={"로그인"} onClick={onClick}></Button>
      <Button
        buttonText={"회원가입"}
        onClick={linkToJoin}
        color={"white"}
      ></Button>
    </FormComponent>
  );
}

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const LoginCheckDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const LinkItem = styled(Link)`
  color: #9e9e9e;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
  text-decoration-line: none;
  padding-bottom: 1px;
  border-bottom: 1px solid #9e9e9e;
`;

const CheckInfo = styled.span`
  display: block;
  font-size: 12px;
  color: #9e9e9e;
  padding-left: 10px;
  box-sizing: border-box;
`;
