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
     /* border: 1px solid #fff; */

`

const TitleBarCloseWindow = styled.div`
        background-color: #ff5555;
        height: 0.81rem;
        width: 0.81rem;
        border-radius: 50%;
        margin-left: 1rem;
        cursor: pointer;
    
`
const TitleBarMaximiseWindow = styled.div`
        background-color: #50fa7b;
        height: 0.81rem;
        width: 0.81rem;
        border-radius: 50%;
        margin-left: 1.5rem;
        cursor: pointer;
`
const TitleBarMinimiseWindow = styled.div`
        background-color: #f1fa8c;
        height: 0.81rem;
        width: 0.81rem;
        border-radius: 50%;
        margin-left: 1.5rem;
        cursor: pointer;
`