import styled from "styled-components";
import Icon from "../common/icons/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { mediaQueries } from "../common/breakpoints";

const WelcomeTaskbarComp = () => {
  const router = useRouter();

  const isCurrentPath = router.pathname === "/" || router.asPath === "/";

  return (
    <>
      <TabsTaskbarContainer>
        <TabsCollection>
          <Link href="/" passHref>
            <TabBox isCurrentPath={isCurrentPath}>
              <Icon name="VSCodeIcon" size={15} />
              <TabFileName>Welcome</TabFileName>
            </TabBox>
          </Link>
        </TabsCollection>
        <TabsTaskbarIcons>
          <Link href="#" passHref>
            <TabsIconBox>
              <Icon name="PlayButtonOutline" size={15} color="#e0e0e0" />
            </TabsIconBox>
          </Link>
          <Link href="#" passHref>
            <TabsIconBox>
              <Icon name="GitCompareIcon" size={15} color="#e0e0e0" />
            </TabsIconBox>
          </Link>
          <Link href="#" passHref>
            <TabsIconBox>
              <Icon name="TwoColumns" size={15} color="#e0e0e0" />
            </TabsIconBox>
          </Link>
          <Link href="#" passHref>
            <TabsIconBox>
              <Icon name="ThreeDots" size={15} color="#e0e0e0" />
            </TabsIconBox>
          </Link>
        </TabsTaskbarIcons>
      </TabsTaskbarContainer>
    </>
  );
};

export default WelcomeTaskbarComp;

const TabsTaskbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #999999;
  border-bottom: 0.13rem solid #444444;
`;

const TabBox = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid purple;
  padding: 0.33rem 1.55rem;
  background-color: ${({ isCurrentPath }) => (isCurrentPath ? "#1d1d1d" : "")};
  border-bottom: ${({ isCurrentPath }) =>
    isCurrentPath ? "2px solid orange" : ""};
  color: ${({ isCurrentPath }) => (isCurrentPath ? "orange" : "#000")};

  ${mediaQueries("mobileM")`
      padding: 0.25rem 1.25rem;  
      border-right: 1px solid #000;
    `}
`;

const TabFileName = styled.p`
  font-size: 1rem;
  padding-left: 5px;

  ${mediaQueries("mobileM")`
      font-size: 0.7rem;
  `}
`;

const TabsCollection = styled.label`
  &:hover {
    cursor: pointer;
    box-shadow: 0px 3px 3px #e8e9ec;
  }
`;

const TabsTaskbarIcons = styled.div`
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const TabsIconBox = styled.div`
  cursor: pointer;
`;
