import React, { useEffect } from "react";
import { styled } from "styled-components";
import NavBar from "../../component/NavBar/NavBar";
import { Link } from "react-router-dom";
import { jwtTestApi } from "../../apis/user";

const Main = () => {
  useEffect(() => {
    // jwt토큰을 넣어서 get요청하는 api호출
    jwtTestApi().then((result) => {
      alert(result.data);
    });
  }, []);
  return (
    <>
      <NavBar />
      <ExDiv>
        <p>메인페이지입니다.</p>
        <Link to="/sample">샘플페이지로 이동</Link>
      </ExDiv>
    </>
  );
};

export default Main;

const ExDiv = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 200px;
  font-size: 50px;
  gap: 50px;
`;
