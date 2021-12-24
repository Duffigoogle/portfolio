import projects from "./Project_data";
import ProjectSchema from "./Project_Schema";
import styled from "styled-components";
import { useContext } from "react";
import { CalculateHeightContext } from "../../context/index";

export default function ProjectComp() {
  const { elementRef } = useContext(CalculateHeightContext);

  return (
    <>
      <PortfolioWorksContainer ref={elementRef}>
        {projects.map((project, index) => (
          <ProjectSchema key={index} {...project} id={index} />
        ))}
      </PortfolioWorksContainer>
    </>
  );
}

//styled components for ProjectPageComp

const PortfolioWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 140vh;
  background-color: #000;
`;

export const ProjectCollectionOne =() => {
    const { elementRef } = useContext(CalculateHeightContext);

  return (
    <>
      <PortfolioWorksContainer ref={elementRef}>
        {projects.slice(0, 3).map((project, index) => (
          <ProjectSchema key={index} {...project} id={index} />
        ))}
      </PortfolioWorksContainer>
    </>

  )
};


export const ProjectCollectionTwo =() => {
    const { elementRef } = useContext(CalculateHeightContext);

  return (
    <>
      <PortfolioWorksContainer ref={elementRef}>
        {projects.slice(3, 6).map((project, index) => (
          <ProjectSchema key={index} {...project} id={index} />
        ))}
      </PortfolioWorksContainer>
    </>

  )
}


