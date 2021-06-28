import TitlebarComp from '../Titlebar/TitlebarComp';
import SidebarComp from '../Sidebar/SideBarComp';
import ExplorerComp from '../Explorerbar/ExplorerComp';
import FooterComp from '../Footer/FooterComp';
import styles from '../../styles/Home.module.scss';
import styled from 'styled-components';
import { useState } from 'react';

const LayoutComp = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <main className={styles.container}>
                <TitlebarComp />
                <LayoutAsideBars>
                    <SidebarComp toggle={toggle}/>
                    <ExplorerComp isOpen={isOpen}/>
                    <div>
                        {children}
                    </div>
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