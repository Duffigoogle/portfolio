import React from "react";
import Icon from "../common/icons/icons";
import styled from "styled-components";
import { mediaQueries } from "../common/breakpoints";

export default function ProjectSchema({
  id,
  title,
  description,
  github,
  live,
  stack,
  isPrivate,
}) {
  return (
    <ProjectContainer>
      <ProjectBox>
        <ProjectDetails>
          <ProjectTitle> {title} </ProjectTitle>
          <ProjectTextDescription> {description} </ProjectTextDescription>
          <ProjectStackSmall> {stack} </ProjectStackSmall>
        </ProjectDetails>

        <ProjectLinks>
          <small>
            <ProjectLink href={live} target="_blank" rel="noopener noreferrer">
              Live{" "}
              <Icon name="EyeIcon" size={20} color="red" className="icon" />
            </ProjectLink>
          </small>

          {isPrivate ? (
            ""
          ) : (
            <small>
              <ProjectLink
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Code{" "}
                <Icon name="CodeIcon" size={20} color="red" className="icon" />
              </ProjectLink>
            </small>
          )}
        </ProjectLinks>
      </ProjectBox>
    </ProjectContainer>
  );
}

//styled components for ProjectSchema

const ProjectContainer = styled.div`
  width: 78%;
  background-color: #16161a;
  margin: 1% auto 5%;
  position: relative;
  transition: all 0.2s;
  box-shadow: 0px 2px 7px lightblue;
  margin-top: 0.6rem;
`;

const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6%;
  flex-grow: 1;
  justify-content: space-between;
  cursor: default;

  ${mediaQueries("mobileLX")`
      // min-width: 18rem;
  `}
`;

const ProjectDetails = styled.div``;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #e0e0e0;

  ${mediaQueries("mobileM")`
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 1.2px;
  `}
`;

const ProjectStackSmall = styled.small`
  margin-bottom: 13px;
  font-size: smaller;
  color: #cf99c2;
`;

const ProjectTextDescription = styled.p`
  font-size: 1rem;
  line-height: 2;
  color: #777778;
  height: 5rem;
  font-weight: 500;
`;
const ProjectLink = styled.a`
  display: flex;
  font-size: 0.8rem;
  line-height: 1.4rem;

  text-decoration: none;
  margin-right: 0.8rem;
  color: #66c5e0;

  .icon {
    margin-left: 8px;
  }
`;
const ProjectLinks = styled.div`
  display: flex;
  /* align-items: center; */
  /* border: 1px solid red; */
`;
