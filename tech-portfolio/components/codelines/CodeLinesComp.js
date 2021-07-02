import styled from 'styled-components';

const CodeLinesComp = () => {
    return (
        <>
            <CodeLinesContainer>
                    <TabShowcase>
                        {/* {tabs.map((tab, index) => (
                        <TabSchema key={index} {...tab} id={index} />
                        ))} */}
                    </TabShowcase> 
            </CodeLinesContainer>
               
        </>
    )
}

export default CodeLinesComp;


const CodeLinesContainer = styled.aside`
    border: 1px solid red;
    width: 50px;
    height: 100%;
    /* width: 100%; */
`

const TabShowcase = styled.label`
    
`
