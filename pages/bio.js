import Head from "next/head";
import styles from "../styles/Home.module.scss";
import DisplayAreaLayoutComp from "../components/Layout/DisplayAreaLayout";
import CodeLinesComp from "../components/codelines/CodeLinesComp";
import { PageLayout } from "../components/Layout/PageLayout";
import BioComp from "../components/Bio_block/BioComp";
import HeadBlock from "../components/Meta/MetaComp";

export default function BioPage() {
  return (
    <div>
      <HeadBlock page_title="Bio" />

      <DisplayAreaLayoutComp
        stylepath="styles"
        filename="bio.css"
        filename_icon="cssIcon"
      >
        <PageLayout>
          <CodeLinesComp />
          <BioComp />
        </PageLayout>
      </DisplayAreaLayoutComp>
    </div>
  );
}
