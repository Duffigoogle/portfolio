import styled from 'styled-components';

const TitleBarTitle = () => {
    return (
        <TitleBarCenter>
            <TitleBarText>Caleb D. Duff - Visual Studio Code</TitleBarText>
        </TitleBarCenter>
    )
}

export default TitleBarTitle;


//styled-components for TITLEBARTITLE
const TitleBarCenter = styled.div`
    /* flex: 1; */
    flex: 1;
    text-align: center;
    /* background-color: green; */
`

const TitleBarText = styled.p`
    font-size: 0.8rem;
`
