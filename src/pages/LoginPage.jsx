import styled from "styled-components";
import { FaBars, FaRegUser } from "react-icons/fa6";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { Link } from "react-router-dom";

function LoginPage() {
  // styled-component CSS작업
  const NavBar = styled.nav`
    width: 100%;
    height: 70px;
    background-color: rgba(26, 42, 83, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    box-sizing: border-box;
  `;

  const NavLogo = styled.h1`
    width: 170px;
    height: 40px;
    background-color: rgba(139, 139, 139, 0.3);
    font-size: 35px;
    text-align: center;
    line-height: 40px;
    color: white;
  `;

  const Main = styled.main`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  `;

  const MainDiv = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    box-sizing: border-box;
  `;

  const Logo = styled.h1`
    width: 170px;
    height: 40px;
    background-color: rgba(139, 139, 139, 0.3);
    font-size: 35px;
    text-align: center;
    line-height: 40px;
    margin-bottom: 30px;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;

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
  `;

  const Input = styled.input`
    border: none;
    background: none;
  `;

  const CheckBoxDiv = styled.div`
    margin-bottom: 20px;
  `;

  const CheckBoxLabel = styled.label``;

  const SubmitButton = styled.button`
    height: 64px;
    padding: 10px;
    box-sizing: border-box;
    color: white;
    font-size: large;
    background-color: #e75852;
    border: none;
    border-radius: 6px;
  `;

  const JoinDiv = styled.div`
    width: 486px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 30px 15px;
    box-sizing: border-box;
    > p {
      color: #b4b4b4;
      font-size: 14px;
      line-height: 19.79px;
    }
    > a {
      font-size: 18px;
      line-height: 19.78px;
      color: rgba(209, 30, 26, 1);
      text-decoration: none;
      border-bottom: 1px solid rgba(209, 30, 26, 0.5);
      padding-bottom: 5px;
    }
  `;

  const SocialLogin = styled.div``;

  const SocialIconBox = styled.div``;
  return (
    <>
      <NavBar>
        <NavLogo>와글와글</NavLogo>
        <FaBars color="white" size={27} />
      </NavBar>
      <Main>
        <MainDiv>
          <Logo>와글와글</Logo>
          <Form>
            <InputDiv>
              <FaRegUser />
              <Input type="text" placeholder="호명을 적어주시오." />
            </InputDiv>
            <InputDiv>
              <HiOutlineLockClosed />
              <Input type="password" placeholder="암호를 적어주시오." />
            </InputDiv>
            <CheckBoxDiv>
              <Input type="checkbox" id="checkbox_input" />
              <CheckBoxLabel htmlFor="checkbox_input">
                호명 기억하기
              </CheckBoxLabel>
            </CheckBoxDiv>
            <SubmitButton type="submit">이리 오너라</SubmitButton>
          </Form>
          <JoinDiv>
            <p>
              자네, 이곳은 처음이오?
              <br />
              이곳은 호패가 없으면 들어갈 수가 없다네
              <br />
              관청에 가서 호패를 만들 수 있다네
            </p>
            <Link to={"/join"}>호패 만들러 가기</Link>
          </JoinDiv>
          <SocialLogin>
            <h4>간편 호패 만들기</h4>
            <SocialIconBox>
              <span>카카오</span>
              <span>구글</span>
              <span>네이버</span>
            </SocialIconBox>
          </SocialLogin>
        </MainDiv>
      </Main>
    </>
  );
}

export default LoginPage;
