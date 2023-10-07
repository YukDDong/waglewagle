import { styled } from "styled-components";
import { ReactComponent as Chekbox } from "../../assets/login/chekbox_icon.svg";

export default function CheckBox({ labelName, setChecked, checked }) {
  return (
    <CheckBoxDiv>
      <div>
        <input
          type="checkbox"
          id="checkbox_input"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <Chekbox />
      </div>
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
  cursor: pointer;
  > div {
    position: relative;
    > svg {
      position: absolute; top: 0; left: 0; right: 0; bottom: 2px; 
      margin: auto; pointer-events: none;
    }
    > input {
      margin: 0;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 20px;
      height: 20px;
      border: 1px solid #DDDDDD;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;
      &:checked {
        border-color: transparent;
        background-color: #e75852;
      }
    }
  }
  > label {    
    margin: -3px 0 0;
    color: #9e9e9e;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.64px;
  }
`;
