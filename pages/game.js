import Head from "next/head";
import DisplayAreaLayoutComp from "../components/Layout/DisplayAreaLayout";
import CodeLinesComp from "../components/codelines/CodeLinesComp";
import { PageLayout } from "../components/Layout/PageLayout";
import styled from "styled-components";
import { CalculateHeightContext } from "../context/index";
import { useContext } from "react";
import { mediaQueries } from "../components/common/breakpoints";
import HeadBlock from "../components/common/MetaComp";
import GameApp from "../components/Game/GameComp";

export default function GamesPage() {
  const { elementRef } = useContext(CalculateHeightContext);

  return (
    <div>
      <HeadBlock page_title="Game" />

      <DisplayAreaLayoutComp filename="game.md" filename_icon="markdownIcon">
        <>
          <PageLayout height="100vh">
            <CodeLinesComp />
            <GameContainer ref={elementRef}>
              <GameApp />
            </GameContainer>
          </PageLayout>
        </>
      </DisplayAreaLayoutComp>
    </div>
  );
}

const GameContainer = styled.main`
  background-color: #000;
  width: 100%;
  color: #fff;
  /* border: 1px solid red; */
  overflow-y: auto;

  // width of the scrollbar
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

  h1 {
    font-weight: 900;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 700;
  }
  h2 {
    text-align: center;
    margin-top: 80px;
    font-weight: 700;
  }
  ${mediaQueries("laptop")`
    
`}

  ${mediaQueries("tabletMax")`
    // border: 1px solid #fff;
    
`}

${mediaQueries("mobileLXX")`
    width: calc(766px - 4.5rem);
`}
${mediaQueries("mobileLX")`
    width: calc(480px - 4.5rem);
`}
${mediaQueries("mobileL")`
    width: calc(425px - 4.5rem);
`}
${mediaQueries("mobileM")`
    width: calc(375px - 4.5rem);
`}
${mediaQueries("mobileS")`
    // overflow-y: auto;
    width: calc(320px - 4.5rem);
    // border: 1px solid red;
`}
`;
