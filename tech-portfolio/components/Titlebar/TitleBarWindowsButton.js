import styled from 'styled-components';

const TitleBarWindowsButton = () => {
    return (
        // <TitleBarWindowIconsContainer>
            <TitleBarWindowIcons>
                <TitleBarMinimiseWindow/>
                <TitleBarMaximiseWindow />
                <TitleBarCloseWindow />
            </TitleBarWindowIcons>
        // </TitleBarWindowIconsContainer>
    )
}

export default TitleBarWindowsButton;



//styled components for the TitleBarWindowsButton.
// const TitleBarWindowIconsContainer = styled.div`
//     flex: 1;
// `

const TitleBarWindowIcons = styled.div`
     display: flex;
     flex: 1;
     align-items: center;
     justify-content: flex-end;
     /* background-color: whitesmoke; */
     height: 30px;

    /* & * {
        margin-left: 0.5rem;
        height: 13px;
        width: 13px;
        border-radius: 50%;
        cursor: pointer;
    } */
`

const TitleBarCloseWindow = styled.div`
    background-color: #ff5555;
    height: 13px;
        width: 13px;
        border-radius: 50%;
        margin-left: 10px;
        cursor: pointer;
    
`
const TitleBarMaximiseWindow = styled.div`
    background-color: #50fa7b;
    height: 13px;
        width: 13px;
        border-radius: 50%;
        margin-left: 10px;
        cursor: pointer;
`
const TitleBarMinimiseWindow = styled.div`
    background-color: #f1fa8c;
    height: 13px;
        width: 13px;
        border-radius: 50%;
        margin-left: 10px;
        cursor: pointer;
`