const TitleBarWindowsButton = () => {
    return (
        <TitleBarWindowIcons>
            <TitleBarMinimiseWindow/>
            <TitleBarMaximiseWindow />
            <TitleBarCloseWindow />
        </TitleBarWindowIcons>
    )
}

export default TitleBarWindowsButton;



//styled components for the TitleBarWindowsButton.
TitleBarWindowIcons = styled.div`
     flex: 1;
     display: flex;
     align-items: center;
     margin-left: auto;

    * {
        margin-left: 0.5rem;
        height: 13px;
        width: 13px;
        border-radius: 50%;
        cursor: pointer;
    }
`

TitleBarCloseWindow = styled.span`
    background-color: #ff5555;
`
TitleBarMaximiseWindow = styled.span`
    background-color: #f1fa8c;
`
TitleBarMinimiseWindow = styled.span`
    background-color: #f1fa8c;
`