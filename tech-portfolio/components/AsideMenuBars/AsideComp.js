import React from 'react';
import Icon from '../common/icons/icons';
import styled from 'styled-components';
import ExplorerComp from '../../components/Explorerbar/ExplorerComp';
import {MailComp, CodeBaseComp, GithubComp} from '../SidebarComps/SidebarComp';
import ModalComp from '../Form/Modal';


const AsideComp = ({toggleState, toggleTab, toggleSideTab, isExpanded, toggleModal, isModalPopUp}) => {

    return (
        <SideBarContainer>
            <SideBarTabs>
                <TopSideBarTabs>
                    <div className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(1)}
                        onDoubleClick={toggleSideTab}
                        >
                        <Icon name='FilesIcon' 
                        size={23} 
                        color={toggleState === 1 ? '#fff' : '#bfbfbf'}
                        className='icon'
                        />
                    </div>
                    <div className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(2)}>
                        <Icon name='SearchRightIcon' 
                        size={23} 
                        color={toggleState === 2 ? '#fff' : '#bfbfbf'} 
                        className='icon'
                        />
                    </div>
                    <div className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(3)}>
                        <Icon name='CodeIcon' 
                        size={23} 
                        color={toggleState === 3 ? '#fff' : '#bfbfbf'} 
                        className='icon'
                        />
                    </div>
                    <div className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(4)}>
                        <Icon name='GithubIcon' 
                        size={23} 
                        color={toggleState === 4 ? '#fff' : '#bfbfbf'}
                        className='icon'
                        />
                    </div>
                    <div className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(5)}>
                        <Icon name='MailIcon' 
                        size={23} 
                        color={toggleState === 5 ? '#fff' : '#bfbfbf'}
                        className='icon'
                        />
                    </div>
                    <div className={toggleState === 6 ? 'tabs active-tabs' : 'tabs'}
                        onClick={() => toggleTab(6)}>
                        <Icon name='PluralsightIcon' 
                        size={23} 
                        color={toggleState === 6 ? '#fff' : '#bfbfbf'}
                        className='icon'
                        />
                    </div>
                </TopSideBarTabs>
                <BottomSideBarTabs>
                        <div className='tabs' 
                            onClick={() => toggleModal()}>
                            <Icon name='personcircle' 
                            size={23} 
                            color={toggleState === 7 ? '#fff' : '#bfbfbf'}
                            className='icon'
                            />
                        </div>
                        <div className='tabs'>
                            <Icon name='SettingsIcon' 
                            size={23} 
                            color={toggleState === 8 ? '#fff' : '#bfbfbf'}
                            className='icon'
                            />
                        </div>
                </BottomSideBarTabs>
            </SideBarTabs>
            <SideBarContents visibility={isExpanded ? +true : undefined}>
                <div className={toggleState === 1 ? 'content active-content' : 'content'}>
                    <ExplorerComp />
                    {/* ExplorerComp */}
                </div>
                <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                    {/* <SearchComp /> */}
                    SearchComp
                </div>
                <div className={toggleState === 3 ? 'content active-content' : 'content'}>
                    <CodeBaseComp />
                </div>
                <div className={toggleState === 4 ? 'content active-content' : 'content'}>
                    <GithubComp />
                    {/* GithubComp */}
                </div>
                <div className={toggleState === 5 ? 'content active-content' : 'content'}>
                    <MailComp />
            
                </div>
                <div className={toggleState === 6 ? 'content active-content' : 'content'}>
                    {/* <Pluralsight /> */}
                    Pluralsight
                </div>
                
                
                
                <div className={toggleState === 8 ? 'content active-content' : 'content'}>
                    {/* <Pluralsight /> */}
                    Settings
                </div>
            </SideBarContents>
            {/* <div> */}
                <ModalComp isModalPopUp={isModalPopUp} />
            {/* </div> */}
        </SideBarContainer>
    )
};

export default AsideComp;


// styled components for AsideComp;
const SideBarContainer = styled.aside`
    display: flex;
    max-width: calc(14vw + 3vw);
    min-height: calc(100vh - 30px - 30px);
    position: relative;
    z-index: 1;
    /* overflow-y: auto; */
    /* border: 2px solid yellowgreen; */
`

const SideBarTabs = styled.div`
    width: 3vw;
    min-width: 40px;
    height: calc(100vh - 30px - 30px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: #000000; */
`
const TopSideBarTabs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
`
const BottomSideBarTabs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
`

const SideBarContents = styled.div`
    width: 14vw;
    min-width: 187px;
    /* display: ${({ isHidden }) => isOpenSideBar ? 'block' : 'none'}; */
    display: ${props => props.visibility ? 'block' : 'none'};
`

// export const SideBarContentLayout = ({children, sidebarTitle}) => {
//     return (
//         <SideBarContainer>
//             <SideBarTop sidebarTitle={sidebarTitle}/>
//             <SideBarContent>
//                 {children}
//             </SideBarContent>
//         </SideBarContainer>
//     )
// };


// styled components for SideBarLayout

// const SideBarContainer = styled.aside`
//     min-width: 14vw;
//     max-height: calc(100vh - 30px - 30px);
//     background-color: #e9e9e9;
//     border: 2px solid yellowgreen;
// `


// const SideBarContent = styled.section`
//     margin: 5px 10px;
// `



// export const SideBarTop = ({sidebarTitle}) => {
//     return (
//         <SideBarTopBox>
//             <ExplorerTopTabTitle>
//                 {sidebarTitle}
//             </ExplorerTopTabTitle>
//         </SideBarTopBox>
//     )
// };


// const SideBarTopBox = styled.label`


// `

// const ExplorerTopTabTitle = styled.p`
//     color: whitesmoke;
//     font-size: 0.9rem;
//     margin-left: 15px;
//     padding: 8px 7px;
// ` 



// 
//     .content {
//     background: ;
//     padding: 20px;
//     width: 100%;
//     height: 100%;
//     display: none;
// } 

// 
//     .active-content {
//     display: block;
// }

//  
//     .active-tabs {
//         background: white;
//         border-bottom: 1px solid transparent;
// }

// const ExplorerContentComp = () => {
//     return (
//         <>
//             <SideBarLayout sidebarTitle="EXPLORER">
//                 <ExplorerTopMenuSections>

//                     <ExplorerTopSectionTab>
//                         <ExplorerTopSectionLabel>
//                             <Icon name="ChevronRight" 
//                             size={20}
//                             />
//                                 (WORKSPACE)
//                         </ExplorerTopSectionLabel>
//                     </ExplorerTopSectionTab>

//                     <ExplorerSections>
//                         <ExplorerSectionsTab>
//                             <ExplorerSectionLabel>
//                                 <Icon name="ChevronRight" 
//                                 size={20}
//                                 />
//                                     TECH-PORTFOLIO
//                             </ExplorerSectionLabel>
//                             <ExplorerPortfolioComp /> // import Comp
//                         </ExplorerSectionsTab>
//                     </ExplorerSections>
//                 </ExplorerTopMenuSections> 
//             </SideBarLayout>
//         </>
//     )
// };
// const SearchContentComp = () => {
//     return (
//         <>
//             <SideBarLayout sidebarTitle="SEARCH">
//                 <SearchInput>
//                         <input type='text' placeholder='Search' />
//                         <Icon name='FontIcon' size={20} />
//                         <Icon name='MatchWholeWord' size={20} />
//                         <Icon name='UseRegularExpression' size={20} />
//                 </SearchInput>

//             </SideBarLayout>
//         </>
//     )
// };

// const CodeBaseContentComp = () => {
//     return (
//         <>
//             <SideBarLayout sidebarTitle="CODEBASE">

                
//             </SideBarLayout>
//         </>
//     )
// };
// const GithubContentComp = () => {
//     return (
//         <>
//             <SideBarLayout sidebarTitle="GITHUB">

                
//             </SideBarLayout>
//         </>
//     )
// };


// const MailContentComp = () => {
//     return (
//         <>
//             <SideBarLayout sidebarTitle="MAIL2CONTACT">
//                 <div>
//                     <form>
//                         <label>Name</label>
//                         <input type='text' value='' required/>
//                         <label>Name of Organization</label>
//                         <input type='text' value='' />
//                         <label>Message</label>
//                         <textarea placeholder='type your message'required />
//                         <button type='submit'>SEND</button>
//                     </form>
//                 </div>
            
//             </SideBarLayout>
//         </>
//     )
// };


// const PluralsightContentComp = () => {
//     return (
//         <>
//             <SideBarLayout sidebarTitle="PLURALSIGHT">
                
//             </SideBarLayout>
//         </>
//     )
// };


