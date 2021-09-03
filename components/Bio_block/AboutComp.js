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
  height: calc(100vh - 30px - 39px);
  border: 1px solid red;
  background-color: #000;
  color: #339989;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* @media only screen and (${device.tablet}) {
    margin: 0 10px;
    background-color: red;
  } */
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

  ${mediaQueries("tablet")`
      height: 300px;
  `}

  ${mediaQueries("laptop")`
      height: 300px;
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

  ${mediaQueries("tablet")`
      font-size: 1rem;
  `}
  ${mediaQueries("laptop")`
      font-size: 1rem;
      letter-spacing: 4px;
  `}
`;

const AboutContent = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 40rem;

  ${mediaQueries("tablet")`
      max-width: 28rem;
  `}
`;

const AboutDetails = styled.div`
  padding-top: 0.5rem;
  border: 1px solid green;
  margin-left: 30px;

  ${mediaQueries("tablet")`
      margin-left: 20px;
  `}
`;

const AboutHeading4 = styled.h4`
  margin-bottom: 16px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  color: #fff;

  ${mediaQueries("tablet")`
      font-size: 0.8rem;
      letter-spacing: 1px;
  `}

  ${mediaQueries("laptop")`
      font-size: 0.8rem;
      letter-spacing: 1px;
  `}
`;
const AboutHeading1 = styled.h1`
  font-weight: 800;
  font-size: 4rem;
  color: #09f755;

  span {
    /* color: #942727; */
  }

  ${mediaQueries("tablet")`
      font-size: 3rem;
  `}
`;

const AboutP = styled.p`
  font-size: 1.3rem;
  padding-top: 0.2rem;

  span {
    font-size: 1.4rem;
    color: #9b7d50;
    font-style: italic;
    letter-spacing: 0.3rem;

    ${mediaQueries("tablet")`
      font-size: 1rem;
  `}
  }
  ${mediaQueries("tablet")`
      font-size: 1rem;
  `}
`;

const AboutPSmall = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin-top: 6px;
  color: #cec;

  ${mediaQueries("tablet")`
      font-size: 0.8rem;
  `}
`;

const AboutButtonContainer = styled.div`
  margin-top: 1rem;
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
  margin: 5px auto;
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
`;
