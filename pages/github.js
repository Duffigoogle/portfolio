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

const GithubPage = ({ repos, user }) => {
  const { elementRef } = useContext(CalculateHeightContext);

  const contributionsTheme = {
    text: "red",
  };

  return (
    <div>
      <HeadBlock page_title="Github" />

      <DisplayAreaLayoutComp filename="github.json" filename_icon="jsonIcon">
        <>
          <PageLayout>
            <CodeLinesComp />
            <StyledDiv ref={elementRef}>
              <div>
                {/* <GithubSideComp user={user} /> */}
                <GitProfile>
                  <ImageBox>
                    {/* <Image
                      src={user.avatar_url}
                      alt={user.login}
                      width={110}
                      height={110}
                      priority
                    /> */}
                  </ImageBox>
                  <div>
                    <h2>{user.name}</h2>
                    <h3>
                      Hello &nbsp; <span>@{user.login},</span>
                    </h3>
                    <h3>
                      <Icon name="location" size={19} />
                      NG, {user.location}.
                    </h3>
                  </div>
                </GitProfile>

                <GithubDetails>
                  <section>
                    <h3>
                      Git Bio: <span>{user.bio}</span>
                    </h3>
                  </section>
                  <GitDetails>
                    <div>
                      <h3>{user.followers} followers</h3>
                    </div>
                    <div>
                      <h3>{user.following} following</h3>
                    </div>
                    <div>
                      <h3>{user.public_repos} repositories</h3>
                    </div>
                  </GitDetails>
                </GithubDetails>
              </div>

              <RepoCardSection>
                <h2>Some Repositories</h2>
                <RepoCollection>
                  {repos.slice(10, 25).map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                  ))}
                </RepoCollection>
                <GitHubCalendar
                  username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
                  theme={contributionsTheme}
                  blockMargin={2}
                  blockSize={20}
                />
              </RepoCardSection>
            </StyledDiv>
          </PageLayout>
        </>
      </DisplayAreaLayoutComp>
    </div>
  );
};

const StyledDiv = styled.div`
  height: 240vh;
  width: 100%;
  padding: 20px;
  background-color: #000;
  color: #e8e9ec;

  ${mediaQueries("tabletMax")`
      height: 300vh;
  `}
  ${mediaQueries("tablet")`
      height: 350vh;
      padding: 20px 10px;
  `}
  ${mediaQueries("mobileLXX")`
        height: 350vh;
        padding: 10px 0px;
  `}
  ${mediaQueries("mobileLX")`
        height: 360vh;
  `}
  ${mediaQueries("mobileM")`
        height: 350vh;
  `}
  ${mediaQueries("mobileS")`
        height: 360vh;
        padding: 0px;
  `}
`;

const GitProfile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px 0px 17px;

  div {
    text-align: center;
    h2 {
      font-size: 1rem;
      ${mediaQueries("mobileS")`
            font-size: 0.8rem;
      `}
    }
    h3 {
      font-size: 0.9rem;
      display: flex;
      justify-content: center;
      /* margin-right: 15px; */
      ${mediaQueries("mobileS")`
            font-size: 0.8rem;
      `}
      ${mediaQueries("mobileS")`
            // font-size: 0.8rem;
      `}

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
        ${mediaQueries("mobileS")`
            font-size: 0.7rem;
      `}
      }
    }
  }
`;

const ImageBox = styled.div`
  border-radius: 50%;
  border: 4px solid #000;
  overflow: hidden;
`;

const GithubDetails = styled.section`
  color: #fff;
  margin: 15px auto 55px;
  padding: 5px 8px;
  /* border: 1px solid green; */

  section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    max-width: 35rem;
    margin: 0 auto;

    h3 {
      font-size: 1rem;
      color: orangered;

      ${mediaQueries("mobileM")`
         font-size: 0.8rem;
     `}
      ${mediaQueries("mobileS")`
         font-size: 0.6rem;
     `}

      span {
        color: #fff;
        font-size: 0.8rem;
      }
    }
  }
`;

const GitDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid skyblue;
    border-radius: 6px;
    width: 12rem;
    height: 3rem;
    margin-bottom: 10px;

    h3 {
      font-size: 0.9rem;
      color: orange;
      text-align: center;
      /* margin: auto; */

      ${mediaQueries("mobileM")`
         font-size: 0.7rem;
     `}
      ${mediaQueries("mobileS")`
         font-size: 0.6rem;
     `}
    }
  }
`;

const RepoCardSection = styled.section`
  margin: 0px auto;

  h2 {
    color: orangered;
    font-size: 1.3rem;
    margin-left: 15px;
    text-decoration: underline;

    ${mediaQueries("tablet")`
      font-size: 1.1rem;
   `}
    ${mediaQueries("mobileLXX")`
      font-size: 1rem;

    `}
    ${mediaQueries("mobileM")`
      font-size: 0.9rem;
    `}
    ${mediaQueries("mobileS")`
      font-size: 0.7rem;
      font-weight: 800;
    `}
  }
`;

const RepoCollection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 5px auto;
  // border: 1px solid blue;
  justify-content: center;
  height: 100%;

  ${mediaQueries("laptop")`
      // width: 50rem;
  `}
  ${mediaQueries("tablet")`
      // width: 28.5rem;
  `}
  ${mediaQueries("mobileLXX")`
      // width: 21rem;
      // border: 1px solid yellow;
  `}
  ${mediaQueries("mobileLX")`
      width: 20rem;
      // border: 1px solid yellow;
  `}
  ${mediaQueries("mobileM")`
      width: 15.5rem;
  `}
  ${mediaQueries("mobileS")`
      width: 14rem;
  `}
`;

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
  );
  const user = await userRes.json();
  console.log(user)

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`
  );
  const repos = await repoRes.json();
  console.log(repos)


  return {
    props: { title: "GitHub", repos, user },
    revalidate: 10,
  };
}

export default GithubPage;
