import TabSchema from './TabSchema';
import tabs from './Tabs_data';
import styled from 'styled-components';
import Icon from '../common/icons/icons';
import Link from 'next/link';

const TabsTaskbarComp = () => {
    return (
        <>
            <TabsTaskbarContainer>
                <TabsCollection>
                    {tabs.map((tab, index) => (
                        <TabSchema key={index} {...tab} id={index} />
                    ))}
                </TabsCollection>
                <TabsTaskbarIcons>
                        <Link href="#">
                            <TabsIconBox>
                                <Icon name='PlayButtonOutline' size={15} color='#e0e0e0' />
                            </TabsIconBox>
                        </Link>
                        <Link href="#">
                            <TabsIconBox>
                                <Icon name='GitCompareIcon' size={15} color='#e0e0e0' />
                            </TabsIconBox>
                        </Link>
                        <Link href="#">
                            <TabsIconBox>
                                <Icon name='TwoColumns' size={15} color='#e0e0e0' />
                            </TabsIconBox>
                        </Link>
                        <Link href="#">
                            <TabsIconBox>
                                <Icon name='ThreeDots' size={15} color='#e0e0e0' />
                            </TabsIconBox>
                        </Link> 
                </TabsTaskbarIcons>
            </TabsTaskbarContainer>

        </>
    )
}

export default TabsTaskbarComp;


const TabsTaskbarContainer = styled.nav`
    /* border: 1px solid red; */
    display: flex;
    background-color: #bdbdbd;

`

const TabsCollection = styled.label`
    display: flex;
`

const TabsTaskbarIcons = styled.div`
    /* border: 1px solid red; */
    width: 10vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const TabsIconBox = styled.div`
    cursor: pointer;
`