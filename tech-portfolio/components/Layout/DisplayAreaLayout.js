import styled from 'styled-components';
import TabsTaskbarComp from '../Tabs/TabTaskbar';
import CodeLinesComp from '../codelines/CodeLinesComp';


const DisplayAreaLayoutComp = ({children}) => {
    return (
        <>
           <DisplayAreaContainer>

                <DisplayAreaContainerTop>
                        <TabsTaskbarComp />
                        <FilePathLabel>File path</FilePathLabel>
                </DisplayAreaContainerTop>
                        
                <DisplayAreaContainerLeft>
                    <CodeLinesComp />
                    {children}
                </DisplayAreaContainerLeft>

                

            </DisplayAreaContainer> 
        </>
    )
}

export default DisplayAreaLayoutComp;


const DisplayAreaContainer = styled.main`
    border: 1px solid green;
    /* display: flex;
    flex-direction: column; */
`

const DisplayAreaContainerTop = styled.div`
    /* border: 1px solid red; */
`

const FilePathLabel = styled.div`
    background-color: #616161;
    box-shadow: 0px 2px 1px #9e9e9e;
    /* z-index: 10; */
`

const DisplayAreaContainerLeft = styled.div`
    margin-top: 4px;
    display: flex;
    height: 90vh;
`
