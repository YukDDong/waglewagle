import styled from "styled-components";

function LoginPage() {
  const NavBar = styled.nav`
    width: 100%;
    height: 70px;
    background-color: rgba(26, 42, 83, 1);
  `;

  const Logo = styled.h1`
    width: 180px;
    height: 50px;
    background-color: white;
    font-size: 40px;
    text-align: center;
  `;
  return (
    <>
      <NavBar>
        <Logo>와글와글</Logo>
      </NavBar>
    </>
  );
}

export default LoginPage;
