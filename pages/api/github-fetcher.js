// const { Octokit } = require("@octokit/rest");

// export default async (req, res) => {
//   const octokit = new Octokit({
//     auth: process.env.DEV_TO_API_KEY,
//   });

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

// const userData = await octokit.request(
//   `/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
// );

// const user = userData.data;

// const repoData = await octokit.request(
//   `/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?sort=created_at&per_page=6`
// );
// const repo = repoData.data;

//   return res.status(200).json({
//     stars: starsCount,
//     followers: followerCount,
//     starred: starredCount,
//     // userData: user,
//     // repoData: repo,
//   });
// };
