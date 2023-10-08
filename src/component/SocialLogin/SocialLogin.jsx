import { styled } from "styled-components";
import kakaoIconPath from "../../assets/login/symbol-kakao.svg";
// import { ReactComponent as kakaoIconPath } from "../../assets/login/symbol-kakao.svg";
import googleIconPath from "../../assets/login/symbol-google.svg";
import naverIconPath from "../../assets/login/symbol-naver.svg";
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from "./socialLoginUrl";

export default function SocialLogin() {
  const linkToKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const linkToGoogleLogin = () => {
    console.log("google login");
  };
  const linkToNaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  const socialList = [
    { name: "kakao", link: linkToKakaoLogin },
    // { name: "google", link: linkToGoogleLogin },
    { name: "naver", link: linkToNaverLogin },
  ];

  return (
    // <Container>
    //   {socialList.map((social, index) => (
    //     <SocialIconBox key={index} onClick={social.link}>
    //       <IconImg social={social.name}>
    //         <span />
    //       </IconImg>
    //     </SocialIconBox>
    //   ))}
    // </Container>

    <Container className="kakao" onClick={linkToKakaoLogin}>
      <p>
        <img src={kakaoIconPath} alt="카카오톡 아이콘" />
        {/* <kakaoIconPath /> */}
        카카오톡으로 로그인
      </p>
    </Container>
  );
}

const Container = styled.button`
  width: 100%;
  height: 64px;
  display: block;
  display: flex;
  background-color: #FAE100;
  justify-content: center;
  align-items: center;
  gap: 15px; 
  border-radius: 6px;
  /* transition: all, .3s ease-in-out; */
  &.kakao {
    margin: 40px 0 0;
  }
  &:hover {
    /* background-color: #f0e000; */
  }
  > p {
    padding: 0 0 0 30px;
    position: relative;
    color: #371D1E;
    text-align: center;
    font-family: var(--font-hunmin);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 111.111% */
    img {
      width: 22px;
      left: -33px;
      left: 0;
      top: 0; bottom: 0;
      margin: auto;
      position: absolute; 
    }
  }
`;

// const Container = styled.ul`
//   width: 250px;
//   height: 60px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 20px;
//   gap: 15px;
// `;

// const SocialIconBox = styled.li``;

// const IconImg = styled.span`
//   display: flex;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   background-color: ${(props) =>
//     props.social === "kakao"
//       ? "#FAE100"
//       : props.social === "google"
//       ? "#FFFFFF"
//       : "#00C300"};
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: start;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
//     rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
//   cursor: pointer;
//   > span {
//     display: block;
//     width: 100%;
//     height: 100%;
//     background-image: ${(props) =>
//       props.social === "kakao"
//         ? `url(${kakaoIconPath})`
//         : props.social === "google"
//         ? `url(${googleIconPath})`
//         : `url(${naverIconPath})`};
//     background-repeat: no-repeat;
//     background-position: center;
//   }
// `;
