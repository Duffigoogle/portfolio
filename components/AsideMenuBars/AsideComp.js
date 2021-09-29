import { useState } from "react";
import Icon from "../common/icons/icons";
import styled from "styled-components";
import ExplorerComp from "../../components/Explorerbar/ExplorerComp";
import {
  MailComp,
  CodeBaseComp,
  GithubComp,
  PluralSightComp,
  SearchComp,
} from "../SidebarComps/SidebarComp";
import { ModalManager } from "../Form/CustomModal";
import { mediaQueries } from "../common/breakpoints";

const AsideComp = ({ toggleState, toggleTab, toggleSideTab, isExpanded }) => {
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [toggleDiv, setToggleDiv] = useState(0);
  // const [sliderOpen, setSliderOpen] = useState(true);

  const ToggleModals = (ind) => {
    setToggleDiv(ind);
  };

  // const expandSlider = () => {
  //   setSliderOpen(!sliderOpen);
  //   console.log("slide");
  // };

  // const expandSlider = () => {
  //   toggleSideTab();
  //   console.log("slide");
  // };

  // const closeModal = () => {
  //   setModal('');
  // };

  return (
    <>
      <SideBarContainer>
        <SideBarTabs>
          <TopSideBarTabs>
            <div
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
              onDoubleClick={toggleSideTab}
            >
              <Icon
                name="FilesIcon"
                size={23}
                color={toggleState === 1 ? "#fff" : "#eeeeee"}
                className="icon"
              />
            </div>
            <div
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
              onDoubleClick={toggleSideTab}
            >
              <Icon
                name="SearchRightIcon"
                size={21}
                color={toggleState === 2 ? "#fff" : "#eeeeee"}
                className="icon"
              />
            </div>
            <div
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
              onDoubleClick={toggleSideTab}
            >
              <Icon
                name="CodeIcon"
                size={23}
                color={toggleState === 3 ? "#fff" : "#eeeeee"}
                className="icon"
              />
            </div>
            <div
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
              onDoubleClick={toggleSideTab}
            >
              <Icon
                name="GithubIcon"
                size={23}
                color={toggleState === 4 ? "#fff" : "#eeeeee"}
                className="icon"
              />
            </div>
            <div
              className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(5)}
              onDoubleClick={toggleSideTab}
            >
              <Icon
                name="MailIcon"
                size={23}
                color={toggleState === 5 ? "#fff" : "#eeeeee"}
                className="icon"
              />
            </div>
            <div
              className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(6)}
              onDoubleClick={toggleSideTab}
            >
              <Icon
                name="PluralsightIcon"
                size={23}
                color={toggleState === 6 ? "#fff" : "#eeeeee"}
                className="icon"
              />
            </div>
          </TopSideBarTabs>
          <BottomSideBarTabs>
            <div
              className="tabs"
              onClick={() => {
                setModalOne(!modalOne);
                ToggleModals(1);
                console.log("tab 1");
              }}
            >
              <Icon
                name="personcircle"
                size={23}
                color={toggleState === 7 ? "#fff" : "#eeeeee"}
                className="icon"
              />
            </div>

            <div
              className="tabs"
              onClick={() => {
                setModalTwo(!modalTwo);
                ToggleModals(2);
                console.log("tab 2");
              }}
            >
              <Icon
                name="SettingsIcon"
                size={23}
                color={toggleState === 8 ? "#fff" : "#eeeeee"}
                className="icon"
              />
            </div>
            <div>
              <ModalManager
                modalOne={modalOne}
                modalTwo={modalTwo}
                setModalOne={setModalOne}
                setModalTwo={setModalTwo}
                toggleDiv={toggleDiv}
              />
            </div>
          </BottomSideBarTabs>
        </SideBarTabs>
        <SideBarContents visibility={isExpanded ? +true : undefined}>
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <ExplorerComp />
          </div>
          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <SearchComp />
          </div>
          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <CodeBaseComp />
          </div>
          <div
            className={toggleState === 4 ? "content active-content" : "content"}
          >
            <GithubComp />
          </div>
          <div
            className={toggleState === 5 ? "content active-content" : "content"}
          >
            <MailComp />
          </div>
          <div
            className={toggleState === 6 ? "content active-content" : "content"}
          >
            <PluralSightComp />
          </div>
        </SideBarContents>
        <StyledSlider
          // sliderOpen={sliderOpen}
          isExpanded={isExpanded}
          onClick={() => {
            toggleSideTab();
            // expandSlider();
          }}
        ></StyledSlider>
      </SideBarContainer>
    </>
  );
};

export default AsideComp;

// styled components for AsideComp;
const SideBarContainer = styled.aside`
  display: flex;
  background-color: #848484;
  position: relative;
  /* min-height: calc(100vh - 1.875rem - 1.4rem); */
  /* height: calc(100vh - 1.875rem - 1.4rem); */
`;

const SideBarTabs = styled.div`
  width: 2.561rem;
  /* min-width: 2.561rem; */
  min-height: calc(100vh - 1.875rem - 1.4rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaQueries("mobileM")`
      width: 2.5rem;
      align-items: center;
  `}
`;

const TopSideBarTabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

const BottomSideBarTabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

const SideBarContents = styled.div`
  /* width: 14vw; */
  /* position: relative; */
  width: 11.953rem;
  min-width: 11.953rem;
  /* display: ${({ isHidden }) => (isOpenSideBar ? "block" : "none")}; */
  display: ${(props) => (props.visibility ? "block" : "none")};

  ${mediaQueries("mobileLXX")`
      // display: none;
      // display: ${(props) => (props.visibility ? "none" : "block")};
      position: absolute;
      top: 0;
      left: 2.561rem;
      z-index: 8;

  `}
  ${mediaQueries("mobileLX")`
      // display: none;
  `}
  ${mediaQueries("mobileM")`
      // display: none;
      left: 2.5rem;
  `}
`;

const StyledSlider = styled.div`
  display: none;
  background-color: #444444;
  width: 25px;
  height: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border: 3px solid orange;
  border-left: transparent;
  position: absolute;
  cursor: pointer;
  top: 54%;
  right: ${({ isExpanded }) => (isExpanded ? "-215px" : "-25px")};
  transition: all 10ms ease;
  outline: none !important;
  user-select: none;

  :focus {
    outline: 0;
    outline: none;
  }

  ${mediaQueries("mobileLXX")`
      display: block;

  `}
  ${mediaQueries("mobileM")`
    left: ${({ isExpanded }) => (isExpanded ? "14rem" : "2.5rem")};
  `}
`;
