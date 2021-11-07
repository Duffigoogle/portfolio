import styled from "styled-components";
import HomePageLayout from "../components/Layout/HomePageLayout";
import CodeLinesComp from "../components/codelines/CodeLinesComp";
import { useContext } from "react";
import { CalculateHeightContext } from "../context/index";
import HeadBlock from "../components/Meta/MetaComp";
import DateTimeComp from "../components/DateTime/DateTimeComp";
// import GithubPage from "../components/Github/GithubCom";

// async function fetcher(...arg) {
//   const res = await fetch(...arg);

//   return res.json();
// }

// // const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { elementRef } = useContext(CalculateHeightContext);

  // const { data, error } = useSWR("/api/github-fetcher", fetcher);

  // if (error) return <div>An error has occurred.</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <div>
      <HeadBlock />

      <HomePageLayout>
        <StyledDiv ref={elementRef}>
          <CodeLinesComp />
          <DateTimeComp />
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
`;

// // import CodeLinesComp from "../components/codelines/CodeLinesComp";
// // import { useContext } from "react";
// // import { CalculateHeightContext } from "../context/index";
// // import GithubPage from "../components/Github/GithubCom";

// // export default function Home({ repoData, userData }) {
// //   const { elementRef } = useContext(CalculateHeightContext);

// //   useEffect(() => {
// //     console.log(userData);
// //   }, []);
// //   return (
// //     <div>
// //       <Head>
// //         <title>Home | Tech-Portfolio</title>
// //         <meta name="description" content="Generated by Duffigoogle" />
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>

// //       <HomePageLayout>
// //         <StyledDiv ref={elementRef}>
// //           <CodeLinesComp />
// //           <GithubPage repoData={repoData} userData={userData} />
// //         </StyledDiv>
// //       </HomePageLayout>
// //     </div>
// //   );
// // }

// // //styled components for HomePage

// // const StyledDiv = styled.div`
// //   height: 100%;
// //   width: 100%;
// //   display: flex;
// //   background-color: #bfbfbf;
// // `;

// // // const HomePageContainer = styled.main`
// // //   max-height: 100vh;
// // //   padding: 0 0.5rem;
// // //   width: 100%;
// // //   margin: 20px auto;
// // //   overflow: hidden;
// // // `;

// // // const gitHubUrl = "https://api.github.com/users/duffigoogle";

// // // This gets called at build time
// // export async function getStaticProps() {
// //   // const gitHubUrl = "https://api.github.com/users/duffigoogle";

// //   const response = await fetch(
// //     `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
// //   );
// //   const usData = await response.json();

// //   const resp = await fetch(
// //     `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?sort=created_at&per_page=6`
// //   );
// //   const reData = await resp.json();

// //   if (!usData || !reData) {
// //     return {
// //       notFound: true,
// //     };
// //   }

// //   // export async function getStaticProps(context) {
// //   //   return {
// //   //     props: { lingo: (await getAll()) ?? null },
// //   //   };
// //   // }

// //   return {
// //     props: {
// //       title: "GitHub",
// //       repoData: reData,
// //       userData: usData,
// //     }, // will be passed to the page component as props
// //     revalidate: 15,
// //   };
// // }
