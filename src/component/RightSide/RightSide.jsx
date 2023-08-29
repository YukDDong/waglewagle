import React from "react";
import { styled } from "styled-components";

const RightSide = () => {
  return <Container></Container>;
};

export default RightSide;

const Container = styled.aside`
  width: 728px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0px 0px 50px 0px rgba(210, 201, 168, 0.5);
  border-radius: 50px 0px 0px 50px;
  position: absolute;
  right: 0;
  top: 0;
`;
