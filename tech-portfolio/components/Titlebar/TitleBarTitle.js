const TitleBarTitle = () => {
    return (
        <TitleBarCenter>
            <TitleBarText>Caleb D. Duff - Visual Studio Code</TitleBarText>
        </TitleBarCenter>
    )
}

export default TitleBarTitle;

TitleBarCenter = styled.div`
    flex: 1;
    text-align: center;
`

TitleBarText = styled.p`
    font-size: xx-large;
`
