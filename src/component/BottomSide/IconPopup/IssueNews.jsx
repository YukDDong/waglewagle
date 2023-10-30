import React, { useState } from "react";
import styled from "styled-components";
import giwaNews from "../../../assets/bottomSide/giwa_news.png";
import { giwaPatternItems } from "../../Modal/GiwaModal/SelectGiwa";
import { deleteNewsApi } from "../../../apis/news";

// const newsData = [
//   {
//     id: 1,
//     img: "../../../assets/main/giwa_news.png",
//     title: "1 10월 한글날",
//     description: "1 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일",
//   },
//   {
//     id: 2,
//     img: "",
//     title: "기와가 도착했오",
//     description: "심청님이 ‘사랑’기와를 남기고 가셨소 ",
//   },
//   {
//     id: 3,
//     img: "",
//     title: "기와가 도착했오",
//     description: "심청님123456이 ‘사랑’기와를 남기고 가...",
//   },
//   {
//     id: 4,
//     img: "",
//     title: "4 10월 한글날",
//     description: "4 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일",
//   },
//   {
//     id: 5,
//     img: "",
//     title: "5 10월 한글날",
//     description: "5 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일2 한글의 우수성을 기리기 위한 국경일",
//   },
// ]

console.log(giwaPatternItems[3].giwaName);
const IssueNews = ({ backgroundState, background, sseList, deleteSseList }) => {
  // const [news, setNews] = useState(newsData);
  const bgColor = background;

  const deleteNews = (id) => {
    deleteNewsApi(id).then((result) => {
      if (result.data.status === "SUCCESS") {
        deleteSseList(id);
      } else {
        alert("알림 삭제가 실패했습니다.");
        console.log("deleteNews failed", result);
      }
    });
  };

  return (
    <IssueWrap $bgColor={bgColor} className="issue_news">
      <strong>소식통</strong>
      <ul>
        {sseList
          .map((news) => (
            <NewsTxt
              key={news.id}
              onClick={() => {
                deleteNews(news.id);
              }}
            >
              <div>
                <img src={giwaNews} alt={news.title} />
              </div>
              <dl>
                <dt>{news.title}</dt>
                {news.type === "new" ? (
                  <dd>
                    '{news.userName}'님이 '
                    {giwaPatternItems[news.shapeType - 1].giwaName}'기와를
                    남기고 가셨소
                  </dd>
                ) : (
                  <dd>{news.message}</dd>
                )}
              </dl>
            </NewsTxt>
          ))
          .reverse()}
      </ul>
    </IssueWrap>
  );
};

export default IssueNews;

const IssueWrap = styled.div`
  width: 350px;
  position: absolute;
  bottom: 85px;
  border: ${({ $bgColor }) =>
    $bgColor ? "1px solid #ECE0B9" : "1px solid #171A32"};
  padding: 27px 15px 27px 20px;
  border-radius: 20px;
  overflow: hidden;
  left: -30px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: ${({ $bgColor }) =>
    $bgColor ? "5px 5px 15px #ECE0B9" : "5px 5px 15px rgba(23, 26, 50, 0.377)"};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  ul {
    height: 270px;
    overflow-y: auto;
    padding: 0 5px 0 0;
    &::-webkit-scrollbar {
      width: 6px;
      background-color: #faf8f8d3;
    }
    &::-webkit-scrollbar-thumb {
      height: 30%;
      border-radius: 10px;
      background-color: #cecece56;
    }
  }
  li {
    background-color: #fff;
    margin: 0 0 6px;
    border: 1px solid #eeeeee;
    padding: 18px;
    box-sizing: border-box;
    border-radius: 10px;
    &:last-of-type {
      margin: 0;
    }
  }
  > strong {
    display: block;
    margin: 0 0 16px;
    color: #222;
    font-family: var(--font-hunmin);
    font-size: 22px;
    font-weight: 600;
  }
`;

const NewsTxt = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  > div {
    min-width: 36px;
    width: 36px;
    height: 36px;
    border-radius: 100%;
    margin: 0 10px 0 0;
    > img {
      height: 100%;
      object-fit: cover;
    }
  }
  dt {
    color: #222;
    font-family: var(--font-hunmin);
    font-size: 16px;
    font-weight: 500;
  }
  dd {
    padding: 4px 0 0;
    color: #222;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
