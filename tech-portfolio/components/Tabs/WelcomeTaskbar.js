import styled from 'styled-components';
import Icon from '../common/icons/icons';
import Link from 'next/link';

const WelcomeTaskbarComp = () => {
    return (
        <>
            <TabsTaskbarContainer>
                <TabsCollection>
                    <Link href='/'>
                        <TabBox>
                             <Icon name='' size={15} />
                            <TabFileName>Welcome</TabFileName>
                        </TabBox>
                    </Link>
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

export default WelcomeTaskbarComp;


const TabsTaskbarContainer = styled.nav`
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    background-color: #999999;
    border-bottom: 0.13rem solid #444444;
`

const TabBox = styled.div`
    display: flex;
    align-items: center;
    border-right: 1px solid purple;
    padding: 0.33rem 1.55rem; 

`

const TabFileName = styled.p`
    font-size: 1rem;
    padding-left: 5px;
`

const TabsCollection = styled.label`
    display: 

    :hover {
        cursor: pointer;
        box-shadow: 0px 3px 3px #e8e9ec;
    }
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