import { useCallback, useState, useEffect } from "react";
import NavBar from "../../component/NavBar/NavBar";
import { styled } from "styled-components";
import Title from "../../component/Title/Title";
import { IsTrue, IsFalse } from "../../component/ValidTest/ValidTest";
import { InputPwd } from "../../component/Input/Input";
import Button from "../../component/Button/Button";
import { confirmPwdApi } from "../../apis/user";
import { useNavigate } from "react-router-dom";

const ConfirmPwd = () => {
  // const [isConfirmPwd, setIsConfirmPwd] = useState(false);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const [data, setData] = useState({
    confirmPwd: "",
  });

  // 함수
  const updateData = useCallback(
    (name, value) => {
      setData({ ...data, [name]: value });
    },
    [data]
  );

  // 함수
  // 실시간 변수 업데이트
  // 값이 바뀌는 동안은 true 유지
  // 값이 써지는 동안 에러 메시지 출력 없애기 위함
  // useEffect(() => {
  //   setIsConfirmPwd(true);
  //   console.log(data);
  // }, [data.confirmPwd]);

  // '비밀번호 변경' 버튼 클릭 시 이벤트
  const handleClick = () => {
    if (data.confirmPwd.trim() === "") {
      setIsError(true);
      setErrorMsg("비밀번호를 입력해 주세요.");
      return;
    }

    confirmPwdApi({
      password: data.confirmPwd,
    }).then((result) => {
      if (result.data.message === "비밀번호가 일치하지 않습니다. ") {
        setIsError(true);
        setErrorMsg("비밀번호를 잘못 입력했습니다.");
        return;
      }

      if (result.data.status === "SUCCESS") {
        navigate("/changePwd", { state: { confirmPwd: true } });
      }
    });
  };

  return (
    <>
      <NavBar />

      <Main>
        <MainDiv>
          <MainDivTop>
            {/* Title */}
            <Title title="비밀번호 확인" />
            <Sub>
              {
                "비밀번호를 변경하시나요?\n기존에 사용한 비밀번호 확인 후 변경이 가능해요."
              }
            </Sub>
          </MainDivTop>

          <MainDivBottom>
            {/* 비밀번호 확인 */}
            <InputPwd
              placeholder="기존 비밀번호를 적어주세요."
              dataName="confirmPwd"
              updateData={updateData}
            />

            {/* 비밀번호 확인 판별
            {data.confirmPwd === "" ? (
              isConfirmPwd ? (
                <IsTrue></IsTrue>
              ) : (
                <IsFalse>비밀번호를 잘못 입력했습니다.</IsFalse>
              )
            ) : (
              <IsFalse>비밀번호를 입력해 주세요.</IsFalse>
            )} */}
            {isError ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}

            {/* 버튼 */}
            <Button onClick={handleClick}>비밀번호 변경하기</Button>
          </MainDivBottom>
        </MainDiv>
      </Main>
    </>
  );
};

export default ConfirmPwd;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainDiv = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const MainDivTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainDivBottom = styled.div`
  margin-top: 40px;
  button {
    margin: 40px 0 0;
    width: 100%;
  }
`;

const Sub = styled.h3`
  margin: 15px 0 0;
  color: #9e9e9e;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  white-space: pre-line; // 문자열에서 \n 명령어 인식되도록
`;

const ErrorMsg = styled(IsFalse)`
  font-size: 14px;
`;
