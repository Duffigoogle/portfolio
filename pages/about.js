import Head from "next/head";
import DisplayAreaLayoutComp from "../components/Layout/DisplayAreaLayout";
import CodeLinesComp from "../components/codelines/CodeLinesComp";
import AboutComp from "../components/Bio_block/AboutComp";
import { PageLayout } from "../components/Layout/PageLayout";
import HeadBlock from "../components/Meta/MetaComp";
// import {useContext} from 'react';
// import { CalculateHeightContext } from "../utils/CalculateHeightContext";

export default function AboutPage() {
  // const {pageHeight, elementRef } = useContext(CalculateHeightContext)

  return (
    <div>
      <HeadBlock  page_title="About"/>

      <DisplayAreaLayoutComp
        pagepath="pages"
        filename="about.html"
        filename_icon="htmlIcon"
      >
        <PageLayout>
          <CodeLinesComp />
          <AboutComp />
        </PageLayout>
      </DisplayAreaLayoutComp>
    </div>
  );
}

// const MainPage = styled.main`
//     display: flex;
//     height: 84vh;
//     overflow-y: auto;
//     background-color: #616161;

//     /* width */ //the scrollbar
//     ::-webkit-scrollbar {
//     width: 10px;
//     }

//     // the buttons on the scrollbar (arrows pointing upwards and downwards).
//     ::-webkit-scrollbar-button {

//     }

//     /* Track */ // the track (progress bar) of the scrollbar NOT covered by the handle.
//     ::-webkit-scrollbar-track {
//         background: #f1f1f1;
//         box-shadow: inset 0 0 5px grey;
//         border-radius: 15px;
//     }

//     /* Track */ // the track (progress bar) NOT covered by the handle.
//     ::-webkit-scrollbar-track-piece {

//     }

//     // the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet.
//     ::-webkit-scrollbar-corner {

//     }

//     /* Handle */
//     ::-webkit-scrollbar-thumb {
//     background: #888;
//     border-radius: 15px;
//     }

//     /* Handle on hover */
//     ::-webkit-scrollbar-thumb:hover {
//     background: #555;
//     }
// `
