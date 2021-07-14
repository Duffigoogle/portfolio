import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import DisplayAreaLayoutComp from '../components/Layout/DisplayAreaLayout';
import CodeLinesComp from '../components/codelines/CodeLinesComp';
import {PageLayout} from '../components/Layout/PageLayout';


export default function ArticlePage() {
  return ( 
  <div>
      <Head>
        <title>Articles |Tech-Portfolio</title>
        <meta name="description" content="Generated by TheLastGoodMan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <DisplayAreaLayoutComp stylepath='styles' filename='articles.scss' filename_icon='sassIcon'>
          <PageLayout>
            <CodeLinesComp />
            <h1>Articles Page</h1>
          </PageLayout>
      </DisplayAreaLayoutComp>

    </div>
  )
}
