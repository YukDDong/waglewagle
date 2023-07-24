import { styled } from "styled-components";

export default function NavBar() {
  return (
    <Nav>
      <NavLogo>와글와글</NavLogo>
      <NavIconDiv></NavIconDiv>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
`;

const NavLogo = styled.p`
  width: 180px;
  height: 55px;
  font-size: 36px;
  text-align: center;
  font-family: var(--font-hunmin);
  font-weight: 400;
  font-style: normal;
`;

const NavIconDiv = styled.div`
  width: 180px;
  height: auto;
`;
