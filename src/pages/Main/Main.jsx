import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import NavBar from "../../component/NavBar/NavBar";
import RightSide from "../../component/RightSide/RightSide";
import GuestBook from "../../component/RightSide/GuestBook";
import GiwaModal from "../../component/Modal/GiwaModal/GiwaModal";
import Completed from "../../component/Popup/Completed";
import BottomSide from "../../component/BottomSide/BottomSide";
import GiwaButton from "../../component/GiwaButton/GiwaButton";
import MainBg from "../../component/MainBg/MainBg";
import haetaeImg from "../../assets/main/haetae_img.png";
import taegeukgi from "../../assets/main/taegeukgi.png";
import mainHouseIndigo from "../../assets/main/giwa_house_indigo.png";
import mainHouseBlack from "../../assets/main/giwa_house_black.png";
import mainHousePink from "../../assets/main/giwa_house_pink.png";
import Capture from "../../component/Popup/Capture";
import Speech from "../../component/Speech/Speech";
import { useParams, useLocation } from "react-router-dom";
import { getGiwaHouseApi, getGiwaListApi } from "../../apis/giwa";
import { useSelector, useDispatch } from "react-redux";
import ModalBasic from "../../component/Modal/ModalBasic";
import Warning from "../../component/Warning/Warning";
import html2canvas from "html2canvas";
import { getGiwaHouse } from "../../redux/actions/giwaHouseActions";
import { getItem } from "../../utils/storage";
import { EventSourcePolyfill } from "event-source-polyfill";
import MobilePopup from "../../component/MobilePopup/MobilePopup";
import { Mobile } from "../../style/mediaQuery";
import CopyLink from "../../component/Popup/CopyLink";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Main = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { url } = useParams();
  const userInfo = useSelector((state) => state.userReducer);
  const giwaHouseStyle = useSelector((state) => state.giwaHouseReducer);
  const [openModal, setOpenModal] = useState(false); // 기와선택
  const [openNav, setOpenNav] = useState(true); // 네비
  const [openMakeup, setOpenMakeup] = useState(false); // 기와집 꾸미기
  const [openGusetBook, setOpenGusetBook] = useState(false); // 방명록 모달창
  const [copyLinkPop, setCopyLinkPop] = useState(false); // 링크복사 팝업창
  const [capturePopBol, setCapturePopBol] = useState(false); // 캡쳐 팝업창
  const [completedGiwa, setCompletedGiwa] = useState(false); // 기와 등록 팝업창
  const [completedGiwaHouse, setCompletedGiwaHouse] = useState(false); // 기와집 등록 팝업창
  const [giwaHouse, setGiwaHouse] = useState({}); //기와집 상태관리
  const [selectedGiwa, setSelectedGiwa] = useState(null);
  const [giwaList, setGiwaList] = useState([]);
  const [isVisitorClick, setIsVisitorClick] = useState(false);
  const [giwaAddOut, setgiwaAddOut] = useState(false); // 기와 등록 중 나가기
  const captureDivRef = useRef();
  const [img, setImg] = useState();
  const [initGiwaHouse, setInitGiwaHouse] = useState();
  const previousPath = location.state ? location.state.from : null;
  const token = getItem("AUTH");
  const navigate = useNavigate();

  /* 널리알리기 - URL 클립보드 복사하기 */
  useEffect(() => {
    let LinkCopy;
    if (copyLinkPop) {
      let textarea = document.createElement("textarea");
      document.body.appendChild(textarea);
      LinkCopy = `${window.location.href}/${giwaHouse.url}`;
      textarea.value = LinkCopy;
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  }, [copyLinkPop]);

  useEffect(() => {
    const requestData = url ? url : userInfo.boardId;
    getGiwaHouseApi(requestData).then((result) => {
      if (result.data.status === "SUCCESS") {
        const giwaHouseData = result.data.data;
        setGiwaHouse(giwaHouseData);
        dispatch(
          getGiwaHouse({
            giwaColor: giwaHouseData.broadStyle.colorCode,
            background: giwaHouseData.broadStyle.backGroundCode,
            friend: giwaHouseData.broadStyle.friendCode,
          })
        );
        setInitGiwaHouse({
          giwaColor: giwaHouseData.broadStyle.colorCode,
          background: giwaHouseData.broadStyle.backGroundCode,
          friend: giwaHouseData.broadStyle.friendCode,
        });
        return;
      } else {
        // alert("기와집이 없습니다. 생성해주세요."); //임시로 넣어놓음!
        navigate("/login");
        return;
      }
    });
  }, []);

  // useEffect(() => {
  //   let eventSource;
  //   const fetchSse = async () => {
  //     try {
  //       eventSource = new EventSource(
  //         `${BASE_URL}/api/v1/notification/connect`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //           withCredentials: "include",
  //         }
  //       );
  //       eventSource.onopen = () => {
  //         console.log("연결됨");
  //       };

  //       /* EVENTSOURCE ONMESSAGE ---------------------------------------------------- */
  //       eventSource.onmessage = async (event) => {
  //         const res = await event.data;
  //         console.log(res);
  //       };

  //       /* EVENTSOURCE ONERROR ------------------------------------------------------ */
  //       eventSource.onerror = async (event) => {
  //         if (!event.error.message.includes("No activity")) eventSource.close();
  //       };
  //     } catch (error) {}
  //   };
  //   fetchSse();
  //   return () => eventSource.close();
  // });

  const mainHousePath = () => {
    switch (giwaHouseStyle.giwaColor) {
      case 1:
        return mainHouseIndigo;
      case 2:
        return mainHouseBlack;
      case 3:
        return mainHousePink;
      default:
        break;
    }
  };

  useEffect(() => {
    if (giwaHouse.id && previousPath === "/makeGiwaHouse") {
      setCompletedGiwaHouse(true);
    }
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
  }, [giwaHouse, completedGiwa]);

  useEffect(() => {
    if (!isVisitorClick) return;

    setTimeout(() => {
      setIsVisitorClick(false);
    }, 2000);
  }, [isVisitorClick]);

  useEffect(() => {
    if (!giwaAddOut) return;

    setTimeout(() => {
      setgiwaAddOut(false);
    }, 4500);
  }, [giwaAddOut]);

  // 캡쳐
  const handleCapture = async () => {
    if (!captureDivRef.current) return;

    try {
      const div = captureDivRef.current;
      const canvas = await html2canvas(div);
      setImg(canvas);
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  /* 기와집 꾸미기 모달창 */
  const openMakeupHouse = () => {
    setOpenNav(false);
    setOpenMakeup(true);
  };

  const closeMakeupHouse = () => {
    setOpenNav(true);
    setOpenMakeup(false);
  };
  
  /* 방명록 모달창 */
  const openGusetBookModal = () => {
    setOpenNav(false);
    setOpenGusetBook(true);
  };
  
  const closeGusetBookModal = () => {
    document.querySelectorAll(".giwa_svg path").forEach(element => {
      element.setAttribute("class", "");
    });
    setOpenNav(true);
    setOpenGusetBook(false);
  };

  const handleCaptureBtn = async () => {
    await handleCapture();
    setCapturePopBol(true);
  };

  return (
    <Container>
      <Mobile>
        {/* pc 최적화 팝업 start */}
        <MobilePopup />
        {/* pc 최적화 팝업 end */}
      </Mobile>

      {openModal ? (
        <GiwaModal
          onXBtnClick={() => setOpenModal(false)}
          setCompletedGiwa={setCompletedGiwa}
          giwaHouseId={giwaHouse.id}
          setgiwaAddOut={setgiwaAddOut}
        />
      ) : null}
      <NavBar isShowing={openNav} />
      <ExDiv
        $bgColor={giwaHouseStyle.background === 1 ? true : false}
        ref={captureDivRef}
      >
        <StyledMain>
          <div className={openMakeup || openGusetBook ? "left" : null}>
            <HouseBox $houseImg={mainHousePath()}>
              <Warning
                active={isVisitorClick}
                background={giwaHouseStyle.background === 1 ? true : false}
                giwaAddOut={giwaAddOut}
              />
              {/* 말풍선 start */}
              <Speech
                setOpenModal={setOpenModal}
                url={url} //url이 있는 경우(방문자), url이 없는 경우(주인)
                giwaLength={giwaList.length} //기와의 개수
                openMakeup={openMakeup}
                openGusetBook={openGusetBook}
              />
              {/* 말풍선 end */}
              {/* 기와 버튼 start */}
              <GiwaButton
                setOpen={openGusetBookModal}
                changeGiwa={setSelectedGiwa}
                giwaList={giwaList.slice(0, 12)}
                setIsVisitorClick={setIsVisitorClick}
                url={url}
              />
              {/* 기와 버튼 end */}
              <img className="heatae" src={haetaeImg} alt="해태" />
              <img className="taegeukgi" src={taegeukgi} alt="태극기" />
            </HouseBox>
          </div>
        </StyledMain>
        <RightSide
          openMakeup={openMakeup}
          xBtnClickHandler={closeMakeupHouse}
          updateFunction={() => { }}
          btnText={"기와집 꾸미기 완료"}
          initGiwaHouse={initGiwaHouse}
          giwaStyle={giwaHouse}
          setInitGiwaHouse={setInitGiwaHouse}
        ></RightSide>

        {/* 방명록 start */}

        <GuestBook
          openGusetBook={openGusetBook}
          xBtnClickHandler={closeGusetBookModal}
          selectedGiwa={selectedGiwa}
          username={userInfo.username}
          setGiwaList={setGiwaList}
        ></GuestBook>

        {/* 방명록 end */}

        <MainBg
          openMakeup={openMakeup}
          openGusetBook={openGusetBook}
          background={giwaHouseStyle.background === 1 ? true : false}
        />
      </ExDiv>
      <BottomSide
        openMakeup={openMakeup}
        openGusetBook={openGusetBook}
        openMakeupHouse={openMakeupHouse}
        setCapturePopBol={handleCaptureBtn}
        setPopup={setCopyLinkPop}
        background={giwaHouseStyle.background === 1 ? true : false}
        url={url}
        giwaTitle={giwaHouse.title}
      />

      {/* 캡쳐 팝업 start */}
      {capturePopBol && (
        <Capture
          setCapturePopBol={setCapturePopBol}
          canvas={img}
          url={giwaHouse.url}
        />
      )}
      {/* 캡쳐 팝업 end */}

      {/* 기와 등록 완료 팝업창 start */}
      {completedGiwa && <Completed setCompletedGiwa={setCompletedGiwa} />}
      {/* 기와 등록 완료 팝업창 end */}

      {/* 링크 복사 팝업창 start */}
      {copyLinkPop && (
        <ModalBasic
          msg={"주소가 복사되었습니다.\n소중한 사람들에게 공유해주세요!"}
          buttonText="확인"
          onClickBtn={() => {
            setCopyLinkPop(false);
          }}
        />
      )}
      {/* 링크 복사 팝업창 end */}
      {completedGiwaHouse && <CopyLink setGiwaHouse={setCompletedGiwaHouse} setCopyLinkPop={setCopyLinkPop} />}
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const ModalContent = styled.div`
  width: 388px;
  height: 200px;
  background-color: white;
  position: relative;
  > img {
    position: absolute;
    top: -50px;
  }
`;

export const ExDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    158deg,
    ${({ $bgColor }) =>
    $bgColor ? "#FFFEF9 0%, #FFF8DC 100%" : " #868DCC 20%, #313557 95%"}
  );
  position: relative;
  overflow: hidden;
`;

export const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > div {
    &.left {
      left: -500px;
    }
    width: 770px;
    height: 679px;
    position: absolute;
    left: 120px;
    top: 18%;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 2;
    transition: all ease-in-out 1s;
  }
`;

export const HouseBox = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ $houseImg }) => `url(${$houseImg})`};
  background-size: cover;
  > img {
    position: absolute;
    &.heatae {
      right: 37%;
      top: 11.7%;
    }
    &.taegeukgi {
      left: -14%;
      top: 18%;
    }
  }
`;
