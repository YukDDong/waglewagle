import { styled } from "styled-components";
import kakaoIconPath from "../../assets/symbol-kakao.svg";
import googleIconPath from "../../assets/symbol-google.svg";
import naverIconPath from "../../assets/symbol-naver.svg";

export default function SocialLogin() {
  const socialList = ["kakao", "google", "naver"];
  return (
    <Container>
      {socialList.map((social, index) => (
        <SocialIconBox key={index}>
          <IconImg social={social}>
            <span />
          </IconImg>
        </SocialIconBox>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  width: 250px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const SocialIconBox = styled.li``;

const IconImg = styled.span`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.social === "kakao"
      ? "#FAE100"
      : props.social === "google"
      ? "#FFFFFF"
      : "#00C300"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: start;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  cursor: pointer;
  > span {
    display: block;
    width: 100%;
    height: 100%;
    background-image: ${(props) =>
      props.social === "kakao"
        ? `url(${kakaoIconPath})`
        : props.social === "google"
        ? `url(${googleIconPath})`
        : `url(${naverIconPath})`};
    background-repeat: no-repeat;
    background-position: center;
  }
`;
