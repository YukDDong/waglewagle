import { styled } from "styled-components";

export default function CheckBox({ labelName, setChecked, checked }) {
  return (
    <CheckBoxDiv>
      <input
        type="checkbox"
        id="checkbox_input"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <label htmlFor="checkbox_input">{labelName}</label>
    </CheckBoxDiv>
  );
}

const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: auto;
  height: 24px;
  > input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #999;
    box-sizing: border-box;
    border-radius: 2px;
    cursor: pointer;
    &:checked {
      background-color: #e75852;
    }
  }
  > label {
    color: #9e9e9e;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.64px;
  }
`;
