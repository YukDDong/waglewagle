import { styled } from "styled-components";

// 공통 style
const ButtonCommon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  padding: 10px;
  box-sizing: border-box;
  font-family: var(--font-hunmin);
  font-size: 20px;
  font-weight: 600;
  border-radius: 6px;
  margin-bottom: 12px;
  margin-top: 40px;
  box-sizing: border-box;
  transition: all ease-in-out 0.3s;
  color: ${(props) => (props.color ? "#e75852" : "white")};
  background-color: ${(props) => (props.color || "#e75852")};
`;

// 기본 버튼 style
const ButtonBasic = styled(ButtonCommon)`
  border: 1px solid #e75852;
  cursor: pointer;
  &:hover {
    font-size: 26px;
  }
  &:active{
    background-color: "#D24640";
  }
`;

// Disabled 기능 들어간 버튼 style
const ButtonActDeact = styled(ButtonCommon)`
border: ${(props) => (props.disabled ? null : "1px solid #e75852")};
cursor: ${(props) => (props.disabled ? "default" : "pointer")};
color: ${(props) => (props.disabled ? "#bbbbbb" : null)};
background-color: ${(props) => (props.disabled ? "#f2f2f2" : null)};
&:hover {
  font-size: ${(props) => (props.disabled ? null : "26px")};
}
&:active{
  background-color: ${(props) => (props.disabled ? null : "#D24640")};
}
`;


export {ButtonBasic as default, ButtonActDeact};