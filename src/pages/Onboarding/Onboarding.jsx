import { useRef, useEffect } from "react";
import { styled } from "styled-components";
import gsap from "gsap";
import onboardingBg from "../../assets/onBoarding/onboarding_img.jpg";
import house from "../../assets/onBoarding/house.png";
import Layer1 from "../../assets/onBoarding/layer_1.png";
import Layer2 from "../../assets/onBoarding/layer_2.png";
import Layer3 from "../../assets/onBoarding/layer_3.png";
import { ReactComponent as Logo } from "../../assets/common/logo.svg";
import MobilePopup from "../../component/MobilePopup/MobilePopup";
import { Mobile } from "../../style/mediaQuery";

const Onboarding = () => {
  const houseRef = useRef(), layerRef1 = useRef(), layerRef2 = useRef(), layerRef3 = useRef();
  const titleRef = useRef(), buttonRef = useRef();
  const state = { y: 0, delay: -.6, opacity: 1 };

  const moveToLogin = () => {
    window.location.pathname = "/login";
  };

  useEffect(() => {
    const houseLayerTimeline = gsap.timeline({ repeatDelay: 1 });
    houseLayerTimeline.to(layerRef3.current, .8, { y: 0, opacity: 1 })
      .to(layerRef2.current, .8, state)
      .to(layerRef1.current, .8, state)
  }, []);

  return (
    <>
      <Mobile>
        {/* pc 최적화 팝업 start */}
        <MobilePopup />
        {/* pc 최적화 팝업 end */}
      </Mobile>
      <OnboardingMain>
        <TitleContain>
          <Title ref={titleRef}>
            <Logo width={140} height={30} />
            <strong>한글날 기념 소통창, <br />와글와글이랑 함께해요! </strong>
            <div>
              <p>
                와글와글은 한글날을 기념하기 위한 소통창입니다. <br />
                기와의 ‘와’ 랑 한글의 ‘글’을 합쳐 와글와글이란 이름이 탄생하게 되었습니다.
              </p>
              <p>
                와글와글의 사전적 의미는 <br />
                <em>‘ 사람이 한곳에 많이 모여 잇따라 떠들거나 움직이는 소리 또는 그 모양 ’</em>
                이라는 의미를 담고 있어 이곳에서  많은 사람들이 <br />
                한글날을 기억하며, ‘와글와글’ 떠들기 바랍니다.
              </p>
              <span> 
                <em>◆</em>                
                와글와글 서비스는 10월 9일부터 10월 15일까지 운영하여, 서비스 이용 시 참고 부탁드립니다.</span>
            </div>
          </Title>
          <ButtonWrap>
            <button ref={buttonRef} type="button" onClick={moveToLogin}>와글와글 시작하기</button>
          </ButtonWrap>
          <HouseWrap>
            <img src={house} alt="기와집" ref={houseRef} />
            <img src={Layer1} alt="레이어1" ref={layerRef1} />
            <img src={Layer2} alt="레이어2" ref={layerRef2} />
            <img src={Layer3} alt="레이어3" ref={layerRef3} />
          </HouseWrap>
        </TitleContain>
      </OnboardingMain>
    </>
  );
};
export default Onboarding;

const OnboardingMain = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background: url(${onboardingBg}) 50% 50% no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const Title = styled.div`
  strong {
    margin: 28px 0 0;
    display: block;
    font-family: var(--font-hunmin);
    font-weight: 600;
    color: #222;
    font-size: 40px;
    line-height: 52px;
  }
  > div {
    padding: 50px 0 0;
    p {
      &:nth-of-type(1) {}
      &:nth-of-type(2) {
        margin: 30px 0 0;
      }
      font-weight: 400;
      color: #424242;
      font-size: 20px;
      line-height: 35px;
      font-style: normal;
      letter-spacing: -1px;
      > em {
        display: block;
        font-weight: 600;
      }
    }
    > span {
      display: block;
      margin: 32px 0 0;
      color: #1C3A85;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.8px;
      > em {
        position: relative;
        top: -2px;
        margin: 0 5px 0 0;
        font-size: 8px;
      }
    }
  }
`;

const TitleContain = styled.div`
  width: 1280px;
  position: relative;
  margin: 0 auto;
`;

const ButtonWrap = styled.div`
  button {
    height: 64px;
    font-family: var(--font-hunmin);
    font-weight: 600; 
    padding: 21px 56px; 
    margin: 50px 0 0;
    box-sizing: border-box; 
    color: white;
    font-size: 20px;    
    border-radius: 6px;
    background-color: var(--btn-main-color);
    transition: all, .3s;
    &:hover { background-color: #D24640; }
  }
`;

const HouseWrap = styled.div`
  position: absolute; left: 770px; top: 235px;  
  img {
    position: absolute; 
    opacity: 0;
    transform: translate(0, 50px);
    &:nth-of-type(1) { 
      position: relative; 
      opacity: 1;
      transform: translate(0, 0);
    }
    &:nth-of-type(2) { top: -388px; left: 272px; }
    &:nth-of-type(3) { top: -339px; left: 38px; }
    &:nth-of-type(4) { top: -140px; left: 183px; }
  }  
`