import styled from "styled-components";
import Image from "next/image";
import Icon from "../common/icons/icons";
import { mediaQueries } from "../common/breakpoints";

const FooterComp = () => {
  return (
    <FooterContainer>
      <LeftContent>
        <div>
          <Icon name="GitCompareIcon" size={14} color="#fff" />
          <p>main*</p>
        </div>
        <div>
          <Icon name="ErrorIcon" size={14} color="#fff" />
          <p>0</p> &nbsp;&nbsp;
          <Icon name="WarningIcon" size={14} color="#fff" />
          <p>0</p>
        </div>
      </LeftContent>
      <FooterLink
        href="https://www.github.com/duffigoogle/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developed by
        <FooterLogoSpan>Duffigoogle</FooterLogoSpan>
      </FooterLink>
      <FooterLink
        href="https://nextjs.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <FooterLogoSpan>
          NEXTjs
          {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={15} /> */}
        </FooterLogoSpan>
      </FooterLink>
      <RightContent>
        <div>
          <p>UTF-8</p>&nbsp;&nbsp;&nbsp;
          {/* <p>CRLF</p> */}
          {/* <Icon name="WatchIcon" size={14} /> */}
        </div>
        <div>
          <Icon name="CheckIcon" size={14} color="#fff" />
          <p>Prettier</p>
        </div>
        <div>
          <Icon name="BellIcon" size={14} color="#fff" />
        </div>
      </RightContent>
    </FooterContainer>
  );
};

export default FooterComp;

const FooterContainer = styled.footer`
  width: 100%;
  min-height: 1.458rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3f3f3f;
  color: #fff;
`;

const FooterLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  flex-wrap: wrap;

  ${mediaQueries("tablet")`
      font-size: 0.65rem;
  `}
`;

const FooterLogoSpan = styled.span`
  margin-left: 0.4rem;
  color: orange;
  font-weight: bold;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.7rem;

  ${mediaQueries("tablet")`
      margin-left: 0.4rem;
  `}

  div {
    display: flex;
    align-items: center;
    margin-right: 0.9rem;
    padding: 0px 0.5rem;

    ${mediaQueries("tablet")`
      margin-right: 0.3rem;
  `}

    :hover {
      background-color: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      padding: 0px 0.5rem;
    }

    p {
      font-size: 0.7rem;
      margin-left: 0.1rem;
    }
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.7rem;

  div {
    display: flex;
    align-items: center;
    margin-left: 1rem;

    p {
      font-size: 0.7rem;
    }
  }
`;
