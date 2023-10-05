import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import IssueNews from "./IconPopup/IssueNews";
import Sharing from "./IconPopup/Sharing";
import KigImg from "../../assets/bottomSide/kig_img.png";
import { ReactComponent as VisitIcon } from "../../assets/common/visit_icon.svg";
import { ReactComponent as Board } from "../../assets/bottomSide/board_img.svg";
import { ReactComponent as SideBoard } from "../../assets/bottomSide/side_board_img.svg";
import { ReactComponent as ToggleInline } from "../../assets/bottomSide/toggle_icon_inline.svg";
import { ReactComponent as ToggleOutline } from "../../assets/bottomSide/toggle_icon_outline.svg";
import { ReactComponent as Issue } from "../../assets/bottomSide/bell_icon.svg";
import { ReactComponent as Capture } from "../../assets/bottomSide/capture_icon.svg";
import { ReactComponent as SharingIcon } from "../../assets/bottomSide/sharing_icon.svg";
import { ReactComponent as GiwaSetting } from "../../assets/bottomSide/giwa_setting_icon.svg";
import { useBgColor } from "../../contexts/BackgroundColor";
import { useSelector } from "react-redux";

const boleand = [
  { type: "issue", boolean: false },
  { type: "capture", boolean: false },
  { type: "sharing", boolean: false },
];

const BottomSide = ({
  openMakeup,
  openGusetBook,
  openMakeupHouse,
  setCapturePopBol,
  setPopup,
  url,
  giwaTitle,
}) => {
  const userInfo = useSelector((state) => state.userReducer);
  const { bgColor } = useBgColor(); // BG Color context
  const [iconIsOpen, setIconIsOpen] = useState(false);
  const ContainRef = useRef();

  useEffect(() => {
    openMakeup
      ? gsap.to(ContainRef.current, 1, {
        y: "100px",
        opacity: 0,
        display: "none",
        ease: "Power1.easeInOut",
      })
      : gsap.to(ContainRef.current, 1, {
        y: 0,
        opacity: 1,
        display: "block",
        ease: "Power1.easeInOut",
      });
  }, [openMakeup]);

  useEffect(() => {
    openGusetBook
      ? gsap.to(ContainRef.current, 1, {
        y: "100px",
        opacity: 0,
        display: "none",
        ease: "Power1.easeInOut",
      })
      : gsap.to(ContainRef.current, 1, {
        y: 0,
        opacity: 1,
        display: "block",
        ease: "Power1.easeInOut",
      });
  }, [openGusetBook]);

  const [iconToggle, setIconToggle] = useState(boleand);

  const clickToggleOpen = (e) => {
    const currentType = e.target.closest("li").getAttribute("type");
    const changeBoolean = iconToggle.map((item) => {
      if (item.type === currentType) {
        return {
          ...item,
          boolean: !item.boolean,
        };
      } else {
        return {
          ...item,
          boolean: false,
        };
      }
    });
    setIconToggle(changeBoolean);
  };

  return (
    <Contain ref={ContainRef} $bgColor={bgColor}>
      {!url && (
        <History className="history">
          <img src={KigImg} alt="세종대왕 이미지" />
          <div>
            <strong>내가 아는 한글의 역사는 어디까지?</strong>
            <p>풀면서 배우는 한국 역사능력 고사</p>
          </div>
          <VisitLink
            href="https://hangeul.naver.com/hangeulmattteutquiz"
            target="_blank"
          >
            <span>방문하기</span>
            <VisitIcon />
          </VisitLink>
        </History>
      )}
      <IconBar $isOpen={iconIsOpen} className="icon_bar">
        <Name>
          <SideBoard className="side1" />
          <div>
            <strong>
              <span>{giwaTitle}</span>의 집이오~
            </strong>
            <Board className="borad" />
          </div>
          <SideBoard className="side2" />
        </Name>
        <Various>
          <li type="issue">
            <button onClick={(e) => clickToggleOpen(e)}>
              <Issue width={23} height={25} />
            </button>
            {iconToggle[0].boolean && <IssueNews />}
            <NewsNumber>{15}</NewsNumber>
          </li>
          <li type="capture">
            <button
              onClick={(e) => {
                clickToggleOpen(e);
                setCapturePopBol();
              }}
            >
              <Capture width={29} height={30} />
            </button>
          </li>
          <li type="sharing">
            <button onClick={(e) => clickToggleOpen(e)}>
              <SharingIcon width={29} height={30} />
            </button>
            {iconToggle[2].boolean && (
              <Sharing
                setPopup={setPopup}
                setIconToggle={setIconToggle}
                boleand={boleand}
              />
            )}
          </li>
          <li>
            <button
              onClick={(e) => {
                openMakeupHouse(true);
                clickToggleOpen(e);
              }}
            >
              <GiwaSetting width={29} height={30} />
            </button>
          </li>
        </Various>
        {!url && (
          <ToggleBtn onClick={() => setIconIsOpen(!iconIsOpen)}>
            <ToggleInline className="inline" />
            <ToggleOutline />
            <NewsNumber>{15}</NewsNumber>
          </ToggleBtn>
        )}
      </IconBar>
    </Contain>
  );
};

export default BottomSide;

const Contain = styled.div`
  width: 100%;
  height: 102px;
  max-width: 1320px;
  min-width: 1125px;
  padding: 0 50px 0 20px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  margin: auto;
  box-sizing: border-box;
  transform: translate(-50%, 0);
  /* display: flex; */
  /* justify-content: space-between; */
  opacity: 1;
  z-index: 3;
  /* bgColor 조건 가르기 */
  > div {
    &.history {
      border: ${({ $bgColor }) =>
    $bgColor ? "1px solid #ECE0B9" : "1px solid #171A32"};
      box-shadow: ${({ $bgColor }) =>
    $bgColor
      ? "5px 5px 10px #ECE0B9"
      : "5px 5px 15px rgba(23, 26, 50, 0.478)"};
      > a {
        &:hover {
          span {
            color: ${({ $bgColor }) => ($bgColor ? "#72543f" : "#080a16")};
          }
          svg {
            path {
              stroke: ${({ $bgColor }) => ($bgColor ? "#72543f" : "#080a16")};
            }
          }
        }
        span {
          color: ${({ $bgColor }) => ($bgColor ? "#8B715F" : "#171A32")};
        }
        svg {
          path {
            stroke: ${({ $bgColor }) => ($bgColor ? "#8B715F" : "#171A32")};
          }
        }
      }
    }
    &.icon_bar {
      ul {
        li {
          &:nth-of-type(3) {
            svg {
              left: -1px;
            }
          }
          > button {
            border: ${({ $bgColor }) => $bgColor ? "1px solid #C09B73;" : "1px solid #fff"};
            &:hover {
              background-color: ${({ $bgColor }) => $bgColor ? "#AE8960" : "#171A32"};
              svg {
                path {
                  stroke: #fff;
                }
              }
            }
            > svg {
              left: ${({ type }) => (type === "sharing" ? "-1px" : "0")};
              path {
                stroke: ${({ $bgColor }) => ($bgColor ? "#AE8960" : "#fff")};
              }
            }
          }
        }
      }
    }
    > button {
      &:hover {
        svg {
          path {
            stroke: ${(props) => (props.$bgColor ? "#FFEAC2" : "#fff")};
            fill: ${(props) => (props.$bgColor ? "#BC9267" : "#171A32")};
          }
        }
      }
      svg {
        path {
          stroke: ${(props) => (props.$bgColor ? "#BC9267" : "#fff")};
        }
      }
    }
  }
`;

/* 히스토리 사이드 바 */
const History = styled.div`
  width: 582px;
  position: relative;
  float: left;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.65);
  padding: 20px 30px;
  border-radius: 20px;
  box-sizing: border-box;
  > div {
    margin: 0 0 0 20px;
  }
  strong {
    color: #222;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
  p {
    margin: 5px 0 0;
    color: #666;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
`;

const VisitLink = styled.a`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 50px;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 0 17px 0 0;
  span {
    font-family: var(--font-hunmin);
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
    transition: color, 0.2s;
  }
  &:hover {
    span {
      color: #72543f;
    }
    svg {
      transform: translate(5px, 0);
      path {
        stroke: #72543f;
      }
    }
  }
  svg {
    width: 8px;
    height: 12px;
    content: "";
    display: block;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    transition: transform, 0.2s;
    path {
      transition: stroke, 0.2s;
    }
  }
`;

/* 오른쪽 사이드 바 */
const IconBar = styled.div`
  width: 430px;
  float: right;
  display: flex;
  align-items: center;
  margin: 15px 0 0;
  justify-content: space-between;
  > div {
    width: ${(props) => (props.$isOpen ? "1px" : "368px")};
    visibility: ${(props) => (props.$isOpen ? "hidden" : "visible")};
    opacity: ${(props) => (props.$isOpen ? "0" : "1")};
  }
  > ul {
    visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
    opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  }
  > button {
    svg {
      &.inline {
        left: ${(props) => (props.$isOpen ? "2px" : "-1px")};
        transform: ${(props) =>
    props.$isOpen ? "rotate(0)" : "rotate(180deg)"};
      }
    }
  }
`;

const Name = styled.div`
  position: relative;
  transition: width, 0.4s ease-in;
  > svg {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;
    &.borad {
      position: static;
    }
    &.side1 {
      left: -10px;
    }
    &.side2 {
      right: -10px;
    }
  }
  > div {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
  }
  strong {
    width: 368px;
    position: absolute;
    text-align: center;
    color: #231f20;
    font-family: var(--font-hunmin);
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    padding: 0 12px;
    box-sizing: border-box;
    span {
      color: #e75852;
    }
  }
`;

const Various = styled.ul`
  height: min-content;
  gap: 30px;
  padding: 0 0 0 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  transition: width, 0.4s ease-in;
  li {
    position: relative;
    &:nth-of-type(1) {
      > em {
        left: 45px;
        top: 2px;
      }
    }
    > button {
      width: 60px;
      height: 60px;
      position: relative;
      border-radius: 60px;
      transition: background-color, 0.2s;
      &:hover {
        svg {
          path {
            stroke: #fff;
          }
        }
      }
      > svg {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        path {
          transition: stroke, 0.2s;
        }
      }
    }
  }
`;

const ToggleBtn = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 40px;
  svg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    path {
      transition: all, 0.2s;
    }
    &.inline {
      /* top: -3px; */
      z-index: 1;
      /* transition: all, .2s; */
    }
  }
  > em {
    left: 27px;
    top: -23px;
  }
`;

const NewsNumber = styled.em`
  position: absolute;
  left: 25px;
  top: -25px;
  padding: 5px 9px;
  background-color: #f4361e;
  border-radius: 13px;
  color: #fff;
  font-family: var(--font-Inter);
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  box-shadow: 2px 2px 3px #96969647;
`;
