import React from "react";
import styled from "styled-components";
import NavBar from "../../component/NavBar/NavBar";
import { Link } from "react-router-dom";
import { ReactComponent as Kakao } from "../../assets/common/kakao.svg";
import MobilePopup from "../../component/MobilePopup/MobilePopup";
import { Mobile } from "../../style/mediaQuery";
import { useSelector } from "react-redux";

const MyPage = () => {
  // 데이터 불러오기
  const userInfo = useSelector((state) => state.userReducer);

  return (
    <>
      <Mobile>
        {/* pc 최적화 팝업 start */}
        <MobilePopup />
        {/* pc 최적화 팝업 end */}
      </Mobile>
      <NavBar />
      <Main>
        <Contain>
          <TitleWrap>
            <Title>
              <span>{userInfo.username}</span>님, <br />
              안녕하시오.
            </Title>
            <JoinEmeil>
              {/* 카카오 아이콘 */}
              {userInfo.memberType == "KAKAO" ? (
                <Kakao />
              ) : (
                <span>{userInfo.email}</span>
              )}
            </JoinEmeil>
          </TitleWrap>
          <NavWrap>
            <li>
              <Link to="/StorageGiwa">
                <span>01.</span>
                <b>보관함</b>
                <em>&gt;</em>
              </Link>
            </li>
            <li>
              <Link to="/Setting">
                <span>02.</span>
                <b>설정</b>
                <em>&gt;</em>
              </Link>
            </li>
          </NavWrap>
        </Contain>
      </Main>
    </>
  );
};

export default MyPage;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contain = styled.div`
  width: 990px;
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.device.mobile} {
    width: 100vw;
    overflow: hidden;
  }
`;

const TitleWrap = styled.div`
  padding: 5px 0 0;
`;

const Title = styled.strong`
  color: #222;
  font-family: var(--font-hunmin);
  font-size: 46px;
  line-height: 60px;
  font-weight: 600;
  span {
    color: #e75852;
  }
`;

const JoinEmeil = styled.strong`
  padding: 28px 0 0;
  display: flex;
  align-items: center;
  > svg {
    margin: 0 10px 0 0;
  }
  span {
    color: #9e9e9e;
    font-size: 22px;
    font-weight: 400;
  }
`;

const NavWrap = styled.ul`
  li {
    width: 520px;
    font-family: var(--font-hunmin);
    border-bottom: 1px solid #e0e0e0;
    a {
      width: 100%;
      height: 100%;
      display: block;
      position: relative;
      padding: 29px 0 29px 10px;
      &:hover {
        span {
          color: #e75852;
        }
        b {
          color: #e75852;
        }
      }
    }
    span {
      font-size: 28px;
      color: #000;
      transition: color, 0.2s ease-in-out;
    }
    b {
      margin: 0 0 0 10px;
      color: #000;
      font-size: 42px;
      font-weight: 400;
      transition: color, 0.2s ease-in-out;
    }
    em {
      height: fit-content;
      position: absolute;
      color: #000;
      font-family: var(--font-hunmin);
      font-size: 24px;
      font-weight: 400;
      right: 30px;
      margin: auto;
      bottom: 0;
      top: 0;
    }
  }
`;
