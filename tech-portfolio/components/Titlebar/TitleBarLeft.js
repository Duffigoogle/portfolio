import Image from 'next/image';
import styled from 'styled-components';

const TitleBarLeftTabs = () => {
    return (
        <TitleBarLeft>
            <TitleLogo>
                <Image src='/vscode_icon.svg' alt='vs code icon' width={20} height={20} />
            </TitleLogo>
            <TitleTabs>
                <TitleTab>File</TitleTab>
                <TitleTab>Edit</TitleTab>
                <TitleTab>View</TitleTab>
                <TitleTab>Go</TitleTab>
                <TitleTab>Run</TitleTab>
                <TitleTab>Terminal</TitleTab>
                <TitleTab>Help</TitleTab>
            </TitleTabs>
        </TitleBarLeft>
    )
}

export default TitleBarLeftTabs;



const TitleBarLeft = styled.div`
    display: flex;
    flex: 1;
    background-color: red;
`

const TitleLogo = styled.div`
    margin-right: 10px;
`

const TitleTabs = styled.div`
    display: flex;
`

const TitleTab = styled.p`
    font-size: 1rem;
    margin-right: 10px;
`
