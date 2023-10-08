import React from 'react';
import { useState } from "react";
import styled from 'styled-components';
import Button from '../../component/Button/Button';
import Title from "../../component/Title/Title";
import NavBar from '../../component/NavBar/NavBar';
import MobilePopup from "../../component/MobilePopup/MobilePopup";
import { Mobile } from "../../style/mediaQuery";
import { withdrawalApi } from "../../apis/user";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import { removeItem } from "../../utils/storage";
import ModalBasic from "../../component/Modal/ModalBasic";

const Withdrawal = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector(state=>state.userReducer);

  // 로그아웃
  const logoutBtnClick = (e) => {
    dispatch(logout());
    removeItem("AUTH");
    removeItem("USERINFO");
    removeItem("autoLogin");
    navigate("/login");
  };

  // 회원 탈퇴 처리
  const onSubmit = () => {

    // 회원탈퇴 api 요청
    withdrawalApi(userInfo.userId).then((result) => {

      // Modal 띄우기
      visibleFtn(true);
    });
  }

  //// visibleModal

  // 변수
  const [visibleModal, setVisibleModal] = useState(false);

  // 함수
  const visibleFtn = (value) => {
    setVisibleModal(value);
  };

  return (
    <>
      <Mobile>
        {/* pc 최적화 팝업 start */}
        <MobilePopup />
        {/* pc 최적화 팝업 end */}
      </Mobile>
      <NavBar />

      {/* Modal */}
      {(visibleModal)
        ? <ModalBasic
          msg = {"회원탈퇴가 완료되었습니다."}
          buttonText="확인"
          visibleFtn={visibleFtn}
          onClickBtn={logoutBtnClick}
        />
        : null}

      <Main>
        <MainDiv>
          <Title title="회원을 탈퇴하실 건가요?ㅠㅠ" />
          <Sub>회원을 탈퇴하면 기와집에 등록된 모든 기와는 삭제됩니다.</Sub>
          <Button onClick={onSubmit}>회원 탈퇴</Button>
        </MainDiv>
      </Main>
    </>
  );
};

export default Withdrawal;

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
    width: 438px;
    margin: 70px 0 20px;
  }
`;

const Sub = styled.h3`
  margin-top: 30px;
  color: #9e9e9e;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;