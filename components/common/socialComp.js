import React from "react";
import Icon from "./icons/icons";
import styled from "styled-components";

const SocialsComp = () => {
  return (
    <SocialsContainer>
      <SocialsLink
        href="https://github.com/duffigoogle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="GithubIcon" size={20} color="#cec" />
      </SocialsLink>
      <SocialsLink
        href="https://twitter.com/duffygoogle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="twitter" size={20} color="skyblue" />
      </SocialsLink>
      <SocialsLink
        href="https://www.linkedin.com/in/caleb-duff/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="linkedin" size={20} color="#fff" />
      </SocialsLink>
    </SocialsContainer>
  );
};

export default SocialsComp;

//styled-components for SocialsComp

const SocialsContainer = styled.div`
  display: flex;
  /* border: 1px solid yellow; */
  min-height: 1.7rem;
  width: 6rem;
  justify-content: space-between;
  align-items: center;
`;

const SocialsLink = styled.a`
  text-decoration: none;

  &:hover {
    color: skyblue;
  }
`;
