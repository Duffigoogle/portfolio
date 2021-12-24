import Head from "next/head";
import DisplayAreaLayoutComp from "../components/Layout/DisplayAreaLayout";
import CodeLinesComp from "../components/codelines/CodeLinesComp";
import AboutComp from "../components/Bio_block/AboutComp";
import { PageLayout } from "../components/Layout/PageLayout";
import HeadBlock from "../components/common/MetaComp";
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
