import React from 'react';
import TitleBarLeftTabs from '../Titlebar/TitleBarLeft';
import TitleBarTitle from './TitleBarTitle';
import TitleBarWindowsButton from './TitlebarWindowsButton';

const TitlebarComp = () => {
    return (
        <div>
            <TitleBarLeftTabs />
            <TitleBarTitle />
            <TitleBarWindowsButton/>
            
        </div>
    )
}

export default TitlebarComp;
