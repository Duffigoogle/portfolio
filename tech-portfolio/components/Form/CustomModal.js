import Icon from "../common/icons/icons";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export const ModalItem = ({ itemName, shortcut, path }) => {
  return (
    <Link href={path}>
      <ThemeInfo>
        <h3>{itemName}</h3>
        <p>{shortcut}</p>
      </ThemeInfo>
    </Link>
  );
};

const ThemeInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.7rem;
  width: 15rem;
  /* background-color: skyblue; */

  :hover {
    background-color: rgba(255, 255, 255, 0.5);
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

export const Modal = () => {
  // if (!props.isModalPopUp) {
  //   return null;
  // }

  const togglehideModal = () => {
    setIsModalPopUp(!isModalPopUp);
  };
  return (
    <StyledDivModal onClick={(evt) => evt.stopPropagation()}>
      <ModalItem itemName="settings" shortcut="CRTL+," path="#" />
      <ModalItem
        itemName="color theme"
        shortcut="CRTL+K CTRL+T "
        path="#"
        onclick={togglehideModal}
      />
      <ModalItem itemName="check for updates" shortcut="" path="#" />
    </StyledDivModal>
  );
};

// export const CustomModal = (
//   title,
//   props,
//   topLabelText,
//   iconName,
//   iconSize,
//   bottomLabelText,
//   modalState
// ) => {
//   if (!props.isModalPopUp) {
//     return null;
//   }

//   return (
//     <StyledModal onClick={(evt) => evt.stopPropagation()}>
//       <span>{title}</span>
//       <StyledModalContent>
//         <p>{topLabelText}</p>
//         {/* ArrowRight */}
//         <Icon name={iconName} size={iconSize} color="#fff" />
//       </StyledModalContent>
//       <StyledModalContent>
//         <p>{bottomLabelText}</p>
//       </StyledModalContent>
//     </StyledModal>
//   );
// };

// styled components for AsideComp;

const StyledDivModal = styled.div`
  /* display: ${(isModalPopUp) => (isModalPopUp ? "block" : "none")}; */
  display: ${(isModalPopUp, modalState) => {
    modalState === 2 && isModalPopUp ? "block" : "none";
  }};
  position: fixed;
  z-index: 5;
  left: 40px;
  bottom: 70px;
  /* top: 0; */
  /* right: 2;  */
  width: 240px;
  padding: 0.5rem 0;
  /* height: 50px; */
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  span {
    display: none;
  }
`;

// const StyledModalContent = styled.div`
//   display: flex;
//   align-items: center;
//   background-color: #888;
//   margin: 0 auto;
//   padding: 3px;
//   /* border: 1px solid #fefefe; */
//   width: 97%;

//   &:hover {
//     background-color: #444444;
//     cursor: pointer;
//   }

//   p {
//     font-size: 0.8rem;
//     padding: 0px 15px;
//     color: #fefefe;
//     margin-right: 1.25rem;
//   }
// `;
