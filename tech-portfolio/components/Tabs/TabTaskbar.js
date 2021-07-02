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
    display: flex;
`

const TabShowcase = styled.label`

`
