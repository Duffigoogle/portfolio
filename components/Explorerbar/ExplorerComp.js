import { useState, React } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Icon from "../common/icons/icons";
import Link from "next/link";
import Image from "next/image";
import ExplorerPortfolioComp from "../Explorerbar/ExplorerPortfolio";
import SideBarTitleComp from "../SidebarComps/SideBarTitle";

const ExplorerComp = ({ toggleSideTab, isExpanded }) => {
  const router = useRouter();

  const isCurrentPath = router.pathname === "/" || router.asPath === "/";

  const [isOpen, setIsOpen] = useState(true);
  const [isOpenPortfolio, setIsOpenPortfolio] = useState(true);
  const [isOpenWorkSpace, setIsOpenWorkSpace] = useState(true);

  const toggleEditorLabel = () => {
    setIsOpen(!isOpen);
  };
  const togglePortfolioLabel = () => {
    setIsOpenPortfolio(!isOpenPortfolio);
  };
  const toggleWorkspaceLabel = () => {
    setIsOpenWorkSpace(!isOpenWorkSpace);
  };

  return (
    <ExplorerMenu>
      <ExplorerTopMenu>
        <SideBarTitleComp text="EXPLORER" />

        <ExplorerTopMenuSections>
          <ExplorerEditorMenu>
            <ExplorerTopSectionLabel onClick={toggleEditorLabel}>
              <StyledSpan isOpen={isOpen}>
                <Icon name="ChevronRight" size={18} />
              </StyledSpan>
              OPEN EDITORS
            </ExplorerTopSectionLabel>

            <ExplorerEditorSection isOpen={isOpen}>
              <Link href="/" passHref>
                <ExplorerPortfolioItem isCurrentPath={isCurrentPath}>
                  <Image
                    src="/vscode_icon.svg"
                    alt="Markdown Icon"
                    height={18}
                    width={18}
                  />{" "}
                  <ExplorerPortfolioP>Welcome</ExplorerPortfolioP>
                </ExplorerPortfolioItem>
              </Link>
            </ExplorerEditorSection>
          </ExplorerEditorMenu>

          <ExplorerWorkspaceMenu>
            <ExplorerTopSectionLabel onClick={toggleWorkspaceLabel}>
              <StyledSpan isOpenWorkSpace={isOpenWorkSpace}>
                <Icon name="ChevronRight" size={18} />
              </StyledSpan>
              (WORKSPACE)
            </ExplorerTopSectionLabel>

            <ExplorerPortfolioMenu isOpenWorkSpace={isOpenWorkSpace}>
              <ExplorerPortfolioLabel onClick={togglePortfolioLabel}>
                <StyledSpan isOpenPortfolio={isOpenPortfolio}>
                  <Icon name="ChevronRight" size={18} />
                </StyledSpan>
                TECH-PORTFOLIO
              </ExplorerPortfolioLabel>

              <ExplorerPortfolioContent isOpenPortfolio={isOpenPortfolio}>
                <ExplorerPortfolioComp
                  toggleSideTab={toggleSideTab}
                  isExpanded={isExpanded}
                />
              </ExplorerPortfolioContent>
            </ExplorerPortfolioMenu>
          </ExplorerWorkspaceMenu>
        </ExplorerTopMenuSections>
      </ExplorerTopMenu>
    </ExplorerMenu>
  );
};

export default ExplorerComp;

//STYLING THE STYLED COMPONENTS FOR EXPLORERMENU
const ExplorerMenu = styled.div`
  width: 11.953rem;
  /* min-width: 14vw; */
  min-width: 11.953rem;
  /* background-color: #616161; */
  background-color: #444444;
  height: calc(100vh - 1.875rem - 1.3rem);
  min-height: calc(100vh - 1.875rem - 1.3rem);
`;

const ExplorerTopMenu = styled.div`
  width: 11.953rem;
  min-width: 11.953rem;
`;

const ExplorerTopMenuSections = styled.section`
  /* border: 1px solid red; */
  /* height: 30vh;  */
`;

const ExplorerEditorMenu = styled.div`
  /* border: 1px solid blue; */
`;
const ExplorerWorkspaceMenu = styled.div`
  padding: 1px 0;
`;

const ExplorerEditorSection = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  transition: transform 0.05s;
`;

const ExplorerPortfolioItem = styled.div`
  display: flex;
  align-items: center;
  height: 3.5vh;
  /* width: 13.9vw; */
  width: 11.953rem;
  /* background-color: skyblue; */
  margin-top: 1px;
  padding-left: 25px;
  cursor: pointer;
  background-color: ${({ isCurrentPath }) => (isCurrentPath ? "#bfbfbf" : "")};

  &:hover {
    background-color: blue;
  }
`;

const ExplorerPortfolioP = styled.p`
  font-size: 0.8rem;
  padding-left: 5px;
  color: #fff;
`;

const ExplorerTopSectionLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  color: whitesmoke;
  padding: 3.8px 0;
  background-color: #1d1d1d;
  /* background-color: #3f3f3f; */

  .icon_chevron_right {
    border: 1px solid #fff;
    transform: ${({ rotateChevron }) =>
      !rotateChevron ? "rotate(90deg)" : ""};
    transition: transform 0.2s;
  }
`;
const StyledSpan = styled.span`
  transform: ${({ isOpen, isOpenWorkSpace, isOpenPortfolio }) =>
    isOpen || isOpenWorkSpace || isOpenPortfolio ? "rotate(90deg)" : ""};
  transition: transform 0.01s;
`;

const ExplorerPortfolioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  color: whitesmoke;
  padding: 0.31rem 0 0.31rem 0.88rem;
  background-color: #818181;

  &:hover {
    background-color: #bfbfbf;
  }
`;

const ExplorerPortfolioMenu = styled.section`
  height: 30vh;
  display: ${({ isOpenWorkSpace }) => (isOpenWorkSpace ? "block" : "none")};
  transition: transform 0.05s;
`;

const ExplorerPortfolioContent = styled.div`
  display: ${({ isOpenPortfolio }) => (isOpenPortfolio ? "block" : "none")};
  transition: transform 0.05s;
`;

const ExplorerSectionLabel = styled.label`
  display: flex;
  height: 3.5vh;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  color: whitesmoke;
  padding-left: 15px;
  &:hover {
    background-color: blue;
  }
`;
