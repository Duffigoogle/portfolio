import React from "react";
import Icon from '../common/icons/icons';
import styled from "styled-components";

const SocialsComp = () => {
  return (
    <SocialsContainer>
      <SocialsLink
        href="https://github.com/duffigoogle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name='Github' size={25} color='red' />
      </SocialsLink>
      <SocialsLink
        href="https://twitter.com/duffygoogle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name='Twitter' size={25} color='red' />
      </SocialsLink>
      <SocialsLink
        href="https://www.linkedin.com/in/caleb-duff/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name='Linkedin' size={25} color='red' />
      </SocialsLink>

    </SocialsContainer>
  );
};

export default SocialsComp;



//styled-components for SocialsComp

const SocialsContainer = styled.div`
    display: flex;
`

const SocialsLink = styled.a`
  text-decoration: none;
  &:hover {
    color: skyblue;
  }

`