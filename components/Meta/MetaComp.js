import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function HeadBlock({ ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Caleb Duff - Developer, Program Lead, Writer, Creator",
    description: `I've been developing, teaching & writing codes for 3 years now. Get in touch with me to know more.`,
    image: "/favicon.ico",
    type: "website",
    ...customMeta,
  };
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="Keywords"
          content="Caleb Duff, Portfolio, Techfolio, Front-End Developer, Developer, Software Engineer, Nigeria."
        />
        <meta
          property="og:url"
          content={`https://duffigoogle-techfolio.vercel.app${router.asPath}`}
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://duffigoogle-techfolio.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="duffigoogle-techfolio.vercel.app"
        />
        <meta
          property="og:description"
          content="I'm a design oriented front-end developer based in Nigeria."
        />
        <meta property="og:title" content="Caleb Duff Techfolio" />
        <meta property="og:image" content={meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@duffygoogle" />
        <meta name="twitter:creator" content="@duffygoogle" />
        <meta name="twitter:title" content="duffigoogle-techfolio.vercel.app" />
        <meta
          name="twitter:description"
          content="I'm a design oriented front-end developer based in Nigeria."
        />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:app:country" content="NG" />
        {/* {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
      </Head>
      {/* <main>
        <div>{children}</div>
      </main> */}
    </>
  );
}
