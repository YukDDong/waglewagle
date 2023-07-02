import { FaBars } from "react-icons/fa6";
import { styled } from "styled-components";

export default function NavBar() {
  return (
    <Nav>
      <NavLogo>와글와글</NavLogo>
      <FaBars color="white" size={27} />
    </Nav>
  );
}

const Nav = styled.nav`
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
