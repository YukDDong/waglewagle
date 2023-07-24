import { keyframes, styled } from "styled-components";
import { ReactComponent as NavIcon } from "../../assets/ic_baseline_menu.svg";
import rectangle33Path from "../../assets/rectangle-33.svg";
import { ReactComponent as NavBackgroundIcon } from "../../assets/rectangle-33.svg";

export default function NavBar() {
  return (
    <Nav>
      <NavLogo>와글와글</NavLogo>
      <NavIconDiv>
        <NavBackgroundIcon width={180} height={200} />
        {/* <NavIcon width={42} height={42} fill="black" /> */}
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
  font-family: "EBS Hunminjeongeum SB";
  font-weight: 400;
  font-style: normal;
`;

const NavIconDiv = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 180px;
  height: auto;
  svg {
    /* width: 180px;
    height: 300px; */
  }
  /* background-image: ${`url(${rectangle33Path})`}; */

  /* > span {
    display: block;
    width: 100%;
    height: 100%;
    background-image: ${`url(${rectangle33Path})`};
    background-size: 100%;
  } */
`;

const SVG = styled.svg``;

const boxHeight = keyframes`
  0%{
    height: 200px;
  }

  100%{
    height: 368px;
  }
`;
