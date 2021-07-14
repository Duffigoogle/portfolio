import Head from 'next/head';
import DisplayAreaLayoutComp from '../components/Layout/DisplayAreaLayout';
import CodeLinesComp from '../components/codelines/CodeLinesComp';
import FormComp from '../components/Form/FormComp';
import {PageLayout} from '../components/Layout/PageLayout';

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact |Tech-Portfolio</title>
        <meta name="description" content="Generated by TheLastGoodMan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <DisplayAreaLayoutComp pagepath='pages' filename='contact.js' filename_icon='javaScriptIcon'>
        <>
          <PageLayout>
              <CodeLinesComp />
              <h1>Contact Page</h1>
              <FormComp />
          </PageLayout>
        
        </>
      </DisplayAreaLayoutComp>


      
    </div>
  )
}

