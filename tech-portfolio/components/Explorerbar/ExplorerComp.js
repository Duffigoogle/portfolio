import styled from 'styled-components';
import Icon from '../common/icons/icons';
import Link from 'next/link';
import Image from 'next/image'
import ExplorerPortfolioComp from '../Explorerbar/ExplorerPortfolio';

const ExplorerComp = () => {
    return (
        <ExplorerMenu>
            <ExplorerTopMenu>
                <ExplorerMenuLabel>
                    EXPLORER
                </ExplorerMenuLabel>

                <ExplorerTopMenuSections>

                    <ExplorerEditorMenu>
                        <ExplorerTopSectionLabel>
                            <Icon name="ChevronRight" 
                            size={18}
                            />
                                OPEN EDITORS
                        </ExplorerTopSectionLabel>

                        <ExplorerEditorSection>
                                <Link href="/">
                                    <ExplorerPortfolioItem>
                                        <Image
                                            src="/vscode_icon.svg"
                                            alt="Markdown Icon"
                                            height={18}
                                            width={18}
                                        />{' '}
                                        <ExplorerPortfolioP>Welcome</ExplorerPortfolioP>
                                    </ExplorerPortfolioItem>
                                </Link> 
                        </ExplorerEditorSection>
                    </ExplorerEditorMenu>
                        
                    <ExplorerWorkspaceMenu>
                        <ExplorerTopSectionLabel>
                            <Icon name="ChevronRight" 
                            size={18}
                            />
                                (WORKSPACE)
                        </ExplorerTopSectionLabel>

                        <ExplorerPortfolioMenu>
                            <ExplorerPortfolioLabel>
                                <Icon name="ChevronRight" 
                                size={18}
                                />
                                    TECH-PORTFOLIO
                            </ExplorerPortfolioLabel>

                                <ExplorerPortfolioComp />

                        </ExplorerPortfolioMenu>
                    </ExplorerWorkspaceMenu>


                </ExplorerTopMenuSections> 
            </ExplorerTopMenu>
            
        </ExplorerMenu>
    )
}

export default ExplorerComp;


//STYLING THE STYLED COMPONENTS FOR EXPLORERMENU
const ExplorerMenu = styled.div`
    width: 14vw;
    max-width: 14vw;
    background-color: #616161;
    height: calc(100vh - 30px - 30px);
`

const ExplorerTopMenu = styled.div`
    width: 100%;
    /* padding: 5px 10px; */
`

const ExplorerMenuLabel = styled.p`
    color: whitesmoke;
    font-size: 0.7rem;
    margin-left: 0.94rem;
    padding: 0.7rem 0.44rem;
` 
const ExplorerTopMenuSections = styled.section`
     border: 1px solid red;
    /* height: 30vh;  */
`

const ExplorerEditorMenu = styled.div`
    border: 1px solid blue;
`
const ExplorerWorkspaceMenu = styled.div`
    padding: 1px 0;
`

const ExplorerEditorSection = styled.div`

`
const ExplorerPortfolioItem = styled.div`
    display: flex;
    align-items: center;
    height: 3.5vh;
    width: 13.9vw;
    /* background-color: skyblue; */
    margin-top: 1px;
    padding-left: 25px;
    cursor: pointer;
    &:hover {
        background-color: blue;
    }
    &.active {
        background-color: red;
        /* background-color: ${router.pathname === '/' ? '#fff' : 'rgb(106, 115, 125)' }; */
    }
`

const ExplorerPortfolioP = styled.p`
    font-size: 0.8rem;
    padding-left: 5px;
`


const ExplorerTopSectionLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    color: whitesmoke;
    padding: 5px 0;
    background-color: #3f3f3f;
`

const ExplorerPortfolioLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    color: whitesmoke;
    padding: 0.31rem 0 0.31rem 0.88rem;
    background-color: #818181;
    
    &:hover {
        background-color: #bfbfbf;
    }
`

const ExplorerPortfolioMenu = styled.section`
    height: 30vh; 
    /* padding-left: 0.9rem; */
    border: 1px blue;
`

const ExplorerSectionsTab = styled.div`
    /* border: 1px solid #fff; */
    /* padding-left: 0px; */
`

const ExplorerSectionLabel = styled.label`
    display: flex;
    height: 3.5vh;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    color: whitesmoke;
    padding-left: 15px;
    &:hover {
        background-color: blue;
    }
`