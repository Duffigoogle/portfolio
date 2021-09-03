import Head from "next/head";
import DisplayAreaLayoutComp from "../components/Layout/DisplayAreaLayout";
import CodeLinesComp from "../components/codelines/CodeLinesComp";

export default function GithubPage() {
  return (
    <div>
      <Head>
        <title>Github | Tech-Portfolio</title>
        <meta name="description" content="Generated by TheLastGoodMan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DisplayAreaLayoutComp filename="github.json" filename_icon="jsonIcon">
        <>
          <CodeLinesComp />
          <h1>Github Page</h1>
        </>
      </DisplayAreaLayoutComp>
    </div>
  );
}