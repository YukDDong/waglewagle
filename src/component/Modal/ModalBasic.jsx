
import { styled } from "styled-components";

function ModalBasic({ msg, buttonText, onClickBtn = () => { }, visibleFtn, linkPath }) {

  const onClick = () => {
    // 기능
    onClickBtn();
    // modal 제거
    // visibleFtn(false);
  }

  return (
    <ModalBg>
      <ModalMain>
        <ModalTop>
          {msg.split('\n').map(line => <p>{line}</p>)}
        </ModalTop>
        <ModalBottom onClick={onClick}>
          {buttonText}
        </ModalBottom>
      </ModalMain>
    </ModalBg >
  );
}

export default ModalBasic;

const ModalBg = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(32, 32, 32, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  top: 0;
  left: 0;
`;

const ModalMain = styled.div`
  width: 340px;
  height: 180px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const ModalTop = styled.div`
  width: 100%;
  height: 118px;
  border-bottom: 1px solid #eee;
  text-align: center;
  line-height: 24px;
  color: #222;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.64px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  > p {
    width: 100%;
    margin: 0 auto;
  }
`;

const ModalBottom = styled.button`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-hunmin);
  font-weight: 400;
  color: #e75852;
  font-size: 20px; 
  transition: all, .2s ease-in-out;  
  &:hover {
    background-color: #e75852;
    color: #fff;
  }
  > a {
    text-decoration: none;
    color: #e75852;
    text-align: center;
    font-family: var(--font-hunmin);
    font-size: 20px;
  }
`;