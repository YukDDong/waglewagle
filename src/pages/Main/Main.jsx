import React from "react";
import { styled } from "styled-components";
import NavBar from "../../component/NavBar/NavBar";
import mainBg from "../../assets/bg_main.png";
import mainHouse from "../../assets/main_house.png";
import RightSide from "../../component/RightSide/RightSide";

const Main = () => {
  return (
    <>
      {/* <NavBar /> */}
      <ExDiv>
        <StyledMain>
          <HouseBox></HouseBox>
        </StyledMain>
        <RightSide></RightSide>
      </ExDiv>
    </>
  );
};

export default Main;

const ExDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${mainBg});
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HouseBox = styled.div`
  width: 800px;
  height: 700px;
  margin-left: 100px;
  background: url(${mainHouse}) no-repeat;
  background-size: 800px 700px;
  margin-top: 100px;
`;
