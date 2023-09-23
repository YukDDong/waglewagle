import styled from "styled-components";
import Form from "../../component/Form/Form";
import SocialLogin from "../../component/SocialLogin/SocialLogin";
import { useCallback, useState } from "react";
import NavBar from "../../component/NavBar/NavBar";
import Title from "../../component/Title/Title";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { loginApi } from "../../apis/user";
import { setItem } from "../../utils/localStorage";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form의 input정보를 하위컴포넌트에서 받아서 상태값으로 변경해주는 과정
  const [{ loginId, loginPassword }, setLoginInfo] = useState({
    loginId: "test1111@naver.com",
    loginPassword: "qwer1234",
  });
  const getUserInfo = useCallback((form) => {
    setLoginInfo({
      loginId: form.userId,
      loginPassword: form.password,
    });
  }, []);

  // submit 버튼 클릭시 실행될 함수( 나중에 백엔드 완성되면 추가 로직 구성할 예정 )
  const onSubmit = async () => {
    // api통신 예시
    // const response = await axios.post(
    //   "https://port-0-backend-server-eu1k2lll0e0u3n.sel4.cloudtype.app/api/v1/users/login",
    //   {
    //     email: loginId,
    //     password: loginPassword,
    //   }
    // );

    loginApi({
      email: loginId,
      password: loginPassword,
    }).then((result) => {
      if (result.status === 200) {
        setItem("AUTH", result.data.data.accessToken);
        dispatch(
          login({
            userId: result.data.data.userId,
            username: result.data.data.username,
          })
        );
        if (!result.data.data.isExistHopae) {
          navigate("/makeHopae");
          return;
        } else {
          navigate("/main");
        }
      }
    });
  };

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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainDiv = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  box-sizing: border-box;
  button {
    margin: 0 0 12px;
  }
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
