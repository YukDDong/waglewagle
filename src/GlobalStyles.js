import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root{
    --btn-main-color : #E75852;
    --font-hunmin: "EBS Hunminjeongeum SB";
  }
  body{
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export default GlobalStyles;