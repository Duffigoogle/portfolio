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
      <BioContainer ref={elementRef}>
        <BioStack>
          <BioStackText>Frontend Developer</BioStackText>
        </BioStack>
        <BioContent>
          <BioDetails>
            <BioHeading1>
              Hello,<span> I'm Duffigoogle.</span>{" "}
            </BioHeading1>
            <BioP>
              I <span>build value</span> through code. I like making{" "}
              <span>fun</span> and <span>interactive things</span> for the web.
            </BioP>
            <BioP>
              {" "}
              I'm an <span>aesthetics custodian</span> for the web user's
              interface and I love <span>building digital products</span>.
            </BioP>
            <BioPSmall>
              I also <span>Talk</span>, <span>Teach</span>, <span>Write </span>{" "}
              about Codes and <span>Tech</span>.
            </BioPSmall>
            <SocialsComp />
          </BioDetails>
          <BioButtonContainer>
            {/* <CustomButton
              type="primary"
              size="large"
              rounded="button-rounded"
              link="/bio"
              name="twitter"
              text="Say Hi"
            /> */}
            <Link href="/about">
              <WelcomeButton>
                Check me out &nbsp;{" "}
                <Icon name="Arrowrightcircle" size={25} color="#fff" />
              </WelcomeButton>
            </Link>
          </BioButtonContainer>
        </BioContent>
      </BioContainer>
    </>
  );
};

export default AboutComp;

const BioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 7rem;
  /* border: 1px solid red; */
  height: 100vh;
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
`;

const BioStackText = styled.h3`
  font-size: 1.3rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  transition: transform 0.2s;
`;

const BioContent = styled.div`
  /* width: 60rem; */
  margin-left: 2.5rem;
`;

const BioDetails = styled.div`
  padding-top: 1rem;
  width: 43rem;
`;

const BioHeading1 = styled.h1`
  margin-bottom: 10px;
  font-weight: 800;
  font-size: 2rem;
  span {
    color: yellowgreen;
  }
`;

const BioP = styled.p`
  font-size: 1.6rem;
  padding-bottom: 0.4rem;

  span {
    font-size: 1.4rem;
    color: orange;
    font-style: italic;
    letter-spacing: 0.3rem;
    // underline
  }
`;

const BioPSmall = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin-top: 6px;
  color: #cec;
`;

const BioButtonContainer = styled.div`
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
  margin: 35px auto;
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
