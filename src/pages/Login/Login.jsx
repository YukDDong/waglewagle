import styled from "styled-components";
import Form from "../../component/Form/Form";
import SocialLogin from "../../component/SocialLogin/SocialLogin";
import { useCallback, useState } from "react";
import NavBar from "../../component/NavBar/NavBar";
import Title from "../../component/Title/Title";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  // 임시 유저정보(로그인을 위한 유저정보)
  const user = {
    id: "ekfhd5537@naver.com",
    password: "qwer12345",
    name: "육동영",
    data: {},
  };

  // Form의 input정보를 하위컴포넌트에서 받아서 상태값으로 변경해주는 과정
  const [{ loginId, loginPassword }, setLoginInfo] = useState({
    loginId: "",
    loginPassword: "",
  });
  const getUserInfo = useCallback((form) => {
    setLoginInfo({
      loginId: form.userId,
      loginPassword: form.password,
    });
  }, []);

  // submit 버튼 클릭시 실행될 함수( 나중에 백엔드 완성되면 추가 로직 구성할 예정 )
  const onSubmit = useCallback(() => {
    // 임시 로그인 코드(테스트용)
    if (loginId === user.id && loginPassword === user.password) {
      dispatch(
        login({
          id: user.id,
          name: user.name,
          loggedIn: true,
        })
      );
      window.location.pathname = "/main";
    }
  }, [loginId, loginPassword]);

  return (
    <>
      <NavBar />
      <Main>
        <MainDiv>
          <Title title="로그인" />
          <Form getUserInfo={getUserInfo} onSubmit={onSubmit} />
          <LineDiv />
          <SocialLoginText>SNS 계정으로 로그인</SocialLoginText>
          <SocialLogin />
        </MainDiv>
      </Main>
    </>
  );
};

export default Login;

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

const LineDiv = styled.div`
  width: 438px;
  height: 1px;
  background-color: #dbdbdb;
  margin-top: 28px;
`;

const SocialLoginText = styled.h4`
  margin-top: 40px;
  font-weight: 400;
  font-family: var(--font-hunmin);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
