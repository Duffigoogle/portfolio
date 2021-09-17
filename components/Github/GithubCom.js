import React from "react";
import Icon from "../common/icons/icons";

// import Image from "next/image";

// async function fetcher(...arg) {
//   const res = await fetch(...arg);

//   return res.json();
// }

// const GithubPage = ({ userData, repoData }) => {

//   const { userData } = useSWR('/api/github', fetcher);

//   if (error) return <div>failed to load</div>
//   if (!userData || !repoData) return <div>loading...</div>

//   console.log(userData);
//   // const [userData, setUserData] = useState([]);

//   return (
//     <>
//       <h1>Loading</h1>
//       <div>
//         <div>
//           {/* <Image src={user.avatar_url}
//             className=""
//             alt={userData.login}
//             width={50}
//             height={50}
//           /> */}
//           <h3>{userData.login}</h3>
//         </div>
//         <div>
//           <h3>{userData.public_repos} repos</h3>
//         </div>
//         <div>
//           <h3>{userData.followers} followers</h3>
//         </div>
//       </div>

//       <h2>6 Latest Updated Repositories</h2>
//       <div>
//         {repoData.map((repData) => (
//           <RepoCard key={repData.id} repData={repData} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default GithubPage;

const RepoCard = ({ repData }) => {
  return (
    <div>
      <div>
        <h3>{repData ? repData.name : "loading"}</h3>
        <p>{repData ? repData.description : "loading"}</p>
      </div>
      <div>
        <div>
          <div>
            <Icon name="WatchIcon" size={18} />{" "}
            {repData ? repData.watchers : "loading"}
          </div>
          <div>
            <Icon name="ForkIcon" size={18} />{" "}
            {repData ? repData.forks : "loading"}
          </div>
          <div>
            <Icon name="StartIcon" size={18} />{" "}
            {repData ? repData.stars : "loading"}
          </div>
        </div>
        {/* <div>
          <a href={repoData.html_url} target="_blank" rel="noopener">
            <GithubIcon height={20} width={20} />
          </a>
          {repo.homepage && (
            <a href={repoData.homepage} target="_blank" rel="noopener">
              <LinkIcon height={20} width={20} />
            </a>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default RepoCard;
