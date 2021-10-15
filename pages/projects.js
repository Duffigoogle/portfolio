import Head from "next/head";
// import ProjectComp from '../components/Project/ProjectComp';
import {
  ProjectCollectionTwo,
  ProjectCollectionOne,
} from "../components/Project/ProjectComp";
import DisplayAreaLayoutComp from "../components/Layout/DisplayAreaLayout";
import CodeLinesComp from "../components/codelines/CodeLinesComp";
import { PageLayout } from "../components/Layout/PageLayout";
import styled from "styled-components";
import { mediaQueries } from "../components/common/breakpoints";
import HeadBlock from "../components/Meta/MetaComp";

export default function ProjectPage() {
  return (
    <div>
      <HeadBlock page_title="Projects" />

      <DisplayAreaLayoutComp
        pagepath="pages"
        filename="projects.jsx"
        filename_icon="reactIcon"
      >
        <StyledMain>
          <PageLayout>
            <CodeLinesComp />
            <ProjectCollectionOne />
          </PageLayout>

          <PageLayout>
            <CodeLinesComp />
            <ProjectCollectionTwo />
          </PageLayout>
        </StyledMain>
      </DisplayAreaLayoutComp>
    </div>
  );
}

const StyledMain = styled.main`
  display: flex;

  ${mediaQueries("mobileLX")`
      flex-direction: row;
      overflow-x: scroll;
  `}
  /* ${mediaQueries("mobileL")`
      flex-direction: column;
  `} */
  ${mediaQueries("mobileM")`
      flex-direction: row;
      overflow-x: scroll;

          /* width */ //the scrollbar
        ::-webkit-scrollbar {
          width: 5px;
        }

        // the buttons on the scrollbar (arrows pointing upwards and downwards).
        ::-webkit-scrollbar-button {
        }

        /* Track */ // the track (progress bar) of the scrollbar NOT covered by the handle.
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          box-shadow: inset 0 0 5px gray;
          border-radius: 15px;
        }

        /* Track */ // the track (progress bar) NOT covered by the handle.
        ::-webkit-scrollbar-track-piece {
        }

        // the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet.
        ::-webkit-scrollbar-corner {
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 15px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}
`;
