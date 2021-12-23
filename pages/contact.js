import Head from "next/head";
import DisplayAreaLayoutComp from "../components/Layout/DisplayAreaLayout";
import CodeLinesComp from "../components/codelines/CodeLinesComp";
import ContactFormComp from "../components/Form/FormComp";
import { PageLayout } from "../components/Layout/PageLayout";
import styled from "styled-components";
import { useContext } from "react";
import { CalculateHeightContext } from "../context/index";
import { mediaQueries } from "../components/common/breakpoints";
import HeadBlock from "../components/Meta/MetaComp";

export default function ContactPage() {
  const { elementRef } = useContext(CalculateHeightContext);

  return (
    <div>
      <HeadBlock page_title="Contact" />

      <DisplayAreaLayoutComp
        pagepath="pages"
        filename="contact.js"
        filename_icon="javaScriptIcon"
      >
        <>
          <PageLayout height="100vh">
            <CodeLinesComp />
            <StyledDiv ref={elementRef}>
              <StyledSection>
                <h2>
                  <span>Get in Touch...</span>
                </h2>
                <p>Any question, feedback or remarks?</p>
                <p>Feel free to drop me a message!</p>
              </StyledSection>
              <ContactFormComp />
            </StyledDiv>
          </PageLayout>
        </>
      </DisplayAreaLayoutComp>
    </div>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  /* height: 100%; */
  min-height: calc(100vh - 80px);

  ${mediaQueries("tablet")`
      padding: 0 6px 70px;
  `}
  ${mediaQueries("mobileLXX")`
      display: block;
      height: 130vh;
  `}
  ${mediaQueries("mobileM")`
      height: 140vh;
  `}
`;

const StyledSection = styled.section`
  margin-right: 4rem;
  padding: 0.7rem;

  ${mediaQueries("mobileLXX")`
        margin: 7px 0px;
        text-align: center;
  `}
  ${mediaQueries("mobileM")`
        margin: 5px 0px;
        text-align: center;
  `}

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #d9dddc;
    letter-spacing: 3px;

    ${mediaQueries("tablet")`
        font-size: 2.1rem;
        letter-spacing: 1px;
    `}
    ${mediaQueries("mobileLX")`
        font-size: 1.9rem;
        color: green;
        letter-spacing: 2px;
    `}
    ${mediaQueries("mobileM")`
        font-size: 1.7rem;
        color: green;
        letter-spacing: 2px;
    `}
    ${mediaQueries("mobileS")`
        font-size: 1.5rem;
    `}
  }

  p {
    font-size: 0.9rem;
    letter-spacing: 1.3px;
    color: #eee;
    padding-left: 5px;

    ${mediaQueries("mobileS")`
        font-size: 0.8rem;
    `}
  }
`;
