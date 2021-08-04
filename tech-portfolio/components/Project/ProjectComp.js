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

        {/* <div className="go_button_container">
                    <Link to="/">
                    <button>
                        <span class="material-icons">arrow_left</span> Home
                    </button>
                    </Link>
                    <Link to="/contact">
                    <button>
                        Contact <span class="material-icons">arrow_right</span>
                    </button>
                    </Link>
                </div> */}
      </PortfolioWorksContainer>
    </>
  );
}

//styled components for ProjectPageComp

const PortfolioWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120vh;
`;
