import React from "react";
import { useMediaQuery } from "react-responsive";
/**
 * 해당 태그 안에 작성시 작성된 미디어쿼리 내에서만 보여집니다
 * */
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};