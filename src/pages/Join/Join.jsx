import { useCallback, useState } from "react";
import Form from "../../component/Form/Form";
import NavBar from "../../component/NavBar/NavBar";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function Join() {
  const [{ nickName, userId, password, checkPassword }, setJoinInfo] = useState(
    {
      nickName: "",
      userId: "",
      password: "",
      checkPassword: "",
    }
  );
  const joinUserInfo = useCallback((form) => {
    setJoinInfo({
      nickName: form.nickName,
      userId: form.userId,
      password: form.password,
      checkPassword: form.checkPassword,
    });
  }, []);

  const onJoinSubmit = useCallback(() => {
    console.log(nickName, userId, password, checkPassword);
  }, [nickName, userId, password, checkPassword]);

  return (
    <>
      <NavBar />
      <Main>
        <MainDiv>
          <Title>호패 만들기</Title>
          <Sub>회원가입에 필요한 정보를 입력해주세요.</Sub>
          <Form joinUserInfo={joinUserInfo} onSubmit={onJoinSubmit} />
          <ToLogin>
            이미 와글와글 계정이 있으신가요?{" "}
            <Link to={"/login"}>로그인하기</Link>
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

const Title = styled.h1`
  width: 240px;
  height: 40px;
  font-size: 35px;
  font-weight: 900;
  text-align: center;
  line-height: 40px;
  margin-bottom: 15px;
`;

const Sub = styled.h3`
  color: #9e9e9e;
  margin-bottom: 35px;
  font-size: 18px;
`;

const ToLogin = styled.p`
  font-size: 15px;
  color: #9e9e9e;
  margin-top: 10px;
  > a {
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-decoration-line: none;
    color: #e75852;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px solid #e75852;
    padding-bottom: 3px;
  }
`;
