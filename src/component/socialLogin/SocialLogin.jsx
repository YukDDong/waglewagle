import { styled } from "styled-components";

export default function SocialLogin() {
  return (
    <Container>
      <SocialIconBox>
        <IconImg social="kakao" />
      </SocialIconBox>
      <SocialIconBox>
        <IconImg social="google" />
      </SocialIconBox>
      <SocialIconBox>
        <IconImg social="naver" />
      </SocialIconBox>
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
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: ${(props) => {
    if (props.social === "kakao") {
      return "url('https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_narrow.png')";
    } else if (props.social === "google") {
      return "url('https://cdn.icon-icons.com/icons2/2699/PNG/512/google_tile_logo_icon_170069.png')";
    } else {
      return "url('http://lab.anybuild.co.kr/API/naver/img/naver_g_a_login.PNG')";
    }
  }};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: start;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  cursor: pointer;
`;
