import React from "react";
import { styled } from "styled-components";
import NavBar from "../../component/NavBar/NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <ExDiv>메인페이지입니다.</ExDiv>
    </>
  );
};

export default Main;

const ExDiv = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 200px;
  font-size: 50px;
`;
