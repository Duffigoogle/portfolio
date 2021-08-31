// import Icon from "../common/icons/icons";
import styled from "styled-components";
import { useState, useRef, useEffect, useCallback } from "react";
import ThemeSchemaComp from "../VScodeTheme/ThemeScheme";
import Icon from "../common/icons/icons";
// import ModalComp from "./Modal";

export const ModalItem = ({ itemName, shortcut, onClick }) => {
  return (
    <>
      <ThemeInfo onClick={onClick}>
        <h3>{itemName}</h3>
        <p>{shortcut}</p>
      </ThemeInfo>
    </>
  );
};

const ThemeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.7rem;
  width: 15rem;
  cursor: pointer;
  color: #ccf; /* background-color: skyblue; */

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  h3 {
    font-size: 0.9rem;
  }

  p {
    font-size: 0.7rem;
    font-style: italic;
    color: #ccc;
  }
`;

export const Modal = ({ modalTwo, setModalTwo }) => {
  const myRef = useRef();

  const [showSecondModal, setShowSecondModal] = useState(false);

  const closeModal = () => {
    setModalTwo(!modalTwo);
    console.log("closed Modal 2");
  };

  const toggleSecondModal = () => {
    setShowSecondModal(!showSecondModal);
    console.log("closed Modal");
    // closeModal();
  };

  // If user clicks outside the modal window, then close modal.
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalTwo === true && !myRef.current.contains(e.target)) {
        setModalTwo(false);
        console.log("I clicked outside");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modalTwo, setModalTwo]);

  return (
    <StyledDivModal modalTwo={modalTwo} ref={myRef}>
      <ModalItem itemName="settings" shortcut="CRTL+," />
      <ModalItem
        itemName="color theme"
        onClick={toggleSecondModal}
        shortcut="CRTL+K CTRL+T "
      />
      <ColorThemeDisplay
        showSecondModal={showSecondModal}
        setShowSecondModal={setShowSecondModal}
      />
      <ModalItem itemName="check for updates" shortcut="" />
    </StyledDivModal>
  );
};

// onClick={(evt) => evt.stopPropagation()}

const StyledDivModal = styled.div`
  display: ${(modalTwo) => {
    modalTwo ? "block" : "none";
  }};
  position: fixed;
  z-index: 5;
  left: 40px;
  bottom: 20px;
  width: 240px;
  padding: 0.5rem 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  span {
    display: none;
  }
`;

const ModalComp = ({ modalOne, setModalOne }) => {
  const myRef = useRef();

  // If user clicks outside the modal window, then close modal.
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalOne === true && !myRef.current.contains(e.target)) {
        setModalOne(false);
        console.log("I clicked outside");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modalOne, setModalOne]);

  return (
    <StyledModal modalOne={modalOne} ref={myRef}>
      <StyledModalContent>
        <p> Duffigoogle (Github)</p>
        {/* ArrowRight */}
        <Icon name="ChevronRight" size={17} color="#fff" />
      </StyledModalContent>
      <span></span>
      <StyledModalContent>
        <p>Turn on Settings Sync...</p>
      </StyledModalContent>
    </StyledModal>
  );
};

export default ModalComp;

// styled components for AsideComp;

const StyledModal = styled.div`
  /* display: ${(modalOpen, modal) => {
    (modalOpen = true && modal === "modal-one") ? "block" : "none";
  }}; */
  display: ${(modalOne) => {
    modalOne ? "block" : "none";
  }};
  position: fixed;
  z-index: 5;
  left: 40px;
  bottom: 70px;
  width: 200px;
  height: 50px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledModalContent = styled.div`
  display: flex;
  align-items: center;
  background-color: #888;
  margin: 0 auto;
  padding: 3px;
  /* border: 1px solid #fefefe; */
  width: 97%;

  &:hover {
    background-color: #444444;
    cursor: pointer;
  }

  p {
    font-size: 0.8rem;
    padding: 0px 15px;
    color: #fefefe;
    margin-right: 1.25rem;
  }
`;

export const ColorThemeDisplay = ({ showSecondModal, setShowSecondModal }) => {
  const myRef = useRef();

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showSecondModal) {
        setShowSecondModal(false);
        console.log("pressed ESC key");
      }
    },
    [setShowSecondModal, showSecondModal]
  );

  // If user presses the ESC button.
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  // If user clicks outside the modal window, then close modal.
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showSecondModal === true && !myRef.current.contains(e.target)) {
        setShowSecondModal(false);
        console.log("I clicked outside");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSecondModal, setShowSecondModal]);

  return (
    <>
      {showSecondModal ? (
        <ThemesContainer showSecondModal={showSecondModal} ref={myRef}>
          <h2>Manage Themes</h2>
          <ThemeSchemaComp
            name="GitHub Dark"
            publisher="GitHub"
            theme="github-dark"
            description="GitHub theme for VS Code"
          />
          <ThemeSchemaComp
            name="Mood Blink"
            publisher="Inem-Studio"
            theme="Mood blink"
            description="A dark theme for many editors, shells, and more."
          />
          <ThemeSchemaComp
            name="Color Splash"
            publisher="Ekom-Studio"
            theme="Color splash"
            description="A simple kiddy theme with bright colors."
          />
          <ThemeSchemaComp
            name="Glow Shades"
            publisher="UtomStudio"
            theme="Glow shades"
            description="A simple theme with Glow shades."
          />
          <ThemeSchemaComp
            name="Moonlight Call"
            publisher="Ima-Studio"
            theme="Moonlight calls"
            description="An arctic, north-bluish clean and elegant Visual Studio Code theme."
          />
        </ThemesContainer>
      ) : null}
    </>
  );
};

const ThemesContainer = styled.main`
  display: ${({ showSecondModal }) => (showSecondModal ? "block" : "none")};
  margin: 1rem 0;
  padding: 0.6rem 0;
  text-align: center;
  color: #ccf;
  background-color: rgba(0, 0, 0, 0.8);
  width: 25rem;
  position: fixed;
  z-index: 8;
  left: 36rem;
  top: 20px;

  h2 {
    font-weight: 700;
  }
`;

export const ModalManager = ({
  modalOne,
  modalTwo,
  setModalOne,
  setModalTwo,
  toggleDiv,
}) => {
  return (
    <>
      <div>
        {modalOne === true && toggleDiv === 1 ? (
          <ModalComp modalOne={modalOne} setModalOne={setModalOne} />
        ) : null}
      </div>
      <div>
        {modalTwo === true && toggleDiv === 2 ? (
          <Modal modalTwo={modalTwo} setModalTwo={setModalTwo} />
        ) : null}
      </div>
    </>
  );
};
