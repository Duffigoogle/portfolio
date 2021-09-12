import Link from "next/link";
import styled from "styled-components";
import Icon from "../common/icons/icons";
import { useRouter } from "next/router";
import { mediaQueries } from "../common/breakpoints";

const TabSchema = ({ filepath, Icon_name, file_name }) => {
  const router = useRouter();

  const isCurrentPath =
    router.pathname === filepath || router.asPath === filepath;

  return (
    <Link href={filepath} passHref>
      <TabBox isCurrentPath={isCurrentPath}>
        <Icon name={Icon_name} size={15} />
        <TabFileName isCurrentPath={isCurrentPath}>{file_name}</TabFileName>
      </TabBox>
    </Link>
  );
};

export default TabSchema;

// styled components for TabsSchema

const TabBox = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #000;
  padding: 0.33rem 1.55rem;
  background-color: ${({ isCurrentPath }) => (isCurrentPath ? "#1d1d1d" : "")};
  border-bottom: ${({ isCurrentPath }) =>
    isCurrentPath ? "2px solid orange" : ""};

  /* :hover {
        background-color: #5d5d5d;
        color: #fff;
    } */

  ${mediaQueries("tabletMax")`
      padding: 0.21rem 1.32rem;  
  `}
  ${mediaQueries("mobileLXX")`
      padding: 0.25rem 1.28rem;  
  `}
  ${mediaQueries("mobileM")`
      padding: 0.25rem 1.25rem;  
  `}
`;

const TabFileName = styled.p`
  font-size: 1rem;
  padding-left: 5px;
  color: ${({ isCurrentPath }) => (isCurrentPath ? "orange" : "#000")};

  ${mediaQueries("tabletMax")`
      font-size: 0.9rem;
  `}
  ${mediaQueries("mobileLXX")`
      font-size: 0.8rem;
  `}
  ${mediaQueries("mobileM")`
      font-size: 0.7rem;
  `}
`;
