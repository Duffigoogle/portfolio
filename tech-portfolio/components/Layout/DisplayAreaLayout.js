import styled from 'styled-components';
import TabsTaskbarComp from '../Tabs/TabTaskbar';
// import CodeLinesComp from '../codelines/CodeLinesComp';


const DisplayAreaLayoutComp = ({children}) => {
    return (
        <>
           <DisplayAreaContainer>

                <DisplayAreaContainerTop>
                        <TabsTaskbarComp />
                        <FilePathLabel>File path</FilePathLabel>
                </DisplayAreaContainerTop>
                     <PageContainer>{children}</PageContainer>    

            </DisplayAreaContainer> 
        </>
    )
}

export default DisplayAreaLayoutComp;


const DisplayAreaContainer = styled.div`
    width: 100%;
    height: calc(100vh - 30px - 30px);
    /* border: 1px solid green; */
    
`

const DisplayAreaContainerTop = styled.div`
    /* border: 1px solid red; */
`

const FilePathLabel = styled.div`
    background-color: #616161;
    /* box-shadow: 0px 2px 1px #9e9e9e; */
    
`

const PageContainer = styled.main`
    display: flex;
    /* width: 80vw; */
    height: 85vh;
    overflow-y: auto;
    
`

