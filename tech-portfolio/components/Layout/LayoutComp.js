import TitlebarComp from '../Titlebar/TitlebarComp';
import AsideComp from '../AsideMenuBars/AsideComp';
import FooterComp from '../Footer/FooterComp';
import styles from '../../styles/Home.module.scss';
import styled from 'styled-components';
import { useState } from 'react';

const LayoutComp = ({children}) => {

    // Logic for toggling between the Tabs on the SideBar
    const [toggleState, setToggleState] = useState(1);
    const [isExpanded, setIsExpanded] = useState(+true);

    const toggleTab = (ind) => {
        setToggleState(ind)
    };


    const toggleSideTab = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <main className={styles.container}>
                <TitlebarComp />
                <LayoutAsideBars>
                    <AsideComp toggleState={toggleState} toggleTab={toggleTab} 
                    toggleSideTab={toggleSideTab} isExpanded={isExpanded}
                    />
                    <DisplayAreaContainer isExpanded={isExpanded}>
                        {children}
                    </DisplayAreaContainer>
                </LayoutAsideBars>
                <FooterComp />
            </main>
        </>
    )
}

export default LayoutComp;


const LayoutAsideBars = styled.aside`
    display: flex;
    /* display: ${({isOpen}) => (isOpen ? 'flex' : 'none')}; */
    flex-direction: row;
`

const DisplayAreaContainer = styled.div`
    height: calc(100vh - 30px - 30px);
    /* border: 1px solid green; */
    overflow: hidden;
    width: ${({isExpanded}) => (isExpanded == true ? 'calc(100vw - 17vw)' : 'calc(100vw - 3vw)')};
` 