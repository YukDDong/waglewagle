import { HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi2";
import { styled } from "styled-components";

function LoginInput({ type, placeholder }) {
  return (
    <InputDiv>
      {type === "text" ? (
        <HiOutlineUser size={20} />
      ) : (
        <HiOutlineLockClosed size={20} />
      )}
      <input
        type={type}
        placeholder={
          type === "text" ? "호명을 적어주시오." : "암호를 적어주시오."
        }
      />
    </InputDiv>
  );
}

const InputDiv = styled.div`
  width: 486px;
  height: 64px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background-color: white;
  padding: 20px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  &:focus-within {
    border: 1px solid red;
  }
  > input {
    width: 100%;
    font-size: 18px;
    height: fit-content;
    border: none;
    background: none;
    margin-left: 10px;
    &:focus {
      outline: none;
      &::placeholder {
        color: red;
      }
    }
  }
`;

export default LoginInput;
