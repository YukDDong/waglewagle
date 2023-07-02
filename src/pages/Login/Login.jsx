import styled from "styled-components";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LoginForm from "../../component/LoginForm/LoginForm";
import SocialLogin from "../../component/socialLogin/SocialLogin";
import { useCallback, useEffect, useState } from "react";

export default function Login() {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const getUserInfo = useCallback((id, password) => {
    setLoginId(id);
    setLoginPassword(password);
  }, []);

  const onSubmit = useCallback(() => {
    console.log(loginId, loginPassword);
  }, [loginId, loginPassword]);

  return (
    <>
      <NavBar>
        <NavLogo>와글와글</NavLogo>
        <FaBars color="white" size={27} />
      </NavBar>
      <Main>
        <MainDiv>
          <Logo>와글와글</Logo>
          <LoginForm getUserInfo={getUserInfo} onSubmit={onSubmit} />
          <JoinDiv>
            <p>
              자네, 이곳은 처음이오?
              <br />
              이곳은 호패가 없으면 들어갈 수가 없다네
              <br />
              관청에 가서 호패를 만들 수 있다네
            </p>
            <Link to={"/join"}>호패 만들러 가기</Link>
          </JoinDiv>
          <SocialLoginText>간편 호패 만들기</SocialLoginText>
          <SocialLogin />
        </MainDiv>
      </Main>
    </>
  );
}

// styled-component CSS작업
const NavBar = styled.nav`
  width: 100%;
  height: 70px;
  background-color: rgba(26, 42, 83, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
`;

const NavLogo = styled.h1`
  width: 170px;
  height: 40px;
  background-color: rgba(139, 139, 139, 0.3);
  font-size: 35px;
  text-align: center;
  line-height: 40px;
  color: white;
`;

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

const Logo = styled.h1`
  width: 170px;
  height: 40px;
  background-color: rgba(139, 139, 139, 0.3);
  font-size: 35px;
  text-align: center;
  line-height: 40px;
  margin-bottom: 30px;
`;

const JoinDiv = styled.div`
  width: 486px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 30px 15px;
  box-sizing: border-box;
  > p {
    color: #b4b4b4;
    font-size: 14px;
    line-height: 19.79px;
  }
  > a {
    font-size: 18px;
    font-weight: 600;
    line-height: 19.78px;
    color: #e75852;
    text-decoration: none;
    border-bottom: 1px solid #e75852;
    padding-bottom: 5px;
  }
`;

const SocialLoginText = styled.h4`
  margin-top: 30px;
  font-weight: 600;
`;
