import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectGiwa } from "../../../redux/actions/giwaActions";
import SelectTitle from "../../SelectTitle/SelectTitle";
import GiwaLuck from "./GiwaLuck";
import { ReactComponent as Hat } from "../../../assets/main/kigHat.svg";
import checkIcon from "../../../assets/common/check_icon.svg";
import selectedGiwaPath from "../../../assets/modal/selected_giwa.svg";

export const giwaPatternItems = [
  {
    id: 1,
    giwaName: "감사",
    imgSrc: "../assets/giwaPattern/thanks.png",
    kind: "한자어",
    desc: (
      <>
        이 기와는 건강한 기운을 주는 기와입니다.
        <br />
        감사한 마음을 표현함으로서, 서로가 건강한 마음을 가지게 됩니다.
        정신적으로 힘든 상태의 사람에게 전해주면 보다 긍정적인 효과를 기대할 수
        있습니다. <br />
        감사는 한자어로 고마움을 나타내는 인사라는 의미를 가지고 있습니다.
      </>
    ),
  },
  {
    id: 2,
    giwaName: "까꿍",
    imgSrc: "../assets/giwaPattern/peep_bo.png",
    kind: "감탄사",
    desc: (
      <>
        이 기와는 까꿍 기와입니다.
        <br />
        네, 그냥 귀여운 기와입니다.
      </>
    ),
  },
  {
    id: 3,
    giwaName: "대박",
    imgSrc: "../assets/giwaPattern/jackpot.png",
    kind: "신조어",
    desc: (
      <>
        이 기와는 운이 상승하는 기와입니다.
        <br /> 열심히해도 그 결과가 만족스럽지 않을 경우, 훗날 그 일이
        재평가되어 큰 운으로 돌아오게 됩니다. <br />
        대박은 신조어로 어떤 일이 크게 이루어짐을 비유적으로 이르는 말이라는
        의미를 가지고 있습니다.
      </>
    ),
  },
  {
    id: 4,
    giwaName: "도란",
    imgSrc: "../assets/giwaPattern/doran.png",
    kind: "순수우리말",
    desc: (
      <>
        이 기와는 대화 전달력이 상승하는 기와입니다.
        <br />
        목소리의 영향력이 없으신 분에게 효과적입니다. 혹은 말의 화가 많아 대화가
        어려운 사람에게 준다면, 감정컨트롤 효과가 높아지고 소통능력이
        향상됩니다.
        <br />
        도란은 순수우리말로 여럿이 나직한 목소리로 정답게 서로 이야기하다라는
        의미를 가지고 있습니다.
      </>
    ),
  },
  {
    id: 5,
    giwaName: "똥",
    imgSrc: "../assets/giwaPattern/poop.png",
    kind: "순수우리말",
    desc: (
      <>
        이 기와는 쾌변을 기원하는 기와입니다.
        <br /> 장이 불편하거나, 규칙적인 바른 똥생활이 필요한 분에게 전해주면
        효과적입니다. 전날 술을 거하게 먹거나, 회식이 많은 사람에게 이 기와를
        전해주면 다음날 편안한 속으로 해장을 할 수 있습니다.
        <br /> 똥은 순수우리말로 글 그대로 똥이라는 의미를 가지고 있습니다.
      </>
    ),
  },
  {
    id: 6,
    giwaName: "사랑",
    imgSrc: "../assets/giwaPattern/love.png",
    kind: "순수우리말",
    desc: (
      <>
        이 기와는 연애운이 상승하는 기와입니다.
        <br />
        이성이 없는 사람에게는 새로운 만남이 생길 확률이 높아집니다. 반대로 이미
        짝이 있는 경우에는, 오히려 금술이 단단해져 결혼할 기회까지 오게 됩니다.
        <br />
        사랑은 순수우리말로 사람이나 존재를 몹시 아끼고 귀중히 여기는 마음이라는
        의미를 가지고 있습니다.
      </>
    ),
  },
  {
    id: 7,
    giwaName: "슈룹",
    imgSrc: "../assets/giwaPattern/schurm.png",
    kind: "옛말",
    desc: (
      <>
        이 기와는 액운을 막아주는 기와입니다.
        <br />
        액운이 떨어져도, 우산에 떨어지는 비처럼 자연스럽게 옆으로 흘러가게
        해줍니다. 어려운일에 있는 사람에게 주었을 경우 빠른 시일 내에 그 일이
        마무리 될 확률이 높아집니다.
        <br />
        슈룹은 옛말로 우산이라는 의미를 가지고 있습니다.
      </>
    ),
  },
  {
    id: 8,
    giwaName: "올차다",
    imgSrc: "../assets/giwaPattern/all_cha_da.png",
    kind: "순수우리말",
    desc: (
      <>
        이 기와는 밝은 기운이 생기는 기와입니다.
        <br />
        기운이 없는 사람에게 이 기와에 글을 쓰게 되면, 밝은 기운이 상승하게
        됩니다. 너무 밝은 사람에게 사용할 경우 밤을 지새울 수 있을 정도로
        에너지가 넘치게 됩니다.
        <br />
        올차다의 뜻은 순수 우리말로 허술한 데가 없이 야무지고 기운차다는 의미를
        가지고 있습니다.
      </>
    ),
  },
  {
    id: 9,
    giwaName: "잇힝",
    imgSrc: "../assets/giwaPattern/it_hing.png",
    kind: "감탄사",
    desc: (
      <>
        이 기와는 짱친함을 보여주는 기와입니다.
        <br />
        친한 친구 사이에서 많이 사용되는 기와중 하나입니다.
      </>
    ),
  },
  {
    id: 10,
    giwaName: "존경",
    imgSrc: "../assets/giwaPattern/respect.png",
    kind: "한자어",
    desc: (
      <>
        이 기와는 의지를 주는 기와입니다.
        <br /> 삶의 자신이 없거나, 업에 대한 회의감이 드는 사람에게 사용할 경우
        강한 의지력을 전달해줄 수 있습니다. 반대로 이미 그러한 상태의 사람에게
        사용할 경우에는 세상을 바꿀 힘을 가져다 줄 수도 있습니다.
        <br /> 존경은 한자어로 고남의 인격, 사상, 행위 따위를 받들어 공경함라는
        의미를 가지고 있습니다.
      </>
    ),
  },
  {
    id: 11,
    giwaName: "차롱",
    imgSrc: "../assets/giwaPattern/charong.png",
    kind: "방언",
    desc: (
      <>
        이 기와는 인복이 상승하는 기와입니다. <br />빈 바구니에 다양한 것을 담을
        수 있듯이 다양한 사람을 만나 이야기를 듣게 되는 운이 들어오는 운입니다.
        새로운 인복이 필요하거나, 외로움이 많은 사람 혹은 삶의 지루함을 느낀
        사람에게 이 기와가 갈 경우 효과적입니다. <br />
        차롱은 방언으로 채롱이라는 의미를 가지고 있습니다. 채롱은 아름다운
        색깔로 꾸민 바구니라는 뜻입니다.
      </>
    ),
  },
  {
    id: 12,
    giwaName: "합격",
    imgSrc: "../assets/giwaPattern/pass.png",
    kind: "한자어",
    desc: (
      <>
        이 기와는 합격운이 상승하는 기와입니다.
        <br />
        중요한 시험을 준비하거나, 결과를 기다릴 경우에 좋은 운을 가져다 줍니다.
        본인이 공부한 것, 체크한 부분에 대해서 문제가 나올 가능성이 높아집니다.
        이 기와의 경우 본인이 노력한 것에 대한 결과를 받을 수 있을 뿐, 의외의
        높은 결과를 기대하긴 어렵습니다.
        <br />
        합격은 한자어로 시험, 검사, 심사 따위에서 일정한 조건을 갖추어 어떠한
        자격이나 지위 따위를 얻음라는 의미를 가지고 있습니다.
      </>
    ),
  },
];

const SelectGiwa = () => {
  const dispatch = useDispatch();
  const selectedGiwa = useSelector((state) => state.giwaReducer);

  const handleSelectGiwa = (id) => {
    dispatch(selectGiwa(id));
  };

  const objectSelectedGiwa = giwaPatternItems.find((item) => {
    return item.id === selectedGiwa.number;
  });

  return (
    <Container>
      <LeftBox>
        {selectedGiwa.number ? (
          <GiwaLuck giwaItems={objectSelectedGiwa} />
        ) : (
          <>
            <Hat />
            <Text>
              기와 무늬에는 의미가 있오.
              <br />
              옆에 기와를 선택해 보시오!
            </Text>
          </>
        )}
      </LeftBox>
      <RightBox>
        <SelectTitle title={"기와무늬"} fontSize="18px" />
        <PatternBox>
          <div>
            {giwaPatternItems.map((item) => {
              return (
                <GiwaItemBox
                  key={item.giwaName}
                  onClick={() => {
                    handleSelectGiwa(item.id);
                  }}
                  $isClicked={item.id === selectedGiwa.number}
                >
                  {item.id === selectedGiwa.number ? (
                    <ClickedBox></ClickedBox>
                  ) : null}
                  <img src={item.imgSrc} alt="" />
                </GiwaItemBox>
              );
            })}
          </div>
        </PatternBox>
      </RightBox>
    </Container>
  );
};

export default SelectGiwa;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 36px 13px 37px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const LeftBox = styled.div`
  width: 50%;
  height: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 23px;
`;

const RightBox = styled.div`
  width: 440px;
  height: 365px;
`;

const Text = styled.p`
  color: #bbb;
  text-align: center;
  font-family: var(--font-hunmin);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
`;

const PatternBox = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 20px;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding: 30px 12px 0 30px;
  > div {
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
    box-sizing: border-box;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    /* 수직 스크롤바 스타일 */
    &::-webkit-scrollbar {
      box-sizing: border-box;
      width: 8px; /* 스크롤바 너비 */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #fff; /* 스크롤바 색상 */
      border-radius: 4px; /* 스크롤바 모서리 둥글게 */
      border: 1px solid rgba(170, 170, 170, 0.1);
      /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* 마우스 호버 시 스크롤바 색상 변경 */
    }
    /* Firefox에서도 스크롤바 스타일 적용 */
    /* 수직 스크롤바 스타일 */
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  }
`;

const GiwaItemBox = styled.button`
  width: 110px;
  height: 110px;
  border-radius: 6px;
  background-color: #f4f4f4;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
`;

export const ClickedBox = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: 2px solid #1748c1;
  background-color: rgba(23, 71, 193, 0.2);
  &:after {
    content: "";
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 40px;
    box-shadow: 2px 2px 10px rgba(3, 22, 75, 0.363);
    background: #1748c1 url(${checkIcon}) 50% 50% no-repeat;
  }
`;
