import styled from 'styled-components';
import TabsTaskbarComp from '../Tabs/TabTaskbar';
import CodeLinesComp from '../codelines/CodeLinesComp';


const DisplayAreaLayoutComp = ({children}) => {
    return (
        <>
           <DisplayAreaContainer>
                <DisplayAreaContainerTop>
                    <TabsTaskbarComp />
                    <div>File path</div>
                </DisplayAreaContainerTop>
                <DisplayAreaContainerLeft>
                    <CodeLinesComp />
                </DisplayAreaContainerLeft>
                    {children}
            </DisplayAreaContainer> 
        </>
    )
}

export default DisplayAreaLayoutComp;


const DisplayAreaContainer = styled.main`
    border: 1px solid red;
`

const DisplayAreaContainerTop = styled.div`
    /* display: flex; */
`

const DisplayAreaContainerLeft = styled.div`
    /* display: flex; */
`
