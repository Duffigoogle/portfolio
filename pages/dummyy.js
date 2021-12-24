import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import HomePageLayout from "../components/Layout/HomePageLayout";
import CodeLinesComp from "../components/codelines/CodeLinesComp";
import { useContext } from "react";
import { CalculateHeightContext } from "../context/index";
import HeadBlock from "../components/common/MetaComp";
import ContactFormComp from "../components/Form/Form"

export default function Dummy() {
  const { elementRef } = useContext(CalculateHeightContext);

  return (
    <div>
      <HeadBlock />
      <HomePageLayout>
        <StyledDiv ref={elementRef}>
          <CodeLinesComp />
          <ContactFormComp />
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
  /* align-items: center; */
  /* justify-content: center; */
`;
