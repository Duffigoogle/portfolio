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
    /* border: 2px solid purple; */
    background-color: #757575;
    width: 3.44rem;
    /* height: 80.3vh; */
    /* height: 100%; */
`

const TabShowcase = styled.label`
    
`
