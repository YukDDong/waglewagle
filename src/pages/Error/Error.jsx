import styled from "styled-components";
import errorImg from "../../assets/common/error_img.png";
import ButtonBasic from "../../component/Button/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={errorImg} alt="404 에러 이미지" />
      <strong>페이지를 찾을 수 없습니다.</strong>
      <p>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br />입력하신 주소가 정확한지 다시 한 번 확인해주세요.</p>
      <ButtonBasic color="white" onClick={() => {
        navigate('/main');
      }}>메인으로 돌아가기</ButtonBasic>
    </Container>
  );
};

export default Error;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 316px;
    margin: 0 0 0 45px;
  }
  button {
    width: 378px;
  }
  strong {
    margin: 14px 0 0;
    color: #222;
    text-align: center;
    font-family: var(--font-hunmin);
    font-size: 34px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px;
    }
  p {
    margin: 20px 0 0;
    color: #9E9E9E;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
`;