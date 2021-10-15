import Head from "next/head";
import DisplayAreaLayoutComp from "../components/Layout/DisplayAreaLayout";
import CodeLinesComp from "../components/codelines/CodeLinesComp";
import { PageLayout } from "../components/Layout/PageLayout";
import styled from "styled-components";
import { CalculateHeightContext } from "../context/index";
import { useContext } from "react";
// import { mediaQueries } from "../components/common/breakpoints";
import HeadBlock from "../components/Meta/MetaComp";
import GameApp from "../components/Game/GameComp";

export default function GamesPage() {
  const { elementRef } = useContext(CalculateHeightContext);

  return (
    <div>
      <HeadBlock page_title="Game" />

      <DisplayAreaLayoutComp filename="game.md" filename_icon="markdownIcon">
        <>
          <PageLayout>
            <CodeLinesComp />
            <GistsContainer ref={elementRef}>
              <GameApp />
            </GistsContainer>
          </PageLayout>
        </>
      </DisplayAreaLayoutComp>
    </div>
  );
}

const GistsContainer = styled.main`
  background-color: #000;
  /* height: 85vh; */
  width: 100%;
`;
