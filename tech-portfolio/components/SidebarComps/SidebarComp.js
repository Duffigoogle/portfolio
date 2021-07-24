// import FormComp from "../Form/FormComp";
import SideBarTitleComp from '../SidebarComps/SideBarTitle';
import styled from 'styled-components';
import Icon from '../common/icons/icons';
import useSWR from 'swr';



export const SearchComp = () => {
    return (
        <>
           <SearchInput>
                <input placeholder='Search'/>
                <div>
                    <Icon name='' size={20} color='#fff' />
                    <Icon name='' size={20} color='#fff' />
                    <Icon name='' size={20} color='#fff' />
                </div>
            </SearchInput> 

            <SearchReplace>
                <div>
                    <input placeholder='Replace'/>
                    <Icon name='' size={20} color='#fff' />
                </div>
                    <Icon name='' size={20} color='#fff' />
            </SearchReplace>
        </>
    )
}; 


const StyledUL = styled.ul`
    margin: 1rem 1.4rem;
`

const StyledLI = styled.li`
    color: orange;
    letter-spacing: 0.12rem;
    /* font-style: underline; */

    span {
        color: #fff;
        padding-right: 0.2rem;
    } 

`
 
export const CodeBaseComp = () => {
    return (
        <>
            <SideBarTitleComp text='CODEBASE' />
            <StyledUL>
                <StyledLI><span>-</span>JAVASCRIPT</StyledLI>
                <StyledLI><span>-</span>HTML5</StyledLI>
                <StyledLI><span>-</span>CSS3</StyledLI>
                <StyledLI><span>-</span>SASS</StyledLI>
                <StyledLI><span>-</span>BOOTSTRAP</StyledLI>
                <StyledLI><span>-</span>REACT</StyledLI>
                <StyledLI><span>-</span>NEXTjs</StyledLI>
                <StyledLI><span>-</span>CSS-in-JS</StyledLI>
                <StyledLI><span>-</span>MATERIAL UI</StyledLI>
                <StyledLI><span>-</span>TAILWINDCSS</StyledLI>
                <StyledLI><span>-</span>FIREBASE</StyledLI>
            </StyledUL>
        </>
    )
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
    // }
    
    // const { data, error } = useSWR(baseURL, fetcher)
    // // const { data, error } = useSWR('/api/user', fetch)

    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>

    return (
        <>
           <div>
                {/* <p>Git Username: @{data.login}</p>
                <p>Name: {data.name}</p>
                <p>Location: {data.location}</p> 
                <p>Followers: {data.followers}</p> 
                <p>following: {data.following}</p> 
                <p>Public Repos: {data.public_repos}</p>
                <p>Organizations: {data.organizations_url}</p> */}

            </div> 
        </>
    )
}; 


const StyledSection = styled.div`
    margin: 1.2rem 0.45rem;
`

const StyledBox = styled.div`
    display: flex;
    margin-top: 1.5rem;

    p {
        color: orange;
        margin-left: 7px;
        font-size: 1.02rem;
        /* outline: 1; */
    }
`

export const MailComp = () => {

    return (
        <>
            <SideBarTitleComp text='CONTACT' />
            <StyledSection>
                <StyledBox>
                    <Icon name='mailIcon' size={22} color='orange' />
                    <p>Duffdev001@gmail</p>
                </StyledBox>
                <StyledBox>
                    <Icon name='twitter' size={22} color='orange' />
                    <p>@Duffygoogle</p>
                </StyledBox>
                <StyledBox>
                    <Icon name='GithubIcon' size={22} color='orange' />
                    <p>@Duffigoogle</p>
                </StyledBox>
                <StyledBox>
                    <Icon name='instagram' size={22} color='orange' />
                    <p>@thelastgoodman</p>
                </StyledBox>
                <StyledBox>
                    <Icon name='StackoverflowIcon' size={22} color='orange' />
                    <p>StackOverFlow:</p>
                </StyledBox>
                <StyledBox>
                    <Icon name='StackoverflowIcon' size={22} color='orange' />
                    <p>Hashnode</p>
                </StyledBox>

            </StyledSection>
        </>
                
    )
}; 
 

export const PluralSightComp = () => {
    return (
        <div>
            
        </div>
    )
}; 


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