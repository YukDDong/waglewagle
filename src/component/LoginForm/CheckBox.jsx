import { styled } from "styled-components";

export default function CheckBox({ labelName }) {
  return (
    <CheckBoxDiv>
      <input type="checkbox" id="checkbox_input" />
      <label htmlFor="checkbox_input">{labelName}</label>
    </CheckBoxDiv>
  );
}

const CheckBoxDiv = styled.div`
  margin-bottom: 20px;
  > label {
    color: #929292;
  }
`;
