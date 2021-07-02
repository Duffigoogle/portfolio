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
    width: 81vw;
    border: 2px solid red;
    margin-top: 80px;
    /* height: 75vh; */

`

const WeclomeHeading1 = styled.h2`
    color: skyblue;
    font-weight: 800;
    font-size: 3.5rem;
    text-align: center;
    span {
        color: orange;
        font-size: 5rem;
        &:hover {
            color: orangered;
        }
    }

`
const WelcomeButton = styled.button`
    width: 280px;
    text-transform: uppercase;
    height: 45px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    background-color: #d1d3bd;
    color: #000;
    padding: 0 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* box-shadow: ; */
    margin: 60px auto 25px;
    outline: none;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    &:hover {
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
`