import styled from "styled-components";
import giwaRow from "../../assets/common/giwa_row.png";

const MobilePopup = () => {
  return (
    <Container>
      <div>
        <img src={giwaRow} alt="기와 이미지" />
        <Text>
          <strong>
            와글와글은 <span>PC</span>에 <br />
            최적화 되어있습니다!
          </strong>
          <p>
            베타기간에는 해당 서비스를 <br />
            PC에서만 이용하는 것을 추천드립니다.
          </p>
        </Text>
      </div>
    </Container>
  );
};

export default MobilePopup;


const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0; left: 0;
  height: 100vh;
  display: flex;
  background-color: #FFFEF7;
  align-items: end;
  z-index: 6;
  > div {
    width: 100%;
    height: 75vh;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    > img {
      width: 100%;
      position: absolute;
      top: -20vw;
      left: 0;
    }
  }
`;

const Text = styled.div`  
  padding: 0 0 2vh;
  strong {
    color: #000;
    font-family: var(--font-hunmin);
    font-size: 6.3vw;
    font-weight: 600;
    line-height: 7.8vw;
    span {
      color: var(--btn-main-color);
    }
  }
  p {
    margin: 5vw 0 0;
    color: #000;
    font-size: 4.2vw;
    font-weight: 500;
    line-height: 6.7vw;
  }
`;