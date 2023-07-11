import { styled } from "styled-components";

export default function Title({ title }) {
  return <TitleComponent>{title}</TitleComponent>;
}

const TitleComponent = styled.h1`
  width: 135px;
  height: 50px;
  text-align: center;
  font-size: 46px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: "EBSHunminjeongeumSBA";
`;
