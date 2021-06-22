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

export default TitleBarLeftTabs
