import styled from 'styled-components';
import Icon from '../common/icons/icons'
import ExplorerPortfolioComp from '../Explorerbar/ExplorerPortfolio'

const ExplorerComp = ({isOpen}) => {
    return (
        <ExplorerMenu>
            <ExplorerTopMenu>
                <ExplorerTopTabTitle>EXPLORER</ExplorerTopTabTitle>

                <ExplorerTopMenuSections>

                    <ExplorerTopSectionTab>
                        <ExplorerTopSectionLabel>
                            <Icon name="ChevronRight" 
                            size={20}
                            />
                                (WORKSPACE)
                        </ExplorerTopSectionLabel>
                    </ExplorerTopSectionTab>
 
                    <ExplorerSections>
                        <ExplorerSectionsTab>
                            <ExplorerSectionLabel>
                                <Icon name="ChevronRight" 
                                size={20}
                                />
                                    TECH-PORTFOLIO
                            </ExplorerSectionLabel>

                            <ExplorerPortfolioComp />

                        </ExplorerSectionsTab>

                    </ExplorerSections>

                </ExplorerTopMenuSections> 
            </ExplorerTopMenu>
            
        </ExplorerMenu>
    )
}

export default ExplorerComp;


//STYLING THE STYLED COMPONENTS FOR EXPLORERMENU
const ExplorerMenu = styled.div`
    min-width: 14vw;
    background-color: #616161;
    height: calc(100vh - 30px - 30px);
    /* display: ${({isOpen}) => (isOpen ? 'block' : 'none')}; */
`

const ExplorerTopMenu = styled.div`
    width: 100%;
    /* padding: 5px 10px; */
`

const ExplorerTopTabTitle = styled.p`
    color: whitesmoke;
    font-size: 0.9rem;
    margin-left: 15px;
    padding: 8px 7px;
` 

const ExplorerTopMenuSections = styled.section`
     border: 1px solid red;
    /* height: 30vh;  */
`

const ExplorerTopSectionTab = styled.div`
    /* border: 1px solid green; */
    padding: 1px 0;
`

const ExplorerTopSectionLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    color: whitesmoke;
`

const ExplorerSections = styled.section`
    height: 30vh; 
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