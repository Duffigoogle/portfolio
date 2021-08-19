import TitlebarComp from "../Titlebar/TitlebarComp";
import AsideComp from "../AsideMenuBars/AsideComp";
import FooterComp from "../Footer/FooterComp";
import styles from "../../styles/Home.module.scss";
import styled from "styled-components";
import { useState } from "react";

const LayoutComp = ({ children }) => {
  // Logic for toggling between the Tabs on the SideBar
  const [toggleState, setToggleState] = useState(1);
  const [isExpanded, setIsExpanded] = useState(+true);
  // const [modalState, setModalState] = useState(null);
  // const [isModalPopUp, setIsModalPopUp] = useState(false);

  const toggleTab = (ind) => {
    setToggleState(ind);
  };

  const toggleSideTab = () => {
    setIsExpanded(!isExpanded);
  };

  // const toggleModal = () => {
  //     setIsModalPopUp(!isModalPopUp);
  // };

  // const toggleModal = (num) => {
  //   setModalState(num);
  //   setIsModalPopUp(!isModalPopUp);
  //   // console.log("clicking");
  //   console.log(isModalPopUp);
  //   console.log(modalState);
  // };

  return (
    <>
      <main className={styles.container}>
        <TitlebarComp />
        <LayoutAsideBars>
          <AsideComp
            toggleState={toggleState}
            toggleTab={toggleTab}
            toggleSideTab={toggleSideTab}
            isExpanded={isExpanded}
            // modalState={modalState}
            // toggleModal={toggleModal}
            // isModalPopUp={isModalPopUp}
          />
          <DisplayAreaContainer isExpanded={isExpanded}>
            {children}
          </DisplayAreaContainer>
        </LayoutAsideBars>
        <FooterComp />
      </main>
    </>
  );
};

export default LayoutComp;

const LayoutAsideBars = styled.aside`
  display: flex;
  /* display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; */
  height: calc(100vh - 1.875rem - 1.478rem);
  flex-direction: row;
  width: 100%;
`;

const DisplayAreaContainer = styled.div`
  height: calc(100vh - 1.875rem - 1.4rem);
  overflow: hidden;
  /* width: ${({ isExpanded }) =>
    isExpanded == true
      ? "calc(100rem - 14.514rem)"
      : "calc(100rem - 11.953rem)"}; */
  /* width: ${({ isExpanded }) =>
    isExpanded == true
      ? "calc(100rem - 14.514rem)"
      : "calc(100rem - 11.953rem)"}; */
  width: ${({ isExpanded }) => (isExpanded == true ? "100vw" : "100vw")};
  /* margin-left: ${({ isExpanded }) => (isExpanded == true ? "0" : "")}; */
  /* position: relative; */
`;
