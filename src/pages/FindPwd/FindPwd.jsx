import { useCallback, useState, useEffect } from "react";
import NavBar from "../../component/NavBar/NavBar";
import { styled } from "styled-components";
import Title from "../../component/Title/Title";
import ModalBasic from "../../component/Modal/ModalBasic";
import { InputText } from "../../component/Input/Input";
import { validEmail, IsTrue, IsFalse } from "../../component/ValidTest/ValidTest";
import { ButtonActDeact } from "../../component/Button/Button";
import { validationEmailApi } from "../../apis/user";


const FindPwd = () => {
  /* 이메일 발송 완료 팝업창  */
  const [visibleModal, setVisibleModal] = useState(false);

  // 변수
  const [data, setData] = useState({
    email: "",
    isEmail: false,
  });

  /* 이메일 유/무판단 */
  const [emailvalidation, setEmailvalidation] = useState({
    message: "",
    isEmail: false,
  });

  // 함수
  const updateData = useCallback(
    (name, value) => {
      setData({ ...data, [name]: value });
    },
    [data]
  );


  // 이메일 형식 판별
  useEffect(() => {
    // 판별
    updateData("isEmail", validEmail(data.email));
    setEmailvalidation({
      message: "",
      isEmail: false,
    })
  }, [data.email]);


  const visibleFtn = () => {
    /* 이메일 발송 로직 구현해야함... */
    setVisibleModal(false);
    window.location.href = "/login"
  };

  const handleClick = (e) => {
    e.preventDefault();
    validationEmailApi(data.email).then((result) => {
      if (result.data.status === "SUCCESS") {
        setVisibleModal(true)
        setEmailvalidation({
          message: result.data.message,
          isEmail: true,
        })
      }
      if (result.data.status === "FAIL") {
        setEmailvalidation({
          message: result.data.message,
          isEmail: false,
        })
      }
    });
  }

  return (
    <>
      <NavBar />

      {/* Modal */}
      {(visibleModal)
        ? <ModalBasic
          msg="성공적으로 메일을 보냈습니다!"
          buttonText="확인"
          onClickBtn={visibleFtn}
        />
        : null}

      <Main>
        <MainDiv>

          {/* Title */}
          <Title title="비밀번호 찾기" />
          <Sub>
            비밀번호를 분실하셨나요? <br />
            이메일 주소를 통해 임시 비밀번호를 발급받으실 수 있습니다.
          </Sub>

          <MainDivBottom>

            {/* Email */}
            <InputText
              placeholder="이메일을 적어주세요."
              dataName="email"
              updateData={updateData}
            />

            {/* Email 판별 */}
            {(data.email !== "")  // 비어있을 때
              ? (data.isEmail)  // 이메일 형식에 맞는지
                ? (<IsTrue></IsTrue>)
                : (<IsFalse>이메일 형식에 맞지 않는 메일 주소입니다.</IsFalse>)
              : null
            }

            {/* 존재하지 않는 이메일 */}
            {!emailvalidation.isEmail
              ? <IsFalse>{emailvalidation.message}</IsFalse>
              : null
            }

            {/* 버튼 */}
            <ButtonActDeact
              onClick={e => handleClick(e)}
              disabled={!data.isEmail}
            >
              메일 보내기
            </ButtonActDeact>

          </MainDivBottom>

        </MainDiv>
      </Main>
    </>
  );
};

export default FindPwd;


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

const MainDivBottom = styled.div`
  button {
    margin: 40px 0 0;
    width: 100%
  }
`;

const Sub = styled.h3`
  margin: 15px 0 40px;
  text-align: center;
  color: #9e9e9e;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;