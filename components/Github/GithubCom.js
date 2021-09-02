import React from "react";
import Icon from "../common/icons/icons";
// import Image from "next/image";

const GithubPage = ({ userData, repoData }) => {
  console.log(userData);
  // const [userData, setUserData] = useState([]);

  return (
    <>
      <h1>Loading</h1>
      <div>
        <div>
          {/* <Image src={user.avatar_url}
            className=""
            alt={userData.login}
            width={50}
            height={50}
          /> */}
          <h3>{userData.login}</h3>
        </div>
        <div>
          <h3>{userData.public_repos} repos</h3>
        </div>
        <div>
          <h3>{userData.followers} followers</h3>
        </div>
      </div>

      <h2>6 Latest Updated Repositories</h2>
      <div>
        {repoData.map((repData) => (
          <RepoCard key={repData.id} repData={repData} />
        ))}
      </div>
    </>
  );
};

export default GithubPage;

const RepoCard = ({ repoData }) => {
  // const [repoData, setRepoData] = useState([]);

  return (
    <div>
      <div>
        <h3>{repoData.name}</h3>
        <p>{repoData.description}</p>
      </div>
      <div>
        <div>
          <div>
            <Icon name="WatchIcon" size={18} /> {repoData.watchers}
          </div>
          <div>
            <Icon name="ForkIcon" size={18} /> {repoData.forks}
          </div>
          <div>
            <Icon name="StartIcon" size={18} /> {repoData.forks}
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
