import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import { mediaQueries } from "../common/breakpoints";

const TitleBarLeftTabs = () => {
  return (
    <TitleBarLeft>
      <TitleBarLeftContent>
        <TitleLogo>
          <Image
            src="/vscode_icon.svg"
            alt="vs code icon"
            width={18}
            height={18}
          />
        </TitleLogo>
        <TitleTabs>
          <TitleTab>
            <TitleP>File</TitleP>
          </TitleTab>
          <TitleTab>
            <TitleP>Edit</TitleP>
          </TitleTab>
          <TitleTab>
            <TitleP>Selection</TitleP>
          </TitleTab>
          <TitleTab>
            <TitleP>View</TitleP>
          </TitleTab>
          <TitleTab>
            <TitleP>Go</TitleP>
          </TitleTab>
          <TitleTab>
            <TitleP>Run</TitleP>
          </TitleTab>
          <TitleTab>
            <TitleP>Terminal</TitleP>
          </TitleTab>
          <TitleTab>
            <TitleP>Help</TitleP>
          </TitleTab>
        </TitleTabs>
      </TitleBarLeftContent>
      <BurgerMenu />
    </TitleBarLeft>
  );
};

export default TitleBarLeftTabs;

const BurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <StyledBurger openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavMenu openMenu={openMenu} />
    </>
  );
};

const StyledBurger = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: fixed;
  top: 3px;
  left: ${({ openMenu }) => (openMenu ? "75px" : "10px")};
  z-index: 23;
  display: none;

  ${mediaQueries("mobileLX")`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  `}

  /* ${mediaQueries("mobileS")`
     left: 32px;
  `} */

  div {
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${({ openMenu }) => (openMenu ? "#ccc" : "#0078d7")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ openMenu }) =>
        openMenu ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${({ openMenu }) =>
        openMenu ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ openMenu }) => (openMenu ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ openMenu }) =>
        openMenu ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const NavMenu = ({ openMenu }) => {
  return (
    <NavMenuOverlay openMenu={openMenu}>
      <NavMenuBox>
        <Image
          src="/vscode_icon.svg"
          alt="vs code icon"
          width={18}
          height={18}
        />
        <UL>
          <li>File</li>
          <li>Edit</li>
          <li>Selection</li>
          <li>View</li>
          <li>Go</li>
          <li>Run</li>
          <li>Terminal</li>
          <li>Help</li>
        </UL>
      </NavMenuBox>
    </NavMenuOverlay>
  );
};

const NavMenuOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: ${({ openMenu }) => (openMenu ? "block" : "none")};

  ${mediaQueries("mobileLX")`
    transform: ${({ openMenu }) =>
      openMenu ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    position: fixed;
    z-index: 20;
  `}
`;

const NavMenuBox = styled.div`
  width: 100px;
  height: 100%;
  background-color: #424242;
  padding-top: 0.3rem;
  padding-left: 0.5rem;
`;

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 1.3rem;
  li {
    padding: 5px;
    cursor: pointer;
    margin-bottom: 4px;

    :hover {
      background-color: #cec;
      color: #000;
      border-bottom: 1px solid #fff;
    }
  }

  ${mediaQueries("mobileLX")`
    flex-flow: column nowrap;
    li {
      color: #fff;
    }
  `}
`;

const TitleBarLeft = styled.div`
  font-family: "menlo-regular";
  /* flex: 2; */
  align-items: center;
  /* background: blue; */

  ${mediaQueries("mobileLX")`
      // background: blue;
      // display: none;

  `}
`;

const TitleBarLeftContent = styled.section`
  display: flex;
  ${mediaQueries("mobileLX")`
      display: none;
  `}
`;

const TitleLogo = styled.div`
  margin-right: 0.38rem;
  padding-top: 0.3rem;
`;

const TitleTabs = styled.div`
  display: flex;
  cursor: pointer;
`;

const TitleTab = styled.div`
  /* background-color: #453434; */
  height: 30px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #999999;
  }
`;

const TitleP = styled.p`
  font-size: 0.82rem;
  margin: 0 0.45rem;

  ${mediaQueries("tablet")`
      font-size: 0.7rem;
      margin: 0 0.30rem;
  `}
`;
