import Icon from "../common/icons/icons";
import styled from "styled-components";

const ModalComp = ({ isModalPopUp, setIsModalPopUp }) => {
  return (
    <StyledModal
      isModalPopUp={isModalPopUp}
      onClick={(evt) => evt.stopPropagation()}
    >
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
  display: ${(isModalPopUp) => {
    isModalPopUp ? "block" : "none";
  }};
  /* display: ${(isModalPopUp) => {
    isModalPopUp ? "block" : "none";
  }}; */
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
