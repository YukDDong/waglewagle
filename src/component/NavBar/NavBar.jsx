import { styled } from "styled-components";
import { ReactComponent as NavIcon } from "../../assets/ic_baseline_menu.svg";

export default function NavBar() {
  return (
    <Nav>
      <NavLogo>와글와글</NavLogo>
      <NavIconDiv>
        <NavIcon width={42} height={42} fill="black" />
      </NavIconDiv>
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
  font-family: "EBSHunminjeongeumSBA";
`;

const NavIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 168px;
  background-image: url("../../assets/rectangle-33.svg");
`;
