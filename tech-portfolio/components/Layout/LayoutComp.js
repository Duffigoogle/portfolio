import TitlebarComp from '../Titlebar/TitlebarComp';
import AsideComp from '../AsideMenuBars/AsideComp';
import FooterComp from '../Footer/FooterComp';
import styles from '../../styles/Home.module.scss';
import styled from 'styled-components';
import { useState } from 'react';

const LayoutComp = ({children}) => {

    // Logic for toggling between the Tabs on the SideBar
    const [toggleState, setToggleState] = useState(1);
    const [modalState, setModalState] = useState(0);
    const [isExpanded, setIsExpanded] = useState(+true);
    const [isModalPopUp, setIsModalPopUp] = useState(false);

    const toggleTab = (ind) => {
        setToggleState(ind)
    };
    
    const toggleSideTab = () => {
        setIsExpanded(!isExpanded);
    };

    // const toggleModal = () => {
    //     setIsModalPopUp(!isModalPopUp);
    // };

    const toggleModal = (ind) => {
        setModalState(ind)
        setIsModalPopUp(!isModalPopUp);
        // console.log("clicking");
        // console.log(setIsModalPopUp());
    };


    

    return (
        <>
            <main className={styles.container}>
                <TitlebarComp />
                <LayoutAsideBars>
                    <AsideComp toggleState={toggleState} 
                    toggleTab={toggleTab} 
                    toggleSideTab={toggleSideTab}  
                    isExpanded={isExpanded}
                    toggleModal={toggleModal}
                    isModalPopUp={isModalPopUp}
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
    width: ${({isExpanded}) => (isExpanded == true ? 'calc(100vw - 14.514rem)' : 'calc(100vw - 11.953rem)')};
` 