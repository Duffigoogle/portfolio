import styled from "styled-components";
import Link from "next/link";
import SocialsComp from "../Socials/socialComp";
import Icon from "../common/icons/icons";
import { useContext } from "react";
import { CalculateHeightContext } from "../../context/index";
// import { size, device } from "../common/breakpoints";
import { mediaQueries } from "../common/breakpoints";

const AboutComp = () => {
  const { elementRef } = useContext(CalculateHeightContext);

  return (
    <>
      <AboutContainer ref={elementRef}>
        <AboutContent>
          <AboutStack>
            <AboutStackText>Frontend Developer</AboutStackText>
          </AboutStack>
          <AboutDetails>
            <AboutHeading4>Hello there, I&apos;m</AboutHeading4>
            <AboutHeading1>
              <span> Duffigoogle.</span>{" "}
            </AboutHeading1>
            <AboutP>
              I <span>build value</span> through code. I like making{" "}
              <span>fun</span> and <span>interactive things</span> for the web.
            </AboutP>
            <AboutP>
              {" "}
              I&apos;m an <span>aesthetics custodian</span> for the
              web-user&apos;s interface and I love{" "}
              <span>building digital products</span>.
            </AboutP>
            <AboutPSmall>
              I also <span>Talk</span>, <span>Teach</span>, <span>Write </span>{" "}
              about Codes and <span>Tech</span>.
            </AboutPSmall>
            <SocialsComp />
          </AboutDetails>
        </AboutContent>
        <AboutButtonContainer>
          <Link href="/about" passHref>
            <WelcomeButton>
              Click to discover &nbsp;{" "}
              <Icon name="Arrowrightcircle" size={25} color="#fff" />
            </WelcomeButton>
          </Link>
        </AboutButtonContainer>
      </AboutContainer>
    </>
  );
};

export default AboutComp;

const AboutContainer = styled.div`
  width: 100%;
  /* height: calc(100vh - 30px - 39px); */
  height: 100%;
  border: 1px solid red;
  background-color: #000;
  color: #339989;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mediaQueries("laptop")`
      display: flex;
      justify-content: center;
      height: 100%;
  `}
`;

const AboutStack = styled.div`
  width: 35px;
  height: 345px;
  background-color: #8a9b68;
  border: none;
  box-shadow: 5px 0px 5px rgba(255, 255, 255, 0.4);
  padding-top: 5px;
  &:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }

  ${mediaQueries("laptop")`
      height: 265px;
  `}

  ${mediaQueries("tablet")`
      height: 300px;
  `}

  ${mediaQueries("mobileLX")`
      height: 250px;
  `}
  ${mediaQueries("mobileM")`
      height: 210px;
  `}
  ${mediaQueries("mobileS")`
      box-shadow: 3px 0px 5px rgba(255, 255, 255, 0.4);
  `}
`;

const AboutStackText = styled.h3`
  font-size: 1.3rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 5.5px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  transition: transform 0.2s;

  ${mediaQueries("laptop")`
      font-size: 1rem;
      letter-spacing: 4px;
  `}
  ${mediaQueries("tablet")`
      font-size: 1rem;
  `}
  ${mediaQueries("mobileLX")`
      font-size: 0.9rem;
  `}
  ${mediaQueries("mobileM")`
      font-size: 0.8rem;
      letter-spacing: 3px;
  `}
`;

const AboutContent = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 40rem;
  margin: 0 10px;

  ${mediaQueries("tablet")`
      max-width: 28rem;
  `}
  ${mediaQueries("mobileM")`
      margin: 0px 5px;
  `}
  ${mediaQueries("mobileS")`
      margin: 0px 2px;
  `}
`;

const AboutDetails = styled.div`
  padding-top: 0.5rem;
  border: 1px solid green;
  margin-left: 30px;

  ${mediaQueries("tablet")`
      margin-left: 20px;
  `}
  ${mediaQueries("mobileS")`
      margin-left: 12px;
  `}
`;

const AboutHeading4 = styled.h4`
  margin-bottom: 12px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  color: #fff;

  ${mediaQueries("laptop")`
      font-size: 0.8rem;
      letter-spacing: 1px;
  `}

  ${mediaQueries("tablet")`
      font-size: 0.8rem;
      letter-spacing: 1px;
  `}

  ${mediaQueries("mobileM")`
      font-size: 0.6rem;
      letter-spacing: 1px;
  `}
`;
const AboutHeading1 = styled.h1`
  font-weight: 800;
  font-size: 4rem;
  color: #09f755;

  ${mediaQueries("tablet")`
      font-size: 3rem;
  `}

  ${mediaQueries("mobileLX")`
      font-size: 2.2rem;
  `}

  ${mediaQueries("mobileM")`
      font-size: 1.5rem;
  `}
`;

const AboutP = styled.p`
  font-size: 1.3rem;
  margin-bottom: 8px;

  ${mediaQueries("laptop")`
      font-size: 1rem;
  `}
  ${mediaQueries("tablet")`
      font-size: 1rem;
  `}
  ${mediaQueries("mobileM")`
      font-size: 0.8rem;
  `}
  
  span {
    font-size: 1.4rem;
    color: #9b7d50;
    font-style: italic;
    letter-spacing: 0.3rem;

    ${mediaQueries("laptop")`
      font-size: 1.2rem;
    `}

    ${mediaQueries("tablet")`
      font-size: 1rem;
    `}
    
    ${mediaQueries("mobileLX")`
      font-size: 0.85rem;
    `}
    ${mediaQueries("mobileM")`
      font-size: 0.7rem;
    `}
  }
`;

const AboutPSmall = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin-top: 6px;
  color: #cec;

  ${mediaQueries("tablet")`
      font-size: 0.8rem;
  `}
  ${mediaQueries("mobileLX")`
     font-size: 0.7rem;
  `}
  ${mediaQueries("mobileM")`
     font-size: 0.6rem;
     margin-bottom: 5px;
  `}
`;

const AboutButtonContainer = styled.div`
  margin-top: 0.5rem;
`;

const WelcomeButton = styled.button`
  width: 280px;
  text-transform: uppercase;
  height: 45px;
  font-family: "Roboto", sans-serif;
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
  margin: 0px auto 35px;
  outline: none;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  ${mediaQueries("tablet")`
      width: 250px;
      height: 40px;
      font-size: 0.9rem;
      margin: 0;
  `}

  ${mediaQueries("mobileLX")`
      width: 200px;
      height: 35px;
      font-size: 0.8rem;
      letter-spacing: 1px;
      margin: 15px 0px;
  `}
  ${mediaQueries("mobileM")`
      width: 180px;
      height: 30px;
      font-size: 0.7rem;
      letter-spacing: 1px;
      margin: 15px 0px;
  `}

  ${mediaQueries("mobileS")`
      margin: 10px 0px;
  `}
`;
