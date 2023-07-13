import styled from "styled-components";
import CheckBox from "../CheckBox/CheckBox";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Form({ getUserInfo, onSubmit, joinUserInfo }) {
  const location = useLocation().pathname;
  const [form, setForm] = useState({
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
    <FormComponent location={location}>
      <Input
        icon="User"
        type="email"
        placeholder="이메일을 적어주세요."
        name="userId"
        updateForm={updateForm}
      />
      <Input
        icon="Password"
        type="password"
        placeholder="비밀번호를 적어주세요."
        name="password"
        updateForm={updateForm}
      />
      {location === "/login" && (
        <LoginCheckDiv>
          <CheckBox labelName="이메일, 비밀번호 저장" />
          <LinkItem to="/find_password">비밀번호 찾기</LinkItem>
        </LoginCheckDiv>
      )}
      {location !== "/login" && (
        <Input
          icon="Password"
          type="password"
          placeholder="비밀번호를 한번 더 적어주세요."
          name="checkPassword"
          password={form.password}
          updateForm={updateForm}
        />
      )}
      <Button
        buttonText={location === "/login" ? "로그인" : "회원가입"}
        onClick={onClick}
        location={location}
      />
      {location === "/login" && (
        <Button buttonText="회원가입" onClick={linkToJoin} color="white" />
      )}
    </FormComponent>
  );
}

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.location === "/login" ? "40px" : "20px")};
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
