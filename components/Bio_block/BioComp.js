import styled from "styled-components";
import { useContext } from "react";
import { CalculateHeightContext } from "../../context/index";
import Image from "next/image";

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
  iv: "High attention to details",
  v: "Time Management",
  vi: "Good Sense of Humuor",
};

const Bio = ({
  style,
  text,
  person,
  replacer = null,
  space = 4,
  textColor,
}) => {
  return (
    <StyledObjBox style={style}>
      <pre
        style={{
          backgroundColor: "#000",
          padding: "0rem 0.3rem",
          color: `${textColor}`,
          borderRadius: "5px 5px 5px 5px",
          // boxShadow: "3px 5px 6px #f9f9f9",
          boxShadow: "0 8px 8px -4px lightblue",
          margin: "0 auto",
          // maxHeight: "11rem",
          // overflowY: "scroll",
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
            style={{ top: "0", right: "0", zIndex: "4" }}
            text="const person"
            person={person}
            textColor="#cf99c2"
          />
          <Bio
            style={{ top: "160px", left: "5", zIndex: "6" }}
            text="const personalSkills"
            person={personal_skills}
            textColor="#c93339"
          />
          <Bio
            style={{ bottom: "110px", right: "0", zIndex: "8" }}
            text="const hobbies"
            person={hobbies}
            textColor="#66c5e0"
          />
        </BioContent>
      </BioContainer>
    </>
  );
};

export default BioComp;

const BioContainer = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.2rem;
  /* margin: 1rem auto; */
  background-color: #000;
  height: 100vh;
`;
const BioContent = styled.div`
  width: 50%;
  height: 100vh;
  /* border: 1px solid red; */
  position: relative;
  /* display: flex;
  flex-direction: column;
  align-items: baseline; */
  overflow: hidden;
`;

const BioImage = styled.div`
  width: 50%;
  margin-top: -15px;
  /* border: 1px solid red; */
  position: relative;
`;

const StyledObjBox = styled.div`
  position: absolute;

  span {
    font-weight: bold;
    font-size: 1.3rem;
    /* color: orange; */
    color: #ccc;
  }
`;
