import React from 'react';
import TitleBarLeftTabs from '../Titlebar/TitleBarLeft';
import TitleBarTitle from './TitleBarTitle';
import TitleBarWindowsButton from './TitlebarWindowsButton';

const TitlebarComp = () => {
    return (
        <TitleBarMenu>
            <TitleBarLeftTabs />
            <TitleBarTitle />
            <TitleBarWindowsButton/>
        </TitleBarMenu>
    )
}

export default TitlebarComp;


//styled components for the SIDEBARMENU.
const TitleBarMenu = styled.div`
    background: red;
    height: 30px;
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.85rem;
    border-bottom: 1px solid #191d20;
`