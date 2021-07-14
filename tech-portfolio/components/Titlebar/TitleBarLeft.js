import Image from 'next/image';
import styled from 'styled-components';

const TitleBarLeftTabs = () => {
    return (
        <TitleBarLeft>
            <TitleLogo>
                <Image src='/vscode_icon.svg' alt='vs code icon' width={17} height={17} />
            </TitleLogo>
            <TitleTabs>
                <TitleTab>File</TitleTab>
                <TitleTab>Edit</TitleTab>
                <TitleTab>Selection</TitleTab>
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
    align-items: center;
`

const TitleLogo = styled.div`
    margin-right: 0.85rem;
    
`

const TitleTabs = styled.div`
    display: flex;
`

const TitleTab = styled.p`
    font-size: 0.82rem;
    margin-right: 0.9rem;
`
