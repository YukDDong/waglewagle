import React, { useState } from "react";
import Modal from "./Modal";
import { styled } from "styled-components";
import { ReactComponent as XBtn } from "../../assets/x-menu.svg";
import Button from "../Button/Button";

const GiwaModal = ({ onXBtnClick }) => {
  const [pageNum, setPageNum] = useState(1);

  return (
    <Modal>
      <ChooseBox>
        <XBtnBox>
          <XBtn width={36} height={36} fill="black" onClick={onXBtnClick} />
        </XBtnBox>
        {pageNum === 1 ? (
          <>
            <TitleField>
              <span>하나.</span> 기와를 선택해 주시오.
            </TitleField>
            <div></div>
            <GiwaBtn
              onClick={() => {
                setPageNum(2);
              }}
            >
              기와를 선택해 주시오.
            </GiwaBtn>
          </>
        ) : (
          <>
            <TitleField>
              <span>둘.</span> 방명록을 써주시오.
            </TitleField>
            <div></div>
            <ExDiv>
              <GiwaBtn
                onClick={() => {
                  alert("작성 완료");
                }}
              >
                방명록 작성 완료
              </GiwaBtn>
            </ExDiv>
          </>
        )}
      </ChooseBox>
    </Modal>
  );
};

export default GiwaModal;

const ChooseBox = styled.div`
  width: 1100px;
  height: 660px;
  background-color: #fff;
  padding: 70px 80px 50px 80px;
  border-radius: 30px;
  position: relative;
`;

const XBtnBox = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  right: 40px;
  top: 40px;
`;

const TitleField = styled.h2`
  width: 100%;
  padding-bottom: 14px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 30px;
  font-family: var(--font-hunmin);
  font-size: 32px;
  color: #222;
  > span {
    font-size: 22px;
    color: #1748c1;
  }
`;

const ExDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const BackBtn = styled.button``;

const GiwaBtn = styled.button`
  width: 300px;
  height: 54px;
  border-radius: 10px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bbb;
  font-family: var(--font-hunmin);
  font-size: 20px;
  font-weight: 400;
`;
