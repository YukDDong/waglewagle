import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../component/NavBar/NavBar";
import GuestBook from "../../component/RightSide/GuestBook";
import giwaFrame from "../../assets/common/giwa_frame_img.jpg";
import { ReactComponent as VisitIcon } from "../../assets/common/visit_icon.svg";
import { ReactComponent as Badge } from "../../assets/storage/latest_badge.svg";
import { ReactComponent as ToggleArrow } from "../../assets/common/toggle_arrow.svg";
import giwaData from "../../data/giwaPath";
import MobilePopup from "../../component/MobilePopup/MobilePopup";
import { Mobile } from "../../style/mediaQuery";
import { useSelector } from "react-redux";
import { getGiwaHouseApi, getGiwaListApi } from "../../apis/giwa";
import { useParams, useLocation } from "react-router-dom";
import { koreaDate } from "../../utils/koreaDate";

/* 비교데이터 */
let data = ["기와 목록 최신순", "기와 목록 과거순"];

const StorageGiwa = () => {
  const [showOptions, setShowOptions] = useState(false); // 셀렉트 boolean
  const [openGusetBook, setOpenGusetBook] = useState(false); // 방명록 모달창
  const [selectedGiwa, setSelectedGiwa] = useState(null);
  const [giwaHouse, setGiwaHouse] = useState({}); // 기와집 주인 데이터
  const userInfo = useSelector((state) => state.userReducer);
  const userName = userInfo.username;
  const [giwaList, setGiwaList] = useState([]);
  const [newList, setNewList] = useState(true);
  const { url } = useParams();
  const [selectData, setSelectData] = useState({
    select: "기와 목록 최신순",
    option: "기와 목록 과거순"
  });

  useEffect(() => {
    const requestData = url ? url : userInfo.boardId;
    getGiwaHouseApi(requestData).then((result) => {
      if (result.data.status === "SUCCESS") {
        const giwaHouseData = result.data.data;
        setGiwaHouse(giwaHouseData);
        return;
      } else {
        return;
      }
    });
  }, []);

  useEffect(() => {
    setNewList(true);
    if (!giwaHouse.id) return;
    getGiwaListApi({
      broadId: giwaHouse.id,
      reverse: true,
    })
      .then((result) => {
        if (result.data.status === "SUCCESS") {
          setGiwaList(result.data.data);
        }
        if (result.data.status === "FAIL") {
          setGiwaList([]);
        }
      })
      .catch((error) => {
        console.error("오류:", error);
      });
  }, [giwaHouse]);

  useEffect(() => {
    let boolean;
    if (selectData.select === "기와 목록 최신순") {
      setNewList(true);
      boolean = true;
    } else {
      boolean = false;
      setNewList(false);
    }
    getGiwaListApi({
      broadId: giwaHouse.id,
      reverse: boolean,
    })
      .then((result) => {
        if (result.data.status === "SUCCESS") {
          setGiwaList(result.data.data);
        }
        if (result.data.status === "FAIL") {
          setGiwaList([]);
        }
      })
      .catch((error) => {
        console.error("오류:", error);
      });

  }, [selectData]);

  const openGusetBookModal = (e) => {
    // document.querySelector("html,body").style.cssText = "overflow: hidden; padding: 0 17px 0 0";
    document.querySelectorAll(".giwa_wrap li").forEach(element => {
      element.classList.remove("active");
    });
    e.target.closest("li").classList.add("active");
    setOpenGusetBook(true);
  };
  const closeGusetBookModal = () => {
    // document.querySelector("html,body").style.cssText = "overflow: auto; padding: 0";
    document.querySelectorAll(".giwa_wrap li").forEach(element => {
      element.classList.remove("active");
    });
    setOpenGusetBook(false);
  };

  /* 셀렉트 선택 */
  const handleOnChangeSelectValue = (e) => {
    if (!showOptions) return
    const { innerText } = e.target;
    setSelectData({
      select: data.find(item => item === innerText),
      option: data.filter(item => item !== innerText)
    })
  };

  return (
    <>
      <Mobile>
        {/* pc 최적화 팝업 start */}
        <MobilePopup />
        {/* pc 최적화 팝업 end */}
      </Mobile>
      <NavBar />
      <Container open={openGusetBook} className={openGusetBook ? "on" : null} >
        <AsideTitle>
          <Title>
            <span>{userName}</span>님, <br />
            기와를 이만큼 <br />
            받았다오.
          </Title>
          <p>총 <em>{giwaList.length}</em>개를 받았소.</p>
        </AsideTitle>
        <StorageContain>
          <Nav>
            <NavCont>
              <Link to="/MyPage">마이페이지</Link>
              <VisitIcon />
              <b>보관함</b>
            </NavCont>
            <Select onClick={() => setShowOptions((boolean) => !boolean)} $show={showOptions}>
              <ul>
                <li onClick={handleOnChangeSelectValue}><button>{selectData.select}<ToggleArrow /></button></li>
                <li onClick={handleOnChangeSelectValue}><button>{selectData.option}</button></li>
              </ul>
            </Select>
          </Nav>
          <GiwaWrap className="giwa_wrap">
            {
              giwaList.map((giwa, index) => {
                let giwaCreatedDate = koreaDate(giwa.createdTime);
                return <GiwaLi key={giwa.id}>
                  <button type="button" onClick={e => {
                    openGusetBookModal(e)
                    setSelectedGiwa(giwa.id);
                  }}>
                    <img src={giwaData[giwa.postStyle.shapeCode - 1].imgUrl} alt="이미지" />
                    {(giwaList.length - [index + 1] < 12) && !newList && <em><Badge /></em>}
                    {(index < 12 && newList) && <em><Badge /></em>}
                  </button>
                  <span>{giwaCreatedDate.year}년 {giwaCreatedDate.month}월 {giwaCreatedDate.day}일</span>
                </GiwaLi>
              })
            }
            {
              giwaList.length === 0 && (
                <NoneGiwa>
                  <p>기와가 존재하지 않소! <br /> 기와집을 공유하여 친구들에게 널리알리시오. </p>
                </NoneGiwa>
              )
            }
          </GiwaWrap>
        </StorageContain>
      </Container>

      {/* 방명록 start */}
      <GuestBook
        openGusetBook={openGusetBook}
        xBtnClickHandler={closeGusetBookModal}
        selectedGiwa={selectedGiwa}
        username={userInfo.username}
        setGiwaList={setGiwaList}
      ></GuestBook>
      {/* 방명록 end */}
      {/* <Dimmed open={openGusetBook}></Dimmed> */}
    </>
  );
};

export default StorageGiwa;

const Container = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: 240px 50px 0 50px;
  position: absolute;
  transition: all ease-in-out 1s;
  transform: translate(-50%,0);
  left:50%;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
  &.on {
    transform: translate(calc(-50% - 680px + 20vw),0);
  }
  @media screen and (max-width: 1600px) {
    &.on {
      max-width: 900px;
      transform: translate(calc(-50% - 680px + 18vw),0);
    }
  }
`;

const AsideTitle = styled.div`
  width: 38%;
  float: left;
  p {
    color: #424242;
    font-family: var(--font-hunmin);
    font-size: 22px;
    font-weight: 400;
    margin: 45px 0 0;
    em {
      color: #E75852;
      font-family: var(--font-hunmin-saeron);
      font-weight: 600;
    }
  }
`;

const Title = styled.strong`
  color: #222;
  font-family: var(--font-hunmin);
  font-size: 40px;
  font-weight: 600;
  line-height: 53px;
  span {
    color: #E75852;
  }
`;

const StorageContain = styled.div`
  width: 60%;
  float: right;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px;
`;

const NavCont = styled.div`
  display: flex;
  align-items: center; 
  > a,b {
    color: #616161;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.2px;
  }
  b {
    font-weight: 500;
  }
  > svg {
    margin: 0 17px;
    path {
      stroke: #616161;
    }
  }
`;

const Select = styled.div`
  width: 198px; height: 50px;
  position: relative;
  margin: 0 -3% 0 0;
  /* z-index: 104; // test 후 삭제하기 */
  &:before {
      width: 73%;
      height: 1px;
      display: block;
      position: absolute;
      content: "";
      bottom: -2px; left: 0;
      margin: auto;
      right: 0;
      background-color: #E8E8E8;
    }
  ul {
    overflow: hidden;
    height:${({ $show }) => $show ? "auto" : "50px"}; 
    position: absolute;
    width: 100%;
    top: 0; left: 0;
    background-color: #fff;
    z-index: 1;    
    border-radius: 14px;
    box-shadow: ${({ $show }) => $show ? "3px 3px 10px #e4e1e15a" : "none"}; 
    box-sizing: border-box;
    border: ${({ $show }) => $show ? "1px solid #EAEAEA" : "1px solid transparent"}; 
  }
  li {    
    height: 50px;
    padding: 0 0 0 30px; 
    position: relative;
    display: flex;
    align-items: center;
    &:nth-of-type(1) {
      &:before {
        display: none;
      }
    }
    &:before {
      width: 73%;
      height: 1px;
      display: block;
      position: absolute;
      content: "";
      top: 0; left: 0;
      margin: auto;
      right: 0;
      background-color: #E8E8E8;
    }
    > button {
      width: 100%;
      height: 100%;
      display: block;
      color: ${({ $show }) => $show ? "#B3B3B3" : "B3B3B3"}; 
      font-size: 14px;
      font-weight: 400;
      line-height: 28px; 
      letter-spacing: 0.2px;
      svg {
        position: absolute; right: 17%; 
        margin: auto; bottom: 0; top: 0;
        /* transition: transform, all .25s ease-in-out; */
        transform: ${({ $show }) => $show ? "rotate(0)" : "rotate(-180deg)"}; 
      }
      &:hover {
        color: #535353;
      }
    }
  }
`;

const GiwaWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5.6122%;
`;

const GiwaLi = styled.li`
  width: 29.5918%; 
  margin: 0 0 5.6122%;
  position: relative; 
  transition: all ease-in-out 1s;
  &.on {
    button {
      > em {
        display: block;
      }
    }
  }
  &.active {
    button {
      &:after {        
        background-color: rgba(231, 88, 82, .7);
      }
    }
  }
  > span {
    margin: 5% 0 0;
    float: right;
    color: #757575;
    text-align: right;
    font-family: var(--font-hunmin-saeron);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.2px;
    transition: all ease-in-out 1s;
  }  
  button {
    position: relative;
    overflow: hidden;
    border-radius: 15px;    
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0; left: 0;
      background-color: transparent;
      transition: background-color, .3s ease-in-out;
      pointer-events: none;
    }
    &:hover {
      &:after {        
        background-color: rgba(231, 88, 82, .7);
      }
    } 
    > svg {
      position: absolute;
      width: 38%;
      left: 12%;
      top: 26%; 
      bottom: 0;
      right: 0;
      margin: auto;
    }
    > em {
      /* display: none; */
      width: 30px;
      height: 30px;
      background-color: #E75852;
      position: absolute; left: 12px; top: 12px;
      border-radius: 30px;
      > svg {
        position: absolute;
        margin: auto;
        left: 0;
        top: 0; right: 0;
        bottom: 0;
      }
    }
  }
  img {
    width: 100%;
  }  
`;

const NoneGiwa = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    font-size: 15px;
    display: block;
    line-height: 25px;
    color: #9E9E9E;
  }
`;

const Dimmed = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(32, 32, 32, 0.6);
  transition: all ease-in-out 1s;
  /* display: ${({ open }) => open ? "block" : "none"}; */
  opacity: ${({ open }) => open ? "1" : "0"};
  z-index: ${({ open }) => open ? "100" : "-1"};
  top: 0;
  left: 0;
`;