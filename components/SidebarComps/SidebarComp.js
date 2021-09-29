// import FormComp from "../Form/FormComp";
import SideBarTitleComp from "../SidebarComps/SideBarTitle";
import styled from "styled-components";
import Icon from "../common/icons/icons";
import useSWR from "swr";

export const SearchComp = () => {
  return (
    <>
      <SearchContainer>
        <SideBarTitleComp text="SEARCH" />
        <SearchInput>
          <input placeholder="Search" />
          <div>
            <Icon name="facebook" size={15} color="#fff" />
            <Icon name="twitter" size={15} color="#fff" />
            <Icon name="instagram" size={15} color="#fff" />
          </div>
        </SearchInput>

        <SearchReplace>
          <div>
            <input placeholder="Replace" />
            <Icon name="facebook" size={15} color="#fff" />
          </div>
          <Icon name="twitter" size={15} color="#fff" />
        </SearchReplace>
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.div`
  background-color: #444444;
  height: calc(100vh - 1.875rem - 1.3rem);
  min-height: calc(100vh - 1.875rem - 1.3rem);
`;

const SearchInput = styled.div`
  justify-content: space-between;
  background-color: #9e9e9e;
  margin: 0 7px;
  margin-top: 11px;
  max-width: 11rem;
  display: flex;

  input {
    background-color: inherit;
    max-width: 7rem;
    padding-left: 2px;
    outline: none;
    ::placeholder {
      font-size: 0.9rem;
      color: #fff;
    }
  }
  div {
    width: 4rem;
    display: flex;
    padding-right: 4px;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
  }
`;
const SearchReplace = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 12rem;
  margin: 0 7px;
  margin-top: 8px;

  div {
    display: flex;
    max-width: 10rem;
    padding-right: 4px;
    align-items: center;
    background-color: #9e9e9e;
    justify-content: space-between;
    /* background-color: red; */

    input {
      background-color: inherit;
      max-width: 9rem;
      padding-left: 2px;
      outline: none;

      ::placeholder {
        font-size: 0.9rem;
        color: #fff;
      }
    }
  }
`;

const CodeBaseContainer = styled.aside`
  background-color: #444444;
  height: calc(100vh - 1.875rem - 1.3rem);
  min-height: calc(100vh - 1.875rem - 1.3rem);
`;

const StyledUL = styled.ul`
  margin: 0.9rem 1rem;
`;

const StyledLI = styled.li`
  color: orange;
  letter-spacing: 0.12rem;
  display: flex;
  align-items: center;
  /* font-style: underline; */

  span {
    color: #fff;
    padding-right: 0.2rem;
  }
`;

export const CodeBaseComp = () => {
  return (
    <>
      <CodeBaseContainer>
        <SideBarTitleComp text="CODEBASE" />
        <StyledUL>
          <StyledLI>
            <Icon name="javaScriptIcon" size={15} color="#fff" />
            <span>- JAVASCRIPT</span>
          </StyledLI>
          <StyledLI>
            <Icon name="htmlIcon" size={15} color="#fff" />
            <span>- HTML5</span>
          </StyledLI>
          <StyledLI>
            <Icon name="cssIcon" size={15} />
            <span>-</span>CSS3
          </StyledLI>
          <StyledLI>
            <Icon name="sassIcon" size={15} />
            <span>-</span>SASS
          </StyledLI>
          <StyledLI>
            <Icon name="BootstrapIcon" size={15} />
            <span>-</span>BOOTSTRAP
          </StyledLI>
          <StyledLI>
            <Icon name="reactIcon" size={15} />
            <span>-</span>REACT
          </StyledLI>
          <StyledLI>
            <Icon name="NextJSIcon" size={15} />
            <span>-</span>NEXTjs
          </StyledLI>
          <StyledLI>
            <Icon name="styledComponentIcon" size={15} color="#fff" />
            <span>-</span>CSS-in-JS
          </StyledLI>
          <StyledLI>
            <Icon name="MaterialUIIcon" size={15} />
            <span>-</span>MATERIAL UI
          </StyledLI>
          <StyledLI>
            <Icon name="TailwindCSSIcon" size={15} />
            <span>-</span>TAILWINDCSS
          </StyledLI>
          <StyledLI>
            <Icon name="FireBaseIcon" size={15} />
            <span>-</span>FIREBASE
          </StyledLI>
        </StyledUL>
      </CodeBaseContainer>
    </>
  );
};

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }

export const GithubComp = () => {
  // const baseURL = 'https://api.github.com/duffigoogle';

  // const fetcher = baseURL => {
  //     fetch(baseURL, {
  //         headers: {
  //             'Authorization': 'token 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',
  //              'Accept' : 'application/vnd.github.v3+json'
  //          }})
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.log(error));
  //     console.log(data);
  // }

  // const { data, error } = useSWR(baseURL, fetcher)
  // // const { data, error } = useSWR('/api/user', fetch)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  return (
    <>
      <GitContainer>
        <SideBarTitleComp text="GITHUB" />
        <StyledSection>
          {/* <p>Git Username: <span>@{data.login}</span></p>
          <p>Name: <span>{data.name}</span></p>
          <p>Location: <span>{data.location}</span></p> 
          <p>Followers: <span>{data.followers}</span></p> 
          <p>following: <span>{data.following}</span></p> 
          <p>Public Repos: <span>{data.public_repos}</span></p>
          <p>Organizations: <span>{data.organizations_url}</span></p> */}
        </StyledSection>
      </GitContainer>
    </>
  );
};

const GitContainer = styled.aside`
  background-color: #444444;
  height: calc(100vh - 1.875rem - 1.3rem);
  min-height: calc(100vh - 1.875rem - 1.3rem);
`;

const StyledSection = styled.div`
  margin: 1.2rem 0.45rem;
`;

const StyledBox = styled.div`
  display: flex;
  margin-top: 1.5rem;

  p {
    color: orange;
    margin-left: 7px;
    font-size: 1.02rem;
    /* outline: 1; */
  }
`;

export const MailComp = () => {
  return (
    <>
      <ContactContainer>
        <SideBarTitleComp text="CONTACT" />
        <StyledSection>
          <StyledBox>
            <Icon name="mailIcon" size={22} color="orange" />
            <p>Duffdev001@gmail</p>
          </StyledBox>
          <StyledBox>
            <Icon name="twitter" size={22} color="orange" />
            <p>@Duffygoogle</p>
          </StyledBox>
          <StyledBox>
            <Icon name="GithubIcon" size={22} color="orange" />
            <p>@Duffigoogle</p>
          </StyledBox>
          <StyledBox>
            <Icon name="instagram" size={22} color="orange" />
            <p>@thelastgoodman</p>
          </StyledBox>
          {/* <StyledBox>
            <Icon name="StackoverflowIcon" size={22} color="orange" />
            <p>StackOverFlow:</p>
          </StyledBox>
          <StyledBox>
            <Icon name="StackoverflowIcon" size={22} color="orange" />
            <p>Hashnode</p>
          </StyledBox> */}
        </StyledSection>
      </ContactContainer>
    </>
  );
};

const ContactContainer = styled.aside`
  background-color: #444444;
  height: calc(100vh - 1.875rem - 1.3rem);
  min-height: calc(100vh - 1.875rem - 1.3rem);
`;

export const PluralSightComp = () => {
  return (
    <>
      <PluralsightContainer>
        <SideBarTitleComp text="PLURALSIGHT" />
        <div>
          <h6>Loading content...</h6>
        </div>
      </PluralsightContainer>
    </>
  );
};

const PluralsightContainer = styled.aside`
  background-color: #444444;
  height: calc(100vh - 1.875rem - 1.3rem);
  min-height: calc(100vh - 1.875rem - 1.3rem);

  div {
    color: #fff;
    padding: 5px;
  }
`;

// const searchQueryURL = 'https://api.github.com';

//     window.addEventListener('DOMContentLoaded', function(e) {
//       return fetch(searchQueryURL)
//       .then(result => result.json())
//       .then(response => console.log(response))
//       .catch(err => console.log(err))
//     });

// {
//     "current_user_url": "https://api.github.com/user",
//     "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
//     "authorizations_url": "https://api.github.com/authorizations",
//     "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
//     "commit_search_url": "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}",
//     "emails_url": "https://api.github.com/user/emails",
//     "emojis_url": "https://api.github.com/emojis",
//     "events_url": "https://api.github.com/events",
//     "feeds_url": "https://api.github.com/feeds",
//     "followers_url": "https://api.github.com/user/followers",
//     "following_url": "https://api.github.com/user/following{/target}",
//     "gists_url": "https://api.github.com/gists{/gist_id}",
//     "hub_url": "https://api.github.com/hub",
//     "issue_search_url": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
//     "issues_url": "https://api.github.com/issues",
//     "keys_url": "https://api.github.com/user/keys",
//     "label_search_url": "https://api.github.com/search/labels?q={query}&repository_id={repository_id}{&page,per_page}",
//     "notifications_url": "https://api.github.com/notifications",
//     "organization_url": "https://api.github.com/orgs/{org}",
//     "organization_repositories_url": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}",
//     "organization_teams_url": "https://api.github.com/orgs/{org}/teams",
//     "public_gists_url": "https://api.github.com/gists/public",
//     "rate_limit_url": "https://api.github.com/rate_limit",
//     "repository_url": "https://api.github.com/repos/{owner}/{repo}",
//     "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
//     "current_user_repositories_url": "https://api.github.com/user/repos{?type,page,per_page,sort}",
//     "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
//     "starred_gists_url": "https://api.github.com/gists/starred",
//     "user_url": "https://api.github.com/users/{user}",
//     "user_organizations_url": "https://api.github.com/user/orgs",
//     "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
//     "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
//   }

// {
//     "login": "Duffigoogle",
//     "id": 53083438,
//     "node_id": "MDQ6VXNlcjUzMDgzNDM4",
//     "avatar_url": "https://avatars.githubusercontent.com/u/53083438?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/Duffigoogle",
//     "html_url": "https://github.com/Duffigoogle",
//     "followers_url": "https://api.github.com/users/Duffigoogle/followers",
//     "following_url": "https://api.github.com/users/Duffigoogle/following{/other_user}",
//     "gists_url": "https://api.github.com/users/Duffigoogle/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/Duffigoogle/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/Duffigoogle/subscriptions",
//     "organizations_url": "https://api.github.com/users/Duffigoogle/orgs",
//     "repos_url": "https://api.github.com/users/Duffigoogle/repos",
//     "events_url": "https://api.github.com/users/Duffigoogle/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/Duffigoogle/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Caleb Duff",
//     "company": "TLGM",
//     "blog": "",
//     "location": "Africa",
//     "email": null,
//     "hireable": true,
//     "bio": "A CreativeManiac | Software Developer | Technical Writer | Google Developer Group | Tourist.",
//     "twitter_username": "duffygoogle",
//     "public_repos": 39,
//     "public_gists": 0,
//     "followers": 9,
//     "following": 13,
//     "created_at": "2019-07-19T11:06:01Z",
//     "updated_at": "2021-07-02T09:05:02Z"
//   }
