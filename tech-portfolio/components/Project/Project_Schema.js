import React from "react";
import Icon from '../common/icons/icons';

export default function ProjectSchema({ id, title, description, github, live, stack, isPrivate }) {
  return (
            <ProjectContainer className={`box_container ${id%2 !== 0 ? 'box_container_pad' : ''}`}>
                <ProjectBox>
                        <ProjectDetails>
                            <ProjectTitle> {title} </ProjectTitle>
                            <ProjectStackSmall> {stack} </ProjectStackSmall>
                            <ProjectTextDescription> {description} </ProjectTextDescription>
                        </ProjectDetails>

                        <ProjectLinks>
                            <small>
                                <ProjectLink href={live} target="_blank" rel="noopener noreferrer">
                                    {/* <i className="far fa-eye"></i> Live{" "} */}
                                    <Icon name='eyeIcon' size={15} color='red' /> Live {" "}
                                </ProjectLink>
                            </small>

                            {isPrivate ? (
                                    ""
                                    ) : (
                                <small>
                                    <ProjectLink href={github} target="_blank" rel="noopener noreferrer">
                                        {" "}
                                        {/* <i className="fas fa-code-branch"></i> Code{" "} */}
                                        <Icon name='CodeIcon' size={15} color='red' /> Code {" "}
                                    </ProjectLink>
                                </small>
                            )}
                        </ProjectLinks>
                </ProjectBox>
            </ProjectContainer>

  )
};


//styled components for ProjectSchema

const ProjectContainer = styled.div`
    width: 49.3%;
    background-color: #16161a;
    margin: 0 0 1.4%;
    position: relative;
    transition: all 0.2s;
`

const ProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10%;
    flex-grow: 1;
    justify-content: space-between;
    cursor: default;
`

const ProjectDetails = styled.div`

`

const ProjectTitle = styled.h3`
    margin: 0;
    font-size: 1.3rem;
`

const ProjectStackSmall = styled.small`
    margin-bottom: 13px;
    font-size: smaller;
    color: grey;
`

const ProjectTextDescription = styled.p`
    font-size: 1rem;
    line-height: 2;
    color: #777778;
    height: 5rem;
    font-weight: 500;
`
const ProjectLink = styled.a`
    font-size: 0.8rem;
    line-height: 21px;
    color: inherit;
    text-decoration: none;
    margin-right: 0.8rem;
    color: grey;
`