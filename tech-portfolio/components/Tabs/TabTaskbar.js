import TabSchema from './TabSchema';
import tabs from './Tabs_data';
import styled from 'styled-components';

const TabsTaskbarComp = () => {
    return (
        <>
            <TabsTaskbarContainer>
                    <TabShowcase>
                        {tabs.map((tab, index) => (
                        <TabSchema key={index} {...tab} id={index} />
                        ))}
                    </TabShowcase> 
            </TabsTaskbarContainer>
               
        </>
    )
}

export default TabsTaskbarComp;


const TabsTaskbarContainer = styled.nav`
    border: 1px solid red;
    /* width: 100%; */
`

const TabShowcase = styled.label`
    display: flex;
`
