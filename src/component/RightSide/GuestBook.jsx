import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import SelectTitle from "../SelectTitle/SelectTitle";
import { ReactComponent as XIcon } from "../../assets/common/closeBtn.svg";
import bookletTop from "../../assets/modal/booklet_top.svg";
import { ReactComponent as GiwaMeaning } from "../../assets/main/giwa_mean_1.svg";
import { editGiwaReadApi, getGiwaDetailApi } from "../../apis/giwa";
import { fontColor, textSort } from "../../data/giwaData";
import { koreaDate } from "../../utils/koreaDate";
import { fontColorDefault } from "../Modal/GiwaModal/WriteGuestText";
import giwaPath from "../../data/giwaPath";
import { giwaPatternItems } from "../Modal/GiwaModal/SelectGiwa";
import { Navigate, useNavigate } from "react-router-dom";

const GuestBook = ({
  openGusetBook,
  xBtnClickHandler,
  selectedGiwa,
  username,
  setGiwaList,
}) => {
  const navigate = useNavigate();
  const [giwa, setGiwa] = useState(null);
  let selectedSort;
  let giwaCreatedDate;
  let giwaFontColor;
  let giwaImg;
  let giwaInfo;
  let giwaTitle;

  useEffect(() => {
    if (!selectedGiwa) return;
    getGiwaDetailApi(selectedGiwa).then((result) => {
      if (result.data.status === "SUCCESS") {
        if (!result.data.data.isRead) {
          editGiwaReadApi(selectedGiwa, {
            isRead: true,
          }).then((response) => {
            if (response.data.status === "SUCCESS") {
              setGiwaList((prev) => {
                const filterList = prev.map((item) => {
                  if (item.id !== selectedGiwa) return item;

                  const editItem = item;
                  editItem["isRead"] = true;
                  return editItem;
                });
                return filterList;
              });
              setGiwa(result.data.data);
              return;
            }
          });
        } else {
          setGiwa(result.data.data);
          return;
        }
      }

      if (result.data.status === "FAIL") {
        if (result.data.message === "접근이 거부되었습니다.") {
          navigate("/logout");
          return;
        }
        alert(result.data.message);
      }
    });
  }, [selectedGiwa]);

  if (giwa) {
    switch (giwa.postStyle.sortCode) {
      case 1:
        selectedSort = "left";
        break;
      case 2:
        selectedSort = "center";
        break;
      case 3:
        selectedSort = "right";
        break;
      default:
        break;
    }
    giwaCreatedDate = koreaDate(giwa.createdTime);
    giwaFontColor = fontColorDefault[giwa.postStyle.fontColorCode - 1];
    giwaImg = giwaPath[giwa.postStyle.shapeCode - 1].svg;
    giwaTitle = giwaPatternItems[giwa.postStyle.shapeCode - 1].title;
    giwaInfo = giwaPatternItems[giwa.postStyle.shapeCode - 1].shortDesc;
  }

  return (
    <Container className={openGusetBook ? "show" : null}>
      <XBox>
        <XIcon
          width={"40px"}
          height={"40px"}
          fill="#212121"
          onClick={xBtnClickHandler}
        />
      </XBox>
      <Wrap>
        <strong>
          <span>{username}</span>님에게
        </strong>
        <Title>
          <GiwaImg>{giwaImg}</GiwaImg>
          <GiwaText>
            <b>{giwaTitle}</b>
            <p>{giwaInfo}</p>
          </GiwaText>
        </Title>
        <GuestBookWrap>
          <Text $fontColor={giwaFontColor} $sort={selectedSort}>
            {/* <Board /> */}
            <p>{giwa?.message}</p>
          </Text>
          <div>
            <span>
              <em>{giwaCreatedDate?.year}</em>년
              <em>{giwaCreatedDate?.month}</em>월<em>{giwaCreatedDate?.day}</em>
              일
            </span>
            <b>
              <span>{giwa?.nickName}</span>
            </b>
          </div>
        </GuestBookWrap>
      </Wrap>
    </Container>
  );
};

export default GuestBook;

const Container = styled.aside`
  width: 680px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 50px 0px rgba(210, 201, 168, 0.5);
  border-radius: 30px 0px 0px 30px;
  position: fixed;
  right: -730px;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0;
  box-sizing: border-box;
  padding: 60px 80px;
  z-index: 105;
  transition: all ease-in-out 1s;
  &.show {
    right: 0;
    opacity: 1;
  }
`;

const XBox = styled.button`
  position: absolute;
  top: 50px;
  right: 50px;
`;

const Wrap = styled.div`
  > strong {
    display: block;
    padding: 0 10px 0 0;
    color: #222;
    font-family: var(--font-hunmin);
    font-size: 33px;
    line-height: 37px;
    font-weight: 600;
    span {
      color: #e75852;
    }
  }
`;

const Title = styled.div`
  margin: 40px 0 10px;
  display: flex;
  gap: 23px;
  > svg {
    background-color: red;
  }
`;

const GiwaImg = styled.div`
  min-width: 110px;
  min-height: 110px;
  position: relative;
  border-radius: 20px;
  background-color: #122961;
  svg {
    width: 80%;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
`;

const GiwaText = styled.div`
  padding: 5px 0 0;
  b {
    height: 36px;
    display: block;
    margin: 0 0 10px;
    color: #212121;
    font-family: var(--font-hunmin-saeron);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.2px;
  }
  p {
    color: #616161;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.2px;
  }
`;

const GuestBookWrap = styled.div`
  padding: 40px 0 0;
  > div:nth-of-type(2) {
    margin: 40px 0 0;
    > span {
      color: #222;
      text-align: right;
      font-family: var(--font-hunmin);
      font-size: 26px;
      font-weight: 600;
      display: block;
      > em {
        margin: 0 0 0 10px;
      }
    }
    b {
      height: 36px;
      float: right;
      margin: 14px 0 0;
      color: #222;
      text-align: right;
      font-family: var(--font-hunmin);
      font-size: 33px;
      line-height: 37px;
      font-weight: 600;
    }
  }
`;

const Text = styled.div`
  width: 100%;
  min-height: 150px;
  max-height: 400px;
  height: calc(100vh - 500px);
  position: relative;
  background-color: #f8efe7;
  &:after,
  &:before {
    width: 530px;
    height: 20px;
    content: "";
    display: block;
    left: 50%;
    transform: translate(-50%, 0);
    position: absolute;
    background: url(${bookletTop}) 50% 50% no-repeat;
    background-color: cover;
  }
  &:before {
    top: -20px;
  }
  &:after {
    bottom: -20px;
  }
  /* svg {
    width: 100%;
  } */
  p {
    width: 88%;
    height: 90%;
    position: absolute;
    top: 5%;
    padding: 0 2% 0 0;
    box-sizing: border-box;
    left: 0;
    right: 0;
    margin: auto;
    text-align: ${(props) => props.$sort};
    color: ${(props) => props.$fontColor};
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    font-family: var(--font-Inter);
    overflow-y: auto;
    word-wrap: break-word;
    &::-webkit-scrollbar {
      width: 6px;
      background-color: #e6d6b757;
    }
    &::-webkit-scrollbar-thumb {
      height: 30%;
      border-radius: 10px;
      background-color: #bb9266;
    }
  }
`;
