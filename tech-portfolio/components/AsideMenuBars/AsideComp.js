import React from "react";
import Icon from "../common/icons/icons";
import styled from "styled-components";
import ExplorerComp from "../../components/Explorerbar/ExplorerComp";
import {
  MailComp,
  CodeBaseComp,
  GithubComp,
} from "../SidebarComps/SidebarComp";
import ModalComp from "../Form/Modal";
import { ColorThemeDisplay } from "../Form/CustomModal";
import { CustomModal, Modal } from "../Form/CustomModal";
// import ColorTheme from "../Form/ColorTheme";

const AsideComp = ({
  toggleState,
  toggleTab,
  toggleSideTab,
  isExpanded,
  toggleModal,
  modalState,
  isModalPopUp,
}) => {
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
                color={toggleState === 1 ? "#fff" : "#bfbfbf"}
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
                size={23}
                color={toggleState === 2 ? "#fff" : "#bfbfbf"}
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
                color={toggleState === 3 ? "#fff" : "#bfbfbf"}
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
                color={toggleState === 4 ? "#fff" : "#bfbfbf"}
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
                color={toggleState === 5 ? "#fff" : "#bfbfbf"}
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
                color={toggleState === 6 ? "#fff" : "#bfbfbf"}
                className="icon"
              />
            </div>
          </TopSideBarTabs>
          <BottomSideBarTabs>
            <div className="tabs" onClick={() => toggleModal(1)}>
              <Icon
                name="personcircle"
                size={23}
                color={toggleState === 7 ? "#fff" : "#bfbfbf"}
                className="icon"
              />
            </div>
            <div className="tabs" onClick={() => toggleModal(2)}>
              <Icon
                name="SettingsIcon"
                size={23}
                color={toggleState === 8 ? "#fff" : "#bfbfbf"}
                className="icon"
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
            {/* <SearchComp /> */}
            SearchComp
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
            Pluralsight
          </div>
          <ColorThemeDisplay />

          <Modal />
        </SideBarContents>
        <ModalComp isModalPopUp={isModalPopUp} />
      </SideBarContainer>
    </>
  );
};

export default AsideComp;

// styled components for AsideComp;
const SideBarContainer = styled.aside`
  display: flex;
  /* max-width: calc(14vw + 3vw); */
  /* min-width: calc(11.953rem + 2.561rem); */
  min-height: calc(100vh - 1.875rem - 1.4rem);
`;

const SideBarTabs = styled.div`
  width: 2.561rem;
  min-width: 2.561rem;
  height: calc(100vh - 1.875rem - 1.4rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  width: 11.953rem;
  min-width: 11.953rem;
  /* display: ${({ isHidden }) => (isOpenSideBar ? "block" : "none")}; */
  display: ${(props) => (props.visibility ? "block" : "none")};
`;
