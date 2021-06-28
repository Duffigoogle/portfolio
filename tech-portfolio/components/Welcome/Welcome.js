import Link from 'next/link';
import styled from 'styled-components';
import Icon from '../common/icons/icons'


const WelcomeComp = () => {
    return (
        <>
            <WelcomeCompContainer>
                <WeclomeHeading1>Welcome <br /> to my <br/><span>Tech-Portfolio</span></WeclomeHeading1>
                    <Link href="/bio">
                            <WelcomeButton>
                                Explore with joy {" "} <Icon name='ArrowRightCircleFill' size={25} color='#fff' />
                            </WelcomeButton>
                    </Link> 
            </WelcomeCompContainer>
        </>
    )
}

export default WelcomeComp;


// styled components for WelcomeComp

const WelcomeCompContainer = styled.div`
    width: 100%;
    border: 3px solid red;
    /* border: 2px border green; */

`

const WeclomeHeading1 = styled.h1`
    color: skyblue;
    font-weight: 800;
    font-size: 5rem;
    text-align: center;

`
const WelcomeButton = styled.button`
    border-radius: 15px;
    background-color: orange;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    /* box-shadow: ; */
    margin: 35px auto;
    outline: none;
    font-size: 1.2rem;
    /* width: 200px; */
`