import Image from 'next/image';

const TitleBarLeftTabs = () => {
    return (
        <TitleBarLeft>
            <TitleLogo>
                <Image src='' alt='' width='' height='' />
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
    flex: 1;
    display: flex;
    margin-right: auto;
`

const TitleLogo = styled.div`
    margin-right: 10px;
`

const TitleTabs = styled.div`
    padding: 5px 10px;
`

const TitleTab = styled.p`
    font-size: 1rem;
`
