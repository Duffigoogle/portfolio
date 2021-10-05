import styled from "styled-components";
import Icon from "../common/icons/icons";
import { mediaQueries } from "../common/breakpoints";

const RepoCard = ({ repo }) => {
  return (
    <RepoCardContainer>
      <RepoDetails>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
      </RepoDetails>
      <RepoLinks>
        <div>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <Icon name="GithubIcon" size={17} color="orange" />
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
              <Icon name="LinkIcon" size={17} color="red" />
            </a>
          )}
        </div>
      </RepoLinks>
    </RepoCardContainer>
  );
};

export default RepoCard;

const RepoCardContainer = styled.main`
  width: 15rem;
  margin: 10px;
  background-color: #cec;
  box-shadow: 0.2rem -0.2rem 5px #848484;
  border-radius: 4px;
  color: #000;

  ${mediaQueries("laptop")`
    width: 13rem;
    `}
  ${mediaQueries("mobileLXX")`
      width: 9.5rem;
      margin: 6px;
    `}
  ${mediaQueries("mobileLX")`
      width: 9rem;
      margin: 5px;
    `}
  ${mediaQueries("mobileM")`
      width: 7rem;
    `}
  ${mediaQueries("mobileS")`
      width: 6.3rem;
    `}
`;
const RepoDetails = styled.section`
  text-align: center;
  h3 {
    font-weight: 800;
    color: #1d1d1d;

    ${mediaQueries("laptop")`
    font-weight: 900;
    font-size: 1rem;
    `}
    ${mediaQueries("mobileM")`
    font-size: 0.8rem;
    `}
  }
  p {
    font-size: 0.9rem;
    ${mediaQueries("laptop")`
      font-size: 0.8rem;
    `}
    ${mediaQueries("mobileM")`
      font-size: 0.7rem;
    `}
  }
`;
const RepoLinks = styled.section`
  text-align: center;
  a {
    display: inline-block;
  }
`;
