import styled from "styled-components";
import { useContext, useEffect } from "react";
import { CalculateHeightContext } from "../../context/index";
import Image from "next/image";
import { mediaQueries } from "../common/breakpoints";

const person = {
  First_Name: "Caleb Ini.",
  Last_Name: "Duff",
  Nickname: "Duffigoogle",
  Gender: "Male",
  Birth_Date: "29th Nov.",
};

const hobbies = {
  Sports: ["Chess", "Tennis", "Football"],
  Lifestyle: "Traveler",
  Creativity_Quotient: 10,
};

const personal_skills = {
  i: "Problem Solver",
  ii: "Excellent Communicator",
  iii: "Team Player",
  iv: "Attention to details",
  v: "Time Management",
  vi: "Good Sense of Humuor",
};

const Bio = ({
  style,
  text,
  person,
  replacer = null,
  space = 2,
  textColor,
}) => {
  return (
    <StyledObjBox style={style}>
      <pre
        style={{
          backgroundColor: "#000",
          padding: "0.5rem",
          color: `${textColor}`,
          borderRadius: "5px 5px 5px 5px",
          // boxShadow: "3px 5px 6px #f9f9f9",
          boxShadow: "0 8px 8px -4px lightblue",
          margin: "5px auto",
          // minWidth: "5rem",
        }}
      >
        <span>{text} = </span>
        <code>{JSON.stringify(person, replacer, space)}</code>
      </pre>
    </StyledObjBox>
  );
};

const BioComp = () => {
  const { elementRef } = useContext(CalculateHeightContext);

  return (
    <>
      <BioContainer ref={elementRef}>
        <BioImage>
          <Image
            src={require("../../public/img/potrait.png")}
            alt="sketch coloured portrait"
            intrinsic
          />
        </BioImage>
        <BioContent>
          <Bio
            text="const person"
            person={person}
            textColor="#cf99c2"
            style={{ alignItems: "center", alignSelf: "flex-end" }}
          />
          <Bio
            text="const personalSkills"
            person={personal_skills}
            textColor="#c93339"
            style={{ alignItems: "center", alignSelf: "flex-start" }}
          />
          <Bio
            text="const hobbies"
            person={hobbies}
            textColor="#66c5e0"
            style={{ alignItems: "center", alignSelf: "flex-end" }}
          />
        </BioContent>
      </BioContainer>
    </>
  );
};

export default BioComp;

const BioContainer = styled.main`
  display: flex;
  width: 100%;
  min-height: 125vh;
  background-color: #000;
`;

const BioContent = styled.div`
  /* width: 50%; */
  width: 30rem;
  display: flex;
  flex-flow: column nowrap;

  ${mediaQueries("laptop")`
      // width: 100%;
      margin: 10px auto;
      padding: 0px 8px;
  `}
  ${mediaQueries("tabletMax")`
      // width: 100%;
      margin: 10px auto;
  `}
  ${mediaQueries("mobileM")`
      // min-height: 100vh;
      margin: 5px;
  `}
`;

const BioImage = styled.div`
  width: 50%;
  margin-top: -7px;

  ${mediaQueries("laptop")`
      // margin-right: -180px;
      display: none;

  `}
`;

const StyledObjBox = styled.div`
  /* margin-top: 0.7rem; */
  /* border: 1px solid red; */
  /* max-width: 20rem; */
  margin-bottom: 0.7rem;

  pre {
    ${mediaQueries("tabletMax")`
     font-size: 0.9rem;
      width: 17rem;
  `}
    ${mediaQueries("mobileLX")`
      font-size: 1rem;
      width: 19rem;
    `}
    ${mediaQueries("mobileM")`
      font-size: 0.8rem;
      width: 16rem;
    `}
    ${mediaQueries("mobileS")`
      font-size: 0.7rem;
      width: 14.5rem;
      padding: 0 0.5rem;
    `}
  }

  span {
    font-weight: bold;
    font-size: 1.3rem;
    /* color: orange; */
    color: #ccc;

    ${mediaQueries("mobileLX")`
      font-size: 1rem;
    `}
    ${mediaQueries("mobileM")`
      font-size: 0.9rem;
    `}

    ${mediaQueries("mobileS")`
        font-size: 0.8rem;
    `}
  }
  &:hover {
    transform: scale(1.1);
  }
`;
