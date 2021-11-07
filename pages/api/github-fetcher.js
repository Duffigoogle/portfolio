import { Octokit } from "@octokit/rest";
// import { request } from "@octokit/request"
// import { Octokit, App, Action } from "octokit";

export default async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.DEV_TO_API_KEY,
  });

  const userData = await octokit.request(
    `/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
  );

  //   const user = userData.data;

  const repoData = await octokit.request(
    GET`/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`
  );
  //   const repo = repoData.data;

  //   //
  //   const followers = await octokit.request(
  //     `/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/followers?per_page=100`
  //   );
  //   const followerCount = followers.data.length;

  //   //
  //   const stars = await octokit.request(
  //     `/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`
  //   );
  //   const starsCount = stars.data
  //     .filter((repo) => !repo.fork)
  //     .reduce((acc, item) => {
  //       return acc + item.stargazers_count;
  //     }, 0);

  //   //
  //   const reposStarred = await octokit.request(
  //     `/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/starred`
  //   );
  //   const starredCount = reposStarred.data.length;

  return res.status(200).json({
    // stars: starsCount,
    // followers: followerCount,
    // starred: starredCount,
    userData: userData,
    repoData: repoData,
  });
};
