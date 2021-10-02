import Image from "next/image";
import DisplayAreaLayoutComp from "../components/Layout/DisplayAreaLayout";
import CodeLinesComp from "../components/codelines/CodeLinesComp";
import HeadBlock from "../components/Meta/MetaComp";
import { PageLayout } from "../components/Layout/PageLayout";
import { useContext } from "react";
import { CalculateHeightContext } from "../context/index";
import RepoCard from "../components/Github/RepoCard";
import styled from "styled-components";
import Icon from "../components/common/icons/icons";
import GitHubCalendar from "react-github-calendar";
import { mediaQueries } from "../components/common/breakpoints";
import { GithubSideComp } from "../components/SidebarComps/SidebarComp";
// import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const { elementRef } = useContext(CalculateHeightContext);

  const contributionsTheme = {
    text: "red",
  };

  return (
    <div>
      <HeadBlock />

      <DisplayAreaLayoutComp filename="github.json" filename_icon="jsonIcon">
        <>
          <PageLayout>
            <CodeLinesComp />
            <StyledDiv ref={elementRef}>
              <div>
                {/* <GithubSideComp user={user} /> */}
                <GitProfile>
                  <div>
                    <h3>
                      Hello <span>@{user.login},</span>{" "}
                    </h3>
                    <Image
                      src={user.avatar_url}
                      alt={user.login}
                      width={50}
                      height={50}
                    />
                  </div>
                </GitProfile>

                <GithubDetails>
                  <div>
                    <h3>
                      <Icon name="personcircle" size={17} /> {user.name}
                    </h3>
                    <h3>
                      <Icon name="location" size={17} /> {user.location}
                    </h3>
                    <h3>{user.followers} followers</h3>
                    <h3>{user.following} following</h3>
                    <h3>{user.public_repos} repos</h3>
                    {/* <h3> Org: {user.organizations_url} </h3> */}
                  </div>
                  <div>
                    <h3>Git Bio: {user.bio}</h3>
                  </div>
                </GithubDetails>
              </div>

              <RepoCardSection>
                <h2>Updated Repositories</h2>
                <RepoCollection>
                  {repos.slice(10, 25).map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                  ))}
                </RepoCollection>
              </RepoCardSection>
              <GitHubCalendar
                username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
                theme={contributionsTheme}
                blockMargin={2}
                blockSize={20}
              />
            </StyledDiv>
          </PageLayout>
        </>
      </DisplayAreaLayoutComp>
    </div>
  );
};

const StyledDiv = styled.div`
  height: 170vh;
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #e8e9ec;

  /* ${mediaQueries("laptop")`
      // width: 100%;
      margin: 10px auto;
      padding: 0px 8px;
  `} */
  ${mediaQueries("tablet")`
      height: 270vh;
  `}
  ${mediaQueries("mobileLX")`
        height: 350vh;
        padding: 10px 0px;
  `}
  ${mediaQueries("mobileM")`
        height: 350vh;
  `}
`;

const GitProfile = styled.section`
  display: flex;
  justify-content: flex-end;
  background-color: #444444;
  margin: 10px 10px;
  /* color: #fff; */

  div {
    display: flex;
    align-items: flex-end;
    h3 {
      font-size: 0.9rem;
      margin-right: 15px;

      span {
        color: orangered;
        font-size: 1.1rem;
        ${mediaQueries("mobileLX")`
            font-size: 1rem;
            font-weight: 800;
       `}
        ${mediaQueries("mobileM")`
            font-size: 0.9rem;
      `}
      }
    }
  }
`;
const GithubDetails = styled.section`
  margin: 20px auto;
  padding: 0px 10px;
  /* background-color: #9e9e9e; */
  color: #fff;
  display: flex;

  ${mediaQueries("laptop")`
         padding: 0px 15px;
  `}
  ${mediaQueries("mobileLX")`
         padding: 0px 10px;
  `}
  ${mediaQueries("mobileM")`
         padding: 0px 5px;
  `}

  div {
    width: 50%;

    h3 {
      font-size: 1rem;
      display: flex;
      margin-left: 10px;

      ${mediaQueries("mobileM")`
         font-size: 0.8rem;
     `}

      span {
        color: "orangered";
      }
    }
  }
`;

const RepoCardSection = styled.section`
  ${mediaQueries("tablet")`
      // border: 1px solid red;
    `}
  ${mediaQueries("mobileM")`
        
    `}
  h2 {
    color: orangered;
    font-size: 1.3rem;

    ${mediaQueries("tablet")`
      font-size: 1.1rem;
   `}
    ${mediaQueries("mobileLX")`
      font-size: 1rem;

    `}
    ${mediaQueries("mobileM")`
      font-size: 1rem;

    `}
  }
`;

const RepoCollection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 52rem;
  margin: 5px auto;

  ${mediaQueries("tablet")`
      width: 28.5rem;
  `}
  ${mediaQueries("mobileLX")`
      width: 20rem;
      // border: 1px solid yellow;
  `}
  ${mediaQueries("mobileM")`
      width: 18.5rem;
  `}
`;

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`
  );
  const repos = await repoRes.json();

  return {
    props: { title: "GitHub", repos, user },
    revalidate: 10,
  };
}

export default GithubPage;
