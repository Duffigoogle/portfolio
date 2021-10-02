import Head from "next/head";
import DisplayAreaLayoutComp from "../components/Layout/DisplayAreaLayout";
import CodeLinesComp from "../components/codelines/CodeLinesComp";
import { PageLayout } from "../components/Layout/PageLayout";
import styled from "styled-components";
import { CalculateHeightContext } from "../context/index";
import { useContext } from "react";
import { mediaQueries } from "../components/common/breakpoints";
import HeadBlock from "../components/Meta/MetaComp";

export default function GistsPage() {
  const { elementRef } = useContext(CalculateHeightContext);

  return (
    <div>
      <HeadBlock />

      <DisplayAreaLayoutComp filename="gists.md" filename_icon="markdownIcon">
        <>
          <PageLayout>
            <CodeLinesComp />
            <GistsContainer ref={elementRef}>
              <div>
                <h1>Gists Page</h1>
                <p>coming soon...</p>
              </div>
            </GistsContainer>
          </PageLayout>
        </>
      </DisplayAreaLayoutComp>
    </div>
  );
}

const GistsContainer = styled.main`
  background-color: #000;
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    h1 {
      font-size: 6rem;
      font-weight: 500;
      color: #bfbfbf;

      ${mediaQueries("tablet")`
        font-size: 3.8rem;
      `}

      ${mediaQueries("mobileLXX")`
        font-size: 3.5rem;
      `}

      ${mediaQueries("mobileM")`
        font-size: 3.2rem;
       
      `}

      ${mediaQueries("mobileS")`
        font-size: 2.7rem;
      `}
    }
    p {
      font-size: 2rem;
      text-align: center;
      color: #942727;

      ${mediaQueries("mobileLXX")`
        font-size: 1.6rem;
      `}
      ${mediaQueries("mobileM")`
        font-size: 1.4rem;
      `}

      ${mediaQueries("mobileS")`
        font-size: 1.2rem;
      `}
    }
  }
`;
