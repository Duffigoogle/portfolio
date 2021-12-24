import Head from "next/head";
import styled from "styled-components";
import HomePageLayout from "../components/Layout/HomePageLayout";
import CodeLinesComp from "../components/codelines/CodeLinesComp";
import WelcomeComp from "../components/Welcome/Welcome";
import { useContext } from "react";
import { CalculateHeightContext } from "../context/index";
import { mediaQueries } from "../components/common/breakpoints";
import HeadBlock from "../components/common/MetaComp";

export default function Home() {
  const { elementRef } = useContext(CalculateHeightContext);

  return (
    <div>
      <HeadBlock page_title="Welcome" />
      <HomePageLayout>
        <StyledDiv ref={elementRef}>
          <CodeLinesComp />
          <WelcomeComp />
        </StyledDiv>
      </HomePageLayout>
    </div>
  );
}

//styled components for HomePage

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: #bfbfbf;

  ${mediaQueries("mobileM")`
      height: 100vh;
  `}
`;
