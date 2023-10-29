import styled from "styled-components";
import SocialLogin from "../../component/SocialLogin/SocialLogin";
import { useCallback, useState, useEffect } from "react";
import NavBar from "../../component/NavBar/NavBar";
import Title from "../../component/Title/Title";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { loginApi } from "../../apis/user";
import { setItem } from "../../utils/storage";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { InputText, InputPwd } from "../../component/Input/Input";
import Button from "../../component/Button/Button";
import CheckBox from "../../component/CheckBox/CheckBox";
import {
  IsFalse,
  validEmail,
  validPwd,
} from "../../component/ValidTest/ValidTest";
import MobilePopup from "../../component/MobilePopup/MobilePopup";
import { Mobile } from "../../style/mediaQuery";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [autoLogin, setAutoLogin] = useState(false);

  // Form의 input정보를 하위컴포넌트에서 받아서 상태값으로 변경해주는 과정
  // 변수
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    pwd: "",
  });

  // 함수
  const updateData = useCallback(
    (name, value) => {
      setLoginInfo({ ...loginInfo, [name]: value });
    },
    [loginInfo]
  );

  // 에러 출력 후 이메일 or 비밀번호 입력 시 초기화
  useEffect(() => {
    setIsError(false);
  }, [loginInfo]);

  // submit 버튼 클릭시 실행될 함수( 나중에 백엔드 완성되면 추가 로직 구성할 예정 )
  const onSubmit = () => {
    if (loginInfo.id.trim() === "") {
      setIsError(true);
      setErrorMessage("이메일을 입력해 주세요.");
      return;
    }

    if (loginInfo.pwd.trim() === "") {
      setIsError(true);
      setErrorMessage("비밀번호를 입력해 주세요.");
      return;
    }

    loginApi({
      email: loginInfo.id,
      password: loginInfo.pwd,
    }).then((result) => {
      if (result.data.status === "FAIL") {
        setIsError(true);
        setErrorMessage(
          "등록되지 않은 이메일이거나 이메일 또는 비밀번호를 잘못 입력했습니다."
        );
        return;
      }

      if (result.data.status === "SUCCESS") {
        if (autoLogin) {
          setItem("USERINFO", {
            email: loginInfo.id,
            userId: result.data.data.userId,
            username: result.data.data.userName,
            boardId: result.data.data.boardId,
            memberType: "GENERAL",
            autoLogin: autoLogin,
          });
        }
        setItem("AUTH", result.data.data.accessToken);
        setItem("autoLogin", autoLogin);
        dispatch(
          login({
            email: loginInfo.id,
            userId: result.data.data.userId,
            username: result.data.data.userName,
            boardId: result.data.data.boardId,
            memberType: "GENERAL",
            autoLogin: autoLogin,
          })
        );

        // if (!result.data.data.isExistHopae) {
        //   navigate("/makeHopae");
        //   return;
        // } else if (!result.data.data.boardId) {
        //   navigate("/makeGiwaHouse");
        //   return;
        // } else {
        //   navigate("/main");
        //   return;
        // }
      }
    });
  };

  // 회원가입 후 로그인 화면 이동
  const handleClickJoin = () => {
    window.location.href = "/join";
  };
  return (
    <>
      <Mobile>
        {/* pc 최적화 팝업 start */}
        <MobilePopup />
        {/* pc 최적화 팝업 end */}
      </Mobile>
      <NavBar />
      <Main>
        <MainDiv>
          {/* Title */}
          <Title title="로그인" />

          <MainDiv2>
            {/* Email */}
            <InputText
              placeholder="이메일을 적어주세요."
              dataName="id"
              updateData={updateData}
            />

            {/* 비밀번호 */}
            <InputPwd
              placeholder="비밀번호를 적어주세요."
              dataName="pwd"
              updateData={updateData}
            />

            {/* 저장 기능, 비밀번호 찾기 */}
            <LoginCheckDiv>
              <CheckBox
                labelName="자동 로그인"
                checked={autoLogin}
                setChecked={setAutoLogin}
              />
              <LinkItem to="/findPwd">비밀번호 찾기</LinkItem>
            </LoginCheckDiv>

            {/* 에러 출력 */}
            {isError ? <ErrorStyled>{errorMessage}</ErrorStyled> : null}

            {/* 로그인 버튼 */}
            <Button onClick={onSubmit}>로그인</Button>

            {/* 회원가입 페이지 이동 버튼 */}
            <Button onClick={handleClickJoin} color="white">
              회원가입
            </Button>
          </MainDiv2>

          {/* SNS 계정 연결 */}
          {/* <LineDiv /> */}
          {/* <SocialLoginText>SNS 계정으로 로그인</SocialLoginText> */}
          {/* <SocialLogin /> */}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  button {
    margin: 0 0 12px;
    width: 100%;
  }
`;

const MainDiv2 = styled.div`
  margin-top: 40px;
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

const LoginCheckDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const LinkItem = styled(Link)`
  color: #9e9e9e;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
  text-decoration-line: none;
  padding-bottom: 1px;
  border-bottom: 1px solid #9e9e9e;
`;

const ErrorStyled = styled(IsFalse)`
  margin-bottom: 30px;
  font-size: 14px;
`;
