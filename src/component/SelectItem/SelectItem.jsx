import React from "react";
import { styled } from "styled-components";
import { ReactComponent as CheckIcon } from "../../assets/common/check_icon2.svg";

const SelectItem = ({ label, id, name, value, onChange, img, checked }) => {
  return (
    <Container htmlFor={id} $checked={checked}>
      <Item $img={img}>
        <CheckIcon />
      </Item>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onClick={onChange}
      />
      <span>{label}</span>
    </Container>
  );
};

export default SelectItem;

const Container = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  > input {
    display: none;
  }
  > span {
    font-size: 14px;
    font-weight: ${({ $checked }) => ($checked ? "700" : "400")};
    color: ${({ $checked }) => ($checked ? "#E75852" : "#424242")};
  }
  > button {
    border: 2px solid ${({ $checked }) => ($checked ? "#E75852" : "#e4e4e4")};
    > svg {
      display: ${({ $checked }) => ($checked ? "block" : "none")};
    }
    &:after {
      display: ${({ $checked }) => ($checked ? "block" : "none")};
    }
  }
`;

const Item = styled.button`
  width: 160px;
  height: 110px;
  border-radius: 10px;
  box-sizing: border-box;
  pointer-events: none;
  background: ${(props) => `url( ${props.$img}) 50%, 50% no-repeat;`};
  background-size: cover;
  position: relative;
  overflow: hidden;
  > svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  &:after {
    width: 40px;
    height: 40px;
    content: "";
    border-radius: 100%;
    left: 0;
    top: 0;
    background-color: var(--btn-main-color);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;
