import styled from "styled-components";
import Link from 'next/link';
import SocialsComp from '../Socials/socialComp';
import Icon from '../common/icons/icons';

const BioComp = () => {
    return (
        <>
            <BioContainer>
                <BioStack>
                    <BioStackText>Frontend Developer</BioStackText>
                </BioStack>
                <BioContent>
                    <BioDetails>
                        <BioHeading1>Hello,<span> I'm Duffigoogle.</span> </BioHeading1>
                        <BioP>I <span>build value</span> through code. I like making <span>fun</span> and <span>interactive things</span> for the web.</BioP>
                        <BioP> I'm an <span>aesthetics custodian</span> for the web's User Interface and I love <span>building digital products</span>.</BioP>
                        <BioPSmall>I also <span>Talk</span>, <span>Teach</span> and <span>Write about Codes</span> and <span>Tech</span>.</BioPSmall>
                        <SocialsComp />
                    </BioDetails>
                    <BioButtonContainer>
                        <Link href="/about">
                            <WelcomeButton>
                                Check me out <Icon name='Arrowrightcircle' size={25} color='#fff' />
                            </WelcomeButton>
                        </Link>
                    </BioButtonContainer>
                </BioContent>
            </BioContainer>
        </>
    )
}

export default BioComp;


const BioContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 7rem;
    border: 1px solid red;
`;

const BioStack = styled.div`
    width: 35px;
    height: 300px;
    background-color: orange;
    border: none;
    box-shadow: 8px 5px 10px rgba(0, 0, 0, 0.4);
    padding-top: 10px; 
    &:hover {
        background-color: whitesmoke;
        /* border: 1px solid orange; */
        cursor: pointer;
    }
    
`

const BioStackText = styled.h3`
    font-size: 1.3rem;
    color: white;
    text-transform: uppercase;
    letter-spacing: 3px;
    writing-mode:vertical-lr;
    transform: rotate(180deg);
    
`

const BioContent = styled.div`
    width: 65vw;
    margin-left: 1rem;
`

const BioDetails = styled.div`
    padding-top: 1rem;
    /* border: 1px solid red; */
`;

const BioHeading1 = styled.h1`
    margin-bottom: 10px;
    font-weight: 800;
    font-size: 1.8rem;
    span {
        color: yellowgreen;
    }
    
`

const BioP = styled.p`
    font-size: 2rem;
    span {
        color: orange;
        font-style: italic;
    }
`

const BioPSmall = styled.p`
    font-size: 1rem;
    font-style: italic;
    margin-top: 10px;
`

const BioButtonContainer = styled.div`
        margin-top: 5rem;
`;


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
    margin: 35px auto;
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