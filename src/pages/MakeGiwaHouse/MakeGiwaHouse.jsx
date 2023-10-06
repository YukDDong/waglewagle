import React, { useState } from "react";
import styled from "styled-components";
import RightSide from "../../component/RightSide/RightSide";
import haetaeImg from "../../assets/main/haetae_img.png";
import mainHouseIndigo from "../../assets/main/giwa_house_indigo.png";
import mainHouseBlack from "../../assets/main/giwa_house_black.png";
import mainHousePink from "../../assets/main/giwa_house_pink.png";
import pineTreeLeft from "../../assets/main/pine_tree_left.png";
import taegeukgi from "../../assets/main/taegeukgi.png";
import { useSelector } from "react-redux";
import { ExDiv, StyledMain, HouseBox } from "../Main/Main";
import MainBg from "../../component/MainBg/MainBg";

const MakeGiwaHouse = () => {
  const giwaHouseStyle = useSelector((state) => state.giwaHouseReducer);

  const mainHousePath = () => {
    switch (giwaHouseStyle.giwaColor) {
      case 1:
        return mainHouseIndigo;
      case 2:
        return mainHouseBlack;
      case 3:
        return mainHousePink;
      default:
        break;
    }
  };
  return (
    // 배경이 추가 될 것을 감안한다면 true, false 보다는 값을 주는게 더 좋아보입니다!  -> 넵!! 확인했습니당!!
    // 일단 지금은 2개밖에 없으니 true, false로 처리할게요
    <ExDiv $bgColor={giwaHouseStyle.background === 1 ? true : false}>
      <StyledMainCustom>
        <div>
          <HouseBox
            $houseImg={mainHousePath()}
          >
            <img className="heatae" src={haetaeImg} alt="해태" />
            <img className="taegeukgi" src={taegeukgi} alt="태극기" />
          </HouseBox>
        </div>
      </StyledMainCustom>
      <RightSide openMakeup={true} btnText={"기와집 만들기 완료"}></RightSide>
      <MainBg
        background={giwaHouseStyle.background === 1 ? true : false}
        openMakeup={true}
      />
    </ExDiv>
  );
};

export default MakeGiwaHouse;

const StyledMainCustom = styled(StyledMain)`
  > div {
    left: -500px;
  }
`;