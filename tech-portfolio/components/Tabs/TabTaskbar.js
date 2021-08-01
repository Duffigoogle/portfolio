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
    justify-content: space-between;
    background-color: #999999;
    border-bottom: 0.13rem solid #444444;
    overflow-x: auto;

    &::-webkit-scrollbar {
        height: 0.18rem;
    }
 
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
 
    &::-webkit-scrollbar-thumb {
        background-color: none;
        outline: 1px solid slategrey;

        :hover {
            background-color: #ccc;
        }
}
`

const TabsCollection = styled.label`
    display: flex;

    :hover {
        cursor: pointer;
        box-shadow: 0px 3px 3px #e8e9ec;
    }
`

const TabsTaskbarIcons = styled.div`
    width: 8.538rem;
    min-width: 8.538rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const TabsIconBox = styled.div`
    cursor: pointer;
    
    /* :hover {
        border: 1px solid #999999;
        border-radius: 0.3rem;
        background-color: #bfbfbf;
    } */
`