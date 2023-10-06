import { styled } from "styled-components";
import { useBgColor } from "../../contexts/BackgroundColor";
import pineTreeLeft from "../../assets/main/pine_tree_left.png";
import pineTreeRight from "../../assets/main/pine_tree_right.png";
import cloudLeft from "../../assets/main/cloud_1.png";
import cloudCenter from "../../assets/main/cloud_2.png";
import cloudRight from "../../assets/main/cloud_3.png";
import cloudNightLeft from "../../assets/main/cloud_night_1.png";
import cloudNightCenter from "../../assets/main/cloud_night_2.png";
import cloudNightRight from "../../assets/main/cloud_night_3.png";
import moon from "../../assets/main/moon.png";

const MainBg = ({ openMakeup, openGusetBook, background }) => {
  // const { bgColor } = useBgColor();
  const bgColor = background;
  console.log(bgColor)
  return (
    <BgContainer className={openMakeup || openGusetBook ? "left" : null}>
      <BgWrap className={bgColor ? "day bg_wrap" : "night bg_wrap"}>
        <div>
          <figure>
            <img src={cloudLeft} alt="왼쪽 구름" />
            <img src={cloudCenter} alt="센터 구름" />
            <img src={cloudRight} alt="오른쪽 구름" />
          </figure>
        </div>
        <div>
          {!bgColor && <img src={moon} alt="달" className="moon" />}
          <figure>
            <img src={cloudNightLeft} alt="왼쪽 구름" />
            <img src={cloudNightCenter} alt="센터 구름" />
            <img src={cloudNightRight} alt="오른쪽 구름" />
          </figure>
        </div>
      </BgWrap>
      <Tree className="tree">
        <img src={pineTreeLeft} alt="왼쪽 소나무" />
        <img src={pineTreeRight} alt="오른쪽 소나무" />
      </Tree>
    </BgContainer>
  );
};

export default MainBg;

const BgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  &.left {
    .bg_wrap {
      left: calc(50% - 310px);
    }
    .tree {
      img:nth-of-type(1) {
        left: -15%;
      }
    }
  }
`;

const BgWrap = styled.div`
  width: 100%;
  min-width: 1920px;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);    
  transition: all ease-in-out 1s;
  .moon {
    position: absolute;
    left: -1px;
    top: -110px;
    z-index: 1;
  }
  &.day {
    > div:nth-of-type(1) { opacity: 1; }
    > div:nth-of-type(2) { opacity: 0; }
  }
  &.night {
    > div:nth-of-type(1) { opacity: 0; }
    > div:nth-of-type(2) { opacity: 1; }
  }
  figure {
    img {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      &:nth-of-type(1) {
        left: 1%;
        top: -55%;
      }
      &:nth-of-type(2) {
        top: -65%;
        left: -1%;
        right: 0;
      }
      &:nth-of-type(3) {
        right: -60px;
        top: -50%;
      }
    }
  }
`;

export const Tree = styled.div`
  min-width: 1800px;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  z-index: 2;
  transform: translate(-50%, 0);
  pointer-events: none;
  > img {
    position: absolute;
    transition: all ease-in-out 1s;
    &:nth-of-type(1) {
      left: -50px;
      bottom: -10%;
      position: absolute;
    }
    &:nth-of-type(2) {
      right: -70px;
      top: 20%;
      z-index: -1;
    }
  }
`;
