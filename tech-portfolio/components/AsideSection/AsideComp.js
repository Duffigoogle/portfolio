import {React, useState} from 'react';
import Icon from '../common/icons/icons';
import styled from 'styled-components';


const AsideComp = () => {

    // Logic for toggling between the Tabs on the SideBar
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (ind) => {
        setToggleState(ind)
    }

    return (
        <SideBarContainer>
            <SideBarTabs>
                <div className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(1)}>
                    <Icon name='FilesIcon' 
                    size={23} 
                    color={toggleState === 1 ? '#fff' : '#bfbfbf'}/>
                </div>
                <div className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(2)}>
                    <Icon name='SearchRightIcon' size={23} 
                    color={toggleState === 2 ? '#fff' : '#bfbfbf'} />
                </div>
                <div className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(3)}>
                    <Icon name='CodeIcon' 
                    size={23} 
                    color={toggleState === 3 ? '#fff' : '#bfbfbf'} />
                </div>
                <div className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(4)}>
                    <Icon name='GithubIcon' 
                    size={23} 
                    color={toggleState === 4 ? '#fff' : '#bfbfbf'}/>
                </div>
                <div className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(5)}>
                    <Icon name='MailIcon' 
                    size={23} 
                    color={toggleState === 5 ? '#fff' : '#bfbfbf'}/>
                </div>
                <div className={toggleState === 6 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(6)}>
                    <Icon name='PluralsightIcon' 
                    size={23} 
                    color={toggleState === 6 ? '#fff' : '#bfbfbf'}/>
                </div>
            </SideBarTabs>
            <SideBarContents>
                <div className={toggleState === 1 ? 'content active-content' : 'content'}>
                    {/* <ExplorerComp /> */}
                    ExplorerComp
                </div>
                <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                    {/* <SearchComp /> */}
                    SearchComp
                </div>
                <div className={toggleState === 3 ? 'content active-content' : 'content'}>
                    {/* <CodeBaseComp /> */}
                    CodeBaseComp
                </div>
                <div className={toggleState === 4 ? 'content active-content' : 'content'}>
                    {/* <GithubComp /> */}
                    GithubComp
                </div>
                <div className={toggleState === 5 ? 'content active-content' : 'content'}>
                    {/* <MailComp /> */}
                    MailComp
                </div>
                <div className={toggleState === 6 ? 'content active-content' : 'content'}>
                    {/* <Pluralsight /> */}
                    Pluralsight
                </div>
            </SideBarContents>
        </SideBarContainer>
    )
};

export default AsideComp;


// styled components for AsideComp;

const SideBarContainer = styled.aside`
    display: flex;
    min-width: calc(14vw + 5vw);
    max-height: calc(100vh - 30px);
    /* border: 2px solid y     ellowgreen; */
`

const SideBarTabs = styled.div`
    width: 5vw;
    min-width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    /* background-color: #000000; */
`

const SideBarContents = styled.div`
    width: 14vw;
    min-width: 187px;
    /* background-color: #9e9e9e; */
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


