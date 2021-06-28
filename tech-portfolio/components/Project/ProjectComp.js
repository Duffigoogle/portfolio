import projects from './Project_data';
import ProjectSchema from "./Project_Schema";

export default function ProjectComp() {
  return (
    <>
            <PortfolioWorksContainer>
                <PortfolioShowcase>
                    {projects.map((project, index) => (
                    <ProjectSchema key={index} {...project} id={index} />
                    ))}
                </PortfolioShowcase>

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
  )
};


//styled components for ProjectPageComp

const PortfolioWorksContainer = styled.div`
    display: flex;
  flex-direction: column;
  width: 100%;
`

const PortfolioShowcase= styled.div`
   display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`
