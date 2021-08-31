import styled from "styled-components";
import Link from "next/link";
import SocialsComp from "../Socials/socialComp";
import Icon from "../common/icons/icons";
import { useContext } from "react";
import { CalculateHeightContext } from "../../context/index";
import { CustomButton } from "../common/Button";

const AboutComp = () => {
  const { elementRef } = useContext(CalculateHeightContext);

  return (
    <>
      <AboutContainer ref={elementRef}>
        <AboutStack>
          <AboutStackText>Frontend Developer</AboutStackText>
        </AboutStack>
        <AboutContent>
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
              I&apos;m an <span>aesthetics custodian</span> for the web user&apos;s
              interface and I love <span>building digital products</span>.
            </AboutP>
            <AboutPSmall>
              I also <span>Talk</span>, <span>Teach</span>, <span>Write </span>{" "}
              about Codes and <span>Tech</span>.
            </AboutPSmall>
            <SocialsComp />
          </AboutDetails>
          <AboutButtonContainer>
            {/* <CustomButton
              type="primary"
              size="large"
              rounded="button-rounded"
              link="/bio"
              name="twitter"
              text="Say Hi"
            /> */}
            <Link href="/about">
              <WelcomeButton passHref>
                Click to discover &nbsp;{" "}
                <Icon name="Arrowrightcircle" size={25} color="#fff" />
              </WelcomeButton>
            </Link>
          </AboutButtonContainer>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default AboutComp;

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 6rem;
  /* border: 1px solid red; */
  background-color: #000;
  color: #339989;
  /* height: 90vh; */
`;

const AboutStack = styled.div`
  width: 35px;
  height: 350px;
  background-color: #8a9b68;
  border: none;
  box-shadow: 5px 0px 5px rgba(255, 255, 255, 0.4);
  padding-top: 10px;
  &:hover {
    background-color: whitesmoke;
    /* border: 1px solid orange; */
    cursor: pointer;
  }
`;

const AboutStackText = styled.h3`
  font-size: 1.3rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 5.5px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  transition: transform 0.2s;
`;

const AboutContent = styled.div`
  /* width: 60rem; */
  margin-left: 2.5rem;
`;

const AboutDetails = styled.div`
  padding-top: 0.5rem;
  width: 43rem;
`;

const AboutHeading4 = styled.h4`
  margin-bottom: 10px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  color: #fff;
`;
const AboutHeading1 = styled.h1`
  font-weight: 800;
  font-size: 4rem;
  color: #09f755;

  span {
    /* color: #942727; */
  }
`;

const AboutP = styled.p`
  font-size: 1.3rem;
  /* padding-bottom: 0.1rem; */

  span {
    font-size: 1.4rem;
    color: #9b7d50;
    font-style: italic;
    letter-spacing: 0.3rem;
    // underline
  }
`;

const AboutPSmall = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin-top: 6px;
  color: #cec;
`;

const AboutButtonContainer = styled.div`
  margin-top: 5rem;
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
  margin: 25px auto;
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
`;
