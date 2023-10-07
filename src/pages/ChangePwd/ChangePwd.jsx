import { useCallback, useState, useEffect } from "react";
import NavBar from "../../component/NavBar/NavBar";
import { styled } from "styled-components";
import Title from "../../component/Title/Title";
import ModalBasic from "../../component/Modal/ModalBasic";
import { validPwd, IsTrue, IsFalse, CheckInfo } from "../../component/ValidTest/ValidTest";
import { InputPwd } from "../../component/Input/Input";
import { ButtonActDeact } from "../../component/Button/Button";
import { changePwdApi } from "../../apis/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import { removeItem } from "../../utils/storage";

const ChangePwd = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //// data

  // 변수
  const [data, setData] = useState({
    pwd: "",
    confirmPwd: "",
  });

  // 함수
  const updateData = useCallback(
    (name, value) => {
      setData({ ...data, [name]: value });
    },
    [data]
  );


  //// valid

  // 변수
  const [isValid, setIsValid] = useState({
    isPwd: false,
    isConfirmPwd: false,
  });

  // 함수
  // 실시간 변수 업데이트
  useEffect(() => {
    setIsValid({...isValid, 
      isPwd: validPwd(data.pwd),
      isConfirmPwd: (data.pwd === data.confirmPwd)
    });
  }, [data]);

  
  //// visibleModal

  // 변수
  const [visibleModal, setVisibleModal] = useState(false);

  // 함수
  const visibleFtn = (value) => {
    setVisibleModal(value);
  };


  // '비밀번호 변경' 버튼 클릭 시 이벤트
  const handleClick = ()=>{
    
    // 비밀번호 변경 요청
    changePwdApi({
      password: data.pwd
    }).then((result) => {
      if (result.status === 200) {
        // modal 열기
        visibleFtn(true);
      }
    })
  }

  // 로그아웃
  const logoutBtnClick = () => {
    dispatch(logout());
    removeItem("AUTH");
    removeItem("USERINFO");
    removeItem("autoLogin");
    navigate("/login");
  };


  return (
    <>
      <NavBar />

      {/* Modal */}
      {(visibleModal)
        ? <ModalBasic
          msg = {"비밀번호를 성공적으로\n변경했습니다!"}
          buttonText="로그인 화면으로 이동"
          visibleFtn={visibleFtn}
          onClickBtn={logoutBtnClick}
        />
        : null}

      
      <Main>
        <MainDiv>

          <MainDivTop>

            {/* Title */}
            <Title title="비밀번호 변경" />
            <Sub>비밀번호를 변경해 주세요.</Sub>

          </MainDivTop>

          <MainDivBottom>

            {/* 비밀번호 */}
            <InputPwd 
              placeholder="비밀번호를 적어주세요."
              dataName="pwd"
              updateData={updateData}
            />

            {/* 비밀번호 판별 */}
            {((data.pwd !== "") && (!isValid.isPwd)) ? (
              <IsFalse>비밀번호는 영문 대/소 문자, 숫자, 특수기호를 조합해서 사용하세요.</IsFalse>
            ) : (
              <CheckInfo>
                <span>* </span>
                6~16자, 영문 대.소문자, 숫자, 특수문자 중 2개 이상 사용하세요.
              </CheckInfo>
            )}

            {/* 공백 */}
            <Blank />

            {/* 비밀번호 확인 */}
            <InputPwd 
              placeholder="비밀번호를 한 번 더 적어주세요."
              dataName="confirmPwd"
              updateData={updateData}
            />

            {/* 비밀번호 확인 판별 */}
            {(data.confirmPwd !== "") ? (
              (isValid.isConfirmPwd) ? (
                <IsTrue>비밀번호가 일치합니다.</IsTrue>
              ) : (
                <IsFalse>비밀번호가 일치하지 않습니다.</IsFalse>
              )
            ) : null}

            {/* 버튼 */}
            <ButtonActDeact 
              onClick={handleClick}
              disabled={!((isValid.isPwd) && (isValid.isConfirmPwd))}
            >
              비밀번호 변경
            </ButtonActDeact>

          </MainDivBottom>

        </MainDiv>
      </Main>
    </>
  );
};

export default ChangePwd;


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
  padding-top: 100px;
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
    width: 100%
  }
`;

const Blank = styled.div`
  margin-top: 20px;
`;

const Sub = styled.h3`
  margin-top: 14px;
  color: #9e9e9e;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;