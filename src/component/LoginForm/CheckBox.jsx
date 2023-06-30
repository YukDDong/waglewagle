import { styled } from "styled-components";

function CheckBox({ labelName }) {
  const CheckBoxDiv = styled.div`
    margin-bottom: 20px;
  `;

  return (
    <CheckBoxDiv>
      <input type="checkbox" id="checkbox_input" />
      <label htmlFor="checkbox_input">{labelName}</label>
    </CheckBoxDiv>
  );
}

export default CheckBox;
