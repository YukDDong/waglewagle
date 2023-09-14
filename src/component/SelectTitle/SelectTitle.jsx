import React from "react";
import { styled } from "styled-components";
import { ReactComponent as TitleIcon } from "../../assets/ic_select_title.svg";

const SelectTitle = ({ title, fontSize = "20px" }) => {
  return (
    <Container $fontSize={fontSize}>
      <TitleIcon height={"28px"} />
      {title}
    </Container>
  );
};

export default SelectTitle;

const Container = styled.h2`
  height: 28px;
  color: #222;
  font-size: ${(props) => props.$fontSize};
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
