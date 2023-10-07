import React from 'react';
import styled from 'styled-components';
import Button from '../../component/Button/Button';
import Title from "../../component/Title/Title";
import NavBar from '../../component/NavBar/NavBar';
import MobilePopup from "../../component/MobilePopup/MobilePopup";
import { Mobile } from "../../style/mediaQuery";

const Withdrawal = () => {
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
          <Title title="회원을 탈퇴하실 건가요?ㅠㅠ" />
          <Sub>회원 탈퇴후 기와집에 등록된 모든 기와는 삭제됩니다.</Sub>
          <Button>
            회원 탈퇴 하기
          </Button>
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