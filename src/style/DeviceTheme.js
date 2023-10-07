/** 
 * 컴포넌트 스타일에서 사용할 미디어쿼리 구분해놓았습니다
 * */
const size = {
  mobile: "768px",
  // tablet: "1024px",
  // laptop: "1600px",
};

const device = {
  mobile: `screen and (max-width: ${size.mobile})`,
  // tablet: `screen and (max-width: ${size.tablet})`,
  // laptop: `screen and (max-width: ${size.laptop})`,
};

const theme = {
  device
};

export default theme;