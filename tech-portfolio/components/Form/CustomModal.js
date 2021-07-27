import Icon from '../common/icons/icons';
import styled from 'styled-components';

const CustomModal = (title, props, topLabelText, iconName, iconSize, bottomLabelText) => {

    if (!props.isModalPopUp) {
        return null
    }
    
    return (
        <StyledModal onClick = {evt => evt.stopPropagation()}>
            <span>{title}</span>
            <StyledModalContent>
              <p>{topLabelText}</p>
              {/* ArrowRight */}
              <Icon name={iconName} size={iconSize} color='#fff' />
            </StyledModalContent>
            <StyledModalContent>
                <p>{bottomLabelText}</p> 
            </StyledModalContent>
        </StyledModal>
    )
}

export default CustomModal;


// styled components for AsideComp;

const StyledModal = styled.div`
    display: ${(isModalPopUp) => isModalPopUp ? 'block' : 'none'};
    position: fixed; 
    z-index: 5; 
    left: 40px;
    bottom: 70px;
    /* top: 0; */
    /* right: 2;  */
    width: 200px; 
    height: 50px; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);

    span {
        display: none;
    }

`

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
`