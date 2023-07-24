import { useCallback, useState } from "react";
import Form from "../../component/Form/Form";
import NavBar from "../../component/NavBar/NavBar";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Title from "../../component/Title/Title";

export default function Join() {
  const [{ userId, password, checkPassword }, setJoinInfo] = useState({
    userId: "",
    password: "",
    checkPassword: "",
  });
  const joinUserInfo = useCallback((form) => {
    setJoinInfo({
      userId: form.userId,
      password: form.password,
      checkPassword: form.checkPassword,
    });
  }, []);

  const onJoinSubmit = useCallback(() => {
    console.log(userId, password, checkPassword);
  }, [userId, password, checkPassword]);

  return (
    <>
      <NavBar />
      <Main>
        <MainDiv>
          <Title title="회원가입" />
          <Sub>회원가입에 필요한 정보를 입력해주세요.</Sub>
          <Form joinUserInfo={joinUserInfo} onSubmit={onJoinSubmit} />
          <ToLogin>
            이미 와글와글 계정이 있으신가요? <Link to="/login">로그인하기</Link>
          </ToLogin>
        </MainDiv>
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const MainDiv = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  box-sizing: border-box;
`;

const Sub = styled.h3`
  margin-top: 14px;
  color: #9e9e9e;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const ToLogin = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #9e9e9e;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin-top: 10px;
  > a {
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: none;
    color: #e75852;
    text-align: center;
    font-size: 16px;
    font-family: var(--font-hunmin);
    border-bottom: 1px solid #e75852;
  }
`;
